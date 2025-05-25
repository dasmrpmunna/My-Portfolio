import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const categories = ['All', 'Machine Learning', 'Data Analysis', 'Visualization', 'NLP'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const projectsList = [

    {
      id: 1,
      title: 'Placement-Prediction-System',
      description: 'Placement Prediction System is a machine learning-based project that predicts student placement using a Random Forest Classifier. It takes academic and skill-based inputs and shows the result through a simple Flask-powered web app with an HTML/CSS frontend for user-friendly interaction.',
      image: '/images/2.png',
      categories: ['Machine Learning', '#'],
      technologies: ['Python', 'Scikit-Learn', 'Flask', 'HTML','CSS'],
      github: 'https://github.com/dasmrpmunna/Placement-Prediction-System',
      demo: '#',
      featured: true
    },

    {
      id: 2,
      title: 'Predict-Crop-Production',
      description: '🚀 Predict Crop Production is a Machine Learning project that helps farmers and agricultural experts determine the best crop to grow based on soil nutrients, temperature, humidity, pH, and rainfall.🌱 Using ML algorithms, it provides accurate predictions to optimize yield and sustainability.💡✨ 🚜🌾',
      image: '/images/crop production.png',
      categories: ['Machine Learning', '#'],
      technologies: ['Python', 'Scikit-Learn', 'Flask', 'HTML','CSS','Git/GitHub'],
      github: 'https://github.com/dasmrpmunna/Predict-Crop-Production',
      demo: 'https://predictcropproduction.onrender.com/',
      featured: true
    },

    {
      id: 3,
      title: 'Audio-Deepfake-Detection',
      description: 'Real-time audio deepfake detection app using TensorFlow and Flask. Upload a .wav file to check if its real or fake. Uses spectrogram features and a CNN model for classification.',
      image: '/images/dasmunna.png',
      categories: ['Machine Learning', 'NLP'],
      technologies: ['Python', 'Scikit-Learn','TensorFlow/Keras','Librosa (for audio processing)', 'Flask', 'HTML','CSS','Git/GitHub'],
      github: 'https://github.com/dasmrpmunna/Audio-Deepfake-Detection',
      demo: '#',
      featured: true
    },

    {
      id: 4,
      title: 'COOMING SOON... -Predictive Analytics Dashboard',
      description: 'Built an interactive dashboard for sales forecasting using machine learning algorithms and time-series analysis. The system provides accurate predictions and visualizations for business planning.',
      image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Machine Learning', 'Visualization'],
      technologies: ['Python', 'Scikit-Learn', 'Streamlit', 'Plotly'],
      github: 'https://github.com/dasmrpmunna',
      demo: '#',
      featured: true
    },
    {
      id: 6,
      title: 'COOMING SOON... -Natural Language Processing System',
      description: 'Developed a sentiment analysis tool for customer feedback that processes text data and provides actionable insights. The system uses advanced NLP techniques to analyze customer comments.',
      image: 'https://datasciencedojo.com/wp-content/uploads/Key-Challenges-in-Natural-Language-Processing-NLP.png',
      categories: ['NLP', 'Machine Learning'],
      technologies: ['Python', 'PyTorch', 'BERT', 'Flask'],
      github: 'https://github.com/dasmrpmunna',
      demo: '#',
      featured: true
    },
    {
      id: 7,
      title: 'COOMING SOON... -Customer Segmentation Analysis',
      description: 'Performed cluster analysis on customer data to identify distinct market segments. This helped in targeted marketing campaigns and personalized customer experiences.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Data Analysis', 'Machine Learning'],
      technologies: ['Python', 'K-means', 'Pandas', 'Seaborn'],
      github: 'https://github.com/dasmrpmunna',
      demo: '#',
      featured: false
    },
    {
      id: 8,
      title: 'COOMING SOON... -Interactive Data Visualization Platform',
      description: 'Created an interactive web application for data exploration and visualization. Users can upload their datasets and generate various types of visualizations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Visualization', 'Data Analysis'],
      technologies: ['D3.js', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/dasmrpmunna',
      demo: '#',
      featured: false
    },
    {
      id: 9,
      title: 'COOMING SOON... -Anomaly Detection System',
      description: 'Designed and implemented an anomaly detection system for identifying fraudulent transactions in financial data. The system uses ensemble methods to improve accuracy.',
      image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Machine Learning', 'Data Analysis'],
      technologies: ['Python', 'Isolation Forest', 'XGBoost', 'Pandas'],
      github: 'https://github.com/dasmrpmunna',
      demo: null,
      featured: false
    },
    {
      id: 10,
      title: 'COOMING SOON... -Text Summarization Tool',
      description: 'Built an automated text summarization tool that condenses long articles and documents into concise summaries while preserving key information and context.',
      image: 'https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['NLP'],
      technologies: ['Python', 'Transformers', 'BART', 'Flask'],
      github: 'https://github.com/dasmrpmunna',
      demo: '#',
      featured: false
    }
  ];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsList 
    : projectsList.filter(project => project.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          A collection of my work in data science, machine learning, and data visualization.
          Each project demonstrates different aspects of my technical skills and problem-solving abilities.
        </p>
        
        {/* Filter Categories */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No projects found in this category. Please select another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;