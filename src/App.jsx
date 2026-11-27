
import './App.css'


const skillGroups = [
  {
    title: 'Programming Languages',
    subtitle: 'Programming foundations',
    skills: ['Python', 'SQL']
  },
  {
    title: 'Agentic AI & Frameworks',
    subtitle: 'LLM orchestration and agent architectures',
    skills: [
      'LangChain', 'LangGraph', 'CrewAI',
      'Multi-Agent Orchestration', 'Supervisor-Worker',
      'ReAct', 'Sequential Agents', 'Human-in-the-Loop'
    ]
  },
  {
    title: 'Generative AI & LLM Platforms',
    subtitle: 'Language models and generative AI techniques',
    skills: [
      'OpenAI GPT-4o', 'Azure OpenAI', 'Claude', 'Llama 3',
      'RAG', 'Prompt Engineering', 'LLM Integration',
      'Text Generation', 'Semantic Search'
    ]
  },
  {
    title: 'Python Libraries & Vector Databases',
    subtitle: 'Data processing and vector retrieval',
    skills: [
      'Pandas', 'NumPy', 'Pydantic', 'Requests',
      'HTTPX', 'FAISS', 'ChromaDB'
    ]
  },
  {
    title: 'Backend, Data & Databases',
    subtitle: 'Application services and data integration',
    skills: [
      'FastAPI', 'REST APIs', 'Webhooks', 'JSON',
      'CSV', 'Excel', 'Document Processing',
      'PostgreSQL', 'MySQL'
    ]
  },
  {
    title: 'Tools & Testing',
    subtitle: 'Development tools and quality validation',
    skills: [
      'Git', 'GitHub', 'Docker', 'Linux',
      'PyTest', 'API Testing', 'Response Validation'
    ]
  }
]
const projects = [
  {
    number: '01',
    category: 'MANUFACTURING / INDUSTRIAL AI',
    title: 'Multi-Agent Smart Manufacturing & Factory Operations Automation Platform',
    overview:
      'An AI-assisted manufacturing operations platform designed to help factory teams retrieve production information, equipment guidance and quality documentation. The workflow supports production analysis, maintenance assistance and operational information retrieval for human review.',
    architecture:
      'LangGraph workflows coordinate production analysis, equipment issue support and quality-document retrieval. A RAG pipeline uses document chunking, embeddings and FAISS vector search across equipment manuals, standard operating procedures and maintenance documents. Retrieved context is connected to LLM response generation, with FastAPI services supporting internal application connectivity.',
    responsibilities: [
      'Developed Python and LangGraph workflow components for production analysis, maintenance support and quality-document retrieval.',
      'Implemented document chunking, embeddings and FAISS retrieval for equipment manuals, SOPs and maintenance information.',
      'Connected retrieved document context with LLM calls to generate responses grounded in manufacturing documentation.',
      'Built Pandas processing components and FastAPI endpoints for internal application connectivity and structured operational data.'
    ],
    stack: [
      'Python', 'LangGraph', 'LangChain', 'OpenAI GPT-4o',
      'RAG', 'FastAPI', 'FAISS', 'PostgreSQL',
      'Pandas', 'Pydantic', 'Sentence Transformers', 'Docker', 'Git', 'REST APIs'
    ],
    contribution: 'Contributed to reusable workflows connecting manufacturing queries, document retrieval and LLM-generated responses for human-reviewed operational support.',
    role: 'IT Trainee (AI Engineer)',
    company: 'Flextronics Pvt. Ltd.',
    vendor: 'Genius HR Tech',
    duration: 'May 2025 – May 2026'
  },
  {
    number: '02',
    category: 'MARKETING TECHNOLOGY / MARTECH',
    title: 'LLM-Powered Campaign Brief Intelligence & Content Generation Assistant',
    overview:
      'An LLM-powered marketing assistant for campaign brief analysis, initial content drafting and campaign summarization. The workflow organizes campaign objectives, audience information, product details and channel requirements for marketing-team review.',
    architecture:
      'Modular LangChain workflows process campaign information, support contextual analysis and generate content drafts and summaries. LLM API integration and refined prompt templates support marketing copy and summarization, while Python components and REST API integrations connect with internal marketing applications.',
    responsibilities: [
      'Assisted in developing Python components to organize campaign briefs and extract objectives, audience and channel information.',
      'Contributed LangChain workflows for campaign-brief summarization and first-draft marketing content suggestions.',
      'Supported LLM API integration and refined prompt templates for campaign summaries and marketing copy.',
      'Assisted with REST API integration, sample-input testing and response validation.'
    ],
    stack: [
      'Python', 'LangChain', 'OpenAI GPT-4', 'Prompt Engineering',
      'LLM Integration', 'RAG Fundamentals', 'FastAPI',
      'Pandas', 'JSON', 'REST APIs', 'Git'
    ],
    contribution: 'Contributed reusable prompt templates and structured campaign summaries to support marketing-team review.',
    role: 'Associate Engineer (Agentic AI Engineer)',
    company: 'Verticurl Pvt. Ltd.',
    vendor: 'TeamLease Services Ltd.',
    duration: 'August 2024 – November 2024'
  }
]

function App() {
  return (
    <div className="portfolio">

      <header className="navbar">
        <a href="#home" className="brand">
          RISHITHILAK M R<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Contact <span>↗</span>
        </a>
      </header>

      <main id="home" className="hero">
        <div className="hero-content">

          <div className="eyebrow">
            <span className="status-dot"></span>
            AI ENGINEERING · GENERATIVE AI · AGENTIC SYSTEMS
          </div>

          <p className="intro-label">HELLO, I'M</p>

          <h1>
            Rishithilak
            <span> M R.</span>
          </h1>

          <h2 className="hero-role">Agentic AI Engineer</h2>

          <p className="hero-specializations">
            Generative AI <i>·</i> LLM Applications <i>·</i> Intelligent Automation
          </p>

          <p className="hero-description">
            AI Engineer with 1 year 5 months of cumulative professional
            experience contributing to Generative AI applications across
            Manufacturing and Marketing Technology. I work with Python,
            LangChain, LangGraph, RAG pipelines, LLM integration and
            API development to build practical AI-powered solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore Projects <span>↗</span>
            </a>

            <a href="/resume.pdf" className="secondary-button" download="Rishithilak_MR_Resume.pdf">
              Download Resume <span>↓</span>
            </a>

<a
  href="https://www.linkedin.com/in/rishithilak-m-r-87b774451/"
  target="_blank"
  rel="noopener noreferrer"
  className="linkedin-button"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.55V9h3.569v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>

  <span>LinkedIn Profile</span>
  <span className="linkedin-arrow">↗</span>
</a>

          </div>

          <div className="tech-line">
            <span>CORE TECHNOLOGIES</span>
            <p>
              Python <i>·</i> LangChain <i>·</i> LangGraph
              <i>·</i> RAG <i>·</i> FastAPI
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src="/images/profile.png"
              alt="Rishithilak M R - Agentic AI Engineer"
            />
          </div>

          <div className="portrait-note">
            <span>AI ENGINEER</span>
            <span>MANUFACTURING · MARTECH</span>
          </div>
        </div>
      </main>

      <section className="experience-strip">
        <div className="experience-item">
          <h3>1 Year 5 Months</h3>
          <p>Cumulative Professional Experience</p>
        </div>
        <div className="experience-item">
          <h3>02</h3>
          <p>Industry Domains</p>
        </div>
        <div className="experience-item">
          <h3>LLM + RAG</h3>
          <p>Core AI Engineering Focus</p>
        </div>
        <div className="experience-item">
          <h3>Python</h3>
          <p>Programming & Backend</p>
        </div>
      </section>

      <section id="about" className="content-section">
        <p className="section-label">01 / ABOUT ME</p>
        <h2>
          Engineering practical solutions with
          <span> Generative AI.</span>
        </h2>

        <div className="about-grid">
          <p className="section-description">
            I am an AI Engineer with professional experience contributing
            to enterprise-oriented AI applications in manufacturing and
            marketing technology. My work involves building Python-based
            components, integrating large language models, developing
            retrieval workflows and connecting AI capabilities with
            application services.
          </p>

          <p className="section-description">
            I focus on making AI workflows useful and dependable through
            structured prompts, contextual document retrieval, workflow
            orchestration, API integration and response validation.
            I am particularly interested in Agentic AI, LLM applications
            and intelligent automation.
          </p>
        </div>
      </section>

      <section id="skills" className="content-section">
        <p className="section-label">02 / TECHNICAL EXPERTISE</p>
        <h2>
          Technologies I work <span>with.</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section">
        <p className="section-label">03 / PROFESSIONAL EXPERIENCE</p>
        <h2>
          Experience across <span>industry domains.</span>
        </h2>

        <div className="timeline">
          <article className="timeline-card">
            <div className="timeline-main">
              <p className="timeline-date">MAY 2025 — MAY 2026 · 1 YEAR 1 MONTH</p>
              <h3>IT Trainee (AI Engineer)</h3>
              <h4>Flextronics Pvt. Ltd.</h4>
              <p className="timeline-description">
                Contributed to LangGraph-based manufacturing AI workflows
                supporting production analysis, maintenance assistance and
                quality-document retrieval. Worked with RAG pipelines,
                FAISS vector search, LLM integration and FastAPI connectivity.
              </p>
              <div className="employment-meta">
                <span>Employment: Contract</span>
                <span>Vendor: Genius HR Tech</span>
              </div>
            </div>
            <span className="timeline-index">01</span>
          </article>

          <article className="timeline-card">
            <div className="timeline-main">
              <p className="timeline-date">AUGUST 2024 — NOVEMBER 2024 · 4 MONTHS</p>
              <h3>Associate Engineer (Agentic AI Engineer)</h3>
              <h4>Verticurl Pvt. Ltd.</h4>
              <p className="timeline-description">
                Assisted in developing LangChain-based LLM workflows for
                campaign brief analysis, marketing content generation and
                summarization. Contributed to prompt templates, Python
                processing, LLM API integration and REST API connectivity.
              </p>
              <div className="employment-meta">
                <span>Employment: Contract</span>
                <span>Vendor: TeamLease Services Ltd.</span>
              </div>
            </div>
            <span className="timeline-index">02</span>
          </article>
        </div>
      </section>

      <section id="projects" className="content-section">
        <p className="section-label">04 / SELECTED PROFESSIONAL WORK</p>
        <h2>
          Applied AI. <span>Real-world workflows.</span>
        </h2>

        <p className="section-description">
          Selected work from my professional experience, highlighting
          the business context, technical implementation and engineering
          contributions.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-heading">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <div className="project-context">
                <div>
                  <span>ORGANIZATION</span>
                  <strong>{project.company}</strong>
                </div>
                <div>
                  <span>ROLE</span>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <span>DURATION</span>
                  <strong>{project.duration}</strong>
                </div>
                <div>
                  <span>EMPLOYMENT</span>
                  <strong>Contract · {project.vendor}</strong>
                </div>
              </div>

              <div className="project-detail-grid">
                <div>
                  <h4>Project Overview</h4>
                  <p>{project.overview}</p>
                </div>
                <div>
                  <h4>Architecture & Implementation</h4>
                  <p>{project.architecture}</p>
                </div>
              </div>

              <div className="project-responsibilities">
                <h4>Key Responsibilities</h4>
                <ul>
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-stack">
                <h4>Technology Stack</h4>
                <div className="skill-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="project-contribution">
                <span>CONTRIBUTION</span>
                <p>{project.contribution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      
<section id="personal-projects" className="content-section">
  <p className="section-label">05 / INDEPENDENT DEVELOPMENT</p>
  <h2>
    Building beyond <span>professional work.</span>
  </h2>

  <div className="personal-grid personal-grid-single">
    <article className="personal-card">
      <span>AI-ASSISTED IT SUPPORT</span>
      <h3>SupportIQ</h3>
      <p>
        An AI-assisted IT support and incident investigation project
        exploring RAG-based troubleshooting, knowledge retrieval,
        agent workflows and automation using Flowise, CrewAI and n8n.
      </p>

      <div className="skill-tags">
        {['RAG', 'Flowise', 'CrewAI', 'n8n', 'Docker'].map(x =>
          <span key={x}>{x}</span>
        )}
      </div>

      <span className="project-status">
        Independent portfolio project
      </span>
    </article>
  </div>
</section>


      <section id="education" className="content-section education-section">
        <p className="section-label">06 / EDUCATION</p>
        <h2>Academic <span>background.</span></h2>

        <article className="education-card">
          <div>
            <p className="timeline-date">2020 — 2024</p>
            <h3>Bachelor of Engineering</h3>
            <h4>Electronics and Communication Engineering (ECE)</h4>
            <p>Sri Shakthi Institute of Engineering and Technology, Coimbatore</p>
          </div>
          <div className="education-score">
            <strong>7.45</strong>
            <span>CGPA</span>
          </div>
        </article>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-label">07 / CONTACT</p>
        <h2>Let's connect and discuss <span>AI engineering.</span></h2>
        <p>
          For AI engineering roles, technical collaborations and
          professional opportunities, feel free to reach out.
        </p>

        
<div className="contact-links">
  <a href="mailto:mrishithilak@gmail.com">
    <span>EMAIL</span>
    mrishithilak@gmail.com ↗
  </a>

  <a href="tel:+918056502387">
    <span>PHONE</span>
    +91 80565 02387 ↗
  </a>

  <a
    href="https://www.linkedin.com/in/rishithilak-m-r-87b774451/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>LINKEDIN</span>
    View Professional Profile ↗
  </a>
</div>

<a
  href="mailto:mrishithilak@gmail.com?subject=AI%20Engineering%20Opportunity"
  className="primary-button contact-button"
>
  Send an Email ↗
</a>
</section>
<footer className="footer">
  <a href="#home" className="brand">
    RISHITHILAK M R<span>.</span>
  </a>

  <p>© 2026 Rishithilak M R · AI Engineer</p>

  <a
    href="https://www.linkedin.com/in/rishithilak-m-r-87b774451/"
    target="_blank"
    rel="noreferrer"
    className="footer-link"
  >
    LinkedIn ↗
  </a>

  <a href="#home">Back to top ↑</a>
</footer>


    </div>
  )
}

export default App
