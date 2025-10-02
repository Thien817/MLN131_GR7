'use client';

export default function Home() {
  const sections = [
    {
      id: 1,
      title: "Khái niệm và đặc trưng cơ bản của dân tộc",
      description: "Tìm hiểu về khái niệm dân tộc theo quan điểm Mác-Lênin và các đặc trưng cơ bản",
      url: "/section1",
      icon: "📚"
    },
    {
      id: 2,
      title: "Chủ nghĩa Mác – Lênin về vấn đề dân tộc",
      description: "Hai xu hướng khách quan và cương lĩnh dân tộc của Lênin",
      url: "/section2",
      icon: "⚖️"
    },
    {
      id: 3,
      title: "Dân tộc và quan hệ dân tộc ở Việt Nam",
      description: "Đặc điểm của 54 dân tộc anh em và truyền thống đoàn kết",
      url: "/section3",
      icon: "🇻🇳"
    },
    {
      id: 4,
      title: "Quan điểm và chính sách của Đảng, Nhà nước VN",
      description: "Chính sách dân tộc qua các thời kỳ và thành tựu đạt được",
      url: "/section4",
      icon: "🏛️"
    }
  ];

  const resources = [
    { title: "Chính sách dân tộc của Việt Nam qua 35 năm đổi mới", url: "https://www.tapchicongsan.org.vn/web/guest/ky-nguyen-moi/-/2018/821701/view_content" },
    { title: "Phong trào bình dân học vụ (1945 –1946)", url: "https://tapchilichsudang.vn/phong-trao-binh-dan-hoc-vu-1945-1946.html#:~:text=T%C3%B3m%20t%E1%BA%AFt:%20X%C3%A2y%20d%E1%BB%B1ng%20n%E1%BB%81n,tr%C3%A0o%20B%C3%ACnh%20d%C3%A2n%20h%E1%BB%8Dc%20v%E1%BB%A5" },
    { title: "Nhận thức của Đảng ta về thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam", url: "https://lyluanchinhtri.vn/nhan-thuc-cua-dang-ta-ve-thoi-ky-qua-do-len-chu-nghia-xa-hoi-o-viet-nam-249.html" },
  ];

  const learningOutcomes = [
    "Hiểu đúng bản chất, đặc trưng của vấn đề dân tộc theo quan điểm Mác – Lênin.",
    "Nhận thức được trách nhiệm giữ gìn bản sắc, phát huy đoàn kết, chống chia rẽ dân tộc.",
    "Vận dụng vào thực tiễn Việt Nam: xây dựng đại đoàn kết toàn dân, gắn phát triển kinh tế – xã hội với giải quyết hài hòa vấn đề dân tộc.",
  ];

  return (
    <div>
      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-yellow-800 to-orange-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative w-full">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Content */}
            <div className="text-white space-y-6">
              <h1 className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold leading-tight tracking-wide">
                CHƯƠNG 6: VẤN ĐỀ DÂN TỘC VÀ TÔN GIÁO TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-semibold text-yellow-200">
                Dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội
              </h2>
              
              <p className="text-lg leading-relaxed text-white/90 max-w-2xl">
                Đối với Việt Nam, đất nước thống nhất gồm 54 dân tộc anh em có truyền thống đoàn kết lâu đời và bản sắc văn hóa phong phú. Tuy nhiên, sự phát triển còn chênh lệch, nhất là tại các vùng dân tộc thiểu số nên Đảng và Nhà nước chủ trương thực hiện bình đẳng, đoàn kết, hỗ trợ nhau cùng tiến bộ, gắn kết chặt chẽ vấn đề dân tộc với chiến lược xây dựng chủ nghĩa xã hội. Chính sách dân tộc mang tính toàn diện, bao trùm cả chính trị, kinh tế, văn hóa, xã hội và quốc phòng – an ninh.
              </p>
              
              <button 
                onClick={() => {
                  document.getElementById('main-content')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="inline-flex items-center px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Tìm hiểu thêm
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 10 12.293 6.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            
              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-2xl">
                  <img 
                    src="/ho-chi-minh-lenin.jpg" 
                    alt="Hồ Chí Minh và Lênin" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content" className="py-12">
        <div className="mx-auto max-w-5xl px-4">

        {/* Sections Overview */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6 text-center">
            📖 Nội dung triển lãm
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={section.url}
                className="frame-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{section.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--museum-ink)] group-hover:text-[var(--museum-gold)] transition-colors">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-[color:rgba(0,0,0,0.7)] leading-6">
                      {section.description}
                    </p>
                    <div className="mt-4 flex items-center text-[var(--museum-gold)] font-medium">
                      <span>Khám phá</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 10 12.293 6.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[var(--museum-ink)] mb-6">
            🎯 Mục tiêu học tập
          </h2>
          <div className="space-y-4">
            {learningOutcomes.map((outcome, index) => (
              <div key={outcome} className="flex items-start space-x-4 p-4 bg-[var(--museum-paper)]/60 rounded-lg">
                <div className="bg-[var(--museum-gold)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="leading-7 text-[color:rgba(0,0,0,0.8)]">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* References moved to the end */}
        <section id="references" className="frame-card rounded-xl p-6 mt-6">
          <h2 className="text-xl font-semibold text-[var(--museum-ink)]">📚 Tài liệu tham khảo</h2>
          <p className="mt-2 text-sm text-[color:rgba(0,0,0,0.7)]">
            Trích từ: &quot;Giáo trình Chủ nghĩa xã hội khoa học (2021)&quot;.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {resources.map((r) => (
              <li key={r.title}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-[var(--museum-ink)] hover:text-[var(--museum-gold)] transition-colors underline">
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        </div>
      </div>
    </div>
  );
}
