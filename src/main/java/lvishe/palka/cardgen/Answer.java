package lvishe.palka.cardgen;

public class Answer {
    private String content;
    private boolean correct;

    public Answer(String word, boolean correct) {
        this.content = word;
        this.correct = correct;
    }

    public String getContent() {
        return content;
    }
    public boolean isCorrect() {
        return correct;
    }
}
