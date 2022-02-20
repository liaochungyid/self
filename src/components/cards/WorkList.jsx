import classes from './workList.module.css'

function WorkList(props) {
  function ProjectFeatureList(props) {
    return <li>{props.feature}</li>
  }

  function ProjectLinkList(props) {
    return <a href={props.address} target="_blank">{props.name}</a>
  }

  function ProjectCard(props) {
    return (
      <div className={classes.card}>
        <img src={props.item.image} alt={props.item.name} />
        <div>
          <h2>{props.item.name}</h2>
          <p>{props.item.intro}</p>
          <ul>
            {props.item.features.map(feature => <ProjectFeatureList feature={feature} key={feature}/>)}
          </ul>
          <div>
            {Object.keys(props.item.links).map(key => <ProjectLinkList name={key} address={props.item.links[key]} key={key}/>)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classes.project}>
      {props.project.map(item => <ProjectCard item={item} key={item.name}/>)}
    </div>
  )
}

export default WorkList