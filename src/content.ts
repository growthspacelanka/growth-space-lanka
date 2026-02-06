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
        title: 'E-commerce Websites',
      },
      features: {
        title: "What's Included",
        subtitle: 'Package features',
        description: 'Every E-commerce Website package includes the essentials to display products, accept orders, and run your store smoothly.',
        items: [
          {
            title: 'Product-Ready Pages',
            description:
              'Shop, product listing, product detail, cart, checkout, and account pages — structured to clearly display products, pricing, and purchase flow.',
          },
          {
            title: 'Payment & Checkout',
            description:
              'Secure checkout with Stripe and/or local payment options, order confirmation, and basic customer details collection.',
          },
          {
            title: 'Mobile-First Store Design',
            description:
              'Designed to work smoothly on mobile, tablet, and desktop — where most online shoppers actually browse and buy.',
          },
          {
            title: 'Guided Store Setup',
            description:
              'We collect product details, pricing, categories, and policies through a guided setup so nothing important is missed.',
          },
        ],
      },
      tech: {
        title: 'How We Build It',
        subtitle: 'Simple, reliable, and fully managed',
        description:
          'We follow a clear process to build your online store — from collecting your products and policies to launching checkout. You don\'t need technical knowledge — we handle structure, payment setup, and configuration based on your selected package.',
        frontend: {
          title: 'Structure & Design',
          description: 'How your store looks and flows',
          points: [
            'Clean, conversion-focused store layout based on your package',
            'Clear navigation for categories and products',
            'Mobile-optimised shopping experience',
            'Strong add-to-cart and checkout flow',
          ],
        },
        backend: {
          title: 'Content & Store Setup',
          description: 'How your products and data are added',
          points: [
            'Guided product and category information collection',
            'Structured product details (price, images, descriptions)',
            'Clear placement of policies (delivery, returns, contact)',
            'Setup aligned strictly with selected package scope',
          ],
        },
        database: {
          title: 'Orders & Customer Actions',
          description: 'How customers buy and reach you',
          points: [
            'Secure checkout flow',
            'Order notifications sent to you',
            'WhatsApp or contact form integration where applicable',
            'Clear customer journey from product to purchase',
          ],
        },
        tools: {
          title: 'Reliability & Maintenance',
          description: 'How the store stays running',
          points: [
            'Hosting and basic security setup',
            'Ongoing technical maintenance',
            'Covered under the monthly maintenance plan',
            'Monitoring to ensure store availability',
          ],
        },
      },
      packages: {
        title: 'E-commerce Website Packages',
        subtitle: 'Choose the right package for your online store',
        description: 'Choose an e-commerce package based on your product volume and stage. Each package has a clearly defined product limit, features, and monthly maintenance — so there are no surprises.',
        pricingNote: 'All packages include a monthly maintenance fee for hosting, security, and technical upkeep. No hidden costs. Cancel anytime.',
        items: [
          {
            name: 'Starter commerce',
            bestFor: 'Small sellers who want a simple, functional online store to start selling limited products.',
            price: 'LKR 24,999',
            monthlyPrice: 'LKR 1,000 / month',
            stripeLink: '/payment/ecommerce-starter',
            includes: [
              'Up to 5 products',
              'Basic shop, cart, and checkout',
              'Mobile-friendly design',
              'Stripe payment setup',
              'WhatsApp enquiry option',
              'Guided product submission',
            ],
            goodToKnow: [
              'Fixed structure. Limited scalability. Best for testing online sales.',
            ],
          },
          {
            name: 'Growth commerce',
            bestFor: 'Growing sellers who need better product organization, basic SEO, and smoother order handling.',
            price: 'LKR 44,999',
            monthlyPrice: 'LKR 1,500 / month',
            stripeLink: '/payment/ecommerce-growth',
            includes: [
              'Up to 15 products',
              'Category-based shop structure',
              'Improved product layout',
              'Basic SEO for products',
              'Contact form + WhatsApp',
              'Order notification setup',
            ],
            goodToKnow: [
              'Balanced flexibility with clear limits.',
            ],
          },
          {
            name: 'Professional commerce',
            bestFor: 'Established businesses that require advanced product structure, optimized checkout store setup.',
            price: 'LKR 74,999',
            monthlyPrice: 'LKR 2,000 / month',
            stripeLink: '/payment/ecommerce-professional',
            includes: [
              'Up to 25 products',
              'Advanced product structure',
              'Enhanced SEO setup',
              'Priority handling',
              'Lead-focused product pages',
              'Advanced checkout configuration',
            ],
            goodToKnow: [
              'Designed for long-term online sales growth.',
            ],
          },
          {
            name: 'Custom commerce',
            bestFor: 'Businesses with specific or advanced requirements beyond standard packages.',
            price: 'Custom pricing',
            monthlyPrice: null,
            stripeLink: '/contact',
            includes: [
              'Custom product volume',
              'Custom features (shipping logic, variants, integrations)',
              'Dedicated planning and timeline',
              'Tailored scope',
            ],
            goodToKnow: [
              'Requires discussion before confirmation.',
            ],
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about our E-commerce Website packages',
        description: 'Find answers to common questions about pricing, products, payments, process, and ongoing support for your online store.',
        pricing: {
          title: 'Pricing & Packages',
          items: [
            {
              question: 'What is included in an e-commerce website package?',
              answer:
                'Each package includes store setup, product pages, checkout configuration, payment setup, and enquiry or order handling based strictly on the selected package scope.',
            },
            {
              question: 'Why is e-commerce more expensive than a business website?',
              answer:
                'E-commerce websites require additional setup such as product structures, payment processing, checkout logic, and order handling, which increases complexity compared to standard business websites.',
            },
            {
              question: 'Is the price shown a one-time payment?',
              answer:
                'Yes. The package price is a one-time website setup cost, excluding the monthly maintenance fee.',
            },
            {
              question: 'Is the monthly maintenance fee mandatory?',
              answer:
                'Yes. The monthly fee covers hosting, security updates, technical monitoring, and ongoing system stability.',
            },
            {
              question: 'Are there any hidden costs?',
              answer:
                'No. All costs are clearly listed. Additional features or changes outside the package scope are quoted separately.',
            },
            {
              question: 'Can I upgrade my package later?',
              answer: 'Yes. You can upgrade to a higher package as your business grows.',
            },
          ],
        },
        productsContent: {
          title: 'Products & Content',
          items: [
            {
              question: 'How many products can I add to my website?',
              answer:
                'Product limits depend on your selected package (Starter, Growth, or Professional).',
            },
            {
              question: 'Will you upload the products for me?',
              answer:
                'You provide product details through our guided setup process. We structure and place them according to the package scope.',
            },
            {
              question: 'What product information do I need to provide?',
              answer:
                'Product name, price, images, short description, and category. Additional fields depend on the package.',
            },
            {
              question: 'Can I add or edit products later?',
              answer: 'Yes. You can manage products within the limits of your package.',
            },
            {
              question: 'Do you support product variations (size, color, etc.)?',
              answer:
                'Basic variations are supported in higher packages. Complex variations require a custom solution.',
            },
            {
              question: 'Do you write product descriptions?',
              answer:
                'No. You provide the content. We structure and format it professionally.',
            },
          ],
        },
        paymentsOrders: {
          title: 'Payments & Checkout',
          items: [
            {
              question: 'Which payment methods are supported?',
              answer:
                'Stripe and supported online payment gateways. Local options depend on availability and compliance.',
            },
            {
              question: 'Will payments go directly to my account?',
              answer: 'Yes. Payments are processed directly into your payment gateway account.',
            },
            {
              question: 'Do you handle refunds or payment disputes?',
              answer:
                'No. Payment management, refunds, and disputes are handled by you through your payment provider.',
            },
            {
              question: 'Is the checkout secure?',
              answer:
                'Yes. Secure payment practices and standard protections are configured.',
            },
            {
              question: 'Can customers place orders without creating an account?',
              answer:
                'Yes, unless account creation is specifically required by your business model.',
            },
          ],
        },
        ordersCustomerFlow: {
          title: 'Orders & Customer Flow',
          items: [
            {
              question: 'How will I receive order notifications?',
              answer:
                'Orders are sent directly to your email or configured contact channel.',
            },
            {
              question: 'Can customers contact me before buying?',
              answer:
                'Yes. WhatsApp or contact form options are included based on the package.',
            },
            {
              question: 'Do you handle order fulfillment or delivery?',
              answer:
                'No. Order fulfillment, delivery, and inventory handling are managed by you.',
            },
            {
              question: 'Do you support delivery fee calculations?',
              answer:
                'Basic delivery information can be displayed. Advanced shipping logic requires a custom solution.',
            },
          ],
        },
        designCustomization: {
          title: 'Design & Customization',
          items: [
            {
              question: 'Can I choose how the website looks?',
              answer:
                'Design follows a professional, conversion-focused structure. Customisation is limited to package scope.',
            },
            {
              question: 'Can I request design changes?',
              answer:
                'Minor revisions are allowed within reasonable limits defined by the package.',
            },
            {
              question: 'Will my website be mobile-friendly?',
              answer: 'Yes. All e-commerce websites are mobile-first by default.',
            },
            {
              question: 'Can I add new pages later?',
              answer: 'Yes, within package limits or by upgrading.',
            },
          ],
        },
        process: {
          title: 'Process & Delivery',
          items: [
            {
              question: 'How long does it take to build an e-commerce website?',
              answer:
                'Typically 5–10 working days after receiving all required information.',
            },
            {
              question: 'What happens after I make payment?',
              answer:
                'You\'ll receive access to the guided setup process to submit your business and product details.',
            },
            {
              question: 'What if I delay submitting my information?',
              answer: 'Project timelines depend on timely content submission.',
            },
            {
              question: 'Do you provide multiple revisions?',
              answer:
                'Revisions are limited and focused on structure and layout, not unlimited changes.',
            },
          ],
        },
        technical: {
          title: 'Technical & Ownership',
          items: [
            {
              question: 'Will I own the e-commerce website?',
              answer: 'Yes. Once built, the website belongs to you.',
            },
            {
              question: 'Can I move the website to another provider later?',
              answer: 'Yes, with proper coordination.',
            },
            {
              question: 'Do you provide admin access?',
              answer: 'Yes, for managing products and basic content.',
            },
            {
              question: 'Is inventory management included?',
              answer:
                'Basic product management is included. Advanced inventory systems require custom development.',
            },
          ],
        },
        support: {
          title: 'Support, Maintenance & Expectations',
          items: [
            {
              question: 'What does the monthly maintenance cover?',
              answer:
                'Hosting, security updates, performance monitoring, and technical stability.',
            },
            {
              question: 'Does maintenance include product updates?',
              answer:
                'No. Product updates are handled by you unless otherwise agreed.',
            },
            {
              question: 'What kind of support do you provide?',
              answer:
                'Technical support related to hosting and system stability.',
            },
            {
              question: 'Is this suitable for large marketplaces or multi-vendor platforms?',
              answer: 'No. Those require a fully custom solution.',
            },
            {
              question: 'Can you guarantee sales or conversions?',
              answer:
                'No. We provide the technical platform; sales depend on your products, pricing, and marketing.',
            },
          ],
        },
      },
    },
    socialMedia: {
      title: 'Social Media Management',
      description: 'Best for businesses that want a consistent and professional social media presence. Includes planned posts, basic content design, and account management based on a monthly package.',
      page: {
        title: 'Social Media Management',
      },
      features: {
        title: "What's Included",
        subtitle: 'Package features',
        description: 'Every Social Media Management package includes planning, creation, and consistent presence across your chosen platforms.',
        items: [
          {
            title: 'Content Planning',
            description:
              'Monthly content planning based on your business, services, and audience — so posts are purposeful, not random.',
          },
          {
            title: 'Post Creation',
            description:
              'Professionally designed posts with captions aligned to your brand tone and platform standards.',
          },
          {
            title: 'Platform Management',
            description:
              'Scheduled posting, basic inbox monitoring, and profile consistency across selected platforms.',
          },
          {
            title: 'Consistency & Branding',
            description:
              'Visual and content consistency so your business looks active, credible, and professional over time.',
          },
        ],
      },
      tech: {
        title: 'How We Manage It',
        subtitle: 'Consistency and clarity — not viral promises',
        description:
          'We focus on consistency and clarity — not viral promises. Our process ensures your brand stays active and present without daily involvement from you.',
        contentStrategy: {
          title: 'Content Strategy',
          description: 'How we plan your content',
          points: [
            'Business understanding',
            'Content themes',
            'Monthly plan approval',
          ],
        },
        designCopy: {
          title: 'Design & Copy',
          description: 'How posts look and read',
          points: [
            'Branded visuals',
            'Clear captions',
            'Platform-appropriate formats',
          ],
        },
        scheduling: {
          title: 'Scheduling',
          description: 'How posts go out',
          points: [
            'Planned posting calendar',
            'Platform-native scheduling tools',
            'Consistent timing',
          ],
        },
        monitoring: {
          title: 'Monitoring',
          description: 'How we keep an eye on your presence',
          points: [
            'Basic comment/inbox checks',
            'Escalation if required',
          ],
        },
      },
      packages: {
        title: 'Social Media Management Packages',
        subtitle: 'Choose the right package for your presence',
        description: 'Monthly packages based on platform count, post volume, and level of support. Clear scope. No vague promises.',
        pricingNote: 'All packages are billed monthly. Cancel anytime. No long-term contracts.',
        items: [
          {
            name: 'Starter Management',
            bestFor: 'Small businesses starting their online presence',
            price: 'LKR 4,999 / month',
            stripeLink: '/payment/social-starter',
            includes: [
              '1 platform',
              '4 posts per month',
              'Basic content planning',
              'Post design + captions',
              'Scheduled publishing',
            ],
          },
          {
            name: 'Growth Management',
            bestFor: 'Businesses that need consistent visibility and engagement',
            price: 'LKR 9,999 / month',
            stripeLink: '/payment/social-growth',
            includes: [
              '2 platforms',
              '12 posts per month',
              'Monthly content calendar',
              'Branded visuals',
              'Caption writing',
              'Basic inbox monitoring',
            ],
          },
          {
            name: 'Professional Management',
            bestFor: 'Brands that want a strong, reliable social presence',
            price: 'LKR 14,999 / month',
            stripeLink: '/payment/social-professional',
            includes: [
              'Up to 3 platforms',
              '15 posts per month',
              'Advanced content planning',
              'Priority handling',
              'Engagement guidance',
              'Performance overview',
            ],
          },
          {
            name: 'Custom Management',
            bestFor: 'Businesses with special requirements or higher volume.',
            price: 'Custom pricing',
            stripeLink: '/book-a-call',
            includes: [
              'Custom platform and volume',
              'Dedicated planning',
              'Tailored scope',
            ],
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about our Social Media Management packages',
        description: 'Find answers to pricing, platforms, content, process, and expectations.',
        pricingBilling: {
          title: 'Pricing & Billing',
          items: [
            {
              question: 'Is Social Media Management a monthly service?',
              answer:
                'Yes. Social Media Management is a monthly recurring service because consistency is required to maintain an active and professional online presence.',
            },
            {
              question: 'Is there a minimum commitment period?',
              answer:
                'No long-term contract is required. However, we recommend a minimum of 2–3 months for meaningful consistency and engagement.',
            },
            {
              question: 'Are there any hidden costs?',
              answer:
                'No. The monthly fee covers all deliverables clearly listed in your selected package. Any additional work outside scope is discussed and quoted separately.',
            },
            {
              question: 'Does the price include paid advertising?',
              answer:
                'No. Paid ads are not included. Social Media Management focuses on organic content, posting, and presence. Ads are handled under a separate Social Media Ads service.',
            },
            {
              question: 'Can I upgrade or downgrade my package?',
              answer: 'Yes. You can change your package at the beginning of any new billing cycle.',
            },
          ],
        },
        platformsPosting: {
          title: 'Platforms & Posting',
          items: [
            {
              question: 'Which platforms do you manage?',
              answer:
                'We manage Facebook and Instagram by default. Other platforms may be included under custom arrangements.',
            },
            {
              question: 'How many posts will be published per month?',
              answer:
                'Starter packages typically include 8 posts per month, Growth packages include 12–16 posts, and Professional packages include 20 or more posts per month.',
            },
            {
              question: 'Do you post stories or reels?',
              answer:
                'Starter packages focus on static posts. Growth and Professional packages may include stories or reels based on content suitability.',
            },
            {
              question: 'Do you use hashtags?',
              answer:
                'Yes. Relevant hashtags are included where appropriate based on platform and content type.',
            },
          ],
        },
        contentCreation: {
          title: 'Content Creation',
          items: [
            {
              question: 'Do you create both designs and captions?',
              answer:
                'Yes. We create post designs and write captions aligned with your brand tone and platform standards.',
            },
            {
              question: 'Will the content be customised for my business?',
              answer:
                'Yes. Content is created based on your industry, services, and target audience.',
            },
            {
              question: 'Do I need to provide content ideas?',
              answer:
                'No. We handle content planning. You may suggest ideas if you want them included.',
            },
            {
              question: 'Can I request changes to posts?',
              answer: 'Yes. Reasonable revisions are included before publishing.',
            },
          ],
        },
        processWorkflow: {
          title: 'Process & Workflow',
          items: [
            {
              question: 'How do we get started?',
              answer:
                'After payment, we begin with a guided onboarding process to collect your business details, branding preferences, and goals.',
            },
            {
              question: 'Will I approve posts before publishing?',
              answer: 'Yes. Posts are shared for review and approval before they are scheduled.',
            },
            {
              question: 'How long does it take to start posting?',
              answer:
                'Posting usually begins within 3–5 working days after onboarding and content approval.',
            },
            {
              question: 'What happens if I delay approvals?',
              answer:
                'Delays in approval may affect posting schedules. We adjust timelines accordingly.',
            },
          ],
        },
        engagementCommunication: {
          title: 'Engagement & Communication',
          items: [
            {
              question: 'Do you reply to comments and messages?',
              answer:
                'Basic comment and inbox monitoring is included. Full customer conversation handling is not included unless agreed separately.',
            },
            {
              question: 'Will you respond to customer enquiries on my behalf?',
              answer:
                'We handle basic responses. Sales or service-specific conversations are typically handled by the business owner.',
            },
            {
              question: 'How do we communicate with your team?',
              answer:
                'Communication is handled through WhatsApp or email for clarity and record keeping.',
            },
          ],
        },
        reportingPerformance: {
          title: 'Reporting & Performance',
          items: [
            {
              question: 'Do you provide performance reports?',
              answer:
                'Yes. Starter packages receive a basic monthly summary. Growth packages receive a detailed monthly report. Professional packages receive enhanced performance insights.',
            },
            {
              question: 'What metrics are included in reports?',
              answer:
                'Reports include reach, engagement, post performance, and general audience insights depending on the package.',
            },
            {
              question: 'Will this service increase followers or sales?',
              answer:
                'No specific results are guaranteed. Social Media Management focuses on consistency, visibility, and brand presence over time.',
            },
          ],
        },
        ownershipControl: {
          title: 'Ownership & Control',
          items: [
            {
              question: 'Do I own my social media accounts?',
              answer: 'Yes. You retain full ownership and access to all your social media accounts at all times.',
            },
            {
              question: 'Who owns the content created?',
              answer: 'You own all content created during the service period.',
            },
            {
              question: 'What happens if I stop the service?',
              answer:
                'You retain full access to your accounts and all content created during the engagement.',
            },
          ],
        },
        supportExpectations: {
          title: 'Support & Expectations',
          items: [
            {
              question: 'Is this suitable for all businesses?',
              answer:
                'This service is best suited for businesses that want consistent online presence. Businesses expecting immediate sales should consider ads.',
            },
            {
              question: 'Can I pause the service?',
              answer:
                'Pausing can be discussed on a case-by-case basis depending on the billing cycle.',
            },
          ],
        },
      },
      cta: {
        title: 'Ready to Stay Consistent on Social Media Platforms?',
        description:
          'Choose a package, share your business details, and we’ll manage your social presence on the platforms you choose.',
        button: 'Start Social Media Setup',
      },
    },
    socialAds: {
      title: 'Social Media Ads',
      description: 'Best for businesses that want to run paid ads on social platforms. Includes ad setup, basic targeting, and campaign management based on a fixed service package.',
      page: {
        title: 'Social Media Ads',
      },
      features: {
        title: "What's Included",
        subtitle: 'Package features',
        description: 'Every Social Media Ads package includes campaign setup, creative support, targeting, and performance monitoring within a defined scope.',
        items: [
          {
            title: 'Ad Campaign Setup',
            description:
              'Campaign structure, objectives, and basic targeting setup based on your business goals and selected package.',
          },
          {
            title: 'Ad Creative Setup',
            description:
              'Ad visuals and copy created or adapted for paid campaigns, designed to attract attention and encourage action.',
          },
          {
            title: 'Audience Targeting',
            description:
              'Audience selection based on location, interests, and behaviour — adjusted according to industry and campaign type.',
          },
          {
            title: 'Performance Monitoring',
            description:
              'Ongoing monitoring and optimisation to control spend, improve performance, and avoid wasted budget.',
          },
        ],
      },
      tech: {
        title: 'How We Run Ads',
        subtitle: 'Controlled execution, clear expectations',
        description:
          'We focus on controlled ad execution, not unrealistic guarantees. Campaigns are managed within clear limits to ensure transparency and efficiency.',
        strategy: {
          title: 'Strategy & Goals',
          description: 'How we define your campaign',
          points: [
            'Understand business objective (leads, enquiries, sales)',
            'Select campaign type',
            'Define success metrics',
          ],
        },
        creative: {
          title: 'Creative & Copy',
          description: 'How ads look and read',
          points: [
            'Ad visuals and text aligned to campaign goal',
            'Platform-appropriate formats',
            'Clear call-to-action',
          ],
        },
        targeting: {
          title: 'Targeting & Budget',
          description: 'How we set audience and spend',
          points: [
            'Location-based targeting',
            'Interest and behaviour selection',
            'Daily or monthly budget setup',
          ],
        },
        monitoring: {
          title: 'Monitoring & Optimisation',
          description: 'How we track and improve',
          points: [
            'Performance tracking',
            'Budget control',
            'Ad adjustments based on results',
          ],
        },
      },
      packages: {
        title: 'Social Media Ads Packages',
        subtitle: 'Management fees — ad spend paid separately by you',
        description:
          'Package prices are management fees only. Ad spend is paid directly by you to Meta (Facebook/Instagram). We handle strategy, setup, monitoring, and optimisation within your selected scope.',
        pricingNote:
          'All prices are monthly management fees. Ad spend is paid directly by the client to the advertising platform. No hidden costs or commissions on ad spend.',
        items: [
          {
            name: 'Starter Ads',
            bestFor: 'For businesses running paid ads for the first time to test audience response and validate demand.',
            price: 'LKR 4,999 / month',
            stripeLink: '/payment/ads-starter',
            includes: [
              '1 active ad campaign',
              '1–2 ad creatives',
              'Basic audience targeting',
              'Ad spend handling up to LKR 50,000',
              'Performance monitoring',
            ],
          },
          {
            name: 'Growth Ads',
            bestFor: 'For businesses actively running ads and looking to improve lead quality through testing and optimisation.',
            price: 'LKR 9,999 / month',
            stripeLink: '/payment/ads-growth',
            includes: [
              'Up to 3 active ad campaigns',
              'Multiple ad creatives',
              'Audience testing and refinement',
              'Ad spend handling up to LKR 100,000',
              'Regular optimisation',
            ],
          },
          {
            name: 'Advanced Ads',
            bestFor: 'For businesses scaling ads with higher budgets, and continuous performance optimisation.',
            price: 'LKR 14,999 / month',
            stripeLink: '/payment/ads-professional',
            includes: [
              'Up to 5 active ad campaigns',
              'Advanced audience targeting',
              'Creative testing and optimisation',
              'Ad spend handling up to LKR 200,000',
              'Priority optimisation and monitoring',
            ],
          },
          {
            name: 'Custom Ads',
            bestFor: 'For businesses with large budgets, advanced funnels, or industry-specific advertising requirements.',
            price: 'Custom pricing',
            stripeLink: '/book-a-call',
            includes: [
              'Custom campaign volume',
              'Advanced strategies and objectives',
              'Industry-specific targeting',
              'Custom reporting and optimisation',
              'Dedicated planning and execution',
            ],
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about our Social Media Ads packages',
        description: 'Find answers to pricing, campaigns, targeting, and reporting.',
        pricingBilling: {
          title: 'Pricing & Billing',
          items: [
            {
              question: 'Is the ad spend included in the package price?',
              answer:
                'No. The package price is only for ad management. Your ad spend is paid directly to platforms like Facebook or Instagram from your own ad account. This gives you full control and transparency.',
            },
            {
              question: 'Is there a minimum ad budget required?',
              answer:
                'Yes. Starter Ads typically require a minimum monthly ad budget of LKR 20,000–50,000. Growth Ads require LKR 50,000–150,000. Professional Ads usually start from LKR 150,000 and above. Exact recommendations depend on your industry.',
            },
            {
              question: 'Can I increase or decrease my ad budget anytime?',
              answer:
                'Yes. You can adjust your ad budget at any time. We will advise you on safe increases or reductions based on performance data.',
            },
            {
              question: 'Are there any hidden costs?',
              answer:
                'No. There are no hidden costs. You pay the monthly management fee to us and the ad spend directly to the ad platform.',
            },
          ],
        },
        campaignScope: {
          title: 'Campaign Scope & Deliverables',
          items: [
            {
              question: 'How many campaigns are included in each package?',
              answer:
                'Starter Ads include 1 campaign. Growth Ads include up to 3 campaigns. Professional Ads include multiple campaigns running simultaneously. Custom Ads packages are defined based on your objectives.',
            },
            {
              question: 'How many ad creatives are included?',
              answer:
                'Starter Ads include 1–2 ad creatives. Growth Ads include multiple creatives for testing. Professional Ads include ongoing creative testing and optimisation. Custom Ads depend on campaign complexity.',
            },
            {
              question: 'Do you create the ad designs and copy?',
              answer:
                'Yes. We handle ad copywriting and basic creative setup. If advanced video production or custom shoots are required, those are discussed separately.',
            },
            {
              question: 'Which platforms do you run ads on?',
              answer:
                'We primarily run ads on Facebook and Instagram. Other platforms like Google Ads or TikTok Ads can be handled under Custom Ads packages.',
            },
          ],
        },
        targetingStrategy: {
          title: 'Targeting & Strategy',
          items: [
            {
              question: 'Do you help with audience targeting?',
              answer:
                'Yes. Starter Ads include basic audience targeting. Growth Ads include audience testing and refinement. Professional Ads include advanced targeting, retargeting, and lookalike audiences.',
            },
            {
              question: 'Will you choose the ad objective for me?',
              answer:
                'Yes. We select objectives such as leads, messages, traffic, or sales based on your business goal and package.',
            },
            {
              question: 'Can ads be targeted to specific locations?',
              answer:
                'Yes. Ads can be targeted by country, city, or specific areas depending on your business and campaign strategy.',
            },
          ],
        },
        reportingOptimisation: {
          title: 'Reporting & Optimisation',
          items: [
            {
              question: 'How often do I receive performance reports?',
              answer:
                'Reporting frequency depends on your package. You will receive updates and performance data at agreed intervals.',
            },
            {
              question: 'Do you optimise campaigns based on results?',
              answer:
                'Yes. We monitor performance and make adjustments within your package scope to improve results and control spend.',
            },
          ],
        },
      },
      cta: {
        title: 'Ready to Run Paid Ads With Clear Expectations?',
        description: 'Choose your ad management package and get started.',
        button: 'Start Ads Setup',
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
    title: 'ABOUT GROWTH SPACE LANKA',
    subtitle: '',
    // Home page About preview (paragraphs + CTA)
    paragraphs: [
      'Growth Space Lanka was built to solve a simple problem: getting a business online in Sri Lanka shouldn\'t be complicated.',
      'We offer fixed packages, clear scope, and a guided setup process—so you know what you\'re getting, how long it takes, and what happens next.',
      'No guesswork. No hidden costs. Just straightforward execution for Sri Lankan businesses.',
    ],
    cta: 'BOOK A CALL',
    // About page sections
    story: {
      title: 'OUR STORY',
      subtitle: 'How we got here',
      content1:
        'Growth Space Lanka was built to solve a simple problem: getting a business online in Sri Lanka shouldn\'t be complicated.',
      content2:
        'Many businesses struggle with unclear pricing, long timelines, and confusing technical processes when trying to build or manage their digital presence.',
      content3:
        'We created a fixed-package service model with clearly defined scope, transparent pricing, and a guided setup process—so business owners know exactly what they\'re getting, how long it takes, and what happens next.',
      content4:
        'No guesswork. No hidden costs. Just straightforward execution that helps businesses get online and grow with confidence.',
    },
    vision: {
      title: 'VISION',
      statement:
        'To help 10,000+ Sri Lankan small and medium businesses get online faster — with clear pricing, simple processes, and zero technical confusion.',
      statementBold: '10,000+ Sri Lankan small and medium businesses',
    },
    mission: {
      title: 'MISSION',
      statement:
        'We deliver clearly defined digital services through fixed packages, guided onboarding, and reliable execution — so businesses can focus on running and growing their operations while we handle the technical work.',
    },
    team: {
      title: 'OUR TEAM',
      subtitle: 'The people behind Growth Space Lanka',
      description:
        'A small, focused team dedicated to helping Sri Lankan businesses get online without confusion.',
      supportingLine:
        'Supported by a distributed team of 15+ designers, developers, and marketers working remotely and in person across different parts of the country to deliver consistent, high-quality work.',
      supportingLineBold: '15+ designers, developers, and marketers',
      members: [
        {
          name: 'Prashan',
          role: 'Strategist & Developer',
          imageUrl: '/prashan_img.png',
        },
        {
          name: 'Thanu',
          role: 'Developer & Marketer',
          imageUrl: '/thanu_img.png',
        },
        {
          name: 'Tamil',
          role: 'Developer & Marketer',
          imageUrl: '/tamil_img.png',
        },
        {
          name: 'Shobs',
          role: 'Developer',
          imageUrl: '/Shobs-img.png',
        },
        {
          name: 'Shree',
          role: 'Developer',
          imageUrl: '/shree_img.png',
        },
        {
          name: 'Karthik',
          role: 'Developer',
          imageUrl: '/karthik_img.png',
        },
      ],
    },
    ctaSection: {
      title: 'READY TO GET YOUR BUSINESS ONLINE?',
      description:
        'Schedule a short call to discuss your goals and get a clear recommendation. We\'ll help you choose the right package and next steps—no pressure, no jargon.',
      button: 'BOOK A CALL',
    },
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
    description:
      'Pick a package that fits your business, share your details in a simple form, and we handle the rest. Fixed pricing. Guided setup. No technical hassle.',
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
