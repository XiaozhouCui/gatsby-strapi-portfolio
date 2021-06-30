import React from 'react'
import Title from './Title'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const query = graphql`
  {
    allStrapiJobs {
      nodes {
        position
        company
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return <h2>jobs component</h2>
}

export default Jobs
