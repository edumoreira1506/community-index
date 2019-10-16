import React from 'react'
import './SocialMediaLink.scss'

export default function index(props) {
  return (
    <div className="navbar__entry SocialMediaLink" target="_blank">
      {props.to && (
        <a href={props.to}>
          {props.title}
        </a>
      )}
    </div>
  )
}
