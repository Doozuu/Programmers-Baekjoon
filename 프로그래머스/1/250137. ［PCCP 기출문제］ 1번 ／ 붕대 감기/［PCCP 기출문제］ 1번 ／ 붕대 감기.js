function solution(bandage, health, attacks) {
    const [castTime, hps, extraHeal] = bandage;
    let HP = health;
    let successStreak = 0;
    let endTime = attacks.at(-1)[0];
    let curIdx = 0;
    
    for(let i=1;i<=endTime;i++){
        const [attackTime, damage] = attacks[curIdx];

        if(i === attackTime){
            HP -= damage; // 29
            if(HP <= 0) return -1;
            curIdx++; // 1
            successStreak = 0;
        }else{
            HP = HP + hps > health ? health : HP + hps;
            successStreak++;
            if(successStreak === castTime){
                if(HP + extraHeal <= health) HP += extraHeal;
                successStreak = 0;
            }
        }
        
    }
    
    return HP;
}