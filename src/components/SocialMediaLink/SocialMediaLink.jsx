import React from 'react'
import { NavLink } from 'react-router-dom'
import './SocialMediaLink.scss'

export default function index(props) {
  return (
    <div className="navbar__entry" target="_blank">
      {props.to && (
        <a href={props.to}>
          {props.title}
        </a>
      )}
    </div>
  )
}
