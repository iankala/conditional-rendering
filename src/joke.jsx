import React from "react"
export default function Jokes(props){

    const [isShown, setisShown] = React.useState(false)

    function punchLine(){
        setisShown(prev => !prev)
    
    }

    
    return(
        <div>
            {props.setup ? <h3>{props.setup}</h3>: null}
            {isShown ? <p>{props.punchline}</p>: null}
            {<button onClick={punchLine}>{isShown ? "Hide" : "Show"} punchline</button>}
            <hr />
        </div>

    )

}