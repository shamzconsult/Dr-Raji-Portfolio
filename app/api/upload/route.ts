import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    const allowedVideoTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/webm'];
    
    const isImage = allowedImageTypes.includes(file.type);
    const isVideo = allowedVideoTypes.includes(file.type);
    
    if (!isImage && !isVideo) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images and videos are allowed.' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'dr-raji-portfolio',
          resource_type: isVideo ? 'video' : 'image',
          quality: 'auto:good',
          
          transformation: isImage ? [
            {
              width: 1200,
              height: 800,
              crop: 'limit',
              quality: 'auto:good',
            }
          ] : undefined,
        },
        (error, result) => {
          if (error || !result) {
            console.error('Cloudinary Upload Error:', error);
            reject(new Error(error?.message || 'Cloudinary upload failed'));
          } else {
            resolve(result);
          }
        }
      );

      uploadStream.write(buffer);
      uploadStream.end();
    });

    return NextResponse.json({
      url: uploadResponse.secure_url,
      publicId: uploadResponse.public_id,
      resourceType: uploadResponse.resource_type,
      format: uploadResponse.format,
      bytes: uploadResponse.bytes,
    });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await cloudinary.api.ping();
    return NextResponse.json({ 
      message: 'Cloudinary is working correctly',
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      result 
    });
  } catch (error) {
    console.error('Cloudinary Configuration Error:', error);
    return NextResponse.json(
      { error: 'Cloudinary configuration failed. Check your credentials.' },
      { status: 500 }
    );
  }
}