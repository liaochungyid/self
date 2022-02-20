import { useContext } from "react"
import ResumeContext from "../store/resume-context"
import ProfileList from "../components/cards/ProfileList"

function ProfilePage () {
  const resumeCtx = useContext(ResumeContext)
  const timeline = resumeCtx.education
    .concat(resumeCtx.experience.irrelevant)
    .concat(resumeCtx.experience.related)
    .sort((a,b) => a.order - b.order)

  return (
    <div>
      <ProfileList 
        selfIntro={resumeCtx.selfIntro}
        resume={resumeCtx.resume}
        link={resumeCtx.link}
        timeline={timeline} 
        skill={resumeCtx.skill}
      />  
    </div>
  )
}

export default ProfilePage