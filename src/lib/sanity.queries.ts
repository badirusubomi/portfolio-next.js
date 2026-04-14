import { getClient } from "./sanity.client";
import { projects as mockProjects, type Project } from "./mockData";

const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  "thumbnail": thumbnail.asset->url,
  "screenshots": screenshots[].asset->url,
  summary,
  body,
  tags,
  liveUrl,
  sourceUrl
}`;

const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  "thumbnail": thumbnail.asset->url,
  "screenshots": screenshots[].asset->url,
  summary,
  body,
  tags,
  liveUrl,
  sourceUrl
}`;

export async function getAllProjects(): Promise<Project[]> {
  const client = getClient();
  if (!client) return mockProjects;
  return client.fetch(ALL_PROJECTS_QUERY);
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  const client = getClient();
  if (!client) {
    return mockProjects.find((p) => p.slug.current === slug) || null;
  }
  return client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
}
