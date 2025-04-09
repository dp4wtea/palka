# Palka

Apps used for active recall and spaced repetition (such as Anki) have a problem: after some time people start to remember the cards but not the content

Palka attempts to solve this problem by slightly changing the content of the card every time the card is shown using AI (yes, it's just another wrapper around ChatGPT; I am not particularly proud of this). Because of focus on this particular concept I won't be implementing any complex spaced repetition algorithms.

Palka uses Spring Boot with MySql DB on the backend and React with MUI on the front.