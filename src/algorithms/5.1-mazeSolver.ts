/** 
 * @description: In this problem, maze is an array with strings as an item. Each string has # as wall. S is the Starting point and E is the ending point. 
 * @example: [
 '#####E#', 
 '#     #', 
 '#S#####'
]
*/

/* 
- It's the ending point. 
- The point is off the map.
  - if the current point's y value is greater than ??
- It's a wall.
- We have been here before. (Seen path)
*/

type Point = {
  x: number;
  y: number;
};
const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function walkTheMaze(
  maze: string[],
  wall: string,
  currentPoint: Point,
  endingPoint: Point,
  path: Point[],
  seen: boolean[][]
): boolean {
  // base cases:
  // if the current point is off the map.
  if (
    currentPoint.y < 0 ||
    currentPoint.x < 0 ||
    currentPoint.x >= maze[currentPoint.y].length ||
    currentPoint.y >= maze.length
  ) {
    return false;
  }
  // if the current point is a wall
  if (maze[currentPoint.y][currentPoint.x] === wall) return false;

  // if we have seen the path before.
  if (seen[currentPoint.y][currentPoint.x] == true) return false;

  if (currentPoint.x === endingPoint.x && currentPoint.y === endingPoint.y) {
    path.push(endingPoint);
    return true;
  }

  seen[currentPoint.y][currentPoint.x] = true;
  path.push(currentPoint);
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walkTheMaze(
        maze,
        wall,
        {
          x: currentPoint.x + x,
          y: currentPoint.y + y,
        },
        endingPoint,
        path,
        seen
      )
    ) {
      path.push(currentPoint);
      return true;
    }
  }
  path.pop();
  return false;
}

function solveTheMaze(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walkTheMaze(maze, wall, start, end, path, seen);
  return path;
}
