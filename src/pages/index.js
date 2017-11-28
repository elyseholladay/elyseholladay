import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import styles from "./index.module.css";

import Container from "../components/container";
import Resume from "../components/resume";
import Bio from "../components/bio";


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <p>💖 🦊 👑  scss magic & front-end tools. married with @cherewaty. feminist. baby powerlifter, avid reader, hobbyist cook, capsule wardrobe nerd, bullet journaler.</p>

        <h2>Conference Talks</h2>
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div className={styles.post} key={post.node.frontmatter.path}>
                <h3>
                  <Link to={post.node.frontmatter.path} >
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                <small className={styles.postmeta}>
                  {post.node.frontmatter.date} at {post.node.frontmatter.conf}
                </small>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            )
          }
        })}

        <h2>About Elyse</h2>
        <Bio/>
    </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            conf
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
