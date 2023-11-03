function solution(skill, skill_trees) {
    let skill_list = [];
    let skill_alphabet = skill.split('');
    for(let i=1;i<=skill.length;i++){
        skill_list.push(skill.slice(0,i));
    }
    let filtered_trees = skill_trees.filter(el => {
        let extract = '';
        for(let str of el){
            if(skill_alphabet.includes(str)) extract += str;
        }
        return extract === '' || skill_list.includes(extract);
    })
    return filtered_trees.length;
}





// 현재 스킬 index가 이전 index보다 크면 안 됨
// skill.indexOf(해당문자) === 0 이어야함
function solution(skill, skill_trees){
    let answer = 0;
   for(let i=0;i<skill_trees.length;i++){
       let filtered = [...skill_trees[i]].filter(el => skill.indexOf(el) !== -1).join('');
       if(skill.indexOf(filtered) === 0) answer++;
   }
    return answer;
}




