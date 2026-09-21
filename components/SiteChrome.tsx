import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header internal-header">
      <div className="container header-inner">
        <Link className="brand-lockup" href="/" aria-label="Realbaby home">
          <Image src="/brand/real-smile.svg" alt="" width={48} height={48} priority />
          <span><strong>realbaby</strong><em>Real play. Real growth.</em></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/#moments">Play Moments</Link></li>
            <li><Link href="/#oem">OEM / ODM</Link></li>
            <li><Link href="/#quality">Quality</Link></li>
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
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Image src="/brand/logo-primary.svg" alt="Realbaby - Real play. Real growth." width={230} height={86} />
            <p>Baby soft play and developmental products for global B2B buyers.</p>
          </div>
          <nav aria-label="Footer navigation">
            <strong>Explore</strong>
            <Link href="/products">Products</Link>
            <Link href="/#moments">Play Moments</Link>
            <Link href="/#oem">OEM / ODM</Link>
            <Link href="/about">About Realbaby</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>
          <div>
            <p><strong>Build your collection</strong></p>
            <p><a href="mailto:real@realbaby.cn">real@realbaby.cn</a></p>
            <p><a href="https://wa.me/8617317800686" target="_blank" rel="noreferrer">WhatsApp +86 173 1780 0686</a></p>
            <Link className="btn btn-primary" href="/contact">Start a Project</Link>
          </div>
        </div>
        <div className="container footer-legal">© {new Date().getFullYear()} Realbaby. Made for real childhood.</div>
      </footer>
      <a className="floating-whatsapp" href="https://wa.me/8617317800686?text=Hello%20Realbaby%2C%20I%20would%20like%20to%20discuss%20a%20product%20project." target="_blank" rel="noreferrer" aria-label="Chat with Realbaby on WhatsApp">WA</a>
    </>
  );
}
