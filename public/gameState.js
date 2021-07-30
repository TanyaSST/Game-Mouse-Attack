
var state = {
        gameOver: false,
        score:0,
        mouse: {
            x: 100,
            y: 200,
            height: 100,
            width: 100,
            speed: 7,
            gravity:2
        },
        keys: {},
        snakeStates: {
            height: 80,
            width: 100,
            speed: 3,
            nextSnakeCreation: 0,
            maxCreationInterval: 2000,
            score:500
        },
        appleStates:{
            height: 40,
            width: 50,
            speed: 10,
            nextAppleToAttackCreation:0,
            attackSpeed:500
        }
    }
  