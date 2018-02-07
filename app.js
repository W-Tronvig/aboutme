'use strict';
const yourFlavors = [];

userInfo1();
userInfo2();
userInfo3();
userInfo4();
chocolate();
vanilla();
pistacio();
strawberry();
coffee();
baskinRobbins();


// Getting to know user

function userInfo1() {
    const name = prompt('Hello, I\'m William, what is your name?');
    window.alert ('After what you wrote in this amazing prompt, it appears your name is ' + name + '.');
    console.log('Your name is ' + name + '.');
}

function userInfo2() {
    const age = prompt('How old are you?');
    window.alert ('Holy Moly! It appears you were born yesterday, since you are only ' + age + '!');
    console.log('You are ' + age + ' years old.');
}

function userInfo3() {
    const food = prompt('What is your favorite food to eat?');
    window.alert ('Aha! It seems that your favorite thing to eat is ' + food + '.');
    console.log('Your favorite food is ' + food + '.');
}

function userInfo4() {
    const animal = prompt('And last but not least, what is your favorite animal?');
    window.alert ('That is so interesting, that your favorite animal is ' + animal + '.');
    console.log('Your favorite animal is ' + animal + '.');
    alert ('Now let\'s play a game!!!!');
}

// Icecream game

function chocolate() {
    const likeschocolate = prompt ('Do you like Chocolate icecream?');

    if (likeschocolate.toLowerCase() === 'yes' || likeschocolate.toLowerCase() === 'y') {
        alert('That\'s so funny, chocolate is actually good for you! In moderation that..');
        console.log('User likes chocolate icecream');
        yourFlavors.push('Chocolate');
    }   else if (likeschocolate.toLowerCase() === 'no' || likeschocolate.toLowerCase() === 'n') {
        alert('What?!? Why not? Chocolate is good for you!');
        console.log('User does not like chocolate icecream');
    }   else {
        alert ('Try typing Yes, Y, No, or n');
        console.log('User entered incorrect answer for prompt');
    }
}

function vanilla() {
    const likesVanilla = prompt('Do you like Vanilla icecream??');

    if (likesVanilla.toLowerCase() === 'yes' || likesVanilla.toLowerCase() === 'y') {
        alert('Yay!!! For Vanilla icecream!');
        console.log('User likes vanilla icecream');
        yourFlavors.push('Vanilla');
    }   else if (likesVanilla.toLowerCase() === 'no' || likesVanilla.toLowerCase() === 'n') {
        alert('Pffff!!!!! Whatever!');
        console.log('User does not like vanilla icecream');
    }   else {
        alert ('Try typing Yes, Y, No, or n');
        console.log('User entered incorrect answer for prompt');
    }
}
function pistacio() {
    const likesPistacio = prompt('Do you like Pistacio icecream?');

    if (likesPistacio.toLowerCase() === 'yes' || likesPistacio.toLowerCase() === 'y') {
        alert('Heck yes! Pistacio iceream rocks!');
        console.log('User likes pistacio icecream');
        yourFlavors.push('Pistacio');
    }   else if (likesPistacio.toLowerCase() === 'no' || likesPistacio.toLowerCase() === 'n') {
        alert('Pistacio icecream is the best though!?!');
        console.log('User does not like pistacio icecream');
    }   else {
        alert ('Try typing Yes, Y, No, or n');
        console.log('User entered incorrect answer for prompt');
    }
}
function strawberry() {
    const likesStrawberry = prompt ('Do you like Strawberry icecream?');

    if (likesStrawberry.toLowerCase() === 'yes' || likesStrawberry.toLowerCase() === 'y') {
        alert('Strawberry fields forever!!!');
        console.log('User likes strawberry icecream');
        yourFlavors.push('Strawberry');
    }   else if (likesStrawberry.toLowerCase() === 'no' || likesStrawberry.toLowerCase() === 'n') {
        alert('Well, they are high in vitamin C, so maybe you should START LIKING THEM!');
        console.log('User does not like strawberry icecream');
    }   else {
        alert ('Try typing Yes, Y, No, or n');
        console.log('User entered incorrect answer for prompt');
    }
}
function coffee() {
    const likesCoffee = prompt('Do you like Coffee icecream?');

    if (likesCoffee.toLowerCase() === 'yes' || likesCoffee.toLowerCase() === 'y') {
        alert('What\'s better than drinking coffee??? Eating it!');
        console.log('User likes coffee icecream');
        yourFlavors.push('Coffee');
    }   else if (likesCoffee.toLowerCase() === 'no' || likesCoffee.toLowerCase() === 'n') {
        alert('Seriously?');
        console.log('User does not like coffee icecream');
    }   else {
        alert ('Try typing Yes, Y, No, or n');
        console.log('User entered incorrect answer for prompt');
    }
}
// For loop game
function baskinRobbins() {
    let guess;

    for (let i = 0; i < 5; i++) { // Fixed counter issue.
        guess = parseInt(prompt('Do you know how many flavors of icecream we have?'));
        if (guess === 0) {
            alert('We definitely have more than that!');
        } else if (guess > 0 && guess <= 10) {
            alert('Keep trying! We have more than ten!');
        } else if (guess > 10 && guess <= 15) {
            alert('Keep going, hint think about a famous icecream chain');
        } else if (guess > 15 && guess <= 20) {
            alert('Almost!!!');
        } else if (guess > 20 && guess < 31) {
            alert('Just about there!!!');
        } else if (guess > 31) {
            alert('Too much!');
        } else if (guess === 31) {
            break;
        }
    }

    if (guess === 31) {
        alert('Good job!');
    } else {
        alert('Sorry, you\'re out of guesses. We have 31 flavors!');
    }

    if (yourFlavors.length !== 0) {
        alert('You should order these flavors when you come into the shop: ' + yourFlavors.join(', ') + '!');
    }
}

//for loop

const magicNumbers = [23, 27, 47, 96, 40, 199, 300, 200, 99, 12, 42];
const guess = parseInt(prompt('Can you guess the magic number?'));

for (let i = 0; i < 5; i++) {

    if (magicNumbers.includes(guess)) {
        alert('You win!');
        break;
    }   else (!magicNumbers.includes(guess));
    prompt('Try again!');

}

// Examples
// const theWinner = 27;
//     if (theWinner === magicNumbers)
//         alert('You win!');
//     else if (theWinner != magicNumbers)
// //         alert('Keep trying!');

// const example = [1,2,3,4];
// const example2 =['a','b','c','d'];

// let key = 8;

// for (let i = 0; i < 4; i++) {
//     if(key < 9){
//         alert(example[i]);
//     }else if( key > 9){
//         alert(example2[i]);
//     }
// };