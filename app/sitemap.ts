import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { productionUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/cv-certificates", ...projects.map(({ slug }) => `/projects/${slug}`)];
  return paths.map((path) => ({ url: new URL(path, productionUrl).href }));
}
