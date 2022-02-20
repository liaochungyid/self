import { useContext } from "react"
import ResumeContext from "../store/resume-context"

import Introduction from "../components/Introduction"
import Skill from "../components/Skill"
import Project from "../components/cards/Project"
import Profile from "../components/cards/Profile"

function HomePage () {
  const resumeCtx = useContext(ResumeContext)

  return (
    <section>
      <Introduction link={resumeCtx.link}/>
      <Skill skill={resumeCtx.skill} />
      <Project project={resumeCtx.project.slice(0,2)} />  
      <Profile 
        education={resumeCtx.education} 
        experience={resumeCtx.experience.related} 
        selfIntro={resumeCtx.selfIntro}
        resume={resumeCtx.resume}
      />
    </section>
  )
}

export default HomePage