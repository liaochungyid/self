import { Link } from 'react-router-dom'
import classes from './header.module.css'

function Header() {
  return (
    <header>
      <div className={classes.title}>
        <div >
          <h1>廖仲逸</h1>
          <h2>Lyle Liao</h2>
        </div>
        <button type='button'></button>
      </div>
      <div className={classes.navbar}>
        <Link className={classes.navLink} to='/work'>Work</Link>
        <Link className={classes.navLink} to='profile'>Profile</Link>
        <Link className={classes.navLink} to='experience'>Experience</Link>
        <Link className={classes.navLink} to='/'>Resume</Link>
        <Link className={classes.navLink} to='/'>Contact</Link>
      </div>
    </header>
  )
}

export default Header