// Introduction to Programming

/*

Hi Mihai,

First of all, it is my distinct honor to teach you
as my son how to program. It is a wonderful skill to have, 
and at times will feel like a superpower for the simple
fact that it allows you to put your ideas into reality
via the digital Realm, which in my own opinion it's something
that allows us to extend ourselves and reach others in a 
profound way; we can literally change the World.. 

It is a fantastic manifestation of our genius, so never give 
up on this special chance to make a difference for yourself, 
and not least..for others.

As you know, I grew up in Romania, and in 1998 my
big brother brought home an IBM 286 computer. It was so 
limited in comparison with what computers are today, but
it had 2D games, and he was able to perform his 
accounting jobs on it. He was working right from the bedroom of 
the apartment where we grew up; it was a magical tool to have.

Since then, that's all I foresaw for myself, to be able to 
perform my job on the computer; that was not a norm at the time,
as everything was performed manually & on paper. That has changed 
in terrific ways, and by the time you'll grow up, the World of 
computing will mostly be A.I. driven.

Until then, it is quite crucial that you learn how to program
in a flexible language, like JavaScript, although we'll end up
transitioning into Typescript as well, so that you can take 
advantage of type safety, among other things.

There are thousands of programming languages, and there will 
be more to come. Do not get distracted by that as there are 
some underlying concepts that are universal and apply to all
in an equal manner. For now, I chose to teach you the Web
platform, to create Web sites, which you have visited thus far.

It is about time you learn how they are built; you'll see that
the process is quite fun and not as hard as you or others might 
think.. I built my very first Web page in 2000; I made a personal 
Web page and published it via Netscape, currently Mozilla. It was 
something unheard of, and I felt quite special for being able to do
that; this is that superpower feeling I was talking about earlier.. :)

Before we jump right in, I want to tell you that nobody can teach you
everything, and the most important thing to watch out for are those 
situations or individuals that will try to limit you, stop you from
achieving your goals in life. You'll come across them quite often,
so never get deceaved nor discouraged, keep going..because you can
literally do anything! 

With that being said, let's begin with the basics of JS, such as:

1. Variables & Constants
2. Arithmetic Operators
3. Comparison Operators
4. Logical Operators
5. Decisions
6. Loops
7. Functions
8. Primary Data Structures
9. Classes & Objects
10. Final Project (We'll apply everything learned..)

Once we go past these basic building blocks for programming,
we'll transition into 'Data Structures and Algorithms,' to
see how we can build optimal code. Nobody wants to wait,
so we must learn about fast ways to get the job done! :)

Without further ado, let's get started with the interesting
topic of '1. Variables & Constants.'

*/

// 1. Variables & Constants

/*

There is much to be said about each and every concept, although
we're going to touch up on the most influential details. With 
time, you'll discover the rest and fill in the small gaps I 
left uncovered. Deal? All right..then! :)

Variables & Constants are nothing but pieces of the computer's 
memory. They are like labeled boxes, so that we can easily find
what we're looking for, and surprisingly that is how things 
are within our brain as well..compartments where we store
things we gather through our senses (visual, touch, smell, etc.)

They allow us to have the computer store things for our programs, 
so that we can perform computation and achieve our tasks. 

Simple and beneficial, right? Cool! :)

I know, even if things don't make sense at times, you'll see how
it all ties-in beautifully together, so don't panic.. Hahah

Okay, where were we?? I know, '1. Variables & Constants,' great job! :)

Variable & Constants are of two kinds (local and global) from a scope's
perspective. What is a scope? Well, great question! 

Every program has a given sequence in which it runs the code we're
writing. It is ran sequentially, kind of like when you make a peanut
butter & jelly sandwich. You follow a certain algorithm or steps in 
order to achieve that final goal, the peanut butter & jelly.

That jar of jelly for example..think of it being at the global level,
and the jelly which you already spread onto the bread to form that 
sandwich is at the local level, because it's part of the sandwich now.

Don't worry if this doesn't make too much sense, I'm going to show you
concrete examples in JavaScript that will reflect that quite easily. 

So let's see how we can define our variables & constants, which again 
are nothing more than small pieces of memory, which we meaningfully 
label in order to  structure and recall the data stored within our 
program, like so..

*/

// variables
var firstName = "Mihai"; // This is an older way using var, but still used often
let middleName = "Adrian"; // This is a new way using let, which I prefer
let lastName = "Mowrey";
let age = 11;

// constants
const birthPlace = "Seattle";
const state = "WA";
const birthYear = 2008;

/*

I know, you're probably saying..'but Tata, what is all this gibberish??'

Don't worry, I once was as confused and without someone's guidance.. All I
know, I learned on my own by reading books and now with the advancements
of the Web, there are quite a few amazing courses audio-video..which 
you can learn absolutely anything you wish! You're not out of luck, like
I kind of was. I say 'kind of was,' for the simple fact that I dislike
reading; I find it boring and a very slow process overall. I like going
at amazing speeds to make great use of my energy and efforts!

The reason why I don't like LIVE events is because I can't speed them up!! Hahah

All right, so now let's come back to the code I wrote earlier.

Something to keep in mind is the naming convention.

For example:

firstName - This is something called camelCasing; when we have mutiple words,
we start off with a lowercase, and then uppercase the first letter of every
word after that. Simple, right?? Yes, quite simple, but in reality a lot of 
people struggle with this little rule..so don't be like them. :)

I'm just joking, people as you know are wonderful entities. Through the right
interaction, we can transform everybody else's life in the better, which is
the main intent for learning how to program in the first place. 

Quite a while ago, I didn't speak English, although I wanted to. In fact, I was
praying to God to even allow me to forget Romanian, just so I can speak English;
that's how much I desired to know English. In the end, I am able to speak both
languages just as well, and that only broadened my reach and understanding of 
the World around me.

It will be similarly with learning a programming language, but even cooler I
believe as you'll get to work on projects that others can use and achieve their
daily tasks in a much easier manner.

That alone will boost your confidence to create even more amazing things!!

So yeah, this naming convention goes further, such as:

camelCasing which was mentioned

We can't start it with a number, like 1Number, instead we can do
oneNumber or _oneNumber or $oneNumber, although as you can see these get kind of
ugly and complicated. We want to keep our naming as simple and as self-descriptive
as possible..

Okay, now that we have that out of the way, let's see what else we need to cover
based on the code written earlier.

var, let and const are special keywords; they're part of the programming language,
which also means that they are reserved..we need not to use them for our purposes.

Like them, you'll see that there are many, but as long as you respect and not use
them, the development environment won't complain about it at all! :)

Let's keep going..you're doing really well, by the way!! 

The base structure is this..

keyword (in this case var, let, const), a label that we choose to distinguish that
variable or constant by, and then equals (=)..some value (it can be of several
types as you'll see very soon what I mean by that).

So not hard at all, even if it feels like a lot of rules to follow..

It is, but don't worry, you'll get up to speed in no time!

I mentioned that we have multiple data types.. Hmm, what does that really mean?

Well, you're familiar with numbers, characters, objects, etc.

Objects are little bit more complicated, but for now let's touch up on a few 
data types, such as:

characters - are nothing but single characters ('1', '$', '@', etc.)

numbers - are negative and positive values (-1, 100), and we can have integer or
whole numbers (negative and positive) and floating-point numbers (positive/negative)
that have a decimal precision (3.1415, or -9.99)

strings - a combination of characters, like ("Hello, World!")

boolean - true or false; it can have one or the other..it's either ON or OFF

It keeps on getting complicated, right? But was it hard to understand everything
thus far?? Not really..and based on these building blocks you'll see how you can
build your own data type which we can create objects out of, such as a ball, 
hat or whatever else we wish, we can get that sort of structure transitioned 
to the computer, and it'll be more than happy to create whatever object we wish!

As you can see above, in our code we delimited strings by '' (single quotes) 
and by "" (double quotes). Usually, a string is delimited by "", although
it is very common nowadays in various languages like Python, Julia, Rust etc. including
JavaScript to use '' instead of "", like C/C++/C# desires, which are other programming
languages that you'll most likely deal with sooner or later.

I am sure you noticed the ; symbol as well.. That is used to end a statement, exactly
as you use the . to end a sentence in English. Some programming langauges do not
require such punctuation, like Swift, Python or Julia to name a few.

So yea, there are thousands of programming languages out there, each specializing 
in achieving something in a better way; no, it's not as hard to learn a dozen 
programming languages..it's not as hard as it is with natural languages that we Humans
speak, so don't worry about that too much. You'll learn some universal concepts that
will apply to all programming languages, such as variables and constants, or loops and
pretty much everything I'll teach you in this initial programming course.

We will continue our journey now to the '2. Arithmetic Operators'

*/

// 2. Arithmetic Operators

/*

Okay, so far in school you've learned of the arithmetic operators, such as +, -, *, /.
And that's all good, because you are already familiar with how they operate. In 
programming, we have one more operator called modulus and it's the % symbol, so 
altogether we have +, -, *, /, and %.

Let the computer use them..and see how we can make use of variables and constants
to perform some mathematical operations. 

*/

let x = 5; // declare and assign

// print its value
console.log(`The value of x is ${x}`);

const PI = Math.PI; // This is a built-in feature to give us the PI value
// which is an ongoing floating-point number

// print its value
console.log(`The value of PI is ${PI}`);

var y; // here we declare a variable in this case using the older way
// via  the var keyword, although soon we'll eliminate it

// print its value
console.log(`The value of y is ${y}`);

y = 2; // Here we assign the y variable a value; 2 in this case
// which is not doable for a constant. That's why it's called a
// constant, because its value won't change, it'll remain constant.
// It's not the same for a variable; throughout the execution of the
// program, its value can change as many times as we need it to.

// Let's say we now want x to be 50 instead of 5; we simply
// call its name and re-assign it the value 50, without the
// need to declare it again, like let x = 50; We simply
// say x = 50;
x = 50; // x's value from this point on is 50; up until this point it was 5

// print its value
console.log(`The value of x is ${x}`); // it's 50, you see!! Hahah

/*

Oops..y seems to be undefined. Hmm, what does that really mean?

Well, we have other data types, such as undefined, null and NaN (Not a Number).

Keep those in mind as we'll come back to them during our '5. Decisions' section.

Undefined simply means that we declared the variable y in this case, but we never
assigned it any value, therefore it has nothing to print.

OMG, so many strict rules..you see? This is what bugs people, this formal way of 
structuring the language. If not done properly, the computer will complain about
every little thing, and most people are weak and complain a lot.

With that fact out of the way, let's see how we can make use of these declarations
to perform Mathematical operations on.

Are you ready?? Good! :)

*/

// assign y a value
y = 0.5; // this is a floating-point number, which is its data type

/*

Before we continue, let me explain to you the weird syntax of the

// print its value
console.log(`The value of x is ${x}`);

portion that I introduced above..

Once up on a time, there were these harsh programmers who thought that doing things
the hard and stupid way was the absolute way to go! I talked to many of them and
told them that some of the things didn't make sense, and sure enough they got way
easier and much better after a while.

Whatever you learn, please keep a flexible mindset to allow change, as it is much
needed..you'll see that for yourself along the way.

Taking the code above into consideration, its equivalent was like so:

console.log("The value of x is " + x);

OR

console.log('The value of x is', x);

They achieve the same thing, although as its complexity grows, it becomes very 
impractical, hence we are using the first version I showed you. It's more natural
to how we structure sentences in our natural langauges.

In order to form our string literals, we make use of these special qutoes `` which are
somewhere under the ESC button on the keyboard. 

After that, all the operations or variables/constants, etc. we want to include,
we delimit them by simply wrapping them around ${}..it's not hard at all, otherwise
we'll go crazy with concatenating things all the time, which by the way is the + symbol.
It doesn't mean addition in this case, although it adds things together, but its 
special name is concatenation. You'll use it when appropriate, but for printing 
purposes, I believe that the 'template literal' is much better and more practical!

Since I clarified that, let's continue with our Mathatical operations..

*/

let result = x * y; // we can use all the other operators too

// print
console.log(`${x} * ${y} = ${result}`); // the result is 25

// let's do some more
console.log(`${x} + ${y} = ${x + y}`); // 50.5
console.log(`${x} - ${y} = ${x - y}`); // 49.5
console.log(`${x} / ${y} = ${x / y}`); // 100
console.log(`${x} % ${y} = ${x % y}`); // 0.. Hmm, this is a bit strange you may say.
// Let me explain to you how this remainder/modulus operator performs. Imagine that
// you need to divide a number by another, and in order to do the calculation and have
// a decimal number as a result, you will have a number plus a remainder; I'm sure you
// did something like that in school.
// Let's take 2 % 4..the approach is like this:
// How many times does 4 include 2? Well, you guess right..2 times!! Good job!
// And if we had 4 % 3? How many times does 3 include 4? Well, 0 times, but we have 1
// left, don't forget that!
// Okay, I know it's confusing, but let's do another example..
// 10 % 20, the question still remains how many times does 20 include 10?
// Well, you once again calculated right 1 time, and now we have 10 remained, which
// is our final result. It won't be able to go further because it has nothing to
// compute against, after the first time through it from 10, it becomes 0, therefore
// the computation is finished! Weird, but quite awesome at the same time..

// All right, you're moving along quite fast! I wish I had this sort of simple and
// clear explaination when I first began to program. So take advantage of this
// opportunity and keep going; you don't have much furhter to go, and it'll be a lot
// of fun, I promise!!

// 3. Comparison Operators

/*

I'm not sure if you learned this in school already, but their 
rule is quite straightforward..so don't worry too much.

> means greater than
< less than
>= greater than or equal to
<= less than or equal to
!= not equal to
== equal to

But, as we'll see very soon, JavaScript is a bit confusing the way it was made
by Brendan Eich..in just 10 days! Hahah The guy is a genius!!

Then it grew and matured, but its initial creation took him roughly 10 days..

Hang in there..as most people who try to learn programming already vanish by this
point, so don't get discouraged even if there's something you don't understand.

Lots of these concepts will be revisited throughtout our journey and they'll 
start to make more and more sense until you fully see what's happening.

To be honest, this is just the first step, learning the syntax and universal rules
which you must obey. As we advance onto the next volumes of this series I created
for you, we will start with some ideas and try to analyse and write the code to
accomplish them..which will be extremely rewarding, I promise! So hang in there..

Let's make some examples with the comparison operators we went over above.

*/

// declaring two variables, named
// firstNumber and secondNumber
let firstNumber = 5;
let secondNumber = 4;

// let's perform comparisons on them
console.log(
  `${firstNumber} > ${secondNumber} is ${firstNumber > secondNumber}`
);
console.log(
  `${firstNumber} < ${secondNumber} is ${firstNumber < secondNumber}`
);
console.log(
  `${firstNumber} >= ${secondNumber} is ${firstNumber >= secondNumber}`
);
console.log(
  `${firstNumber} <= ${secondNumber} is ${firstNumber <= secondNumber}`
);

// Everything should evaluate to false. Now, let's look at the rest of the
// operators, but first let me explain some basic things about how JavaScript in
// particular digests them.

/*

We remained at 'not equal to, equal to and the not operator.' All right?

Not equal to is represented in most languages by '!=,' although JavaScript is
a bit pickier when it comes to equality or inequality. We have to check for 
both the value itself, in our case 5 and 4 from firstNumber/secondNumber, and 
also for its data type..remember we discussed data types at the beginning of
this volume? 

Okay, good memory!! :)

Just remember this:

!= only checks for the values of the two variables (firstNumber/secondNumber)
!== (with double equals) checks the values and the data type at the same time!!

Now that we got that out of the way, let's see how we can apply them, so that
you can better understand what's going on. Programming is something practical,
you never have to get scared, but rather type codes and experiment with them in
order to get the full picture. Soon you'll even develop a sense of what's going
on as a whole, and can just analyse the code just by looking at it, although I 
personally prefer to type things in an editor which I'll talk to you about very 
soon, and in this case its interpretor, which is a program that can translate
to the computer in binary code (1's and 0's) what we meant to tell it via the
code that we typed. :)

I know, it's magic..but this is the power we have in our hands, truly! Hahah

The 'interpretor' is our best friend..because it is the magical window through 
which we can communicate to the computer; it's not like us, it's another species, 
although you'll realize that the computer itself is nothing but an extension of
ourselves as Humans. It has a brain called CPU, it has memory, storage, etc. And
those are helping it think like Humans, only it can't do things on its own just
yet. For the most part it can, but we haven't reached what's called Artificial
General Intelligence; once that happens then computers and Humans will be truly
alike. Until then, we'll be its programmers, telling it what it should accomplish
for us. Smart, huh?? And just be patient, we'll get into machine learning at
some point, too. We'll create a general program that will write itself further, 
analysing and crunching data to spit out useful results so that we can tackle
the World's problems, like curing cancer, diabetes, or anything that we think we 
need a solution for. It's really beyond words what computers can and will ultimately
helps us with; personally, I'm very excited!

Oh, okay..let's get back to the operators we left off to. :)

*/

// First, let's see why it's good to use !== and not just simply use !=
// Imagine now we have a thirdNumber that will be '5' instead of 5,
// which means it will be a character 5 not a number 5, okay?

// Let's declare another variable called thirdNumber
let thirdNumber = "5"; // remember, its data type is character

// comparing firstNumber with thirdNumber
console.log(
  `${firstNumber} != ${thirdNumber} is ${firstNumber != thirdNumber}`
);

// Our out is: 5 != 5 is false..well that's strange!! This is the reason why
// I told you that we need the value to be the same and its data type, which
// in our case, we had our firstNumber representing a number data type, and
// the thirdNumber representing a character/string data type. Hmm..just that
// little difference, gave us the wrong result, which we weren't expecting.
// But now, let's try it with the !== operator, which as you see it has an
// extra equal that also checks for the data type. Let's get to it!

console.log(
  `${firstNumber} !== ${thirdNumber} is ${firstNumber !== thirdNumber}`
);

// The new out is: 5 !== 5 is true
// Yahoo!! We did it, it performed exactly as we wanted! :)

/*

Throughout our programs, we must negate the value..and even if it might feel strange
for now, I promise you that it'll be quite useful down the road.

Wow, I can't believe that we are done with this harsh, but really fun section as well!!

You're an amazing learner Mihai; I'm so thankful because of that!

*/

// 4. Logical Operators

/*

Ugh, but I thought we were done..with these operators! Well, sort of.. Logical operators are wonderful
for the fact that they help us combine what we learned previously. :) So as you might imagine, it's not
all that hard at all! I believe they are really fun, and you'll see for yourself that they are..

Are you ready?? Okay, let's do this!!

&& - this is the AND operator

What this refers to is we must have an evaluation of true && true in order to be true altogether.

If it's..like this:

true && false, then it's all false..

|| - this is the OR operator

Here, at least one of the sides must be true in order for it to evaluate to true, such as:

true || false is evaluating to true

false || false will evaluate to false; I hope that that is not that hard to wrap your mind around.

! this operator negates; so if it's true..will become false, and if it's false,
you guessed it, it becomes true! Hahah 

Nicely done, Mihai!! I'm so proud of you!

Unfortunately, in real life, many people think something and say something the
opposite way, they hide their inner feelings and/or thoughts. This is kind of a
great example to explain the last comparison operator '!,' the NOT operator.

*/

// let us have two variables of boolean type
let leftSide = true;
let rightSide = false;

// Demoonstrating the AND operator
console.log(leftSide && rightSide); // this evaluates to..?? false, of course!

// Great job!

// Demoonstrating the OR operator
console.log(leftSide || rightSide); // this evaluates to..?? true, of course!

// Awesome!! You got this..

// Demonstrating the NOT operator
// declaring and assigning
// a variable of type boolean
let myAnswer = true;

// negating it via the NOT operator,
// which in this case it is delimited
// by the ! symbol
console.log(!myAnswer); // this changes from true into false
// that's the final output

// We'll revisit all of these concepts once we get through them all, but for
// now keep in mind that nothing should be impossible to comprehend, because it isn't.

// 5. Decisions

/*

This is the topic that inspired me the most. We have the true power to lead the computer
to make decisions on our behalf, and that feels great! We can lie our trust in its bits..

In this section we're going to see clearly how all the concepts we learned thus far are
showing up in our code, and how useful they are.

Imagine there are running categories, 2 yrs. apart.

Above, we declared your age, which we can make use of and decide what category you fit in,
year after year.

In order to start writing some code, we have to understand what we need to accomplish first, 
so being able to take a problem and dissecting it in smaller pieces is key.

Let's assume that by age 13, you'll fall into a different category of runners.

Your current category is 'C2,' then when you turn 13, your category will be 'C1,' and 
after that when you'll be 15, your category will be 'J3.' Okay?

So if we were to take that apart and write it in plain English would result:

If I am between 11 and 13 yrs. old
  I am part of the C2 category
Else if I am between 13 and 15
  I am part of the C1 category
Else
  Beyond 15 yo., I'll be J3

You see, this is the hardest part when coding. People forget to plan, and therefore
the solutions that otherwise are very simple become extremely fuzzy and cumbersome. 

Throughout the history of computing, several methods of making decisions have been
implemented. The ones I know exist are:

  if statements
  switch
  ternary operator

Sounds like fun, huh?? Well, they are quite a bit of fun; let's see how they're 
accomplished through code.

*/

// if statements

// first, let's make sure what age tells us
console.log(age); // all right, it checks in
// the variable age is 11, just as I thought
// it was preserved from earlier when we began
// this programming journey

if (age > 11 && age < 13) {
  console.log("C2 category");
} else if (age > 13 && age < 15) {
  console.log("C1 category");
} else if (age > 15 && age < 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Output? Hmm..it says "You're part of the totally different category.."

/*

But Tata, you said that age checked in as 11 yo., and we checked if the age is 
between 11 and 13, then it's the C2 category. What happened? Is the computer
all right?

Well, it is quite all right..it is our fault based on the comparison.

Let's take a closer look.. We told the computer to check if the age is greater than
11, which means we excluded 11 itself, so we must re-write our code in order to 
comply with the rules we set for each category.

*/

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Output? C2 category..it's exactly as we expected it! Let's check against
// the other ages to see if it complies, so let's reassign the value of age.

age = 12;

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Output? C2 category, which still checks as good

age = 13;

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Okay, still C2 category which is great!

age = 14;

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Ouput? C1 category, exactly as we expected..you see?? :)

age = 15;

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// C1 category still; perfect

age = 16;

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Output? J3 category; right on the money!!

age = 17;

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// J3 category still

age = 18;

if (age >= 11 && age <= 13) {
  console.log("C2 category");
} else if (age > 13 && age <= 15) {
  console.log("C1 category");
} else if (age > 15 && age <= 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Output? "You're part of a totally different category.."
// Exactly as we expected!! So great job! :)

/*

Wow, that was a mess Tata.. Yea, but it is quite important that whatever
we write, we must test against several cases to make sure we're not
causing other problems; we're here to solve problems not 
create other problems.. All right? 

Until you get used to coding these building blocks, you have to iterate
through them, so that you are in full control what you're writing.

Now let's see how we can implement the same solution using the switch(){}; statement..

*/

let check = 18; // values to check against: 11, 12, 13, 14, 15, 16, 17, 18

switch (check) {
  case 11:
  case 12:
  case 13:
    console.log("C2 category");
    break;
  case 14:
  case 15:
    console.log("C1 category");
    break;
  case 16:
  case 17:
    console.log("J3 category");
    break;
  default:
    console.log("You're from a totally different category..");
}

// Hmm, you might as..why do we have two cases for most of them, but three
// cases for the first part of this switch(){}; statement? You're right..
// We must have a clear line by which we guide the categories, individually.

// Looks like, as soon as the athlete hits 13, it shouldn't qualify for the
// C2 category. All right, that makes sense. So, let's change that.

// Let's go back and adjust that for the if statements as well. Great job!

// Back to the if statements

// reassigning age
age = 16; // values to check against: 11, 12, 13, 14, 15, 16, 17, 18

if (age >= 11 && age < 13) {
  console.log("C2 category");
} else if (age >= 13 && age < 15) {
  console.log("C1 category");
} else if (age >= 15 && age < 17) {
  console.log("J3 category");
} else {
  console.log("You're part of a totally different cateogry..");
}

// Now, let us fix the switch(){}; statement as well..
check = 11; // values to check against: 11, 12, 13, 14, 15, 16, 17, 18

switch (check) {
  case 11:
  case 12:
    console.log("C2 category");
    break;
  case 13:
  case 14:
    console.log("C1 category");
    break;
  case 15:
  case 16:
    console.log("J3 category");
    break;
  default:
    console.log("You're from a totally different category..");
}

/*

What we just did is catch some semantic or logical errors, which the Interpreter
can't spot for us. Those are the most dangerous errors we can face in this World
of computing. 

I want you to relax your brain for a bit, since this is only the first phase to 
introducing you to this whole field, which beyond our imagination. It is a truly
astounding structure which we conceived, and we better understand and make great
advancements with it. 

In the second volume of this series, we'll come back and revisit them all, but from
a different perspective. Right now, we're only getting you accustomed to what 
programing is all about. You or anybody else isn't going to become an expert from
a first, initial try..you know? It takes time, practice..mistakes to get there.

And that's with everything worthy in this World. There might be some gifted people
out there, but what truly will make the difference is how serious you take everything
you give a go in this World. Somewhere within all of us, there's this sparkle of 
genius. If we find it, we'll do amazing things! So for the sake of discovering 
who you truly are, intellectually..it is time to relax and approach everything
convincingly that you can do it, and you will do it..

Remember this, most people are too grown up in order to have the curiousity that
such strides require. Most of the population is lost when it comes to something
creative and worthy. They live life, like it's the end of their existence, and
that's totally wrong. 

Programming is something that will always stimulate your creativity; it will 
push you to think in interesting ways to come up with an optimal solution
to a problem or set of problems. But before you're capable of making
those solutions optimal, for now just focus on making solutions to the
various problems we'll go over in this series of volumes. 

They are nothing but a shortcut to get you started, to not let you give up
before it is time to give up. So many have tried or will try to learn how
to program, and due to the lack of guidance or support from others will end 
up giving up. They come to believe that they can't do it, which is far from 
the truth. Within various means, we can achieve anything we wish.

For some of us, there might be some barriers, such as mental issues or
physical limitations that might stop us to a certain degree, and even then
we've seen amazing things taking place through the Paralympics, which is a 
gathering full of people who have suffered tremendous damage due to an 
illness or accident in general, and aren't like the normal people, although
they live a normal life..they dream and strive to achieve similar things,
which is beyond words and quite inspiring. 

Now, that's the attitude to have in life dear Mihai! <3 It is important 
to be ready not to give up. Having that inner strength will make you
succeed. 

I can't tell you how many times I tried to learn what I am just now 
presenting to you in a clear and confident manner. I have a strong
passion for teaching and learning, so no matter how long it'll take
or how hard it may be, I am never giving up.

I want to make myself proud, yourself proud, and everybody else proud!

That's my ultimate mission..and there's nothing that can stop me as
long as I am healthy and capable of achieving and following this dream!! :)

All of this will continue to be fuzzy, unless you think of something to
solve with. Having a mission is one thing, but having a main purpose in
it is totally different. It'll make you think to the next level.

The beauty of creating everything at the speed of your thoughts is fantastic,
and like with any other field out there, you'll get to experience that 
immediate feedback..which nothing can beat it!

You are in full charge to unlesh those thoughts into some implementation that
will obey just that.. Tell me that that's not a superpower!! Hahah

Okay, enough advice for now; let's continue with the 'ternary operator.'

This is something that we check against a condition..something short
and to the subject.

Let's check to see if the person is at least 18, then we'll let them 
know whether they're an adult or not. Sounds good??

*/

age = 18;

console.log(age >= 18 ? true : false); // its output: true
// which is correct. The age variable's value is at least 18

// This can go in so many details, but unfortunately we won't have much time
// to live or achieve anything if we get stuck with all the details about
// everything we're going through. What we need to remain with here is
// that its general format is: condition ? if the condition is true, then
// output as the result whatever it's found after that ? symbol, otherwise
// output whatever is after the : symbol.

// Not bad, right?? Hahah Great job!

/* 

6. Loops

Wow, we're moving along quite fast! Loops are going to save us so much typing,
so much repetition, because that's what it was designed to do..to repeat
things over and over, or as you might hear to iterate over something over 
and over until it holds true, no more. :)

Imagine having to type every single number manually from 1 to 1 Trillion!! 

While that's doable, it'll be so much time consuming for us as Humans, right??

Computers are so much faster when it comes to such outputs, therefore designing 
them to run at the speed of light is quite fascinating and useful.

As you'll see when we cover full-blown data structures how even computers struggle
with some of the tasks we'll hand them to perform for us, and that's when algorithms
come into play. Algorithms are nothing but a well-defined rule that the computer
must follow in order to produce the output in a more optimal way.

These loops will help us to explore new ways, which is why they are so powerful!

It is impossible to imagine the World of computing without them, and without 
these basic concepts which we're going over in this volume. They are what 
make computer science tick. 

Having such an understanding and appreciation, I hope that you see the possibilities
at hand, and that you take them seriously..because you'll encouner them all throughout
your journey as a coder.

Knowing what it has to offer you is more important than solving any of your desired
problems. By having such a base, your brain will be unlocked to leverage the 
power of computing, and because of that you'll use this powerful tool and 
methodology to implement solutions to those problems.

What I am suggesting is that you are doing really well, and that you must keep
going no matter how hard this may feel; it is hard and boring at times, but 
I promise you..once they click within your mind, you'll have a totally
new set of possibilities, and it'll be impossible to want to go back. Hahah

Enough talk, let's see what kinds of loops we have:

for loops
while loops
do while loops

Hmm..that weird, kind of like with the decicions. Yea, kind of like that,
and they are like that with a reason which we'll go over.

But before that, let's cover why decisions were the way they were, and why
not have just one.

As you saw, the power that they have to make decisions based on our intentions
is quite fabulous. Over the years, people thought that making extra ones to 
complement the if statements would be easier to deal with or understand.

That's why when we repeat ourselves with so many checks, it's time to 
apply a switch(){}; statement, instead. When we don't have so much to check 
against, and want something short and sweet, we can use the ternary operator,
and so on.

See? That's not bad if you take that sort of reasoning into consideration. :)

Similarly with loops, sometimes we know how many times to iterate over something,
and that's when we'll benefit greatly from a for loop, and when we don't know..
we can take advantage of the while loop. 

Okay, that's reasonable, but what about the do while, Tata??

Imagine this, where you must try something at least once to see if you like it,
no matter what the decision is after that.

So as a child, you had to try all sorts of foods to see if you like them, if 
you're allergic, etc. It's kind of like that, where we execute the code at least
once, and if the condition is met (meaning that you didn't have any problems with
the foods you tried), only then it'll iterate.

Smart..right?? Hahah

Cool! So now that you understand what's going on, let's see how they are each
implemented.. It's a lot of confusing fun, I can assure you, but if you pay
attention, it'll click and you'll see their unlimited potential!!

As a first example for the 'for loops,' let's have the computer count for us from
0 to 10, so that we won't freeze the browser! Hahah

*/

for (let counter = 0; counter <= 10; counter++) {
  console.log(counter);
}

// The output is right on the money. The computer did exactly what we commanded it
// will do for us, count from 0 to 10..

// Let's make use of a while loop:
let condition = true;

let userInput;

while (condition) {
  userInput = window.prompt("Enter age:");

  if (userInput > 18) {
    document.write(userInput + "<br>");
  } else {
    break;
  }
}

// do while
do {
  alert("Give me ice cream!!");

  let likeOrNot = confirm("Do I like it?");

  if (likeOrNot === true) {
    console.log("Let the loop continue!");
  } else {
    console.log("You do not like ice cream!");

    break;
  }
} while (true);

/*

Wow, this is awesome Tata!! I can't believe that the computer can pull all 
of this off..so accurately, like it has a mind of its own! 

It's beyond awesome!

I know that you're very curious to know what all this means, but we're 
following a learning methodology called 'spaced repetition,' in order to 
fully understand and grow throughout these experiences. Our mind and 
brain can only process so much at a time. 

If we revisit the experience and add something to it, we're only going to 
understand better and better, and truly learn what we set ourselves up for.

This will prevent the phenomena of burning out..

*/

/*

One of the most important things to learn from this is not these universal concepts,
this formal language. After all, it is useless without an opportunity, without a 
vision of the real World, how you can benefit it through this channel of information.

The truth about our World is that we're so many entities, and without a well-defined
plan to sustain that Human growth. We each have our own needs, and without categorizing 
them properly to see what's at stake and what we should focus on most, we're not going
to change anything. We had fabulous geniuses living on Earth, including God Himself in
the form of Jesus, and not a whole lot has changed. What makes you and me think that we
will change anything at all?

These are the problems and fallcies of this Realm we're dealing with, and we have to think
deeply if we want to succeed as a whole, not just on a personal level in the sense that
my income is greater than yours or somebody else's. That's pure irony, and this is why
we keep destroying ourselves over and over again! 

The greatest realization that you must have is the possibilities you have to change this
World, and then do it! What good does it do for me to keep telling you about all these
beautiful concepts if you are not relating to any of them? That is what ultimately will
make you a programmer or not, not because you don't understand how to do something..
temporarily, and believe it or not it's just temporary when you don't get something,
no matter how negatively you look at it!

Whether people as the bottom line are beautiful machines of the Universe, we don't 
know how much flexibility we have to change the trajectory of our living. We allow
the evil emotions take over ourselves, and in the end make as many separations
from one, another as possible.. It's insane how much damage we caused each other
by following that blind path!

The educational system only knows one way, it doesn't comprehend each other's way,
it has no adaptability in mind to scale for you, me or anybody else. Sure, you
may take that as a joke, or someone else might say that it is not true, but who
are they to say that someone can or cannot do something? If I look around, I only
see broken Human entities; just watching them live life without purpose will give 
me the right to process them as garbage living-breathing creatures. Does that make
me right, necessarily?? No matter how right one situation or another might be, that
doesn't have to be the final answer. We have to support each other, in order to 
find out who we are. I really mean this..we all have special abilities with which
we can contribute to this special World, and it is special in every sense.

I can easily say that the World we live in is an absolute reflection of the 
mentally-sick people who were in charge at the time.

Is that what we wnat to be defined by as Human beings, as special creations of God??

There are so many concepts than I have time in this Realm to teach you..the ultimate
goal should be "why am I learning this, what can I truly do with it??" That's what's
going to enlighten you, not what I or someone/something else teaches you. 

With the unfortunate situation of COVID-19..for example, the brightest minds have been
put in the dark, overnight. Is that how we want to view ourselves, or is it possible 
to stimulate each other and keep that light going?? 

*/

/*

Okay, so we just finished loops.. Now what, Tata?

It would be easy for me to keep going, but not yet. Let us take a break, shall we?

Hmm, but we just got started.. Yes, I know we just got started Mihai, but the most
important thing for you at this moment in time is to have fun with it all. Allow
your mind to connect with what's possible, what is this programming phenomena all
about, let it reflect in and out of you, so that you can grasp what you must do, 
how you can achieve those things in the long run, rather than everything now, now
and now. You must figure out your pace, your beautiful passion and follow that.

It may not be programming, although this first step will get you to where you 
can connect with your inner self. By doing so, you will always know where to 
start. Programming is nothing but an enabler which will assist you at solving
problems you encounter, and during this break that we're purposely taking, 
I want you to watch a YouTube series called "The Age of AI." I'll include 
its link right here. Once you're done with all episodes..come back, and 
let's continue.

The Age of AI (YouTube Originals)

https://www.youtube.com/playlist?list=PLjq6DwYksrzz_fsWIpPcf6V7p2RNAneKc

I'll wait for you right here; enjoy! :)

Well, Mihai..how was it? It's great to have you back; we have truly amazing
concepts ahead of us, and I can't wait to present them to you!

I agree, The Age of AI is fabulous, and if we keep pushing forward, you'll be 
able to create your AI models through TensorFlow.js before you know it!

Wow, you know a lot of stuff Tata!

Yes, I do, but I only heard of TensorFlow.js, I have not played with it just yet, 
but that doesn't really matter because we're going to learn it together. Once we 
have this base, we can keep learning new stuff and more amazing stuff..

You see, learning how to learn is more powerful than just memorizing some stuff.
Sure, memory is a great characteristic of our complexion, although it's not properly
used..as you'll find out. We have to reason and learn in an experimental way. 
Only then we can truly learn something, when we tried and failed or maybe were able
to figure out on the fly, relying on our intuition. 

Oh, great.. That sounds like a good plan, Tata!

Our next section to cover is '7. Functions'

I love functions! And you know why? Because, they help us to group features separately,
and make use of them every time we need to call up on that feature..

Let me explain what I mean by it. So imagine that we have: addition, subtraction,
multiplication and division. Those are nothing but features of the arithmetic 
operations, correct? 

Cool, so what if we can make a function for each of those operations? When we give it
2 numbers, for it to give us the right result.. Sounds great, right? Kind of like
a box, where we give it some input, it'll do its thing and then give us the 
appropriate result.

Let's see how that's accomplished in JavaScript:

*/

// declaring the functions:
// addition, subtraction,
// multiplication, division

// addition
function addition(x, y) {
  return x + y;
}

// subtraction
function subtraction(x, y) {
  return x - y;
}

// multiplication
function multiplication(x, y) {
  return x * y;
}

// division
function divison(x, y) {
  return x / y;
}

x = 3;
y = 2;

// calling each function
console.log(addition(x, y)); // 5
console.log(subtraction(x, y)); // 1
console.log(multiplication(x, y)); // 6
console.log(divison(x, y)); // 1.5

/*

All right, that seems to work quite nicely, huh?? :)

It looks like we don't have limits creating whatever we want with programming.

Now, let's move onto the next topic, '8. Primitive Data Structures..'

Wow, that sounds hard Tata!

Well, more or so, but it'll be based on things we already covered.. The best thing
about programming is that one concept falls on one, another..which is why rushing 
is not the smartest thing to do. Worrying about every little detail is also not
a great thing, either, simply because you'll meet each and every concept over and
over again, and even though it didn't make sense right away, it'll keep coming 
back to your attention, and you'll learn/understand it eventually.

So you see, this is all about structure, the rules that we commonly put together.

Even if at times, when things don't work quite the way we want them to..we get 
frustarted with the way things were constructed. Hahah

Believe me, I had lots of frustrations because of that, and I learned a great deal 
from that frustration. You'll encounter yours as well, so be prepared and with an
open mind, to face such moments.

Privimitive data structures are nothing but, concepts like variables, the data
types you have learned about already which represent the kind of data, etc.

There are some things I need to cover, and that's something like the arrays,
objects which we'll soon create ourselves, etc.

Imagine knowing about variables and constants. Having 10 different variables
that relate to the same thing, kind of like a team of players, we can list
all their ages. 

We can do something like:

*/

let playerOneAge = 18;
let playerTwoAge = 21;
// ..and so on, and so forth
let playerTwentyAge = 25;

// Okay? That looks like a mess, right? But instead, we could make use of
// a data structure like the arrays, for example, such as:
let playerAge = [18, 21, 25, 19, 23]; // and so on
// As you can see, we can list them like that instead.

/*

I know you're curious to know how we can call each and every one of them..

We can access them individually, like this:

playerAge[0]; // this is the first player; arrays start off at index 0
and goes up to n - 1, n referring to the total length of the array;
in our case, how many players we have in total.

Or if we need to list all ages, we can make use of the loops we learned, 
mainly the for loop, although anything else is achievable with the other
ones we learned as well.

*/

// get the second player; index 1
console.log(playerAge[1]); // 21

// iterate over the entire list
// and print each player's age
// who's above 19 yo.
for (let i = 0; i <= playerAge.length; i++) {
  // we can check if the i > 19
  if (playerAge[i] > 19) {
    console.log(playerAge[i]);
  }
}

/* 

As you can see, we have tremendous flexibility to achieve whatever we wish.
We can introduce some of the concepts we learned and make things happen the 
way we want them. Programming is nothing but a puzzle put together based on 
our ideas. Those ideas are broken into smaller pieces, solved through the 
implementation of code and then put together.. 

It is also thought that nowadays people aren't writing software anymore, and
that software nowadays is assembled. In a way or another that analogy is true.

The part that I am excited is for me to write a general form for a program,
and for it to adapt itself based on the data that flows through it. This is
called machine learning. A beautiful concept that I want to teach you is 
artificial neural networks; they're my favorite by far!!

We're getting closer to the end of this first volume, which its intention was
nothing more than to present you with the possibilities of programming, how
it's done.. In the upcoming volumes, we'll not only go over these concepts 
in more detail, but we'll work on all sorts of examples, so that we can 
take advantage of what we learned and accomplish the solutions we are 
looking for.

Knowing what to make use of, and when..is very important. Identifying that
is going to be a great deal in how fluent and easy your programming
experience is going to unfold.

*/

/*

Okay, cool..now we're getting to the last topic we'll go over in this volume,
and that's '9. Classes and Objects'

There so much left to be covered about everything we covered, but the goal
was to get you familiar with what programming is, how it's done and what
it might be able to do for you. We will take a loot at the final project
and see how all that fits together, and then in the next volume we'll 
touch up on more details.. Since you already have a base, I won't need
to type as much and create boring materials, but rather something that 
you can keep learning something new every time. 

As Humans, we interact and understand objects the moment we come into this
World. It is a fantastic reflection for what we're going to cover really soon.
It is a paradigm called Object-Oriented Programming; yes, that's right..it is
a way for us to tell the computer what we really mean. 

Very few people look at the details concerning the objects they deal with 
everyday. Generally speaking, there is a hierachy which defines them, such 
as a category like Animal, Human, Car, etc. that each have special
characteristics which define the objects we desire to make.

Let's make a Car class, because why not??

Car {
  // some fields which sets the various values
  // for the object

  // some methods, which are like the functions
  // we saw earlier, and that perform some sort
  // of behavior on behalf of our objects
}

You see? It's nothing to it. Let's make an example:

*/

class Car {
  // this is a way for us to set
  // the class members..are called
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  // methods or the behavior which
  // we expect our objects to perform
  accelerate() {
    return "Vroom..";
  }

  brake() {
    return "Stopping..";
  }
}

// okay, this looks quite straightforward,
// now let's see how we can actually create
// an object/instance of the Car class
let myCar = new Car('Red', 'BMW'); // a new instance/object

console.log(myCar.accelerate()); // this will print Vroom..
console.log(myCar.brake()); // this will print Stopping..
console.log(myCar.color);

// It seems to work just fine in the browser..

// Now, let's make a more-rounded example, Human..
// We now that Humans can run, have a name, eye/hair
// color, age, phone numbers/email, etc. It'll be 
// easier for us to visualize all of these properties..
class Human {
  constructor(name, age, eyeColor, hairColor, phone, email) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.phone = phone;
    this.email = email;
  }

  introduction() {
    console.log(`${this.name} is ${this.age} yo.`);
  }
}

let person = new Human("Adrian Mowrey", 34, 'Brown', "Black", "982-203-2038", "learn@stimuli.app");

console.log(person.name);

console.log(person.introduction());

/*

Tata..all this is great, but how do you know all this?? The syntax is only an afterthougt,
Mihai. You see, in the next volume I'll approach this from a straightforward perspective.
You will see how much we skipped for now; my goal was to draw you in and show you the 
big picture. A lot of people learn how to program, and they don't see the whole picture.
They say that they know how to program, but yet don't see all its capabilitites. 

If it were to be like that in this case, I would've limited you as my own son, and I can
never afford that. I really wish you all the in everything, and I am next to you in any
way that I can. You are a very smart boy, and it is a blessing having you.

Whether you believe me or not, we skipped a lot of material..a lot of what this vast field
has to offer, but that's okay, because we're not done! 

Congrats for making it this far! :)

In fact, I might be creating a YouTube channel and teach the rest of the materials
audio-video.. 

*/

