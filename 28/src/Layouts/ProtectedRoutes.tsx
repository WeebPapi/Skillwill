import React, { useEffect } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const ProtectedRoutes = () => {
  const token = useSelector<RootState>((state) => state.token)
  const [authorized, setAuthorized] = React.useState(token ? true : false)

  return <>{authorized ? <Outlet /> : <Navigate to={"/authorization"} />}</>
}

export default ProtectedRoutes
