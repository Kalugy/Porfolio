import React from 'react';

const experience = [
  {
    company: 'Freelance',
    location: 'Remote',
    role: 'Software Developer',
    tasks: [
      'Ideated and initiated custom software solutions for clients',
      'Collaborated with clients to define requirements and technical strategy',
      'Delivered MVPs and prototypes based on client needs',
      'Code Full Stack functionalities, backend and frontend management',
      'Creating own personal projects to idea into a full application on market'
    ],
    date: '2024',
    isActive: true
  },
  {
    company: 'CannedHead',
    location: 'Remote',
    role: 'Full Stack Consultant',
    tasks: [
      'Developed and deployed new features to enhance the core product',
      'Improved application performance and user experience',
      'Collaborated closely with cross-functional teams to align on product goals'
    ],
    date: '2023-2024'
  },
  {
    company: 'BigPass Edenred',
    location: 'Remote',
    role: 'Jr Software Developer',
    tasks: [
      'Implemented new product features based on specifications',
      'Supported the development team in maintaining and debugging code',
      'Participated in Agile ceremonies and contributed to sprint planning'
    ],
    date: '2021-2022'
  },
  {
    company: 'Quind',
    location: 'Hybrid',
    role: 'DevOps Engineer',
    tasks: [
      'Built and maintained Full Stack features with DevOps best practices',
      'Automated CI/CD pipelines to improve deployment workflows',
      'Mentored junior developers on engineering and deployment practices'
    ],
    date: '2019-2020'
  }
];

const education = [
  {
    title: 'Junior Unity Developer',
    center: 'Generation Colombia',
    date: '2025'
  },
  {
    title: 'Computer Systems Engineering',
    center: 'Universidad Tecnológica de Pereira',
    date: '2014 - 2019'
  },
  {
    title: 'System Technician',
    center: 'Edutec',
    date: '2013 - 2014'
  },
  {
    title: 'Bachelor Specialist English Technician',
    center: 'Departamental High School',
    date: '2012'
  }
];

const certifications = [
  {
    title: 'Unity Essential',
    platform: 'Unity',
    date: 'May 2025',
    skills: ['Knowledge Acquisition']
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    platform: 'Amazon Web Services (AWS)',
    date: 'April 2025',
    credentialId: 'e0d4f96657584ff49b12dedb68f9eab7',
    skills: ['Amazon Web Services (AWS)']
  },
  {
    title: 'Modern React with Redux',
    platform: 'Udemy',
    instructor: 'Stephen Grider',
    date: 'December 2024'
  },
  {
    title: 'AWS Knowledge: Cloud Essentials',
    platform: 'Amazon Web Services (AWS)',
    date: 'October 2024'
  },
  {
    title: 'Aws, Soft skills, self development, and more',
    platform: 'Platzy',
    date: 'October 2024'
  },
  {
    title: 'PUCRS INNOVATION MARATHON EXTENSION COURSE',
    platform: 'Columbus Association',
    date: 'November 2024'
  },
  {
    title: 'WebML102: Google AI for JavaScript developers with TensorFlow.js',
    platform: 'EdX',
    date: 'November 2024',
    credentialId: '58de42f3b72d4016a7178eac435bba81'
  },
  {
    title: 'AWS Skills Centers: Becoming a Cloud Practitioner - Part 1',
    platform: 'Amazon Web Services (AWS)',
    date: 'October 2024'
  },
  {
    title: 'AWS Skills Centers: Becoming a Cloud Practitioner Lab Session',
    platform: 'Amazon Web Services (AWS)',
    date: 'October 2024'
  },
  {
    title: 'AWS Skills Centers: Exam Prep - AWS Certified Cloud Practitioner (CLF-C02)',
    platform: 'Amazon Web Services (AWS)',
    date: 'October 2024'
  },
  {
    title: 'AWS Knowledge: Cloud Essentials',
    platform: 'Amazon Web Services (AWS)',
    date: 'September 2024'
  },
  {
    title: 'AWS Skills Centers: Demystifying Generative AI',
    platform: 'Amazon Web Services (AWS)',
    date: 'September 2024',
    credentialId: 'SkkeWct0zkaI14pyPI_gWA2'
  },
  {
    title: 'Unity Junior Programmer',
    platform: 'Unity',
    date: 'February 2023',
    skills: ['Knowledge Acquisition']
  },
  {
    title: 'Back End Development and APIs',
    platform: 'freeCodeCamp',
    date: 'August 2022'
  },
  {
    title: 'EF SET English Certificate',
    platform: 'EF SET',
    score: '71/100 (C2 Proficient)',
    date: 'October 2021',
    skills: ['Knowledge Acquisition']
  },
  {
    title: 'Scrum Fundamentals Certified',
    platform: 'SCRUMstudy',
    date: 'October 2021',
    credentialId: '880821',
    skills: ['Sprint Planning', 'Agile Project Management', 'Product Management']
  }
];

const interests = [
  'Jogging',
  'Trekking',
  'Walking',
  'Gaming',
  'Music',
  'Anime'
];

const awards = [
  {
    title: 'PUCRS 2024',
    description: '1st Position Category Prevent environment disaster'
  },
  {
    title: 'UTP 2019',
    description: '1st Position Category Eggs'
  }
];

export default function Resume() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 py-12 mt-12">
      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.company} {exp.isActive && <span className="text-sm text-green-500">(Active)</span>}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{exp.location}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">{exp.date}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.center}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.platform}</p>
                  {cert.instructor && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">Instructor: {cert.instructor}</p>
                  )}
                  {cert.score && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">Score: {cert.score}</p>
                  )}
                  {cert.credentialId && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">Credential ID: {cert.credentialId}</p>
                  )}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Awards</h2>
        <div className="space-y-4">
          {awards.map((award, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{award.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{award.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </section>
  );
}
