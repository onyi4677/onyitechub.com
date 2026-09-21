const detailStyles = `
.detail-page .detail-hero{padding:96px 0 88px;border-top:0;background:var(--paper)}
.detail-hero h1{max-width:900px;margin:0 0 24px;font-family:var(--font-serif);font-size:clamp(2.8rem,6vw,5rem);line-height:1;letter-spacing:-.04em}
.detail-lede{max-width:760px;margin:0;color:var(--ink-soft);font-size:1.18rem;line-height:1.75}
.two-column{display:grid;grid-template-columns:.9fr 1.1fr;gap:90px}
.content-list{border-top:1px solid var(--rule)}
.content-list>div{padding:25px 0;border-bottom:1px solid var(--rule)}
.content-list h3,.feature-grid h3{margin:0 0 8px;font-family:var(--font-serif);font-size:1.35rem}
.content-list p,.feature-grid p,.dark-panel p,.paper-panel p{margin:0;color:var(--ink-soft);font-size:.96rem}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--rule);border-left:1px solid var(--rule)}
.feature-grid article{min-height:245px;padding:28px;border-right:1px solid var(--rule);border-bottom:1px solid var(--rule)}
.feature-grid span{display:block;margin-bottom:42px;color:var(--oxblood);font-family:var(--font-mono);font-size:.75rem}
.dark-panel{background:var(--paper-dark);color:#fff}
.dark-panel h2{max-width:800px;margin:0 0 20px;font-family:var(--font-serif);font-size:clamp(2rem,4vw,3.4rem);line-height:1.08}
.dark-panel .eyebrow{color:#a9c8d0}
.dark-panel p{max-width:760px;color:#c8d0d5}
.paper-panel{background:var(--paper-raised)}
.cta-band{display:flex;justify-content:space-between;align-items:center;gap:40px}
.cta-band h2{margin:0;font-family:var(--font-serif);font-size:clamp(2rem,4vw,3rem);line-height:1.1}
.light-link{display:inline-block;margin-top:24px;color:#fff}
.service-link-card{text-decoration:none;color:inherit;position:relative}
.service-link-card:hover{color:inherit}
.card-arrow{display:block;margin-top:24px;color:var(--oxblood);font-size:.85rem;font-weight:600}
@media(max-width:900px){.two-column{grid-template-columns:1fr;gap:50px}.feature-grid{grid-template-columns:repeat(2,1fr)}.cta-band{align-items:flex-start;flex-direction:column}}
@media(max-width:650px){.detail-page .detail-hero{padding:70px 0}.feature-grid{grid-template-columns:1fr}}
`;

export default function SiteHeader() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: detailStyles }} />
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand-logo-link" href="/" aria-label="Onyitech JournalHub home"><img className="brand-logo" src="/onyitech-logo.svg" alt="Onyitech JournalHub" /></a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="/ai-ml">AI &amp; ML</a>
            <a href="/publishing">Publishing</a>
            <a href="/automation">Automation</a>
            <a href="/solutions">Solutions</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}
