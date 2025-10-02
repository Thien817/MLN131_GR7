'use client';

export default function Section4() {
  const partyPolicies = [
    {
      title: "Bình đẳng dân tộc",
      description: "Thực hiện bình đẳng về mọi mặt giữa các dân tộc",
      details: "Mọi dân tộc đều có quyền và nghĩa vụ như nhau, không phân biệt đối xử"
    },
    {
      title: "Đoàn kết dân tộc",
      description: "Tăng cường khối đại đoàn kết toàn dân tộc",
      details: "Xây dựng mối quan hệ hữu nghị, hợp tác giữa các dân tộc"
    },
    {
      title: "Phát triển toàn diện",
      description: "Phát triển kinh tế - xã hội vùng dân tộc thiểu số",
      details: "Giảm khoảng cách phát triển, nâng cao đời sống nhân dân"
    },
    {
      title: "Bảo tồn văn hóa",
      description: "Giữ gìn và phát huy bản sắc văn hóa dân tộc",
      details: "Bảo vệ ngôn ngữ, phong tục tập quán tốt đẹp của các dân tộc"
    }
  ];

  const statePolicies = [
    {
      period: "1945-1975",
      title: "Giai đoạn kháng chiến",
      policies: [
        "Tuyên bố bình đẳng dân tộc trong Tuyên ngôn độc lập",
        "Thành lập các khu tự trị dân tộc thiểu số",
        "Chính sách đoàn kết chống ngoại xâm"
      ]
    },
    {
      period: "1975-1986", 
      title: "Thời kỳ xây dựng CNXH",
      policies: [
        "Thực hiện chính sách dân tộc thống nhất",
        "Đầu tư phát triển vùng dân tộc thiểu số",
        "Xóa đói giảm nghèo"
      ]
    },
    {
      period: "1986-nay",
      title: "Thời kỳ đổi mới",
      policies: [
        "Chương trình 135 hỗ trợ vùng khó khăn",
        "Chính sách ưu tiên giáo dục, y tế",
        "Phát triển kinh tế - xã hội bền vững"
      ]
    }
  ];

  const achievements = [
    {
      area: "Giáo dục",
      stats: "Tỷ lệ biết chữ: 95.8%",
      description: "Xóa mù chữ, phổ cập giáo dục tiểu học và trung học cơ sở"
    },
    {
      area: "Y tế", 
      stats: "100% xã có trạm y tế",
      description: "Mạng lưới y tế cơ sở phủ khắp vùng dân tộc thiểu số"
    },
    {
      area: "Giao thông",
      stats: "98% xã có đường ô tô",
      description: "Kết nối giao thông, thu hẹp khoảng cách địa lý"
    },
    {
      area: "Điện",
      stats: "99.5% hộ có điện",
      description: "Đưa điện về tận các thôn bản vùng sâu vùng xa"
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Hero Section */}
        <section className="rounded-2xl border-2 border-[var(--museum-gold)] bg-[var(--museum-paper)]/80 p-8 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
          <h1 className="font-[var(--font-display)] text-4xl font-semibold tracking-wide text-[var(--museum-ink)]">
            IV. Quan điểm và chính sách dân tộc của Đảng, Nhà nước Việt Nam
          </h1>
          <div className="mt-3 h-1 w-24 bg-[var(--museum-gold)]" />
          <p className="mt-4 max-w-3xl text-[17px] leading-7 text-[color:rgba(0,0,0,0.78)]">
            Tìm hiểu quan điểm và những chính sách cụ thể của Đảng Cộng sản và Nhà nước Việt Nam về vấn đề dân tộc.
          </p>
        </section>

        {/* Quan điểm của Đảng */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🎯 Quan điểm của Đảng Cộng sản Việt Nam
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {partyPolicies.map((policy, index) => (
              <div key={policy.title} className="bg-[var(--museum-paper)]/60 p-6 rounded-lg border border-[var(--museum-gold)]/30">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--museum-gold)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-2">
                      {policy.title}
                    </h3>
                    <p className="font-medium text-[color:rgba(0,0,0,0.8)] mb-2">
                      {policy.description}
                    </p>
                    <p className="text-sm text-[color:rgba(0,0,0,0.7)] leading-6">
                      {policy.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
              📜 Nguyên tắc cơ bản
            </h3>
            <p className="leading-7">
              <strong>Hồ Chí Minh:</strong> "Dân tộc nào cũng có quyền sống, quyền độc lập, quyền tự do, 
              quyền hạnh phúc. Việt Nam ta là một nước, dân tộc Việt Nam là một dân tộc thống nhất."
            </p>
          </div>
        </section>

        {/* Chính sách của Nhà nước qua các thời kỳ */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            📅 Chính sách dân tộc qua các thời kỳ
          </h2>
          
          <div className="space-y-8">
            {statePolicies.map((period) => (
              <div key={period.period} className="border-l-4 border-[var(--museum-gold)] pl-6">
                <div className="bg-[var(--museum-paper)]/80 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-[var(--museum-gold)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {period.period}
                    </span>
                    <h3 className="text-xl font-semibold text-[var(--museum-ink)]">
                      {period.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {period.policies.map((policy) => (
                      <li key={policy} className="flex items-start space-x-3">
                        <div className="bg-[var(--museum-gold)]/30 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                        <span className="leading-6 text-[color:rgba(0,0,0,0.8)]">{policy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Thành tựu đạt được */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🏆 Thành tựu đạt được
          </h2>
          
          <p className="text-lg leading-7 text-[color:rgba(0,0,0,0.8)] mb-8">
            Sau 75+ năm thực hiện chính sách dân tộc, Việt Nam đã đạt được những thành tựu đáng tự hào:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.area} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[var(--museum-ink)]">
                    {achievement.area}
                  </h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.stats}
                  </span>
                </div>
                <p className="leading-6 text-[color:rgba(0,0,0,0.8)]">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-3">
              🌟 Ý nghĩa
            </h3>
            <p className="leading-7">
              Những thành tựu này không chỉ thể hiện sự thành công của chính sách dân tộc mà còn 
              khẳng định tinh thần đoàn kết, tương thân tương ái của 54 dân tộc anh em Việt Nam.
            </p>
          </div>
        </section>

        {/* Thách thức và định hướng */}
        <section className="frame-card rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-semibold text-[var(--museum-ink)] mb-6">
            🔮 Thách thức và định hướng tương lai
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-4">
                ⚠️ Thách thức
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <span>Khoảng cách phát triển giữa các vùng còn lớn</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <span>Nguy cơ mai một bản sắc văn hóa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <span>Tác động của toàn cầu hóa</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--museum-ink)] mb-4">
                🎯 Định hướng
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <span>Tiếp tục thực hiện chính sách ưu tiên</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <span>Phát triển bền vững, toàn diện</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <span>Bảo tồn và phát huy văn hóa dân tộc</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-8 flex justify-between">
          <a href="/section3" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-ink)] text-white rounded-lg hover:bg-[var(--museum-ink)]/80 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H17a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L4.293 6.879a1 1 0 011.414 1.414L2.586 11z" clipRule="evenodd"></path>
            </svg>
            <span>Section III</span>
          </a>
          
          <a href="/" className="flex items-center space-x-2 px-6 py-3 bg-[var(--museum-gold)] text-[var(--museum-ink)] rounded-lg hover:bg-[var(--museum-gold)]/80 transition-colors">
            <span>Trang chủ</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" clipRule="evenodd"></path>
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
