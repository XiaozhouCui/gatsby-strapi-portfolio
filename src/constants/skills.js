import React from 'react'
import { FaCode, FaServer, FaCloud } from 'react-icons/fa'
const services = [
  {
    id: 1,
    icon: <FaCode className='service-icon' />,
    title: 'frontend development',
    text: `React, Redux, TypeScript, Angular 2+, MobX, Webpack, Jest, HTML, CSS, JavaScript ES6+, JQuery`,
  },
  {
    id: 2,
    icon: <FaServer className='service-icon' />,
    title: 'backend development',
    text: `Node.js, Express, SuperTest, .NET 5, Entity Framework, SQL, MongoDB, REST API, JWT, SendGrid`,
  },
  {
    id: 3,
    icon: <FaCloud className='service-icon' />,
    title: 'cloud computing',
    text: `AWS Certified Solutions Architect - Associate, EC2, S3, RDS, Elastic Beanstalk, Route 53, CloudFormation, Lambda, DynamoDB, ECS`,
  },
]

export default services
