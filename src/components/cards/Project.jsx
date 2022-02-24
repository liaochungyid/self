import { FaPlay } from "react-icons/fa"
import { Link } from 'react-router-dom'
import classes from './project.module.css'

function Project(props) {
  function ProjectFeatureList(props) {
    return <li>{props.feature}</li>
  }

  function ProjectLinkList(props) {
    return <a href={props.address} target="_blank">{props.name}</a>
  }

  function ProjectCard(props) {
    return (
      <div className={classes.card}>
        <h2>{props.item.name}</h2>
        <img src={props.item.image} alt={props.item.name} />
        <p>{props.item.intro}</p>
        <ul>
          {props.item.features.map(feature => <ProjectFeatureList feature={feature} key={feature}/>)}
        </ul>
        <div>
          {Object.keys(props.item.links).map(key => <ProjectLinkList name={key} address={props.item.links[key]} key={key}/>)}
        </div>
      </div>
    )
  }

  return (
    <div className={classes.project}>
      {props.project.map(item => <ProjectCard item={item} key={item.name}/>)}
      <Link className={classes.navLink} to='/self/work'>MORE...<FaPlay/></Link>
    </div>
  )
}

export default Project