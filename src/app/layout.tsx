import Providers from "./components/Providers";
import "./globals.css";
import { cn } from "./utils/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900 antialiased")}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>{children}</Providers>

        {/* Tambah height pada mobile */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
