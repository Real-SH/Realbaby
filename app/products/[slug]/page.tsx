import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  return (
    <main style={{ padding: "64px 24px", maxWidth: 980, margin: "0 auto" }}>
      <Link href="/products" style={{ color: "#e60012", fontWeight: 700 }}>
        Back to products
      </Link>
      <h1 style={{ margin: "10px 0 8px" }}>{product.name}</h1>
      <p style={{ color: "#4a4a4a", maxWidth: 760 }}>{product.summary}</p>

      <section style={{ marginTop: 28 }}>
        <h2>Key Selling Points</h2>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Applications</h2>
        <ul>
          {product.applications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Specifications</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ffd6dc"
          }}
        >
          <tbody>
            {product.specs.map((spec) => (
              <tr key={spec.key}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px 12px",
                    borderBottom: "1px solid #ffd6dc",
                    background: "#fff5f6",
                    width: "30%"
                  }}
                >
                  {spec.key}
                </th>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #ffd6dc" }}>
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section
        style={{
          marginTop: 28,
          border: "1px solid #ffd6dc",
          borderRadius: 12,
          padding: 18,
          background: "#fff"
        }}
      >
        <h2 style={{ marginTop: 0 }}>Procurement Inquiry</h2>
        <p>
          For MOQ, sample policy, lead time, and customization options, contact our sales team.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: "#e60012",
            color: "#fff",
            borderRadius: 8,
            fontWeight: 700,
            padding: "10px 16px"
          }}
        >
          Get a Quote
        </Link>
      </section>
    </main>
  );
}
