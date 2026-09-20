export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="wordmark" href="/">
          ONYTECH <span>JOURNALHUB</span>
        </a>
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
  );
}
