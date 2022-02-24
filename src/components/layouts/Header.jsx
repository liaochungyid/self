import { Link, useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from "react"
import { FaLanguage } from 'react-icons/fa'
import ResumeContext from "../../store/resume-context"
import classes from './header.module.css'

function Header() {
  const resumeCtx = useContext(ResumeContext)
  const resumeLink = resumeCtx.data.resume['Cake Resume']

  const [pathnameState, setPathnameState] = useState('')
  let location = useLocation()
  const [langButtonClass, setLangButtonClass] = useState('')
  useEffect(() => { setPathnameState(location.pathname) }, [location])
  useEffect(() => { setLangButtonClass(resumeCtx.isZHLang() ? '' : classes.en) }, [resumeCtx])

  function addActiveClass(addOn, pathname) {
    if (pathnameState === pathname) {
      return [addOn, classes.active].join(' ')
    } else {
      return addOn
    }
  }

  function toggleLangHandler() { 
    resumeCtx.swapLang()
  }

  return (
    <header>
      <div className={classes.title}>
        <div >
          <h1>廖仲逸</h1>
          <h2>Lyle Liao</h2>
        </div>
        <button className={langButtonClass} type='button' onClick={toggleLangHandler}><FaLanguage /></button>
      </div>
      <div className={classes.navbar}>
        <Link className={addActiveClass(classes.navLink, '/self')} to='/self'>Home</Link>
        <Link className={addActiveClass(classes.navLink, '/self/work')} to='/self/work'>Work</Link>
        <Link className={addActiveClass(classes.navLink, '/self/profile')} to='/self/profile'>Profile</Link>
        <a className={classes.navLink} href={resumeLink} target='_blank'>Resume</a>
      </div>
    </header>
  )
}

export default Header