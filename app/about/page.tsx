import { LocationMap } from "../../components/LocationMap";
import { companyLocation, companyProfile } from "../data";

export default function AboutPage() {
  return (
    <main style={{ padding: "64px 24px", maxWidth: 980, margin: "0 auto" }}>
      <h1>About Realbaby</h1>
      <p style={{ maxWidth: 760 }}>
        Realbaby is the brand of {companyProfile.companyName}, positioned as a source manufacturer
        and OEM/ODM solution provider in baby products.
      </p>

      <section style={{ marginTop: 26 }}>
        <h2>Company Facts</h2>
        <ul>
          <li>
            <strong>Founded:</strong> {companyProfile.foundedYear}
          </li>
          <li>
            <strong>Positioning:</strong> {companyProfile.positioning}
          </li>
          <li>
            <strong>Main Markets:</strong> {companyProfile.markets.join(", ")}
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 26 }}>
        <h2>What We Support</h2>
        <ul>
          <li>OEM/ODM development workflow</li>
          <li>Buyer-oriented communication for B2B channels</li>
          <li>Global sourcing and delivery cooperation</li>
          <li>Quality-oriented production coordination</li>
        </ul>
      </section>

      <section
        style={{
          marginTop: 30,
          border: "1px solid #ffd6dc",
          borderRadius: 12,
          padding: 18,
          background: "#fff5f6"
        }}
      >
        <h2 style={{ marginTop: 0 }}>Founder Profile (Reserved)</h2>
        <p>
          Founder IP content is reserved for this About page only, based on your current brand
          strategy. Detailed profile text and image block can be finalized in the next revision.
        </p>
      </section>

      <section style={{ marginTop: 30 }}>
        <LocationMap
          title="Factory / Office Location"
          address={companyLocation.address}
          viewUrl={companyLocation.googleMapsUrl}
          zoom={13}
        />
      </section>
    </main>
  );
}
