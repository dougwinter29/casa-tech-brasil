import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SmartFindsSection from "@/components/home/SmartFindsSection";
import FutureHomeSection from "@/components/home/FutureHomeSection";
import FeaturedPostsSection from "@/components/home/FeaturedPostsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { getFeaturedPosts, getRecentPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(4);
  const recentPosts = getRecentPosts(6);
  const postsToShow = featuredPosts.length >= 4 ? featuredPosts : recentPosts;

  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <FutureHomeSection />
      <SmartFindsSection />
      <FeaturedPostsSection posts={postsToShow} />
      <NewsletterSection />
    </>
  );
}
