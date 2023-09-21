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