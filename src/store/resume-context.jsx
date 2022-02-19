import { createContext, useState, useEffect } from "react";

const Endpoint = 'http://localhost:3000/'
const ResumeContext = createContext({})

export function ResumeContextProvider(props) {
  const [context, setContext] = useState(null)

  useEffect(() => {
    fetch(Endpoint + 'store/resume.json', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => console.log(response))
    .then(data => {
      setContext(data)
    console.log(ResumeContext)

    })
  }, [])

  return (
    <ResumeContext.Provider value={context}>
      {props.children}
    </ResumeContext.Provider>
  )
}

export default ResumeContext