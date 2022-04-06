import React, {useEffect, useState} from "react";
import Card from "./Card";
import '../styles/board-style.css'

function Board (props) {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [gameCard, setGameCard] = useState([
            {id: 0, color: 'darkgray', clicked: false},
            {id: 1, color: 'lightblue', clicked: false},
            {id: 2, color: 'chocolate', clicked: false},
            {id: 3, color: 'blue', clicked: false},
            {id: 4, color: 'green', clicked: false},
            {id: 5, color: 'yellow', clicked: false},
            {id: 6, color: 'white', clicked: false},
            {id: 7, color: 'indigo', clicked: false},
            {id: 8, color: 'crimson', clicked: false},
            {id: 9, color: 'darkslategrey', clicked: false},
            {id: 10, color: 'lightgreen', clicked: false},
            {id: 11, color: 'burlywood', clicked: false}
        ]);

    const checkClick = (id, clicked) => {
        if(!clicked) {
            setScore(score + 1)
            if (highscore <= score) {
                console.log('hi')
                setHighscore(score +1)
            }
        } else {
            resetCards()
        }
        let newCardArray = [...gameCard]
        for (let i = 0; i < newCardArray.length; i++) {
            if(newCardArray[i].id === id) {
                newCardArray[i].clicked = true;
            }
        }
        setGameCard(newCardArray)
    }

    const resetCards = () => {
        let newCardArray = [...gameCard]
        for (let i = 0; i < newCardArray.length; i++) {
            newCardArray[i].clicked = false
        }
        setGameCard(newCardArray)
        setScore(0);
    }

    const shuffle = ()  => {
        let newCardArray = [...gameCard] 
        let currentIndex = newCardArray.length;
        let randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [newCardArray[currentIndex], newCardArray[randomIndex]] = [
                newCardArray[randomIndex], newCardArray[currentIndex]];
        }
        setGameCard(newCardArray)
    }

    useEffect(() => {
        shuffle()
    },[score])

    const renderCards = () => {
        return gameCard.map((id) =>
                <Card  
                key={id.id} 
                id={id.id} 
                insideText={id.color} 
                clicked={id.clicked} 
                checkClick={checkClick}
                />
        )
    }

    return (
        <section>
            <div className="scores">
            <h1>Score: {score} </h1>
            <h1>High Score: {highscore}</h1>
            </div>
            <p>Get points by clicking on a color but don't click on a color more than once!</p>
            <div className="gameBoard">
            {renderCards()}
            </div>
        </section>
    )
}

export default Board;