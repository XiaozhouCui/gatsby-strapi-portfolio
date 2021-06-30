import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/Title'
import Seo from '../components/Seo'

const About = ({ data }) => {
  const {
    strapiAbout: { info, stack, title, image },
  } = data
  return (
    <>
      <section className='about-page'>
        <div className='section-center about-center'>
          <img
            src={image.localFile.publicURL}
            alt={title}
            className='about-img'
          />
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
            <div className='about-stack'>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
