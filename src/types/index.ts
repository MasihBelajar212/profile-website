export type IconName =
  | "html"
  | "js"
  | "react"
  | "node"
  | "database"
  | "tailwind"
  | "git"
  | "figma"
  | "test";

export interface TechItem {
  name: string;
  category: string;
  icon: IconName;
}

export type ThumbnailKey = "ecommerce" | "dashboard" | "company";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: ThumbnailKey;
  href: string;
}
