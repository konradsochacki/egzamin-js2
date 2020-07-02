"use strict";

// const board = [
//   ["X", "X", "X", "X", "X", "X", "X"],
//   ["X", "0", "0", "0", "0", "0", "X"],
//   ["X", "0", "0", "0", "0", "0", "X"],
//   ["X", "0", "0", "0", "0", "0", "X"],
//   ["X", "0", "1", "0", "0", "0", "X"],
//   ["X", "0", "0", "0", "0", "0", "X"],
//   ["X", "0", "0", "0", "0", "0", "X"],
//   ["X", "0", "0", "0", "0", "0", "X"],
//   ["X", "0", "0", "0", "0", "0", "X"],
//   ["X", "X", "X", "X", "X", "X", "X"],
// ];

const board = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "Y", "0", "0", "0", "0", "1", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

let x = -1; // -1 oznacza, że nie ma indexu o wartości jakiej chcemy
let y = 0;

while (x < 0) {
  y++; // iteruje każdego arraya w tablicy wielowymiarowej
  x = board[y].indexOf("1"); // jeśli w tablicy y znajdzie wartość podaną w indexOf, wtedy wrzuca go do zmiennej x
  if (x !== -1) {
    // warunek mówiący o tym, że jeżeli w x- czyli indexie tabeli w tabeli- nie znajduje się wartość fałszywa (czyli w tym przypadku -1) to ma pokazać numery które będą indeksami tablicy wielowymiarowej zawierającej wartość 1
    // console.log(y, x);
  }
}

// --UWAGA-- x - odpowiada kolumnom, a y- wierszom!
// board[y][x]);

let row = y + 1;
let col = x + 1;

// class Bounce {
//   constructor(row, col, board) {
//     this.row = row;
//     this.col = col;
//     this.board = board;
//     this.rowSpeed = 1;
//     this.colSpeed = 1;
//     this.width = board[0].length - 1;
//     this.height = board.length - 1;
//     this.ball = board[row][col];
//   }

//   IterateThrought() {
//     if (this.row == 0) {
//       this.rowSpeed = 1;
//     }
//     if (this.row >= this.height) {
//       this.rowSpeed = -1;
//     }
//     this.row = this.row + this.rowSpeed;
//     if (this.col == 0) {
//       this.colSpeed = 1;
//     }
//     if (this.col >= this.width) {
//       this.colSpeed = -1;
//     }

//     this.col = this.col + this.colSpeed;
//     this.ball = this.board[this.row][this.col];
//   }

//   DrawLine() {
//     const newBoard = this.board;
//     const self = this;
//     let count = 0;
//     let cache = [this.board[y][x]];

//     function looping() {
//       newBoard[self.row - self.rowSpeed].splice(
//         self.col - self.colSpeed,
//         1,
//         cache[0]
//       );
//       if (newBoard[self.row][self.col] == "1") {
//         clearInterval(start);
//       }
//       cache.splice(0, 1, newBoard[self.row][self.col]);
//       console.clear();
//       count += 1;
//       newBoard[self.row].splice(self.col, 1, "H");

//       console.table(newBoard);
//       console.log(self.ball);
//       console.log(`row is ${self.row}, column is ${self.col}`);
//       self.IterateThrought();
//     }
//     let start = setInterval(looping, 1000);
//   }
// }

class Bounce {
  constructor(row, col, board) {
    this.row = row;
    this.col = col;
    this.board = board;
    this.rowSpeed = 1;
    this.colSpeed = 1;
    this.width = board[0].length - 1;
    this.height = board.length - 1;
    this.ball = board[row][col];
  }

  Vector() {
    if (this.col == 0 && this.row == 0) {
      this.rowSpeed = 1;
      this.colSpeed = 1;
    } else if (this.col == 0 && this.row == this.height) {
      this.rowSpeed = -1;
      this.col = 1;
    } else if (this.col == this.width && this.row == this.height) {
      this.rowSpeed = -1;
      this.colSpeed = -1;
    } else if (this.row == 0 || this.row >= this.height) {
      if (this.rowSpeed == 1 && this.colSpeed == 1) {
        this.rowSpeed = -1;
      } else if (this.rowSpeed == -1 && this.colSpeed == 1) {
        this.rowSpeed = 1;
      } else if (this.rowSpeed == 1 && this.colSpeed == -1) {
        this.rowSpeed = -1;
      } else if (this.rowSpeed == -1 && this.colSpeed == -1) {
        this.rowSpeed = 1;
      }
    } else if (
      this.ball == "X" &&
      this.board[this.row - this.rowSpeed][this.col - this.colSpeed] == "X"
    ) {
      if (this.col == 0 || this.col >= this.width) {
        if (this.rowSpeed == 1 && this.colSpeed == 1) {
          this.colSpeed = -1;
        } else if (this.rowSpeed == -1 && this.colSpeed == 1) {
          this.colSpeed = -1;
        } else if (this.rowSpeed == 1 && this.colSpeed == -1) {
          this.colSpeed = 1;
        } else if (this.rowSpeed == -1 && this.colSpeed == -1) {
          this.colSpeed = 1;
        }
      } else if (this.rowSpeed == 1 && this.colSpeed == 1) {
        this.colSpeed = -1;
      } else if (this.rowSpeed == -1 && this.colSpeed == 1) {
        this.colSpeed = -1;
      } else if (this.rowSpeed == 1 && this.colSpeed == -1) {
        this.colSpeed = 1;
      } else if (this.rowSpeed == -1 && this.colSpeed == -1) {
        this.rowSpeed = 1;
      }
    } else {
      if (this.ball == "X") {
        if (
          this.board[this.row + 1][this.col] == "X" &&
          this.board[this.row - 1][this.col] == "X"
        ) {
          if (this.col == 0 || this.col >= this.width) {
            if (this.rowSpeed == 1 && this.colSpeed == 1) {
              this.colSpeed = -1;
            } else if (this.rowSpeed == -1 && this.colSpeed == 1) {
              this.colSpeed = -1;
            } else if (this.rowSpeed == 1 && this.colSpeed == -1) {
              this.colSpeed = 1;
            } else if (this.rowSpeed == -1 && this.colSpeed == -1) {
              this.colSpeed = 1;
            }
          } else if (this.rowSpeed == 1 && this.colSpeed == 1) {
            this.colSpeed = -1;
            this.rowSpeed = -1;
          } else if (this.rowSpeed == -1 && this.colSpeed == 1) {
            this.colSpeed = -1;
            this.rowSpeed = 1;
          } else if (this.rowSpeed == 1 && this.colSpeed == -1) {
            this.colSpeed = 1;
            this.rowSpeed = -1;
          } else if (this.rowSpeed == -1 && this.colSpeed == -1) {
            this.rowSpeed = 1;
            this.colSpeed = 1;
          }
        } else if (
          this.board[this.row - 1][this.col] == "X" &&
          this.board[this.row + 1][this.col] == "0"
        ) {
          if (this.rowSpeed == 1 && this.colSpeed == 1) {
            this.colSpeed = -1;
          } else if (this.rowSpeed == -1 && this.colSpeed == 1) {
            this.rowSpeed = 1;
          } else if (this.rowSpeed == 1 && this.colSpeed == -1) {
            this.colSpeed = 1;
          } else if (this.rowSpeed == -1 && this.colSpeed == -1) {
            this.rowSpeed = 1;
          }
        } else if (this.rowSpeed == 1 && this.colSpeed == 1) {
          this.rowSpeed = -1;
        } else if (this.rowSpeed == -1 && this.colSpeed == 1) {
          this.rowSpeed = 1;
        } else if (this.rowSpeed == 1 && this.colSpeed == -1) {
          this.rowSpeed = -1;
        } else if (this.rowSpeed == -1 && this.colSpeed == -1) {
          this.rowSpeed = 1;
        }
      }
    }
    if (this.ball == "Y") {
      let speedArr = [1, -1];
      this.rowSpeed = speedArr[Math.floor(Math.random() * speedArr.length)];
      this.colSpeed = speedArr[Math.floor(Math.random() * speedArr.length)];
    }
    this.row = this.row + this.rowSpeed;
    this.col = this.col + this.colSpeed;
    this.ball = this.board[this.row][this.col];
  }

  DrawLine() {
    const newBoard = this.board;
    const self = this;
    let count = 0;
    let cache = [this.board[y][x]];

    function looping() {
      newBoard[self.row - self.rowSpeed].splice(
        self.col - self.colSpeed,
        1,
        cache[0]
      );
      if (newBoard[self.row][self.col] == "1") {
        clearInterval(start);
      }
      cache.splice(0, 1, newBoard[self.row][self.col]);
      console.clear();
      count += 1;
      newBoard[self.row].splice(self.col, 1, "H");

      console.table(newBoard);
      console.log(self.ball);
      console.log(`row is ${self.row}, column is ${self.col}`);
      self.Vector();
    }
    let start = setInterval(looping, 1000);
  }
}

const Program = new Bounce(row, col, board);
Program.DrawLine();
