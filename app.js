'use strict';

// const name = prompt('Hello there, and what might your name be my friend?');
// window.alert ('After what you wrote in this amazing prompt, it appears your name is ' + name);
// console.log('Your name is ' + name);

// const age = prompt('How many years young might you be my friend?');
// window.alert ('Holy Moly! It appears you were born yesterday, since you are only ' + age);
// console.log('You are ' + age + ' years old');

// const food = prompt('What is your favorite food to eat my friend?');
// window.alert ('Aha! It seems that your favorite thing to eat is ' + food);
// console.log('Your favorite food is ' + food);

// const animal = prompt('And last but not least, what is your favorite animal?');
// window.alert ('That is so interesting, that your favorite animal is ' + animal);
// console.log('Your favorite animal is ' + animal);

// alert ('Now let\'s play a game!!!!');

// const likesChocolate = prompt('Do you like chocolate??');

// if (likesChocolate.toLowerCase() === 'yes' || likesChocolate.toLowerCase() === 'y') {
//     alert('That\'s so funny, chocolate is actually good for you! In moderation that is :\)');
//     console.log('This person likes chocolate!! Contact Hershey NOW!!');

// } else (likesChocolate.toLowerCase() === 'no' || likesChocolate.toLowerCase() === 'n'); {
//     alert('What?!?! Why not?? Chocolate is good for you dude! In moderation that is ;\)');
//     console.log('This person doesn\'t like chocolate, what\'s the world coming too??');
// }
// const likesVanilla = prompt('Do you like vanilla??');

// if (likesVanilla.toLowerCase() === 'yes' || likesVanilla.toLowerCase() === 'y') {
//     alert('Yay!!! For Vanilla!');
//     console.log('Keep them away from the icecream!');

// } else (likesVanilla.toLowerCase() === likesVanilla.toLowerCase() === 'no' || 'n'); {
//     alert('Pffff!!!!! Whatever!');
//     console.log('This person said no to vanilla, so they are not invited to the Christmas party');
// }
alert ('Now let\'s play a game!!!!');


const likesChocolate = prompt('Do you like chocolate icecream?');

if (likesChocolate.toLowerCase() === 'yes' || likesChocolate.toLowerCase() === 'y') {
    alert('That\'s so funny, chocolate is actually good for you! In moderation that is..');
    console.log('This person likes chocolate icecream!! Contact Hershey NOW!!');
}   else {(likesChocolate.toLowerCase() === 'no' || likesChocolate.toLowerCase() === 'n');
    alert('What?!?! Why not?? Chocolate is good for you dude/dudette!');
    console.log('This person doesn\'t like chocolate icecream, what\'s the world coming too??');}

const likesVanilla = prompt('Do you like Vanilla icecream??');

if (likesVanilla.toLowerCase() === 'yes' || likesVanilla.toLowerCase() === 'y') {
    alert('Yay!!! For Vanilla icecream!');
    console.log('Keep them away from the vanilla icecream!');
}   else {(likesVanilla.toLowerCase() === likesVanilla.toLowerCase() === 'no' || 'n');
    alert('Pffff!!!!! Whatever!');
    console.log('This person said no to vanilla icecream, so they are not invited to the Christmas party');}

const likesPistacio = prompt('Do you like Pistacio icecream?');

if (likesPistacio.toLowerCase() === 'yes' || likesPistacio.toLowerCase() === 'y') {
    alert('Heck yes! Pistacio iceream rocks!');
    console.log('Invest in Pistacios!!!!');
}   else {(likesPistacio.toLowerCase() === 'no' || likesPistacio.toLowerCase() === 'n');
    alert('Pistacio icecream is the best though!?!');
    console.log('Dump your Pistacio stock now!!');}

const likesStrawberry = prompt ('Do you like Strawberry icecream?');

if (likesStrawberry.toLowerCase() === 'yes' || likesStrawberry.toLowerCase() === 'y') {
    alert('Strawberry fields forever!!!');
    console.log('Go pick more strawberries now!');
}   else {(likesStrawberry.toLowerCase() === 'no' || likesStrawberry.toLowerCase() === 'n');
    alert('Well, they are high in vitamin C, so maybe you should START LIKING THEM!');
    console.log('This person probably just doesn\'t like red things in general..');}

const likesCoffee = prompt('Do you like Coffee icecream?');

if (likesCoffee.toLowerCase() === 'yes' || likesCoffee.toLowerCase() === 'y') {
    alert('What\'s better than drinking coffee??? Eating it!');
    console.log('People who like coffee icecream are awesome because I said so');
}   else {(likesCoffee.toLowerCase() === 'no' || likesCoffee.toLowerCase() === 'n');
    alert('Dude/Dudette...really? Just really?');
    console.log('I am speachless..just speachless..');}

/* So far I've made a little progress on the assignment. I went ahead and changed everything
to icecream becasuse it made more sense, however I'm still having an issue with my code
when the prompts begin to run, they pretty much run correctly, however, the following occurs:
every time the user passes a yes or y into the program it provides the correct alert, BUT then
it also will provide the following incorrect alert for the no or n response. HOWEVER, if you
run the program and provide it with the no or n responses then the program will provide the
correct alerts and move to the next question as anticipated. I'm pretty sure, I'm missing a
semi-colon somewhere, basically to tell one line of code to stop running, if the other line
completes. Still working through it!*/

/* Disregard the above comment because I figured it out! Just needed to add the code blocks
around the code that I wanted to run next, and voila! It works! :)!!!*/
