import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { getAuthenticatedUser } from '@/lib/cookies';

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    
    return NextResponse.json(projects || []);
  } catch (error) {
    console.error('Error fetching projects:', error);
    
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await request.json();

    if (!body.title || !body.description) {
      return NextResponse.json(
        { error: 'Title and description are required fields' },
        { status: 400 }
      );
    }
    
    const project = new Project(body);
    await project.save();
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { message: 'Error creating project', error },
      { status: 500 }
    );
  }
}