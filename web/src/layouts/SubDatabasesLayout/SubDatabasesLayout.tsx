import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { Heading } from "@chakra-ui/react"
type SubDatabaseLayoutProps = {
  children: React.ReactNode
}

const SubDatabasesLayout = ({ children }: SubDatabaseLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Heading as={"h1"} size={"xl"} padding={"6"}>
            <Link to={routes.home()}>Athena</Link>
          </Heading>
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.subDatabases()}
            className="rw-link"
          >
            SubDatabases
          </Link>
        </h1>
        <Link
          to={routes.newSubDatabase()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New SubDatabase
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default SubDatabasesLayout
