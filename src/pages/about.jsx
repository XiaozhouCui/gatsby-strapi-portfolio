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
            <p>I am a passionate full stack developer with nearly 3 years of commercial experience in web development, I am also an AWS Certified Solutions Architect - Associate.</p>
            <p>I have extensive experience in React and Node.js, with growing exposure to C# and .NET. I always keep learning new technologies and industry best practices.</p>
            <p>As a former process engineer, I worked in the oil and gas industry for over 8 years, and developed very strong problem-solving skills.</p>
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
