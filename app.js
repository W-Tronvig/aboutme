'use strict';

const name = prompt('Hello there, and what might your name be my friend?');
window.alert ('After what you wrote in this amazing prompt, it appears your name is ' + name);
console.log('Your name is ' + name);

const age = prompt('How many years young might you be my friend?');
window.alert ('Holy Moly! It appears you were born yesterday, since you are only ' + age);
console.log('You are ' + age + ' years old');

const food = prompt('What is your favorite food to eat my friend?');
window.alert ('Aha! It seems that your favorite thing to eat is ' + food);
console.log('Your favorite food is ' + food);

const animal = prompt('And last but not least, what is your favorite animal?');
window.alert ('That is so interesting, that your favorite animal is ' + animal);
console.log('Your favorite animal is ' + animal);

alert ('Now let\'s play a game!!!!');

const likesChocolate = prompt('Do you like chocolate??');
if (likesChocolate.toLowerCase === 'Yes' || 'Y') {
    alert('That\'s so funny, chocolate is actually good for you! In moderation that is :\)');
    console.log('This person likes chocolate!! Contact Hershey NOW!!');

} else (likesChocolate.toLowerCase === 'No' || 'N'); {
    alert('What?!?! Why not?? Chocolate is good for you dude! In moderation that is ;\)');
    console.log('This person doesn\'t like chocolate, what\'s the world coming too??');
}
