/* Plan for building game: 
1) 2 Classes: Deck class: holds the suits, ranks, values, and creates and shuffles a deck; Player: holds the name, score, and hand
2) Functions: dealCards, playGame, and compareHands*/
   
   
   

    /*Game starts here */ 
    /*first deck applies to the 52 card deck created and shuffled above */ 
    let firstDeck = new Deck()

    /* calls to create and shuffle the new deck*/
    firstDeck.createDeck()

    firstDeck.shuffleDeck()

    console.log(firstDeck) /*displays new deck */ 


    let player1 = new Player(prompt("What is Player 1's name? "))
    let player2 = new Player(prompt("What is Player 2's name? "))


    dealCards(player1, player2, firstDeck) /*deals cards to the players from the original deck */


    playGame(player1, player2)

    function dealCards(player1, player2, deck) {
        let player1Hand = deck.deck.slice(0, 26) /* divides cards and deals a hand to each player*/
        let player2Hand = deck.deck.slice(26);
        player1.addHand(player1Hand); /*adds cards to each player's hand */
        player2.addHand(player2Hand);
    
        return player1Hand;
    }

    function playGame(player1, player2) { /*the do while loop allows each player to iterate through their hand and show the score until
    there are no more cards*/
        do {
        compareHand(player1, player2);
        console.log(`${player1.name}'s Score: ${player1.score}, ${player2.name}'s Score: ${player2.score}`);
        } while (player1.hand.length != 0 && player2.hand.length != 0)
    }

    function compareHand(player1, player2) { /*compares the value of a loop and declares the conditions for each player to 
    receive a point */
        let x = player1.hand[0];
        let y = player2.hand[0];


        if (x.value > y.value) {
       
        console.log(`${player1.name}'s Card: Value: ${x.value} | ${player2.name}'s Card: ${y.value}`);
        console.log(`${player1.name} receives a point!`)
        
        player1.hand.shift(x); /*removes a card when used and returns the card */ 
        player2.hand.shift(y);
        
        player1.incrementScore(); /*adds a point to Player 1's score */ 

        return player1.score;

        } else if (x.value < y.value) {
       
        console.log(`${player1.name}'s Card: Value: ${x.value} | ${player2.name}'s Card: ${y.value}`);
        console.log(`${player2.name} receives a point!`)
        
        player1.hand.shift(x);
        player2.hand.shift(y);
        
        player2.incrementScore()
        
        return player2.score;
        } else {
        
        console.log(`${player1.name}'s Card: Value: ${x.value} | ${player2.name}'s Card: ${y.value}`);
        console.log('Tie! No points awarded for this card!')
        
        player1.hand.shift(x);
        player2.hand.shift(y);
        
        return 0; /*if it is a tie, no points are awarded*/
        }
    }
