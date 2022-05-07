import React from 'react'
import { FaCode, FaServer, FaCloud } from 'react-icons/fa'
const services = [
  {
    id: 1,
    icon: <FaCode className='service-icon' />,
    title: 'frontend development',
    text: `React, TypeScript, Redux, MobX, axios, Webpack, Gatsby.js, Angular, Responsive Layout, HTML, CSS, JavaScript ES6+, jQuery`,
  },
  {
    id: 2,
    icon: <FaServer className='service-icon' />,
    title: 'backend development',
    text: `Node.js, Lambda, Express, Sequelize, Mongoose, NestJS, TypeORM, C#/.NET, Entity Framework, SQL, NoSQL, REST API, JWT, Python`,
  },
  {
    id: 3,
    icon: <FaCloud className='service-icon' />,
    title: 'DevOps',
    text: `AWS Certified SAA, BuildKite, GitHub Actions, Pulumi, Serverless Framework, AWS-CDK, Docker, DataDog, Sentry, Linux`,
  },
]

export default services
