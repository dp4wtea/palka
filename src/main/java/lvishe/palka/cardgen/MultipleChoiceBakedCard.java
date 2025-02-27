package lvishe.palka.cardgen;

public class MultipleChoiceBakedCard extends AbstractBakedCard {
    public MultipleChoiceBakedCard(String question, Answer[] answers) {
        this.question = question;
        this.answers = answers;
    }
    public String getQuestion() {
        return question;
    }
    public Answer[] getAnswers() {
        return answers;
    }
}
