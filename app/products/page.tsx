import Link from "next/link";
import { products } from "../data";

export default function ProductsPage() {
  return (
    <main style={{ padding: "64px 24px", maxWidth: 1080, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 10 }}>Products</h1>
      <p style={{ maxWidth: 740, color: "#4a4a4a" }}>
        Explore our core product categories for global B2B buyers. Each product line supports
        OEM/ODM collaboration and scalable sourcing communication.
      </p>
      <section
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 16
        }}
      >
        {products.map((product) => (
          <article
            key={product.slug}
            style={{
              border: "1px solid #ffd6dc",
              borderRadius: 12,
              padding: 18,
              background: "#fff"
            }}
          >
            <p style={{ margin: 0, fontSize: 13, color: "#e60012", fontWeight: 700 }}>
              {product.category}
            </p>
            <h2 style={{ fontSize: 24, margin: "8px 0 8px" }}>{product.name}</h2>
            <p style={{ marginTop: 0 }}>{product.summary}</p>
            <Link href={`/products/${product.slug}`} style={{ color: "#e60012", fontWeight: 700 }}>
              View details
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
