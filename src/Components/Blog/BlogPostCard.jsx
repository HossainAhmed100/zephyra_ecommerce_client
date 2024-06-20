import { Image } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom'

function BlogPostCard() {
  return (
    <div className="space-y-4">
    <Image
      src="https://i.ibb.co/cFL8BQ4/NEW-700x430-UOD-480x304.jpg"
      alt="Blog Post 1"
      width={400}
      height={200}
      className="rounded-lg object-cover w-full"
    />
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Blog Post 1</h3>
      <p className="text-muted-foreground line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at augue egestas, scelerisque enim nec,
        aliquam libero.
      </p>
      <Link
        to="/blog/1"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        prefetch={false}
      >
        Read More
        <FiArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
  )
}

export default BlogPostCard