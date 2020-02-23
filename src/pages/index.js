import React from "react"

import SEO from "../components/seo"

import "../styles/layout.css"
import "typeface-nunito"
import "typeface-libre-baskerville"
import "../styles/custom.css"

import BackgroundImage from "../components/background-image"

const IndexPage = () => (
  <>
    <SEO />
    <BackgroundImage>
      <div className="container">
        <div className="container-top">
          <div className="section-content">
            <h1 className="headline">
              Hi, I'm <br></br>
              <strong>Tim Sabsch</strong>.
            </h1>
            <p className="intro">
                I'm a Data Scientist and Engineer, creating solutions to <i>your</i> data-driven questions. I'm currently most interested in the following fields:
            </p>
            <ul className="topics">
              <li>- Machine Learning</li>
              <li>- Machine Learning in Productive Systems</li>
              <li>- Explainable Artificial Intelligence</li>
              <li>- AI for Social Good</li>
            </ul>
          </div>
          <p className="freetime">
          In my free time, I'm contributing to open source, playing piano and singing in a choir.
          </p>
          <div className="section-cta">
            <p>Any questions?</p>
            <a className="cta" href="mailto:tim@sabsch.com">
              Get in contact
            </a>
          </div>
        </div>
        <ul className="section-interaction links">
          <li>
            <a
              href="https://linkedin.com/in/timsabsch"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.xing.com/profile/Tim_Sabsch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xing
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tsabsch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tsabsch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </BackgroundImage>
  </>
)

export default IndexPage
