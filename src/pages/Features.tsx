import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Zap, 
  Shield, 
  Database, 
  Bot, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Users,
  Mail,
  Phone
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description: "Advanced machine learning algorithms identify your ideal prospects with 95% accuracy.",
      features: ["Behavioral targeting", "Lookalike audience creation", "Intent data analysis", "Real-time scoring"]
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Comprehensive contact and company data from 200+ verified sources.",
      features: ["Email verification", "Phone number validation", "Social media profiles", "Company insights"]
    },
    {
      icon: Bot,
      title: "Automated Outreach",
      description: "Personalized multi-channel campaigns that convert prospects into customers.",
      features: ["Email sequences", "LinkedIn automation", "SMS campaigns", "Voice calls"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and ROI tracking for continuous optimization.",
      features: ["Campaign performance", "Lead quality scoring", "Conversion tracking", "ROI analysis"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "GDPR, CCPA, and CAN-SPAM compliant with enterprise-grade security.",
      features: ["Data encryption", "Audit trails", "Privacy controls", "Compliance reporting"]
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access prospects from 190+ countries with localized data and insights.",
      features: ["Multi-language support", "Regional compliance", "Local phone numbers", "Time zone optimization"]
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" },
    { name: "Pipedrive", logo: "PD" },
    { name: "Slack", logo: "SL" },
    { name: "Microsoft Teams", logo: "MT" },
    { name: "Zapier", logo: "ZP" }
  ];

  const useCases = [
    {
      title: "B2B SaaS Companies",
      description: "Generate qualified leads for software and technology companies",
      icon: Zap,
      benefits: ["Higher conversion rates", "Shorter sales cycles", "Better lead quality"]
    },
    {
      title: "Professional Services",
      description: "Connect with decision-makers in consulting, legal, and financial services",
      icon: Users,
      benefits: ["Premium prospects", "Industry-specific targeting", "Account-based marketing"]
    },
    {
      title: "E-commerce Businesses",
      description: "Find B2B customers for your products and services",
      icon: Globe,
      benefits: ["Bulk order prospects", "Wholesale opportunities", "Partnership leads"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            Advanced Lead Generation Platform
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block text-primary-glow">B2B Lead Generation</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Everything you need to identify, target, and convert your ideal prospects into customers.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://salescentri.com/solutions/use-case-navigator/demo', '_blank')}
          >
            Try Interactive Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Lead Generation Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From prospect identification to conversion tracking, we provide all the tools you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perfect for Any Industry
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored solutions for different business types and industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-card rounded-lg flex items-center justify-center mx-auto mb-2 hover:shadow-glow transition-all duration-300">
                  <span className="font-bold text-primary">{integration.logo}</span>
                </div>
                <p className="text-sm text-muted-foreground">{integration.name}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline-primary"
              onClick={() => window.open('https://salescentri.com/solutions/psa-suite/integrations', '_blank')}
            >
              View All Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to See These Features in Action?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a personalized demo and see how our features can transform your lead generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
            >
              Book Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="xl" 
              variant="outline-primary" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;