'use server'

interface CourseCompletionEmailParams {
  email: string
  courseTitle: string
  score: number
  total: number
  orgSlug: string
}


// TODO: Add email provider etc.

export async function sendCourseCompletionEmail(
  params: CourseCompletionEmailParams
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not set – skipping course completion email')
    return
  }

  const { email, courseTitle, score, total, orgSlug } = params
  const percentage = Math.round((score / total) * 100)

  // Dynamisk import slik at manglende pakke ikke krasjer hele appen
  const { Resend } = await import('resend')
  const resend = new Resend(apiKey)

  await resend.emails.send({
    from: 'SmartMaking <noreply@smartmaking.no>',
    to: email,
    subject: `Du har bestått kurset: ${courseTitle}`,
    html: `
      <h1>Gratulerer!</h1>
      <p>Du har fullført og bestått kurset <strong>${courseTitle}</strong>.</p>
      <p>Resultat: ${score} av ${total} riktige (${percentage}%)</p>
      <p>Organisasjon: ${orgSlug}</p>
      <br/>
      <p>Med vennlig hilsen<br/>SmartMaking-teamet</p>
    `,
  })
}
