import { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/sanity.queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://badiru.io";

  // Static routes
  const routes = [
    "",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  // Dynamic project routes
  const projects = await getAllProjects();
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug.current}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
