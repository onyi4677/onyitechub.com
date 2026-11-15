import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Solutions | Onyitech JournalHub Ltd",
  description: "Technology solutions for publishers, universities, research teams and organizations.",
};

export default function SolutionsPage() {
  const items = [
    ["Researchers & authors","Research workspace support, online instrument hosting, manuscript integrity screening and publication administration."],
    ["Academic journals","OJS development, hosting, upgrades, editorial workflows, scholarly metadata and DOI workflow support."],
    ["Universities & research centres","Digital publishing infrastructure, research data workflows and automation for departments and research communities."],
    ["Publishers & editorial teams","Citation and reference checks, manuscript workflow tools, metadata preparation and technical publishing support."],
    ["Research consultants & organizations","Instrument hosting, evidence collection, data systems and custom workflow automation."],
    ["International publishing clients","Publisher invoice coordination and eligible cross-border payment arrangements, subject to provider approval and applicable requirements."],
  ];
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap"><p className="eyebrow">SOLUTIONS</p><h1>Technology designed around the organization, not the other way around.</h1><p className="detail-lede">We combine research software, academic publishing technology and practical workflow support for researchers, journal owners, institutions and organizations.</p></div></section>
    <section><div className="wrap"><div className="feature-grid">{items.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="paper-panel"><div className="wrap two-column"><div><p className="eyebrow">ENGAGEMENT</p><h2>Build what you need, then improve it.</h2></div><p>Projects can start with a focused automation or publishing problem and grow into a maintainable platform as requirements become clearer.</p></div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">YOUR CHALLENGE</p><h2>Let's map the workflow before choosing the technology.</h2></div><a className="btn-primary" href="/contact">Contact us</a></div></section>
  </main><SiteFooter /></>;
}
