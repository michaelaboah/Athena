import { Link, routes } from "@redwoodjs/router"
import { useAuth } from '@redwoodjs/auth'
import { Button, Wrap, Tag, Box, WrapItem, Avatar, Heading, Tab, Tabs, TabList } from '@chakra-ui/react'

type MainNavLayoutProps = {
  children?: React.ReactNode
}

const MainNavLayout = ({ children }: MainNavLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header style={{margin: "1%"}}>
      <div className="flex-between">
          <Heading as={"h1"} size={"xl"}>
            <Link to={routes.home()}>Athena</Link>
          </Heading>
          {isAuthenticated ? (
            <>
              <Wrap>
                <Tag>Logged in as {currentUser.email}</Tag>{' '}
                  <WrapItem>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                  </WrapItem>
                  <Button type="button" onClick={logOut}>Logout</Button>
              </Wrap>
            </>
          ) : (
            <Box>
              <Button marginRight={2}>
                <Link to={routes.login()}>Login</Link>
              </Button>
              <Button>
                <Link to={routes.signup()}>Sign Up</Link>
              </Button>
            </Box>
          )}
        </div>
        <Tabs>
          <TabList>
            <Tab>
              <Link to={routes.home()}>Home</Link>
            </Tab>
            <Tab>
              <Link to={routes.about()}>About</Link>
            </Tab>
            <Tab>
              <Link to={routes.contact()}>Contact</Link>
            </Tab>
            {isAuthenticated ? (
              <>
                <Tab>
                  <Link to={routes.posts()}>Posts</Link>
                </Tab>
                <Tab>
                  <Link to={routes.subDatabases()}>Databases</Link>
                </Tab>
              </>
        ): (
          <></>
        ) }
          </TabList>



        </Tabs>

        <div>

        </div>

      </header>
      <main style={{margin: "1%"}}>{children}</main>
    </>
  )
}

export default MainNavLayout
