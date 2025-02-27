package lvishe.palka.cardgen;

import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Autowired;

/*
* Generates cards with questions and answers from just words
*
* */

public class CardGenerator {
    private static final OpenAiApi openAiApi = new OpenAiApi(System.getenv("spring.ai.openai.api-key"));
    private static final OpenAiChatOptions openAiChatOptions = OpenAiChatOptions.builder()
            .model("gpt-3.5-turbo")
            .temperature(0.4)
            .maxTokens(200)
            .build();
    private static final OpenAiChatModel chatModel = new OpenAiChatModel(openAiApi, openAiChatOptions);

    public static AbstractBakedCard generateCard(String word) {
        System.out.println("Generating card with word: " + word);
        ChatResponse response = chatModel.call(
                new Prompt(
                        "Generate a multiple choice question with the word " + word + " in it. " +
                                "The question should have 4 possible answers, one of which is right." +
                                "first wirte the question and then write every single answer on a new line dividing them" +
                                "with \n symbol. The first question should be the right one. Please don`t add anything" +
                                "to answers besides the text. For example:\n" +
                                "What is the capital of France?\nParis\nLondon\nBerlin\nMadrid",
                        openAiChatOptions
                ));
        String text = response.getResult().getOutput().getText();
        String[] parts = text.split("\n");
        return new MultipleChoiceBakedCard(parts[0], new Answer[]{
                new Answer(parts[1], true),
                new Answer(parts[2], false),
                new Answer(parts[3], false),
                new Answer(parts[4], false)
        });

    }
}
