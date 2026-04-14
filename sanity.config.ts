import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./src/sanity/schemas/project";

export default defineConfig({
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1t3o8jqy", // fallback or any string so it doesn't crash if not provided
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Portfolio Admin",

  plugins: [structureTool()],

  schema: {
    types: [project],
  },
});
