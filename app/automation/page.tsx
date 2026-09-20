import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Workflow Automation | Onyitech JournalHub Ltd",
  description: "Python, API and AI-powered workflow automation for publishing and organizations.",
};

export default function AutomationPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap">
      <p className="eyebrow">WORKFLOW AUTOMATION</p>
      <h1>Turn repetitive operations into reliable software.</h1>
      <p className="detail-lede">We connect people, data and systems with automation built around the way your organization actually works.</p>
    </div></section>
    <section><div className="wrap two-column"><div><p className="eyebrow">WHAT WE AUTOMATE</p><h2>Less manual coordination. More dependable execution.</h2></div>
      <div className="content-list">
        <div><h3>Publishing workflows</h3><p>Submission, reviewer, editorial, production and notification processes can be connected into structured workflows.</p></div>
        <div><h3>Data &amp; document processing</h3><p>Extract, transform, validate and move information between documents, databases and services.</p></div>
        <div><h3>API integrations</h3><p>Connect third-party platforms and internal applications using Python services, webhooks and APIs.</p></div>
        <div><h3>Scheduled operations</h3><p>Automate recurring jobs, reports, backups, synchronization and maintenance tasks.</p></div>
      </div>
    </div></section>
    <section className="dark-panel"><div className="wrap"><p className="eyebrow">TECHNOLOGY</p><h2>Python-first. API-ready. Built to evolve.</h2><p>Depending on the project, our stack can include Python, FastAPI, databases, machine-learning components, cloud infrastructure and modern web applications.</p></div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">AUTOMATE</p><h2>Tell us what your team repeats every week.</h2></div><a className="btn-primary" href="/contact">Start a conversation</a></div></section>
  </main><SiteFooter /></>;
}
