import classes from './project.module.css'

function Project(props) {
  function ProjectCard(props) {
    return (
      <div className={classes.card}>
        <h2>{props.item.name}</h2>
        <p>{props.item.intro}</p>
        <ul></ul>
      </div>
    )
  }


  return (
    <div>
      {props.project.map(item => <ProjectCard item={item} key={item.name}/>)}
    </div>
  )
}

export default Project