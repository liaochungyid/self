import { FaPlay } from "react-icons/fa"
import { Link } from 'react-router-dom'
import classes from './profile.module.css'

function Profile(props) {
  function ProfileSelfIntroList(props) {
    return <p>{props.sentence}</p>
  }

  function ProfileResumeList(props) {
    return <a href={props.link} target="_blank">{props.title} <FaPlay/></a>
  }

  function ProfileEduOrExpList(props) {
    return (
      <div>
        <h3>{props.item.place}</h3>
        <h4>{props.item.year}</h4>
        <h4>{props.item.position}</h4>
        <h4>{props.item.description}</h4>
      </div>
    )
  }

  return (
    <div className={classes.profile}>
      <h2>Profile</h2>
      <div className={classes.intro}>
        {props.selfIntro.map(item => <ProfileSelfIntroList sentence={item} key={item}/>)}
        {Object.keys(props.resume).map(item => <ProfileResumeList title={item} link={props.resume[item]} key={item}/>)}
      </div>
      <div className={classes.eduOrExp}>
        {props.education.concat(props.experience).map(item => <ProfileEduOrExpList item={item} key={item.order}/>)}
      </div>
      <Link className={classes.navLink} to='/self/profile'>MORE...<FaPlay/></Link>
    </div>
  )
}

export default Profile