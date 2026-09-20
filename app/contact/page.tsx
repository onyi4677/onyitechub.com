import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Contact | Onyitech JournalHub Ltd",
  description: "Contact Onyitech JournalHub Ltd about AI/ML, publishing technology and workflow automation.",
};

export default function ContactPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap"><p className="eyebrow">CONTACT</p><h1>Let's discuss what you want to build.</h1><p className="detail-lede">Whether you are launching a journal, improving an OJS installation or automating a technical workflow, start with a conversation about the problem.</p></div></section>
    <section><div className="wrap contact-grid">
      <div><p className="eyebrow">EMAIL</p><h2>admin@onyitechub.com</h2><p>For project enquiries, publishing technology, AI/ML engineering and workflow automation.</p><a className="btn-primary" href="mailto:admin@onyitechub.com">Email Onyitech JournalHub</a></div>
      <div className="contact-details"><div><span>COMPANY</span>Onyitech JournalHub Ltd</div><div><span>FOCUS</span>AI · ML · Publishing Technology · Workflow Automation</div><div><span>LOCATION</span>Nigeria · Serving clients and research communities globally</div></div>
    </div></section>
  </main><SiteFooter /></>;
}
