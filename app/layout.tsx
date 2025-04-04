export const metadata = {
  title: "Eastcoast Plumbing Mechanics",
  description: "Trusted Plumbing Subcontractor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
