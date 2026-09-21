import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header internal-header">
      <div className="container header-inner">
        <Link className="brand-lockup" href="/" aria-label="Realbaby home">
          <Image src="/favicon-512.png" alt="" width={48} height={48} priority />
          <span>
            <strong>realbaby</strong>
            <em>Real play. Real growth.</em>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li><Link href="/#products">Products</Link></li>
            <li><Link href="/#capability">Capability</Link></li>
            <li><Link href="/#compliance">Compliance</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a className="btn btn-outline" href="/realbaby-product-catalog.pdf">Catalog</a>
          <Link className="btn btn-primary" href="/contact">Get a Quote</Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">realbaby</p>
          <p>Real play. Real growth.</p>
          <p>OEM/ODM baby soft play and developmental products for global B2B buyers.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/products">Product Lines</Link>
          <Link href="/about">About Realbaby</Link>
          <Link href="/contact">Request a Quote</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        <div>
          <p><strong>Email:</strong> <a href="mailto:real@realbaby.cn">real@realbaby.cn</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/8617317800686" target="_blank" rel="noreferrer">+86 173 1780 0686</a></p>
          <p><strong>Location:</strong> Shanghai, China</p>
        </div>
      </div>
    </footer>
  );
}
