'use client';

import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <aside className={`${isOpen ? 'w-60' : 'w-16'} bg-[var(--museum-ink)] text-white flex-shrink-0 transition-all duration-300 overflow-hidden`} suppressHydrationWarning>
        <div className="p-4">
          {/* Logo - clickable to toggle */}
          <div 
            className="flex items-center gap-3 mb-6 cursor-pointer hover:bg-white/10 rounded p-2 transition-colors"
            onClick={toggleSidebar}
            title={isOpen ? "Thu gọn menu" : "Mở rộng menu"}
          >
            <div className="w-8 h-8 bg-[var(--museum-gold)] rounded flex items-center justify-center">
              <span className="text-[var(--museum-ink)] font-bold text-sm">ML</span>
            </div>
            {isClient && isOpen && <span className="font-[var(--font-display)] text-lg font-semibold">GR7_MLN131</span>}
          </div>
          
          {/* Navigation */}
          <nav className="space-y-1">
            <a href="/" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              {isClient && isOpen && <span>Trang chủ</span>}
            </a>
            
            <a href="/section1" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {isClient && isOpen && <span>I. Khái niệm, đặc trưng cơ bản của dân tộc</span>}
            </a>
            
            <a href="/section2" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              {isClient && isOpen && <span>II. Chủ nghĩa Mác - Lênin về vấn đề dân tộc</span>}
            </a>
            
            <a href="/section3" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
              {isClient && isOpen && <span>III. Đặc điểm dân tộc Việt Nam</span>}
            </a>
            
            <a href="/section4" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              {isClient && isOpen && <span>IV. Quan điểm và chính sách của Đảng, Nhà nước VN</span>}
            </a>
            
            {isClient && isOpen && <div className="border-t border-white/20 my-4"></div>}
            
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                const references = document.getElementById('references');
                if (references) {
                  references.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L13.414 13H18v3a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" clipRule="evenodd"></path>
              </svg>
              {isClient && isOpen && <span>Tài liệu tham khảo</span>}
            </a>
            
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
              {isClient && isOpen && <span>Thành viên trong nhóm</span>}
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}
