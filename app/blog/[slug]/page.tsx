import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

// This is a sample blog post - in a real application, you would fetch this data from a CMS or database
const blogPosts = {
  "future-of-solar-energy-in-andhra-pradesh": {
    title: "The Future of Solar Energy in Andhra Pradesh",
    date: "December 15, 2024",
    readTime: "5 min read",
    author: "Rajesh Kumar",
    authorRole: "Founder & CEO",
    authorImage: "/placeholder.svg?height=100&width=100",
    featuredImage: "/images/Future-blog.jpg",
    content: `
      <p>Andhra Pradesh is emerging as a solar powerhouse in India. With abundant sunshine and supportive government policies, the state is witnessing a solar revolution. In this article, we explore the future of solar energy in Andhra Pradesh and how it's transforming the energy landscape.</p>
      <div className="relative w-full h-[250px] md:h-[350px] my-6 rounded-lg overflow-hidden">
        <img src="/images/solar-farm.jpg" alt="Large solar farm in Andhra Pradesh" className="object-cover w-full h-full" />
      </div>
      
      <h2>Abundant Solar Resources</h2>
      <p>Andhra Pradesh receives an average of 300 sunny days per year, making it one of the most suitable regions in India for solar energy generation. The state has a solar power potential of approximately 38.5 GW, which is significant considering India's target of 100 GW of solar capacity by 2022.</p>
      
      <h2>Government Initiatives</h2>
      <p>The Andhra Pradesh government has been proactive in promoting solar energy through various policies and incentives. The state's solar policy aims to promote widespread use of solar power in both grid-connected and off-grid applications. Key initiatives include:</p>
      <ul>
        <li>Net metering policies that allow consumers to sell excess solar power back to the grid</li>
        <li>Subsidies for residential and agricultural solar installations</li>
        <li>Dedicated solar parks and special economic zones</li>
        <li>Streamlined approval processes for solar projects</li>
      </ul>
      
      <h2>Growth in Residential Solar</h2>
      <p>Residential solar installations are gaining popularity across Andhra Pradesh as homeowners recognize the long-term economic and environmental benefits. With decreasing solar panel costs and increasing electricity tariffs, the return on investment for residential solar systems has become increasingly attractive.</p>
      <div className="relative w-full h-[250px] md:h-[350px] my-6 rounded-lg overflow-hidden">
        <img src="/images/residential-rooftop-solar.jpg" alt="Residential rooftop solar installation" className="object-cover w-full h-full" />
      </div>
      
      <p>A typical 5kW residential solar system in Andhra Pradesh can:</p>
      <ul>
        <li>Generate approximately 7,300 kWh of electricity annually</li>
        <li>Save homeowners up to ₹70,000 per year on electricity bills</li>
        <li>Pay for itself within 4-5 years</li>
        <li>Provide clean energy for 25+ years</li>
      </ul>
      
      <h2>Commercial and Industrial Applications</h2>
      <p>Businesses across Andhra Pradesh are increasingly turning to solar energy to reduce operational costs and enhance sustainability. Industries with high daytime energy consumption, such as manufacturing, retail, and hospitality, are particularly well-suited for solar adoption.</p>
      
      <p>Commercial solar installations offer numerous benefits:</p>
      <ul>
        <li>Significant reduction in electricity costs</li>
        <li>Protection against future electricity price increases</li>
        <li>Enhanced corporate social responsibility profile</li>
        <li>Reduced carbon footprint</li>
      </ul>
      
      <h2>Agricultural Solar Solutions</h2>
      <p>Agriculture is a vital sector in Andhra Pradesh, and solar energy is revolutionizing farming practices. Solar-powered irrigation systems are helping farmers reduce dependence on diesel generators and unreliable grid electricity.</p>
      
      <p>Benefits of agricultural solar solutions include:</p>
      <ul>
        <li>Elimination of fuel costs for irrigation</li>
        <li>Reliable water supply for crops</li>
        <li>Increased crop yields and farm income</li>
        <li>Reduced carbon emissions</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      <p>Despite the promising outlook, the solar sector in Andhra Pradesh faces several challenges:</p>
      <ul>
        <li>Initial high capital costs</li>
        <li>Limited awareness among potential consumers</li>
        <li>Technical challenges in grid integration</li>
        <li>Land acquisition issues for large-scale projects</li>
      </ul>
      
      <p>However, these challenges also present opportunities for innovation and growth. Emerging technologies such as floating solar plants, solar-wind hybrids, and improved battery storage solutions are opening new avenues for solar deployment.</p>
      
      <h2>Conclusion</h2>
      <p>The future of solar energy in Andhra Pradesh looks bright. With supportive policies, decreasing technology costs, and increasing awareness, solar energy is poised to become a major component of the state's energy mix. As solar adoption continues to grow, it will not only help meet the state's energy needs but also contribute to a cleaner, more sustainable future.</p>
      
      <p>At Kohinoor Enterprises, we are committed to being at the forefront of this solar revolution, providing high-quality solar solutions to homes and businesses across Andhra Pradesh.</p>
    `,
    relatedPosts: [
      {
        slug: "choose-right-solar-panels",
        title: "How to Choose the Right Solar Panels for Your Home",
        excerpt: "A comprehensive guide to selecting the best solar panels based on efficiency, durability, and budget",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        slug: "solar-battery-storage-benefits",
        title: "The Benefits of Solar Battery Storage Systems",
        excerpt: "Discover how battery storage can maximize your solar investment and provide energy security",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  "choose-right-solar-panels": {
    title: "How to Choose the Right Solar Panels for Your Home",
    date: "November 28, 2024",
    readTime: "4 min read",
    author: "Priya Sharma",
    authorRole: "Technical Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    featuredImage: "/images/blog-panel-types.jpg",
    content: `
      <p>Selecting the right solar panels for your home can be overwhelming with so many options available. This guide breaks down the key factors to consider, including panel types, efficiency ratings, warranties, and more.</p>
      
      <h2>Types of Solar Panels</h2>
      <p>There are three main types of solar panels available in the market:</p>
      
      <h3>1. Monocrystalline Solar Panels</h3>
      <p>Monocrystalline panels are made from single-crystal silicon, giving them a uniform black appearance. They are the most efficient and space-effective option but come at a higher price point.</p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Highest efficiency rates (15-22%)</li>
        <li>Space-efficient</li>
        <li>Longest lifespan (25-40 years)</li>
        <li>Better performance in low-light conditions</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher cost</li>
      </ul>
      
      <h3>2. Polycrystalline Solar Panels</h3>
      <p>Polycrystalline panels are made from multiple silicon fragments melted together, giving them a speckled blue appearance. They offer a good balance between cost and efficiency.</p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>More affordable than monocrystalline</li>
        <li>Decent efficiency (13-17%)</li>
        <li>Good lifespan (25-30 years)</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Lower efficiency than monocrystalline</li>
        <li>Requires more space for the same power output</li>
        <li>Slightly lower heat tolerance</li>
      </ul>
      
      <h3>3. Thin-Film Solar Panels</h3>
      <p>Thin-film panels are made by depositing photovoltaic material on a substrate. They are the least efficient but most flexible option.</p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Lowest cost</li>
        <li>Flexible and lightweight</li>
        <li>Better performance in high temperatures</li>
        <li>Less affected by shading</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Lowest efficiency (10-13%)</li>
        <li>Requires the most space</li>
        <li>Shorter lifespan (15-20 years)</li>
      </ul>
      
      <h2>Key Factors to Consider</h2>
      
      <h3>Efficiency</h3>
      <p>Solar panel efficiency refers to how much of the sun's energy the panel can convert into electricity. Higher efficiency means more power generation from the same amount of sunlight, which is particularly important if you have limited roof space.</p>
      
      <h3>Power Output (Wattage)</h3>
      <p>Solar panels are rated by their power output in watts (W), typically ranging from 250W to 400W for residential panels. Higher wattage panels produce more electricity, but the overall system size should be determined by your energy needs.</p>
      
      <h3>Temperature Coefficient</h3>
      <p>Solar panels lose efficiency as they heat up. The temperature coefficient tells you how much efficiency a panel loses for each degree above 25°C (77°F). Look for panels with a lower temperature coefficient, especially in hot climates like Andhra Pradesh.</p>
      
      <h3>Warranty</h3>
      <p>Solar panels typically come with two warranties:</p>
      <ul>
        <li><strong>Product warranty:</strong> Covers defects and failures (typically 10-12 years)</li>
        <li><strong>Performance warranty:</strong> Guarantees power output over time (typically 25 years, with output declining to 80-85% of original capacity)</li>
      </ul>
      <p>Longer warranties generally indicate higher quality and manufacturer confidence in their product.</p>
      
      <h3>Cost and Value</h3>
      <p>While it's tempting to focus solely on the upfront cost, consider the long-term value. More efficient panels may cost more initially but can generate more electricity over their lifetime, resulting in better return on investment.</p>
      
      <h2>Recommended Approach</h2>
      <p>For most homeowners in Andhra Pradesh, we recommend the following approach:</p>
      <ol>
        <li>Calculate your energy needs based on your electricity bills</li>
        <li>Assess your available roof space and orientation</li>
        <li>Consider your budget constraints</li>
        <li>Choose panel type based on these factors:
          <ul>
            <li>Limited space: Monocrystalline</li>
            <li>Balanced approach: Polycrystalline</li>
            <li>Unique installation needs or lowest cost: Thin-film</li>
          </ul>
        </li>
        <li>Compare warranties and manufacturer reputation</li>
        <li>Consult with a professional solar installer for personalized recommendations</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Choosing the right solar panels is a crucial step in your solar journey. By understanding the different types of panels and key factors to consider, you can make an informed decision that meets your energy needs, space constraints, and budget.</p>
      
      <p>At Kohinoor Enterprises, we offer free consultations to help you select the best solar panels for your specific requirements. Our experts will assess your energy needs, roof conditions, and budget to recommend the optimal solution for your home.</p>
    `,
    relatedPosts: [
      {
        slug: "future-of-solar-energy-in-andhra-pradesh",
        title: "The Future of Solar Energy in Andhra Pradesh",
        excerpt:
          "Andhra Pradesh is emerging as a solar powerhouse in India. With abundant sunshine and supportive government policies, the state is witnessing a solar revolution.",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        slug: "solar-panel-maintenance",
        title: "Maintaining Your Solar Panels: Essential Tips",
        excerpt: "Simple maintenance practices to ensure optimal performance of your solar system",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  "solar-battery-storage-benefits": {
    title: "The Benefits of Solar Battery Storage Systems",
    date: "November 10, 2024",
    readTime: "6 min read",
    author: "Venkat Reddy",
    authorRole: "Installation Manager",
    authorImage: "/placeholder.svg?height=100&width=100",
    featuredImage: "/images/blog-battery-technology.jpg",
    content: `<p>Solar battery storage systems are becoming increasingly popular as prices drop and technology improves. Learn how adding battery storage to your solar system can provide backup power during outages and help you maximize self-consumption.</p>

<h2>What is Solar Battery Storage?</h2>
<p>Solar battery storage systems store excess electricity generated by your solar panels during the day for use when the sun isn't shining. This stored energy can power your home during nighttime hours, cloudy days, or power outages.</p>

<h2>Key Benefits of Solar Battery Storage</h2>

<h3>1. Energy Independence</h3>
<p>Battery storage reduces your dependence on the electrical grid. You can use your stored solar energy instead of purchasing electricity from the utility company, especially during peak rate hours when electricity costs more.</p>

<h3>2. Backup Power During Outages</h3>
<p>One of the most valuable benefits is having power during grid outages. Essential appliances like refrigerators, lights, and medical equipment can continue operating using stored solar energy.</p>

<h3>3. Maximize Solar Investment</h3>
<p>Without battery storage, excess solar energy is typically sent back to the grid. With batteries, you can store this energy for later use, maximizing the value of your solar investment.</p>

<h3>4. Time-of-Use Optimization</h3>
<p>In areas with time-of-use electricity rates, you can use stored solar energy during expensive peak hours and charge your batteries during cheaper off-peak times.</p>

<h2>Types of Solar Batteries</h2>

<h3>Lithium-Ion Batteries</h3>
<p>The most popular choice for residential solar storage due to their high efficiency, long lifespan, and compact size. They typically last 10-15 years and require minimal maintenance.</p>

<h3>Lead-Acid Batteries</h3>
<p>A more affordable option but with shorter lifespan and lower efficiency. They require regular maintenance and take up more space.</p>

<h2>Is Battery Storage Right for You?</h2>
<p>Consider solar battery storage if you:</p>
<ul>
  <li>Experience frequent power outages</li>
  <li>Have high electricity rates or time-of-use pricing</li>
  <li>Want to maximize energy independence</li>
  <li>Have critical electrical needs during outages</li>
</ul>

<h2>Conclusion</h2>
<p>Solar battery storage systems offer numerous benefits, from energy independence to backup power during outages. While the initial investment is significant, the long-term savings and peace of mind make it an attractive option for many homeowners.</p>

<p>At Kohinoor Enterprises, we offer comprehensive battery storage solutions tailored to your specific needs and budget. Contact us today to learn more about how battery storage can enhance your solar system.</p>
`,
    relatedPosts: [],
  },
  "solar-panel-maintenance": {
    title: "Maintaining Your Solar Panels: Essential Tips",
    date: "October 22, 2024",
    readTime: "3 min read",
    author: "Venkat Reddy",
    authorRole: "Installation Manager",
    authorImage: "/placeholder.svg?height=100&width=100",
    featuredImage: "/images/blog-maintenance-cleaning.jpg",
    content: `<p>Proper maintenance is key to ensuring your solar panels operate at peak efficiency for decades. This article covers essential maintenance tips, including cleaning methods, inspection schedules, and when to call a professional.</p>

<h2>Why Solar Panel Maintenance Matters</h2>
<p>Solar panels are designed to be low-maintenance, but regular care ensures optimal performance and extends their lifespan. Proper maintenance can prevent efficiency losses and identify potential issues before they become costly problems.</p>

<h2>Regular Cleaning</h2>

<h3>When to Clean</h3>
<p>In Andhra Pradesh's dusty climate, solar panels should be cleaned every 2-4 weeks, or more frequently during dusty seasons. Signs your panels need cleaning include:</p>
<ul>
  <li>Visible dirt, dust, or bird droppings</li>
  <li>Decreased energy production</li>
  <li>Water spots or mineral deposits</li>
</ul>

<h3>How to Clean Safely</h3>
<p>For safety reasons, we recommend professional cleaning, but if you clean them yourself:</p>
<ul>
  <li>Clean early morning or evening when panels are cool</li>
  <li>Use soft brushes and mild soap with water</li>
  <li>Avoid abrasive materials that can scratch the glass</li>
  <li>Never use high-pressure water that could damage seals</li>
</ul>

<h2>Visual Inspections</h2>

<h3>Monthly Checks</h3>
<p>Perform monthly visual inspections looking for:</p>
<ul>
  <li>Cracks or damage to panels</li>
  <li>Loose or corroded connections</li>
  <li>Damaged wiring or conduits</li>
  <li>Vegetation growth that might cause shading</li>
</ul>

<h3>Performance Monitoring</h3>
<p>Monitor your system's energy production regularly. Most modern systems include monitoring apps that track daily, monthly, and yearly production. Significant drops in production may indicate maintenance needs.</p>

<h2>Professional Maintenance</h2>

<h3>Annual Professional Inspections</h3>
<p>Schedule annual professional inspections that include:</p>
<ul>
  <li>Electrical connection testing</li>
  <li>Inverter performance checks</li>
  <li>Structural mounting inspection</li>
  <li>Comprehensive system performance analysis</li>
</ul>

<h3>When to Call Professionals</h3>
<p>Contact professionals immediately if you notice:</p>
<ul>
  <li>Significant drops in energy production</li>
  <li>Physical damage to panels or equipment</li>
  <li>Electrical issues or error messages</li>
  <li>Water damage or leaks</li>
</ul>

<h2>Seasonal Maintenance Tips</h2>

<h3>Monsoon Season</h3>
<p>Before and after monsoon season:</p>
<ul>
  <li>Check and clean drainage systems</li>
  <li>Inspect for water damage</li>
  <li>Ensure proper grounding</li>
</ul>

<h3>Summer Preparation</h3>
<p>During hot summer months:</p>
<ul>
  <li>Monitor system performance more frequently</li>
  <li>Ensure adequate ventilation around equipment</li>
  <li>Check for heat-related expansion issues</li>
</ul>

<h2>Maintenance Costs and Benefits</h2>
<p>Regular maintenance typically costs 1-2% of your system's value annually but can:</p>
<ul>
  <li>Maintain 95%+ of original efficiency</li>
  <li>Extend system lifespan beyond 25 years</li>
  <li>Prevent costly repairs</li>
  <li>Maintain warranty coverage</li>
</ul>

<h2>Conclusion</h2>
<p>Proper maintenance is essential for maximizing your solar investment. While solar panels are low-maintenance, regular cleaning, monitoring, and professional inspections ensure optimal performance for decades.</p>

<p>Kohinoor Enterprises offers comprehensive maintenance packages for all our installations. Our experienced technicians provide regular cleaning, inspections, and repairs to keep your system running at peak efficiency.</p>
`,
    relatedPosts: [],
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="container px-4 md:px-6 py-12 mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
        <p className="mt-4 text-gray-500">The blog post you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6 bg-green-700 hover:bg-green-800">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Link href="/blog" className="flex items-center text-gray-200 hover:text-white mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <div className="space-y-2 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>

      {/* Article Content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Author Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-green-800">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.authorRole}</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Share this article</h3>
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-green max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Related Posts */}
              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                  <h2 className="text-2xl font-bold text-green-800 mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {post.relatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.slug}>
                        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-green-800 mb-2">{relatedPost.title}</h3>
                          <p className="text-gray-500 mb-4">{relatedPost.excerpt}</p>
                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/blog/${relatedPost.slug}`}>
                              Read Article <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and discover how solar energy can benefit your home or
            business.
          </p>
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="919985690350" />
    </div>
  )
}
