export const metadata = {
  title: "Realbaby Toy",
  description: "OEM and ODM baby toys, cloth books, quiet books and plush toys manufacturer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
