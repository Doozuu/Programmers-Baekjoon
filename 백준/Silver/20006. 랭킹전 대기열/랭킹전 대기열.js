const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [p, m] = input.shift().split(' ').map(Number);
const room = [];
const answer = [];

for(let player of input){
  const [level, id] = player.split(' ');
  let curRoomId = 0;

  while(true){
    if(!room[curRoomId]){
      room[curRoomId] = [player];
      break;
    }
    const [slevel, sid] = room[curRoomId][0].split(' ');

    if(Math.abs(level - slevel) < 11 && room[curRoomId].length < m){
      room[curRoomId].push(player);
      break;
    }else{
      curRoomId++;
    }
  }
}

for(let players of room){
  if(players.length > 0){
    answer.push(players.length === m ? 'Started!' : 'Waiting!');
    answer.push(players.sort((a,b) => a.split(' ')[1].localeCompare(b.split(' ')[1])).join('\n'))
  }
}

console.log(answer.join('\n'));