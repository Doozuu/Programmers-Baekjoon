const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const visited = Array.from({length: 101}, () => false);
const ladders = new Map(input.slice(0, N+1).map(ladder => ladder.split(' ').map(Number)));
const snakes = new Map(input.slice(N+1, N+M+1).map(snake => snake.split(' ').map(Number)));
const moves = [1,2,3,4,5,6];

function solution(){
  const queue = [[1,0]];

  visited[0] = true;

  while(queue.length){
    const [cur, distance] = queue.shift();

    for(let move of moves){
      const newLocation = cur + move;

      if(newLocation === 100){
        console.log(distance + 1);
        return;
      }

      if(newLocation < 101 && !visited[newLocation]){
        visited[newLocation] = true;

        if(ladders.get(newLocation)){
          queue.push([ladders.get(newLocation), distance + 1]);
        }else if(snakes.get(newLocation)){
          queue.push([snakes.get(newLocation), distance + 1]);
        }else{
          queue.push([newLocation, distance + 1]);
        }
      }
    }
  }
}

solution();