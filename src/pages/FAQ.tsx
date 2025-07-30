import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  HelpCircle, 
  Search, 
  ArrowRight, 
  MessageCircle, 
  Phone,
  Target,
  Shield,
  CreditCard,
  Users,
  Settings,
  BarChart3
} from 'lucide-react';

const FAQ = () => {
  const categories = [
    { id: "general", name: "General", icon: HelpCircle, count: 8 },
    { id: "pricing", name: "Pricing & Billing", icon: CreditCard, count: 6 },
    { id: "features", name: "Features", icon: Target, count: 10 },
    { id: "security", name: "Security & Compliance", icon: Shield, count: 5 },
    { id: "integrations", name: "Integrations", icon: Settings, count: 7 },
    { id: "analytics", name: "Analytics & Reporting", icon: BarChart3, count: 4 }
  ];

  const faqs = {
    general: [
      {
        question: "What is Kickitmarketing and how does it work?",
        answer: "Kickitmarketing is a B2B lead generation platform that uses AI and advanced data analytics to identify, qualify, and deliver high-quality prospects to your sales team. We combine multiple data sources, apply machine learning algorithms for lead scoring, and integrate directly with your CRM for seamless workflow."
      },
      {
        question: "How quickly can I expect to receive leads?",
        answer: "Most clients receive their first batch of qualified leads within 24-48 hours of campaign setup. Our Starter plan delivers leads within 48 hours, Professional within 24 hours, and Enterprise clients can receive same-day delivery."
      },
      {
        question: "What makes your leads different from other providers?",
        answer: "Our leads undergo a 5-point verification process including email validation, job title verification, company validation, intent scoring, and GDPR compliance checks. We guarantee 95% data accuracy and provide detailed lead intelligence for each prospect."
      },
      {
        question: "Do you offer a free trial?",
        answer: "Yes! We offer a 14-day free trial that includes 50 qualified leads, full platform access, and email support. No credit card required to start."
      },
      {
        question: "Can I target specific industries or company sizes?",
        answer: "Absolutely. Our platform allows you to target by industry, company size, revenue, location, technology stack, and even intent signals. We support over 200 targeting criteria to ensure you reach your ideal customer profile."
      },
      {
        question: "What regions do you cover?",
        answer: "We provide lead generation services in 190+ countries with specialized data coverage in North America, Europe, and Asia-Pacific. Our data is localized and complies with regional privacy regulations."
      },
      {
        question: "How do you handle lead quality issues?",
        answer: "We offer a 95% data accuracy guarantee. If a lead doesn't meet our quality standards, we'll replace it free of charge. We also provide detailed feedback mechanisms to continuously improve targeting."
      },
      {
        question: "Can I pause or cancel my subscription anytime?",
        answer: "Yes, you can pause or cancel your subscription at any time. There are no long-term contracts or cancellation fees. Changes take effect at the end of your current billing cycle."
      }
    ],
    pricing: [
      {
        question: "How does your pricing work?",
        answer: "We offer three main plans: Starter ($299/month for 500 leads), Professional ($699/month for 2,000 leads), and Enterprise (custom pricing for unlimited leads). All plans include data enrichment, CRM integration, and support."
      },
      {
        question: "Are there any setup fees or hidden costs?",
        answer: "No setup fees or hidden costs. Our pricing is transparent and includes all core features. Additional services like enhanced data enrichment or premium support are available as optional add-ons."
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer: "Yes, we offer a 15% discount for annual billing on all plans. We also provide volume discounts for Enterprise clients with large lead requirements."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, Amex), ACH bank transfers, and wire transfers for Enterprise accounts. All payments are processed securely through Stripe."
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. We'll prorate any billing differences."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service or lead quality. Refunds are processed within 5-7 business days."
      }
    ],
    features: [
      {
        question: "What CRM systems do you integrate with?",
        answer: "We integrate with 50+ CRM systems including Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, Zoho, and many others. We also support custom integrations via our API."
      },
      {
        question: "How accurate is your lead scoring?",
        answer: "Our AI-powered lead scoring has a 95% accuracy rate. We use over 200 data points including firmographics, technographics, intent signals, and behavioral data to score each lead."
      },
      {
        question: "Can I customize lead qualification criteria?",
        answer: "Yes, you can set custom qualification criteria based on your specific requirements. This includes company size, industry, technology stack, job titles, and intent signals."
      },
      {
        question: "Do you provide contact information for leads?",
        answer: "Yes, we provide verified email addresses, phone numbers (when available), LinkedIn profiles, and detailed company information for each lead."
      },
      {
        question: "How do you verify email addresses?",
        answer: "We use a multi-step email verification process including syntax validation, domain verification, mailbox verification, and deliverability testing to ensure 98%+ email accuracy."
      },
      {
        question: "Can I export lead data?",
        answer: "Yes, you can export lead data in multiple formats including CSV, Excel, and via API. All exports include complete lead profiles and enrichment data."
      },
      {
        question: "Do you offer real-time lead delivery?",
        answer: "Yes, Enterprise clients can receive real-time lead delivery via webhook notifications. Standard plans receive leads in scheduled batches throughout the day."
      },
      {
        question: "What analytics and reporting do you provide?",
        answer: "We provide comprehensive analytics including lead source attribution, conversion tracking, ROI analysis, campaign performance, and custom reporting dashboards."
      },
      {
        question: "Can I track lead engagement?",
        answer: "Yes, we provide lead engagement tracking including email opens, clicks, website visits, and intent signals to help you prioritize follow-up activities."
      },
      {
        question: "Do you offer A/B testing for campaigns?",
        answer: "Professional and Enterprise plans include A/B testing capabilities for targeting criteria, messaging, and campaign optimization."
      }
    ],
    security: [
      {
        question: "Is your platform GDPR compliant?",
        answer: "Yes, we are fully GDPR compliant. We only use data from consenting sources, provide clear opt-out mechanisms, and maintain comprehensive data processing records."
      },
      {
        question: "How do you ensure data security?",
        answer: "We use enterprise-grade security including 256-bit SSL encryption, SOC 2 Type II compliance, regular security audits, and data centers with ISO 27001 certification."
      },
      {
        question: "Where is my data stored?",
        answer: "Data is stored in secure, geographically distributed data centers in the US and EU. We offer data residency options to comply with local regulations."
      },
      {
        question: "Do you have a privacy policy?",
        answer: "Yes, we have a comprehensive privacy policy that details how we collect, use, and protect data. You can review it on our website under legal documentation."
      },
      {
        question: "How do you handle data breaches?",
        answer: "We have a comprehensive incident response plan and will notify affected parties within 72 hours as required by GDPR. We maintain cyber liability insurance and regular security monitoring."
      }
    ],
    integrations: [
      {
        question: "How long does CRM integration take?",
        answer: "Most standard CRM integrations can be completed in under 30 minutes using our pre-built connectors. Custom integrations typically take 1-2 weeks depending on complexity."
      },
      {
        question: "Do you have an API?",
        answer: "Yes, we offer a comprehensive REST API with rate limiting, authentication, and webhook support. Full documentation is available in our developer portal."
      },
      {
        question: "Can you integrate with marketing automation platforms?",
        answer: "Yes, we integrate with major marketing automation platforms including Marketo, Pardot, Eloqua, and HubSpot Marketing Hub for seamless lead nurturing workflows."
      },
      {
        question: "Do you support Zapier integrations?",
        answer: "Yes, we have a Zapier app that connects with 3,000+ applications for automated workflows and data synchronization."
      },
      {
        question: "Can I sync leads with multiple systems?",
        answer: "Yes, Enterprise clients can sync leads with multiple CRMs, marketing platforms, and databases simultaneously using our multi-destination routing."
      },
      {
        question: "What data fields can be mapped?",
        answer: "We support mapping of all standard and custom fields including contact info, company data, lead scores, source attribution, and custom enrichment data."
      },
      {
        question: "Do you offer white-label integrations?",
        answer: "Yes, Enterprise clients can access white-label integration options with custom branding and API endpoints for their own applications."
      }
    ],
    analytics: [
      {
        question: "What metrics can I track?",
        answer: "You can track lead volume, quality scores, conversion rates, source attribution, ROI, cost per lead, sales cycle length, and custom KPIs specific to your business."
      },
      {
        question: "Can I create custom reports?",
        answer: "Yes, Professional and Enterprise plans include custom report builders with drag-and-drop interfaces, scheduled delivery, and export options."
      },
      {
        question: "Do you provide attribution tracking?",
        answer: "Yes, we provide full attribution tracking from initial lead source through closed deals, including multi-touch attribution models."
      },
      {
        question: "How often is data updated in reports?",
        answer: "Standard reports update every 4 hours, while real-time dashboards for Enterprise clients update every 15 minutes with live data streams."
      }
    ]
  };

  return (
    <Layout>
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": Object.values(faqs).flat().map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="block text-primary-glow">Questions</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our B2B lead generation platform, 
            pricing, features, and more.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers organized by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-glow transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.count} questions</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(faqs).map(([categoryId, questions]) => {
            const category = categories.find(cat => cat.id === categoryId);
            return (
              <div key={categoryId} className="mb-16">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    {category && <category.icon className="h-5 w-5 text-white" />}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category?.name}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryId}-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of our lead generation platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Get instant answers from our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/contact/support-request/live-chat', '_blank')}
                  >
                    Start Chat
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>Speak with our lead generation experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline-primary" 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/contact/sales-inquiry', '_blank')}
                  >
                    Call Now
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Generating Leads?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Try our platform risk-free with a 14-day trial. No credit card required.
          </p>
          <Button 
            size="xl" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;