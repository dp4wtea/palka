package lvishe.palka;

import lvishe.palka.cardgen.AbstractBakedCard;
import lvishe.palka.cardgen.CardGenerator;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class CardsController {
    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
    @GetMapping("/get_new_card")
    public AbstractBakedCard newCard() {
        return CardGenerator.generateCard("Meaning of life");
        // todo make it user specific must be user specific
        // it also shouldnt generate card from
    }
    @GetMapping("/update_card/{id}")
    public AbstractBakedCard getCardById(@PathVariable int id) {
        return CardGenerator.generateCard("Meaning of life");
        // todo make it user specific must be user specific
        // it also shouldnt generate card from
    }
    @GetMapping("/genCard/{id}")
    public AbstractBakedCard generateSpecificCard(@PathVariable String id) {
        return CardGenerator.generateCard(id);

    }

}
