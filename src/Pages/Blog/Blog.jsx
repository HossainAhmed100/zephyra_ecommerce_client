import { Chip, Image } from "@nextui-org/react"
import { Link } from "react-router-dom"
import BlogPostCard from "../../Components/Blog/BlogPostCard"

export default function Blog() {
    const cetegoryList = [
        {key: "fashion", label: "Fashion"},
        {key: "tech", label: "Tech"},
        {key: "lifestyle", label: "Life Style"},
        {key: "travel", label: "Travel"},
        {key: "gadget", label: "Gadget"},
        {key: "kitchen", label: "Kithcen"},
    ];
    const tagList = [
        {key: "ecommerce", label: "Ecommerce"},
        {key: "shopping", label: "Shopping"},
        {key: "trends", label: "Trends"},
        {key: "inspiration", label: "Inspiration"},
    ]
  return (
    <div className="max-w-6xl m-auto">
      <header className="py-6 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-4">
              <Image
                src="https://i.ibb.co/cFL8BQ4/NEW-700x430-UOD-480x304.jpg"
                alt="Featured Blog Post"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full aspect-[4/2]"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Featured Blog Post</h1>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at augue egestas, scelerisque enim
                  nec, aliquam libero.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {
                    cetegoryList.map((category) => (
                      <Link
                        key={category.key}
                        to={"/blog"}
                        className="rounded-md bg-muted py-2 text-sm font-medium transition-colors hover:bg-muted-foreground hover:text-muted"
                        prefetch={false}
                      >
                         <Chip variant="flat">{category.label}</Chip>
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {
                      tagList.map((tag) => (
                        <Link
                          key={tag.key}
                          to={"/blog"}
                          className="rounded-md bg-muted py-2 text-sm font-medium transition-colors hover:bg-muted-foreground hover:text-muted"
                          prefetch={false}
                        >
                            <Chip variant="flat">#{tag.label}</Chip>
                        </Link>
                      ))
                    }
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </main>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
