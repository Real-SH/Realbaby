import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { companyProfile } from "../data";

export const metadata: Metadata = { title: "About Realbaby", description: "Meet Realbaby, a Shanghai-based OEM/ODM partner focused on baby soft play, comfort, and early-learning products." };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero about-hero"><div className="container inner-hero-grid"><div><p className="section-kicker">Behind Realbaby</p><h1>Real people building products for real childhood.</h1><p className="inner-lead">We work with brands, retailers, importers, and distributors to turn thoughtful baby-product ideas into clear, market-ready collections.</p></div><div className="fact-panel"><strong>Founded {companyProfile.foundedYear}</strong><span>{companyProfile.positioning}</span><span>Main markets: {companyProfile.markets.join(", ")}</span><span>Based in Shanghai, China</span></div></div></section>
        <section className="section"><div className="container about-story-grid"><div><p className="section-kicker">Our Belief</p><h2>Children grow through real touch, real exploration, and real companionship.</h2><p>In a world full of screens and overstimulation, we focus on soft goods that make space for hands-on play, shared discovery, comfort, and calm.</p><blockquote className="about-quote">We are not here to make children grow faster. We are here to help them grow more naturally.</blockquote></div><Image className="about-team-image" src="/images/company/team.webp" alt="Realbaby team presentation" width={1448} height={1086} /></div></section>
        <section className="section band"><div className="container values-grid"><article><span>01</span><h3>Safe by design</h3><p>Product and documentation requirements are planned around the real project.</p></article><article><span>02</span><h3>Playful by nature</h3><p>Every direction starts with a recognizable childhood moment.</p></article><article><span>03</span><h3>Made for real growth</h3><p>Soft play, comfort, and learning stay at the center of our range.</p></article></div></section>
        <section className="section"><div className="container founder-grid"><Image src="/images/company/karen.webp" alt="Karen, Realbaby sales director" width={849} height={849} /><div><p className="section-kicker">Your Realbaby Contact</p><h2>Meet Karen.</h2><p>Karen leads international buyer communication and helps turn early ideas into structured product briefs, sample decisions, and practical next steps.</p><div className="cta-row"><a className="btn btn-primary" href="mailto:real@realbaby.cn">Email Karen</a><a className="btn btn-outline" href="https://wa.me/8617317800686">WhatsApp</a></div></div></div></section>
        <section className="section about-cta"><div className="container quote-banner"><div><p className="section-kicker">Build Your Collection</p><h2>Let’s create real value for real children.</h2><p>Tell us what you want to make and where it will be sold.</p></div><Link className="btn btn-primary" href="/contact">Start a Project</Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
