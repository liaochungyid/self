import classes from './introduction.module.css'
import { FaMedium, FaLinkedin, FaFacebookSquare, FaBlogger, FaGithubSquare } from "react-icons/fa"

function Introduction(props) {
  return (
    <div className={classes.introduction}>
      <h1 className={classes.h1}>
        I'm a <span className={classes.span}>Fullstack Developer</span><br />
        Welcome <br />
        to contact, <a className={classes.a} target="_blank" href="mailto:liaochungyid@gmail.com">here to email me</a>
      </h1>
      <div>
        <img className={classes.img} src="https://i.imgur.com/vU6Hba8.jpg?1" alt="selfie" />
        <a className={classes.icon} target="_blank" href={props.link.Linkedin} ><FaLinkedin /></a>
        <a className={classes.icon} target="_blank" href={props.link.Github}><FaGithubSquare /></a>
        <a className={classes.icon} target="_blank" href={props.link.Facebook}><FaFacebookSquare /></a>
        <a className={classes.icon} target="_blank" href={props.link.Medium}><FaMedium /></a>
        <a className={classes.icon} target="_blank" href={props.link.Learning}><FaBlogger /></a>
      </div>
    </div>
  )
}

export default Introduction