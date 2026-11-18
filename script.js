document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Bilingual Dictionary (English & Exact Vietnamese Translation)
       ========================================================================== */
    const translations = {
        en: {
            nav_logo: 'Nguyen Minh Hang <small>Portfolio</small>',
            nav_home: 'Home',
            nav_about: 'About',
            nav_edu: 'Education',
            nav_exp: 'Experience',
            nav_proj: 'Projects',
            nav_act: 'Activities',
            nav_events: 'Events',

            // Slide 1: Hero
            hero_badge: 'Foreign Trade University',
            hero_title: 'Nguyen Minh Hang',
            hero_subtitle: 'International Business Student | Supply Chain Management & Business Operations',
            hero_desc: 'Final-year International Business student characterized by strong attention to detail, carefulness, and a high sense of responsibility. I believe every experience offers valuable opportunities for growth and learning, which motivates me to embrace new challenges and continuously expand my capabilities. Seeking an opportunity to apply my academic knowledge of economics and business to practical work while developing my professional skills in a dynamic and professional working environment.',
            pill_location: '📍 Hanoi, Vietnam',
            pill_dob: '🎂 Sept 20, 2005',
            btn_explore: 'Explore Portfolio',
            btn_view_exp: 'View Experience',

            // Slide 2: About
            s2_kicker: 'PROFILE OVERVIEW',
            s2_heading: 'About Me & Core Competencies',
            s2_subtitle: 'Driven by strategic thinking, data-backed insights, and operational execution',
            s2_card_title: 'Professional Summary',
            s2_p1: 'Final-year International Business student at Foreign Trade University with academic knowledge of international business operations, supply chain management, and international trade.',
            s2_p2: 'Experienced in community development, relationship building, and cross-cultural communication, with a track record of managing community channels and coordinating activities. Brings a strong interest in Supply Chain Management, Business Operations, business strategy, data-driven problem-solving, and technology-driven business growth, alongside an adaptable mindset and a proactive approach to learning in dynamic, multicultural environments.',
            s2_sk1_title: 'Product & Operations',
            s2_sk1_desc: 'Market positioning, pricing strategy, consumer differentiation & workflow optimization.',
            s2_sk2_title: 'Data & Analytics',
            s2_sk2_desc: 'Excel (data cleaning, PivotTables, lookup functions, data analysis) & Power BI visualization.',
            s2_sk3_title: 'Leadership & Team Coordination',
            s2_sk3_desc: 'Task delegation, volunteer onboarding curriculum design, team leadership & class execution.',
            s2_sk4_title: 'Cross-Cultural Communication',
            s2_sk4_desc: 'Multicultural relationship building, event facilitation, presentation & community engagement.',

            // Slide 3: Education
            s3_kicker: 'ACADEMIC BACKGROUND',
            s3_heading: 'Education & Relevant Coursework',
            s3_period: 'Sep 2023 - Apr 2027 (Expected)',
            s3_uni: 'Foreign Trade University',
            s3_degree: 'Bachelor of International Business',
            s3_gpa: 'GPA: <strong>3.38 / 4.0</strong>',
            s3_cw_heading: 'Relevant Coursework',
            s3_c1_title: 'International Business Operations',
            s3_c1_desc: 'Global business operations & strategy execution',
            s3_c2_title: 'Supply Chain Management',
            s3_c2_desc: 'Logistics, procurement & supply chain optimization',
            s3_c3_title: 'International Trade Transactions',
            s3_c3_desc: 'Trade contracts, export-import operations & documentation',
            s3_c4_title: 'International Trade Policy',
            s3_c4_desc: 'Trade agreements, tariff structures & regulatory policies',

            // Slide 4: Experience
            s4_kicker: 'CAREER HISTORY',
            s4_heading: 'Professional Experience',
            s4_company: 'HELINK INTERNATIONAL COOPERATE CO., LTD',
            s4_role: 'Community Development Specialist',
            s4_date: 'Nov 2025 - Present',
            s4_m1: 'International Members Connected',
            s4_m2: 'Meetup Community Reach',
            s4_m3: 'Weekly Activities Coordinated',
            s4_m4: 'Active Participants / Event',
            s4_b1: 'Connected with <strong>150+ international community members</strong> through Meetup and other community channels to expand HNE’s network and support participation in language and cultural exchange activities.',
            s4_b2: 'Managed an <strong>800+ member international community</strong> on Meetup and coordinated <strong>3+ activities/week</strong>, maintaining 30 - 40 active participants per activity to drive continuous engagement.',

            // Slide 5: Projects
            s5_kicker: 'INITIATIVES & STRATEGY',
            s5_heading: 'Leadership & Projects',
            s5_p1_badge: 'Leadership & Training',
            s5_p1_title: 'HANOI EXPLORING',
            s5_p1_sub: 'Head of Academic Team (Apr 2026 - Present)',
            s5_p1_b1: 'Led a team of <strong>7–10 members</strong>, assigning responsibilities and providing guidance to ensure effective execution of community classes.',
            s5_p1_b2: 'Designed and delivered a <strong>one-month onboarding and training program</strong> for new volunteers, enabling them to independently deliver Vietnamese lessons with solid teaching and classroom management skills and develop lesson plans tailored to learners\' needs.',
            s5_p2_badge: 'Product Strategy & Research',
            s5_p2_title: 'PROJECT SOFTIE LAUNDRY DETERGENT',
            s5_p2_sub: 'Aug 2025 - Nov 2025',
            s5_p2_b1: 'Conducted competitor and pricing analysis across relevant laundry detergent products to assess market positioning and consumer-oriented product differentiation.',
            s5_p2_b2: 'Compared product features, pricing, and competitor positioning to identify potential market opportunities.',

            // Slide 6: Activities
            s6_kicker: 'SOCIAL RESPONSIBILITY',
            s6_heading: 'Extra-Curricular & Community Impact',
            s6_a1_name: 'Community Volunteer Campaign',
            s6_a1_role: 'Volunteer & Logistics Coordinator',
            s6_a1_desc: 'Supported fundraising activities and managed end-to-end logistics operations for charitable relief programs in remote, underprivileged mountain regions.',
            s6_a2_name: 'Book & Action Club',
            s6_a2_role: 'Head of Content & Logistics (Viet Yen No.1 High School)',
            s6_a2_b1: 'Created, curated, and approved official media and communication content on the club\'s official Fanpage.',
            s6_a2_b2: 'Planned, assigned tasks, and supervised member execution for large-scale book reading cultural events.',

            // Slide 7: Events
            s7_kicker: 'EVENT GALLERY',
            s7_heading: 'Featured Cultural Events & Workshops',
            s7_subtitle: 'Hands-on workshops, cooking classes, and language exchanges organized for international guests',
            s7_e1_tag: 'Cultural Workshop',
            s7_e1_title: 'Workshop "The Bamboo Soul"',
            s7_e1_desc: 'Interactive craft workshop guiding international guests in making traditional Vietnamese bamboo fans.',
            s7_e2_tag: 'Vietnamese Culinary',
            s7_e2_title: 'Workshop "The Chè Khoai Dẻo"',
            s7_e2_desc: 'Culinary exploration of Vietnamese sweet soup culture with hands-on cooking demonstration.',
            s7_e3_tag: 'Cultural Exchange',
            s7_e3_title: 'Vietnamese Dessert Masterclass',
            s7_e3_desc: 'Vibrant cultural gathering bringing foreigners together to taste and craft authentic Vietnamese recipes.',
            s7_e4_tag: 'Film & Folklore',
            s7_e4_title: 'The Movie Night: "Ma Da"',
            s7_e4_desc: 'Film screening and discussion on Vietnamese folklore, river mythology, and spiritual heritage.',
            s7_e5_tag: 'Cooking Class',
            s7_e5_title: 'Nem Rán Cooking Masterclass',
            s7_e5_desc: 'Hands-on culinary class teaching international visitors how to wrap and fry authentic Vietnamese spring rolls.',
            s7_e6_tag: 'Language & Education',
            s7_e6_title: 'Community Vietnamese Classes',
            s7_e6_desc: 'Engaging conversational Vietnamese language classes delivered for expat community members at HNE.',

            // Controls
            btn_prev: '◀ Prev',
            btn_next: 'Next ▶',
            page_label: 'Page'
        },
        vi: {
            nav_logo: 'Nguyễn Minh Hằng <small>Hồ sơ năng lực</small>',
            nav_home: 'Trang chủ',
            nav_about: 'Giới thiệu',
            nav_edu: 'Học vấn',
            nav_exp: 'Kinh nghiệm',
            nav_proj: 'Dự án',
            nav_act: 'Hoạt động',
            nav_events: 'Sự kiện',

            // Slide 1: Hero
            hero_badge: 'Trường Đại học Ngoại thương',
            hero_title: 'Nguyễn Minh Hằng',
            hero_subtitle: 'Sinh viên Kinh doanh Quốc tế | Quản trị Chuỗi cung ứng & Vận hành Kinh doanh',
            hero_desc: 'Sinh viên năm cuối ngành Kinh doanh Quốc tế với sự tỉ mỉ, cẩn thận và tinh thần trách nhiệm cao. Tôi tin rằng mỗi trải nghiệm đều mang lại cơ hội quý giá để trưởng thành và học hỏi, tạo động lực giúp tôi sẵn sàng đón nhận những thử thách mới và không ngừng hoàn thiện năng lực của bản thân. Mong muốn tìm kiếm cơ hội áp dụng những kiến thức học thuật về kinh tế và kinh doanh vào thực tiễn công việc, đồng thời phát triển kỹ năng chuyên môn trong một môi trường làm việc năng động và chuyên nghiệp.',
            pill_location: '📍 Hà Nội, Việt Nam',
            pill_dob: '🎂 20/09/2005',
            btn_explore: 'Khám phá Portfolio',
            btn_view_exp: 'Xem Kinh nghiệm',

            // Slide 2: About
            s2_kicker: 'TỔNG QUAN HỒ SƠ',
            s2_heading: 'Giới thiệu Bản thân & Năng lực Cốt lõi',
            s2_subtitle: 'Định hướng bởi tư duy chiến lược, phân tích dựa trên dữ liệu và thực thi vận hành hiệu quả',
            s2_card_title: 'Tóm tắt Chuyên môn',
            s2_p1: 'Sinh viên năm cuối ngành Kinh doanh Quốc tế tại Trường Đại học Ngoại thương với nền tảng kiến thức học thuật về nghiệp vụ kinh doanh quốc tế, quản trị chuỗi cung ứng và thương mại quốc tế.',
            s2_p2: 'Có kinh nghiệm trong phát triển cộng đồng, xây dựng mối quan hệ và giao tiếp đa văn hóa, với bề dày thành tích trong việc quản lý các kênh cộng đồng và điều phối hoạt động. Có niềm yêu thích và định hướng mạnh mẽ trong lĩnh vực Quản trị Chuỗi cung ứng, Vận hành Kinh doanh, chiến lược kinh doanh, giải quyết vấn đề dựa trên dữ liệu và tăng trưởng kinh doanh dựa trên công nghệ, cùng tư duy linh hoạt và tinh thần chủ động học hỏi trong môi trường đa văn hóa năng động.',
            s2_sk1_title: 'Sản phẩm & Vận hành',
            s2_sk1_desc: 'Định vị thị trường, chiến lược định giá, tạo khác biệt sản phẩm hướng tới người tiêu dùng & tối ưu hóa quy trình.',
            s2_sk2_title: 'Dữ liệu & Phân tích',
            s2_sk2_desc: 'Excel (làm sạch dữ liệu, PivotTables, các hàm tra cứu, phân tích dữ liệu) & trực quan hóa dữ liệu bằng Power BI.',
            s2_sk3_title: 'Lãnh đạo & Điều phối Đội ngũ',
            s2_sk3_desc: 'Phân công công việc, thiết kế chương trình đào tạo hội nhập cho tình nguyện viên, dẫn dắt đội nhóm & vận hành lớp học.',
            s2_sk4_title: 'Giao tiếp Đa văn hóa',
            s2_sk4_desc: 'Xây dựng mối quan hệ đa văn hóa, điều phối sự kiện, thuyết trình & gắn kết cộng đồng quốc tế.',

            // Slide 3: Education
            s3_kicker: 'NỀN TẢNG HỌC VẤN',
            s3_heading: 'Học vấn & Các Môn học Liên quan',
            s3_period: 'Tháng 09/2023 - Tháng 04/2027 (Dự kiến)',
            s3_uni: 'Trường Đại học Ngoại thương',
            s3_degree: 'Cử nhân Kinh doanh Quốc tế',
            s3_gpa: 'GPA: <strong>3.38 / 4.0</strong>',
            s3_cw_heading: 'Các Môn học Liên quan',
            s3_c1_title: 'Nghiệp vụ Kinh doanh Quốc tế',
            s3_c1_desc: 'Nghiệp vụ kinh doanh toàn cầu & thực thi chiến lược',
            s3_c2_title: 'Quản trị Chuỗi cung ứng',
            s3_c2_desc: 'Logistics, thu mua & tối ưu hóa chuỗi cung ứng',
            s3_c3_title: 'Giao dịch Thương mại Quốc tế',
            s3_c3_desc: 'Hợp đồng thương mại, nghiệp vụ xuất nhập khẩu & chứng từ',
            s3_c4_title: 'Chính sách Thương mại Quốc tế',
            s3_c4_desc: 'Hiệp định thương mại, cơ cấu thuế quan & chính sách quản lý',

            // Slide 4: Experience
            s4_kicker: 'QUÁ TRÌNH LÀM VIỆC',
            s4_heading: 'Kinh nghiệm Làm việc',
            s4_company: 'CÔNG TY TNHH HỢP TÁC QUỐC TẾ HELINK (HELINK INTERNATIONAL)',
            s4_role: 'Chuyên viên Phát triển Cộng đồng',
            s4_date: 'Tháng 11/2025 - Hiện tại',
            s4_m1: 'Thành viên Quốc tế Đã Kết nối',
            s4_m2: 'Thành viên Cộng đồng trên Meetup',
            s4_m3: 'Hoạt động Điều phối Hàng tuần',
            s4_m4: 'Người Tham gia Tích cực / Sự kiện',
            s4_b1: 'Kết nối với <strong>hơn 150 thành viên cộng đồng quốc tế</strong> thông qua Meetup và các kênh cộng đồng khác nhằm mở rộng mạng lưới của HNE và hỗ trợ tham gia các hoạt động giao lưu ngôn ngữ, văn hóa.',
            s4_b2: 'Quản lý cộng đồng quốc tế <strong>hơn 800 thành viên</strong> trên Meetup và điều phối <strong>hơn 3 hoạt động/tuần</strong>, duy trì từ 30 - 40 người tham gia tích cực mỗi hoạt động để thúc đẩy sự gắn kết liên tục.',

            // Slide 5: Projects
            s5_kicker: 'SÁNG KIẾN & CHIẾN LƯỢC',
            s5_heading: 'Vai trò Lãnh đạo & Dự án',
            s5_p1_badge: 'Lãnh đạo & Đào tạo',
            s5_p1_title: 'HANOI EXPLORING',
            s5_p1_sub: 'Trưởng ban Học thuật (Tháng 04/2026 - Hiện tại)',
            s5_p1_b1: 'Dẫn dắt đội ngũ <strong>7–10 thành viên</strong>, phân công trách nhiệm và hướng dẫn chuyên môn nhằm đảm bảo việc vận hành hiệu quả các lớp học cộng đồng.',
            s5_p1_b2: 'Thiết kế và trực tiếp triển khai <strong>chương trình đào tạo và hội nhập kéo dài 1 tháng</strong> cho các tình nguyện viên mới, giúp họ có thể độc lập giảng dạy các bài học tiếng Việt với kỹ năng sư phạm và quản lý lớp học vững vàng, đồng thời xây dựng giáo án phù hợp với nhu cầu của người học.',
            s5_p2_badge: 'Chiến lược & Nghiên cứu Sản phẩm',
            s5_p2_title: 'DỰ ÁN NƯỚC GIẶT SOFTIE',
            s5_p2_sub: 'Tháng 08/2025 - Tháng 11/2025',
            s5_p2_b1: 'Thực hiện phân tích đối thủ cạnh tranh và chiến lược giá trên các dòng sản phẩm nước giặt liên quan để đánh giá định vị thị trường và sự khác biệt hóa sản phẩm hướng tới người tiêu dùng.',
            s5_p2_b2: 'So sánh đặc tính sản phẩm, mức giá và định vị của đối thủ cạnh tranh nhằm xác định các cơ hội thị trường tiềm năng.',

            // Slide 6: Activities
            s6_kicker: 'TRÁCH NHIỆM XÃ HỘI',
            s6_heading: 'Hoạt động Ngoại khóa & Đóng góp Cộng đồng',
            s6_a1_name: 'Chiến dịch Tình nguyện Cộng đồng',
            s6_a1_role: 'Tình nguyện viên & Điều phối Hậu cần',
            s6_a1_desc: 'Hỗ trợ các hoạt động gây quỹ và quản lý toàn bộ công tác hậu cần cho các chương trình cứu trợ thiện nguyện tại các vùng núi xa xôi, có hoàn cảnh khó khăn.',
            s6_a2_name: 'Câu lạc bộ Sách và Hành động',
            s6_a2_role: 'Trưởng ban Nội dung & Hậu cần (Trường THPT Việt Yên số 1)',
            s6_a2_b1: 'Xây dựng, biên tập và phê duyệt các nội dung truyền thông chính thức trên Fanpage của câu lạc bộ.',
            s6_a2_b2: 'Lập kế hoạch, phân công nhiệm vụ và giám sát các thành viên triển khai các sự kiện văn hóa đọc sách quy mô lớn.',

            // Slide 7: Events
            s7_kicker: 'THƯ VIỆN SỰ KIỆN',
            s7_heading: 'Các Sự kiện Văn hóa & Workshop Nổi bật',
            s7_subtitle: 'Các buổi workshop trải nghiệm thực tế, lớp học nấu ăn và giao lưu ngôn ngữ được tổ chức cho khách quốc tế',
            s7_e1_tag: 'Workshop Văn hóa',
            s7_e1_title: 'Workshop "The Bamboo Soul" (Hồn Tre Việt)',
            s7_e1_desc: 'Workshop thủ công tương tác hướng dẫn du khách quốc tế tự tay làm quạt nan tre truyền thống của Việt Nam.',
            s7_e2_tag: 'Ẩm thực Việt Nam',
            s7_e2_title: 'Workshop "The Chè Khoai Dẻo"',
            s7_e2_desc: 'Khám phá văn hóa ẩm thực chè truyền thống Việt Nam kết hợp hướng dẫn thực hành nấu ăn trực tiếp.',
            s7_e3_tag: 'Giao lưu Văn hóa',
            s7_e3_title: 'Lớp học Làm Món Tráng miệng Việt Nam',
            s7_e3_desc: 'Buổi gặp gỡ giao lưu văn hóa sôi nổi gắn kết bạn bè quốc tế cùng thưởng thức và tự tay chế biến các công thức món ăn Việt chuẩn vị.',
            s7_e4_tag: 'Điện ảnh & Văn hóa Dân gian',
            s7_e4_title: 'Đêm Điện ảnh: "Ma Da"',
            s7_e4_desc: 'Buổi chiếu phim và thảo luận về văn hóa dân gian Việt Nam, truyền thuyết sông nước và di sản tâm linh.',
            s7_e5_tag: 'Lớp học Nấu ăn',
            s7_e5_title: 'Lớp học Làm Nem Rán Truyền thống',
            s7_e5_desc: 'Lớp học ẩm thực thực hành hướng dẫn du khách quốc tế cách gói và rán món nem rán truyền thống của Việt Nam.',
            s7_e6_tag: 'Ngôn ngữ & Giáo dục',
            s7_e6_title: 'Lớp học Tiếng Việt Cộng đồng',
            s7_e6_desc: 'Các lớp học giao tiếp tiếng Việt sinh động được giảng dạy cho các thành viên cộng đồng người nước ngoài tại HNE.',

            // Controls
            btn_prev: '◀ Trước',
            btn_next: 'Tiếp ▶',
            page_label: 'Trang'
        }
    };

    let currentLang = localStorage.getItem('portfolio-lang') || 'en';

    /* ==========================================================================
       2. Slide Navigation Engine (Controlled via Prev, Next, Dots, Nav & Keys)
       ========================================================================== */
    const slidesWrapper = document.getElementById('slides-wrapper');
    const slides = document.querySelectorAll('.slide-page');
    const slideDotsContainer = document.getElementById('slide-dots');
    const slideCounter = document.getElementById('slide-counter');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const totalSlides = slides.length;
    let currentSlideIndex = 0;
    let isTransitioning = false;

    function updateSlideCounter() {
        if (slideCounter) {
            const pageNum = String(currentSlideIndex + 1).padStart(2, '0');
            const totalNum = String(totalSlides).padStart(2, '0');
            const label = translations[currentLang].page_label || 'Page';
            slideCounter.textContent = `${label} ${pageNum} / ${totalNum}`;
        }
    }

    // Dynamically build slide dots
    if (slideDotsContainer) {
        slideDotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `slide-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(i);
            });
            slideDotsContainer.appendChild(dot);
        }
    }

    window.goToSlide = function(index) {
        if (index < 0 || index >= totalSlides || isTransitioning) return;
        
        isTransitioning = true;
        currentSlideIndex = index;

        // Slide transform
        slidesWrapper.style.transform = `translateX(-${currentSlideIndex * 100}vw)`;

        // Update active slide class
        slides.forEach((slide, idx) => {
            if (idx === currentSlideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update navigation dots
        const dots = document.querySelectorAll('.slide-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update navbar active state
        navLinks.forEach((link, idx) => {
            if (idx === currentSlideIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update counter badge text
        updateSlideCounter();

        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    };

    window.nextSlide = function() {
        if (currentSlideIndex < totalSlides - 1) {
            goToSlide(currentSlideIndex + 1);
        } else {
            goToSlide(0); // Loop back to start
        }
    };

    window.prevSlide = function() {
        if (currentSlideIndex > 0) {
            goToSlide(currentSlideIndex - 1);
        }
    };

    /* Keyboard Navigation (Left & Right Arrow Keys ONLY) */
    document.addEventListener('keydown', (e) => {
        if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    /* ==========================================================================
       3. Language Switcher (EN / VI)
       ========================================================================== */
    const langToggleBtn = document.getElementById('lang-toggle');
    const langOpts = document.querySelectorAll('.lang-opt');

    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);

        const dict = translations[lang];
        if (!dict) return;

        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Update active state on EN / VI toggle button
        langOpts.forEach((opt) => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        // Update slide counter text ("Page 01 / 07" <-> "Trang 01 / 07")
        updateSlideCounter();
    }

    // Initialize saved language on load
    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const nextLang = currentLang === 'en' ? 'vi' : 'en';
            applyLanguage(nextLang);
        });
    }

    /* ==========================================================================
       4. Theme Toggle (Dark / Light Mode)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);
        });
    }
});
