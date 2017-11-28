import React from 'react';
import Link from 'gatsby-link';
import Container from "../components/container";
import styles from "./index.module.css"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1 className={styles.sitetitle}>
          <Link to={'/'} >
            Elyse Holladay
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            Elyse Holladay
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <Container>
          {header}
          {children()}
        </Container>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
