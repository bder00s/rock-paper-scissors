import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)
    const choices = ["rock", "paper", "scissors"]

    function handleClick(value) {
        setUserChoice(value)
        generateComputerChoice()
    }

    function generateComputerChoice() {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    useEffect(() => {
        switch (userChoice + computerChoice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setResult('You win! 🥳')
                break;
            case 'paperscissors':
            case 'scissorsrock':
            case'rockpaper':
                setResult('You lose! 😿')
                break;
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors' :
                setResult('Its a draw!')
                break;
        }
    },[computerChoice, userChoice])



    return (
        <div className="App">
            <h1>🪨, 🧻, ✂️ </h1>
            <h2>User choice: {userChoice}</h2>
            <h2>Computer choice: {computerChoice}</h2>

            {choices.map((choice, index) => <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}

            <h1>{result}</h1>




        </div>
    );
}

export default App;
