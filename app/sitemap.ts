import type { MetadataRoute } from "next";
import { cleaningServices, constructionServices } from "./data";

const baseUrl = "https://www.jasedas.com";
const staticRoutes = [
  "",
  "/about",
  "/construction",
  "/cleaning",
  "/projects",
  "/team",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = [
    ...constructionServices.map((service) => `/construction/${service.slug}`),
    ...cleaningServices.map((service) => `/cleaning/${service.slug}`),
  ];

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.65 : 0.8,
  }));
}
