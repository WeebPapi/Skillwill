import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <nav style={{ position: "absolute", top: "0" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/hello"}>Hello</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
