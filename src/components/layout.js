import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Helmet>
    
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WGVHHBJ');</script>

<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Jost:ital,wght@0,300;0,400;0,500;0,700;0,800;1,400&family=Merriweather:wght@300;400;700&family=Permanent+Marker&display=swap" rel="stylesheet">

    </Helmet>
    
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGVHHBJ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  

    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; 2020 Delog &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  )
}