import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Target, value: "10M+", label: "Leads Generated" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Salesforce with 15+ years in B2B lead generation.",
      image: "SM",
      linkedin: "https://salescentri.com/company/about-us/leadership-team"
    },
    {
      name: "David Chen",
      role: "CTO",
      bio: "Ex-Google engineer specializing in AI and machine learning for sales automation.",
      image: "DC",
      linkedin: "https://salescentri.com/company/about-us/leadership-team"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Operations",
      bio: "10+ years optimizing lead generation processes for Fortune 500 companies.",
      image: "MR",
      linkedin: "https://salescentri.com/company/about-us/leadership-team"
    },
    {
      name: "James Wilson",
      role: "VP of Customer Success",
      bio: "Dedicated to ensuring our clients achieve maximum ROI from their lead generation.",
      image: "JW",
      linkedin: "https://salescentri.com/company/about-us/leadership-team"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver highly targeted, qualified leads that match your ideal customer profile."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Complete transparency in our processes with 100% GDPR and privacy compliance."
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Measurable outcomes and continuous optimization to maximize your ROI."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We're not just a vendor - we're your strategic partner in business growth."
    }
  ];

  const certifications = [
    "ISO 27001 Certified",
    "GDPR Compliant",
    "SOC 2 Type II",
    "CAN-SPAM Compliant",
    "Better Business Bureau A+",
    "Google Partner"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            About Kickitmarketing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming B2B Sales
            <span className="block text-primary-glow">One Lead at a Time</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Founded in Seattle, we're on a mission to help businesses accelerate their growth 
            through high-quality, targeted B2B lead generation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Founded in 2020 in the heart of Seattle's tech district, Kickitmarketing was born 
                  from a simple observation: businesses were struggling to generate high-quality leads 
                  consistently and efficiently.
                </p>
                <p>
                  Our founder, Sarah Mitchell, having spent over 15 years in B2B sales and witnessing 
                  the challenges firsthand, assembled a team of data scientists, sales experts, and 
                  technology innovators to solve this problem.
                </p>
                <p>
                  Today, we're proud to serve over 500 companies worldwide, from startups to Fortune 
                  500 enterprises, helping them accelerate their sales pipeline and achieve 
                  unprecedented growth.
                </p>
              </div>
              <Button 
                variant="cta" 
                size="lg" 
                className="mt-8"
                onClick={() => window.open('https://salescentri.com/company/careers', '_blank')}
              >
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To democratize B2B lead generation by providing businesses of all sizes access to 
                enterprise-grade tools and data that were previously only available to large corporations.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every business can efficiently identify, connect with, and convert 
                their ideal customers through intelligent, data-driven lead generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{member.image}</span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(member.linkedin, '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trust & Security
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We maintain the highest standards of security and compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-card rounded-lg p-4 text-center hover:shadow-glow transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-primary rounded flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">{cert}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline-primary"
              onClick={() => window.open('https://salescentri.com/trust/compliance-certifications', '_blank')}
            >
              View All Certifications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust us to accelerate their growth through targeted lead generation.
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
              onClick={() => window.open('https://salescentri.com/contact', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;