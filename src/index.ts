export interface Board {
  data: number[][];
  dimensions: {
    rows: number;
    cols: number;
  }
}

export class DFSSolver {

  board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  // find the largest connected "island" of non-zero elements and print the sum of its members
  solve() {
    const { data, dimensions } = this.board;
    const { rows, cols } = dimensions;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let maxSum = 0;
  
    const isValid = (row: number, col: number) => row >= 0 && col >= 0 && row < rows && col < cols && data[row][col] !== 0 && !visited[row][col];
  
    const dfs = (row: number, col: number) => {
      if (!isValid(row, col)) return 0;
      visited[row][col] = true;
      let sum = data[row][col];
      // Directions: up, right, down, left
      const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
      for (let [dx, dy] of directions) {
        sum += dfs(row + dx, col + dy);
      }
      return sum;
    };
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (data[row][col] !== 0 && !visited[row][col]) {
          const currentSum = dfs(row, col);
          maxSum = Math.max(maxSum, currentSum);
        }
      }
    }
  
    console.log("Largest island sum:", maxSum);
  }
}
