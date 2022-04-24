import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs"
import {FaDribbble} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedln.com' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank"><BsGithub /></a>
        <a href='https://dribble.com' target="_blank"><FaDribbble /></a>
        <a href='https://youtube.com' target="_blank"><BsYoutube /></a>
        </div>
  )
}

export default HeaderSocials;