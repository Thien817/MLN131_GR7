'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatResponse {
  message: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Welcome message
  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: 'Chào bạn! Tôi là trợ giảng ảo chuyên về Chủ nghĩa Mác–Lênin, dựa trên giáo trình "Những nguyên lý cơ bản của CN Mác–Lênin".\n\n**Phạm vi hỗ trợ:**\n• Cơ sở thế giới quan & phương pháp luận\n• Hình thái kinh tế–xã hội\n• Kinh tế chính trị Mác–Lênin\n• CNXH khoa học\n• Vấn đề dân tộc & tôn giáo\n• Nhà nước & cách mạng\n• Liên hệ đường lối Đảng và thực tiễn Việt Nam\n\n**Cam kết:** Trả lời chính xác, súc tích, khoa học. Cấu trúc rõ ràng với bullet points và logic: định nghĩa → luận điểm → kết luận.\n\nHãy đặt câu hỏi về các chủ đề trong phạm vi giáo trình.',
      timestamp: new Date()
    }]);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversation: messages.slice(-10) // Chỉ gửi 10 tin nhắn gần nhất để tiết kiệm token
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChatResponse = await response.json();

      if (data.message) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.message,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Không nhận được phản hồi từ server');
      }

    } catch (err) {
      console.error('Chat error:', err);
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi gửi tin nhắn');
      
      // Thêm error message vào chat
      const errorMessage: Message = {
        role: 'assistant',
        content: '❌ Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      role: 'assistant',
      content: 'Cuộc trò chuyện đã được làm mới. Hãy đặt câu hỏi về các chủ đề trong phạm vi giáo trình Mác–Lênin.',
      timestamp: new Date()
    }]);
    setError(null);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center ${
          isOpen 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-[var(--museum-gold)] hover:bg-[var(--museum-gold)]/80'
        }`}
        title={isOpen ? 'Đóng chat' : 'Mở GR7_MLN GPT'}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white border-2 border-[var(--museum-gold)] rounded-lg shadow-2xl z-40 flex flex-col">
          {/* Header */}
          <div className="bg-[var(--museum-ink)] text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--museum-gold)] rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--museum-ink)]">GPT</span>
                </div>
                <div>
                  <h3 className="font-semibold">GR7_MLN GPT</h3>
                  <p className="text-xs opacity-80">Trợ giảng ảo Mác-Lênin</p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-white/70 hover:text-white transition-colors"
                title="Xóa cuộc trò chuyện"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--museum-paper)]/20">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-[var(--museum-gold)] text-[var(--museum-ink)]'
                      : 'bg-white border border-[var(--museum-gold)]/30 text-[var(--museum-ink)]'
                  }`}
                >
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </div>
                  <div className={`text-xs mt-1 opacity-70 ${
                    message.role === 'user' ? 'text-[var(--museum-ink)]' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[var(--museum-gold)]/30 text-[var(--museum-ink)] p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-[var(--museum-gold)] border-t-transparent"></div>
                    <span className="text-sm">Đang suy nghĩ...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Error Display */}
          {error && (
            <div className="px-4 py-2 bg-red-50 border-t border-red-200">
              <p className="text-sm text-red-600">❌ {error}</p>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-[var(--museum-gold)]/30 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hỏi về tư tưởng Mác-Lênin, vấn đề dân tộc..."
                className="flex-1 p-2 border border-[var(--museum-gold)]/30 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-[var(--museum-gold)]/50"
                rows={2}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 bg-[var(--museum-gold)] text-white rounded-lg hover:bg-[var(--museum-gold)]/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Nhấn Enter để gửi, Shift+Enter để xuống dòng
            </p>
          </div>
        </div>
      )}
    </>
  );
}