
"use client"
import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

function stripHtml(html) {
  return html.replace(/<[^>]*>?/gm, '');
}


export default function NewsPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true)
      setError(null)
      try {
        const RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/capital-market"
        const res = await fetch(RSS_URL)
        if (!res.ok) throw new Error(`Failed to fetch RSS feed: ${res.statusText}`)
        const data = await res.json()
        const articles = data.items.map(item => ({
          title: item.title,
          excerpt: stripHtml(item.description).substring(0, 150) + '...',
          author: item.author,
          date: new Date(item.pubDate).toLocaleDateString("en-US", {
            year: 'numeric', month: 'long', day: 'numeric'
          }),
          image: item.thumbnail,
          link: item.link,
          category: item.categories.find(cat => cat === "capital-market") || "Finance",
        }))
        setArticles(articles)
      } catch (err) {
        setError(err.message)
        setArticles([])
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <img
          src="/news.png"
          alt="News"
          className="absolute inset-0 w-full h-full object-cover z-0 blur-sm"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-balance drop-shadow-lg">
              Stay Informed with <span className="text-yellow-400">Expert Analysis</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto text-pretty drop-shadow">
              Get the latest market insights, investment strategies, and economic analysis from our team of financial
              experts to make informed investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles from Medium</h2>
            <div className="w-12 h-1 bg-primary rounded"></div>
          </div>

          {loading ? (
            <div className="text-center text-muted-foreground py-12">Loading articles...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-12">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <Card className="border-border group-hover:border-primary/20 transition-colors h-full flex flex-col">
                    <div className="relative h-48">
                      <img
                        src={article.image || "/placeholder.svg?height=200&width=400"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground text-balance group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex flex-col items-start">
                          <span>{article.author}</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <div
                        className="w-full flex justify-between items-center text-sm text-primary group-hover:text-primary/80 font-semibold"
                      >
                        Read on Medium
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}