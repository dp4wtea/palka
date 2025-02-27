package lvishe.palka.cardgen;
/**
 * Card with already generated question and for answers to it
 * must be ready to be given to client
 */
public abstract class AbstractBakedCard {
    protected String question;
    protected Answer[] answers;
}
