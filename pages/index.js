import {useState} from "react"
import {ideas} from "../utils/ideas"

export default function Home(){

const [idea,setIdea]=useState("")

function generateIdea(){
const random=ideas[Math.floor(Math.random()*ideas.length)]
setIdea(random)
}

return(
<div className="container">

<h1 className="title">IdeaForge</h1>

<button className="button" onClick={generateIdea}>
Generate Startup Idea
</button>

{idea && <p>{idea}</p>}

</div>
)
}
