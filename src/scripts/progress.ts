export const PROGRESS_STORAGE_KEY = "ypca-course-progress-v1";

export interface CourseProgressRecord {
  schemaVersion: 1;
  courseSlug: string;
  completedLessons: string[];
  artifacts: Record<string, boolean>;
  lastVisitedLesson?: string;
  updatedAt: string;
}

export interface CourseProgressSummary {
  percent: number;
  completed: number;
  total: number;
  lastVisitedLesson?: string;
}

function readStore(): Record<string, CourseProgressRecord> {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, CourseProgressRecord>) {
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new CustomEvent("ypca-progress-change"));
}

function emptyRecord(courseSlug: string): CourseProgressRecord {
  return {
    schemaVersion: 1,
    courseSlug,
    completedLessons: [],
    artifacts: {},
    updatedAt: new Date().toISOString()
  };
}

export function getCourseRecord(courseSlug: string): CourseProgressRecord {
  return readStore()[courseSlug] || emptyRecord(courseSlug);
}

export function visitLesson(courseSlug: string, lessonSlug: string) {
  const store = readStore();
  const record = store[courseSlug] || emptyRecord(courseSlug);
  record.lastVisitedLesson = lessonSlug;
  record.updatedAt = new Date().toISOString();
  store[courseSlug] = record;
  writeStore(store);
}

export function setLessonComplete(courseSlug: string, lessonSlug: string, complete: boolean) {
  const store = readStore();
  const record = store[courseSlug] || emptyRecord(courseSlug);
  const lessons = new Set(record.completedLessons);
  if (complete) lessons.add(lessonSlug);
  else lessons.delete(lessonSlug);
  record.completedLessons = [...lessons];
  record.updatedAt = new Date().toISOString();
  store[courseSlug] = record;
  writeStore(store);
  return record;
}

export function setArtifactComplete(courseSlug: string, artifactKey: string, complete: boolean) {
  const store = readStore();
  const record = store[courseSlug] || emptyRecord(courseSlug);
  record.artifacts[artifactKey] = complete;
  record.updatedAt = new Date().toISOString();
  store[courseSlug] = record;
  writeStore(store);
  return record;
}

export function resetCourseProgress(courseSlug: string) {
  const store = readStore();
  delete store[courseSlug];
  writeStore(store);
}

export function summarizeCourse(courseSlug: string, total: number): CourseProgressSummary {
  const record = getCourseRecord(courseSlug);
  const completed = record.completedLessons.length;
  return {
    percent: total ? Math.round(completed / total * 100) : 0,
    completed,
    total,
    lastVisitedLesson: record.lastVisitedLesson
  };
}

export function getAllCourseProgress(totals: Record<string, number>): Record<string, CourseProgressSummary> {
  const store = readStore();
  return Object.fromEntries(Object.entries(store).map(([slug, record]) => {
    const total = totals[slug] || 0;
    const completed = record.completedLessons?.length || 0;
    return [slug, { percent: total ? Math.round(completed / total * 100) : 0, completed, total, lastVisitedLesson: record.lastVisitedLesson }];
  }));
}
