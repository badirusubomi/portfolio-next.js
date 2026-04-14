import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olasubomi Badiru Portfolio",
    short_name: "Badiru Portfolio",
    description: "Professional portfolio of Olasubomi Badiru, AI and Web Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#f5a623",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
