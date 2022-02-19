import classes from './skill.module.css'

function Skill(props) {
  function Span(props) { return <span className={classes.span}>{props.skillName}</span> }

  return (
    <div className={classes.skillContainer}>
      {props.skill.main.map(item => <Span skillName={item} key={item}/>)} <br />
      {props.skill.framework.map(item => <Span skillName={item} key={item}/>)} <br />
      {props.skill.other.map(item => <Span skillName={item} key={item}/>)} <br />
    </div>
  )
}

export default Skill