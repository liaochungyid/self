import { Link } from 'react-router-dom'
import classes from './header.module.css'
import { useContext, useState, useEffect } from "react"
import ResumeContext from "../../store/resume-context"
import { useLocation } from 'react-router-dom'

function Header() {
  const resumeCtx = useContext(ResumeContext)
  const [pathnameState, setPathnameState] = useState('')
  let location = useLocation()

  useEffect(() => {
    setPathnameState(location.pathname)
  }, [location])

  function addActiveClass(addOn, pathname) {
    if (pathnameState === pathname) {
      return [addOn, classes.active].join(' ')
    } else {
      return addOn
    }
  }

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
        <Link className={addActiveClass(classes.navLink, '/')} to='/'>Home</Link>
        <Link className={addActiveClass(classes.navLink, '/work')} to='/work'>Work</Link>
        <Link className={addActiveClass(classes.navLink, '/profile')} to='profile'>Profile</Link>
        <a className={classes.navLink} href={resumeCtx.resume['Cake Resume']} target='_blank'>Resume</a>
      </div>
    </header>
  )
}

export default Header