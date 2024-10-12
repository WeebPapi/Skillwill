import React from "react"
import { axiosInstance } from "../axiosInstance"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const navigate = useNavigate()
  const [variant, setVariant] = React.useState("Registration")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const onSubmit = (formData: { email: string; password: string }) => {
    axiosInstance
      .post(variant.toLowerCase(), formData)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.accessToken)

        navigate("/")
      })
      .catch((err) => console.error(err))
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit({ email, password })
        }}
      >
        <h1>{variant}</h1>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <label htmlFor="password">Email</label>
        <input
          name="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button type="submit">{variant}</button>
      </form>
      <div className="variants">
        <button
          type="button"
          onClick={() => {
            setVariant("Login")
          }}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => {
            setVariant("Registration")
          }}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Auth
