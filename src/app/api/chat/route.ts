import { NextRequest, NextResponse } from 'next/server';

// Knowledge base cho GR7_HCM GPT - Offline chatbot
const KNOWLEDGE_BASE = {
  // 1. Tư tưởng Hồ Chí Minh về văn hóa
  culture: {
    keywords: ['văn hóa', 'nghệ thuật', 'văn nghệ', 'mặt trận', 'phục vụ nhân dân', 'hồ chí minh', 'văn hóa nghệ thuật'],
    responses: [
      "**Tư tưởng Hồ Chí Minh về văn hóa:**\n\n**Bốn cách tiếp cận văn hóa:**\n• **Nghĩa rộng:** Tổng hợp mọi phương thức sinh hoạt của con người\n• **Nghĩa hẹp:** Đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng\n• **Nghĩa hẹp hơn:** Bàn đến các trường học, xóa nạn mù chữ, biết đọc biết viết\n• **Phương thức sử dụng:** Công cụ sinh hoạt\n\n**Quan niệm về văn hóa (1943):**\n\"Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày về mặc, ăn, ở và các phương thức sử dụng. Toàn bộ những sáng tạo và phát minh đó tức là văn hóa.\"\n\n**Vai trò của văn hóa:**\n• Văn hóa là mục tiêu, động lực của sự nghiệp cách mạng\n• Văn hóa là một mặt trận\n• Văn hóa phục vụ quần chúng nhân dân",
      
      "**Văn hóa nghệ thuật theo Hồ Chí Minh:**\n\n**Nguyên tắc cơ bản:**\n• **Văn hóa là mặt trận:** \"Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy.\"\n• **Phục vụ nhân dân:** Nghệ thuật phải phục vụ Tổ quốc và nhân dân, không phục vụ danh lợi cá nhân\n• **Phản ánh chân thực:** Nghệ thuật phải phản ánh chân thực cuộc sống, hướng con người đến chân – thiện – mỹ\n\n**Trách nhiệm của nghệ sĩ:**\n• Gắn bó với nhân dân, hiểu nhân dân, nói tiếng nói của nhân dân\n• Khiêm tốn, học hỏi, rèn luyện đạo đức\n• Không 'tự phong', không coi thường quần chúng\n• Có lập trường vững vàng, phản ánh tâm tư nguyện vọng nhân dân\n\n**Ý nghĩa thời sự:**\nTrong thời đại hiện nay, nhiều 'idol mạng', 'nghệ sĩ tự phong' chạy theo danh lợi, coi thường quần chúng - điều này trái với tinh thần nghệ sĩ chân chính mà Hồ Chí Minh đề cao."
    ]
  },

  // 2. Tư tưởng Hồ Chí Minh về đạo đức
  ethics: {
    keywords: ['đạo đức', 'cách mạng', 'trung với nước', 'hiếu với dân', 'cần kiệm liêm chính', 'thương yêu con người', 'hồ chí minh'],
    responses: [
      "**Tư tưởng Hồ Chí Minh về đạo đức:**\n\n**Đạo đức là gốc của người cách mạng:**\n• Hồ Chí Minh coi đạo đức rất quan trọng như gốc của cây, như ngọn nguồn của sông, suối\n• Đạo đức là nền tảng tinh thần của xã hội, là sức mạnh và tiêu chuẩn hàng đầu của người cách mạng\n• Không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân\n\n**Bốn chuẩn mực đạo đức cách mạng:**\n• **Trung với nước, hiếu với dân:** Là phẩm chất đạo đức bao trùm quan trọng nhất\n• **Cần, kiệm, liêm, chính, chí công vô tư:** Nội dung cốt lõi của đạo đức cách mạng\n• **Thương yêu con người:** Kế thừa truyền thống nhân nghĩa, kết hợp với chủ nghĩa nhân đạo cộng sản\n• **Tinh thần quốc tế trong sáng:** Phẩm chất quan trọng của đạo đức cộng sản chủ nghĩa",
      
      "**Ý nghĩa thời sự của tư tưởng đạo đức Hồ Chí Minh:**\n\n**Giá trị lý luận:**\n• Hệ thống lý luận đạo đức cách mạng toàn diện, sâu sắc\n• Kết hợp truyền thống dân tộc với tinh hoa nhân loại\n• Định hướng cho việc xây dựng con người mới\n\n**Giá trị thực tiễn:**\n• Hướng dẫn hành động cho cán bộ, đảng viên\n• Xây dựng đạo đức xã hội trong thời đại mới\n• Chống tham nhũng, tiêu cực, bảo vệ đạo đức cách mạng\n\n**Liên hệ hiện tại:**\nTư tưởng đạo đức Hồ Chí Minh vẫn còn nguyên giá trị trong việc xây dựng con người mới xã hội chủ nghĩa, chống các biểu hiện tiêu cực trong xã hội."
    ]
  },

  // 3. Tư tưởng Hồ Chí Minh về con người
  human: {
    keywords: ['con người', 'bản chất con người', 'mục tiêu cách mạng', 'xây dựng con người', 'hồ chí minh', 'con người mới'],
    responses: [
      "**Tư tưởng Hồ Chí Minh về con người:**\n\n**Theo \"Giáo trình học phần Tư tưởng Hồ Chí Minh\":**\n• Con người Việt Nam phát triển toàn diện là một thể thống nhất, kết hợp chặt chẽ các yếu tố: đức, trí, thể, mỹ\n• Tạo nên phẩm chất và năng lực (\"hồng\" và \"chuyên\", đức và tài)\n• \"Chẳng những thạo về chính trị, mà còn phải giỏi về chuyên môn\"\n• Con người có tính xã hội, là thành viên của cộng đồng xã hội\n\n**Các yếu tố hình thành con người toàn diện:**\n• **Đức dục:** Phẩm chất đạo đức trong sáng, cao đẹp\n• **Trí dục:** Sự phong phú về mặt trí tuệ (tri thức cũ và mới)\n• **Thể dục:** Sự mạnh khỏe về thể chất\n• **Mỹ dục:** Sự hiểu biết sâu sắc về cái hay, cái đẹp, cái cao cả\n\n**Quan điểm của Hồ Chí Minh:**\n\"Chữ người, nghĩa hẹp là gia đình, anh em, họ hàng, bè bạn; nghĩa rộng là đồng bào cả nước; rộng hơn nữa là cả loài người.\"\n\n**Nguồn:** [Tư tưởng Hồ Chí Minh về xây dựng con người Việt Nam phát triển toàn diện](https://lyluanchinhtri.vn/tu-tuong-ho-chi-minh-ve-xay-dung-con-nguoi-viet-nam-phat-trien-toan-dien-va-su-van-dung-cua-dang-ta-trong-thoi-ky-doi-moi-186.html)",
      
      "**Vai trò của con người trong cách mạng:**\n\n**Con người là mục tiêu của cách mạng:**\n• Con người là chiến lược số một trong tư tưởng và hành động của Hồ Chí Minh\n• Mục tiêu được cụ thể hóa trong ba giai đoạn: giải phóng dân tộc – xây dựng chế độ dân chủ nhân dân – tiến dần lên xã hội chủ nghĩa\n• Giải phóng dân tộc, xã hội, giai cấp, con người\n\n**Ý nghĩa của việc xây dựng con người:**\n• Yêu cầu khách quan của sự nghiệp cách mạng, vừa cấp bách vừa lâu dài\n• Có ý nghĩa chiến lược, là trọng tâm của chiến lược phát triển đất nước\n• Có mối quan hệ chặt chẽ với xây dựng chính trị, kinh tế, văn hóa, xã hội\n\n**Liên hệ hiện tại:**\nTư tưởng này vẫn còn nguyên giá trị trong việc xây dựng con người mới xã hội chủ nghĩa, phát triển toàn diện con người Việt Nam."
    ]
  },

  // 4. Nghệ sĩ của nhân dân
  artist: {
    keywords: ['nghệ sĩ', 'nghệ thuật', 'nhân dân', 'văn nghệ sĩ', 'nghệ sĩ chân chính', 'idol mạng', 'nghệ sĩ tự phong'],
    responses: [
      "**Nghệ sĩ của nhân dân theo Hồ Chí Minh:**\n\n**Nghệ thuật chân chính:**\n• Phục vụ Tổ quốc và nhân dân, không phục vụ danh lợi cá nhân\n• Phản ánh chân thực cuộc sống, hướng con người đến chân – thiện – mỹ\n• Văn hóa nghệ thuật là một mặt trận, nghệ sĩ là chiến sĩ trên mặt trận ấy\n\n**Đặc điểm của nghệ sĩ nhân dân:**\n• Gắn bó với nhân dân, hiểu nhân dân, nói tiếng nói của nhân dân\n• Khiêm tốn, học hỏi, rèn luyện đạo đức, tránh xa bệnh kiêu ngạo\n• Không 'tự phong', không coi thường quần chúng\n• Có lập trường vững vàng, phản ánh tâm tư nguyện vọng nhân dân",
      
      "**Thách thức thời đại hiện nay:**\n\n**Hiện tượng tiêu cực:**\n• Nhiều 'idol mạng', 'nghệ sĩ tự phong' chạy theo danh lợi\n• Chỉ chú trọng lợi ích cá nhân, coi thường khán giả\n• Tự xưng là 'nghệ sĩ' mà thiếu đạo đức\n• Chạy theo thị hiếu thấp kém, hình thức\n\n**Định hướng đúng đắn:**\n• Cần định hướng nghệ thuật chân chính\n• Phát huy vai trò giáo dục của nghệ thuật\n• Xây dựng đội ngũ nghệ sĩ có đạo đức, tài năng\n• Theo tinh thần: \"Nghệ thuật chỉ có ý nghĩa khi phục vụ Tổ quốc và nhân dân\"\n\n**Liên hệ thực tế:**\nTrong bối cảnh hiện nay, cần phát huy tư tưởng Hồ Chí Minh để xây dựng nền nghệ thuật chân chính, phục vụ nhân dân."
    ]
  },

  // 5. Tư tưởng Hồ Chí Minh tổng hợp
  hcmGeneral: {
    keywords: ['hồ chí minh', 'tư tưởng hồ chí minh', 'di sản', 'giá trị', 'ý nghĩa', 'thời sự', 'việt nam', 'giáo trình'],
    responses: [
      "**Tư tưởng Hồ Chí Minh - Di sản vĩ đại:**\n\n**Theo \"Giáo trình học phần Tư tưởng Hồ Chí Minh\":**\n• Tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người là một hệ thống lý luận sâu sắc, toàn diện\n• Có ý nghĩa lý luận và thực tiễn to lớn\n• Định hướng cho việc xây dựng con người mới xã hội chủ nghĩa\n\n**Giá trị thời sự:**\n• Vẫn còn nguyên giá trị trong công cuộc xây dựng và phát triển đất nước\n• Có ý nghĩa sâu sắc trong việc định hướng nghệ thuật chân chính\n• Góp phần xây dựng đạo đức xã hội trong thời đại mới\n\n**Nguồn tài liệu chính thức:**\n• [Tư tưởng Hồ Chí Minh về văn hóa và xây dựng con người mới](https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/noi-dung-tu-tuong-dao-duc/tu-tuong-ho-chi-minh-ve-van-hoa-va-xay-dung-con-nguoi-moi-32)\n• [Tư tưởng Hồ Chí Minh về xây dựng con người Việt Nam phát triển toàn diện](https://lyluanchinhtri.vn/tu-tuong-ho-chi-minh-ve-xay-dung-con-nguoi-viet-nam-phat-trien-toan-dien-va-su-van-dung-cua-dang-ta-trong-thoi-ky-doi-moi-186.html)\n• [Tư tưởng Hồ Chí Minh về đạo đức cách mạng](https://www.quanlynhanuoc.vn/2020/07/09/tu-tuong-ho-chi-minh-ve-dao-duc-cach-mang/)\n• Hồ Chí Minh toàn tập - Nhà xuất bản Chính trị quốc gia\n\n**Liên hệ Việt Nam:**\nTư tưởng Hồ Chí Minh là nền tảng lý luận quan trọng cho sự nghiệp cách mạng Việt Nam, định hướng cho việc xây dựng con người mới và phát triển đất nước.",
      
      "**Ý nghĩa thực tiễn của tư tưởng Hồ Chí Minh:**\n\n**Trong lĩnh vực văn hóa:**\n• Định hướng xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc\n• Phát huy vai trò của văn hóa trong cách mạng\n• Xây dựng đội ngũ nghệ sĩ chân chính\n\n**Trong lĩnh vực đạo đức:**\n• Hướng dẫn hành động cho cán bộ, đảng viên\n• Xây dựng đạo đức xã hội trong thời đại mới\n• Chống tham nhũng, tiêu cực, bảo vệ đạo đức cách mạng\n\n**Trong lĩnh vực con người:**\n• Định hướng xây dựng con người mới xã hội chủ nghĩa\n• Phát triển toàn diện con người Việt Nam\n• Kết hợp truyền thống dân tộc với tinh hoa nhân loại\n\n**Kết luận:**\nTư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người là di sản quý báu, có ý nghĩa lý luận và thực tiễn sâu sắc, cần được nghiên cứu, học tập và vận dụng sáng tạo trong thực tiễn."
    ]
  },

  // 6. Câu hỏi thường gặp
  faq: {
    keywords: ['câu hỏi', 'hỏi', 'giải thích', 'là gì', 'như thế nào', 'tại sao', 'help', 'giúp'],
    responses: [
      "**Các câu hỏi thường gặp về tư tưởng Hồ Chí Minh:**\n\n**1. Tư tưởng Hồ Chí Minh về văn hóa có gì đặc biệt?**\n• Bốn cách tiếp cận văn hóa độc đáo\n• Văn hóa là mặt trận, nghệ sĩ là chiến sĩ\n• Văn hóa phục vụ nhân dân, không phục vụ cá nhân\n\n**2. Đạo đức cách mạng theo Hồ Chí Minh là gì?**\n• Đạo đức là gốc của người cách mạng\n• Bốn chuẩn mực: Trung với nước, hiếu với dân; Cần, kiệm, liêm, chính; Thương yêu con người; Tinh thần quốc tế\n\n**3. Quan điểm của Hồ Chí Minh về con người?**\n• Con người là mục tiêu của cách mạng\n• Con người là chỉnh thể thống nhất\n• Cần xây dựng con người mới xã hội chủ nghĩa",
      
      "**4. Nghệ sĩ chân chính theo Hồ Chí Minh là gì?**\n• Phục vụ Tổ quốc và nhân dân\n• Gắn bó với nhân dân, khiêm tốn\n• Có đạo đức, trách nhiệm xã hội\n• Không 'tự phong', không coi thường quần chúng\n\n**5. Ý nghĩa thời sự của tư tưởng Hồ Chí Minh?**\n• Vẫn còn nguyên giá trị trong thời đại hiện nay\n• Định hướng xây dựng con người mới\n• Chống các biểu hiện tiêu cực trong xã hội\n• Phát huy vai trò của văn hóa nghệ thuật\n\n**6. Làm thế nào để vận dụng tư tưởng Hồ Chí Minh?**\n• Học tập, nghiên cứu sâu sắc\n• Vận dụng sáng tạo trong thực tiễn\n• Kết hợp truyền thống với hiện đại\n• Phục vụ nhân dân, phát triển đất nước"
    ]
  },

  // 7. Các khái niệm và thuật ngữ chuyên môn
  terminology: {
    keywords: ['định nghĩa', 'khái niệm', 'giải thích', 'ý nghĩa', 'bản chất', 'đặc điểm', 'tính chất', 'nguyên tắc'],
    responses: [
      "**Các khái niệm cơ bản trong Mác-Lênin:**\n\n**1. Giai cấp xã hội:**\n• **Định nghĩa:** Những nhóm người có địa vị khác nhau trong hệ thống sản xuất lịch sử nhất định\n• **Tiêu chí phân chia:** Quan hệ với tư liệu sản xuất, vai trò trong tổ chức xã hội của lao động, cách thức và mức độ chiếm lĩnh của cải xã hội\n\n**2. Đấu tranh giai cấp:**\n• **Bản chất:** Cuộc đấu tranh giữa các giai cấp có lợi ích đối lập\n• **Hình thức:** Kinh tế, chính trị, tư tưởng\n• **Vai trò:** Động lực phát triển xã hội có giai cấp\n\n**3. Cách mạng xã hội:**\n• **Khái niệm:** Sự biến đổi căn bản, toàn diện về chất của xã hội\n• **Điều kiện:** Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất không thể giải quyết được trong khuôn khổ chế độ cũ",
      
      "**Thuật ngữ về kinh tế chính trị:**\n\n**1. Phương thức sản xuất:**\n• **Định nghĩa:** Sự thống nhất giữa lực lượng sản xuất và quan hệ sản xuất\n• **Thành phần:** Lực lượng sản xuất (con người + tư liệu sản xuất) và quan hệ sản xuất\n\n**2. Lực lượng sản xuất:**\n• **Khái niệm:** Khả năng của con người tác động vào tự nhiên để tạo ra của cải vật chất\n• **Yếu tố:** Con người (lao động), đối tượng lao động, tư liệu lao động\n\n**3. Quan hệ sản xuất:**\n• **Bản chất:** Quan hệ giữa người với người trong quá trình sản xuất\n• **Nội dung:** Quan hệ sở hữu, quan hệ trong quá trình sản xuất, quan hệ phân phối\n\n**4. Cơ sở hạ tầng và kiến trúc thượng tầng:**\n• **Cơ sở hạ tầng:** Toàn bộ quan hệ sản xuất của xã hội\n• **Kiến trúc thượng tầng:** Các quan hệ chính trị, pháp lý, tư tưởng, văn hóa"
    ]
  },

  // Từ chối lịch sự
  outOfScope: [
    "Xin lỗi, câu hỏi này ngoài phạm vi \"Giáo trình học phần Tư tưởng Hồ Chí Minh\". Bạn có thể hỏi về:",
    "• Tư tưởng Hồ Chí Minh về văn hóa",
    "• Tư tưởng Hồ Chí Minh về đạo đức", 
    "• Tư tưởng Hồ Chí Minh về con người",
    "• Nghệ sĩ của nhân dân",
    "• Vai trò của văn hóa trong cách mạng",
    "• Đạo đức cách mạng và chuẩn mực đạo đức",
    "• Xây dựng con người mới xã hội chủ nghĩa",
    "• Liên hệ thực tiễn Việt Nam hiện nay"
  ]
};

// Hàm phân tích và tìm response phù hợp
function findBestResponse(message: string): string {
  const lowerMessage = message.toLowerCase().trim();
  
  // Nếu câu hỏi quá ngắn hoặc chỉ là chào hỏi
  if (lowerMessage.length < 3 || ['hi', 'hello', 'chào', 'xin chào'].includes(lowerMessage)) {
    return "Chào bạn! Tôi là trợ giảng ảo chuyên về Tư tưởng Hồ Chí Minh, dựa trên \"Giáo trình học phần Tư tưởng Hồ Chí Minh\".\n\n**Phạm vi hỗ trợ:**\n• Tư tưởng Hồ Chí Minh về văn hóa\n• Tư tưởng Hồ Chí Minh về đạo đức\n• Tư tưởng Hồ Chí Minh về con người\n• Nghệ sĩ của nhân dân\n• Vai trò của văn hóa trong cách mạng\n• Đạo đức cách mạng và chuẩn mực đạo đức\n• Xây dựng con người mới xã hội chủ nghĩa\n• Liên hệ thực tiễn Việt Nam hiện nay\n\n**Cam kết:** Trả lời chính xác, súc tích, khoa học. Cấu trúc rõ ràng với bullet points và logic: định nghĩa → luận điểm → kết luận.\n\nHãy đặt câu hỏi về các chủ đề trong phạm vi giáo trình.";
  }

  // Kiểm tra từng category và tính điểm match
  let bestMatch = { category: '', score: 0, response: '' };

  Object.entries(KNOWLEDGE_BASE).forEach(([categoryKey, categoryData]) => {
    if (categoryKey === 'outOfScope') return;
    
    const data = categoryData as { keywords: string[], responses: string[] };
    let score = 0;

    // Tính điểm dựa trên keywords
    data.keywords.forEach(keyword => {
      if (lowerMessage.includes(keyword)) {
        score += keyword.length; // Từ dài hơn có trọng số cao hơn
      }
    });

    // Bonus cho các từ khóa đặc biệt
    if (categoryKey === 'culture' && (lowerMessage.includes('hồ chí minh') || lowerMessage.includes('văn hóa') || lowerMessage.includes('nghệ thuật'))) {
      score += 5;
    }
    
    if (categoryKey === 'ethics' && (lowerMessage.includes('đạo đức') || lowerMessage.includes('cách mạng') || lowerMessage.includes('hồ chí minh'))) {
      score += 5;
    }
    
    if (categoryKey === 'human' && (lowerMessage.includes('con người') || lowerMessage.includes('hồ chí minh') || lowerMessage.includes('xây dựng'))) {
      score += 5;
    }
    
    if (categoryKey === 'artist' && (lowerMessage.includes('nghệ sĩ') || lowerMessage.includes('nhân dân') || lowerMessage.includes('nghệ thuật'))) {
      score += 5;
    }

    if (categoryKey === 'terminology' && (lowerMessage.includes('là gì') || lowerMessage.includes('nghĩa là') || lowerMessage.includes('khái niệm'))) {
      score += 8; // Ưu tiên cao cho câu hỏi định nghĩa
    }

    if (score > bestMatch.score) {
      // Chọn response phù hợp nhất trong category
      let responseIndex = 0;
      if (data.responses.length > 1) {
        // Logic chọn response cụ thể hơn
        if (categoryKey === 'culture' && lowerMessage.includes('nghệ thuật')) {
          responseIndex = 1;
        } else if (categoryKey === 'ethics' && (lowerMessage.includes('chuẩn mực') || lowerMessage.includes('đạo đức'))) {
          responseIndex = 1;
        } else if (categoryKey === 'human' && (lowerMessage.includes('mục tiêu') || lowerMessage.includes('cách mạng'))) {
          responseIndex = 1;
        } else if (categoryKey === 'artist' && (lowerMessage.includes('chân chính') || lowerMessage.includes('nhân dân'))) {
          responseIndex = 1;
        } else if (categoryKey === 'hcmGeneral') {
          if (lowerMessage.includes('thời sự') || lowerMessage.includes('hiện nay')) {
            responseIndex = 1; // Ý nghĩa thời sự
          }
        } else if (categoryKey === 'faq' && lowerMessage.includes('câu hỏi')) {
          responseIndex = 1;
        } else if (categoryKey === 'terminology') {
          if (lowerMessage.includes('kinh tế') || lowerMessage.includes('sản xuất') || lowerMessage.includes('phương thức')) {
            responseIndex = 1; // Thuật ngữ kinh tế
          }
        }
      }

      bestMatch = {
        category: categoryKey,
        score: score,
        response: data.responses[responseIndex]
      };
    }
  });

  // Nếu không tìm thấy match tốt, trả về từ chối
  if (bestMatch.score < 3) {
    return KNOWLEDGE_BASE.outOfScope.join('\n');
  }

  return bestMatch.response;
}

export async function POST(req: NextRequest) {
  try {
    const { message, conversation = [] } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Tin nhắn không được để trống' },
        { status: 400 }
      );
    }

    // Sử dụng offline chatbot thông minh
    console.log('Processing message with offline AI:', message);
    
    // Tìm response phù hợp nhất
    const responseText = findBestResponse(message);
    
    // Delay giả lập để tạo cảm giác "suy nghĩ"
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1500));

    console.log('Generated offline response');

    return NextResponse.json({
      message: responseText,
      usage: {
        prompt_tokens: message.length,
        completion_tokens: responseText.length,
        total_tokens: message.length + responseText.length
      }
    });

  } catch (error) {
    console.error('Offline chatbot error:', error);
    
    return NextResponse.json(
      { 
        error: 'Có lỗi xảy ra trong hệ thống chatbot',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
