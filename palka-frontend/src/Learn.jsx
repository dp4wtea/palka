import QuestionCard from "./QuestionCard";
import CardData from "./CardData";
import React from "react";
function Learn() {
    const currentCard = new CardData("What is apple?", 1, "1", "2", "3", "4");
    const [card, setCard] = React.useState(currentCard);
    const [value, setValue] = React.useState('');
    const [alreadyAnswered, setAlreadyAnswered] = React.useState([false, false, false, false]);
    const setAnswered = (id) => {
        alreadyAnswered[id] = true;
        setAlreadyAnswered(alreadyAnswered);
    }

    // need global state to store the current card
    function ag(){
        alert("Hi!");
    }
    const handleSkip = (event) => {
        event.preventDefault();
        // todo need to fetch the next card from the backend
        const anotherCard = new CardData("What is a question?", 1, "A question with an answer", "2", "3", "4");
        setValue('');
        setAlreadyAnswered([false, false, false, false]);
        setCard(anotherCard);
    };
    const handleCheck = (event) => {
        event.preventDefault();
        if (card.right_answer.toString() === value) {
            alert("Correct!");
        }
        else {
            setValue('');

            setAnswered(value);

        }
    };
    const handleRedo = (event) => {

    }
    const handleRadioChange = (event) => {
        setValue(event.target.value);

    }

    return (
        <div>
            <QuestionCard data={card} onCheck={handleCheck} onRedo={ag} onSkip={handleSkip} onChange={handleRadioChange}
            alreadyAnswered={alreadyAnswered}/>
        </div>
    );
}

export default Learn;