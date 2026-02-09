const Prompt = (resumeText, jdText) => {
  return `
You are an ATS (Applicant Tracking System) resume evaluator.

Analyze the RESUME against the JOB DESCRIPTION below for any job role.

Return ONLY valid JSON.
Do not include explanations, markdown, or extra text.

JSON format:
{
  "matchScore": number,
  "matchedKeywords": string[],
  "missingKeywords": string[],
  "strengths": string[],
  "improvementSuggestions": string[]
}

RESUME:
${resumeText}

JOB DESCRIPTION:
${jdText}
`};

export default Prompt;
