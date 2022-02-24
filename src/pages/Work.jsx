import { useContext } from "react"
import ResumeContext from "../store/resume-context"
import WorkList from "../components/cards/WorkList"

function WorkPage () {
  const resumeCtx = useContext(ResumeContext)

  return (
    <div>
      <WorkList project={resumeCtx.data.project} />  
    </div>
  )
}

export default WorkPage