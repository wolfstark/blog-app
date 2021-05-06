import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <div className="prose fixed right-0 top-0 bottom-0 shadow-lg py-10 px-5 bg-gray-50">
        <h3>Contents</h3>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/markdown">markdown</Link>
          </li>
        </ul>
      </div>
      <footer className="fixed">© {new Date().getFullYear()} wenxi</footer>
    </div>
  )
}

export default Layout
