import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/Title'
import Seo from '../components/Seo'

const About = ({ data }) => {
  const {
    // strapiAbout: { info, stack, title, image },
    strapiAbout: { stack, title, image },
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
              I am a passionate full stack developer with more than 3 years of
              commercial experience in web development, I am also an AWS
              Certified Solutions Architect - Associate.
            </p>
            <p>
              I have extensive experience in JavaScript frameworks and
              libraries, with working knowledge in C# and Python. I am also
              familiar with DevOps technologies such as CI/CD pipelines and
              Infrastructure as Code.
            </p>
            <p>
              As a former process engineer, I worked in the oil and gas industry
              for over 8 years, and developed very strong problem-solving
              skills.
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
