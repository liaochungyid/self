import { FaPlay, FaImages } from "react-icons/fa"
import classes from './profileList.module.css'
import SocialMediaLink from '../SocialMediaLink'
import Skill from "../Skill"

function ProfileList(props) {
  console.log(props)

  function ResumeList(props) {
    return <a className={classes.resumeList} href={props.link} target="_blank">{props.title} <FaPlay/></a>
  }

  function SelfIntroList(props) {
    return <p className={classes.selfIntroList}>{props.sentence}</p>
  }

  function Extend(props) {
    if (props.extend === 'image') {
      return <span className={classes.extendImg}>{props.children} <img src={props.data}></img></span>

    } else if (props.extend === 'url')
    return (
      <a target="_blank" href={props.data}>{props.children}</a>
    )
  }

  function EduOrExpList(props) {
    return (
      <div className={classes.eduOrExpList}>
        <span>{props.item.year}</span>
        <span>{props.item.place}</span>
        <span>{props.item.position}</span>
        {props.item.extend !== false ? Object.keys(props.item.extend).map(extend => <Extend extend={extend} data={props.item.extend[extend]}><FaImages/></Extend>) : ''}
        <p>{props.item.description}</p>
      </div>
    )
  }

  return (
    <div className={classes.profile}>
      <div className={classes.link}>
        <SocialMediaLink link={props.link} />
        {Object.keys(props.resume).map(item => <ResumeList title={item} link={props.resume[item]} key={item}/>)}
      </div>
      {props.selfIntro.map(item => <SelfIntroList sentence={item} key={item}/>)}
      <Skill skill={props.skill} />
      {props.timeline.map(item => <EduOrExpList item={item}/>)}
    </div>
  )
}

export default ProfileList