import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">Hi, my name is Daniel Giordano</div>
        <div className="primary-content"/>
        <p><span>This is my website and a start to an epic beginning. Either working together on a project or following along on my writing journey. </span>
          I help B2B and B2C technology companies acquire and grow their user base with a little bit of marketing, and a splash of dev. </p>
          <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        </div>
    )}
  />
)