import "./globals.css";

export const metadata = {
  title: "aaowasi369 — Technology Risk & AI Governance",
  description: "Technology Risk, GRC, TPRM and AI Governance portfolio by Md. Abdullah Al Owasi.",
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#f8faf7" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        {children}
        <script src="/assets/app.js" defer />
      </body>
    </html>
  );
}
