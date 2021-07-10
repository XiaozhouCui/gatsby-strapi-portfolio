import React from 'react'
import { FaCode, FaServer, FaCloud } from 'react-icons/fa'
const services = [
  {
    id: 1,
    icon: <FaCode className='service-icon' />,
    title: 'frontend development',
    text: `React, TypeScript, Redux, MobX, Webpack, Gatsby.js, Angular 10/11, HTML, CSS, JavaScript ES6+, jQuery`,
  },
  {
    id: 2,
    icon: <FaServer className='service-icon' />,
    title: 'backend development',
    text: `Node.js, Express, Mongoose, .NET 5, Entity Framework, SQL, MongoDB, REST API, JWT, SendGrid`,
  },
  {
    id: 3,
    icon: <FaCloud className='service-icon' />,
    title: 'cloud services',
    text: `AWS Certified SAA, EC2, S3, RDS, Elastic Beanstalk, Route 53, CloudFormation, Lambda, DynamoDB, ECS`,
  },
]

export default services
