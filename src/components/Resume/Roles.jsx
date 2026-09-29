import React from 'react';

const currentRole = {
  title: 'AI-Augmented Full-Stack / Product Engineer',
  stack: 'React • React Native • Node.js • TypeScript • PHP • MongoDB • PostgreSQL • Supabase • AWS • Cloudflare • AI APIs • AI Tools • Claude • OpenAI • Gemini',
  description:
    'Build digital products end-to-end using AI and modern development tools. Focus on turning ideas and user problems into functional products, rapidly experimenting, learning new technologies, and shipping improvements.',
};

const targetRoles = [
  {
    title: 'Full-Stack Software Engineer',
    focus: 'Market entry point',
    description:
      'Strong foundation in frontend, backend, and shipping production software — the practical entry point into product-building roles.',
  },
  {
    title: 'AI Product Engineer',
    focus: 'Frontend • Backend • APIs • Databases • AI',
    description:
      'Build and ship AI-powered products while working across frontend, backend, APIs, databases, and AI integrations.',
  },
  {
    title: 'Product Engineer',
    focus: 'Idea → Implementation',
    description:
      'Own product features from idea to implementation, combining development, UX, experimentation, debugging, and deployment.',
  },
  {
    title: 'Full-Stack AI Engineer',
    focus: 'LLMs • Agents • Automation',
    description:
      'Build full-stack applications and integrate LLMs, agents, automation, and AI-powered workflows.',
  },
  {
    title: 'AI-Native Product Builder',
    focus: 'Product thinking × Engineering',
    description:
      'Use AI development tools to prototype and ship products quickly, working between product thinking and engineering.',
  },
];

const growthStages = [
  {
    duration: '2 to 4 Years',
    title: 'Senior Product Engineer / Senior AI Product Engineer',
    focus: 'Depth over collecting languages',
    description:
      'Become someone who can independently take an ambiguous problem and go: Problem → idea → prototype → AI integration → product → production → iteration. Build depth rather than simply collecting programming languages.',
    accent: 'indigo',
  },
  {
    duration: '4 to 7 Years',
    title: 'Product Engineering Lead / AI Product Lead',
    focus: 'Hands-on leadership',
    description:
      'Lead product-building initiatives while remaining technically hands-on.',
    focusAreas: [
      'Product decisions',
      'AI adoption',
      'Architecture',
      'Rapid experimentation',
      'User experience',
      'Technical strategy',
      'Mentoring',
      'Shipping',
    ],
    accent: 'green',
  },
  {
    duration: '7+ Years',
    title: 'AI Product Builder / Founder',
    focus: 'Ownership & creation',
    description:
      'Build your own products or work with startups where you can have significant ownership over what gets built.',
    accent: 'emerald',
  },
];

const accentStyles = {
  indigo: {
    border: 'border-indigo-500',
    badge: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
    focus: 'text-indigo-600 dark:text-indigo-400',
    chip: 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300',
  },
  green: {
    border: 'border-green-500',
    badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    focus: 'text-green-600 dark:text-green-400',
    chip: 'bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-300',
  },
  emerald: {
    border: 'border-emerald-500',
    badge: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
    focus: 'text-emerald-600 dark:text-emerald-400',
    chip: 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
  },
};

export default function Roles() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Roles Goals</h2>

      {/* Current Role */}
      <div className="mb-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
        <p className="text-sm font-medium tracking-wide uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          Current focus
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {currentRole.title}
        </h3>
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
          {currentRole.stack}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {currentRole.description}
        </p>
      </div>

      {/* Target Roles */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 border-b-2 border-indigo-500 pb-2">
          Target roles
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetRoles.map((role, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {role.title}
              </h4>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                {role.focus}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Path */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-green-500 pb-2">
          Growth path
        </h3>
        <div className="space-y-6">
          {growthStages.map((stage, index) => {
            const styles = accentStyles[stage.accent];
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 ${styles.border} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-sm px-2 py-1 rounded-full ${styles.badge}`}>
                    {stage.duration}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stage.title}
                  </h4>
                </div>
                <p className={`text-sm font-medium mb-2 ${styles.focus}`}>
                  {stage.focus}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {stage.description}
                </p>
                {stage.focusAreas && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {stage.focusAreas.map((area) => (
                      <span
                        key={area}
                        className={`text-xs px-2.5 py-1 rounded-full ${styles.chip}`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Path Summary */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-green-50 dark:from-indigo-900/20 dark:to-green-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Career Path Summary
        </h4>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          <p>
            My career direction is toward becoming an AI-native product builder.
          </p>
          <p>
            My goal is to become increasingly effective at the complete product-building process: understanding problems, exploring ideas, prototyping, using AI and modern development tools, building functional products, testing them with users, learning from feedback, and continuously improving them.
          </p>
          <p>
            In the near term, I want to target roles such as Full-Stack Software Engineer, Product Engineer, AI Product Engineer, Full-Stack AI Engineer, and AI-Native Product Builder, while continuing to strengthen my technical foundation and learn the latest tools and approaches.
          </p>
          <p>
            In the longer term, I want to move toward Product Engineering Lead, AI Product Lead, and eventually AI Product Builder or Founder, where I can combine technology, AI, product thinking, creativity, and business to create products from idea to reality.
          </p>
          <p>
            The direction is not about moving away from technology. It is about using technology more effectively as a means to build products.
          </p>
        </div>
      </div>
    </section>
  );
}
