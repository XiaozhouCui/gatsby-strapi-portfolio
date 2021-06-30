import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title='Projects' />
      <main>
        <section className='projects-page'>
          <Projects title='all projects' projects={projects} />
        </section>
      </main>
    </>
  )
}

// response will be passed into ProjectsPage as props
export const query = graphql`
  {
    allStrapiProjects(sort: { fields: created_at, order: DESC }) {
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

export default ProjectsPage
