import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title='featured projects' showLink projects={projects} />
      </main>
    </>
  )
}

// display featured projects on home page
// query response will be passed to the above IndexPage component as { data } props
export const query = graphql`
  {
    allStrapiProjects(
      filter: { featured: { eq: true } }
      sort: { fields: created_at, order: DESC }
    ) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default IndexPage
