import { useContext } from "react"
import ResumeContext from "../store/resume-context"

import Introduction from "../components/Introduction"
import Skill from "../components/Skill"
import Project from "../components/cards/Project"

function HomePage () {
  const resumeCtx = useContext(ResumeContext)

  return (
    <section>
      <Introduction link={resumeCtx.link}/>
      <Skill skill={resumeCtx.skill} />
      <Project project={resumeCtx.project.slice(0,2)} />
    </section>
  )
}

export default HomePage