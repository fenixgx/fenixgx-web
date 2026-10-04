import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fenixgx.com"),
  title: { default: "FenixGx — software propio", template: "%s · FenixGx" },
  description: "FenixGx es la sociedad británica detrás de IAMenu y Taski, con infraestructura propia de ingeniería.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "FenixGx", images: [{ url: "/assets/fenixgx-logo.png", width: 1536, height: 1024, alt: "FenixGx" }] },
  icons: { icon: "/assets/fenixgx-emblem-dark.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
