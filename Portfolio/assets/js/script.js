// Language translations
const translations = {
  'en': {
    'name': 'Jarir Multani',
    'title': 'Fullstack Developer specializing in Node.js, JavaScript & Modern Web Technologies',
    'description': 'I create robust, scalable web applications with cutting-edge technologies and clean code.',
    'view-projects': 'View Projects',
    'hire-me': 'Hire Me',
    'skills': 'Technical Skills',
    'expert': 'Expert',
    'advanced': 'Advanced',
    'node-desc': 'Backend Development, REST APIs, Express.js, MongoDB',
    'js-desc': 'ES6+, React, Vue.js, Frontend Development',
    'bootstrap-desc': 'Responsive Design, UI/UX Development',
    'frontend': 'Frontend Development',
    'database': 'Database Management',
    'version-control': 'Version Control',
    'api-dev': 'API Development',
    'experience': 'Work Experience',
    'senior-title': 'Senior Fullstack Developer',
    'senior-desc': 'Leading development of web applications using MERN stack. Managing team of 3 developers and implementing best practices.',
    'senior-achievement1': 'Increased application performance by 40%',
    'senior-achievement2': 'Implemented CI/CD pipelines',
    'senior-achievement3': 'Mentored junior developers',
    'fullstack-title': 'Fullstack Developer',
    'fullstack-desc': 'Developed and maintained multiple client projects using Node.js and React. Collaborated with design team to create user-friendly interfaces.',
    'fullstack-achievement1': 'Delivered 15+ successful projects',
    'fullstack-achievement2': 'Improved code quality by 60%',
    'fullstack-achievement3': 'Reduced load times by 30%',
    'junior-title': 'Junior Web Developer',
    'junior-desc': 'Started career building responsive websites and learning modern web technologies. Worked on frontend development and basic backend tasks.',
    'junior-achievement1': 'Built 20+ responsive websites',
    'junior-achievement2': 'Learned modern frameworks',
    'junior-achievement3': 'Gained team collaboration experience',
    'projects-completed': 'Projects Completed',
    'happy-clients': 'Happy Clients',
    'years-experience': 'Years Experience',
    'awards-won': 'Awards Won',
    'projects': 'Featured Projects',
    'all': 'All',
    'frontend': 'Frontend',
    'backend': 'Backend',
    'fullstack': 'Fullstack',
    'image-slider-title': 'Advanced Image Slider',
    'image-slider-desc': 'Professional image slider with touch support, auto-play, and lightbox features.',
    'feature1': 'Responsive Design',
    'feature2': 'Touch Swipe Support',
    'feature3': 'Auto-play Functionality',
    'feature4': 'Lightbox Feature',
    'feature5': 'Customizable Themes',
    'form-wizard-title': 'Multi-step Form Slider',
    'form-wizard-desc': 'User-friendly multi-step form with validation and progress tracking.',
    'feature6': 'Step-by-step Navigation',
    'feature7': 'Form Validation',
    'feature8': 'Progress Indicator',
    'feature9': 'Data Persistence',
    'feature10': 'Responsive Layout',
    'portfolio-title': 'Professional Portfolio',
    'portfolio-desc': 'Modern responsive portfolio website with smooth animations and contact form.',
    'feature11': 'Smooth Animations',
    'feature12': 'Contact Form',
    'feature13': 'Project Showcase',
    'feature14': 'SEO Optimized',
    'ecommerce-title': 'RESTful E-Commerce API',
    'ecommerce-desc': 'Complete e-commerce backend with user authentication and payment integration.',
    'taskmanager-title': 'Project Management Tool',
    'taskmanager-desc': 'Collaborative task management application with real-time updates.',
    'live-demo': 'Live Demo',
    'testimonials': 'Client Testimonials',
    'testimonial1': '"Jarir delivered exceptional work on our e-commerce project. His attention to detail and technical expertise exceeded our expectations."',
    'testimonial2': '"Working with Jarir was a great experience. He understood our requirements perfectly and delivered ahead of schedule."',
    'testimonial3': '"Professional, skilled, and reliable. Jarir\'s fullstack development skills helped us build a robust application that scales perfectly."',
    'cta-title': 'Ready to Start Your Project?',
    'cta-desc': 'Let\'s work together to bring your ideas to life with cutting-edge technology',
    'get-started': 'Get Started Today',
    'contact': 'Get In Touch',
    'send-message': 'Send Message',
    'footer-desc': 'Fullstack Developer specializing in modern web technologies and creating exceptional digital experiences.',
    'quick-links': 'Quick Links',
    'home': 'Home',
    'connect': 'Connect With Me',
    'rights': 'All rights reserved.'
  },
  'hi': {
    'name': 'जरीर मुल्तानी',
    'title': 'Node.js, JavaScript और आधुनिक वेब टेक्नोलॉजी में विशेषज्ञ फुलस्टैक डेवलपर',
    'description': 'मैं अत्याधुनिक तकनीकों और साफ कोड के साथ मजबूत, स्केलेबल वेब एप्लिकेशन बनाता हूं।',
    'view-projects': 'प्रोजेक्ट्स देखें',
    'hire-me': 'मुझे किराय पर रखें',
    'skills': 'तकनीकी कौशल',
    'expert': 'विशेषज्ञ',
    'advanced': 'उन्नत',
    'node-desc': 'बैकएंड डेवलपमेंट, REST APIs, Express.js, MongoDB',
    'js-desc': 'ES6+, React, Vue.js, फ्रंटएंड डेवलपमेंट',
    'bootstrap-desc': 'रिस्पॉन्सिव डिजाइन, UI/UX डेवलपमेंट',
    'frontend': 'फ्रंटएंड डेवलपमेंट',
    'database': 'डेटाबेस प्रबंधन',
    'version-control': 'वर्जन कंट्रोल',
    'api-dev': 'API डेवलपमेंट',
    'experience': 'कार्य अनुभव',
    'senior-title': 'सीनियर फुलस्टैक डेवलपर',
    'senior-desc': 'MERN स्टैक का उपयोग करके वेब एप्लिकेशन के विकास का नेतृत्व। 3 डेवलपर्स की टीम का प्रबंधन और सर्वोत्तम प्रथाओं को लागू करना।',
    'senior-achievement1': 'एप्लिकेशन प्रदर्शन में 40% वृद्धि',
    'senior-achievement2': 'CI/CD पाइपलाइन लागू की',
    'senior-achievement3': 'जूनियर डेवलपर्स को मेंटर किया',
    'fullstack-title': 'फुलस्टैक डेवलपर',
    'fullstack-desc': 'Node.js और React का उपयोग करके कई क्लाइंट प्रोजेक्ट विकसित और बनाए रखे। यूजर-फ्रेंडली इंटरफेस बनाने के लिए डिजाइन टीम के साथ सहयोग किया।',
    'fullstack-achievement1': '15+ सफल प्रोजेक्ट डिलीवर किए',
    'fullstack-achievement2': 'कोड गुणवत्ता में 60% सुधार',
    'fullstack-achievement3': 'लोड समय में 30% कमी',
    'junior-title': 'जूनियर वेब डेवलपर',
    'junior-desc': 'रिस्पॉन्सिव वेबसाइट बनाने और आधुनिक वेब तकनीकों को सीखने से करियर की शुरुआत की। फ्रंटएंड डेवलपमेंट और बेसिक बैकएंड कार्यों पर काम किया।',
    'junior-achievement1': '20+ रिस्पॉन्सिव वेबसाइट बनाई',
    'junior-achievement2': 'आधुनिक फ्रेमवर्क सीखे',
    'junior-achievement3': 'टीम सहयोग का अनुभव प्राप्त किया',
    'projects-completed': 'पूर्ण प्रोजेक्ट',
    'happy-clients': 'संतुष्ट ग्राहक',
    'years-experience': 'वर्षों का अनुभव',
    'awards-won': 'पुरस्कार जीते',
    'projects': 'फीचर्ड प्रोजेक्ट',
    'all': 'सभी',
    'frontend': 'फ्रंटएंड',
    'backend': 'बैकएंड',
    'fullstack': 'फुलस्टैक',
    'image-slider-title': 'एडवांस्ड इमेज स्लाइडर',
    'image-slider-desc': 'टच सपोर्ट, ऑटो-प्ले और लाइटबॉक्स फीचर्स वाला प्रोफेशनल इमेज स्लाइडर।',
    'feature1': 'रिस्पॉन्सिव डिजाइन',
    'feature2': 'टच स्वाइप सपोर्ट',
    'feature3': 'ऑटो-प्ले फंक्शनैलिटी',
    'feature4': 'लाइटबॉक्स फीचर',
    'feature5': 'कस्टमाइजेबल थीम',
    'form-wizard-title': 'मल्टी-स्टेप फॉर्म स्लाइडर',
    'form-wizard-desc': 'वैलिडेशन और प्रोग्रेस ट्रैकिंग वाला यूजर-फ्रेंडली मल्टी-स्टेप फॉर्म।',
    'feature6': 'स्टेप-बाय-स्टेप नेविगेशन',
    'feature7': 'फॉर्म वैलिडेशन',
    'feature8': 'प्रोग्रेस इंडिकेटर',
    'feature9': 'डेटा पेरसिस्टेंस',
    'feature10': 'रिस्पॉन्सिव लेआउट',
    'portfolio-title': 'प्रोफेशनल पोर्टफोलियो',
    'portfolio-desc': 'स्मूद एनिमेशन और कॉन्टैक्ट फॉर्म वाली मॉडर्न रिस्पॉन्सिव पोर्टफोलियो वेबसाइट।',
    'feature11': 'स्मूद एनिमेशन',
    'feature12': 'कॉन्टैक्ट फॉर्म',
    'feature13': 'प्रोजेक्ट शोकेस',
    'feature14': 'SEO ऑप्टिमाइज्ड',
    'ecommerce-title': 'RESTful ई-कॉमर्स API',
    'ecommerce-desc': 'यूजर ऑथेंटिकेशन और पेमेंट इंटीग्रेशन वाला कंप्लीट ई-कॉमर्स बैकएंड।',
    'taskmanager-title': 'प्रोजेक्ट मैनेजमेंट टूल',
    'taskmanager-desc': 'रियल-टाइम अपडेट वाला सहयोगी टास्क मैनेजमेंट एप्लिकेशन।',
    'live-demo': 'लाइव डेमो',
    'testimonials': 'ग्राहक प्रशंसापत्र',
    'testimonial1': '"जरीर ने हमारे ई-कॉमर्स प्रोजेक्ट पर असाधारण काम किया। उनका विवरणों पर ध्यान और तकनीकी विशेषज्ञता हमारी अपेक्षाओं से अधिक थी।"',
    'testimonial2': '"जरीर के साथ काम करना एक शानदार अनुभव था। उन्होंने हमारी आवश्यकताओं को पूरी तरह से समझा और समय से पहले डिलीवर किया।"',
    'testimonial3': '"पेशेवर, कुशल और विश्वसनीय। जरीर के फुलस्टैक डेवलपमेंट कौशल ने हमें एक मजबूत एप्लिकेशन बनाने में मदद की जो पूरी तरह से स्केल करता है।"',
    'cta-title': 'अपना प्रोजेक्ट शुरू करने के लिए तैयार हैं?',
    'cta-desc': 'आइए अत्याधुनिक तकनीक के साथ आपके विचारों को जीवन में लाने के लिए मिलकर काम करें',
    'get-started': 'आज ही शुरू करें',
    'contact': 'संपर्क करें',
    'send-message': 'संदेश भेजें',
    'footer-desc': 'आधुनिक वेब तकनीकों में विशेषज्ञ फुलस्टैक डेवलपर और असाधारण डिजिटल अनुभव बनाना।',
    'quick-links': 'त्वरित लिंक',
    'home': 'होम',
    'connect': 'मुझसे जुड़ें',
    'rights': 'सर्वाधिकार सुरक्षित।'
  }
};

let currentLang = 'en';

// Language toggle functionality
$('#language-toggle').click(function () {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  $('.lang').each(function () {
    const key = $(this).attr('key');
    if (translations[currentLang][key]) {
      $(this).text(translations[currentLang][key]);
    }
  });

  // Update button text
  $(this).html(currentLang === 'en'
    ? '<i class="fas fa-language"></i> हिंदी'
    : '<i class="fas fa-language"></i> English');
});

// Theme toggle functionality
$('#theme-toggle').click(function () {
  $('body').toggleClass('dark-mode light-mode');
  $(this).html($('body').hasClass('dark-mode')
    ? '<i class="fas fa-sun"></i> Light Mode'
    : '<i class="fas fa-moon"></i> Dark Mode');
});

// Smooth scrolling
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  const target = $($(this).attr('href'));
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// Navbar scroll effect
$(window).scroll(function () {
  const navbar = $('.navbar');
  if ($(window).scrollTop() > 100) {
    navbar.addClass('navbar-scrolled');
  } else {
    navbar.removeClass('navbar-scrolled');
  }
});

// Active nav link highlighting
$(window).scroll(function () {
  const scrollPos = $(document).scrollTop();
  $('.nav-link').each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr('href'));
    if (refElement.position().top <= scrollPos + 200 &&
      refElement.position().top + refElement.height() > scrollPos) {
      $('.nav-link').removeClass('active');
      currLink.addClass('active');
    }
  });
});

// Fade in animation
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(element => {
  fadeInObserver.observe(element);
});

// Counter animation
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = +entry.target.getAttribute('data-target');
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          entry.target.innerText = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          entry.target.innerText = target;
        }
      };

      updateCount();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 1 });

document.querySelectorAll('.counter').forEach(counter => {
  counterObserver.observe(counter);
});

// Progress bar animation
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0';
      setTimeout(() => {
        entry.target.style.width = width;
      }, 500);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.progress-bar').forEach(bar => {
  progressObserver.observe(bar);
});

// Skills Chart
const skillsChart = new Chart(document.getElementById('skillsChart'), {
  type: 'radar',
  data: {
    labels: ['Node.js', 'JavaScript', 'React', 'MongoDB', 'Bootstrap', 'Git', 'REST APIs'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 85, 80, 75, 95, 90, 85],
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(0, 0, 0, 1)',
      pointBackgroundColor: 'rgba(0, 0, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 0, 0, 1)'
    }]
  },
  options: {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
});

// Project filtering
$('.project-filters button').click(function () {
  const filter = $(this).data('filter');
  $('.project-filters button').removeClass('active');
  $(this).addClass('active');

  if (filter === 'all') {
    $('.project-card').fadeIn();
  } else {
    $('.project-card').hide();
    $(`.project-card[data-category="${filter}"]`).fadeIn();
  }
});

// Contact form validation and submission
$('#contactForm').submit(function (e) {
  e.preventDefault();
  let isValid = true;

  // Simple validation
  $('#contactForm input, #contactForm textarea').each(function () {
    if (!$(this).val()) {
      $(this).addClass('is-invalid');
      isValid = false;
    } else {
      $(this).removeClass('is-invalid');
    }
  });

  if (isValid) {
    // In a real application, you would send the form data to a server here
    $('#contactForm').html(`
                    <div class="alert alert-success text-center">
                        <h4>Thank you for your message!</h4>
                        <p>I'll get back to you as soon as possible.</p>
                    </div>
                `);
  }
});

// Particle.js initialization
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

// Typewriter effect for hero section
function typeWriter(element, text, i = 0) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 100);
  }
}

// Initialize typewriter effect
$(document).ready(function () {
  const heroText = document.querySelector('.hero h1');
  if (heroText) {
    const text = heroText.innerText;
    heroText.innerHTML = '';
    typeWriter(heroText, text);
  }

  // Smooth hover effects
  $('.skill-item, .project-card').hover(
    function () {
      $(this).css('transform', 'translateY(-10px)');
    },
    function () {
      $(this).css('transform', 'translateY(0)');
    }
  );
});