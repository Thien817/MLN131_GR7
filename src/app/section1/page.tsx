'use client';

export default function Section1() {
  const keyTraits = [
    "Chung một vùng lãnh thổ ổn định.",
    "Chung một phương thức sinh hoạt kinh tế.",
    "Chung một ngôn ngữ làm công cụ giao tiếp.",
    "Chung một nền văn hóa, tâm lý.",
    "Có chung một nhà nước (nhà nước dân tộc).",
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Hero Section */}
        <section className="rounded-2xl border-2 border-[var(--museum-gold)] bg-[var(--museum-paper)]/80 p-8 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
          <h1 className="font-[var(--font-display)] text-4xl font-semibold tracking-wide text-[var(--museum-ink)]">
            I. Khái niệm và đặc trưng cơ bản của dân tộc
          </h1>
          <div className="mt-3 h-1 w-24 bg-[var(--museum-gold)]" />
          <p className="mt-4 max-w-3xl text-[17px] leading-7 text-[color:rgba(0,0,0,0.78)]">
            Tìm hiểu về khái niệm dân tộc theo quan điểm Mác-Lênin và các đặc trưng cơ bản tạo nên một dân tộc.
          </p>
        </section>

        {/* Main Content */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            📚 Khái niệm dân tộc
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[var(--museum-paper)]/40 p-6 rounded-lg border border-[var(--museum-gold)]/30">
              <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
                Quá trình hình thành dân tộc
              </h3>
              <p className="leading-7 text-[color:rgba(0,0,0,0.8)]">
                Theo Mác – Lênin, dân tộc là kết quả của quá trình phát triển lâu dài của xã hội loài người, 
                qua các hình thức cộng đồng từ thấp đến cao:
              </p>
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center space-x-4 text-lg font-medium text-[var(--museum-ink)]">
                  <span className="bg-[var(--museum-gold)]/20 px-3 py-2 rounded">Thị tộc</span>
                  <span>→</span>
                  <span className="bg-[var(--museum-gold)]/20 px-3 py-2 rounded">Bộ lạc</span>
                  <span>→</span>
                  <span className="bg-[var(--museum-gold)]/20 px-3 py-2 rounded">Bộ tộc</span>
                  <span>→</span>
                  <span className="bg-[var(--museum-gold)] px-3 py-2 rounded text-white">Dân tộc</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
                  🌍 Nghĩa rộng (Nation)
                </h3>
                <p className="leading-7">
                  Cộng đồng ổn định người gắn bó bởi lãnh thổ, kinh tế, ngôn ngữ, văn hóa, 
                  truyền thống đấu tranh chung, ý thức thống nhất.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
                  👥 Nghĩa hẹp (Ethnie)
                </h3>
                <p className="leading-7">
                  Cộng đồng tộc người hình thành trong lịch sử, có liên hệ chặt chẽ, 
                  ý thức tự giác tộc người, ngôn ngữ và văn hóa riêng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Đặc trưng cơ bản */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🏛️ Năm đặc trưng cơ bản của dân tộc (nghĩa rộng)
          </h2>
          
          <div className="grid gap-4">
            {keyTraits.map((trait, index) => (
              <div key={trait} className="flex items-start space-x-4 p-4 bg-[var(--museum-paper)]/60 rounded-lg border border-[var(--museum-gold)]/20">
                <div className="bg-[var(--museum-gold)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg leading-7 text-[var(--museum-ink)]">{trait}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
              💡 Ghi chú quan trọng
            </h3>
            <p className="leading-7">
              Các đặc trưng này phải có đầy đủ và tương tác với nhau để tạo thành một dân tộc hoàn chỉnh. 
              Thiếu một trong những yếu tố này sẽ không thể coi là một dân tộc theo nghĩa đầy đủ.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-8 flex justify-between">
          <a href="/" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-ink)] text-white rounded-lg hover:bg-[var(--museum-ink)]/80 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H17a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L4.293 6.879a1 1 0 011.414 1.414L2.586 11z" clipRule="evenodd"></path>
            </svg>
            <span>Trang chủ</span>
          </a>
          
          <a href="/section2" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-gold)] text-[var(--museum-ink)] rounded-lg hover:bg-[var(--museum-gold)]/80 transition-colors">
            <span>Section II: Chủ nghĩa Mác-Lênin</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 10 12.293 6.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
