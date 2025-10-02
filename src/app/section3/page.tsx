'use client';

export default function Section3() {
  const vnHighlights = [
    "Sự chênh lệch về số dân giữa các tộc người.",
    "Trình độ phát triển kinh tế – xã hội không đều.",
    "Có truyền thống đoàn kết, gắn bó trong quá trình dựng nước và giữ nước.",
  ];

  const ethnicStats = [
    { name: "Kinh", percentage: "85.32%", description: "Dân tộc đa số" },
    { name: "Tày", percentage: "1.77%", description: "Dân tộc thiểu số lớn nhất" },
    { name: "Thái", percentage: "1.77%", description: "Phân bố chủ yếu ở Tây Bắc" },
    { name: "Mường", percentage: "1.35%", description: "Gần gũi với người Kinh" },
    { name: "Khmer", percentage: "1.32%", description: "Chủ yếu ở Nam Bộ" }
  ];

  const traditions = [
    {
      title: "Đoàn kết trong xây dựng",
      description: "Cùng nhau khai phá đất đai, xây dựng làng xã",
      icon: "🏗️"
    },
    {
      title: "Đoàn kết trong bảo vệ",
      description: "Chống ngoại xâm, bảo vệ độc lập dân tộc",
      icon: "🛡️"
    },
    {
      title: "Giao lưu văn hóa",
      description: "Trao đổi, học hỏi phong tục, tập quán",
      icon: "🎭"
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Hero Section */}
        <section className="rounded-2xl border-2 border-[var(--museum-gold)] bg-[var(--museum-paper)]/80 p-8 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
          <h1 className="font-[var(--font-display)] text-4xl font-semibold tracking-wide text-[var(--museum-ink)]">
            III. Dân tộc và quan hệ dân tộc ở Việt Nam
          </h1>
          <div className="mt-3 h-1 w-24 bg-[var(--museum-gold)]" />
          <p className="mt-4 max-w-3xl text-[17px] leading-7 text-[color:rgba(0,0,0,0.78)]">
            Khám phá đặc điểm độc đáo của cộng đồng 54 dân tộc Việt Nam và truyền thống đoàn kết dân tộc.
          </p>
        </section>

        {/* Tổng quan */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🇻🇳 Việt Nam - Quốc gia đa dân tộc
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg border border-red-200 mb-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[var(--museum-ink)] mb-2">54</h3>
              <p className="text-xl font-semibold text-[var(--museum-ink)]">Dân tộc anh em</p>
              <p className="text-sm text-[color:rgba(0,0,0,0.7)] mt-1">
                Tạo nên bức tranh đa sắc màu văn hóa Việt Nam
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-[var(--museum-ink)] mb-4">
            📊 Cơ cấu dân số một số dân tộc chính
          </h3>
          
          <div className="grid gap-4">
            {ethnicStats.map((ethnic, index) => (
              <div key={ethnic.name} className="flex items-center justify-between p-4 bg-[var(--museum-paper)]/60 rounded-lg border border-[var(--museum-gold)]/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-[var(--museum-gold)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--museum-ink)]">{ethnic.name}</h4>
                    <p className="text-sm text-[color:rgba(0,0,0,0.7)]">{ethnic.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[var(--museum-ink)]">{ethnic.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Đặc điểm nổi bật */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            ⭐ Ba đặc điểm nổi bật
          </h2>
          
          <div className="space-y-6">
            {vnHighlights.map((highlight, index) => (
              <div key={highlight} className="bg-[var(--museum-paper)]/60 p-6 rounded-lg border border-[var(--museum-gold)]/30">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--museum-gold)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-2">
                      {highlight}
                    </h3>
                    {index === 0 && (
                      <p className="text-[color:rgba(0,0,0,0.8)] leading-7">
                        Người Kinh chiếm 85.32%, trong khi 53 dân tộc thiểu số chiếm 14.68%. 
                        Sự chênh lệch này tạo ra thách thức nhưng cũng là thế mạnh về đa dạng văn hóa.
                      </p>
                    )}
                    {index === 1 && (
                      <p className="text-[color:rgba(0,0,0,0.8)] leading-7">
                        Các vùng khác nhau có trình độ phát triển kinh tế - xã hội không đồng đều, 
                        đòi hỏi chính sách phát triển phù hợp với từng vùng, từng dân tộc.
                      </p>
                    )}
                    {index === 2 && (
                      <p className="text-[color:rgba(0,0,0,0.8)] leading-7">
                        Tinh thần "tương thân tương ái", "lá lành đùm lá rách" đã trở thành 
                        truyền thống đẹp, là nền tảng cho sự đoàn kết vững chắc.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Truyền thống đoàn kết */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🤝 Truyền thống đoàn kết dân tộc
          </h2>
          
          <p className="text-lg leading-7 text-[color:rgba(0,0,0,0.8)] mb-8">
            Qua hàng nghìn năm lịch sử, các dân tộc Việt Nam đã xây dựng và củng cố truyền thống đoàn kết:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {traditions.map((tradition) => (
              <div key={tradition.title} className="bg-[var(--museum-paper)]/80 p-6 rounded-lg border-2 border-[var(--museum-gold)]/30">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{tradition.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--museum-ink)]">
                    {tradition.title}
                  </h3>
                </div>
                <p className="text-center leading-6 text-[color:rgba(0,0,0,0.8)]">
                  {tradition.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
              🌟 Ý nghĩa lịch sử
            </h3>
            <p className="leading-7">
              Truyền thống đoàn kết này không chỉ giúp các dân tộc Việt Nam vượt qua khó khăn trong quá khứ, 
              mà còn là nền tảng vững chắc cho sự phát triển bền vững của đất nước trong tương lai.
            </p>
          </div>
        </section>

        {/* Phân bố địa lý */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🗺️ Phân bố địa lý các dân tộc
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-[var(--museum-ink)] mb-3">🏔️ Miền Bắc</h3>
              <ul className="space-y-1 text-sm">
                <li>• Tày, Nùng, Hmong</li>
                <li>• Dao, Thái, Mường</li>
                <li>• Sống ở vùng núi cao</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-[var(--museum-ink)] mb-3">🌾 Miền Trung</h3>
              <ul className="space-y-1 text-sm">
                <li>• Chăm, Hrê, Bahnar</li>
                <li>• Ê Đê, Gia Rai, Cơtu</li>
                <li>• Tây Nguyên và duyên hải</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold text-[var(--museum-ink)] mb-3">🏞️ Miền Nam</h3>
              <ul className="space-y-1 text-sm">
                <li>• Khmer, Hoa, Chăm</li>
                <li>• Tập trung ở đồng bằng</li>
                <li>• Sống hòa hợp với người Kinh</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-8 flex justify-between">
          <a href="/section2" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-ink)] text-white rounded-lg hover:bg-[var(--museum-ink)]/80 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H17a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L4.293 6.879a1 1 0 011.414 1.414L2.586 11z" clipRule="evenodd"></path>
            </svg>
            <span>Section II</span>
          </a>
          
          <a href="/section4" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-gold)] text-[var(--museum-ink)] rounded-lg hover:bg-[var(--museum-gold)]/80 transition-colors">
            <span>Section IV: Chính sách dân tộc</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 10 12.293 6.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
