// 扑克牌练习程序

enum Color {
  "heart" = "♥",
  "spade" = "♠",
  "club" = "♣",
  "diamond" = "♦",
}

enum Mark {
  "one" = "A",
  "two" = "2",
  "three" = "3",
  "four" = "4",
  "five" = "5",
  "six" = "5",
  "seven" = "7",
  "eight" = "8",
  "nine" = "9",
  "ten" = "10",
  "eleven" = "11",
  "twelve" = "12",
  "king" = "K",
}

type NormalCard = {
  mark: Mark;
  color: Color;
};

type Deck = NormalCard[];

function createDeck(): Deck {
  let deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (let m of marks) {
    for (let c of colors) {
      deck.push({
        mark: m,
        color: c,
      });
    }
  }
  return deck;
}

function printDeck(deck: Deck) {
  let result = "\n";
  deck.forEach((item, index) => {
    let str = item.mark + item.color + "\t";
    result += str;
    if ((index + 1) % 6 === 0) {
      result += "\n";
    }
  });
  console.log(result);
}

printDeck(createDeck());
