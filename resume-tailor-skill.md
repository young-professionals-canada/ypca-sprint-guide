---
name: resume-tailor
description: "Use this skill whenever I paste a job posting and ask you to tailor my resume for it. Requires my Master Profile and my base resume to already be available in this conversation (attached as files). Analyzes the job posting, rewrites resume bullets for maximum relevance and ATS match, and produces a complete tailored resume as a downloadable Word (.docx) file. Never fabricates facts, numbers, or skills, everything must trace back to my Master Profile."
---

# Resume Tailor

## Purpose

Given a job posting, rewrite my resume so it speaks directly to that role, using only real, verified facts from my Master Profile, and deliver the result as a complete Word document I can download and send.

## Inputs Required

1. **My Master Profile** — a Markdown file, attached in this conversation. This is the only source of truth for facts, numbers, tools, and keywords.
2. **My base resume** — a Word document, attached in this conversation. This is the structure and formatting to match.
3. **A job posting** — pasted as plain text by me when I want a resume tailored.

If either my Master Profile or my base resume is missing from the conversation, ask me to attach it before doing anything else. Do not proceed on memory alone.

---

## Step 1 — Read My Master Profile First

Before anything else, read my entire attached Master Profile. It is the only source of truth. Note the Guardrails section and every entry's "Do not claim" notes, these apply for the whole rewrite.

## Step 2 — Extract & Rank Job Requirements

Read the job posting and identify the top 10 to 15 skills, tools, and competencies it's asking for. Weigh:
- Anything in the job title or first paragraph more heavily
- "Required" over "preferred"
- Both hard skills (tools, certifications, methods) and clearly emphasized soft skills

Note which of these are completely missing from my current resume, those are the highest priority to address.

## Step 3 — Identify the Highest-Impact Changes

Scan my base resume's bullets and find the ones with the most room to improve against this specific posting: bullets that are vague where the posting is specific, bullets using weak verbs, bullets that leave out a keyword I clearly have relevant experience for based on my Master Profile.

## Step 4 — Rewrite

Rewrite the bullets that need it. Rules:
- **Never invent** a number, tool, responsibility, or outcome that isn't in my Master Profile. If a bullet can't be improved without fabricating, leave it as is and say so.
- **Never change a real number.** Numbers are facts, not style choices.
- **Front-load keywords** — the first few words of a bullet matter most for ATS scanning.
- **Use the job posting's own language** wherever it accurately describes what I actually did.
- **Strong action verbs**, no filler, each bullet should show an action and a result where possible.
- Respect every Guardrail and "Do not claim" note from my Master Profile without exception.
- If my template has a Skills line or section, reorder and trim it so the most job-relevant skills lead, pulling only from my Master Profile's verified skills, never adding one that isn't listed there.
- If my Master Profile has multiple projects or experiences that could fill a flexible section (like a Projects line), choose whichever one best matches this posting's primary focus.

## Step 5 — Score It

Count how many of the top-ranked keywords from Step 2 now appear in the tailored resume. Express this as a score out of 100. Note any high-priority keyword you could not honestly work in, that's a real gap, not a failure to hide.

## Step 6 — Deliver

Produce the complete tailored resume as a downloadable Word (.docx) file, matching my base resume's structure and formatting as closely as possible. Then give me a short summary, no more than 4 to 5 lines:
- How many bullets changed and where
- Any section reordered or rebalanced
- The ATS match score out of 100
- Any keyword gaps that couldn't be honestly addressed

Nothing else, no long breakdown, no bullet-by-bullet comparison table unless I ask for one.

---

## Tone & Style Rules

- Be direct and efficient, I want the finished resume, not a lengthy explanation
- Maintain one consistent, professional voice across every bullet
- Never use em dashes in bullet text, restructure the sentence instead
- If something in my Master Profile is marked "Not yet provided" (like phone or dates), leave the matching spot in the resume as a clear placeholder such as [ADD PHONE] rather than guessing or leaving it silently blank
