// src/translations/index.ts
export type TranslationKey =
    | 'nav.home'
    | 'nav.services'
    | 'nav.about'
    | 'nav.contact'
    | 'nav.getStarted'
    | 'nav.webDev'
    | 'nav.ai'

    | 'hero.title.start'
    | 'hero.title.highlight1'
    | 'hero.title.middle'
    | 'hero.title.highlight2'
    | 'hero.subtitle'
    | 'hero.cta.primary'
    | 'hero.cta.secondary'

    | 'services.title'
    | 'services.subtitle'
    | 'services.description'
    | 'services.webdev.title'
    | 'services.webdev.description'
    | 'services.ai.title'
    | 'services.ai.description'

    | 'stats.projects'
    | 'stats.satisfaction'
    | 'stats.experience'
    | 'stats.clients'
    | 'about.title'
    | 'about.subtitle'
    | 'about.description'
    | 'about.cta'

    | 'testimonials.title'
    | 'testimonials.subtitle'
    | 'testimonials.description'
    | 'testimonials.1.author'
    | 'testimonials.1.role'
    | 'testimonials.1.company'
    | 'testimonials.1.content'
    | 'testimonials.2.author'
    | 'testimonials.2.role'
    | 'testimonials.2.company'
    | 'testimonials.2.content'
    | 'testimonials.3.author'
    | 'testimonials.3.role'
    | 'testimonials.3.company'
    | 'testimonials.3.content'
    | 'testimonials.4.author'
    | 'testimonials.4.role'
    | 'testimonials.4.company'
    | 'testimonials.4.content'
    | 'testimonials.5.author'
    | 'testimonials.5.role'
    | 'testimonials.5.company'
    | 'testimonials.5.content'

    | 'process.title'
    | 'process.subtitle'
    | 'process.description'
    | 'process.step1.title'
    | 'process.step1.description'
    | 'process.step2.title'
    | 'process.step2.description'
    | 'process.step3.title'
    | 'process.step3.description'
    | 'process.step4.title'
    | 'process.step4.description'
    | 'process.step5.title'
    | 'process.step5.description'
    | 'process.step6.title'
    | 'process.step6.description'

    | 'cta.title'
    | 'cta.description'
    | 'cta.button'

    | 'footer.description'
    | 'footer.quickLinks'
    | 'footer.about'
    | 'footer.services'
    | 'footer.contact'
    | 'footer.webDev'
    | 'footer.ai'
    | 'footer.address'
    | 'footer.copyright'
    | 'footer.privacy'
    | 'footer.terms'

    | 'about.story.title'
    | 'about.story.subtitle'
    | 'about.story.description'
    | 'about.story.content1'
    | 'about.story.content2'

    | 'about.vision.title'
    | 'about.vision.subtitle'
    | 'about.vision.statement'
    | 'about.mission.title'
    | 'about.mission.statement'

    | 'about.team.title'
    | 'about.team.subtitle'
    | 'about.team.description'
    | 'about.team.member1.name'
    | 'about.team.member1.role'
    | 'about.team.member2.name'
    | 'about.team.member2.role'
    | 'about.team.member3.name'
    | 'about.team.member3.role'

    | 'services.page.title'
    | 'services.page.description'

    | 'services.webdev.subtitle'
    | 'services.webdev.detailed'
    | 'services.webdev.feature1'
    | 'services.webdev.feature2'
    | 'services.webdev.feature3'
    | 'services.webdev.feature4'
    | 'services.ai.subtitle'
    | 'services.ai.detailed'
    | 'services.ai.feature1'
    | 'services.ai.feature2'
    | 'services.ai.feature3'
    | 'services.ai.feature4'

    | 'services.webdev.page.title'
    | 'services.webdev.page.description'

    | 'services.webdev.features.title'
    | 'services.webdev.features.subtitle'
    | 'services.webdev.features.description'
    | 'services.webdev.features.custom.title'
    | 'services.webdev.features.custom.description'
    | 'services.webdev.features.application.title'
    | 'services.webdev.features.application.description'
    | 'services.webdev.features.ecommerce.title'
    | 'services.webdev.features.ecommerce.description'
    | 'services.webdev.features.cms.title'
    | 'services.webdev.features.cms.description'

    | 'services.webdev.tech.title'
    | 'services.webdev.tech.subtitle'
    | 'services.webdev.tech.description'

    // Frontend Technologies
    | 'services.webdev.tech.frontend.title'
    | 'services.webdev.tech.frontend.description'
    | 'services.webdev.tech.frontend.tech1'
    | 'services.webdev.tech.frontend.tech2'
    | 'services.webdev.tech.frontend.tech3'
    | 'services.webdev.tech.frontend.tech4'
    | 'services.webdev.tech.frontend.tech5'
    | 'services.webdev.tech.frontend.tech6'
    | 'services.webdev.tech.frontend.tech7'
    | 'services.webdev.tech.frontend.tech8'

    // Backend Technologies
    | 'services.webdev.tech.backend.title'
    | 'services.webdev.tech.backend.description'
    | 'services.webdev.tech.backend.tech1'
    | 'services.webdev.tech.backend.tech2'
    | 'services.webdev.tech.backend.tech3'
    | 'services.webdev.tech.backend.tech4'
    | 'services.webdev.tech.backend.tech5'
    | 'services.webdev.tech.backend.tech6'
    | 'services.webdev.tech.backend.tech7'
    | 'services.webdev.tech.backend.tech8'

    // Database Technologies
    | 'services.webdev.tech.database.title'
    | 'services.webdev.tech.database.description'
    | 'services.webdev.tech.database.tech1'
    | 'services.webdev.tech.database.tech2'
    | 'services.webdev.tech.database.tech3'
    | 'services.webdev.tech.database.tech4'
    | 'services.webdev.tech.database.tech5'
    | 'services.webdev.tech.database.tech6'
    | 'services.webdev.tech.database.tech7'
    | 'services.webdev.tech.database.tech8'

    // Development Tools
    | 'services.webdev.tech.tools.title'
    | 'services.webdev.tech.tools.description'
    | 'services.webdev.tech.tools.tech1'
    | 'services.webdev.tech.tools.tech2'
    | 'services.webdev.tech.tools.tech3'
    | 'services.webdev.tech.tools.tech4'
    | 'services.webdev.tech.tools.tech5'
    | 'services.webdev.tech.tools.tech6'
    | 'services.webdev.tech.tools.tech7'
    | 'services.webdev.tech.tools.tech8'

    // Add to TranslationKey type
    | 'services.webdev.faq.title'
    | 'services.webdev.faq.subtitle'
    | 'services.webdev.faq.description'
    | 'services.webdev.faq.process.title'
    | 'services.webdev.faq.process.q1'
    | 'services.webdev.faq.process.a1'
    | 'services.webdev.faq.process.q2'
    | 'services.webdev.faq.process.a2'
    | 'services.webdev.faq.process.q3'
    | 'services.webdev.faq.process.a3'
    | 'services.webdev.faq.technical.title'
    | 'services.webdev.faq.technical.q1'
    | 'services.webdev.faq.technical.a1'
    | 'services.webdev.faq.technical.q2'
    | 'services.webdev.faq.technical.a2'
    | 'services.webdev.faq.technical.q3'
    | 'services.webdev.faq.technical.a3'
    | 'services.webdev.faq.collaboration.title'
    | 'services.webdev.faq.collaboration.q1'
    | 'services.webdev.faq.collaboration.a1'
    | 'services.webdev.faq.collaboration.q2'
    | 'services.webdev.faq.collaboration.a2'
    | 'services.webdev.faq.collaboration.q3'
    | 'services.webdev.faq.collaboration.a3'

    | 'services.ai.page.title'
    | 'services.ai.page.description'

    | 'services.ai.features.title'
    | 'services.ai.features.subtitle'
    | 'services.ai.features.description'
    | 'services.ai.features.chatbot.title'
    | 'services.ai.features.chatbot.description'
    | 'services.ai.features.agent.title'
    | 'services.ai.features.agent.description'
    | 'services.ai.features.integration.title'
    | 'services.ai.features.integration.description'
    | 'services.ai.features.automation.title'
    | 'services.ai.features.automation.description'

    | 'services.ai.tech.title'
    | 'services.ai.tech.subtitle'
    | 'services.ai.tech.description'

    | 'services.ai.tech.platforms.title'
    | 'services.ai.tech.platforms.description'
    | 'services.ai.tech.platforms.tech1'
    | 'services.ai.tech.platforms.tech2'
    | 'services.ai.tech.platforms.tech3'
    | 'services.ai.tech.platforms.tech4'
    | 'services.ai.tech.platforms.tech5'
    | 'services.ai.tech.platforms.more'

    | 'services.ai.tech.integration.title'
    | 'services.ai.tech.integration.description'
    | 'services.ai.tech.integration.tech1'
    | 'services.ai.tech.integration.tech2'
    | 'services.ai.tech.integration.tech3'
    | 'services.ai.tech.integration.tech4'
    | 'services.ai.tech.integration.tech5'
    | 'services.ai.tech.integration.more'

    | 'services.ai.tech.nlp.title'
    | 'services.ai.tech.nlp.description'
    | 'services.ai.tech.nlp.tech1'
    | 'services.ai.tech.nlp.tech2'
    | 'services.ai.tech.nlp.tech3'
    | 'services.ai.tech.nlp.tech4'
    | 'services.ai.tech.nlp.tech5'
    | 'services.ai.tech.nlp.more'

    | 'services.ai.tech.infrastructure.title'
    | 'services.ai.tech.infrastructure.description'
    | 'services.ai.tech.infrastructure.tech1'
    | 'services.ai.tech.infrastructure.tech2'
    | 'services.ai.tech.infrastructure.tech3'
    | 'services.ai.tech.infrastructure.tech4'
    | 'services.ai.tech.infrastructure.tech5'
    | 'services.ai.tech.infrastructure.more'

    | 'services.ai.faq.title'
    | 'services.ai.faq.subtitle'
    | 'services.ai.faq.description'
    | 'services.ai.faq.process.title'
    | 'services.ai.faq.process.q1'
    | 'services.ai.faq.process.a1'
    | 'services.ai.faq.process.q2'
    | 'services.ai.faq.process.a2'
    | 'services.ai.faq.process.q3'
    | 'services.ai.faq.process.a3'
    | 'services.ai.faq.technical.title'
    | 'services.ai.faq.technical.q1'
    | 'services.ai.faq.technical.a1'
    | 'services.ai.faq.technical.q2'
    | 'services.ai.faq.technical.a2'
    | 'services.ai.faq.technical.q3'
    | 'services.ai.faq.technical.a3'
    | 'services.ai.faq.collaboration.title'
    | 'services.ai.faq.collaboration.q1'
    | 'services.ai.faq.collaboration.a1'
    | 'services.ai.faq.collaboration.q2'
    | 'services.ai.faq.collaboration.a2'
    | 'services.ai.faq.collaboration.q3'
    | 'services.ai.faq.collaboration.a3'

    | 'legal.imprint.title'
    | 'legal.imprint.description'
    | 'legal.imprint.company.title'
    | 'legal.imprint.company.name'
    | 'legal.imprint.company.street'
    | 'legal.imprint.company.city'
    | 'legal.imprint.company.country'
    | 'legal.imprint.contact.title'
    | 'legal.imprint.contact.phone'
    | 'legal.imprint.contact.email'
    | 'legal.imprint.contact.web'
    | 'legal.imprint.registration.title'
    | 'legal.imprint.registration.court'
    | 'legal.imprint.registration.number'
    | 'legal.imprint.registration.vatid'
    | 'legal.imprint.responsible.title'
    | 'legal.imprint.responsible.name'
    | 'legal.imprint.responsible.position'
    | 'legal.imprint.responsible.email'
    | 'legal.imprint.disclaimer.title'
    | 'legal.imprint.disclaimer.content'

    | 'legal.privacy.title'
    | 'legal.privacy.description'
    | 'legal.privacy.general.title'
    | 'legal.privacy.general.intro'
    | 'legal.privacy.general.controller'
    | 'legal.privacy.general.dpo'
    | 'legal.privacy.collection.title'
    | 'legal.privacy.collection.purpose'
    | 'legal.privacy.collection.types.title'
    | 'legal.privacy.collection.types.personal'
    | 'legal.privacy.collection.types.usage'
    | 'legal.privacy.collection.types.technical'
    | 'legal.privacy.cookies.title'
    | 'legal.privacy.cookies.description'
    | 'legal.privacy.cookies.types.title'
    | 'legal.privacy.cookies.types.essential'
    | 'legal.privacy.cookies.types.analytics'
    | 'legal.privacy.cookies.types.marketing'
    | 'legal.privacy.thirdparty.title'
    | 'legal.privacy.thirdparty.description'
    | 'legal.privacy.thirdparty.services.analytics'
    | 'legal.privacy.thirdparty.services.social'
    | 'legal.privacy.thirdparty.services.payment'
    | 'legal.privacy.rights.title'
    | 'legal.privacy.rights.intro'
    | 'legal.privacy.rights.access'
    | 'legal.privacy.rights.rectification'
    | 'legal.privacy.rights.erasure'
    | 'legal.privacy.rights.restriction'
    | 'legal.privacy.rights.portability'
    | 'legal.privacy.rights.object'
    | 'legal.privacy.security.title'
    | 'legal.privacy.security.measures'
    | 'legal.privacy.security.encryption'
    | 'legal.privacy.security.staff'

    | 'legal.terms.title'
    | 'legal.terms.description'
    | 'legal.terms.general.title'
    | 'legal.terms.general.scope'
    | 'legal.terms.general.validity'
    | 'legal.terms.services.title'
    | 'legal.terms.services.description'
    | 'legal.terms.services.webdev'
    | 'legal.terms.services.ai'
    | 'legal.terms.services.consulting'
    | 'legal.terms.contract.title'
    | 'legal.terms.contract.conclusion.title'
    | 'legal.terms.contract.conclusion.content'
    | 'legal.terms.contract.duration.title'
    | 'legal.terms.contract.duration.content'
    | 'legal.terms.payment.title'
    | 'legal.terms.payment.prices'
    | 'legal.terms.payment.terms'
    | 'legal.terms.payment.methods'
    | 'legal.terms.obligations.title'
    | 'legal.terms.obligations.provider.title'
    | 'legal.terms.obligations.provider.content'
    | 'legal.terms.obligations.client.title'
    | 'legal.terms.obligations.client.content'
    | 'legal.terms.liability.title'
    | 'legal.terms.liability.limitation'
    | 'legal.terms.liability.exclusions'
    | 'legal.terms.final.title'
    | 'legal.terms.final.jurisdiction'
    | 'legal.terms.final.severability'

    | 'contact.page.title'
    | 'contact.page.description'

    | 'contact.form.title'
    | 'contact.form.subtitle'
    | 'contact.form.description'
    | 'contact.form.name'
    | 'contact.form.namePlaceholder'
    | 'contact.form.email'
    | 'contact.form.emailPlaceholder'
    | 'contact.form.subject'
    | 'contact.form.subjectPlaceholder'
    | 'contact.form.message'
    | 'contact.form.messagePlaceholder'
    | 'contact.form.submit'
    | 'contact.form.phonePlaceholder'
    | 'contact.form.inquiryType'
    | 'contact.form.services.webdev'
    | 'contact.form.services.ai'
    | 'contact.form.sending'
    | 'contact.form.nameRequired'
    | 'contact.form.emailRequired'
    | 'contact.form.phoneRequired'
    | 'contact.form.inquiryRequired'
    | 'contact.form.messageRequired'
    | 'contact.form.error'

    | 'contact.form.rateLimit'
    | 'contact.form.networkError'
    | 'contact.form.invalidSubmission'

    | 'contact.form.success'
    | 'contact.form.error'
    | 'contact.form.emailInvalid'

    | 'contact.info.title'
    | 'contact.info.description'
    | 'contact.info.email.title'
    | 'contact.info.phone.title'
    | 'contact.info.address.title'
    | 'contact.info.address.content'
    | 'thankYou.title'
    | 'thankYou.description'
    | 'thankYou.backHome'

    | 'quote.form.title'
    | 'quote.form.subtitle'
    | 'quote.form.description'
    | 'quote.form.namePlaceholder'
    | 'quote.form.nameRequired'
    | 'quote.form.emailPlaceholder'
    | 'quote.form.emailRequired'
    | 'quote.form.phonePlaceholder'
    | 'quote.form.phoneRequired'
    | 'quote.form.companyPlaceholder'
    | 'quote.form.companyRequired'
    | 'quote.form.servicesLabel'
    | 'quote.form.servicesRequired'
    | 'quote.form.services.webdev'
    | 'quote.form.services.ai'
    | 'quote.form.budgetLabel'
    | 'quote.form.budgetRequired'
    | 'quote.form.detailsPlaceholder'
    | 'quote.form.detailsRequired'
    | 'quote.form.sending'
    | 'quote.form.submit'
    | 'quote.form.error'
    | 'quote.form.backHome'

    | 'quote.thankyou.backHome'
    | 'quote.thankyou.title'
    | 'quote.thankyou.subtitle'
    | 'quote.thankyou.description'
    | 'quote.thankyou.returnHome'

    | 'footer.imprint'

    | 'cookie.text'
    | 'cookie.link'
    | 'cookie.accept'
    | 'cookie.deny';


export const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.getStarted': 'Get Started',
        'nav.webDev': 'Web Development',
        'nav.ai': 'AI Solutions',


        'hero.title.start': 'Transforming ',
        'hero.title.highlight1': ' Ideas into',
        'hero.title.middle': ' Digital ',
        'hero.title.highlight2': 'Excellence',
        'hero.subtitle': 'We create cutting-edge web solutions and AI integrations that drive business growth and innovation.',
        'hero.cta.primary': 'Get Started',
        'hero.cta.secondary': 'Our Services',

        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive solutions',
        'services.description': 'We craft digital experiences that transform businesses and drive success in the modern digital landscape. Our expertise spans across web development and AI integration, ensuring your business stays ahead of the curve.',
        'services.webdev.title': 'Website Development',
        'services.webdev.description': 'Custom websites and web applications built with cutting-edge technology.',
        'services.ai.title': 'AI Integrated Solutions',
        'services.ai.description': 'Intelligent automation and AI integration for your business needs.',

        'stats.projects': 'Projects Completed',
        'stats.satisfaction': 'Client Satisfaction',
        'stats.experience': 'Years Experience',
        'stats.clients': 'Active Clients',

        'about.title': 'About Us',
        'about.subtitle': 'Your digital partner',
        'about.description': 'We are a team of passionate developers and AI specialists, dedicated to transforming businesses through innovative digital solutions. With years of experience and a commitment to excellence, we help companies navigate the digital landscape and achieve their goals.',
        'about.cta': 'Learn More About Us',

        'testimonials.title': 'Client Stories',
        'testimonials.subtitle': 'What our clients say',
        'testimonials.description': 'Discover how we have helped businesses transform their digital presence and achieve remarkable results.',

        'testimonials.1.author': 'Rajesh Perera',
        'testimonials.1.role': 'CEO',
        'testimonials.1.company': 'TechVision Lanka',
        'testimonials.1.content': 'Their expertise in web development and AI integration has completely transformed our business operations. The results exceeded our expectations.',

        'testimonials.2.author': 'Priya Fernando',
        'testimonials.2.role': 'CTO',
        'testimonials.2.company': 'InnovateTech Solutions',
        'testimonials.2.content': 'Outstanding service and technical expertise. They delivered a complex web application ahead of schedule and with impeccable quality.',

        'testimonials.3.author': 'David Silva',
        'testimonials.3.role': 'Director',
        'testimonials.3.company': 'Digital Solutions Lanka',
        'testimonials.3.content': 'Their AI solutions have significantly improved our efficiency. Professional team with excellent communication throughout the project.',

        'testimonials.4.author': 'Nisha Wickramasinghe',
        'testimonials.4.role': 'Product Manager',
        'testimonials.4.company': 'FutureScale Technologies',
        'testimonials.4.content': 'The AI integration has revolutionized our customer service. Response times improved by 70% and customer satisfaction is at an all-time high.',

        'testimonials.5.author': 'James Anderson',
        'testimonials.5.role': 'Head of Technology',
        'testimonials.5.company': 'DataFlow Systems',
        'testimonials.5.content': 'Their teams expertise in both web development and AI created a seamless solution that perfectly aligned with our business goals.',

        'process.title': 'Our Process',
        'process.subtitle': 'How we work', 'process.description': 'A streamlined approach to transforming your digital presence, from initial concept to successful execution.',
        'process.step1.title': 'Discovery & Planning',
        'process.step1.description': 'We analyze your requirements and plan the perfect solution for your needs.',
        'process.step2.title': 'Design & Architecture',
        'process.step2.description': 'Creating the blueprint for your success with modern design principles.',
        'process.step3.title': 'Development',
        'process.step3.description': 'Building your solution with cutting-edge technologies and best practices.',
        'process.step4.title': 'Testing & QA',
        'process.step4.description': 'Rigorous testing to ensure quality and reliability.',
        'process.step5.title': 'Deployment',
        'process.step5.description': 'Smooth deployment and integration of your solution.',
        'process.step6.title': 'Support & Maintenance',
        'process.step6.description': 'Ongoing support and updates to keep your solution running perfectly.',

        'cta.title': 'Innovation Begins With A Conversation',
        'cta.description': 'Take the first step towards innovation. Lets discuss your project and create something extraordinary together.',
        'cta.button': 'Get Your Free Quote',

        'footer.description': 'Innovative web development and AI solutions for modern businesses.',
        'footer.quickLinks': 'Quick Links',
        'footer.about': 'About Us',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.webDev': 'Web Development',
        'footer.ai': 'AI Solutions',
        'footer.address': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'footer.copyright': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',

        'about.story.title': 'Our Story',
        'about.story.subtitle': 'Building digital excellence',
        'about.story.description': 'A journey of innovation and dedication to creating impactful digital solutions that transform businesses and drive success.',
        'about.story.content1': 'Founded with a vision to bridge the gap between technology and business success, Growth Space Lanka has grown into a leading digital solutions provider. We combine expertise in web development, marketing, and AI to deliver results that matter.',
        'about.story.content2': 'Our team of experts brings together years of experience across different domains, working collaboratively to solve complex challenges and create innovative solutions that help businesses thrive in the digital age.',

        'about.vision.title': 'Our Vision',
        'about.vision.subtitle': 'Looking ahead',
        'about.vision.statement': 'To revolutionize digital transformation by making AI and web solutions accessible and impactful for businesses of all sizes.',
        'about.mission.title': 'Our Mission',
        'about.mission.statement': 'To deliver innovative, scalable, and intelligent digital solutions that drive real business growth and create lasting value for our clients.',

        'about.team.title': 'Our Team',
        'about.team.subtitle': 'Meet the experts',
        'about.team.description': 'A group of passionate innovators dedicated to transforming businesses through technology.',
        'about.team.member1.name': 'Michael Weber',
        'about.team.member1.role': 'CEO & Founder',
        'about.team.member2.name': 'Sarah Schmidt',
        'about.team.member2.role': 'Head of Development',
        'about.team.member3.name': 'Thomas Mueller',
        'about.team.member3.role': 'AI Solutions Lead',

        'services.page.title': 'Services',
        'services.page.description': 'Tailored Solutions to your business needs',

        'services.webdev.subtitle': 'Modern web solutions',
        'services.webdev.detailed': 'We create cutting-edge websites and web applications that deliver exceptional user experiences and drive business growth.',
        'services.webdev.feature1': 'Custom website development with modern technologies',
        'services.webdev.feature2': 'Responsive design for all devices and screen sizes',
        'services.webdev.feature3': 'Performance optimization and SEO best practices',
        'services.webdev.feature4': 'Scalable web applications with robust architecture',

        'services.ai.subtitle': 'Intelligent automation',
        'services.ai.detailed': 'Transform your business operations with our AI-powered solutions that automate processes and enhance decision-making.',
        'services.ai.feature1': 'Custom AI chatbots for enhanced customer service',
        'services.ai.feature2': 'Process automation using machine learning',
        'services.ai.feature3': 'AI-powered data analysis and insights',
        'services.ai.feature4': 'Integration with existing business systems',

        'services.webdev.page.title': 'Web Development',
        'services.webdev.page.description': 'Custom web solutions for modern businesses',

        'services.webdev.features.title': 'Web Solutions',
        'services.webdev.features.subtitle': 'Everything you need',
        'services.webdev.features.description': 'Comprehensive web development solutions tailored to your specific needs',
        'services.webdev.features.custom.title': 'Custom Website Development',
        'services.webdev.features.custom.description': 'Bespoke websites designed and developed to perfectly match your brand and requirements',
        'services.webdev.features.application.title': 'Web Application Development',
        'services.webdev.features.application.description': 'Robust and scalable web applications built with modern technologies',
        'services.webdev.features.ecommerce.title': 'ECommerce Development',
        'services.webdev.features.ecommerce.description': 'Powerful online stores with seamless shopping experiences',
        'services.webdev.features.cms.title': 'CMS-based Development',
        'services.webdev.features.cms.description': 'Custom content management systems for easy website maintenance',

        'services.webdev.tech.title': 'Our Tech Stack',
        'services.webdev.tech.subtitle': 'Modern technologies',
        'services.webdev.tech.description': 'We use the latest and most reliable technologies to build robust web solutions',

        'services.webdev.tech.frontend.title': 'Frontend',
        'services.webdev.tech.frontend.description': 'Crafting responsive and interactive user interfaces with React ecosystem and modern web technologies',
        // Frontend Technologies
        'services.webdev.tech.frontend.tech1': 'React.js',
        'services.webdev.tech.frontend.tech2': 'Next.js',
        'services.webdev.tech.frontend.tech3': 'Gatsby.js',
        'services.webdev.tech.frontend.tech4': 'Framer Motion',
        'services.webdev.tech.frontend.tech5': 'Tailwind CSS',
        'services.webdev.tech.frontend.tech6': 'TypeScript',
        'services.webdev.tech.frontend.tech7': 'Redux & Context API',
        'services.webdev.tech.frontend.tech8': '+ Many More',

        'services.webdev.tech.backend.title': 'Backend',
        'services.webdev.tech.backend.description': 'Building scalable server solutions with Node.js and modern headless CMS platforms',
        // Backend Technologies
        'services.webdev.tech.backend.tech1': 'Node.js & Express',
        'services.webdev.tech.backend.tech2': 'Next.js API Routes',
        'services.webdev.tech.backend.tech3': 'Strapi CMS',
        'services.webdev.tech.backend.tech4': 'Headless WordPress',
        'services.webdev.tech.backend.tech5': 'GraphQL',
        'services.webdev.tech.backend.tech6': 'REST APIs',
        'services.webdev.tech.backend.tech7': 'Serverless Functions',
        'services.webdev.tech.backend.tech8': '+ Many More',

        'services.webdev.tech.database.title': 'Database',
        'services.webdev.tech.database.description': 'Leveraging modern databases and cloud storage solutions for efficient data management',
        // Database & Storage
        'services.webdev.tech.database.tech1': 'MongoDB',
        'services.webdev.tech.database.tech2': 'Airtable',
        'services.webdev.tech.database.tech3': 'Firebase',
        'services.webdev.tech.database.tech4': 'Supabase',
        'services.webdev.tech.database.tech5': 'Redis Cache',
        'services.webdev.tech.database.tech6': 'Prisma ORM',
        'services.webdev.tech.database.tech7': 'Cloud Storage',
        'services.webdev.tech.database.tech8': '+ Many More',

        'services.webdev.tech.tools.title': 'Tools & DevOps',
        'services.webdev.tech.tools.description': 'Using industry-standard tools and platforms for seamless development and deployment',
        // Development Tools
        'services.webdev.tech.tools.tech1': 'Git & GitHub',
        'services.webdev.tech.tools.tech2': 'Vercel Deployment',
        'services.webdev.tech.tools.tech3': 'Netlify',
        'services.webdev.tech.tools.tech4': 'Docker',
        'services.webdev.tech.tools.tech5': 'CI/CD Pipelines',
        'services.webdev.tech.tools.tech6': 'Google Analytics',
        'services.webdev.tech.tools.tech7': 'Hotjar',
        'services.webdev.tech.tools.tech8': '+ Many More',

        // Add to translations.en
        'services.webdev.faq.title': 'Common Questions',
        'services.webdev.faq.subtitle': 'Have questions?',
        'services.webdev.faq.description': 'Find answers to commonly asked questions about our web development services',

        'services.webdev.faq.process.title': 'Project Process',
        'services.webdev.faq.process.q1': 'How long does a typical web project take?',
        'services.webdev.faq.process.a1': 'Our typical web development projects take 8-12 weeks from start to finish, depending on the complexity and scope. This includes planning, design, development, testing, and launch phases.',

        'services.webdev.faq.process.q2': 'What is your development process?',
        'services.webdev.faq.process.a2': 'We follow an agile development methodology with regular client check-ins. The process includes discovery, planning, design sprints, development iterations, testing, and deployment.',

        'services.webdev.faq.process.q3': 'Do you provide ongoing support?',
        'services.webdev.faq.process.a3': 'Yes, we offer various maintenance and support packages to ensure your website continues to perform optimally after launch.',

        'services.webdev.faq.technical.title': 'Technical Details',
        'services.webdev.faq.technical.q1': 'What technologies do you use?',
        'services.webdev.faq.technical.a1': 'We specialize in modern React-based development using Next.js, along with other cutting-edge technologies for optimal performance and scalability.',

        'services.webdev.faq.technical.q2': 'Is the website mobile responsive?',
        'services.webdev.faq.technical.a2': 'Yes, all our websites are fully responsive and optimized for all devices and screen sizes.',

        'services.webdev.faq.technical.q3': 'Can you work with existing systems?',
        'services.webdev.faq.technical.a3': 'Yes, we can integrate with your existing systems and APIs, ensuring seamless connectivity and data flow.',

        'services.webdev.faq.collaboration.title': 'Working Together',
        'services.webdev.faq.collaboration.q1': 'How do you handle project communication?',
        'services.webdev.faq.collaboration.a1': 'We maintain regular communication through scheduled check-ins, a project management system, and direct access to your development team.',

        'services.webdev.faq.collaboration.q2': 'What input do you need from clients?',
        'services.webdev.faq.collaboration.a2': 'We need your business requirements, brand guidelines, content, and regular feedback throughout the project to ensure we meet your goals.',

        'services.webdev.faq.collaboration.q3': 'How do you handle revisions?',
        'services.webdev.faq.collaboration.a3': 'We include revision rounds in our project timeline and work closely with you to ensure the final product meets your expectations.',

        'services.ai.page.title': 'AI Solutions',
        'services.ai.page.description': 'Intelligent automation for your business growth',

        'services.ai.features.title': 'AI Solutions',
        'services.ai.features.subtitle': 'Intelligent Automation',
        'services.ai.features.description': 'Transform your business with cutting-edge AI solutions tailored to your needs',

        'services.ai.features.chatbot.title': 'AI Chatbots',
        'services.ai.features.chatbot.description': 'Intelligent conversational agents that engage with your customers 24/7',

        'services.ai.features.agent.title': 'AI Agents',
        'services.ai.features.agent.description': 'Custom AI assistants that automate complex tasks and workflows',

        'services.ai.features.integration.title': 'AI Integration',
        'services.ai.features.integration.description': 'Seamless integration of AI capabilities into your existing systems',

        'services.ai.features.automation.title': 'Smart Automation',
        'services.ai.features.automation.description': 'Intelligent process automation powered by advanced AI algorithms',

        'services.ai.tech.title': 'Our Tech Stack',
        'services.ai.tech.subtitle': 'Cutting-edge Technologies',
        'services.ai.tech.description': 'We use the latest AI technologies and tools to deliver powerful solutions',

        // AI Development Platforms
        'services.ai.tech.platforms.title': 'AI Platforms',
        'services.ai.tech.platforms.description': 'Advanced AI development platforms and frameworks',
        'services.ai.tech.platforms.tech1': 'Voiceflow',
        'services.ai.tech.platforms.tech2': 'Fixie Agents',
        'services.ai.tech.platforms.tech3': 'ChatGPT/GPT-4',
        'services.ai.tech.platforms.tech4': 'LangChain',
        'services.ai.tech.platforms.tech5': 'Anthropic Claude',
        'services.ai.tech.platforms.more': '+ Many More',

        // Integration & Automation
        'services.ai.tech.integration.title': 'Integration Tools',
        'services.ai.tech.integration.description': 'Seamless integration and automation platforms',
        'services.ai.tech.integration.tech1': 'Make (Integromat)',
        'services.ai.tech.integration.tech2': 'Zapier',
        'services.ai.tech.integration.tech3': 'Airtable',
        'services.ai.tech.integration.tech4': 'HubSpot',
        'services.ai.tech.integration.tech5': 'n8n',
        'services.ai.tech.integration.more': '+ Many More',

        // NLP & Machine Learning
        'services.ai.tech.nlp.title': 'AI & ML',
        'services.ai.tech.nlp.description': 'Natural Language Processing and Machine Learning capabilities',
        'services.ai.tech.nlp.tech1': 'Natural Language Processing',
        'services.ai.tech.nlp.tech2': 'Machine Learning Models',
        'services.ai.tech.nlp.tech3': 'Semantic Search',
        'services.ai.tech.nlp.tech4': 'Vector Databases',
        'services.ai.tech.nlp.tech5': 'Text Analytics',
        'services.ai.tech.nlp.more': '+ Many More',

        // Infrastructure
        'services.ai.tech.infrastructure.title': 'Infrastructure',
        'services.ai.tech.infrastructure.description': 'Robust deployment and infrastructure solutions',
        'services.ai.tech.infrastructure.tech1': 'Cloud Platforms',
        'services.ai.tech.infrastructure.tech2': 'REST APIs',
        'services.ai.tech.infrastructure.tech3': 'WebSockets',
        'services.ai.tech.infrastructure.tech4': 'Docker',
        'services.ai.tech.infrastructure.tech5': 'CI/CD Pipelines',
        'services.ai.tech.infrastructure.more': '+ Many More',

        'services.ai.faq.title': 'Common Questions',
        'services.ai.faq.subtitle': 'Have questions?',
        'services.ai.faq.description': 'Find answers to commonly asked questions about our AI solutions',

        // Implementation Process
        'services.ai.faq.process.title': 'Implementation Process',
        'services.ai.faq.process.q1': 'How long does it take to implement an AI solution?',
        'services.ai.faq.process.a1': 'Implementation timelines vary based on complexity, typically ranging from 4-12 weeks. We follow an agile approach, delivering value incrementally throughout the project.',

        'services.ai.faq.process.q2': 'What is the process of developing AI solutions?',
        'services.ai.faq.process.a2': 'Our process includes initial assessment, solution design, development, testing, and deployment phases. We ensure continuous communication and feedback throughout the development cycle.',

        'services.ai.faq.process.q3': 'Do you provide training for using AI tools?',
        'services.ai.faq.process.a3': 'Yes, we provide comprehensive training and documentation for all implemented AI solutions, ensuring your team can effectively use and manage the tools.',

        // Technical Details
        'services.ai.faq.technical.title': 'Technology & Capabilities',
        'services.ai.faq.technical.q1': 'What type of AI technologies do you use?',
        'services.ai.faq.technical.a1': 'We use cutting-edge AI technologies including GPT-4, LangChain, and various specialized tools like Voiceflow and Fixie for chatbots and AI agents.',

        'services.ai.faq.technical.q2': 'Can AI integrate with our existing systems?',
        'services.ai.faq.technical.a2': 'Yes, our AI solutions are designed to integrate seamlessly with your existing systems through APIs and automation tools like Make and Zapier.',

        'services.ai.faq.technical.q3': 'How secure are your AI solutions?',
        'services.ai.faq.technical.a3': 'We implement robust security measures and follow industry best practices for data protection. All our AI solutions comply with relevant privacy regulations.',

        // Collaboration
        'services.ai.faq.collaboration.title': 'Working Together',
        'services.ai.faq.collaboration.q1': 'How do you ensure AI aligns with our business goals?',
        'services.ai.faq.collaboration.a1': 'We begin with a thorough analysis of your business objectives and design AI solutions that directly address your specific needs and goals.',

        'services.ai.faq.collaboration.q2': 'What kind of support do you provide post-implementation?',
        'services.ai.faq.collaboration.a2': 'We offer ongoing support, maintenance, and optimization services to ensure your AI solutions continue to perform optimally.',

        'services.ai.faq.collaboration.q3': 'How do you handle data privacy and security?',
        'services.ai.faq.collaboration.a3': 'We follow strict data protection protocols and comply with the Sri Lankan Personal Data Protection Act (PDPA) and other relevant privacy regulations, ensuring your data remains secure.',



        'legal.imprint.title': 'Imprint',
        'legal.imprint.description': 'Legal information about our company',

        'legal.imprint.company.title': 'Company Information',
        'legal.imprint.company.name': 'Growth Space Lanka',
        'legal.imprint.company.street': '123 Galle Road',
        'legal.imprint.company.city': 'Colombo 03',
        'legal.imprint.company.country': 'Sri Lanka',

        'legal.imprint.contact.title': 'Contact Information',
        'legal.imprint.contact.phone': 'Phone',
        'legal.imprint.contact.email': 'Email',
        'legal.imprint.contact.web': 'Website',

        'legal.imprint.registration.title': 'Registration Information',
        'legal.imprint.registration.court': 'Registration Court',
        'legal.imprint.registration.number': 'Registration Number',
        'legal.imprint.registration.vatid': 'VAT ID',

        'legal.imprint.responsible.title': 'Responsible for Content',
        'legal.imprint.responsible.name': '[Name of Responsible Person]',
        'legal.imprint.responsible.position': 'Managing Director',
        'legal.imprint.responsible.email': 'info@growthspacelanka.com',

        'legal.imprint.disclaimer.title': 'Legal Notice',
        'legal.imprint.disclaimer.content': 'The content of this website has been carefully created and reviewed. However, we cannot guarantee the accuracy, completeness, and timeliness of the content provided.',

        'legal.privacy.title': 'Privacy Policy',
        'legal.privacy.description': 'Information about how we handle your data',

        'legal.privacy.general.title': 'General Information',
        'legal.privacy.general.intro': 'Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal data.',
        'legal.privacy.general.controller': 'The data controller responsible for this website is Growth Space Lanka, 123 Galle Road, Colombo 03, Sri Lanka.',
        'legal.privacy.general.dpo': 'For data protection inquiries, please contact us at: privacy@growthspacelanka.com',

        'legal.privacy.collection.title': 'Data Collection & Processing',
        'legal.privacy.collection.purpose': 'We collect and process your personal data only for specific purposes and in accordance with the Sri Lankan Personal Data Protection Act (PDPA) and other applicable data protection laws.',
        'legal.privacy.collection.types.title': 'Types of Data We Collect',
        'legal.privacy.collection.types.personal': 'Personal data (name, email, phone number) when you contact us or use our services',
        'legal.privacy.collection.types.usage': 'Usage data (pages visited, time spent) to improve our services',
        'legal.privacy.collection.types.technical': 'Technical data (IP address, browser type) necessary for website operation',

        'legal.privacy.cookies.title': 'Cookies & Tracking',
        'legal.privacy.cookies.description': 'We use cookies and similar technologies to improve your experience on our website.',
        'legal.privacy.cookies.types.title': 'Types of Cookies We Use',
        'legal.privacy.cookies.types.essential': 'Essential cookies: Required for basic website functionality',
        'legal.privacy.cookies.types.analytics': 'Analytics cookies: Help us understand how visitors use our website',
        'legal.privacy.cookies.types.marketing': 'Marketing cookies: Used to deliver relevant advertisements (only with your consent)',

        'legal.privacy.thirdparty.title': 'Third-party Services',
        'legal.privacy.thirdparty.description': 'We use selected third-party services to enhance our website functionality.',
        'legal.privacy.thirdparty.services.analytics': 'Google Analytics: We use Google Analytics to analyze website traffic',
        'legal.privacy.thirdparty.services.social': 'Social Media: Integration of social media features',
        'legal.privacy.thirdparty.services.payment': 'Payment Processing: Secure payment processing through certified providers',

        'legal.privacy.rights.title': 'Your Data Protection Rights',
        'legal.privacy.rights.intro': 'Under the Sri Lankan Personal Data Protection Act and applicable data protection laws, you have several rights regarding your personal data:',
        'legal.privacy.rights.access': 'Right to access your personal data',
        'legal.privacy.rights.rectification': 'Right to correct inaccurate personal data',
        'legal.privacy.rights.erasure': 'Right to erasure ("right to be forgotten")',
        'legal.privacy.rights.restriction': 'Right to restrict processing',
        'legal.privacy.rights.portability': 'Right to data portability',
        'legal.privacy.rights.object': 'Right to object to processing',

        'legal.privacy.security.title': 'Data Security',
        'legal.privacy.security.measures': 'We implement appropriate technical and organizational measures to ensure data security.',
        'legal.privacy.security.encryption': 'All data is transmitted using secure SSL encryption.',
        'legal.privacy.security.staff': 'Our staff is trained in data protection and bound by confidentiality agreements.',

        'legal.terms.title': 'Terms of Service',
        'legal.terms.description': 'General terms and conditions for our services',

        'legal.terms.general.title': 'General Provisions',
        'legal.terms.general.scope': 'These terms and conditions govern all business relationships between us and our clients.',
        'legal.terms.general.validity': 'Any deviating terms and conditions of the client shall not apply unless explicitly agreed upon in writing.',

        'legal.terms.services.title': 'Services',
        'legal.terms.services.description': 'We offer the following services in the field of web development and AI solutions:',
        'legal.terms.services.webdev': 'Development of websites, web applications, and custom software solutions',
        'legal.terms.services.ai': 'AI integration, chatbot development, and automation solutions',
        'legal.terms.services.consulting': 'Technical consulting and project management',

        'legal.terms.contract.title': 'Contract Terms',
        'legal.terms.contract.conclusion.title': 'Contract Conclusion',
        'legal.terms.contract.conclusion.content': 'The contract is concluded upon our written confirmation of the order or upon commencement of service provision.',
        'legal.terms.contract.duration.title': 'Contract Duration',
        'legal.terms.contract.duration.content': 'The contract duration is determined by the individual project scope or service agreement.',

        'legal.terms.payment.title': 'Pricing and Payment',
        'legal.terms.payment.prices': 'All prices are in Sri Lankan Rupees (LKR) and do not include applicable VAT.',
        'legal.terms.payment.terms': 'Payments are due within 14 days of invoice date without deduction.',
        'legal.terms.payment.methods': 'We accept bank transfers and other specified payment methods.',

        'legal.terms.obligations.title': 'Rights and Obligations',
        'legal.terms.obligations.provider.title': 'Our Obligations',
        'legal.terms.obligations.provider.content': 'We commit to providing our services professionally and according to current technical standards.',
        'legal.terms.obligations.client.title': 'Client Obligations',
        'legal.terms.obligations.client.content': 'The client shall provide all necessary information and materials in a timely manner.',

        'legal.terms.liability.title': 'Liability',
        'legal.terms.liability.limitation': 'Our liability is limited to cases of intent and gross negligence.',
        'legal.terms.liability.exclusions': 'Liability for slight negligence is excluded unless it concerns essential contractual obligations.',

        'legal.terms.final.title': 'Final Provisions',
        'legal.terms.final.jurisdiction': 'Place of jurisdiction is Colombo, Sri Lanka.',
        'legal.terms.final.severability': 'Should individual provisions be invalid, the remaining provisions shall remain unaffected.',

        'contact.page.title': 'Contact Us',
        'contact.page.description': 'Get in touch with our team',

        'contact.form.title': 'Send A Message',
        'contact.form.subtitle': 'How can we help?',
        'contact.form.description': 'Fill out the form below and we\'ll get back to you as soon as possible.',

        'contact.form.name': 'Full Name',
        'contact.form.namePlaceholder': 'Enter your full name',

        'contact.form.email': 'Email Address',
        'contact.form.emailPlaceholder': 'Enter your email address',

        'contact.form.subject': 'Subject',
        'contact.form.subjectPlaceholder': 'What is this about?',

        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Write your message here...',

        'contact.form.submit': 'Send Message',
        'contact.form.phonePlaceholder': 'Enter your phone number',
        'contact.form.inquiryType': 'Type of Inquiry',
        'contact.form.services.web-development': 'Web Development',
        'contact.form.services.ai-solutions': 'AI Solutions',
        'contact.form.sending': 'Sending...',
        'contact.form.services.webdev': 'Web Development',
        'contact.form.services.ai': 'AI Solutions',
        'contact.form.nameRequired': 'Please enter your name',
        'contact.form.emailRequired': 'Please enter your email',
        'contact.form.phoneRequired': 'Please enter your phone number',
        'contact.form.inquiryRequired': 'Please select an inquiry type',
        'contact.form.messageRequired': 'Please enter your message',
        'contact.form.error': 'An error occurred. Please try again.',
        'contact.form.success': 'Message sent successfully! We\'ll get back to you soon.',


        'contact.form.rateLimit': 'Too many submissions. Please try again later.',
        'contact.form.networkError': 'Network error. Please check your connection.',
        'contact.form.invalidSubmission': 'Invalid submission. Please check your inputs.',
        'contact.form.emailInvalid': 'Please enter a valid email address',

        'contact.info.title': 'Get in Touch',
        'contact.info.description': 'Contact us through any of these channels',
        'contact.info.email.title': 'Email Us',
        'contact.info.phone.title': 'Call Us',
        'contact.info.address.title': 'Visit Us',
        'contact.info.address.content': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'thankYou.title': 'Thank You!',
        'thankYou.description': 'We have received your message and will get back to you as soon as possible.',
        'thankYou.backHome': 'Back to Home',

        'quote.form.title': 'Get a Quote',
        'quote.form.subtitle': 'Start Your Project',
        'quote.form.description': 'Tell us about your project and we\'ll get back to you within 24 hours with a free quote.',

        'quote.form.namePlaceholder': 'Full Name',
        'quote.form.nameRequired': 'Please enter your name',

        'quote.form.emailPlaceholder': 'Email Address',
        'quote.form.emailRequired': 'Please enter your email',

        'quote.form.phonePlaceholder': 'Phone Number',
        'quote.form.phoneRequired': 'Please enter your phone number',

        'quote.form.companyPlaceholder': 'Company Name',
        'quote.form.companyRequired': 'Please enter your company name',

        'quote.form.servicesLabel': 'Services Required',
        'quote.form.servicesRequired': 'Please select at least one service',

        'quote.form.services.webdev': 'Web Development',
        'quote.form.services.ai': 'AI Solutions',

        'quote.form.budgetLabel': 'Project Budget',
        'quote.form.budgetRequired': 'Please select your budget range',

        'quote.form.detailsPlaceholder': 'Tell us about your project requirements and goals...',
        'quote.form.detailsRequired': 'Please provide project details',

        'quote.form.sending': 'Sending...',
        'quote.form.submit': 'Submit Request',
        'quote.form.error': 'Failed to submit request. Please try again.',
        'quote.form.backHome': 'Back to Home',

        'quote.thankyou.backHome': 'Back to Home',
        'quote.thankyou.title': 'Quote Request Received!',
        'quote.thankyou.subtitle': 'Thank you for choosing us',
        'quote.thankyou.description': 'We\'ll review your project requirements and send you a detailed quote within 24 hours. Our team is excited to help bring your vision to life!',
        'quote.thankyou.returnHome': 'Return to Homepage',
        'footer.imprint': 'Imprint',

        'cookie.text': 'We use cookies to improve your experience on our site.',
        'cookie.link': 'Learn more in our Privacy Policy',
        'cookie.accept': 'Accept Cookies',
        'cookie.deny': 'Deny',


    },
    de: {
        'nav.home': 'Startseite',
        'nav.services': 'Leistungen',
        'nav.about': 'Über uns',
        'nav.contact': 'Kontakt',
        'nav.getStarted': 'Loslegen',
        'nav.webDev': 'Webentwicklung',
        'nav.ai': 'KI-Lösungen',

        'hero.title.start': 'Ideen in ',
        'hero.title.highlight1': 'Digitale',
        'hero.title.middle': ' Exzellenz ',
        'hero.title.highlight2': 'Verwandeln',
        'hero.title.end': ' trifft',
        'hero.subtitle': 'Wir entwickeln modernste Weblösungen und KI-Integrationen, die Geschäftswachstum und Innovation vorantreiben.',
        'hero.cta.primary': 'Loslegen',
        'hero.cta.secondary': 'Unsere Leistungen',

        'services.title': 'Unsere Leistungen',
        'services.subtitle': 'Umfassende Lösungen',
        'services.description': 'Wir gestalten digitale Erlebnisse, die Unternehmen transformieren und Erfolg in der modernen digitalen Landschaft ermöglichen. Unsere Expertise umfasst Webentwicklung und KI-Integration und stellt sicher, dass Ihr Unternehmen der Konkurrenz einen Schritt voraus ist.',
        'services.webdev.title': 'Webentwicklung',
        'services.webdev.description': 'Maßgeschneiderte Websites und Webanwendungen mit modernster Technologie.',
        'services.ai.title': 'KI-Integrierte Lösungen',
        'services.ai.description': 'Intelligente Automatisierung und KI-Integration für Ihre Geschäftsanforderungen.',

        'stats.projects': 'Abgeschlossene Projekte',
        'stats.satisfaction': 'Kundenzufriedenheit',
        'stats.experience': 'Jahre Erfahrung',
        'stats.clients': 'Aktive Kunden',

        'about.title': 'Über Uns',
        'about.subtitle': 'Ihr digitaler Partner',
        'about.description': 'Wir sind ein Team aus leidenschaftlichen Entwicklern und KI-Spezialisten, die sich der digitalen Transformation von Unternehmen durch innovative Lösungen verschrieben haben. Mit jahrelanger Erfahrung und einem Bestreben nach Exzellenz helfen wir Unternehmen, die digitale Landschaft zu navigieren.',
        'about.cta': 'Mehr Über Uns Erfahren',

        'testimonials.title': 'Kundenstimmen',
        'testimonials.subtitle': 'Was unsere Kunden sagen',
        'testimonials.description': 'Entdecken Sie, wie wir Unternehmen bei der digitalen Transformation unterstützt und bemerkenswerte Ergebnisse erzielt haben.',

        'testimonials.1.author': 'Rajesh Perera',
        'testimonials.1.role': 'Geschäftsführer',
        'testimonials.1.company': 'TechVision Lanka',
        'testimonials.1.content': 'Ihre Expertise in Webentwicklung und KI-Integration hat unseren Geschäftsbetrieb komplett transformiert. Die Ergebnisse übertrafen unsere Erwartungen.',

        'testimonials.2.author': 'Priya Fernando',
        'testimonials.2.role': 'CTO',
        'testimonials.2.company': 'InnovateTech Solutions',
        'testimonials.2.content': 'Hervorragender Service und technische Expertise. Sie lieferten eine komplexe Webanwendung vor dem Zeitplan und in einwandfreier Qualität.',

        'testimonials.3.author': 'David Silva',
        'testimonials.3.role': 'Direktor',
        'testimonials.3.company': 'Digital Solutions Lanka',
        'testimonials.3.content': 'Ihre KI-Lösungen haben unsere Effizienz deutlich verbessert. Professionelles Team mit ausgezeichneter Kommunikation während des gesamten Projekts.',

        'testimonials.4.author': 'Nisha Wickramasinghe',
        'testimonials.4.role': 'Produktmanagerin',
        'testimonials.4.company': 'FutureScale Technologies',
        'testimonials.4.content': 'Die KI-Integration hat unseren Kundenservice revolutioniert. Die Reaktionszeiten verbesserten sich um 70% und die Kundenzufriedenheit ist auf einem Höchststand.',

        'testimonials.5.author': 'James Anderson',
        'testimonials.5.role': 'Technischer Leiter',
        'testimonials.5.company': 'DataFlow Systems',
        'testimonials.5.content': 'Die Expertise des Teams in Webentwicklung und KI schuf eine nahtlose Lösung, die perfekt auf unsere Geschäftsziele abgestimmt war.',

        'process.title': 'Unser Prozess',
        'process.subtitle': 'So arbeiten wir', 'process.description': 'Ein optimierter Ansatz zur Transformation Ihrer digitalen Präsenz, vom ersten Konzept bis zur erfolgreichen Umsetzung.',
        'process.step1.title': 'Entdeckung & Planung',
        'process.step1.description': 'Wir analysieren Ihre Anforderungen und planen die perfekte Lösung.',
        'process.step2.title': 'Design & Architektur',
        'process.step2.description': 'Erstellen der Blaupause für Ihren Erfolg mit modernen Designprinzipien.',
        'process.step3.title': 'Entwicklung',
        'process.step3.description': 'Entwicklung Ihrer Lösung mit modernsten Technologien.',
        'process.step4.title': 'Testing & QS',
        'process.step4.description': 'Gründliche Tests für Qualität und Zuverlässigkeit.',
        'process.step5.title': 'Bereitstellung',
        'process.step5.description': 'Reibungslose Bereitstellung und Integration Ihrer Lösung.',
        'process.step6.title': 'Support & Wartung',
        'process.step6.description': 'Laufende Unterstützung und Updates für optimale Funktion.',

        'cta.title': 'Innovation beginnt mit einem Gespräch',
        'cta.description': 'Machen Sie den ersten Schritt in Richtung Innovation. Lassen Sie uns Ihr Projekt besprechen und gemeinsam etwas Außergewöhnliches schaffen.',
        'cta.button': 'Kostenloses Angebot',

        'footer.description': 'Innovative Webentwicklung und KI-Lösungen für moderne Unternehmen.',
        'footer.quickLinks': 'Schnellzugriff',
        'footer.about': 'Über Uns',
        'footer.services': 'Leistungen',
        'footer.contact': 'Kontakt',
        'footer.webDev': 'Webentwicklung',
        'footer.ai': 'KI-Lösungen',
        'footer.address': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'footer.copyright': 'Alle Rechte vorbehalten.',
        'footer.privacy': 'Datenschutz',
        'footer.terms': 'AGB',

        'about.story.title': 'Unsere Geschichte',
        'about.story.subtitle': 'Digitale Exzellenz aufbauen',
        'about.story.description': 'Eine Reise der Innovation und des Engagements zur Schaffung wirkungsvoller digitaler Lösungen, die Unternehmen transformieren und Erfolg fördern.',
        'about.story.content1': 'Gegründet mit der Vision, die Lücke zwischen Technologie und Geschäftserfolg zu schließen, hat sich Growth Space Lanka zu einem führenden Anbieter digitaler Lösungen entwickelt. Wir kombinieren Expertise in Webentwicklung, Marketing und KI, um relevante Ergebnisse zu liefern.',
        'about.story.content2': 'Unser Expertenteam vereint jahrelange Erfahrung aus verschiedenen Bereichen und arbeitet gemeinsam daran, komplexe Herausforderungen zu lösen und innovative Lösungen zu schaffen, die Unternehmen im digitalen Zeitalter erfolgreich machen.',


        'about.vision.title': 'Unsere Vision',
        'about.vision.subtitle': 'Blick in die Zukunft',
        'about.vision.statement': 'Die digitale Transformation zu revolutionieren, indem wir KI- und Weblösungen für Unternehmen aller Größen zugänglich und wirkungsvoll machen.',
        'about.mission.title': 'Unsere Mission',
        'about.mission.statement': 'Innovative, skalierbare und intelligente digitale Lösungen zu liefern, die echtes Geschäftswachstum vorantreiben und nachhaltigen Wert für unsere Kunden schaffen.',

        'about.team.title': 'Unser Team',
        'about.team.subtitle': 'Lernen Sie die Experten kennen',
        'about.team.description': 'Eine Gruppe leidenschaftlicher Innovatoren, die sich der Transformation von Unternehmen durch Technologie verschrieben haben.',
        'about.team.member1.name': 'Michael Weber',
        'about.team.member1.role': 'CEO & Gründer',
        'about.team.member2.name': 'Sarah Schmidt',
        'about.team.member2.role': 'Entwicklungsleiterin',
        'about.team.member3.name': 'Thomas Mueller',
        'about.team.member3.role': 'KI-Lösungsleiter',

        'services.page.title': 'Leistungen',
        'services.page.description': 'Maßgeschneiderte Lösungen für Ihre Geschäftsanforderungen',

        'services.webdev.subtitle': 'Moderne Weblösungen',
        'services.webdev.detailed': 'Wir erstellen modernste Websites und Webanwendungen, die außergewöhnliche Benutzererlebnisse bieten und das Geschäftswachstum fördern.',
        'services.webdev.feature1': 'Individuelle Website-Entwicklung mit modernen Technologien',
        'services.webdev.feature2': 'Responsives Design für alle Geräte und Bildschirmgrößen',
        'services.webdev.feature3': 'Leistungsoptimierung und SEO-Best-Practices',
        'services.webdev.feature4': 'Skalierbare Webanwendungen mit robuster Architektur',

        'services.ai.subtitle': 'Intelligente Automatisierung',
        'services.ai.detailed': 'Transformieren Sie Ihre Geschäftsprozesse mit unseren KI-gestützten Lösungen, die Prozesse automatisieren und die Entscheidungsfindung verbessern.',
        'services.ai.feature1': 'Maßgeschneiderte KI-Chatbots für verbesserten Kundenservice',
        'services.ai.feature2': 'Prozessautomatisierung mit maschinellem Lernen',
        'services.ai.feature3': 'KI-gestützte Datenanalyse und Erkenntnisse',
        'services.ai.feature4': 'Integration in bestehende Geschäftssysteme',

        'services.webdev.page.title': 'Webentwicklung',
        'services.webdev.page.description': 'Maßgeschneiderte Weblösungen für moderne Unternehmen',

        'services.webdev.features.title': 'Weblösungen',
        'services.webdev.features.subtitle': 'Alles, was Sie brauchen',
        'services.webdev.features.description': 'Umfassende Webentwicklungslösungen, maßgeschneidert für Ihre spezifischen Anforderungen',
        'services.webdev.features.custom.title': 'Website-Entwicklung',
        'services.webdev.features.custom.description': 'Maßgeschneiderte Websites, die perfekt zu Ihrer Marke und Ihren Anforderungen passen',
        'services.webdev.features.application.title': 'Web-App-Entwicklung',
        'services.webdev.features.application.description': 'Robuste und skalierbare Webanwendungen mit modernen Technologien',
        'services.webdev.features.ecommerce.title': 'E-Commerce-Entwicklung',
        'services.webdev.features.ecommerce.description': 'Leistungsstarke Online-Shops mit nahtlosem Einkaufserlebnis',
        'services.webdev.features.cms.title': 'CMS-basierte Entwicklung',
        'services.webdev.features.cms.description': 'Maßgeschneiderte Content-Management-Systeme für einfache Website-Wartung',

        'services.webdev.tech.title': 'Unsere Technologien',
        'services.webdev.tech.subtitle': 'Moderne Technologien',
        'services.webdev.tech.description': 'Wir verwenden die neuesten und zuverlässigsten Technologien, um robuste Weblösungen zu entwickeln',

        // Frontend descriptions
        'services.webdev.tech.frontend.title': 'Frontend',
        'services.webdev.tech.frontend.description': 'Entwicklung responsiver und interaktiver Benutzeroberflächen mit dem React-Ökosystem und modernen Webtechnologien',
        // Frontend Technologies
        'services.webdev.tech.frontend.tech1': 'React.js',
        'services.webdev.tech.frontend.tech2': 'Next.js',
        'services.webdev.tech.frontend.tech3': 'Gatsby.js',
        'services.webdev.tech.frontend.tech4': 'Framer Motion',
        'services.webdev.tech.frontend.tech5': 'Tailwind CSS',
        'services.webdev.tech.frontend.tech6': 'TypeScript',
        'services.webdev.tech.frontend.tech7': 'Redux & Context API',
        'services.webdev.tech.frontend.tech8': '+ Many More',

        // Backend descriptions
        'services.webdev.tech.backend.title': 'Backend',
        'services.webdev.tech.backend.description': 'Entwicklung skalierbarer Server-Lösungen mit Node.js und modernen Headless-CMS-Plattformen',
        // Backend Technologies
        'services.webdev.tech.backend.tech1': 'Node.js & Express',
        'services.webdev.tech.backend.tech2': 'Next.js API-Routen',
        'services.webdev.tech.backend.tech3': 'Strapi CMS',
        'services.webdev.tech.backend.tech4': 'Headless WordPress',
        'services.webdev.tech.backend.tech5': 'GraphQL',
        'services.webdev.tech.backend.tech6': 'REST APIs',
        'services.webdev.tech.backend.tech7': 'Serverless Functions',
        'services.webdev.tech.backend.tech8': '+ Viele Weitere',

        // Database descriptions
        'services.webdev.tech.database.title': 'Database',
        'services.webdev.tech.database.description': 'Nutzung moderner Datenbanken und Cloud-Speicherlösungen für effizientes Datenmanagement',
        // Database & Storage
        'services.webdev.tech.database.tech1': 'MongoDB',
        'services.webdev.tech.database.tech2': 'Airtable',
        'services.webdev.tech.database.tech3': 'Firebase',
        'services.webdev.tech.database.tech4': 'Supabase',
        'services.webdev.tech.database.tech5': 'Redis Cache',
        'services.webdev.tech.database.tech6': 'Prisma ORM',
        'services.webdev.tech.database.tech7': 'Cloud Speicher',
        'services.webdev.tech.database.tech8': '+ Viele Weitere',

        // Tools descriptions
        'services.webdev.tech.tools.title': 'Tools & DevOps',
        'services.webdev.tech.tools.description': 'Einsatz von Industriestandard-Tools und Plattformen für nahtlose Entwicklung und Bereitstellung',
        // Development Tools
        'services.webdev.tech.tools.tech1': 'Git & GitHub',
        'services.webdev.tech.tools.tech2': 'Vercel Deployment',
        'services.webdev.tech.tools.tech3': 'Netlify',
        'services.webdev.tech.tools.tech4': 'Docker',
        'services.webdev.tech.tools.tech5': 'CI/CD Pipelines',
        'services.webdev.tech.tools.tech6': 'Google Analytics',
        'services.webdev.tech.tools.tech7': 'Hotjar',
        'services.webdev.tech.tools.tech8': '+ Viele Weitere',

        // Add to translations.de
        'services.webdev.faq.title': 'Häufige Fragen',
        'services.webdev.faq.subtitle': 'Haben Sie Fragen?',
        'services.webdev.faq.description': 'Finden Sie Antworten auf häufig gestellte Fragen zu unseren Webentwicklungsdiensten',

        'services.webdev.faq.process.title': 'Projektablauf',
        'services.webdev.faq.process.q1': 'Wie lange dauert ein typisches Webprojekt?',
        'services.webdev.faq.process.a1': 'Unsere typischen Webentwicklungsprojekte dauern je nach Komplexität und Umfang 8-12 Wochen von Anfang bis Ende. Dies umfasst die Planungs-, Design-, Entwicklungs-, Test- und Launch-Phasen.',

        'services.webdev.faq.process.q2': 'Wie sieht Ihr Entwicklungsprozess aus?',
        'services.webdev.faq.process.a2': 'Wir folgen einer agilen Entwicklungsmethodik mit regelmäßigen Kundenabstimmungen. Der Prozess umfasst Discovery, Planung, Design-Sprints, Entwicklungsiterationen, Tests und Deployment.',

        'services.webdev.faq.process.q3': 'Bieten Sie fortlaufende Unterstützung?',
        'services.webdev.faq.process.a3': 'Ja, wir bieten verschiedene Wartungs- und Support-Pakete an, um sicherzustellen, dass Ihre Website auch nach dem Launch optimal funktioniert.',

        'services.webdev.faq.technical.title': 'Technische Details',
        'services.webdev.faq.technical.q1': 'Welche Technologien verwenden Sie?',
        'services.webdev.faq.technical.a1': 'Wir sind spezialisiert auf moderne React-basierte Entwicklung mit Next.js und anderen fortschrittlichen Technologien für optimale Leistung und Skalierbarkeit.',

        'services.webdev.faq.technical.q2': 'Ist die Website mobiloptimiert?',
        'services.webdev.faq.technical.a2': 'Ja, alle unsere Websites sind vollständig responsiv und für alle Geräte und Bildschirmgrößen optimiert.',

        'services.webdev.faq.technical.q3': 'Können Sie mit bestehenden Systemen arbeiten?',
        'services.webdev.faq.technical.a3': 'Ja, wir können uns in Ihre bestehenden Systeme und APIs integrieren und gewährleisten eine nahtlose Konnektivität und einen reibungslosen Datenfluss.',

        'services.webdev.faq.collaboration.title': 'Zusammenarbeit',
        'services.webdev.faq.collaboration.q1': 'Wie handhaben Sie die Projektkommunikation?',
        'services.webdev.faq.collaboration.a1': 'Wir pflegen regelmäßige Kommunikation durch geplante Check-ins, ein Projektmanagementsystem und direkten Zugang zu Ihrem Entwicklungsteam.',

        'services.webdev.faq.collaboration.q2': 'Welche Informationen benötigen Sie von Kunden?',
        'services.webdev.faq.collaboration.a2': 'Wir benötigen Ihre geschäftlichen Anforderungen, Markenrichtlinien, Inhalte und regelmäßiges Feedback während des gesamten Projekts, um sicherzustellen, dass wir Ihre Ziele erreichen.',

        'services.webdev.faq.collaboration.q3': 'Wie gehen Sie mit Revisionen um?',
        'services.webdev.faq.collaboration.a3': 'Wir berücksichtigen Revisionsphasen in unserem Projektzeitplan und arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass das Endprodukt Ihren Erwartungen entspricht.',

        'services.ai.page.title': 'KI-Lösungen',
        'services.ai.page.description': 'Intelligente Automatisierung für Ihr Geschäftswachstum',

        'services.ai.features.title': 'KI-Lösungen',
        'services.ai.features.subtitle': 'Intelligente Automatisierung',
        'services.ai.features.description': 'Transformieren Sie Ihr Unternehmen mit modernsten KI-Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind',

        'services.ai.features.chatbot.title': 'KI-Chatbots',
        'services.ai.features.chatbot.description': 'Intelligente Konversationsagenten, die rund um die Uhr mit Ihren Kunden kommunizieren',

        'services.ai.features.agent.title': 'KI-Agenten',
        'services.ai.features.agent.description': 'Maßgeschneiderte KI-Assistenten, die komplexe Aufgaben und Workflows automatisieren',

        'services.ai.features.integration.title': 'KI-Integration',
        'services.ai.features.integration.description': 'Nahtlose Integration von KI-Funktionen in Ihre bestehenden Systeme',

        'services.ai.features.automation.title': 'Intelligente Automatisierung',
        'services.ai.features.automation.description': 'Intelligente Prozessautomatisierung, unterstützt durch fortschrittliche KI-Algorithmen',

        'services.ai.tech.title': 'Unsere Technologien',
        'services.ai.tech.subtitle': 'Modernste Technologien',
        'services.ai.tech.description': 'Wir nutzen die neuesten KI-Technologien und Tools für leistungsstarke Lösungen',

        // AI Development Platforms
        'services.ai.tech.platforms.title': 'AI Platforms',
        'services.ai.tech.platforms.description': 'Fortschrittliche KI-Entwicklungsplattformen und Frameworks',
        'services.ai.tech.platforms.tech1': 'Voiceflow',
        'services.ai.tech.platforms.tech2': 'Fixie Agents',
        'services.ai.tech.platforms.tech3': 'ChatGPT/GPT-4',
        'services.ai.tech.platforms.tech4': 'LangChain',
        'services.ai.tech.platforms.tech5': 'Anthropic Claude',
        'services.ai.tech.platforms.more': '+ Viele Mehr',

        // Integration & Automation
        'services.ai.tech.integration.title': 'Integration Tools',
        'services.ai.tech.integration.description': 'Nahtlose Integrations- und Automatisierungsplattformen',
        'services.ai.tech.integration.tech1': 'Make (Integromat)',
        'services.ai.tech.integration.tech2': 'Zapier',
        'services.ai.tech.integration.tech3': 'Airtable',
        'services.ai.tech.integration.tech4': 'HubSpot',
        'services.ai.tech.integration.tech5': 'n8n',
        'services.ai.tech.integration.more': '+ Viele Mehr',

        // NLP & Machine Learning
        'services.ai.tech.nlp.title': 'AI & ML',
        'services.ai.tech.nlp.description': 'Verarbeitung natürlicher Sprache und maschinelles Lernen',
        'services.ai.tech.nlp.tech1': 'Verarbeitung natürlicher Sprache',
        'services.ai.tech.nlp.tech2': 'Machine Learning Modelle',
        'services.ai.tech.nlp.tech3': 'Semantische Suche',
        'services.ai.tech.nlp.tech4': 'Vektor-Datenbanken',
        'services.ai.tech.nlp.tech5': 'Textanalyse',
        'services.ai.tech.nlp.more': '+ Viele Mehr',

        // Infrastructure
        'services.ai.tech.infrastructure.title': 'Infrastructure',
        'services.ai.tech.infrastructure.description': 'Robuste Bereitstellungs- und Infrastrukturlösungen',
        'services.ai.tech.infrastructure.tech1': 'Cloud-Plattformen',
        'services.ai.tech.infrastructure.tech2': 'REST APIs',
        'services.ai.tech.infrastructure.tech3': 'WebSockets',
        'services.ai.tech.infrastructure.tech4': 'Docker',
        'services.ai.tech.infrastructure.tech5': 'CI/CD Pipelines',
        'services.ai.tech.infrastructure.more': '+ Viele Mehr',


        'services.ai.faq.title': 'Häufige Fragen',
        'services.ai.faq.subtitle': 'Haben Sie Fragen?',
        'services.ai.faq.description': 'Finden Sie Antworten auf häufig gestellte Fragen zu unseren KI-Lösungen',

        // Implementation Process
        'services.ai.faq.process.title': 'Implementierungsprozess',
        'services.ai.faq.process.q1': 'Wie lange dauert die Implementierung einer KI-Lösung?',
        'services.ai.faq.process.a1': 'Die Implementierungszeit variiert je nach Komplexität, typischerweise zwischen 4-12 Wochen. Wir folgen einem agilen Ansatz mit kontinuierlicher Wertschöpfung.',

        'services.ai.faq.process.q2': 'Wie läuft der Entwicklungsprozess von KI-Lösungen ab?',
        'services.ai.faq.process.a2': 'Unser Prozess umfasst Erstanalyse, Lösungsdesign, Entwicklung, Tests und Bereitstellung. Wir gewährleisten kontinuierliche Kommunikation während des gesamten Entwicklungszyklus.',

        'services.ai.faq.process.q3': 'Bieten Sie Schulungen für KI-Tools an?',
        'services.ai.faq.process.a3': 'Ja, wir bieten umfassende Schulungen und Dokumentation für alle implementierten KI-Lösungen, damit Ihr Team die Tools effektiv nutzen kann.',

        // Technical Details
        'services.ai.faq.technical.title': 'Technologie & Funktionen',
        'services.ai.faq.technical.q1': 'Welche KI-Technologien verwenden Sie?',
        'services.ai.faq.technical.a1': 'Wir nutzen modernste KI-Technologien wie GPT-4, LangChain und spezialisierte Tools wie Voiceflow und Fixie für Chatbots und KI-Agenten.',

        'services.ai.faq.technical.q2': 'Kann KI in unsere bestehenden Systeme integriert werden?',
        'services.ai.faq.technical.a2': 'Ja, unsere KI-Lösungen sind darauf ausgelegt, sich nahtlos über APIs und Automatisierungstools wie Make und Zapier in Ihre bestehenden Systeme zu integrieren.',

        'services.ai.faq.technical.q3': 'Wie sicher sind Ihre KI-Lösungen?',
        'services.ai.faq.technical.a3': 'Wir implementieren robuste Sicherheitsmaßnahmen und folgen den Branchenstandards für Datenschutz. Alle unsere KI-Lösungen entsprechen den relevanten Datenschutzbestimmungen.',

        // Collaboration
        'services.ai.faq.collaboration.title': 'Zusammenarbeit',
        'services.ai.faq.collaboration.q1': 'Wie stellen Sie sicher, dass KI unsere Geschäftsziele unterstützt?',
        'services.ai.faq.collaboration.a1': 'Wir beginnen mit einer gründlichen Analyse Ihrer Geschäftsziele und entwickeln KI-Lösungen, die direkt auf Ihre spezifischen Anforderungen ausgerichtet sind.',

        'services.ai.faq.collaboration.q2': 'Welche Unterstützung bieten Sie nach der Implementierung?',
        'services.ai.faq.collaboration.a2': 'Wir bieten fortlaufende Unterstützung, Wartung und Optimierung, um die optimale Leistung Ihrer KI-Lösungen sicherzustellen.',

        'services.ai.faq.collaboration.q3': 'Wie gehen Sie mit Datenschutz und Sicherheit um?',
        'services.ai.faq.collaboration.a3': 'Wir folgen strengen Datenschutzprotokollen und erfüllen das srilankische Datenschutzgesetz (PDPA) sowie andere relevante Datenschutzbestimmungen, um die Sicherheit Ihrer Daten zu gewährleisten.',


        'legal.imprint.title': 'Impressum',
        'legal.imprint.description': 'Rechtliche Informationen über unser Unternehmen',

        'legal.imprint.company.title': 'Firmeninformationen',
        'legal.imprint.company.name': 'Growth Space Lanka',
        'legal.imprint.company.street': '123 Galle Road',
        'legal.imprint.company.city': 'Colombo 03',
        'legal.imprint.company.country': 'Sri Lanka',

        'legal.imprint.contact.title': 'Kontakt',
        'legal.imprint.contact.phone': 'Telefon',
        'legal.imprint.contact.email': 'E-Mail',
        'legal.imprint.contact.web': 'Website',

        'legal.imprint.registration.title': 'Registereintrag',
        'legal.imprint.registration.court': 'Registergericht',
        'legal.imprint.registration.number': 'Handelsregisternummer',
        'legal.imprint.registration.vatid': 'Umsatzsteuer-ID',

        'legal.imprint.responsible.title': 'Inhaltlich verantwortlich',
        'legal.imprint.responsible.name': '[Name of Responsible Person]',
        'legal.imprint.responsible.position': 'Geschäftsführer',
        'legal.imprint.responsible.email': 'info@growthspacelanka.com',

        'legal.imprint.disclaimer.title': 'Rechtlicher Hinweis',
        'legal.imprint.disclaimer.content': 'Die Inhalte dieser Website wurden sorgfältig erstellt und geprüft. Wir können jedoch keine Garantie für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte übernehmen.',

        'legal.privacy.title': 'Datenschutzerklärung',
        'legal.privacy.description': 'Informationen über den Umgang mit Ihren Daten',

        'legal.privacy.general.title': 'Allgemeine Informationen',
        'legal.privacy.general.intro': 'Der Schutz Ihrer Privatsphäre ist uns wichtig. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen.',
        'legal.privacy.general.controller': 'Verantwortlicher für diese Website ist Growth Space Lanka, 123 Galle Road, Colombo 03, Sri Lanka.',
        'legal.privacy.general.dpo': 'Für Datenschutzanfragen kontaktieren Sie uns bitte unter: privacy@growthspacelanka.com',

        'legal.privacy.collection.title': 'Datenerhebung & -verarbeitung',
        'legal.privacy.collection.purpose': 'Wir erheben und verarbeiten Ihre personenbezogenen Daten nur für bestimmte Zwecke und in Übereinstimmung mit dem srilankischen Datenschutzgesetz (PDPA) und anderen anwendbaren Datenschutzgesetzen.',
        'legal.privacy.collection.types.title': 'Arten der erhobenen Daten',
        'legal.privacy.collection.types.personal': 'Personenbezogene Daten (Name, E-Mail, Telefonnummer) bei Kontaktaufnahme oder Nutzung unserer Dienste',
        'legal.privacy.collection.types.usage': 'Nutzungsdaten (besuchte Seiten, Verweildauer) zur Verbesserung unserer Dienste',
        'legal.privacy.collection.types.technical': 'Technische Daten (IP-Adresse, Browser-Typ) für den Betrieb der Website',

        'legal.privacy.cookies.title': 'Cookies & Tracking',
        'legal.privacy.cookies.description': 'Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung auf unserer Website zu verbessern.',
        'legal.privacy.cookies.types.title': 'Arten von Cookies',
        'legal.privacy.cookies.types.essential': 'Notwendige Cookies: Erforderlich für die grundlegende Funktionalität der Website',
        'legal.privacy.cookies.types.analytics': 'Analyse-Cookies: Helfen uns zu verstehen, wie Besucher unsere Website nutzen',
        'legal.privacy.cookies.types.marketing': 'Marketing-Cookies: Für relevante Werbung (nur mit Ihrer Einwilligung)',

        'legal.privacy.thirdparty.title': 'Dienste Dritter',
        'legal.privacy.thirdparty.description': 'Wir nutzen ausgewählte Dienste Dritter zur Erweiterung unserer Website-Funktionalität.',
        'legal.privacy.thirdparty.services.analytics': 'Google Analytics: Zur Analyse des Website-Verkehrs',
        'legal.privacy.thirdparty.services.social': 'Social Media: Integration von Social-Media-Funktionen',
        'legal.privacy.thirdparty.services.payment': 'Zahlungsabwicklung: Sichere Zahlungsabwicklung durch zertifizierte Anbieter',

        'legal.privacy.rights.title': 'Ihre Datenschutzrechte',
        'legal.privacy.rights.intro': 'Nach dem srilankischen Datenschutzgesetz und anwendbaren Datenschutzgesetzen haben Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten:',
        'legal.privacy.rights.access': 'Recht auf Auskunft',
        'legal.privacy.rights.rectification': 'Recht auf Berichtigung',
        'legal.privacy.rights.erasure': 'Recht auf Löschung ("Recht auf Vergessenwerden")',
        'legal.privacy.rights.restriction': 'Recht auf Einschränkung der Verarbeitung',
        'legal.privacy.rights.portability': 'Recht auf Datenübertragbarkeit',
        'legal.privacy.rights.object': 'Recht auf Widerspruch gegen die Verarbeitung',

        'legal.privacy.security.title': 'Datensicherheit',
        'legal.privacy.security.measures': 'Wir setzen angemessene technische und organisatorische Maßnahmen zur Gewährleistung der Datensicherheit ein.',
        'legal.privacy.security.encryption': 'Alle Daten werden über eine sichere SSL-Verschlüsselung übertragen.',
        'legal.privacy.security.staff': 'Unsere Mitarbeiter sind im Datenschutz geschult und zur Vertraulichkeit verpflichtet.',

        'legal.terms.title': 'Allgemeine Geschäftsbedingungen',
        'legal.terms.description': 'Allgemeine Geschäftsbedingungen für unsere Dienstleistungen',

        'legal.terms.general.title': 'Allgemeine Bestimmungen',
        'legal.terms.general.scope': 'Diese AGB regeln alle Geschäftsbeziehungen zwischen uns und unseren Kunden.',
        'legal.terms.general.validity': 'Abweichende Bedingungen des Kunden finden keine Anwendung, sofern nicht ausdrücklich schriftlich zugestimmt wurde.',

        'legal.terms.services.title': 'Leistungen',
        'legal.terms.services.description': 'Wir bieten folgende Dienstleistungen im Bereich Webentwicklung und KI-Lösungen an:',
        'legal.terms.services.webdev': 'Entwicklung von Websites, Webanwendungen und individuellen Softwarelösungen',
        'legal.terms.services.ai': 'KI-Integration, Chatbot-Entwicklung und Automatisierungslösungen',
        'legal.terms.services.consulting': 'Technische Beratung und Projektmanagement',

        'legal.terms.contract.title': 'Vertragsbedingungen',
        'legal.terms.contract.conclusion.title': 'Vertragsschluss',
        'legal.terms.contract.conclusion.content': 'Der Vertrag kommt durch unsere schriftliche Auftragsbestätigung oder mit Beginn der Leistungserbringung zustande.',
        'legal.terms.contract.duration.title': 'Vertragsdauer',
        'legal.terms.contract.duration.content': 'Die Vertragsdauer richtet sich nach dem individuellen Projektumfang oder der Servicevereinbarung.',

        'legal.terms.payment.title': 'Preise und Zahlung',
        'legal.terms.payment.prices': 'Alle Preise verstehen sich in Sri-Lanka-Rupien (LKR) zuzüglich der gesetzlichen Mehrwertsteuer.',
        'legal.terms.payment.terms': 'Zahlungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug fällig.',
        'legal.terms.payment.methods': 'Wir akzeptieren Überweisungen und andere angegebene Zahlungsmethoden.',

        'legal.terms.obligations.title': 'Rechte und Pflichten',
        'legal.terms.obligations.provider.title': 'Unsere Pflichten',
        'legal.terms.obligations.provider.content': 'Wir verpflichten uns, unsere Leistungen fachgerecht und nach aktuellem technischen Standard zu erbringen.',
        'legal.terms.obligations.client.title': 'Pflichten des Kunden',
        'legal.terms.obligations.client.content': 'Der Kunde stellt alle erforderlichen Informationen und Materialien rechtzeitig zur Verfügung.',

        'legal.terms.liability.title': 'Haftung',
        'legal.terms.liability.limitation': 'Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.',
        'legal.terms.liability.exclusions': 'Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten betroffen sind.',

        'legal.terms.final.title': 'Schlussbestimmungen',
        'legal.terms.final.jurisdiction': 'Gerichtsstand ist Colombo, Sri Lanka.',
        'legal.terms.final.severability': 'Sollten einzelne Bestimmungen unwirksam sein, bleiben die übrigen Bestimmungen davon unberührt.',

        'contact.page.title': 'Kontakt',
        'contact.page.description': 'Nehmen Sie Kontakt mit unserem Team auf',

        'contact.form.title': 'Eine Nachricht senden',
        'contact.form.subtitle': 'Wie können wir helfen?',
        'contact.form.description': 'Füllen Sie das untenstehende Formular aus und wir melden uns schnellstmöglich bei Ihnen.',

        'contact.form.name': 'Vollständiger Name',
        'contact.form.namePlaceholder': 'Geben Sie Ihren vollständigen Namen ein',

        'contact.form.email': 'E-Mail-Adresse',
        'contact.form.emailPlaceholder': 'Geben Sie Ihre E-Mail-Adresse ein',

        'contact.form.subject': 'Betreff',
        'contact.form.subjectPlaceholder': 'Worum geht es?',

        'contact.form.message': 'Nachricht',
        'contact.form.messagePlaceholder': 'Schreiben Sie Ihre Nachricht hier...',

        'contact.form.submit': 'Nachricht Senden',
        'contact.form.phonePlaceholder': 'Geben Sie Ihre Telefonnummer ein',
        'contact.form.inquiryType': 'Art der Anfrage',
        'contact.form.services.webdev': 'Webentwicklung',
        'contact.form.services.ai': 'KI-Lösungen',
        'contact.form.sending': 'Wird gesendet...',
        'contact.form.nameRequired': 'Bitte geben Sie Ihren Namen ein',
        'contact.form.emailRequired': 'Bitte geben Sie Ihre E-Mail-Adresse ein',
        'contact.form.phoneRequired': 'Bitte geben Sie Ihre Telefonnummer ein',
        'contact.form.inquiryRequired': 'Bitte wählen Sie eine Anfrageart aus',
        'contact.form.messageRequired': 'Bitte geben Sie Ihre Nachricht ein',
        'contact.form.error': 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
        'contact.form.success': 'Nachricht erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.',


        'contact.form.rateLimit': 'Zu viele Einreichungen. Bitte versuchen Sie es später erneut.',
        'contact.form.networkError': 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.',
        'contact.form.invalidSubmission': 'Ungültige Eingabe. Bitte überprüfen Sie Ihre Angaben.',
        'contact.form.emailInvalid': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',

        'contact.info.title': 'Kontaktieren Sie uns',
        'contact.info.description': 'Kontaktieren Sie uns über einen dieser Kanäle',
        'contact.info.email.title': 'E-Mail',
        'contact.info.phone.title': 'Telefon',
        'contact.info.address.title': 'Besuchen Sie uns',
        'contact.info.address.content': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'thankYou.title': 'Vielen Dank!',
        'thankYou.description': 'Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.',
        'thankYou.backHome': 'Zurück zur Startseite',

        'quote.form.title': 'Angebot anfordern',
        'quote.form.subtitle': 'Starten Sie Ihr Projekt',
        'quote.form.description': 'Erzählen Sie uns von Ihrem Projekt und wir melden uns innerhalb von 24 Stunden mit einem kostenlosen Angebot.',

        'quote.form.namePlaceholder': 'Vollständiger Name',
        'quote.form.nameRequired': 'Bitte geben Sie Ihren Namen ein',

        'quote.form.emailPlaceholder': 'E-Mail-Adresse',
        'quote.form.emailRequired': 'Bitte geben Sie Ihre E-Mail-Adresse ein',

        'quote.form.phonePlaceholder': 'Telefonnummer',
        'quote.form.phoneRequired': 'Bitte geben Sie Ihre Telefonnummer ein',

        'quote.form.companyPlaceholder': 'Firmenname',
        'quote.form.companyRequired': 'Bitte geben Sie Ihren Firmennamen ein',

        'quote.form.servicesLabel': 'Gewünschte Dienstleistungen',
        'quote.form.servicesRequired': 'Bitte wählen Sie mindestens eine Dienstleistung aus',

        'quote.form.services.webdev': 'Webentwicklung',
        'quote.form.services.ai': 'KI-Lösungen',

        'quote.form.budgetLabel': 'Projektbudget',
        'quote.form.budgetRequired': 'Bitte wählen Sie Ihre Budgetspanne aus',

        'quote.form.detailsPlaceholder': 'Erzählen Sie uns von Ihren Projektanforderungen und Zielen...',
        'quote.form.detailsRequired': 'Bitte geben Sie Projektdetails an',

        'quote.form.sending': 'Wird gesendet...',
        'quote.form.submit': 'Anfrage senden',
        'quote.form.error': 'Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
        'quote.form.backHome': 'Zurück zur Startseite',

        'quote.thankyou.backHome': 'Zurück zur Startseite',
        'quote.thankyou.title': 'Angebotsanfrage erhalten!',
        'quote.thankyou.subtitle': 'Danke, dass Sie sich für uns entschieden haben',
        'quote.thankyou.description': 'Wir werden Ihre Projektanforderungen prüfen und Ihnen innerhalb von 24 Stunden ein detailliertes Angebot zusenden. Unser Team freut sich darauf, Ihre Vision zum Leben zu erwecken!',
        'quote.thankyou.returnHome': 'Zur Startseite',
        'footer.imprint': 'Impressum',

        'cookie.text': 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.',
        'cookie.link': 'Erfahren Sie mehr in unserer Datenschutzerklärung',
        'cookie.accept': 'Cookies Akzeptieren',
        'cookie.deny': 'Ablehnen',

    },
    ta: {
        // Navigation
        'nav.home': 'முகப்பு',
        'nav.services': 'சேவைகள்',
        'nav.about': 'எங்களைப் பற்றி',
        'nav.contact': 'தொடர்பு',
        'nav.getStarted': 'தொடங்குங்கள்',
        'nav.webDev': 'வலை மேம்பாடு',
        'nav.ai': 'AI தீர்வுகள்',

        // Hero Section
        'hero.title.start': 'மாற்றுகிறது ',
        'hero.title.highlight1': ' கருத்துக்களை',
        'hero.title.middle': ' டிஜிட்டல் ',
        'hero.title.highlight2': 'சிறப்புக்கு',
        'hero.subtitle': 'வணிக வளர்ச்சி மற்றும் புதுமையை ஊக்குவிக்கும் நவீன வலை தீர்வுகள் மற்றும் AI ஒருங்கிணைப்புகளை நாங்கள் உருவாக்குகிறோம்.',
        'hero.cta.primary': 'தொடங்குங்கள்',
        'hero.cta.secondary': 'எங்கள் சேவைகள்',

        // Services
        'services.title': 'எங்கள் சேவைகள்',
        'services.subtitle': 'விரிவான தீர்வுகள்',
        'services.description': 'வணிகங்களை மாற்றும் மற்றும் நவீன டிஜிட்டல் நிலப்பரப்பில் வெற்றியை ஊக்குவிக்கும் டிஜிட்டல் அனுபவங்களை நாங்கள் உருவாக்குகிறோம். வலை மேம்பாடு மற்றும் AI ஒருங்கிணைப்பு ஆகியவற்றில் எங்கள் நிபுணத்துவம் பரவியுள்ளது, உங்கள் வணிகம் முன்னிலையில் இருக்க உறுதிசெய்கிறது.',
        'services.webdev.title': 'வலைத்தள மேம்பாடு',
        'services.webdev.description': 'நவீன தொழில்நுட்பத்துடன் கட்டப்பட்ட தனிப்பயன் வலைத்தளங்கள் மற்றும் வலை பயன்பாடுகள்.',
        'services.ai.title': 'AI ஒருங்கிணைந்த தீர்வுகள்',
        'services.ai.description': 'உங்கள் வணிகத் தேவைகளுக்கான நுண்ணறிவு தானியக்கம் மற்றும் AI ஒருங்கிணைப்பு.',

        // Stats
        'stats.projects': 'முடிக்கப்பட்ட திட்டங்கள்',
        'stats.satisfaction': 'வாடிக்கையாளர் திருப்தி',
        'stats.experience': 'ஆண்டுகள் அனுபவம்',
        'stats.clients': 'செயலில் உள்ள வாடிக்கையாளர்கள்',

        // About
        'about.title': 'எங்களைப் பற்றி',
        'about.subtitle': 'உங்கள் டிஜிட்டல் பங்குதாரர்',
        'about.description': 'நாங்கள் புதுமையான டிஜிட்டல் தீர்வுகள் மூலம் வணிகங்களை மாற்றுவதற்கு அர்ப்பணிக்கப்பட்ட ஆர்வமுள்ள மேம்பாட்டாளர்கள் மற்றும் AI நிபுணர்களின் குழு. பல ஆண்டுகளின் அனுபவம் மற்றும் சிறப்புக்கான அர்ப்பணிப்புடன், நிறுவனங்கள் டிஜிட்டல் நிலப்பரப்பை வழிநடத்தவும் தங்கள் இலக்குகளை அடையவும் உதவுகிறோம்.',
        'about.cta': 'எங்களைப் பற்றி மேலும் அறிக',

        // Testimonials
        'testimonials.title': 'வாடிக்கையாளர் கதைகள்',
        'testimonials.subtitle': 'எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்',
        'testimonials.description': 'வணிகங்கள் தங்கள் டிஜிட்டல் இருப்பை எவ்வாறு மாற்றியுள்ளன மற்றும் குறிப்பிடத்தக்க முடிவுகளை எவ்வாறு அடைந்துள்ளன என்பதைக் கண்டறியவும்.',

        'testimonials.1.author': 'ராஜேஷ் பெரேரா',
        'testimonials.1.role': 'CEO',
        'testimonials.1.company': 'TechVision Lanka',
        'testimonials.1.content': 'வலை மேம்பாடு மற்றும் AI ஒருங்கிணைப்பில் அவர்களின் நிபுணத்துவம் எங்கள் வணிக செயல்பாடுகளை முற்றிலும் மாற்றியுள்ளது. முடிவுகள் எங்கள் எதிர்பார்ப்புகளை மீறியுள்ளன.',

        'testimonials.2.author': 'பிரியா பெர்னாண்டோ',
        'testimonials.2.role': 'CTO',
        'testimonials.2.company': 'InnovateTech Solutions',
        'testimonials.2.content': 'சிறந்த சேவை மற்றும் தொழில்நுட்ப நிபுணத்துவம். அவர்கள் ஒரு சிக்கலான வலை பயன்பாட்டை திட்டமிட்ட நேரத்திற்கு முன்பாகவும் குறைபாடற்ற தரத்துடனும் வழங்கினர்.',

        'testimonials.3.author': 'டேவிட் சில்வா',
        'testimonials.3.role': 'இயக்குநர்',
        'testimonials.3.company': 'Digital Solutions Lanka',
        'testimonials.3.content': 'அவர்களின் AI தீர்வுகள் எங்கள் செயல்திறனை கணிசமாக மேம்படுத்தியுள்ளன. திட்டம் முழுவதும் சிறந்த தொடர்புடன் தொழில்முறை குழு.',

        'testimonials.4.author': 'நிஷா விக்கிரமசிங்க',
        'testimonials.4.role': 'தயாரிப்பு மேலாளர்',
        'testimonials.4.company': 'FutureScale Technologies',
        'testimonials.4.content': 'AI ஒருங்கிணைப்பு எங்கள் வாடிக்கையாளர் சேவையை புரட்சிகரமாக மாற்றியுள்ளது. பதில் நேரங்கள் 70% மேம்பட்டுள்ளன மற்றும் வாடிக்கையாளர் திருப்தி அதிகபட்ச அளவில் உள்ளது.',

        'testimonials.5.author': 'ஜேம்ஸ் ஆண்டர்சன்',
        'testimonials.5.role': 'தொழில்நுட்பத் தலைவர்',
        'testimonials.5.company': 'DataFlow Systems',
        'testimonials.5.content': 'வலை மேம்பாடு மற்றும் AI இரண்டிலும் குழுவின் நிபுணத்துவம் எங்கள் வணிக இலக்குகளுடன் சரியாகப் பொருந்தும் ஒரு தடையற்ற தீர்வை உருவாக்கியது.',

        // Process
        'process.title': 'எங்கள் செயல்முறை',
        'process.subtitle': 'நாங்கள் எவ்வாறு வேலை செய்கிறோம்',
        'process.description': 'ஆரம்ப கருத்திலிருந்து வெற்றிகரமான செயல்படுத்தலுக்கு உங்கள் டிஜிட்டல் இருப்பை மாற்றுவதற்கான ஒரு திறமையான அணுகுமுறை.',
        'process.step1.title': 'கண்டுபிடிப்பு மற்றும் திட்டமிடல்',
        'process.step1.description': 'உங்கள் தேவைகளை நாங்கள் பகுப்பாய்வு செய்து உங்கள் தேவைகளுக்கு சரியான தீர்வைத் திட்டமிடுகிறோம்.',
        'process.step2.title': 'வடிவமைப்பு மற்றும் கட்டமைப்பு',
        'process.step2.description': 'நவீன வடிவமைப்பு கொள்கைகளுடன் உங்கள் வெற்றிக்கான வரைபடத்தை உருவாக்குதல்.',
        'process.step3.title': 'மேம்பாடு',
        'process.step3.description': 'நவீன தொழில்நுட்பங்கள் மற்றும் சிறந்த நடைமுறைகளுடன் உங்கள் தீர்வைக் கட்டமைத்தல்.',
        'process.step4.title': 'சோதனை மற்றும் QA',
        'process.step4.description': 'தரம் மற்றும் நம்பகத்தன்மையை உறுதிப்படுத்த கடுமையான சோதனை.',
        'process.step5.title': 'வெளியீடு',
        'process.step5.description': 'உங்கள் தீர்வின் மென்மையான வெளியீடு மற்றும் ஒருங்கிணைப்பு.',
        'process.step6.title': 'ஆதரவு மற்றும் பராமரிப்பு',
        'process.step6.description': 'உங்கள் தீர்வு சரியாக இயங்குவதை வைத்திருக்க தொடர்ந்து ஆதரவு மற்றும் புதுப்பிப்புகள்.',

        // CTA
        'cta.title': 'புதுமை ஒரு உரையாடலுடன் தொடங்குகிறது',
        'cta.description': 'புதுமையை நோக்கி முதல் படியை எடுங்கள். உங்கள் திட்டத்தைப் பற்றி விவாதித்து, ஒன்றாக ஏதாவது அசாதாரணமானதை உருவாக்குவோம்.',
        'cta.button': 'உங்கள் இலவச மேற்கோளைப் பெறுங்கள்',

        // Footer
        'footer.description': 'நவீன வணிகங்களுக்கான புதுமையான வலை மேம்பாடு மற்றும் AI தீர்வுகள்.',
        'footer.quickLinks': 'விரைவு இணைப்புகள்',
        'footer.about': 'எங்களைப் பற்றி',
        'footer.services': 'சேவைகள்',
        'footer.contact': 'தொடர்பு',
        'footer.webDev': 'வலை மேம்பாடு',
        'footer.ai': 'AI தீர்வுகள்',
        'footer.address': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'footer.copyright': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        'footer.privacy': 'தனியுரிமைக் கொள்கை',
        'footer.terms': 'சேவை விதிமுறைகள்',
        'footer.imprint': 'அச்சு',

        // About Page
        'about.story.title': 'எங்கள் கதை',
        'about.story.subtitle': 'டிஜிட்டல் சிறப்பை உருவாக்குதல்',
        'about.story.description': 'வணிகங்களை மாற்றும் மற்றும் வெற்றியை ஊக்குவிக்கும் தாக்கமுள்ள டிஜிட்டல் தீர்வுகளை உருவாக்குவதில் புதுமை மற்றும் அர்ப்பணிப்பின் பயணம்.',
        'about.story.content1': 'தொழில்நுட்பம் மற்றும் வணிக வெற்றிக்கு இடையிலான இடைவெளியை நிரப்பும் ஒரு பார்வையுடன் நிறுவப்பட்ட, Growth Space Lanka முன்னணி டிஜிட்டல் தீர்வுகள் வழங்குநராக வளர்ந்துள்ளது. வலை மேம்பாடு, சந்தைப்படுத்தல் மற்றும் AI ஆகியவற்றில் நிபுணத்துவத்தை நாங்கள் இணைத்து, முக்கியமான முடிவுகளை வழங்குகிறோம்.',
        'about.story.content2': 'எங்கள் நிபுணர்கள் குழு பல்வேறு களங்களில் பல ஆண்டுகளின் அனுபவத்தை ஒன்றிணைத்து, சிக்கலான சவால்களைத் தீர்ப்பதற்கும் வணிகங்கள் டிஜிட்டல் யுகத்தில் செழிக்க உதவும் புதுமையான தீர்வுகளை உருவாக்குவதற்கும் ஒன்றாக வேலை செய்கிறது.',

        'about.vision.title': 'எங்கள் பார்வை',
        'about.vision.subtitle': 'முன்னோக்கி பார்த்தல்',
        'about.vision.statement': 'அனைத்து அளவிலும் வணிகங்களுக்கு AI மற்றும் வலை தீர்வுகளை அணுகக்கூடியதாகவும் தாக்கமுள்ளதாகவும் மாற்றுவதன் மூலம் டிஜிட்டல் மாற்றத்தை புரட்சிகரமாக மாற்ற.',
        'about.mission.title': 'எங்கள் பணி',
        'about.mission.statement': 'உண்மையான வணிக வளர்ச்சியை ஊக்குவிக்கும் மற்றும் எங்கள் வாடிக்கையாளர்களுக்கு நீடித்த மதிப்பை உருவாக்கும் புதுமையான, அளவிடக்கூடிய மற்றும் நுண்ணறிவு டிஜிட்டல் தீர்வுகளை வழங்க.',

        'about.team.title': 'எங்கள் குழு',
        'about.team.subtitle': 'நிபுணர்களைச் சந்திக்கவும்',
        'about.team.description': 'தொழில்நுட்பம் மூலம் வணிகங்களை மாற்றுவதற்கு அர்ப்பணிக்கப்பட்ட ஆர்வமுள்ள புதுமையாளர்களின் குழு.',
        'about.team.member1.name': 'மைக்கேல் வெபர்',
        'about.team.member1.role': 'CEO & நிறுவனர்',
        'about.team.member2.name': 'சாரா ஷ்மிட்',
        'about.team.member2.role': 'மேம்பாட்டுத் தலைவர்',
        'about.team.member3.name': 'தாமஸ் முல்லர்',
        'about.team.member3.role': 'AI தீர்வுகள் தலைவர்',

        // Services Page
        'services.page.title': 'சேவைகள்',
        'services.page.description': 'உங்கள் வணிகத் தேவைகளுக்கு தனிப்பயன் தீர்வுகள்',

        // Contact
        'contact.page.title': 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
        'contact.page.description': 'எங்கள் குழுவுடன் தொடர்பு கொள்ளுங்கள்',
        'contact.form.title': 'ஒரு செய்தியை அனுப்பவும்',
        'contact.form.subtitle': 'நாங்கள் எவ்வாறு உதவ முடியும்?',
        'contact.form.description': 'கீழே உள்ள படிவத்தை நிரப்பவும், நாங்கள் விரைவில் உங்களுக்கு பதிலளிப்போம்.',
        'contact.form.name': 'முழு பெயர்',
        'contact.form.namePlaceholder': 'உங்கள் முழு பெயரை உள்ளிடவும்',
        'contact.form.email': 'மின்னஞ்சல் முகவரி',
        'contact.form.emailPlaceholder': 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்',
        'contact.form.message': 'செய்தி',
        'contact.form.messagePlaceholder': 'உங்கள் செய்தியை இங்கே எழுதவும்...',
        'contact.form.submit': 'செய்தியை அனுப்பவும்',
        'contact.form.phonePlaceholder': 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
        'contact.form.inquiryType': 'விசாரணை வகை',
        'contact.form.services.webdev': 'வலை மேம்பாடு',
        'contact.form.services.ai': 'AI தீர்வுகள்',
        'contact.form.sending': 'அனுப்புகிறது...',
        'contact.form.nameRequired': 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்',
        'contact.form.emailRequired': 'தயவுசெய்து உங்கள் மின்னஞ்சலை உள்ளிடவும்',
        'contact.form.phoneRequired': 'தயவுசெய்து உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
        'contact.form.inquiryRequired': 'தயவுசெய்து ஒரு விசாரணை வகையைத் தேர்ந்தெடுக்கவும்',
        'contact.form.messageRequired': 'தயவுசெய்து உங்கள் செய்தியை உள்ளிடவும்',
        'contact.form.error': 'ஒரு பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.',
        'contact.form.success': 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! நாங்கள் விரைவில் உங்களுக்கு பதிலளிப்போம்.',
        'contact.form.emailInvalid': 'தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்',
        'contact.info.title': 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
        'contact.info.description': 'இந்த சேனல்களில் ஏதேனும் ஒன்றின் மூலம் எங்களைத் தொடர்பு கொள்ளுங்கள்',
        'contact.info.email.title': 'எங்களுக்கு மின்னஞ்சல் அனுப்பவும்',
        'contact.info.phone.title': 'எங்களை அழைக்கவும்',
        'contact.info.address.title': 'எங்களைப் பார்வையிடவும்',
        'contact.info.address.content': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'thankYou.title': 'நன்றி!',
        'thankYou.description': 'உங்கள் செய்தியைப் பெற்றுள்ளோம் மற்றும் விரைவில் உங்களுக்கு பதிலளிப்போம்.',
        'thankYou.backHome': 'முகப்புக்குத் திரும்பு',

        // Quote Form
        'quote.form.title': 'மேற்கோளைப் பெறுங்கள்',
        'quote.form.subtitle': 'உங்கள் திட்டத்தைத் தொடங்கவும்',
        'quote.form.description': 'உங்கள் திட்டத்தைப் பற்றி எங்களிடம் சொல்லுங்கள், 24 மணி நேரத்திற்குள் இலவச மேற்கோளுடன் உங்களுக்கு பதிலளிப்போம்.',
        'quote.form.namePlaceholder': 'முழு பெயர்',
        'quote.form.nameRequired': 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்',
        'quote.form.emailPlaceholder': 'மின்னஞ்சல் முகவரி',
        'quote.form.emailRequired': 'தயவுசெய்து உங்கள் மின்னஞ்சலை உள்ளிடவும்',
        'quote.form.phonePlaceholder': 'தொலைபேசி எண்',
        'quote.form.phoneRequired': 'தயவுசெய்து உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
        'quote.form.companyPlaceholder': 'நிறுவனத்தின் பெயர்',
        'quote.form.companyRequired': 'தயவுசெய்து உங்கள் நிறுவனத்தின் பெயரை உள்ளிடவும்',
        'quote.form.servicesLabel': 'தேவையான சேவைகள்',
        'quote.form.servicesRequired': 'தயவுசெய்து குறைந்தது ஒரு சேவையைத் தேர்ந்தெடுக்கவும்',
        'quote.form.services.webdev': 'வலை மேம்பாடு',
        'quote.form.services.ai': 'AI தீர்வுகள்',
        'quote.form.budgetLabel': 'திட்ட பட்ஜெட்',
        'quote.form.budgetRequired': 'தயவுசெய்து உங்கள் பட்ஜெட் வரம்பைத் தேர்ந்தெடுக்கவும்',
        'quote.form.detailsPlaceholder': 'உங்கள் திட்டத் தேவைகள் மற்றும் இலக்குகளைப் பற்றி எங்களிடம் சொல்லுங்கள்...',
        'quote.form.detailsRequired': 'தயவுசெய்து திட்ட விவரங்களை வழங்கவும்',
        'quote.form.sending': 'அனுப்புகிறது...',
        'quote.form.submit': 'கோரிக்கையை சமர்ப்பிக்கவும்',
        'quote.form.error': 'கோரிக்கையை சமர்ப்பிக்க முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.',
        'quote.form.backHome': 'முகப்புக்குத் திரும்பு',
        'quote.thankyou.title': 'மேற்கோள் கோரிக்கை பெறப்பட்டது!',
        'quote.thankyou.subtitle': 'எங்களைத் தேர்ந்தெடுத்ததற்கு நன்றி',
        'quote.thankyou.description': 'உங்கள் திட்டத் தேவைகளை நாங்கள் மதிப்பாய்வு செய்து 24 மணி நேரத்திற்குள் விரிவான மேற்கோளை உங்களுக்கு அனுப்புவோம். உங்கள் பார்வையை வாழ்க்கைக்குக் கொண்டுவர எங்கள் குழு உற்சாகமாக உள்ளது!',
        'quote.thankyou.returnHome': 'முகப்புப் பக்கத்திற்குத் திரும்பு',

        // Cookie Consent
        'cookie.text': 'எங்கள் தளத்தில் உங்கள் அனுபவத்தை மேம்படுத்த குக்கீகளை நாங்கள் பயன்படுத்துகிறோம்.',
        'cookie.link': 'எங்கள் தனியுரிமைக் கொள்கையில் மேலும் அறிக',
        'cookie.accept': 'குக்கீகளை ஏற்கவும்',
        'cookie.deny': 'மறுக்கவும்',
    },
    si: {
        // Navigation
        'nav.home': 'මුල් පිටුව',
        'nav.services': 'සේවා',
        'nav.about': 'අප ගැන',
        'nav.contact': 'සම්බන්ධ වන්න',
        'nav.getStarted': 'ආරම්භ කරන්න',
        'nav.webDev': 'වෙබ් සංවර්ධනය',
        'nav.ai': 'AI විසඳුම්',

        // Hero Section
        'hero.title.start': 'පරිවර්තනය කරමින් ',
        'hero.title.highlight1': ' අදහස්',
        'hero.title.middle': ' ඩිජිටල් ',
        'hero.title.highlight2': 'ප්‍රබලතාවයට',
        'hero.subtitle': 'ව්‍යාපාර වර්ධනය සහ නව්‍යකරණය ගෙන එන නවීන වෙබ් විසඳුම් සහ AI ඒකාබද්ධ කිරීම් අපි නිර්මාණය කරමු.',
        'hero.cta.primary': 'ආරම්භ කරන්න',
        'hero.cta.secondary': 'අපගේ සේවා',

        // Services
        'services.title': 'අපගේ සේවා',
        'services.subtitle': 'සම්පූර්ණ විසඳුම්',
        'services.description': 'ව්‍යාපාර පරිවර්තනය කරන සහ නවීන ඩිජිටල් භූමියේ සාර්ථකත්වය ගෙන එන ඩිජිටල් අත්දැකීම් අපි නිර්මාණය කරමු. වෙබ් සංවර්ධනය සහ AI ඒකාබද්ධ කිරීම හරහා අපගේ විශේෂඥතාව පැතිරී ඇති අතර, ඔබේ ව්‍යාපාරය ඉදිරියෙන්ම පවතින බවට සහතික කරයි.',
        'services.webdev.title': 'වෙබ් අඩවි සංවර්ධනය',
        'services.webdev.description': 'නවීන තාක්ෂණය සමඟ ගොඩනගා ඇති අභිරුචි වෙබ් අඩවි සහ වෙබ් යෙදුම්.',
        'services.ai.title': 'AI ඒකාබද්ධ විසඳුම්',
        'services.ai.description': 'ඔබේ ව්‍යාපාර අවශ්‍යතා සඳහා බුද්ධිමත් ස්වයංක්‍රියකරණය සහ AI ඒකාබද්ධ කිරීම.',

        // Stats
        'stats.projects': 'සම්පූර්ණ කරන ලද ව්‍යාපෘති',
        'stats.satisfaction': 'සේවාදායක තෘප්තිය',
        'stats.experience': 'වසර අත්දැකීම',
        'stats.clients': 'සක්‍රිය සේවාදායකයන්',

        // About
        'about.title': 'අප ගැන',
        'about.subtitle': 'ඔබේ ඩිජිටල් හවුල්කරු',
        'about.description': 'නව්‍ය ඩිජිටල් විසඳුම් හරහා ව්‍යාපාර පරිවර්තනය කිරීමට කැපවූ උනන්දුවෙන් පසුවන සංවර්ධකයන් සහ AI විශේෂඥයන්ගේ කණ්ඩායමක් අපි. වසර ගණනාවක අත්දැකීමක් සහ උත්තරීතරත්වයට කැපවීමක් සමඟ, සමාගම් ඩිජිටල් භූමිය සැරිසැරීමට සහ ඔවුන්ගේ ඉලක්ක ඉටු කිරීමට අපි උදව් කරමු.',
        'about.cta': 'අප ගැන තව දැනගන්න',

        // Testimonials
        'testimonials.title': 'සේවාදායක කතා',
        'testimonials.subtitle': 'අපගේ සේවාදායකයන් කියන දේ',
        'testimonials.description': 'ව්‍යාපාර ඔවුන්ගේ ඩිජිටල් පැවැත්ම පරිවර්තනය කර අසාමාන්‍ය ප්‍රතිඵල ලබා ගත් ආකාරය සොයා බලන්න.',

        'testimonials.1.author': 'රාජේෂ් පෙරේරා',
        'testimonials.1.role': 'CEO',
        'testimonials.1.company': 'TechVision Lanka',
        'testimonials.1.content': 'වෙබ් සංවර්ධනය සහ AI ඒකාබද්ධ කිරීමේ ඔවුන්ගේ විශේෂඥතාව අපගේ ව්‍යාපාර ක්‍රියාකාරකම් සම්පූර්ණයෙන්ම පරිවර්තනය කර ඇත. ප්‍රතිඵල අපගේ අපේක්ෂාවන් ඉක්මවා ගියේය.',

        'testimonials.2.author': 'ප්‍රියා ප්‍රනාන්දු',
        'testimonials.2.role': 'CTO',
        'testimonials.2.company': 'InnovateTech Solutions',
        'testimonials.2.content': 'විශිෂ්ට සේවාවක් සහ තාක්ෂණික විශේෂඥතාව. ඔවුන් සංකීර්ණ වෙබ් යෙදුමක් කාලසටහනට පෙර සහ නොගැලපෙන ගුණාත්මකභාවයකින් ලබා දුන්හ.',

        'testimonials.3.author': 'ඩේවිඩ් සිල්වා',
        'testimonials.3.role': 'අධ්‍යක්ෂ',
        'testimonials.3.company': 'Digital Solutions Lanka',
        'testimonials.3.content': 'ඔවුන්ගේ AI විසඳුම් අපගේ කාර්යක්ෂමතාව සැලකිය යුතු ලෙස වැඩි කර ඇත. ව්‍යාපෘතිය පුරාවට විශිෂ්ට සන්නිවේදනයක් සහිත වෘත්තීය කණ්ඩායම.',

        'testimonials.4.author': 'නිෂා වික්‍රමසිංහ',
        'testimonials.4.role': 'නිෂ්පාදන කළමනාකරු',
        'testimonials.4.company': 'FutureScale Technologies',
        'testimonials.4.content': 'AI ඒකාබද්ධ කිරීම අපගේ සේවාදායක සේවාව විප්ලවීය ලෙස වෙනස් කර ඇත. ප්‍රතිචාර කාලය 70% කින් වැඩි වී ඇති අතර සේවාදායක තෘප්තිය ඉහළ මට්ටමක පවතී.',

        'testimonials.5.author': 'ජේම්ස් ඇන්ඩර්සන්',
        'testimonials.5.role': 'තාක්ෂණ ප්‍රධානියා',
        'testimonials.5.company': 'DataFlow Systems',
        'testimonials.5.content': 'වෙබ් සංවර්ධනය සහ AI යන දෙකෙහිම කණ්ඩායමේ විශේෂඥතාව අපගේ ව්‍යාපාර ඉලක්ක සමඟ පරිපූර්ණව ගැලපෙන නොගැලපෙන විසඳුමක් නිර්මාණය කළේය.',

        // Process
        'process.title': 'අපගේ ක්‍රියාවලිය',
        'process.subtitle': 'අපි ක්‍රියා කරන ආකාරය',
        'process.description': 'ආරම්භක සංකල්පයේ සිට සාර්ථක ක්‍රියාත්මක කිරීම දක්වා ඔබේ ඩිජිටල් පැවැත්ම පරිවර්තනය කිරීම සඳහා සරල කරන ලද ප්‍රවේශයක්.',
        'process.step1.title': 'සොයාගැනීම සහ සැලසුම්',
        'process.step1.description': 'ඔබේ අවශ්‍යතා අපි විශ්ලේෂණය කර ඔබේ අවශ්‍යතා සඳහා පරිපූර්ණ විසඳුම සැලසුම් කරමු.',
        'process.step2.title': 'සැලසුම් සහ ගෘහ නිර්මාණ ශිල්පය',
        'process.step2.description': 'නවීන සැලසුම් මූලධර්ම සමඟ ඔබේ සාර්ථකත්වය සඳහා නිර්මාණ සටහන නිර්මාණය කිරීම.',
        'process.step3.title': 'සංවර්ධනය',
        'process.step3.description': 'නවීන තාක්ෂණ සහ හොඳම පිළිවෙත් සමඟ ඔබේ විසඳුම ගොඩනැගීම.',
        'process.step4.title': 'පරීක්ෂණ සහ QA',
        'process.step4.description': 'ගුණාත්මකභාවය සහ විශ්වාසදායකත්වය සහතික කිරීම සඳහා දැඩි පරීක්ෂණ.',
        'process.step5.title': 'ප්‍රකාශනය',
        'process.step5.description': 'ඔබේ විසඳුමේ සුමට ප්‍රකාශනය සහ ඒකාබද්ධ කිරීම.',
        'process.step6.title': 'සහාය සහ නඩත්තුව',
        'process.step6.description': 'ඔබේ විසඳුම පරිපූර්ණ ලෙස ක්‍රියාත්මක වන බවට සහතික කිරීම සඳහා අඛණ්ඩ සහාය සහ යාවත්කාලීන කිරීම්.',

        // CTA
        'cta.title': 'නව්‍යකරණය සංවාදයකින් ආරම්භ වේ',
        'cta.description': 'නව්‍යකරණය දෙසට පළමු පියවර ගන්න. ඔබේ ව්‍යාපෘතිය ගැන සාකච්ඡා කර එකට අසාමාන්‍ය දෙයක් නිර්මාණය කරමු.',
        'cta.button': 'ඔබේ නොමිලේ උපුටා ගැනීම ලබා ගන්න',

        // Footer
        'footer.description': 'නවීන ව්‍යාපාර සඳහා නව්‍ය වෙබ් සංවර්ධනය සහ AI විසඳුම්.',
        'footer.quickLinks': 'ඉක්මන් සබැඳි',
        'footer.about': 'අප ගැන',
        'footer.services': 'සේවා',
        'footer.contact': 'සම්බන්ධ වන්න',
        'footer.webDev': 'වෙබ් සංවර්ධනය',
        'footer.ai': 'AI විසඳුම්',
        'footer.address': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'footer.copyright': 'සියලුම හිමිකම් ඇවිරිණි.',
        'footer.privacy': 'රහස්‍යතා ප්‍රතිපත්තිය',
        'footer.terms': 'සේවා කොන්දේසි',
        'footer.imprint': 'මුද්‍රණය',

        // About Page
        'about.story.title': 'අපගේ කතාව',
        'about.story.subtitle': 'ඩිජිටල් උත්තරීතරත්වය ගොඩනැගීම',
        'about.story.description': 'ව්‍යාපාර පරිවර්තනය කරන සහ සාර්ථකත්වය ගෙන එන බලපෑම් සහිත ඩිජිටල් විසඳුම් නිර්මාණය කිරීමේ නව්‍යකරණයේ සහ කැපවීමේ ගමන.',
        'about.story.content1': 'තාක්ෂණය සහ ව්‍යාපාර සාර්ථකත්වය අතර පරතරය පුරවන දැක්මක් සමඟ ආරම්භ කරන ලද, Growth Space Lanka ප්‍රමුඛ ඩිජිටල් විසඳුම් සැපයුම්කරුවෙකු බවට වර්ධනය වී ඇත. වෙබ් සංවර්ධනය, අලෙවිකරණය සහ AI හි විශේෂඥතාව අපි ඒකාබද්ධ කරමු, වැදගත් ප්‍රතිඵල ලබා දෙමු.',
        'about.story.content2': 'අපගේ විශේෂඥ කණ්ඩායම විවිධ වසම් හරහා වසර ගණනාවක අත්දැකීම් එක් කරන අතර, සංකීර්ණ අභියෝග විසඳීමට සහ ඩිජිටල් යුගයේදී ව්‍යාපාර සමෘද්ධ වීමට උදව් කරන නව්‍ය විසඳුම් නිර්මාණය කිරීමට එකට වැඩ කරයි.',

        'about.vision.title': 'අපගේ දැක්ම',
        'about.vision.subtitle': 'ඉදිරිය දෙස බැලීම',
        'about.vision.statement': 'සියලු ප්‍රමාණයේ ව්‍යාපාර සඳහා AI සහ වෙබ් විසඳුම් ප්‍රවේශ විය හැකි සහ බලපෑම් සහිත කිරීමෙන් ඩිජිටල් පරිවර්තනය විප්ලවීය ලෙස වෙනස් කිරීම.',
        'about.mission.title': 'අපගේ මෙහෙවර',
        'about.mission.statement': 'සැබෑ ව්‍යාපාර වර්ධනය ගෙන එන සහ අපගේ සේවාදායකයන් සඳහා තිරසාර වටිනාකමක් නිර්මාණය කරන නව්‍ය, පරිමාණ කළ හැකි සහ බුද්ධිමත් ඩිජිටල් විසඳුම් ලබා දීම.',

        'about.team.title': 'අපගේ කණ්ඩායම',
        'about.team.subtitle': 'විශේෂඥයන් හමුවන්න',
        'about.team.description': 'තාක්ෂණය හරහා ව්‍යාපාර පරිවර්තනය කිරීමට කැපවූ උනන්දුවෙන් පසුවන නව්‍යකරණකරුවන්ගේ කණ්ඩායමක්.',
        'about.team.member1.name': 'මයිකල් වෙබර්',
        'about.team.member1.role': 'CEO & නිර්මාතෘ',
        'about.team.member2.name': 'සාරා ෂ්මිට්',
        'about.team.member2.role': 'සංවර්ධන ප්‍රධානියා',
        'about.team.member3.name': 'තෝමස් මුලර්',
        'about.team.member3.role': 'AI විසඳුම් ප්‍රධානියා',

        // Services Page
        'services.page.title': 'සේවා',
        'services.page.description': 'ඔබේ ව්‍යාපාර අවශ්‍යතා සඳහා අභිරුචි විසඳුම්',

        // Contact
        'contact.page.title': 'අප හා සම්බන්ධ වන්න',
        'contact.page.description': 'අපගේ කණ්ඩායම සමඟ සම්බන්ධ වන්න',
        'contact.form.title': 'පණිවිඩයක් යවන්න',
        'contact.form.subtitle': 'අපට කෙසේ උදව් කළ හැකිද?',
        'contact.form.description': 'පහත පෝරමය පුරවා අපි ඔබට හැකි ඉක්මනින් පිළිතුරු දෙන්නෙමු.',
        'contact.form.name': 'සම්පූර්ණ නම',
        'contact.form.namePlaceholder': 'ඔබේ සම්පූර්ණ නම ඇතුළත් කරන්න',
        'contact.form.email': 'විද්‍යුත් තැපැල් ලිපිනය',
        'contact.form.emailPlaceholder': 'ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න',
        'contact.form.message': 'පණිවිඩය',
        'contact.form.messagePlaceholder': 'ඔබේ පණිවිඩය මෙහි ලියන්න...',
        'contact.form.submit': 'පණිවිඩය යවන්න',
        'contact.form.phonePlaceholder': 'ඔබේ දුරකථන අංකය ඇතුළත් කරන්න',
        'contact.form.inquiryType': 'විමසීමේ වර්ගය',
        'contact.form.services.webdev': 'වෙබ් සංවර්ධනය',
        'contact.form.services.ai': 'AI විසඳුම්',
        'contact.form.sending': 'යවමින්...',
        'contact.form.nameRequired': 'කරුණාකර ඔබේ නම ඇතුළත් කරන්න',
        'contact.form.emailRequired': 'කරුණාකර ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න',
        'contact.form.phoneRequired': 'කරුණාකර ඔබේ දුරකථන අංකය ඇතුළත් කරන්න',
        'contact.form.inquiryRequired': 'කරුණාකර විමසීමේ වර්ගයක් තෝරන්න',
        'contact.form.messageRequired': 'කරුණාකර ඔබේ පණිවිඩය ඇතුළත් කරන්න',
        'contact.form.error': 'දෝෂයක් ඇති විය. කරුණාකර නැවත උත්සාහ කරන්න.',
        'contact.form.success': 'පණිවිඩය සාර්ථකව යවන ලදී! අපි ඔබට හැකි ඉක්මනින් පිළිතුරු දෙන්නෙමු.',
        'contact.form.emailInvalid': 'කරුණාකර වලංගු විද්‍යුත් තැපැල් ලිපිනයක් ඇතුළත් කරන්න',
        'contact.info.title': 'අප හා සම්බන්ධ වන්න',
        'contact.info.description': 'මෙම නාලිකාවලින් ඕනෑම එකක් හරහා අප හා සම්බන්ධ වන්න',
        'contact.info.email.title': 'අපට විද්‍යුත් තැපැල් කරන්න',
        'contact.info.phone.title': 'අපට ඇමතුම් කරන්න',
        'contact.info.address.title': 'අප හා සම්බන්ධ වන්න',
        'contact.info.address.content': '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        'thankYou.title': 'ස්තූතියි!',
        'thankYou.description': 'අපි ඔබේ පණිවිඩය ලබාගෙන ඇති අතර හැකි ඉක්මනින් ඔබට පිළිතුරු දෙන්නෙමු.',
        'thankYou.backHome': 'මුල් පිටුවට ආපසු',

        // Quote Form
        'quote.form.title': 'උපුටා ගැනීමක් ලබා ගන්න',
        'quote.form.subtitle': 'ඔබේ ව්‍යාපෘතිය ආරම්භ කරන්න',
        'quote.form.description': 'ඔබේ ව්‍යාපෘතිය ගැන අපට කියන්න, අපි පැය 24 ක් ඇතුළත නොමිලේ උපුටා ගැනීමක් සමඟ ඔබට පිළිතුරු දෙන්නෙමු.',
        'quote.form.namePlaceholder': 'සම්පූර්ණ නම',
        'quote.form.nameRequired': 'කරුණාකර ඔබේ නම ඇතුළත් කරන්න',
        'quote.form.emailPlaceholder': 'විද්‍යුත් තැපැල් ලිපිනය',
        'quote.form.emailRequired': 'කරුණාකර ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න',
        'quote.form.phonePlaceholder': 'දුරකථන අංකය',
        'quote.form.phoneRequired': 'කරුණාකර ඔබේ දුරකථන අංකය ඇතුළත් කරන්න',
        'quote.form.companyPlaceholder': 'සමාගමේ නම',
        'quote.form.companyRequired': 'කරුණාකර ඔබේ සමාගමේ නම ඇතුළත් කරන්න',
        'quote.form.servicesLabel': 'අවශ්‍ය සේවා',
        'quote.form.servicesRequired': 'කරුණාකර අවම වශයෙන් සේවාවක් තෝරන්න',
        'quote.form.services.webdev': 'වෙබ් සංවර්ධනය',
        'quote.form.services.ai': 'AI විසඳුම්',
        'quote.form.budgetLabel': 'ව්‍යාපෘති අයවැය',
        'quote.form.budgetRequired': 'කරුණාකර ඔබේ අයවැය පරාසය තෝරන්න',
        'quote.form.detailsPlaceholder': 'ඔබේ ව්‍යාපෘති අවශ්‍යතා සහ ඉලක්ක ගැන අපට කියන්න...',
        'quote.form.detailsRequired': 'කරුණාකර ව්‍යාපෘති විස්තර සපයන්න',
        'quote.form.sending': 'යවමින්...',
        'quote.form.submit': 'ඉල්ලීම ඉදිරිපත් කරන්න',
        'quote.form.error': 'ඉල්ලීම ඉදිරිපත් කිරීමට අපොහොසත් විය. කරුණාකර නැවත උත්සාහ කරන්න.',
        'quote.form.backHome': 'මුල් පිටුවට ආපසු',
        'quote.thankyou.title': 'උපුටා ගැනීමේ ඉල්ලීම ලැබුණි!',
        'quote.thankyou.subtitle': 'අපව තෝරා ගැනීමට ස්තූතියි',
        'quote.thankyou.description': 'අපි ඔබේ ව්‍යාපෘති අවශ්‍යතා සමාලෝචනය කර පැය 24 ක් ඇතුළත විස්තරාත්මක උපුටා ගැනීමක් ඔබට යවන්නෙමු. ඔබේ දැක්ම ජීවිතයට ගෙන ඒමට අපගේ කණ්ඩායම උනන්දුවෙන් පසුවනවා!',
        'quote.thankyou.returnHome': 'මුල් පිටුවට ආපසු',

        // Cookie Consent
        'cookie.text': 'අපගේ වෙබ් අඩවියේ ඔබේ අත්දැකීම වැඩිදියුණු කිරීම සඳහා අපි කුකීස් භාවිතා කරමු.',
        'cookie.link': 'අපගේ රහස්‍යතා ප්‍රතිපත්තියේ තව දැනගන්න',
        'cookie.accept': 'කුකීස් පිළිගන්න',
        'cookie.deny': 'ප්‍රතික්ෂේප කරන්න',
    }
} as const;

export type Language = keyof typeof translations;