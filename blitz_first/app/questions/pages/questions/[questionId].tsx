import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import getQuestion from "app/questions/queries/getQuestion"
import deleteQuestion from "app/questions/mutations/deleteQuestion"
import updateChoice from "app/choices/mutations/updateChoice";

export const Question = () => {
  const router = useRouter()
  const questionId = useParam("questionId", "number")
  const [question] = useQuery(getQuestion, { where: { id: questionId } })

  const handleVote = async (id, votes) => {
    try {
      const updated = await updateChoice({
        where: {id},
        data: {votes: votes + 1},
      })
      alert("Success!" + JSON.stringify(updated))
    } catch (error) {
      alert("Error creating question " + JSON.stringify(error, null, 2))
    }
  }

  return (
    <div>
      <h1>Question {question.id}</h1>
      <h2>{question.text}</h2>
      <ul>
        {question.choices.map((choice) => (
          <li key={choice.id}>
            {choice.text} - {choice.votes} votes
            <button onClick={() => handleVote(choice.id, choice.votes)}>Vote</button>
          </li>
        ))}
      </ul>

      {
        <Link href="/questions/[questionId]/edit" as={`/questions/${question.id}/edit`}>
          <button>Edit</button>
        </Link>
      }

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteQuestion({ where: { id: question.id } })
            router.push("/questions")
          }
        }}
      >
        Delete
      </button>

      <p>
        <pre>For Debug</pre>
        <pre>{JSON.stringify(question, null, 2)}</pre>
      </p>

    </div>
  )
}

const ShowQuestionPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Question</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          {
            <Link href="/questions">
              <a>Questions</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Question />
        </Suspense>
      </main>
    </div>
  )
}

export default ShowQuestionPage
