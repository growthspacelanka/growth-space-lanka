// Simple content file - no translation keys, just direct content
export const content = {
  // Navigation
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Start Website Setup',
    webDev: 'Business Websites',
    ai: 'E-commerce Websites',
    socialMedia: 'Social Media Management',
    socialAds: 'Social Media Ads',
  },

  // Hero Section
  hero: {
    title: {
      start: 'Affordable Website Packages For ',
      highlight1: 'Sri Lankan',
      middle: ' ',
      highlight2: 'Businesses ',
    },
    subtitle: 'Pick a package, share your business details once, and we’ll build your site fast with a simple guided process and clear deliverables.',
    cta: {
      primary: 'View Website Packages',
      secondary: 'How It Works',
    },
  },

  // Services
  services: {
    title: 'What We Offer',
    subtitle: 'Simple, package-based website and marketing services',
    description: 'We provide fixed, package-based digital services for Sri Lankan businesses. Clear scope, transparent pricing, and a guided setup process — so you know exactly what you\'re getting.',
    page: {
      title: 'Our Services',
      description: 'Simple website solutions for your business',
    },
    webdev: {
      title: 'Business Websites',
      description: 'Best for shops, service providers, and small businesses that need a professional online presence. Includes essential pages, clear service information, and contact options — all built with a mobile-friendly design.',
      page: {
        title: 'Business Websites',
        description: 'Fixed website packages with a guided setup — clear scope, clean design, and no technical confusion.',
      },
      features: {
        title: 'What\'s Included',
        subtitle: 'Package features',
        description: 'Every Business Website package includes the essentials to help customers understand your services, trust your business, and contact you easily.',
        items: [
          {
            title: 'Essential Pages',
            description:
              'Home, About, Services, and Contact — clearly structured to explain what you do, who it’s for, and guide visitors toward taking action.',
          },
          {
            title: 'Contact Options',
            description:
              'Customers can reach you easily through a contact form and preferred methods such as WhatsApp, or email — based on your package.',
          },
          {
            title: 'Mobile-First Design',
            description:
              'Designed to look professional and work smoothly across mobile phones, tablets, and desktop devices without layout or usability issues.',
          },
          {
            title: 'GUIDED SETUP PROCESS',
            description:
              'We collect your business details through a clear, guided setup — so you don’t have to guess what to provide and nothing important is missed.',
          },
        ],
      },
      tech: {
        title: 'How We Build It',
        subtitle: 'Simple, reliable, and fully managed',
        description:
          'We follow a clear, guided process to build your website — from collecting your information to launching it live. You don\'t need technical knowledge — we handle the structure, setup, and configuration based on your selected package.',
        frontend: {
          title: 'Structure & Design',
          description: 'What your website looks like',
          points: [
            'Clean, professional layout based on your package',
            'Mobile-friendly design for all devices',
            'Clear navigation for visitors',
            'Strong calls-to-action to guide users',
          ],
        },
        backend: {
          title: 'Content & Setup',
          description: 'How your information is added',
          points: [
            'Guided content submission process',
            'Structured sections based on your package scope',
            'Clear placement of services, business details, and contact information',
          ],
        },
        database: {
          title: 'Contact & Enquiries',
          description: 'How customers reach you',
          points: [
            'WhatsApp integration for direct enquiries',
            'Contact forms where included in the package',
            'Enquiries delivered directly to you',
          ],
        },
        tools: {
          title: 'Reliability & Maintenance',
          description: 'How we keep your website running',
          points: [
            'Hosting setup and configuration',
            'Basic security and monitoring',
            'Ongoing technical maintenance',
            'Covered under the monthly maintenance plan',
          ],
        },
      },
      packages: {
        title: 'Business Website Packages',
        subtitle: 'Choose the right package for your business needs',
        description: 'Choose a website package based on your business size and stage. Each package has a clearly defined scope, page limit, delivery timeline, and guided setup process — so there are no surprises later.',
        pricingNote: 'All packages include a standard LKR 500 monthly fee for hosting, security, and basic maintenance. No hidden costs. Cancel anytime.',
        items: [
          {
            name: 'Starter Website',
            bestFor: 'Small businesses that are just starting and need a simple, professional online presence.',
            pageStructure: 'Single-page website',
            price: 'LKR 7,999',
            stripeLink: '/payment/starter',
            includes: [
              'Single-page website with up to 5 structured sections',
              'Clean and modern design',
              'Mobile-friendly layout',
              'WhatsApp integration',
              'Basic contact section',
              'Guided content submission',
            ],
            goodToKnow: [
              'Fixed single-page structure',
              'Limited customization',
            ],
          },
          {
            name: 'Growth Website',
            bestFor: 'Growing businesses that want more visibility and need multiple pages to explain services clearly.',
            pageStructure: '3–5 page website',
            price: 'LKR 14,999',
            stripeLink: '/payment/growth',
            includes: [
              '3–5 page website structure',
              'Professional layout',
              'Mobile-friendly design',
              'Basic SEO setup',
              'WhatsApp integration',
              'Contact form',
            ],
            goodToKnow: [
              'Clearly defined page limit',
              'More flexibility than Starter',
            ],
          },
          {
            name: 'Professional Website',
            bestFor: 'Established businesses that want a strong brand presence and are scaling fast.',
            pageStructure: 'Up to 10–12 pages',
            price: 'LKR 29,999',
            stripeLink: '/payment/professional',
            includes: [
              'Up to 10–12 pages',
              'Customised page structure within package scope',
              'Enhanced SEO setup',
              'Priority handling',
              'Lead-focused layout',
              'WhatsApp integration',
              'Contact form',
            ],
            goodToKnow: [
              'Requires more detailed business information',
              'Designed for long-term growth',
            ],
          },
          {
            name: 'Custom Package',
            bestFor: 'Businesses with specific or advanced requirements beyond standard website packages.',
            pageStructure: 'Custom-defined',
            price: 'Custom pricing',
            stripeLink: '/contact',
            includes: [
              'Custom scope defined after discussion',
              'Flexible structure based on business needs',
              'Dedicated project support',
              'Extended timeline depending on complexity',
            ],
            goodToKnow: [
              'Requires discussion before confirmation',
              'Pricing depends on scope',
            ],
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about our Business Website packages',
        description: 'Find answers to common questions about pricing, process, technical details, and ongoing support for your business website.',
        pricing: {
          title: 'Pricing & Packages',
          items: [
            {
              question: 'What is included in each website package?',
              answer: 'Each website package includes a clearly defined set of pages, features, and design scope. You will know exactly what is included before we start the project.',
            },
            {
              question: 'What is the LKR 500 monthly fee for?',
              answer: 'The LKR 500 monthly fee covers website hosting, uptime monitoring, basic security checks, and routine technical maintenance to ensure your website stays online, secure, and running smoothly.',
            },
            {
              question: 'How long does it take to build the website?',
              answer: 'Timelines depend on the selected package. Starter packages are delivered in up to 2 working days, Growth packages in up to 3 working days, and Professional packages in up to 5 working days.',
            },
            {
              question: 'Will I be able to review the website before launch?',
              answer: 'Yes. You will receive a preview of the website to review and approve before it goes live.',
            },
            {
              question: 'Are there any hidden costs?',
              answer: 'No. All pricing is transparent, and everything included is clearly mentioned upfront.',
            },
            {
              question: 'Is the monthly maintenance fee mandatory?',
              answer: 'Yes. The monthly maintenance fee is mandatory to ensure reliable hosting, security, and smooth operation of your website at all times.',
            },
            {
              question: 'How many revisions are included?',
              answer: 'The Starter package includes one revision. Growth and Professional packages include up to two revisions each.',
            },
          ],
        },
        process: {
          title: 'Process & Delivery',
          items: [
            {
              question: 'How does the website building process work?',
              answer: 'Once you choose a package and share your business details, we design, build, review, and launch your website based on the selected package scope.',
            },
            {
              question: 'What do you need from me to get started?',
              answer: 'We need your business details, services, and any existing content such as logos, text, or images. If you don\'t have content, we will guide you.',
            },
            {
              question: 'What if I don\'t have content or images?',
              answer: 'That\'s okay. We help structure the content and guide you on what is needed to complete the website.',
            },
            {
              question: 'What happens if I delay providing content or feedback?',
              answer: 'Delays in content or feedback may affect the delivery timeline. We recommend sharing details on time to keep the project moving.',
            },
            {
              question: 'Will I see the website before it goes live?',
              answer: 'Yes. You will review and approve the website before it goes live.',
            },
          ],
        },
        technical: {
          title: 'Technical & Ownership',
          items: [
            {
              question: 'Will my website be mobile-friendly?',
              answer: 'Yes. All websites are designed to work smoothly on mobile, tablet, and desktop devices.',
            },
            {
              question: 'Is my website secure?',
              answer: 'Yes. We apply basic security measures and routine checks to keep your website protected.',
            },
            {
              question: 'Is SEO included in the website?',
              answer: 'Basic SEO setup is included where applicable. Advanced SEO services are not part of standard packages.',
            },
            {
              question: 'Where will my website be hosted?',
              answer: 'Your website will be hosted under our managed hosting as part of the monthly maintenance plan.',
            },
            {
              question: 'What happens if my website goes down?',
              answer: 'We monitor uptime regularly. If an issue occurs, we take action to restore the website as quickly as possible.',
            },
            {
              question: 'Will my website be fast?',
              answer: 'Yes. Websites are optimized for performance to ensure smooth loading on all devices.',
            },
            {
              question: 'Can I use my existing domain?',
              answer: 'Yes. If you already own a domain, we can connect it to your new website.',
            },
            {
              question: 'Can I move my website to another host later?',
              answer: 'Yes. If you choose to move away from our hosting, we can migrate the website to another hosting provider.',
            },
            {
              question: 'Will I have access to my website?',
              answer: 'Yes. You will have appropriate access to manage your website based on the selected package.',
            },
            {
              question: 'Who owns the website after it\'s built?',
              answer: 'You do. Once the website is completed and live, it fully belongs to your business.',
            },
          ],
        },
        support: {
          title: 'Support, Maintenance & Expectations',
          items: [
            {
              question: 'What kind of support do you provide after launch?',
              answer: 'We provide technical support related to hosting, uptime, and basic website functionality as part of the monthly maintenance.',
            },
            {
              question: 'What happens if I need changes after the website is live?',
              answer: 'Minor changes can be discussed. Larger updates, new sections, or feature requests may require additional charges.',
            },
            {
              question: 'Does the monthly maintenance include content updates?',
              answer: 'No. The monthly maintenance fee covers hosting and basic technical upkeep. Content updates require a separate maintenance plan.',
            },
            {
              question: 'Do you offer unlimited revisions or changes?',
              answer: 'No. All work is handled within the defined package scope to keep timelines and pricing clear.',
            },
            {
              question: 'Are there long-term contracts?',
              answer: 'No. There are no long-term contracts for our services or maintenance plans.',
            },
            {
              question: 'Is this service suitable for large custom systems?',
              answer: 'No. Our package-based service is designed for small to medium business websites. Large or custom systems require separate discussions.',
            },
            {
              question: 'Can I request new features later?',
              answer: 'Yes. New features or enhancements can be discussed and quoted separately based on your requirements.',
            },
            {
              question: 'How do I contact you for support?',
              answer: 'You can contact us via WhatsApp or the provided support channels during working hours.',
            },
            {
              question: 'What happens if I stop the monthly maintenance?',
              answer: 'If maintenance is cancelled, hosting will need to be arranged separately, or the website can be migrated to another hosting provider.',
            },
          ],
        },
      },
    },
    ai: {
      title: 'E-commerce Websites',
      description: 'Best for businesses that want to sell products online. Includes product pages, secure payment setup, and basic order management, delivered as a structured website package.',
      page: {
        title: 'Online Stores',
        description: 'Sell your products online with secure payments',
      },
    },
    socialMedia: {
      title: 'Social Media Management',
      description: 'Best for businesses that want a consistent and professional social media presence. Includes planned posts, basic content design, and account management based on a monthly package.',
      page: {
        title: 'Social Media Management',
        description: 'Consistent social media presence for your business',
      },
    },
    socialAds: {
      title: 'Social Media Ads',
      description: 'Best for businesses that want to run paid ads on social platforms. Includes ad setup, basic targeting, and campaign management based on a fixed service package.',
      page: {
        title: 'Social Media Ads',
        description: 'Paid advertising on social platforms',
      },
    },
  },

  // Stats
  stats: {
    items: [
      {
        value: '300+',
        label: 'Projects Completed',
      },
      {
        value: '97%',
        label: 'Client Satisfaction',
      },
      {
        value: '5+',
        label: 'Years Experience',
      },
      {
        value: '100+',
        label: 'Active Clients',
      },
    ],
  },

  // About
  about: {
    title: 'About Us',
    subtitle: 'Why we exist',
    description: 'We help Sri Lankan small and medium businesses get online with fixed website packages. Clear process. Guided setup. No technical knowledge required.',
    cta: 'Start Website Setup',
  },

  // Testimonials
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Real businesses, real results',
    description: 'Sri Lankan businesses trust us to get them online. Here\'s what they say.',
    items: [
      {
        author: 'Kamal Perera',
        role: 'Shop Owner',
        company: 'Perera Hardware Store',
        content: 'Clear package pricing from the start. No hidden costs. Website was ready in 2 weeks. Customers can now find us online easily.',
      },
      {
        author: 'Sanduni Fernando',
        role: 'Owner',
        company: 'Fernando Beauty Salon',
        content: 'Simple process. I filled out a form with my business details. They built everything. Fair price and clear communication.',
      },
      {
        author: 'Nimal Silva',
        role: 'Director',
        company: 'Silva Trading Company',
        content: 'Fast delivery. The website works perfectly on phones. Good support during setup. No technical knowledge needed from my side.',
      },
      {
        author: 'Priya Wickramasinghe',
        role: 'Manager',
        company: 'Wickramasinghe Catering',
        content: 'Online store set up quickly. Customers can order online now. Guided process. No confusion.',
      },
      {
        author: 'Rohan Jayasuriya',
        role: 'Owner',
        company: 'Jayasuriya Auto Repair',
        content: 'Affordable package price. Professional website. They explained everything clearly. Good value for money.',
      },
    ],
  },

  // Process / How It Works
  process: {
    title: 'How It Works',
    subtitle: 'Simple steps to get online',
    description: 'Getting your business online shouldn\'t be complicated. Here\'s how we make it easy.',
    steps: [
      {
        title: 'Choose Your Package',
        description: 'Select a website package that matches your needs. Fixed pricing. No hidden costs.',
      },
      {
        title: 'Share Business Details',
        description: 'Complete a simple form with your business information. Takes only a few minutes. No technical knowledge needed.',
      },
      {
        title: 'We Build Your Website',
        description: 'We create your website based on the details you provided. You review and approve.',
      },
      {
        title: 'Launch & Support',
        description: 'Your website goes live. We provide guidance on updates and basic maintenance.',
      },
    ],
  },

  // CTA Section
  cta: {
    title: 'Ready to Get Your Business Online?',
    description: 'Choose a package, share your business details, and we\'ll build your website. Simple form. Fast setup. Clear pricing.',
    button: 'Start Website Setup',
  },

  // Footer
  footer: {
    description: 'Website packages for Sri Lankan small and medium businesses. Fixed pricing. Guided setup. No technical knowledge needed.',
    quickLinks: 'Quick Links',
    about: 'About Us',
    services: 'Services',
    contact: 'Contact',
    webDev: 'Business Websites',
    ai: 'Online Stores',
    address: '123 Galle Road, Colombo 03, 00300, Sri Lanka',
    copyright: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    imprint: 'Imprint',
  },

  // Contact
  contact: {
    page: {
      title: 'Contact Us',
      description: 'Have questions about our website packages? We\'re here to help',
    },
    info: {
      title: 'Get in Touch',
      description: 'Reach us through any of these channels',
      email: {
        title: 'Email Us',
        content: 'hello@growthspacelanka.com',
        link: 'mailto:hello@growthspacelanka.com',
      },
      phone: {
        title: 'Call Us',
        content: '+94 77 123 4567',
        link: 'tel:+94771234567',
      },
      address: {
        title: 'Visit Us',
        content: '123 Galle Road, Colombo 03, 00300, Sri Lanka',
        link: 'https://maps.google.com',
      },
    },
  },

  // Book a Call
  bookACall: {
    page: {
      title: 'Book a Call',
      description: 'Schedule a call to discuss your website package',
    },
  },

  // Cookie Consent
  cookie: {
    text: 'We use cookies to improve your experience on our site.',
    link: 'Learn more in our Privacy Policy',
    accept: 'Accept Cookies',
    deny: 'Deny',
  },

  // Thank You Pages
  thankYou: {
    title: 'Thank You!',
    description: 'We have received your message and will get back to you as soon as possible.',
    backHome: 'Back to Home',
  },

  quoteThankYou: {
    backHome: 'Back to Home',
    title: 'Thank You!',
    subtitle: 'We\'ve received your business details',
    description: 'We\'ll review your information and get back to you within 24 hours with package recommendations and next steps.',
    returnHome: 'Return to Homepage',
  },
};
