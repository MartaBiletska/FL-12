function Fighter(ObJect) {
    let name = ObJect.name;
    let damage = ObJect.damage;
    let strength = ObJect.strength;
    let agility = ObJect.agility;
    let health = ObJect.hp;
    let wins = 0;
    let losses = 0;
    const initialHealth = ObJect.hp;

    return {
        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => health,
        logCombatHistory: () => {
            console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
        },
        heal: (addHealth) => {
            health += addHealth;
            if(health > initialHealth){
                health = initialHealth;
            }
        },
        dealDamage: (amountOfDemage) => {
            health -= amountOfDemage;
            if(health < 0){
                health = 0;
            }
        },
        attack: (defender_fighter) => {
            let winProbability = 100 - (defender_fighter.getAgility() + defender_fighter.getStrength());
            let randnumb = Math.floor(Math.random() * 101);
            if (randnumb <= winProbability) {
                defender_fighter.dealDamage(damage);
                console.log(` ${name} makes ${damage} damage to ${defender_fighter.getName()}`);
            } else {
                console.log(`${name} attack missed`);
            }
        },
        addWin: () => {
            wins++;
        },
        addLoss: () => {
            losses++;
        }
    }
}

function battle(fighter1, fighter2) {
    if(fighter1.getHealth()=== 0){
        console.log(`${fighter1.getName()} is dead and can't fight`);
    }
    if(fighter2.getHealth()=== 0){
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }
    while (fighter1.getHealth() && fighter2.getHealth()){
        fighter1.attack(fighter2);
        if(fighter2.getHealth()=== 0) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);
        } else {
            fighter2.attack(fighter1);
        }
        if(fighter1.getHealth()=== 0) {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
        }
    }
}


const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 85, strength: 25, agility: 20});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 35, agility: 40});