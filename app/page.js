export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 24px",
        background: "#fff7f2",
        color: "#222"
      }}
    >
      <section
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <p
          style={{
            color: "#d64b36",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}
        >
          Verified Baby Toy Manufacturer
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.1",
            margin: "20px 0"
          }}
        >
          Realbaby Toy
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.6",
            maxWidth: "760px",
            margin: "0 auto 36px"
          }}
        >
          We design and manufacture soft baby toys, cloth books, quiet books,
          plush toys and early learning products for global brands, retailers
          and distributors.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <a
            href="mailto:info@realbabytoy.com"
            style={{
              background: "#d64b36",
              color: "white",
              padding: "14px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "700"
            }}
          >
            Send Inquiry
          </a>

          <a
            href="#products"
            style={{
              border: "1px solid #d64b36",
              color: "#d64b36",
              padding: "14px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "700"
            }}
          >
            View Products
          </a>
        </div>
      </section>

      <section
        id="products"
        style={{
          maxWidth: "1080px",
          margin: "80px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px"
        }}
      >
        {[
          "Cloth Books",
          "Quiet Books",
          "Plush Toys",
          "OEM / ODM Custom Toys"
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "white",
              padding: "32px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
            }}
          >
            <h2 style={{ marginTop: 0 }}>{item}</h2>
            <p style={{ lineHeight: "1.6", color: "#555" }}>
              Custom design, sample development, material selection, packaging
              and production support for international toy businesses.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
