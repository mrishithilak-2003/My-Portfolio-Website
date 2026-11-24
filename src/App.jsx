
import './App.css'

const skillGroups = [
  {
    title: 'Programming & Backend',
    subtitle: 'Building application services and integrations',
    skills: ['Python', 'SQL', 'FastAPI', 'REST APIs', 'Webhooks', 'Pydantic']
  },
  {
    title: 'Generative AI & LLMs',
    subtitle: 'Developing LLM-powered applications',
    skills: ['LLM Integration', 'RAG', 'Prompt Engineering', 'Semantic Search', 'Text Generation']
  },
  {
    title: 'Agentic AI Frameworks',
    subtitle: 'Workflow orchestration and intelligent agents',
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'ReAct', 'Multi-Agent Workflows', 'Human-in-the-Loop']
  },
  {
    title: 'Models & Retrieval',
    subtitle: 'Model integration and vector retrieval',
    skills: ['OpenAI GPT-4o', 'Azure OpenAI', 'Claude', 'Llama 3', 'FAISS', 'ChromaDB']
  },
  {
    title: 'Data & Python Libraries',
    subtitle: 'Processing, validation and structured data',
    skills: ['Pandas', 'NumPy', 'Requests', 'HTTPX', 'PostgreSQL', 'MySQL', 'JSON', 'CSV']
  },
  {
    title: 'Tools & Engineering',
    subtitle: 'Development, testing and deployment workflows',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'PyTest', 'API Testing', 'Response Validation']
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

        <div className="personal-grid">
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
            <span className="project-status">Independent portfolio project</span>
          </article>

          <article className="personal-card">
            <span>AI-POWERED REQUEST MANAGEMENT</span>
            <h3>PolicyPilot</h3>
            <p>
              A Python-based employee request assistant exploring request
              classification, information summarization and next-step
              recommendations through FastAPI, Pydantic and SQLite.
            </p>
            <div className="skill-tags">
              {['Python', 'FastAPI', 'Pydantic', 'SQLite', 'REST APIs'].map(x =>
                <span key={x}>{x}</span>
              )}
            </div>
            <span className="project-status">Independent portfolio project</span>
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
  rel="noreferrer"
><
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
