import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/sanity.queries";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

export async function generateMetadata(
  props: PageProps<"/project/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `/project/${slug}`,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.thumbnail],
    },
    alternates: {
      canonical: `/project/${slug}`,
    },
  };
}

export default async function ProjectPage(
  props: PageProps<"/project/[slug]">
) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* ── Back link ── */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors duration-300 mb-12 group text-sm"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Portfolio
        </Link>

        {/* ── Header ── */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl">
            {project.summary}
          </p>

          {/* ── Links ── */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium rounded-full hover:bg-accent transition-all duration-300 text-sm"
              >
                Live Site
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-foreground-muted hover:text-accent hover:border-accent transition-all duration-300 text-sm"
              >
                Source Code
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </header>

        {/* ── Thumbnail ── */}
        <div className="glass-card overflow-hidden mb-16">
          <div
            className="w-full aspect-video bg-surface"
            style={{
              backgroundImage: `url(${project.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* ── Body ── */}
        <article className="prose-custom mb-20">
          {project.body.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-foreground-muted leading-relaxed mb-6 text-base"
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* ── Screenshot Gallery ── */}
        {project.screenshots.length > 0 && (
          <section>
            <h2 className="font-mono text-xs text-accent tracking-widest uppercase mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {project.screenshots.map((src, i) => (
                <div key={i} className="glass-card overflow-hidden">
                  <div
                    className="w-full aspect-video bg-surface"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
