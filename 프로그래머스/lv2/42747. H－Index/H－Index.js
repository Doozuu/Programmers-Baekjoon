// function solution(citations) {
//     for(let i=citations.length;i>=0;i--){
//        if(citations.filter(el => el >= i).length >= i) return i;
//     }
// }

function solution(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;


     function sorting(a, b){
         return b - a;
     }
}