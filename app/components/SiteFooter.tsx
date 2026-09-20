export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div>
          <strong>Onyitech JournalHub Ltd</strong>
          <p>AI, ML, publishing technology and workflow automation.</p>
        </div>
        <div>© {new Date().getFullYear()} Onyitech JournalHub Ltd</div>
      </div>
    </footer>
  );
}
