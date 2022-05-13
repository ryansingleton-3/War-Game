
/*Class 1 of 2: holds the deck array and the createDeck and shuffleDeck methods*/
class Deck {
    constructor() { 
         this.deck = []
         }
    
    createDeck() {
         let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
         let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
         /*for loop iterates through the ranks and suits arrays and merges them into the deck array; value = to the
         index of the ranks array (i.e.: 2, value 0; Ace, value 12) */
         for (let x = 0; x < suits.length; x++) {
         for (let y = 0; y < ranks.length; y++) {
             this.deck.push({suits: suits[x], ranks: ranks[y], value: y})
             }
         }   
     return this.deck
     }

 /* while loop uses splice and math.random to shuffle the above deck*/ 
    shuffleDeck() {
         let cards = this.deck.length
         while (cards) {
         this.deck.push(this.deck.splice(Math.floor(Math.random() * cards), 1)[0]);
         cards -= 1
         }
     return this.deck
     }
 }

 /*Class 2 of 2: Players holds the name, beginning player score, and player hand; uses methods to 
 increment score and add cards to each hand*/
class Player {
    constructor(name) {
        this.name = name
        this.score = 0 /*beginning score for players */
        this.hand = [] /*array to hold each player's hand */ 
        } 
    
    incrementScore() {
        this.score +=1 /*will add a point when a player gets the higher card */ 
        return this.score
        }
   
    addHand(deck) {
         for (let i = 0; i < deck.length; i++) {
             this.hand.push(deck[i]) /*pushes a card into a player's hand */ 
         }
         return this.hand
     }
 }