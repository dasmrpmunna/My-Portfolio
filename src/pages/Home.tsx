import React from 'react';
import { ChevronDown, Database, Brain, BarChart2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">Munna Das</span>
                <br />
                Data Scientist
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Transforming complex data into actionable insights and building intelligent systems that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-gray-900"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-gray-900"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                <img 
                  src="/images/IMG_4288.jpg" 
                  alt="Munna Das" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-bounce bg-white dark:bg-gray-800 p-3 rounded-full shadow-md"
              aria-label="Scroll down"
            >
              <ChevronDown className="text-blue-600 dark:text-blue-400" size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-14 h-14 flex items-center justify-center">
                <Database className="text-blue-600 dark:text-blue-400 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Expert in extracting, cleaning, and analyzing large datasets to uncover patterns and insights.</p>
              <div className="space-y-3">
                <SkillBar name="Python" percentage={95} />
                <SkillBar name="SQL" percentage={90} />
                <SkillBar name="R" percentage={85} />
                <SkillBar name="Tableau" percentage={80} />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-14 h-14 flex items-center justify-center">
                <Brain className="text-purple-600 dark:text-purple-400 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Designing and implementing machine learning models to solve complex problems.</p>
              <div className="space-y-3">
                <SkillBar name="Scikit-Learn" percentage={90} />
                <SkillBar name="TensorFlow" percentage={85} />
                <SkillBar name="PyTorch" percentage={80} />
                <SkillBar name="NLP" percentage={75} />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="mb-4 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full w-14 h-14 flex items-center justify-center">
                <BarChart2 className="text-teal-600 dark:text-teal-400 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Visualization</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Transforming complex data into clear, compelling visual stories.</p>
              <div className="space-y-3">
                <SkillBar name="Matplotlib" percentage={90} />
                <SkillBar name="Seaborn" percentage={85} />
                <SkillBar name="Tableau" percentage={70} />
                <SkillBar name="PowerBI" percentage={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlight Section */}
      <section id="projects-section" className="py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A selection of my recent work in data science and machine learning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ProjectCard 
              title="Audio-Deepfake-Detection"
              description="Real-time audio deepfake detection app using TensorFlow and Flask. Upload a .wav file to check if its real or fake. Uses spectrogram features and a CNN model for classification."
              image="/images/dasmunna.png"
              tags={['Python', 'Scikit-Learn','TensorFlow/Keras','Librosa (for audio processing)', 'Flask', 'HTML','CSS','Git/GitHub']}
            />
            <ProjectCard 
              title="Predict-Crop-Production"
              description="🚀 Predict Crop Production is a Machine Learning project that helps farmers and agricultural experts determine the best crop to grow based on soil nutrients, temperature, humidity, pH, and rainfall.🌱 Using ML algorithms, it provides accurate predictions to optimize yield and sustainability.💡✨ 🚜🌾"
              image="/images/crop production.png"
              tags={['Python', 'Scikit-Learn', 'Flask', 'HTML','CSS','Git/GitHub']}
            />
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => {
                const appElement = document.getElementById('root');
                if (appElement) {
                  const event = new CustomEvent('setActivePage', { detail: 'projects' });
                  appElement.dispatchEvent(event);
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-gray-900"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <button 
            onClick={() => {
              const appElement = document.getElementById('root');
              if (appElement) {
                const event = new CustomEvent('setActivePage', { detail: 'contact' });
                appElement.dispatchEvent(event);
              }
            }}
            className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;