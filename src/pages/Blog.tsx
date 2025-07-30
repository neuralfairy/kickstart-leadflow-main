import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  BarChart3,
  Lightbulb,
  Zap,
  Users
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Ultimate Guide to B2B Lead Generation in 2024",
    excerpt: "Discover the latest strategies, tools, and tactics that are driving results for successful B2B companies.",
    author: "Sarah Mitchell",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Lead Generation",
    image: "FP",
    featured: true
  };

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Lead Scoring",
      excerpt: "Learn how artificial intelligence is making lead qualification more accurate and efficient.",
      author: "David Chen",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "AI",
      icon: Zap
    },
    {
      title: "10 CRM Integration Best Practices",
      excerpt: "Maximize your lead generation ROI with these proven CRM integration strategies.",
      author: "Maria Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Best Practices",
      image: "CRM",
      icon: Target
    },
    {
      title: "Measuring Lead Generation ROI: Complete Guide",
      excerpt: "Track the metrics that matter and prove the value of your lead generation efforts.",
      author: "James Wilson",
      date: "November 30, 2024",
      readTime: "10 min read",
      category: "Analytics",
      image: "ROI",
      icon: BarChart3
    },
    {
      title: "GDPR Compliance for Lead Generation",
      excerpt: "Navigate data privacy regulations while maintaining effective lead generation.",
      author: "Sarah Mitchell",
      date: "November 25, 2024",
      readTime: "7 min read",
      category: "Compliance",
      image: "GDPR",
      icon: Users
    },
    {
      title: "Account-Based Marketing Strategies",
      excerpt: "Target high-value accounts with precision using these ABM tactics.",
      author: "David Chen",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "Strategy",
      image: "ABM",
      icon: Target
    },
    {
      title: "Lead Nurturing Email Sequences That Convert",
      excerpt: "Build automated email campaigns that turn prospects into customers.",
      author: "Maria Rodriguez",
      date: "November 15, 2024",
      readTime: "11 min read",
      category: "Email Marketing",
      image: "EMAIL",
      icon: Lightbulb
    }
  ];

  const categories = [
    { name: "Lead Generation", count: 15, color: "primary" },
    { name: "Technology", count: 8, color: "secondary" },
    { name: "Best Practices", count: 12, color: "primary" },
    { name: "Analytics", count: 6, color: "secondary" },
    { name: "Compliance", count: 4, color: "primary" },
    { name: "Strategy", count: 10, color: "secondary" }
  ];

  const resources = [
    {
      title: "Lead Generation Toolkit",
      description: "Complete collection of templates, checklists, and guides",
      link: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "ROI Calculator",
      description: "Calculate your potential return on investment",
      link: "https://salescentri.com/solutions/use-case-navigator/recommendations"
    },
    {
      title: "Case Studies",
      description: "Real success stories from our clients",
      link: "https://salescentri.com/resources/case-studies"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            Thought Leadership
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lead Generation
            <span className="block text-primary-glow">Insights & Strategies</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, proven strategies, and the latest trends 
            in B2B lead generation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Badge className="mb-4">Featured Article</Badge>
            <Card className="lg:flex lg:items-center hover:shadow-glow transition-all duration-300">
              <div className="lg:w-1/3">
                <div className="h-64 lg:h-full bg-gradient-primary rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{featuredPost.image}</span>
                </div>
              </div>
              <div className="lg:w-2/3 p-8">
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4">{featuredPost.title}</CardTitle>
                <CardDescription className="text-lg mb-6">{featuredPost.excerpt}</CardDescription>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button 
                  variant="cta"
                  onClick={() => window.open('https://salescentri.com/resources/whitepapers-ebooks', '_blank')}
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="h-48 bg-gradient-card rounded-lg flex items-center justify-center mb-4">
                        <div className="text-center">
                          <post.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                          <span className="text-2xl font-bold text-primary">{post.image}</span>
                        </div>
                      </div>
                      <Badge className="w-fit mb-2">{post.category}</Badge>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <Button 
                        variant="outline-primary" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open('https://salescentri.com/resources/whitepapers-ebooks', '_blank')}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant={category.color === "primary" ? "default" : "secondary"}>
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                  <CardDescription className="text-white/90">
                    Get the latest lead generation insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                    onClick={() => window.open('https://salescentri.com/resources/whitepapers-ebooks', '_blank')}
                  >
                    Subscribe Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Free Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => window.open(resource.link, '_blank')}
                        >
                          Download
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Apply These Strategies?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Put these insights into action with our proven lead generation platform.
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
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;