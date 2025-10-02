import { NextRequest, NextResponse } from 'next/server';

// Knowledge base cho GR7_MLN GPT - Offline chatbot
const KNOWLEDGE_BASE = {
  // 1. Cơ sở thế giới quan & phương pháp luận
  worldview: {
    keywords: ['thế giới quan', 'phương pháp luận', 'duy vật', 'biện chứng', 'nhận thức', 'thực tiễn', 'mác', 'lênin', 'triết học'],
    responses: [
      "**Cơ sở thế giới quan của chủ nghĩa Mác-Lênin:**\n\n**Chủ nghĩa duy vật biện chứng:**\n• Thế giới là vật chất, tồn tại khách quan độc lập với ý thức\n• Vận động và phát triển là quy luật tuyệt đối của tồn tại\n• Mâu thuẫn là động lực nội tại của sự phát triển\n• Quy luật phủ định của phủ định\n• Quy luật chuyển hóa từ lượng sang chất\n• Quy luật thống nhất và đấu tranh của các mặt đối lập\n\n**Chủ nghĩa duy vật lịch sử:**\n• Tồn tại xã hội quyết định ý thức xã hội\n• Phương thức sản xuất là cơ sở của xã hội\n• Đấu tranh giai cấp là động lực phát triển xã hội\n• Vai trò của quần chúng nhân dân trong lịch sử\n\n**Ý nghĩa:** Cung cấp phương pháp luận khoa học để nhận thức và cải tạo thế giới, là nền tảng lý luận cho hoạt động cách mạng.",
      
      "**Phương pháp luận của chủ nghĩa Mác-Lênin:**\n\n**Nguyên tắc cơ bản:**\n• **Thực tiễn:** Xuất phát từ thực tiễn, quay về phục vụ thực tiễn\n• **Toàn diện:** Xem xét sự vật, hiện tượng trong mối liên hệ tổng thể\n• **Cụ thể:** Phân tích điều kiện, hoàn cảnh cụ thể\n• **Lịch sử:** Xem xét trong quá trình vận động, phát triển\n• **Logic và lịch sử:** Thống nhất giữa tư duy logic và tiến trình lịch sử\n\n**Các phương pháp cụ thể:**\n• Phân tích và tổng hợp\n• Quy납 và diễn dịch\n• Trừu tượng hóa và cụ thể hóa\n• Từ hiện tượng đến bản chất\n• Từ đơn giản đến phức tạp\n\n**Ứng dụng trong thực tiễn:**\n• Phân tích tình hình chính trị-xã hội\n• Xây dựng đường lối, chính sách của Đảng\n• Giải quyết các vấn đề thực tiễn của cuộc sống\n• Nghiên cứu khoa học xã hội\n\n**Liên hệ Việt Nam:** Đảng Cộng sản Việt Nam vận dụng sáng tạo phương pháp luận Mác-Lênin trong lãnh đạo cách mạng và xây dựng đất nước."
    ]
  },

  // 2. Hình thái kinh tế-xã hội  
  socioEconomic: {
    keywords: ['hình thái', 'kinh tế xã hội', 'nguyên thủy', 'nô lệ', 'phong kiến', 'tư bản', 'xã hội chủ nghĩa'],
    responses: [
      "**Học thuyết về hình thái kinh tế-xã hội:**\n\n**Định nghĩa:** Hình thái kinh tế-xã hội là giai đoạn phát triển của xã hội loài người, được quy định bởi phương thức sản xuất thống trị.\n\n**Năm hình thái:**\n• Cộng đồng nguyên thủy\n• Chế độ nô lệ\n• Chế độ phong kiến\n• Chế độ tư bản chủ nghĩa\n• Chế độ xã hội chủ nghĩa\n\n**Quy luật chuyển hóa:** Từ thấp đến cao, thông qua cách mạng xã hội khi lực lượng sản xuất không phù hợp với quan hệ sản xuất.",
      
      "**Đặc trưng của các hình thái kinh tế-xã hội:**\n\n**Chế độ tư bản chủ nghĩa:**\n• Tư liệu sản xuất thuộc về tư bản gia\n• Quan hệ bóc lột giá trị thặng dư\n• Mâu thuẫn giai cấp tư sản - vô sản\n\n**Chế độ xã hội chủ nghĩa:**\n• Công hữu về tư liệu sản xuất\n• Phân phối theo lao động\n• Mục tiêu phục vụ nhân dân\n\n**Liên hệ Việt Nam:** Đang trong thời kỳ quá độ lên CNXH với đặc trưng nền kinh tế thị trường định hướng xã hội chủ nghĩa."
    ]
  },

  // 3. Kinh tế chính trị Mác-Lênin
  politicalEconomy: {
    keywords: ['kinh tế chính trị', 'giá trị thặng dư', 'hàng hóa', 'tiền tệ', 'tư bản', 'lao động'],
    responses: [
      "**Học thuyết về hàng hóa và tiền tệ:**\n\n**Hàng hóa:**\n• Định nghĩa: Sản phẩm lao động để trao đổi\n• Hai thuộc tính: giá trị sử dụng và giá trị\n• Lao động hai mặt: cụ thể và trừu tượng\n\n**Tiền tệ:**\n• Hàng hóa đặc biệt làm thước đo giá trị chung\n• Chức năng: thước đo giá trị, phương tiện lưu thông, tích lũy, thanh toán\n\n**Ý nghĩa:** Cơ sở để hiểu bản chất của nền kinh tế hàng hóa và quan hệ trao đổi.",
      
      "**Học thuyết về giá trị thặng dư:**\n\n**Bản chất:** Phần giá trị mà công nhân tạo ra nhưng không được trả công.\n\n**Quá trình tạo ra:**\n• Tư bản gia mua sức lao động\n• Sức lao động tạo ra giá trị lớn hơn giá trị của nó\n• Chênh lệch này là giá trị thặng dư\n\n**Hai hình thức:**\n• Giá trị thặng dư tuyệt đối: kéo dài thời gian lao động\n• Giá trị thặng dư tương đối: tăng năng suất lao động\n\n**Ý nghĩa:** Bóc trần bản chất bóc lột của chế độ tư bản chủ nghĩa."
    ]
  },

  // 4. CNXH khoa học
  scientificSocialism: {
    keywords: ['cnxh', 'xã hội chủ nghĩa', 'cộng sản', 'giai cấp công nhân', 'cách mạng'],
    responses: [
      "**Chủ nghĩa xã hội khoa học:**\n\n**Khái niệm:** Học thuyết về sứ mệnh lịch sử của giai cấp công nhân, con đường và phương pháp xây dựng xã hội mới.\n\n**Nội dung cơ bản:**\n• Sứ mệnh lịch sử của giai cấp công nhân\n• Học thuyết về cách mạng xã hội chủ nghĩa\n• Học thuyết về thời kỳ quá độ\n• Học thuyết về xã hội cộng sản\n\n**Đặc trưng khoa học:** Dựa trên cơ sở khoa học của chủ nghĩa duy vật lịch sử và kinh tế chính trị Mác-Lênin.",
      
      "**Thời kỳ quá độ lên chủ nghĩa xã hội:**\n\n**Khái niệm:** Giai đoạn chuyển đổi từ chế độ tư bản chủ nghĩa lên chế độ xã hội chủ nghĩa.\n\n**Nhiệm vụ cơ bản:**\n• Xây dựng cơ sở vật chất kỹ thuật của CNXH\n• Cải tạo quan hệ sản xuất theo hướng xã hội chủ nghĩa\n• Xây dựng con người mới xã hội chủ nghĩa\n• Bảo vệ và củng cố chính quyền nhân dân\n\n**Liên hệ Việt Nam:** Việt Nam đang trong thời kỳ quá độ với mô hình kinh tế thị trường định hướng CNXH."
    ]
  },

  // 5. Vấn đề dân tộc & tôn giáo
  nationalReligious: {
    keywords: ['dân tộc', 'tôn giáo', 'quyền dân tộc', 'chính sách dân tộc', '54 dân tộc', 'độc lập dân tộc', 'tự quyết', 'xu hướng', 'liên hiệp', 'lãnh thổ', 'việt nam'],
    responses: [
      "**Học thuyết Mác-Lênin về vấn đề dân tộc:**\n\n**Khái niệm dân tộc (theo nghĩa rộng):** Cộng đồng người ổn định làm thành nhân dân một nước, có lãnh thổ riêng, nền kinh tế thống nhất, có ngôn ngữ chung và có ý thức về sự thống nhất của mình.\n\n**Khái niệm dân tộc (theo nghĩa hẹp - Ethnic):** Cộng đồng tộc người được hình thành trong lịch sử, có mối liên hệ chặt chẽ và bền vững, có chung ý thức tự giác tộc người, ngôn ngữ và văn hóa.\n\n**5 đặc trưng cơ bản:**\n• **Lãnh thổ chung:** Vùng đất ổn định không gian sinh tồn\n• **Kinh tế chung:** Phương thức sản xuất, quan hệ kinh tế thống nhất  \n• **Ngôn ngữ chung:** Công cụ giao tiếp chủ yếu\n• **Văn hóa-tâm lý chung:** Truyền thống, phong tục, tập quán, y thức tự giác tộc người\n• **Ý thức tự giác tộc người:** Tiêu chí quan trọng nhất để phân định một tộc người",
      
      "**Hai xu hướng khách quan của sự phát triển dân tộc (V.I. Lênin):**\n\n**1. Xu hướng thứ nhất - Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập:**\n• Nguyên nhân: Do sự thúc tỉnh, sự trưởng thành về ý thức dân tộc\n• Biểu hiện: Các dân tộc đều có nghị vụ và quyền lợi riêng trên tất cả các lĩnh vực\n• Quyền tự quyết: Quyền của các dân tộc tự quyết định lấy vận mệnh của dân tộc mình\n\n**2. Xu hướng thứ hai - Các dân tộc trong từng quốc gia muốn liên hiệp lại với nhau:**\n• Biểu hiện: Sự phát triển của lực lượng sản xuất, khoa học và công nghệ\n• Mục đích: Làm xuất hiện nhu cầu xóa bỏ hàng rào ngăn cách giữa các dân tộc\n• Kết quả: Các dân tộc xích lại gần nhau\n\n**Mối quan hệ:** Hai xu hướng không đối lập mà bổ sung, cùng tồn tại trong tiến trình phát triển dân tộc.",
      
      "**Đặc điểm dân tộc Việt Nam:**\n\n**Đa dạng dân tộc:**\n• **54 dân tộc** với đặc điểm đa dạng về lịch sử hình thành\n• **Dân tộc Kinh (Việt):** Đa số 85,3% dân số (82.085.826 người)\n• **53 dân tộc thiểu số:** 14,7% dân số, trong đó 6 dân tộc có dân số trên 1 triệu người\n\n**Phân bố địa lý đặc trưng:**\n• **Vùng trung du và miền núi phía Bắc và Tây Nguyên:** Nơi sinh sống chủ yếu của dân tộc thiểu số\n• **Vùng biên giới:** Có vị trí chiến lược quan trọng\n• **Đặc điểm chung:** Có chung một vùng lãnh thổ ổn định, yếu tố phân biệt dân tộc chủ yếu ở địa bàn có vị trí chiến lược quan trọng\n\n**Đặc trưng văn hóa-xã hội:**\n• **Ngôn ngữ:** Đa dạng với nhiều hệ ngôn ngữ khác nhau\n• **Văn hóa:** Phong phú, đậm đà bản sắc dân tộc\n• **Tôn giáo-tín ngưỡng:** Đa dạng các hình thức tín ngưỡng truyền thống",
      
      "**Chính sách dân tộc của Đảng và Nhà nước Việt Nam:**\n\n**Nguyên tắc cơ bản:**\n• **Bình đẳng:** Các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc\n• **Đoàn kết:** Từ chối những giá trị văn hóa dân tộc không phù hợp với văn hóa các dân tộc khác\n• **Tương trợ, cùng phát triển:** Hỗ trợ phát triển kinh tế-xã hội vùng dân tộc thiểu số\n\n**Chính sách cụ thể trong thời kỳ quá độ:**\n• **Độc lập tự chủ:** Xử lý đúng mối quan hệ giữa độc lập dân tộc và tự chủ về kinh tế\n• **Bảo vệ lãnh thổ:** Là yếu tố then chốt quyết định sự tồn tại và phát triển\n• **Phát triển toàn diện:** Kinh tế, chính trị, văn hóa, xã hội\n• **Liên hệ quốc tế:** Hội nhập với thế giới trên cơ sở bình đẳng\n\n**Thành tựu đạt được:**\n• Xây dựng khối đại đoàn kết toàn dân tộc Việt Nam\n• 54 cộng đồng tộc người đang được Đảng và Nhà nước quan tâm đặc biệt"
    ]
  },

  // 6. Nhà nước & cách mạng
  stateRevolution: {
    keywords: ['nhà nước', 'cách mạng', 'chính quyền', 'dân chủ', 'chuyên chính'],
    responses: [
      "**Học thuyết Mác-Lênin về nhà nước:**\n\n**Bản chất nhà nước:**\n• Công cụ chuyên chính của giai cấp thống trị\n• Sản phẩm của mâu thuẫn giai cấp không thể dung hòa\n• Máy móc bạo lực đặc biệt\n\n**Chức năng nhà nước:**\n• Đối nội: duy trì trật tự, quản lý xã hội\n• Đối ngoại: bảo vệ độc lập, chủ quyền\n\n**Nhà nước CNXH:** Chuyên chính vô sản, dân chủ rộng rãi cho nhân dân lao động.",
      
      "**Học thuyết về cách mạng xã hội:**\n\n**Khái niệm:** Sự thay đổi căn bản về chất của xã hội, chuyển từ hình thái này sang hình thái khác.\n\n**Điều kiện cách mạng:**\n• Khách quan: khủng hoảng xã hội sâu sắc\n• Chủ quan: ý thức và tổ chức của giai cấp cách mạng\n\n**Hai loại cách mạng:**\n• Cách mạng dân chủ tư sản\n• Cách mạng xã hội chủ nghĩa\n\n**Liên hệ Việt Nam:** Cách mạng Tháng Tám 1945 và con đường đi lên CNXH."
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
    "Xin lỗi, câu hỏi này ngoài phạm vi giáo trình Mác–Lênin. Bạn có thể hỏi về:",
    "• Cơ sở thế giới quan & phương pháp luận",
    "• Hình thái kinh tế–xã hội", 
    "• Kinh tế chính trị Mác–Lênin",
    "• CNXH khoa học",
    "• Vấn đề dân tộc & tôn giáo",
    "• Nhà nước & cách mạng",
    "• Liên hệ đường lối Đảng và thực tiễn Việt Nam",
    "• Các khái niệm và thuật ngữ chuyên môn"
  ]
};

// Hàm phân tích và tìm response phù hợp
function findBestResponse(message: string): string {
  const lowerMessage = message.toLowerCase().trim();
  
  // Nếu câu hỏi quá ngắn hoặc chỉ là chào hỏi
  if (lowerMessage.length < 3 || ['hi', 'hello', 'chào', 'xin chào'].includes(lowerMessage)) {
    return "Chào bạn! Tôi là trợ giảng ảo chuyên về Chủ nghĩa Mác–Lênin, dựa trên giáo trình \"Những nguyên lý cơ bản của CN Mác–Lênin\".\n\n**Phạm vi hỗ trợ:**\n• Cơ sở thế giới quan & phương pháp luận\n• Hình thái kinh tế–xã hội\n• Kinh tế chính trị Mác–Lênin\n• CNXH khoa học\n• Vấn đề dân tộc & tôn giáo\n• Nhà nước & cách mạng\n• Liên hệ đường lối Đảng và thực tiễn Việt Nam\n\n**Cam kết:** Trả lời chính xác, súc tích, khoa học. Cấu trúc rõ ràng với bullet points và logic: định nghĩa → luận điểm → kết luận.\n\nHãy đặt câu hỏi về các chủ đề trong phạm vi giáo trình.";
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
    if (categoryKey === 'worldview' && (lowerMessage.includes('mác') || lowerMessage.includes('lênin') || lowerMessage.includes('triết học'))) {
      score += 5;
    }
    
    if (categoryKey === 'nationalReligious' && (lowerMessage.includes('việt nam') || lowerMessage.includes('54'))) {
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
        if (categoryKey === 'worldview' && lowerMessage.includes('phương pháp')) {
          responseIndex = 1;
        } else if (categoryKey === 'socioEconomic' && (lowerMessage.includes('đặc trưng') || lowerMessage.includes('tư bản'))) {
          responseIndex = 1;
        } else if (categoryKey === 'politicalEconomy' && lowerMessage.includes('giá trị')) {
          responseIndex = 1;
        } else if (categoryKey === 'scientificSocialism' && lowerMessage.includes('quá độ')) {
          responseIndex = 1;
        } else if (categoryKey === 'nationalReligious') {
          if (lowerMessage.includes('chính sách') || lowerMessage.includes('việt nam')) {
            responseIndex = 3; // Chính sách VN
          } else if (lowerMessage.includes('đặc điểm') || lowerMessage.includes('54')) {
            responseIndex = 2; // Đặc điểm VN
          } else if (lowerMessage.includes('xu hướng') || lowerMessage.includes('lênin')) {
            responseIndex = 1; // Hai xu hướng
          }
        } else if (categoryKey === 'stateRevolution' && lowerMessage.includes('cách mạng')) {
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
