import type { MetadataRoute } from "next";
import { productionUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${productionUrl}/sitemap.xml` };
}
