/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    const redirect = (source, destination) => ({ source, destination, statusCode: 301 });
    return [
      redirect("/about-us", "/about"),
      redirect("/product", "/products"),
      redirect("/blog", "/insights"),
      redirect("/category/the-world-of-toys", "/insights"),
      redirect("/product-category/cloth-book", "/products"),
      redirect("/product-category/plush-toy", "/products"),
      redirect("/product-category/educational-toy", "/products"),
      redirect("/rfq-template-for-b2b-buyers", "/insights/buyer-rfq-checklist"),
      redirect("/trial-order-strategy-for-new-toy-brands", "/insights/buyer-rfq-checklist"),
      redirect("/plush-toy-moq", "/insights/buyer-rfq-checklist"),
      redirect("/custom-plush-toys", "/insights/buyer-rfq-checklist"),
      redirect("/labeling-requirements-for-baby-toys-in-eu-us", "/insights/baby-toy-compliance"),
      redirect("/cpc-for-plush-toys", "/insights/baby-toy-compliance"),
      redirect("/astm-f963-for-plush", "/insights/baby-toy-compliance"),
      redirect("/en71-soft-toys", "/insights/baby-toy-compliance"),
      redirect("/phthalates-heavy-metals-in-toys", "/insights/baby-toy-compliance"),
      redirect("/custom-plush-sampling-timeline", "/insights/soft-product-sampling"),
      redirect("/retail-ready-packaging-requirements", "/insights/retail-ready-packaging"),
      redirect("/plush-toy-packaging", "/insights/retail-ready-packaging"),
      redirect("/personalized-plush-toys", "/insights/retail-ready-packaging"),
      redirect("/plush-toy-qc-standards", "/insights/soft-product-quality-control"),
      redirect("/common-cloth-book-defects", "/insights/soft-product-quality-control"),
      redirect("/prevent-shedding-in-plush-toys", "/insights/soft-product-quality-control"),
      redirect("/plush-toy-safety", "/insights/soft-product-quality-control"),
      redirect("/printing-on-plush", "/insights/soft-product-quality-control"),
      redirect("/soft-baby-books-vs-board-books", "/insights/cloth-book-development-guide"),
      redirect("/touch-and-feel-baby-books", "/insights/cloth-book-development-guide"),
      redirect("/baby-cloth-books-with-mirrors", "/insights/cloth-book-development-guide"),
      redirect("/tummy-time-cloth-books", "/insights/cloth-book-development-guide"),
      redirect("/baby-cloth-book-with-mirror", "/insights/cloth-book-development-guide"),
      redirect("/crinkle-cloth-book-manufacturer", "/insights/cloth-book-development-guide"),
      redirect("/quiet-book-vs-sensory-book", "/insights/cloth-book-development-guide")
    ];
  }
};

export default nextConfig;
