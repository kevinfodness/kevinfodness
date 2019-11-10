import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `darkorchid`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          border: `2px solid white`,
          display: `inline-block`,
          height: `34px`,
          marginRight: `.5em`,
          width: `34px`,
        }}
      >
        <Image />
      </div>
      <h1 style={{
        display: `inline-block`,
        margin: 0,
        maxWidth: `50%`,
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a
        href="/pdf/disability-and-cyberspace.pdf"
        style={{
          backgroundColor: `white`,
          borderRadius: `.5em`,
          color: `darkorchid`,
          display: `inline-block`,
          float: `right`,
          fontWeight: `bold`,
          padding: `.5em`,
          textDecoration: `none`,
        }}
      >
        Dissertation
      </a>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
