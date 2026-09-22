import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "R&D | Onyitech JournalHub Ltd",
  description: "Research and development at Onyitech JournalHub Ltd in AI, machine learning, intelligent software and automation.",
};

export default function RnDPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap"><p className="eyebrow">RESEARCH &amp; DEVELOPMENT</p><h1>Exploring intelligent systems that can become useful software.</h1><p className="detail-lede">Our R&amp;D work is where we test architectures, data pipelines, models and automation patterns before applying the lessons to future products and client systems.</p></div></section>
    <section><div className="wrap two-column"><div><p className="eyebrow">PILLAR AI</p><h2>A modular AI/ML engineering project.</h2></div><div><p>Pillar AI explores a multi-layered architecture that combines machine learning, technical analysis, blockchain intelligence, news and sentiment signals, automated workflows and rule-based risk controls.</p><p>The engineering challenge is not a single model. It is the integration of multiple data sources and processing stages into a modular system that can collect information, transform it, generate signals and apply defined controls.</p></div></div></section>
    <section className="audience-section"><div className="wrap"><div className="section-head"><div><p className="eyebrow">SYSTEM AREAS</p><h2>What the research explores.</h2></div></div><div className="services-grid">
      <article className="service-card"><span className="service-number">01</span><h3>Data Intelligence</h3><p>Combining structured and unstructured information from multiple sources and transforming it into usable features and signals.</p></article>
      <article className="service-card"><span className="service-number">02</span><h3>Machine Learning</h3><p>Experimenting with model pipelines and complementary approaches to pattern recognition and decision support.</p></article>
      <article className="service-card"><span className="service-number">03</span><h3>Modular Architecture</h3><p>Separating data collection, intelligence, models, rules, APIs and operational components so systems can evolve independently.</p></article>
      <article className="service-card"><span className="service-number">04</span><h3>Automation &amp; Controls</h3><p>Connecting model outputs to defined workflows while maintaining explicit rules, monitoring and human responsibility.</p></article>
    </div></div></section>
    <section className="paper-panel"><div className="wrap two-column"><div><p className="eyebrow">ENGINEERING PRINCIPLE</p><h2>Research prototypes should be honest about what they prove.</h2></div><div><p>A prototype can demonstrate that a system can collect data, execute a pipeline or integrate several technologies without proving that the resulting system will perform successfully in every real-world environment.</p><p>We therefore distinguish technical capability, experimental results and commercial or statistical claims. R&amp;D is used to test assumptions, identify limitations and improve engineering practice.</p><p>Pillar AI is presented as an engineering and research project, not as a guarantee of financial performance or investment outcomes.</p></div></div></section>
    <section><div className="wrap two-column"><div><p className="eyebrow">FROM R&amp;D TO PRODUCTS</p><h2>Turning technical learning into practical systems.</h2></div><div><p>Lessons from R&amp;D can inform future AI-enabled workflow products, research tools, APIs and automation services. The objective is to move from experimentation to dependable software only where the evidence and use case justify doing so.</p><p>This same engineering approach supports our work in academic publishing, where reliable workflows, metadata and infrastructure are often more valuable than unnecessary complexity.</p></div></div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">COLLABORATE</p><h2>Interested in an AI/ML or automation project?</h2></div><a className="btn-primary" href="/contact">Contact us</a></div></section>
  </main><SiteFooter /></>;
}
