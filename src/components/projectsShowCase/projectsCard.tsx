import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function ProjectTestimonials() {
  const testimonials = [
    {
      quote:
        "A full-stack web application that predicts personality type (introvert, extrovert, or ambivert) using AI/ML models.",
      name: "Introvert-Extrovert",
      designation: "Nextjs, Python, AI/ML, FastAPI, ShadcnUI, scikit-learn, numpy, pandas",
      github:"https://github.com/Amanbig/Introver-Extrovert",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "TomatoGuard AI is a comprehensive web application that uses Convolutional Neural Networks (CNN) to detect diseases in tomato plants.",
      name: "TomatoGuard AI",
      designation: "Nextjs, Python, AI/ML, FastAPI, ShadcnUI, numpy, Tensorflow",
      github:"https://github.com/Amanbig/CNN-based-Tomato-disease-prediction",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "A comprehensive machine learning-powered web application that provides intelligent crop recommendations based on soil and environmental parameters.",
      name: "Crop-recommendation-system",
      designation: "Nextjs, Python, AI/ML, FastAPI, ShadcnUI, xgboost, pandas, numpy",
      github:"https://github.com/Amanbig/crop-recommendation-system",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "A CLI tool to generate backend structures for Node.js applications with support for multiple databases and a visually appealing user interface.",
      name: "BackTool",
      designation: "NPM, Node.js, Express, MongoDB, PostgreSQL,Sqlite, MySQL",
      github:"https://github.com/Amanbig/backTool",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "It allows users to upload video or audio files, transcribe content, summarize it, ask contextual questions, and convert summaries to audio.",
      name: "Meetings Summarizer",
      designation: "Nextjs, Python, AI/ML, FastAPI, ShadcnUI, Groq API",
      github:"https://github.com/Amanbig/meetings_app",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Gem AI App is a versatile application that allows users to generate various types of creative content, including songs, stories, and paragraphs.",
      name: "Gem AI App",
      designation: "Flutter, Dart, AI/ML, Gemini API, Firebase",
      github:"https://github.com/Amanbig/Gemini_app",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB9fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
