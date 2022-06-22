import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { Heading } from '@chakra-ui/react'
type PostLayoutProps = {
  children: React.ReactNode
}

const PostsLayout = ({ children }: PostLayoutProps) => {
  return (

    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Heading as={"h1"} size={"xl"} padding={"6"}>
            <Link to={routes.home()}>Athena</Link>
          </Heading>
      <header className="rw-header">

        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.posts()}
            className="rw-link"
          >
            Posts
          </Link>
        </h1>
        <Link
          to={routes.newPost()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Post
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PostsLayout
