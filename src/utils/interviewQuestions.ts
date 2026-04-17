type InterviewNote = {
  question: string
  answer: string
}

/* Internal prep notes for walkthroughs. Keeping these outside core UI keeps
   components clean while preserving technical talking points in the codebase. */
export const systemDesignNotes: InterviewNote[] = [
  {
    question: 'Why RTK Query for mocked data?',
    answer:
      'It demonstrates cache ownership, endpoint contracts, invalidation, loading states, and future backend portability.',
  },
  {
    question: 'Why lazy route modules?',
    answer:
      'They split pages by intent so first paint is not forced to download every portfolio section.',
  },
  {
    question: 'State versus refs?',
    answer:
      'State models render-affecting data; refs model mutable DOM or instance values that should not trigger rerenders.',
  },
]
