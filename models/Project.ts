import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: false,
  },
  supportReceived: {
    type: String,
    required: false,
  },
  outcome: {
    type: String,
    required: false,
  },
  images: [{
    type: String, 
    required: false,
  }],
  videos: [{
    type: String,
    required: false,
  }],
  feedback: {
    type: String,
    required: false,
  },
  featuredImage: {
    type: String, 
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;