# EREKLE RATIANI
## CONTACT INFO
+ Email: eratiani@gmail.com
+ erekleratiani@itvet.ge

### About Me
I'm an aspiring self-taught Junior Frontend Developer, who potentially wants to become a Fullstack Developer.

Right now I don't have much of experience in the field, but I've already finished some training projects. I go my university degree in marketing field, but I decided to pursue my goal of coding. I love to learn, that's why I'm currently studying at public collage and online to achive my goal of becoming a pro.

## Soft Skills

+ ability to understand specific text (documentation, articles etc.)
+ googling and asking the right questions (it's really important)
+ problem-solving

## Tech Skills
### General:

+ HTML5
+ CSS / Sass / Scss
+ Basic JavaScript / JQuery
+ Bootstrap 5 / Flexbox
+ Git / GitHub
+ 
## Code Examples
### HTML

<header>
            <div class="container">
            <div class="navBar">
                <div class="head_imgWrapper"><img src="images/Logo.png" alt="logo">
                </div>
                <ul class="ul_1">
                    <li><a href="#">home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Albums</a></li>
                    <li><a href="#">Pages</a></li>
                </ul>
                <div class="burger_wrapper"><img src="./images/burger.png" alt="burg"></div>
            </div>
        </div>
        </header>
### CSS

header {
    font-family: 'Droid Sans';
    
    background-color: #df001f;
    font-size: 1.3rem;
}
.burger_wrapper {
    display: none;
}
.navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 10px 45px 15px 5px
}
.ul_1 {
    display: flex;
}
.ul_1 a {
    display: inline-block;
    padding: 20px;
    color: #ffffff;
}
.ul_1 a:hover {
border-top: 1px solid white;
}
.head_imgWrapper {
    width: 115px;
    height: auto;
}
.head_imgWrapper img {
    max-width: 100%;
    height: auto;
}
### JavaScript

let sum = 0;
let isAlive = false;
let dealerSum = 0;
let hasBkackJack = false;
let busted = false;
let youWin = false;
let dealerBusted = false;
let addCard = false;
let dealerHasBkackJack = false;
let draw = false;
let message = "";
function hit() {
    if (isAlive === true && dealerBusted === false && hasBkackJack !== true && youWin === false && busted !== true & draw !== true) {

        let thirdCard = Math.floor(Math.random() * 11) + 1;
        console.log(thirdCard);
        sum+=thirdCard;
        document.getElementById("sum").textContent = "sum: " + sum;
        if (sum < 21 ) {
            message = "do you want more cards? ";
            addCard = true;
            
        }
        else if (sum === 21) {
            message = "you win it's a blackJack";
            hasBkackJack = true;
            document.getElementById("sum").textContent = message;
            youWin = true;
        }
    
        else {
            message = " you loose it's a bust";
            busted = true;
            document.getElementById("sum").textContent = message;
        }
    }
}
function randomNumbers() {
    let firstCard = Math.floor(Math.random() * 11) + 1;
    let secondCard = Math.floor(Math.random() * 11) + 1;
    console.log(firstCard);
    console.log(secondCard);
    sum = firstCard + secondCard;
    
}
function startGame() {
    isAlive = true;
    youWin = false;
    busted = false;
    dealerBusted = false;
    hasBkackJack = false;
    draw = false;
    randomNumbers();
    
    document.getElementById("sum").textContent = "sum: " + sum;
    if (sum < 21 ) {
        message = "do you want more cards? ";
        addCard = true;
        
    }
    else if (sum === 21 ) {
        message = "you win it's a blackJack";
        hasBkackJack = true;
        document.getElementById("sum").textContent = message;
    }

    else  {
        message = " you loose it's a bust";
        isAlive = false;
        busted = true;
        document.getElementById("sum").textContent = message;
    }
}
function endGame() {
    if (confirm("Close Window?")) {
        window.close();
      }
}
function dealer() {
    let fifthCard = Math.floor(Math.random() * 11) + 1;
    dealerSum = fifthCard;
    document.getElementById("cards").textContent = "cards: " + dealerSum;
   
}
function stay() {
    if (isAlive === true & dealerBusted === false & hasBkackJack !== true  & busted !== true & youWin === false & draw !== true) {

        while (dealerSum <= 16) {
            let fourthCard = Math.floor(Math.random() * 11) + 1;
            dealerSum += fourthCard;
            document.getElementById("cards").textContent = "cards: " + dealerSum;
            }
            if (dealerSum > 16 & dealerSum <= 21) {
                if (dealerSum < sum ) {
                    message = "you win dealer looses";
                    document.getElementById("sum").textContent = message;
                    youWin = true;
                }
                else if (dealerSum > sum ) {
                    message = "you lose dealer won";
                    isAlive = false;
                    document.getElementById("sum").textContent = message;
                }
                else {
                    message = "it's a draw";
                    draw = true;
                    document.getElementById("sum").textContent = message;
                }
            }
            if (dealerSum > 21) {
                dealerBusted = true;
                youWin = true;
                message = "you win dealer busted";
                document.getElementById("sum").textContent = message;
            }
            else if (dealerSum === 21) {
                dealerHasBkackJack = true;
            }
    }
}
## Experience
i am currently studying at public collage have done many projects there, no actual work experience so far.

## Education
+ TSU  (Georgia)
+ The Rolling Scopes School (currently)
+ FreeCodeCamp / HTMLAcademy / Codecademy
+ Youtube
### English
Level: B2 / C1 (Upper-Intermediate / Advanced)

I studied at school with advanced english classes, after that I got level-placed at the university. I practice a lot daily by reading and watching content in english. 
