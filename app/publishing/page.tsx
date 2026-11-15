import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Publishing Technology | Onyitech JournalHub Ltd",
  description: "OJS development, journal infrastructure, metadata and publishing workflow technology.",
  alternates: { canonical: "/publishing" },
  openGraph: { url: "https://www.onyitechub.com/publishing" },
};

export default function PublishingPage() {
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap">
      <p className="eyebrow">ACADEMIC PUBLISHING TECHNOLOGY</p>
      <h1>Infrastructure for journals that want to operate professionally.</h1>
      <p className="detail-lede">We build and maintain the digital systems behind scholarly publishing, from Open Journal Systems to metadata and technical workflow support.</p>
    </div></section>
    <section><div className="wrap"><div className="section-head"><div><p className="eyebrow">PUBLISHING SERVICES</p><h2>Technology across the publishing lifecycle.</h2></div></div>
      <div className="feature-grid">
        <article><span>01</span><h3>OJS deployment &amp; customization</h3><p>Installation, configuration, theming, plugin support, roles, workflows and maintenance for Open Journal Systems.</p></article>
        <article><span>02</span><h3>Journal hosting &amp; infrastructure</h3><p>Domain and hosting administration, SSL, databases, backups, server configuration, monitoring and technical maintenance.</p></article>
        <article><span>03</span><h3>DOI &amp; scholarly metadata support</h3><p>Structured article metadata preparation, DOI workflow configuration, deposit support and metadata maintenance under appropriate publisher or member arrangements.</p></article>
        <article><span>04</span><h3>Discoverability &amp; indexing readiness</h3><p>Technical improvements to journal structure, metadata, sitemaps and machine-readable publishing information. Indexing decisions remain with the relevant services.</p></article>
        <article><span>05</span><h3>Editorial workflow systems</h3><p>Workflow configuration and custom tools for submissions, peer review, revisions, production and publication.</p></article>
        <article><span>06</span><h3>Migration &amp; maintenance</h3><p>Move existing journals to improved infrastructure and keep publishing systems updated, monitored and operational.</p></article>
        <article><span>07</span><h3>Manuscript integrity &amp; citation screening</h3><p>Advisory checks for manuscript structure, citation–reference matching, DOI and URL verification, and document completeness. Screening is not a plagiarism verdict or misconduct determination.</p></article>
        <article><span>08</span><h3>International publisher coordination</h3><p>Assistance coordinating publisher invoices and eligible cross-border payment arrangements for authors and research clients, subject to provider approval and applicable requirements.</p></article>
      </div>
      <p className="availability-note">International payment coordination is not a money-transfer or escrow service. Any payment is handled only through an approved payment route, against genuine publisher documentation and subject to applicable provider and regulatory requirements. We do not guarantee manuscript acceptance, publication or indexing.</p>
    </div></section>
    <section className="case-study"><div className="wrap case-grid">
      <div><p className="eyebrow">SELECTED PROJECT</p><h2>Ojukwu Journal of Psychological Services</h2></div>
      <div>
        <p>We developed and support the digital publishing infrastructure for the Ojukwu Journal of Psychological Services (OJPS), an academic journal powered by Open Journal Systems.</p>
        <p>Our technical work covers the journal platform, publishing workflows, article metadata, DOI-related technical support, discoverability and indexing-readiness improvements, and ongoing digital publishing infrastructure.</p>
        <a className="secondary-link" href="/case-studies/ojps">Read the OJPS case study →</a>
        <a className="secondary-link" href="https://psyservicesjournal.org.ng" target="_blank" rel="noreferrer">Visit OJPS journal →</a>
        <a className="secondary-link" href="https://ojs.psyservicesjournal.org.ng" target="_blank" rel="noreferrer">Open OJPS OJS platform →</a>
      </div>
    </div></section>
    <section className="paper-panel"><div className="wrap two-column"><div><p className="eyebrow">OUR VIEW</p><h2>Editorial independence remains human.</h2></div><p>Technology should make publishing easier to operate without taking editorial authority away from editors, reviewers or scholarly institutions.</p></div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">PUBLISHING PROJECT</p><h2>Starting a journal or improving an existing one?</h2></div><a className="btn-primary" href="/contact">Discuss your project</a></div></section>
  </main><SiteFooter /></>;
}
