import { notFound, redirect } from "next/navigation";
import { blogPosts } from "../../../data";
import { BlogListing, PAGE_SIZE } from "../../blog-listing";

const pageCount = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));
const parsePage = (value: string) => {
  if (!/^[1-9]\d*$/.test(value)) return null;
  const page = Number(value);
  return Number.isSafeInteger(page) && page <= pageCount ? page : null;
};

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: rawPage } = await params;
  const page = parsePage(rawPage);
  if (!page) notFound();
  if (page === 1)
    return {
      title: "Blog",
      description: "Guides for planning Philippines-based payroll staffing.",
      alternates: { canonical: "https://outsourcepayrollcompany.com/blog" },
    };
  return {
    title: `Blog — Page ${page}`,
    description: "Guides for planning Philippines-based payroll staffing.",
    alternates: {
      canonical: `https://outsourcepayrollcompany.com/blog/page/${page}`,
    },
  };
}

export default async function NumberedBlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: rawPage } = await params;
  const page = parsePage(rawPage);
  if (!page) notFound();
  if (page === 1) redirect("/blog");
  return <BlogListing page={page} />;
}
