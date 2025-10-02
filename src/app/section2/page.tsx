'use client';

export default function Section2() {
  const leninPlatform = [
    "Các dân tộc hoàn toàn bình đẳng.",
    "Các dân tộc có quyền tự quyết.",
    "Liên hiệp công nhân tất cả các dân tộc.",
  ];

  const twoTendencies = [
    {
      title: "Xu hướng tách rời",
      description: "Cộng đồng dân cư muốn tách ra để thành lập dân tộc độc lập.",
      icon: "🔄"
    },
    {
      title: "Xu hướng liên hiệp", 
      description: "Các dân tộc trong quốc gia hay nhiều quốc gia muốn liên hiệp lại với nhau.",
      icon: "🤝"
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Hero Section */}
        <section className="rounded-2xl border-2 border-[var(--museum-gold)] bg-[var(--museum-paper)]/80 p-8 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
          <h1 className="font-[var(--font-display)] text-4xl font-semibold tracking-wide text-[var(--museum-ink)]">
            II. Chủ nghĩa Mác – Lênin về vấn đề dân tộc
          </h1>
          <div className="mt-3 h-1 w-24 bg-[var(--museum-gold)]" />
          <p className="mt-4 max-w-3xl text-[17px] leading-7 text-[color:rgba(0,0,0,0.78)]">
            Tìm hiểu quan điểm của Mác-Lênin về vấn đề dân tộc và hai xu hướng khách quan trong sự phát triển quan hệ dân tộc.
          </p>
        </section>

        {/* Hai xu hướng khách quan */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            📊 Hai xu hướng khách quan của Lênin
          </h2>
          
          <p className="text-lg leading-7 text-[color:rgba(0,0,0,0.8)] mb-8">
            Lênin phát hiện hai xu hướng khách quan trong sự phát triển quan hệ dân tộc:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {twoTendencies.map((tendency, index) => (
              <div key={tendency.title} className="bg-[var(--museum-paper)]/60 p-6 rounded-lg border border-[var(--museum-gold)]/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{tendency.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--museum-ink)]">
                    {tendency.title}
                  </h3>
                </div>
                <p className="leading-7 text-[color:rgba(0,0,0,0.8)]">
                  {tendency.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
              🔍 Ý nghĩa
            </h3>
            <p className="leading-7">
              Hai xu hướng này không mâu thuẫn mà bổ sung cho nhau, phản ánh sự phát triển tự nhiên 
              của các quan hệ dân tộc trong điều kiện lịch sử cụ thể.
            </p>
          </div>
        </section>

        {/* Cương lĩnh dân tộc của Lênin */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🏛️ Cương lĩnh dân tộc của Lênin
          </h2>
          
          <div className="bg-[var(--museum-paper)]/80 p-6 rounded-lg border-2 border-[var(--museum-gold)]/50 mb-6">
            <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-4">
              Ba nguyên tắc cơ bản:
            </h3>
            
            <div className="space-y-4">
              {leninPlatform.map((principle, index) => (
                <div key={principle} className="flex items-start space-x-4 p-4 bg-white/80 rounded-lg">
                  <div className="bg-[var(--museum-gold)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-7 text-[var(--museum-ink)] font-medium">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-[var(--museum-ink)] mb-2">🌍 Bình đẳng dân tộc</h4>
              <p className="text-sm leading-6">
                Mọi dân tộc đều có giá trị và quyền lợi ngang nhau, không phân biệt lớn nhỏ, mạnh yếu.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-[var(--museum-ink)] mb-2">🗳️ Quyền tự quyết</h4>
              <p className="text-sm leading-6">
                Các dân tộc có quyền tự quyết định vận mệnh của mình, bao gồm quyền ly khai.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-[var(--museum-ink)] mb-2">🤝 Liên hiệp công nhân</h4>
              <p className="text-sm leading-6">
                Giai cấp công nhân các dân tộc cần đoàn kết để đấu tranh chung.
              </p>
            </div>
          </div>
        </section>

        {/* Tư tưởng Mác về dân tộc */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            📖 Đóng góp của Mác và Ăng-ghen
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-[var(--museum-paper)]/40 rounded-lg border border-[var(--museum-gold)]/20">
              <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
                💭 Quan điểm của Mác
              </h3>
              <ul className="space-y-2 list-disc list-inside text-[color:rgba(0,0,0,0.8)]">
                <li>Dân tộc là sản phẩm của lịch sử, không phải bất biến</li>
                <li>Quan hệ dân tộc gắn liền với quan hệ giai cấp</li>
                <li>Cần xóa bỏ áp bức dân tộc để xây dựng xã hội công bằng</li>
              </ul>
            </div>

            <div className="p-6 bg-[var(--museum-paper)]/40 rounded-lg border border-[var(--museum-gold)]/20">
              <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
                🔧 Phát triển của Lênin
              </h3>
              <ul className="space-y-2 list-disc list-inside text-[color:rgba(0,0,0,0.8)]">
                <li>Cụ thể hóa lý luận Mác trong điều kiện thời đại đế quốc</li>
                <li>Đưa ra cương lĩnh dân tộc toàn diện</li>
                <li>Kết hợp giải phóng dân tộc với cách mạng xã hội chủ nghĩa</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-8 flex justify-between">
          <a href="/section1" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-ink)] text-white rounded-lg hover:bg-[var(--museum-ink)]/80 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H17a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L4.293 6.879a1 1 0 011.414 1.414L2.586 11z" clipRule="evenodd"></path>
            </svg>
            <span>Section I</span>
          </a>
          
          <a href="/section3" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-gold)] text-[var(--museum-ink)] rounded-lg hover:bg-[var(--museum-gold)]/80 transition-colors">
            <span>Section III: Dân tộc Việt Nam</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 10 12.293 6.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
