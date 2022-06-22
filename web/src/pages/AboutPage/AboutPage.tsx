import {Heading } from "@chakra-ui/react"
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <Heading as={"h2"} size={"md"}>About Athena</Heading>
      <p>
        Athena was a capstone project created by three students in their final year.
        Aimed at providing a centralized source for members of a communtiy to build a database for their specific needs.
        Athena fills in a gap sorely needed.
      </p>
    </>
  )
}

export default AboutPage
