import Joke from "./joke"
import jokesData from "./jokesData"
import React from "react"

export default function App({darkMode}){

    const [darkM, setDarkM] = React.useState(darkMode)

    function handle(){
        setDarkM( prev => !prev)
          
    }
    
    const style = {
        backgroundColor: darkM ? "#222222" : "#ffffffff",
        color : darkM ? "white": "black",
    }
    
    const jokeElement = jokesData.map(joke =>{
        return(
            <Joke 
                key = {joke.id}
                setup = {joke.setup}
                punchline = {joke.punchline}
            />
        )
    })
    
    return(
        <body style={style}>           
        <div >
            {jokeElement}
            <button style={style}  onClick={handle}>change theme</button>
        </div>
        </body>
    )
}