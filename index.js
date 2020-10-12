const express = require('express')


const app = express()
const port = 3000








app.get('/', async (req, res) => {

  //let coinAry = [18, 20, 15, 30, 10, 14];
  let coinAry = [5,2,7,1,9,8];
  let coinAryOld = [5,2,7,1,9,8];
  let playerOneCoins = [];
  let playerTwoCoins = [];

  //coinAry.shift();
  //coinAry.pop();

  let playerTurn = 1;

  while (coinAry.length > 0) {
    
    console.log('1111')

    if(playerTurn == 1){
      
      if(coinAry[0] > coinAry[coinAry.length-1]){
        playerOneCoins.push(coinAry[0])
        coinAry.shift();
      }else{
        playerOneCoins.push(coinAry[coinAry.length-1])
        coinAry.pop();
      }

      playerTurn = 2;

    }else{

      if(coinAry[0] > coinAry[coinAry.length-1]){
        playerTwoCoins.push(coinAry[0])
        coinAry.shift();
      }else{
        playerTwoCoins.push(coinAry[coinAry.length-1])
        coinAry.pop();
      }
      playerTurn = 1;
    }

    

  }

  let AplayerAmount = playerOneCoins.reduce((a, b) => a + b, 0);
  let BplayerAmount = playerTwoCoins.reduce((a, b) => a + b, 0);

  let winner = AplayerAmount > BplayerAmount ? 'A-wins' : 'B-wins'

  res.json({
    coinAry:coinAryOld,
    playerOneCoins,
    playerTwoCoins,
    winner
  })  
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})