import { Link, routes } from "@redwoodjs/router"

type MainNavLayoutProps = {
  children?: React.ReactNode
}

const MainNavLayout = ({ children }: MainNavLayoutProps) => {
  return (<>
    <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    <main>{children}</main>
  </>)
}

export default MainNavLayout
