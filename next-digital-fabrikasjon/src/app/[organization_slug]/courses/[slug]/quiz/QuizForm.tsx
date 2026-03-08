'use client'

import { useState } from 'react'
import { submitQuiz } from '@/lib/course/quiz'
import type { QuizQuestion } from '@/lib/sanity/queries/course'

interface QuizFormProps {
  orgSlug: string
  courseSlug: string
  courseTitle: string
  questions: QuizQuestion[]
  passingScore: number
}

export function QuizForm({
  orgSlug,
  courseSlug,
  courseTitle,
  questions,
  passingScore,
}: QuizFormProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  )
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{
    passed: boolean
    score: number
    total: number
    percentage: number
  } | null>(null)
  const [email, setEmail] = useState('')
  const [emailSaved, setEmailSaved] = useState(false)
  const [emailError, setEmailError] = useState('')

  const allAnswered = answers.every((a) => a !== null)

  async function handleSubmit() {
    if (!allAnswered) return
    setSubmitting(true)
    try {
      const res = await submitQuiz(orgSlug, courseSlug, answers as number[], '')
      setResult(res)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleSaveEmail() {
    if (!email.includes('@')) {
      setEmailError('Skriv inn en gyldig e-postadresse')
      return
    }
    setEmailError('')
    setSubmitting(true)
    try {
      await submitQuiz(orgSlug, courseSlug, answers as number[], email)
      setEmailSaved(true)
    } finally {
      setSubmitting(false)
    }
  }

  function handleRetry() {
    setAnswers(Array(questions.length).fill(null))
    setResult(null)
    setEmail('')
    setEmailSaved(false)
  }

  // Result screen
  if (result) {
    return (
      <div className="flex flex-col gap-2 text-left">
        <h2 className="text-2xl font-bold">Resultat</h2>
        <span className="h-1 w-full bg-[#488B90]" />

        <div className="mt-8">
          <p
            className={`text-2xl font-bold ${result.passed ? 'text-green-700' : 'text-red-600'}`}
          >
            {result.passed ? 'Bestått!' : 'Ikke bestått'}
          </p>
          <p className="mt-2 text-lg text-black">
            Du fikk {result.score} av {result.total} riktige ({result.percentage}%).
          </p>
          <p className="text-sm text-gray-500">
            Kravet er {passingScore}% riktige for å bestå.
          </p>
        </div>

        {result.passed && !emailSaved && (
          <div className="mt-8 flex flex-col gap-3">
            <p className="font-semibold text-black">
              Skriv inn e-postadressen din for å lagre fullføringen:
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@epost.no"
              className="rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#214C50]"
              aria-label="E-postadresse"
            />
            {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            <button
              onClick={handleSaveEmail}
              disabled={submitting}
              className="w-fit rounded-2xl bg-[#214C50] px-8 py-3 text-base font-bold text-white shadow hover:bg-[#488B90] transition disabled:opacity-50"
            >
              {submitting ? 'Lagrer…' : 'Lagre fullføring'}
            </button>
          </div>
        )}

        {result.passed && emailSaved && (
          <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-green-700 font-semibold">
            Fullføringen er lagret. Sjekk e-posten din for bekreftelse!
          </p>
        )}

        {!result.passed && (
          <button
            onClick={handleRetry}
            className="mt-8 w-fit rounded-2xl bg-[#E69138] px-10 py-3 text-base font-bold text-white shadow hover:bg-[#d47e20] transition"
          >
            Prøv igjen
          </button>
        )}
      </div>
    )
  }

  // Quiz screen
  return (
    <div>
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-bold">Quiz – {courseTitle}</h2>
        <span className="h-1 w-full bg-[#488B90]" />
      </div>

      <p className="mb-8 ml-4 text-lg font-medium text-black">
        Besvar alle {questions.length} spørsmål og trykk «Sjekk svar».
        Du må få {passingScore}% riktige for å bestå.
      </p>

      <div className="ml-4 w-full max-w-4xl space-y-8">
        {questions.map((q, i) => (
          <div key={q._key} className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-black">
              Spørsmål {i + 1}: {q.question}
            </p>

            <div className="flex flex-wrap gap-4">
              {q.options.map((option, optIndex) => (
                <button
                  key={optIndex}
                  type="button"
                  onClick={() => {
                    const updated = [...answers]
                    updated[i] = optIndex
                    setAnswers(updated)
                  }}
                  className={`rounded-lg px-10 py-3 text-base font-bold shadow-sm transition ${
                    answers[i] === optIndex
                      ? 'bg-[#214C50] text-white'
                      : 'bg-[#C2D8DA] text-[#214C50] hover:bg-[#9FBBBE]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 ml-4 flex">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered || submitting}
          className="rounded-md bg-[#214C50] px-8 py-3 text-white shadow hover:bg-[#122B2D] transition disabled:opacity-40"
        >
          {submitting ? 'Sjekker…' : 'Sjekk svar'}
        </button>
      </div>
    </div>
  )
}
