import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "AI & ML Engineering | Onyitech JournalHub Ltd",
  description: "AI and machine learning engineering for research, publishing and workflow automation.",
};

export default function AIMLPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap">
      <p className="eyebrow">AI · MACHINE LEARNING · SOFTWARE ENGINEERING</p>
      <h1>Intelligent software for real-world workflows.</h1>
      <p className="detail-lede">We design practical AI/ML systems that connect data, models, APIs and automation to solve operational and research problems.</p>
    </div></section>
    <section><div className="wrap two-column">
      <div><p className="eyebrow">CAPABILITIES</p><h2>From data pipelines to deployed intelligence.</h2></div>
      <div className="content-list">
        <div><h3>Machine learning systems</h3><p>Model development, evaluation, inference pipelines and integration with production applications.</p></div>
        <div><h3>NLP &amp; text intelligence</h3><p>Document processing, text classification, information extraction, semantic analysis and research-oriented language workflows.</p></div>
        <div><h3>Automation &amp; APIs</h3><p>Python services, API integrations, background jobs and workflow orchestration that turn repetitive work into reliable software.</p></div>
        <div><h3>Research &amp; decision support</h3><p>Technology that helps teams organize evidence, data and operational signals without replacing human judgment.</p></div>
      </div>
    </div></section>
    <section className="dark-panel"><div className="wrap">
      <p className="eyebrow">ENGINEERING PRINCIPLE</p><h2>Useful AI starts with a clear workflow.</h2>
      <p>We focus on measurable tasks, maintainable software and responsible integration rather than adding AI where it does not create practical value.</p>
    </div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">LET'S BUILD</p><h2>Have a workflow that should be smarter?</h2></div><a className="btn-primary" href="/contact">Talk to us</a></div></section>
  </main><SiteFooter /></>;
}
