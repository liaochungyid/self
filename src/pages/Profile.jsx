import { useContext } from "react"
import ResumeContext from "../store/resume-context"
import ProfileList from "../components/cards/ProfileList"

function ProfilePage () {
  const resumeCtx = useContext(ResumeContext)
  const timeline = resumeCtx.data.education
    .concat(resumeCtx.data.experience.irrelevant)
    .concat(resumeCtx.data.experience.related)
    .sort((a,b) => a.order - b.order)

  return (
    <div>
      <ProfileList 
        selfIntro={resumeCtx.data.selfIntro}
        resume={resumeCtx.data.resume}
        link={resumeCtx.data.link}
        timeline={timeline} 
        skill={resumeCtx.data.skill}
      />  
    </div>
  )
}

export default ProfilePage