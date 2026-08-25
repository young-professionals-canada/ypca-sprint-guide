import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const resourceSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(["download", "external", "page"]).default("download")
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/courses" }),
  schema: z.object({
    slug: z.string(),
    number: z.string(),
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    level: z.string(),
    guidedMinutes: z.number(),
    buildTime: z.string(),
    outcomes: z.array(z.string()),
    prerequisites: z.array(z.string()),
    accent: z.enum(["coral", "teal", "purple"]),
    modules: z.array(z.object({
      title: z.string(),
      description: z.string(),
      lessons: z.array(z.string())
    })),
    resources: z.array(resourceSchema).default([])
  })
});

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    course: z.string(),
    slug: z.string(),
    number: z.number(),
    title: z.string(),
    objective: z.string(),
    minutes: z.number(),
    module: z.string(),
    diagram: z.string().optional(),
    diagramAlt: z.string().optional(),
    activityTitle: z.string(),
    activitySteps: z.array(z.string()),
    artifacts: z.array(z.string()),
    resources: z.array(resourceSchema).default([]),
    prompt: z.object({
      title: z.string(),
      text: z.string()
    }).optional()
  })
});

export const collections = { courses, lessons };
