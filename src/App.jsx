function App() {
  const skills = [
    "Network Security",
    "Penetration Testing",
    "Cloud Security",
    "Threat Analysis",
    "Risk Management",
    "Python & Bash Scripting"
  ];

  const projects = [
    {
      title: "Vulnerability Scanner",
      description: "Built a Python-based tool to identify system vulnerabilities.",
    },
    {
      title: "Network Defense Lab",
      description: "Simulated attack-defense scenarios in a virtual environment.",
    },
    {
      title: "Threat Intelligence Dashboard",
      description: "Created a dashboard to monitor and analyze cyber threats.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">BABLA WANJIRA KARUGA</h1>
        <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">
          Cybersecurity Analyst
        </h2>
        <p className="max-w-2xl text-gray-300 mb-8">
          My journey into cybersecurity began with a simple curiosity about how systems work—and how they can be broken. That curiosity soon grew into a passion for protecting information and understanding the mindset of attackers.

Along the way, I’ve developed skills in analyzing threats, finding vulnerabilities, and strengthening defenses. But what really motivates me is the impact: knowing that my work helps people and organizations stay safe in a world where risks never stop evolving.

I enjoy problem-solving, learning new things every day, and tackling challenges that push me to grow. For me, cybersecurity isn’t just a career—it’s a responsibility, and a chance to make technology more secure and trustworthy for everyone.

        </p>
        <a
          href="#projects"
          className="bg-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a BSc Mathematics and Computer Science student 
          with a strong interest in cybersecurity. 
          My focus is on penetration testing, network defense, 
          and risk analysis. Ambitious and driven, 
          I aim to excel in the cybersecurity industry while 
          continuously learning and growing.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-xl shadow hover:scale-105 transition text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-6">
          Let’s connect! Reach me via email or LinkedIn.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="babzwan00@gmail.com"
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Email Me
          </a>
          <a
            href="www.linkedin.com/in/babla-w-karuga"
            target="_blank"
            className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;