import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "About | Onyitech JournalHub Ltd",
  description: "About Onyitech JournalHub Ltd and its AI, ML, publishing and automation focus.",
};

export default function AboutPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap"><p className="eyebrow">ABOUT ONYTECH JOURNALHUB</p><h1>Building useful technology where research, publishing and automation meet.</h1><p className="detail-lede">Onyitech JournalHub Ltd develops digital infrastructure and software for academic publishing and broader workflow automation.</p></div></section>
    <section><div className="wrap two-column"><div><p className="eyebrow">OUR FOCUS</p><h2>Software should solve a real operational problem.</h2></div><div><p>Our work combines AI/ML engineering, Python software development, API integration, publishing systems and cloud infrastructure.</p><p>We are particularly interested in the space where research organizations and publishers have complex workflows but limited technical infrastructure.</p></div></div></section>
    <section className="dark-panel"><div className="wrap"><p className="eyebrow">R&amp;D</p><h2>Pillar AI</h2><p>Pillar AI is an R&amp;D technology project exploring a multi-layered AI/ML architecture that combines machine learning, technical analysis, blockchain intelligence, sentiment signals and risk controls. It is presented as an engineering and research project, not as a claim of guaranteed financial performance.</p><a className="secondary-link light-link" href="/rnd">Explore our R&amp;D →</a></div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">WORK WITH US</p><h2>Have a technical problem worth building around?</h2></div><a className="btn-primary" href="/contact">Get in touch</a></div></section>
  </main><SiteFooter /></>;
}
