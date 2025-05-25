import React from 'react';
import { Award, Book, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img 
                  className="h-full w-full object-cover md:h-full md:w-full" 
                  src="/images/IMG_4288.jpg" 
                  alt="Munna Das" 
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">Data Scientist & Machine Learning Expert</div>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm Munna Das, a passionate data scientist with expertise in machine learning and data analytics. 
                  I specialize in transforming complex data into meaningful insights and building intelligent systems that 
                  solve real-world problems.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  With a strong foundation in statistical methods and programming, I enjoy tackling challenging data problems 
                  and developing innovative solutions. I'm constantly learning and expanding my skills to stay at the forefront 
                  of this rapidly evolving field.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a 
                    href="/assets/Munna Das New Resume2.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-gray-900"
                  >
                    Download Resume
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/dasmrpmunna/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-lg border border-blue-600 dark:border-blue-400 transition-colors hover:bg-blue-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-gray-900"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Book className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
              Education
            </h2>
            <div className="space-y-6">
              {/* <EducationItem 
                degree="Ph.D. in Computer Science"
                institution="Stanford University"
                period="2018 - 2021"
                description="Specialized in Machine Learning and Artificial Intelligence. Research focused on advanced neural network architectures for time series prediction."
              />
              <EducationItem 
                degree="M.Sc. in Data Science"
                institution="MIT"
                period="2016 - 2018"
                description="Focused on statistical methods, machine learning, and big data technologies. Graduated with honors."
              /> */}
              <EducationItem 
                degree="B.Tech in Computer Science & Engineering"
                institution="Parul University"
                period="2022 - 2026"
                description="Foundation in computer science and Engineering, mathematics, and programming. Developed strong problem-solving skills and technical aptitude."
              />
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
              Work Experience
            </h2>
            <div className="space-y-6">
              {/* <ExperienceItem 
                position="Senior Data Scientist"
                company="Google AI"
                period="2021 - Present"
                description="Leading machine learning projects for predictive analytics. Developing AI solutions for business intelligence and process optimization."
                responsibilities={[
                  "Design and implement machine learning models for various business applications",
                  "Lead a team of data scientists and engineers in developing data-driven solutions",
                  "Collaborate with cross-functional teams to identify and address business challenges",
                  "Present findings and recommendations to executive leadership"
                ]}
              /> */}
              {/* <ExperienceItem 
                position="Data Scientist"
                company="Microsoft Research"
                period="2018 - 2021"
                description="Worked on natural language processing projects and recommendation systems."
                responsibilities={[
                  "Developed NLP models for text classification and sentiment analysis",
                  "Created recommendation algorithms that improved user engagement by 25%",
                  "Collaborated with product teams to integrate machine learning solutions",
                  "Published research papers in top-tier conferences"
                ]}
              /> */}
              {/* <ExperienceItem 
                position="Data Analyst Intern"
                company="Amazon"
                period="2017 - 2018"
                description="Analyzed customer behavior data to improve product recommendations."
                responsibilities={[
                  "Conducted exploratory data analysis on large datasets",
                  "Developed dashboards for visualizing key performance metrics",
                  "Assisted in A/B testing and statistical analysis",
                  "Created reports and presentations for stakeholders"
                ]}
              /> */}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
              Certifications & 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">"Data Visualization using Python and Tableau Certificate</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">Parul University, 2024</p>
                <p className="text-gray-600 dark:text-gray-300">Completed a course on Data Visualization using Python and Tableau, gaining skills in creating visualizations, analyzing data, and
building interactive dashboards.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Analysis with Python</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">IBM, 2024</p>
                <p className="text-gray-600 dark:text-gray-300">Completed the "Data Analysis with Python" course, learning to clean, analyze, and visualize data using Python libraries like Pandas,
Numpy and Matplotlib.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">SQL and Relational Databases 101</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">IBM 2023</p>
                <p className="text-gray-600 dark:text-gray-300">Completed the "SQL and Relational Databases 101" course, learning the basics of SQL, relational database concepts, and writing
queries to manage and retrieve data efficiently.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Kaggle Competition Winner</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">Kaggle, 2024</p>
                <p className="text-gray-600 dark:text-gray-300">First place in a predictive modeling competition with over 500 participants.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{degree}</h3>
          <div className="flex items-center mt-1 mb-3">
            <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{institution}</span>
          </div>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">
          {period}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-3">{description}</p>
    </div>
  );
};

interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ position, company, period, description, responsibilities }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{position}</h3>
          <div className="text-gray-700 dark:text-gray-300 font-medium mt-1 mb-3">{company}</div>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">
          {period}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Responsibilities:</h4>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;