// Parent class for ships
class Ship {
    constructor(hp, firepower, accuracy) {
        this.hp = hp;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

// Make class human ship
class PlayerShip extends Ship {
    constructor(hp, firepower, accuracy) {
        super(hp, firepower, accuracy);
    }
    attack(enemyShip) {
            if(this.checkAccuracy(this.accuracy)) {
                enemyShip.hp -= this.firepower
                console.log(`Hit ${enemyShip.name}!\n${enemyShip.name} has ${enemyShip.hp} hp left.`);
            } else {
                console.log('Ooooh! the enemy got moves 😑 the enemy must think they can escape death!');
            }
            return enemyShip.hp
     }
    checkAccuracy(accuracy) {
        let check = Math.random()
        if (check < accuracy) {
            return true
        } else {
            return false
        }
    }
}


// Make class Alien ship
class EnemyShip extends Ship {
    constructor(name) {
        super();
        this.name = name;
        this.hp = this.randomhp();
        this.firepower = this.randomfirepower();
        this.accuracy = this.randomaccuracy();
    } 
    attack(PlayerShip) {
        if (this.checkAccuracy(this.accuracy)) {
            PlayerShip.hp -= this.firepower
            console.log(`Hahahah!!! 😂 We hit the player ship!\nPlayer ship has ${PlayerShip.hp} left. We gotta destroy them!`)
        } else {
            console.log('The enemy must have Ultra Instinct! Their power level must be over 9000!!!')
        }
        return PlayerShip.hp
    } 
    checkAccuracy(accuracy) {
        let check = Math.random()
        if (check < accuracy) {
            return true
        } else {
            return false
        }
    }
    randomhp = (x, y) => {
        let z = Math.floor(Math.random() * 4) + 3;
        return z
    }
    
    randomfirepower = (x, y) => {
        let z = Math.floor(Math.random() * 3) + 2;
        return z
    }
    
    randomaccuracy = (x, y) => {
        let z = Math.floor(Math.random() * 3) + 6 / 10;
        return z
    }
}

// creating the battle start or defensive start
class BattleStart {
    constructor() {
        this.playerShip = new PlayerShip(20, 5, .7);
        this.arrayOfEnemies = this.makeEnemies();
    }

    playRound(playerShip, EnemyShip) {
        let winnerOfRound = true; 
        while (winnerOfRound) {
            let playerResult = playerShip.attack(EnemyShip)
            if (playerResult <= 0) {
                winnerOfRound = 'Player!' 
                console.log('Enemy ship destroyed! You win this round.')
                return winnerOfRound
            }
            let enemyResult = EnemyShip.attack(PlayerShip)
            if (enemyResult <= 0) {
                winnerOfRound = 'Enemy!'
                console.log('Player ship destroyed! We win this round.')
            }
        }
    }

    retreat(PlayerShip) {
        let retreat = Math.random()
        if (retreat > .7) {
            console.log('Retreating! Gonna need a sensu bean, haha!')
            player.hp = 20
        } else {
            console.log('Gonna Surpass my limits! Plus Ultra!!!!!')
        }
        return
    }

    pickTarget() {
        return this.arrayOfEnemies[this.arrayOfEnemies.length - 1]
    }

    makeEnemies() {
        let enemyArray = []
        for (let i = 6; i > 0; i--) {
            enemyArray.push(new EnemyShip(`Enemy ship #${i}`))
        }
        return enemyArray
    }

    isThereAWinner() {
        let player = this.player
        let winnerOfGame; 
        while (winnerOfGame != 'enemy' || enemyArray.length != 0) {
            let enemy = this.pickTarget()
            let winnerOfGame = this.playRound(player, enemy) 
            if (winnerOfGame == 'enemy') {
                return this.gameOver(winnerOfGame)
            }
            
            this.arrayOfEnemies.pop()


            if (this.arrayOfEnemies.length == 0) {
                return this.gameOver(winnerOfGame)
            }

            this.retreat(player)
        }
    }
    gameOver(winnerOfGame) {
        console.log(`Winner of the game is the ${winnerOfGame}!`)
        return
    }


}

let test = new BattleStart();
test.isThereAWinner();