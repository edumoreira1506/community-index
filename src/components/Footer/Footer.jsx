import React from 'react'
import SocialMediaLink from './../SocialMediaLink/SocialMediaLink'
import './Footer.scss'

const Footer = ({ links }) => (
  <div className="footer">
    <div className="footer__links">
      <ul className="footer__links__list">
        {links.map(({ title, to }) => (
          <li className="footer__links__list__item" key={title}>
            <SocialMediaLink title={title} to={to} />
            <span className="footer__links__list__item__bullet"></span>
          </li>
        ))}
      </ul>
    </div>
    <span className="footer__copyright">
      {new Date().getFullYear()} Copyright
    </span>
  </div>
)

export default Footer
