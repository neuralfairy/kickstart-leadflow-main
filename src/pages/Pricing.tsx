import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, ArrowRight, Star, Users, Building, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with lead generation",
      popular: false,
      icon: Users,
      features: [
        "500 qualified leads/month",
        "Basic data enrichment",
        "Email support",
        "CRM integration",
        "Lead scoring",
        "Standard analytics",
        "48-hour delivery"
      ],
      notIncluded: [
        "Phone support",
        "Custom targeting",
        "Advanced analytics",
        "Dedicated manager"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Professional",
      price: "$699",
      period: "/month", 
      description: "Ideal for growing companies that need more leads and better targeting",
      popular: true,
      icon: Building,
      features: [
        "2,000 qualified leads/month",
        "Advanced data enrichment",
        "Priority email & phone support",
        "Multi-CRM integration",
        "Advanced lead scoring",
        "Custom analytics dashboard",
        "24-hour delivery",
        "A/B testing",
        "Custom targeting options"
      ],
      notIncluded: [
        "Dedicated account manager",
        "White-label reporting",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex lead generation requirements",
      popular: false,
      icon: Zap,
      features: [
        "Unlimited qualified leads",
        "Premium data enrichment",
        "24/7 dedicated support",
        "Custom integrations",
        "AI-powered lead scoring",
        "White-label analytics",
        "Same-day delivery",
        "Advanced A/B testing",
        "Custom targeting & filtering",
        "Dedicated account manager",
        "Onboarding & training",
        "SLA guarantees"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry"
    }
  ];

  const addOns = [
    {
      name: "Data Enrichment Plus",
      price: "$0.50",
      unit: "per contact",
      description: "Enhanced data with social profiles, technographics, and intent data"
    },
    {
      name: "Voice AI Calling",
      price: "$199",
      unit: "per month",
      description: "Automated voice calls with AI-powered conversation and qualification"
    },
    {
      name: "Advanced Analytics",
      price: "$99",
      unit: "per month",
      description: "Custom reporting, attribution tracking, and ROI analysis"
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Your 14-day free trial includes 50 qualified leads, full platform access, and email support. No credit card required."
    },
    {
      question: "How do you ensure lead quality?",
      answer: "Every lead goes through our 5-point verification process including email validation, job title verification, and intent scoring."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with the lead quality or our service."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="block text-primary-glow">Pricing That Scales</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start with a free trial and scale as you grow.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <CheckCircle className="h-5 w-5" />
            <span>14-day free trial</span>
            <CheckCircle className="h-5 w-5" />
            <span>No setup fees</span>
            <CheckCircle className="h-5 w-5" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-glow transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 opacity-60">
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "cta" : "outline-primary"}
                    size="lg"
                    onClick={() => window.open(plan.ctaLink, '_blank')}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Add-ons
            </h2>
            <p className="text-xl text-muted-foreground">
              Enhance your plan with additional features and capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {addon.price}
                    <span className="text-base font-normal text-muted-foreground"> {addon.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how much revenue you could generate with our lead generation services
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2,000</div>
                <p className="text-muted-foreground">Qualified Leads/Month</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15%</div>
                <p className="text-muted-foreground">Average Conversion Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$5,000</div>
                <p className="text-muted-foreground">Average Deal Size</p>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold text-foreground mb-2">
                Potential Monthly Revenue: $1,500,000
              </div>
              <p className="text-muted-foreground">
                ROI: 2,143% (2,000 leads × 15% conversion × $5,000 deal size)
              </p>
            </div>
            
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => window.open('https://salescentri.com/solutions/use-case-navigator/recommendations', '_blank')}
            >
              Get Custom ROI Calculation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies growing their revenue with our lead generation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="xl" 
              variant="outline-primary" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;