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
      <Introduction link={resumeCtx.data.link}/>
      <Skill skill={resumeCtx.data.skill} />
      <Project project={resumeCtx.data.project.slice(0,2)} />  
      <Profile 
        education={resumeCtx.data.education} 
        experience={resumeCtx.data.experience.related} 
        selfIntro={resumeCtx.data.selfIntro}
        resume={resumeCtx.data.resume}
      />
      <div className="homeFootImg">
        <img src="https://i.imgur.com/iG8QUx8.jpg" alt="foot image" />
      </div>
    </section>
  )
}

export default HomePage