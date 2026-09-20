import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Solutions | Onyitech JournalHub Ltd",
  description: "Technology solutions for publishers, universities, research teams and organizations.",
};

export default function SolutionsPage() {
  const items = [
    ["Academic journals","OJS, hosting, editorial workflows, metadata and ongoing technical support."],
    ["Universities & research centres","Digital publishing infrastructure and automation for departments and research communities."],
    ["Publishers & editorial teams","Custom workflow tools that reduce repetitive operational work."],
    ["Organizations","Python, API and AI/ML automation for structured business and research processes."],
  ];
  return <><SiteHeader /><main className="detail-page">
    <section className="detail-hero"><div className="wrap"><p className="eyebrow">SOLUTIONS</p><h1>Technology designed around the organization, not the other way around.</h1><p className="detail-lede">We combine software engineering, AI/ML and publishing technology to build practical systems for teams that need reliable digital workflows.</p></div></section>
    <section><div className="wrap"><div className="feature-grid">{items.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="paper-panel"><div className="wrap two-column"><div><p className="eyebrow">ENGAGEMENT</p><h2>Build what you need, then improve it.</h2></div><p>Projects can start with a focused automation or publishing problem and grow into a maintainable platform as requirements become clearer.</p></div></section>
    <section><div className="wrap cta-band"><div><p className="eyebrow">YOUR CHALLENGE</p><h2>Let's map the workflow before choosing the technology.</h2></div><a className="btn-primary" href="/contact">Contact us</a></div></section>
  </main><SiteFooter /></>;
}
