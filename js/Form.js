//create a class
class Form {

    //create a constructor
    constructor() {
        //menu screen
        this.input = createInput("").attribute("placeholder", "Name");
        this.button = createButton("PLAY");
        this.how = createButton("How to Play");
        this.map = createButton("Select Map");
        this.title = createElement('h1');

        //HOW TO PLAY SCREEN
        this.play = createElement('h1');
        this.space = createElement('h1');
        this.mouse = createElement('h1');
        this.explain1 = createElement('h2');
        this.explain2 = createElement('h3');

        //map screen
        this.maptitle = createElement('h1');
        this.green = createButton('Green Galaxy');
        this.star = createButton('Star Galaxy');

    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.how.hide();
        this.map.hide();
        this.title.hide();

        this.explain1.hide();
        this.explain2.hide();
        this.maptitle.hide();
        this.green.hide();
        this.star.hide();
    }








    //create a display function
    display() {
        //display background img
        background(backgroundImage);

        //display the title
        this.title.html("GALACTIC SURVIVOR");
        this.title.position(displayWidth / 2 - 200, 0);
        this.title.style("color", "#0CFFE1");
        this.title.style("font-size", "38px");
        this.title.style("font-family", "Comic Sans MS");
        this.title.style("font-weight", "bold");

        //position the input box
        this.input.position(displayWidth / 2 - 140, displayHeight / 2 - 140);
        this.input.style("height", "40px")
        this.input.style("weight", "80px")
        this.input.style("font-size", "28px");
        this.input.style("color", "#0CFFE1");
        this.input.style("border-radius", "15px")
        this.input.style("border-color", "#0CFFE1")
        this.input.style("background-color", "#483C6E")


        //position the button
        this.button.position(displayWidth / 2 + 70, displayHeight / 2 - 40);
        this.button.style("font-size", "38px");
        this.button.style("height", "60px")
        this.button.style("weight", "80px")
        this.button.style("font-family", "Castellar");
        this.button.style("font-weight", "2");
        this.button.style("border-radius", "8px");
        this.button.style("border-color", "#0CFFE1");
        this.button.style("background-color", "#FF217C");

        //add button how to play
        this.how.position(displayWidth / 2 - 155, displayHeight / 2 + 100);
        this.how.style("font-size", "30px");
        this.how.style("height", "60px")
        this.how.style("weight", "80px")
        this.how.style("font-family", "MV Boli");
        this.how.style("font-weight", "2");
        this.how.style("border-radius", "8px");
        this.how.style("border-color", "#0CFFE1");
        this.how.style("background-color", "#483C6E");
        //add button display map
        this.map.position(displayWidth / 2 + 85, displayHeight / 2 + 100);
        this.map.style("font-size", "30px");
        this.map.style("height", "60px")
        this.map.style("weight", "80px")
        this.map.style("font-family", "MV Boli");
        this.map.style("font-weight", "2");
        this.map.style("border-radius", "8px");
        this.map.style("border-color", "#0CFFE1");
        this.map.style("background-color", "#483C6E");


        this.button.mousePressed(() => {
            playerName = this.input.value();
            this.input.hide();
            this.button.hide();
            this.how.hide();
            this.map.hide();
            this.title.hide();

            this.explain1.hide();
            this.explain2.hide();
            this.maptitle.hide();
            this.green.hide();
            this.star.hide();

            gameState = "play"

        })

        this.how.mousePressed(() => {
            gameState = "how";
        })
        this.map.mousePressed(() => {
            gameState = "map";
        })


    }
    displayHowScreen() {

        this.input.hide();
        this.title.hide();
        this.how.hide();
        this.maptitle.hide();
        this.green.hide();
        this.star.hide()
        background(space);

        this.play.html("HOW TO PLAY");
        this.play.position(displayWidth / 2 - 200, 0);
        this.play.style("color", "#0CFFE1");
        this.play.style("font-size", "38px");
        this.play.style("font-family", "Comic Sans MS");
        this.play.style("font-weight", "bold");

        this.explain1.html("Attack Enemies = ");
        this.explain1.position(displayWidth / 2 - 250, displayHeight / 2 - 150);
        this.explain1.style("color", "#00DFD4");
        this.explain1.style("font-size", "38px");
        this.explain1.style("font-family", "Comic Sans MS");
        this.explain1.style("font-weight", "bold");

        this.space.html("Space");
        this.space.position(displayWidth / 2 + 80, displayHeight / 2 - 150);
        this.space.style("color", "#FF217C");
        this.space.style("font-size", "38px");
        this.space.style("font-family", "Comic Sans MS");
        this.space.style("font-weight", "bold");

        this.mouse.html("Mouse");
        this.mouse.position(displayWidth / 2 + 80, displayHeight / 2 - 200);
        this.mouse.style("color", "#FFFFFF");
        this.mouse.style("font-size", "38px");
        this.mouse.style("font-family", "Comic Sans MS");
        this.mouse.style("font-weight", "bold");

        this.explain2.html("Move the Character =");
        this.explain2.position(displayWidth / 2 - 350, displayHeight / 2 - 200);
        this.explain2.style("color", "#483C6E");
        this.explain2.style("font-size", "38px");
        this.explain2.style("font-family", "Comic Sans MS");
        this.explain2.style("font-weight", "bold");

        this.play.mousePressed(() => {

            gameState = "play"
        })
        this.map.mousePressed(() => {

            gameState = "map"
        })
    }

    displayMapScreen() {
        this.input.hide();
        this.title.hide();
        this.map.hide();
        background(space);

        this.maptitle.html("Select Map");
        this.maptitle.position(displayWidth / 2 - 200, 0);
        this.maptitle.style("color", "#0CFFE1");
        this.maptitle.style("font-size", "38px");
        this.maptitle.style("font-family", "Comic Sans MS");
        this.maptitle.style("font-weight", "bold");

        this.green.position(displayWidth / 2 - 300, displayHeight / 2 - 200);
        this.green.style("font-size", "30px");
        this.green.style("height", "60px")
        this.green.style("weight", "80px")
        this.green.style("font-family", "MV Boli");
        this.green.style("font-weight", "2");
        this.green.style("border-radius", "8px");
        this.green.style("border-color", "#0CFFE1");
        this.green.style("background-color", "#483C6E");

        this.star.position(displayWidth / 2 - 300, displayHeight - 325);
        this.star.style("font-family", "MV Boli");
        this.star.style("font-weight", "2");
        this.star.style("border-radius", "8px");
        this.star.style("font-size", "30px");
        this.star.style("height", "60px")
        this.star.style("weight", "80px")
        this.star.style("border-color", "#0CFFE1");
        this.star.style("background-color", "#483C6E");

        this.green.mousePressed(() => {

            map.addImage(star)
            map.scale = 5
        })
        this.star.mousePressed(() => {

            map.addImage(space)
            map.scale = 5
        })

    }

    displayPlayScreen() {
        this.input.hide();
        this.button.hide();
        this.how.hide();
        this.map.hide();
        this.mouse.hide();
        this.space.hide();
        this.title.hide();
        this.play.hide()
        this.explain1.hide();
        this.explain2.hide();
        this.maptitle.hide();
        this.green.hide();
        this.star.hide();
    }
}