import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SleepWork — Track how sleep affects your work performance",
  description: "Correlates sleep data with productivity metrics to show optimal sleep patterns for peak performance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b666131b-94ac-4bf4-ac3b-2be6c22b905e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
