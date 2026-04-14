import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      description: "A short 2-sentence hook for the card view.",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "body",
      title: "Detailed Write-up",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "liveUrl",
      title: "Live Link",
      type: "url",
    }),
    defineField({
      name: "sourceUrl",
      title: "Source Link",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail",
    },
  },
});
