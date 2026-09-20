import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "R&D | Onyitech JournalHub Ltd",
  description: "Research and development projects in AI, machine learning and intelligent software.",
};

export default function RnDPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap"><p className="eyebrow">RESEARCH &amp; DEVELOPMENT</p><h1>Exploring intelligent systems beyond the immediate product.</h1><p className="detail-lede">Our R&amp;D work helps us test architectures, data pipelines and automation patterns that can inform future software products.</p></div></section>
    <section><div className="wrap two-column"><div><p className="eyebrow">PILLAR AI</p><h2>A multi-layered AI/ML engineering project.</h2></div><div><p>Pillar AI explores the integration of machine learning models, technical analysis, blockchain intelligence, sentiment analysis and rule-based risk controls in a modular software architecture.</p><p>The project demonstrates our interest in combining heterogeneous data sources with software engineering, model pipelines and automated decision-support components.</p></div></div></section>
    <section className="paper-panel"><div className="wrap"><p className="eyebrow">ENGINEERING LESSON</p><h2>Research prototypes should be honest about what they prove.</h2><p>We distinguish system capability from statistical or commercial claims. Experiments and prototypes are used to learn, validate assumptions and improve engineering practice.</p></div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">COLLABORATE</p><h2>Interested in an AI/ML or automation project?</h2></div><a className="btn-primary" href="/contact">Contact us</a></div></section>
  </main><SiteFooter /></>;
}
