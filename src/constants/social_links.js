import React from "react"
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaHome,
  FaDocker,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/xiaozhou-joe-cui-9744a535/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/XiaozhouCui",
  },
  {
    id: 3,
    icon: <FaDocker className="social-icon"></FaDocker>,
    url: "https://hub.docker.com/u/xiaozhoucui",
  },
  {
    id: 4,
    icon: <FaHome className="social-icon"></FaHome>,
    url: "https://www.joesdemosite.com/",
  },
  {
    id: 5,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://facebook.com",
  },
]

export default data
