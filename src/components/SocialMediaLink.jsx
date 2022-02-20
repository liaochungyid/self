import { FaMedium, FaLinkedin, FaFacebookSquare, FaBlogger, FaGithubSquare } from "react-icons/fa"
import classes from './SocialMediaLink.module.css'

function SocialMediaLink(props) {
  return (
    <div>
      <a className={classes.icon} target="_blank" href={props.link.Linkedin} ><FaLinkedin /></a>
      <a className={classes.icon} target="_blank" href={props.link.Github}><FaGithubSquare /></a>
      <a className={classes.icon} target="_blank" href={props.link.Facebook}><FaFacebookSquare /></a>
      <a className={classes.icon} target="_blank" href={props.link.Medium}><FaMedium /></a>
      <a className={classes.icon} target="_blank" href={props.link.Learning}><FaBlogger /></a>
    </div>
  )
}

export default SocialMediaLink