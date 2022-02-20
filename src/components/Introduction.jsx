import classes from './introduction.module.css'
import { FaPlay } from "react-icons/fa"
import SocialMediaLink from './SocialMediaLink'

function Introduction(props) {
  return (
    <div className={classes.introduction}>
      <h1 className={classes.h1}>
        I'm a <span className={classes.span}>Fullstack Developer</span><br />
        Welcome <br />
        to contact, <a className={classes.a} target="_blank" href="mailto:liaochungyid@gmail.com">here to email me <FaPlay /></a>
      </h1>
      <div>
        <img className={classes.img} src="https://i.imgur.com/vU6Hba8.jpg?1" alt="selfie" />
        <SocialMediaLink link={props.link}/>
      </div>
    </div>
  )
}

export default Introduction