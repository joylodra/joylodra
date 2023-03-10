import { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export const metadata: Metadata = {
  title: "blog",
  description: "i write about tech, books, & self-improvement",
};

const Blog = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-serif tracking-tighter">blog</h1>

      {allBlogs
        .sort((a, b) => {
          return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col gap-3"
            href={`/blog/${post.slug}`}
          >
            <div>
              <h3 className="text-bold font-bold hover:underline">
                {post.title}
              </h3>
              <p className="opacity-50">
                {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
              </p>
            </div>

            {/* <p className="text-sm opacity-50 italic">290,021 views</p> */}
          </Link>
        ))}
    </div>
  );
};

export default Blog;
