import { ReactNode } from "react"
import {
  useLoaderData,
  Form,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom"

const Hello = () => {
  const data = useLoaderData()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      Hello
      <h1>{data as string}</h1>
      <Form method="post" action="/submitted">
        <label htmlFor="first">First Name</label>
        <input type="text" name="first" placeholder="Enter First Name" />
        <label htmlFor="last">Last Name</label>
        <input type="text" name="last" placeholder="Enter Last Name" />
        <button>Submit</button>
      </Form>
    </div>
  )
}

export const submitAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData()
  const submission = { first: data.get("first"), last: data.get("last") }
  console.log(submission)
  return redirect("/")
}

export default Hello
