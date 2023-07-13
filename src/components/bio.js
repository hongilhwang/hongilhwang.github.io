import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          gatsbyImageData(layout: FIXED, width: 50, height: 49)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
        <GatsbyImage
            alt={author.name}
            style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
            }}
            imgStyle={{
                borderRadius: `50%`,
            }}
            image={data.avatar.childImageSharp.gatsbyImageData} />
      <p style={{margin: 0}}>
        <strong>{author.name}</strong> {author.summary}
        {` `}
        <a href={`https://www.github.com/${social.github}`}>
          Go to github
        </a>
      </p>
    </div>
  )
}

export default Bio
