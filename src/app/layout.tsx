import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import ChatBot from "../components/ChatBot";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GR7_MLN131 - Triển lãm Mác-Lênin",
  description: "Triển lãm tư liệu về tư tưởng Mác-Lênin - Nhóm GR7_MLN131",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${display.variable} ${sans.variable} antialiased museum-bg`}>
        <div className="flex min-h-screen">
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            
            {/* Footer - Phân chia công việc */}
            <footer className="bg-[var(--museum-paper)]/60 border-t border-[var(--museum-gold)] mt-8">
              <div className="mx-auto max-w-5xl px-4 py-6">
                <div className="frame-card rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-[var(--museum-ink)]">👥 Thành viên trong nhóm</h2>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--museum-ink)]">
                    <div className="leading-relaxed text-center p-4 bg-[var(--museum-paper)]/40 rounded-lg border border-[var(--museum-gold)]/20">
                      <span className="font-semibold text-lg">Lê Nguyễn Hoàng Châu</span>
                      <div className="text-sm text-[var(--museum-gold)] mt-1">(Trưởng nhóm)</div>
                    </div>
                    <div className="leading-relaxed text-center p-4 bg-[var(--museum-paper)]/40 rounded-lg border border-[var(--museum-gold)]/20">
                      <span className="font-semibold text-lg">Văn Minh Kỳ</span>
                    </div>
                    <div className="leading-relaxed text-center p-4 bg-[var(--museum-paper)]/40 rounded-lg border border-[var(--museum-gold)]/20">
                      <span className="font-semibold text-lg">Trịnh Đắc Trung Kiên</span>
                    </div>
                    <div className="leading-relaxed text-center p-4 bg-[var(--museum-paper)]/40 rounded-lg border border-[var(--museum-gold)]/20">
                      <span className="font-semibold text-lg">Nguyễn Di Thiên</span>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
          
          {/* AI Chatbot */}
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
