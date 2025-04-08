/*
*  TODO: make it more backend friendly
*
* */

class CardData {
    get right_answer() {
        return this._right_answer;
    }
    get fourth_answer() {
        return this._fourth_answer;
    }
    get third_answer() {
        return this._third_answer;
    }
    get second_answer() {
        return this._second_answer;
    }
    get first_answer() {
        return this._first_answer;
    }
    get question() {
        return this._question;
    }

    constructor(question,right_answer, first_answer, second_answer, third_answer, fourth_answer) {
        this._question = question;
        this._first_answer = first_answer;
        this._second_answer = second_answer;
        this._third_answer = third_answer;
        this._fourth_answer = fourth_answer;
        this._right_answer = right_answer;
    }

}
export default CardData;