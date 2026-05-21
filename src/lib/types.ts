export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastModified?: string;
  author: string;
  authorBio?: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: number;
  featured?: boolean;
  content: string;
  keywords?: string[];
  relatedPosts?: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  affiliateUrl: string;
  store: "mercadolivre" | "amazon" | "americanas" | "magazine";
  category: string;
  pros?: string[];
  cons?: string[];
  badge?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  postCount?: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
