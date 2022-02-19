import classes from './introduction.module.css'
import { FaMedium, FaLinkedin, FaFacebookSquare, FaBlogger } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
// import { useContext } from "react"
// import ResumeContext from "../store/resume-context"

function Introduction() {
  // const resumeCtx = useContext(ResumeContext)
  // console.log(resumeCtx)
  return (
    <div className={classes.introduction}>
      <h1 className={classes.h1}>
        I'm a <span className={classes.span}>Fullstack Developer</span><br />
        Welcome <br />
        to contact, <a className={classes.a}>here to email me</a>
      </h1>
      <div>
        <a className={classes.icon}><FaLinkedin /></a>
        <a className={classes.icon}><GoMarkGithub /></a>
        <a className={classes.icon}><FaFacebookSquare /></a>
        <a className={classes.icon}><FaMedium /></a>
        <a className={classes.icon}><FaBlogger /></a>
      </div>
    </div>
  )
}

export default Introduction