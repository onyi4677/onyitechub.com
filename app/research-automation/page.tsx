import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = { title: "Research Automation | Onyitech JournalHub Ltd", description: "AI-assisted research workflow and scholarly communication technology in development.", alternates: { canonical: "/research-automation" }, openGraph: { url: "https://www.onyitechub.com/research-automation" } };

export const metadata = { title: "Research Automation | Onyitech JournalHub Ltd", description: "AI-assisted research workflow and scholarly communication technology in development.", alternates: { canonical: "/research-automation" }, openGraph: { url: "https://www.onyitechub.com/research-automation" } };

export const metadata = { title: "Research Automation | Onyitech JournalHub Ltd", description: "AI-assisted research workflow and scholarly communication technology in development.", alternates: { canonical: "/research-automation" }, openGraph: { url: "https://www.onyitechub.com/research-automation" } };

export default function ResearchAutomation() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero"><div className="wrap hero-grid"><div>
          <p className="eyebrow">PRODUCT VISION · IN DEVELOPMENT</p>
          <h1>Helping African researchers turn ideas into discoverable research.</h1>
          <p className="lede">Onyitech JournalHub is developing an AI-assisted research and project workspace to help researchers organize ideas, develop research work, improve academic communication and prepare scholarly outputs for greater visibility.</p>
          <div className="cta-row"><a className="btn-primary" href="/contact">Discuss the vision</a><a className="secondary-link" href="/about">About Onyitech JournalHub →</a></div>
        </div><div className="hero-card">
          <p className="card-label">FROM IDEA TO SCHOLARLY OUTPUT</p><h2>A workspace designed around the researcher&apos;s workflow.</h2>
          <div className="workflow"><div><span>01</span><strong>Research Idea</strong></div><div><span>02</span><strong>Research Planning</strong></div><div><span>03</span><strong>Evidence &amp; References</strong></div><div><span>04</span><strong>Manuscript / Project</strong></div><div><span>05</span><strong>Discovery &amp; Publication</strong></div></div>
          <p className="card-footer">AI assistance is intended to support researchers while keeping authorship, judgment and academic responsibility with people.</p>
        </div></div></section>
        <section className="intro"><div className="wrap intro-grid"><div><p className="eyebrow">THE PROBLEM</p><h2>Valuable research ideas deserve better digital support.</h2></div><div>
          <p>Researchers often work across disconnected documents, reference managers, search tools, project notes and publishing systems. We see an opportunity to bring these stages into a more coherent workspace.</p>
          <p>Our goal is to develop technology that helps researchers move from an initial idea to organized research and scholarly communication while improving the visibility and discoverability of African research.</p>
        </div></div></section>
        <section id="services"><div className="wrap"><div className="section-head"><div><p className="eyebrow">PLANNED CAPABILITIES</p><h2>AI assistance across the research workflow.</h2></div><p className="section-note">01 — 05</p></div>
          <div className="services-grid">
            <article className="service-card"><span className="service-number">01</span><h3>Idea Organization</h3><p>Turn rough research ideas into structured topics, questions, objectives, keywords and project components.</p></article>
            <article className="service-card"><span className="service-number">02</span><h3>Academic Language</h3><p>Assist with grammar, clarity, coherence, terminology and academic communication while preserving the researcher&apos;s meaning.</p></article>
            <article className="service-card"><span className="service-number">03</span><h3>Evidence &amp; Citations</h3><p>Help organize relevant information, references and citation context, with emphasis on traceable evidence rather than invented sources.</p></article>
            <article className="service-card"><span className="service-number">04</span><h3>Project Development</h3><p>Organize research questions, objectives, literature, methodology, results and other components within a coherent project workspace.</p></article>
            <article className="service-card"><span className="service-number">05</span><h3>Research Discovery</h3><p>Build toward tools and workflows that can make African research outputs easier to organize, communicate and discover.</p></article>
          </div></div></section>
        <section className="case-study"><div className="wrap case-grid"><div><p className="eyebrow">OUR VISION</p><h2>From research idea to greater visibility.</h2></div><div>
          <p>This platform is envisioned as a bridge between research development and academic publishing. It can complement the publishing infrastructure we already build for journals and research communities.</p>
          <p>Over time, the platform could connect research work with publication workflows, institutional repositories, scholarly metadata and other discovery pathways.</p>
          <p><strong>Status:</strong> Product concept and development roadmap. The capabilities described here are planned and may evolve as the platform is researched and built.</p>
        </div></div></section>
        <section className="paper-panel"><div className="wrap case-grid"><div><p className="eyebrow">BUILDING WITH RESPONSIBILITY</p><h2>AI should assist scholarship, not replace scholarly responsibility.</h2></div><div>
          <p>The platform is intended to help researchers work more efficiently, but researchers remain responsible for their claims, sources, interpretation, authorship and final submissions.</p>
          <p>Our development approach will prioritize transparency around AI assistance, source traceability, privacy, security and human review.</p>
        </div></div></section>
        <section className="contact-section"><div className="wrap contact-grid"><div><p className="eyebrow">PARTNERSHIPS &amp; R&amp;D</p><h2>We are building the next layer of Onyitech JournalHub.</h2><p>We welcome conversations with researchers, universities, publishers, technology partners and organizations interested in improving research workflows and the discoverability of African scholarship.</p><a className="btn-primary" href="/contact">Contact Onyitech JournalHub</a></div><div className="contact-details"><div><span>PLATFORM</span>app.onyitechub.com</div><div><span>FOCUS</span>Research Automation · AI · Scholarly Communication</div><div><span>STATUS</span>In development</div></div></div></section>
      </main><SiteFooter />
    </>
  );
}