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
      <Seo title='About' />
      <section className='about-page'>
        <div className='section-center about-center'>
          <img
            src={image.localFile.publicURL}
            alt={title}
            className='about-img'
          />
          <article className='about-text'>
            <Title title={title} />
            <p>
              I am a full stack developer and AWS Certified Solutions Architec -
              Associate, with 3 years of commercial experience.
            </p>
            <p>
              My recent projects mainly focus on React and Node.js, I am also
              familiar with .NET and Angular. I spent most of my spare time
              learning new technologies and industry best practices.
            </p>
            <p>
              As a career changer, I had worked in the oil and gas industry for
              more than 8 years as a professional engineer, and developed very
              strong problem solving skills.
            </p>
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
