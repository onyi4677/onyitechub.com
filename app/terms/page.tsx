import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Terms of Service | Onyitech JournalHub Ltd",
  description: "Terms of Service for the Onyitech JournalHub Ltd website and services.",
};

export default function TermsPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap"><p className="eyebrow">LEGAL</p><h1>Terms of Service</h1><p className="detail-lede">These terms describe the general conditions for using the Onyitech JournalHub Ltd website and engaging with our services.</p></div></section>
    <section><div className="wrap" style={{maxWidth:"900px"}}>
      <p><strong>Effective Date: September 22, 2026</strong></p>
      <h2>1. About These Terms</h2><p>These Terms of Service apply to your use of the Onyitech JournalHub Ltd website and to general enquiries about our technology services. Specific projects may also be governed by a separate proposal, statement of work, service agreement or other written agreement.</p>
      <h2>2. Website Use</h2><p>You may use this website for lawful purposes, including learning about our company, services, technology projects and contacting us. You must not misuse the website, attempt unauthorized access, interfere with its operation, introduce malicious code, or use the site to violate applicable law.</p>
      <h2>3. Services</h2><p>Our services may include software development, AI/ML engineering, workflow automation, API integration, academic publishing technology, OJS development and support, hosting or infrastructure-related technical work, and related consulting. The exact scope, deliverables, timelines, fees and responsibilities for a project will be agreed separately where applicable.</p>
      <h2>4. Client Responsibilities</h2><p>Clients are responsible for providing accurate information, lawful access to systems and data, required permissions, timely feedback and any materials necessary for delivery. Clients remain responsible for the decisions and business processes that rely on software or technical services we provide unless a written agreement states otherwise.</p>
      <h2>5. AI, Research and Decision-Support Systems</h2><p>AI/ML systems and R&amp;D projects may produce experimental, probabilistic or imperfect outputs. Unless expressly agreed in writing, our technology should not be treated as a guarantee of a particular business, financial, academic or operational outcome. Users remain responsible for appropriate human review and decisions based on system outputs.</p>
      <h2>6. Academic Publishing</h2><p>Where we provide technical services to journals, publishers or institutions, editorial decisions, peer-review decisions, authorship decisions and scholarly responsibility remain with the relevant journal, editors, authors or institution. Technical support does not constitute an independent guarantee of indexing, acceptance, publication, citation performance or inclusion in any particular database.</p>
      <h2>7. Intellectual Property</h2><p>Unless otherwise agreed in writing, each party retains rights to materials and intellectual property it owned before a project. Ownership or licensing of newly developed software, configurations, documentation and other deliverables will be determined by the applicable project agreement.</p>
      <h2>8. Third-Party Services</h2><p>Our work may integrate third-party platforms, cloud providers, APIs, hosting services, publishing software or other technologies. Their availability, terms, pricing and functionality may change independently of us, and their own terms and policies may apply.</p>
      <h2>9. Security and Availability</h2><p>We take reasonable measures to build and maintain secure systems, but no internet service or software system can be guaranteed to be completely secure or continuously available. Specific security, backup, uptime and support commitments apply only where expressly included in a written agreement.</p>
      <h2>10. External Links</h2><p>This website may link to external websites and services. We do not control those third parties and are not responsible for their content, availability or policies.</p>
      <h2>11. Changes</h2><p>We may update these terms as our website and services evolve. The effective date will be updated when material changes are made.</p>
      <h2>12. Contact</h2><p><strong>Onyitech JournalHub Ltd</strong><br />Email: <a href="mailto:admin@onyitechub.com">admin@onyitechub.com</a><br />Website: <a href="/">onyitechub.com</a></p>
    </div></section>
  </main><SiteFooter /></>;
}
