console.log('Advanced debugging example running.')
//debugger

// // first, define the function.
// function goodPractices() {
//   let game = gameObject();
//   for (let gameKey in game) {
    
    
//     let teamObj = game[gameKey]
//     for (let teamKey in teamObj) {
//       let playerObj = teamObj[teamKey]
//       if(teamkey === "players"){
//         let playerObj = teamObj[teamKey]
//         for (let player in playerObj){
//           if(player === playerName) }
//         }
//       }
//       let data = teamObj.player
//       for (let key in data) {
        
//       }
//     }
//   }


// // then, call the function so it runs!
// goodPractices()
function numPointsScored(playerName) {
  let game = gameObject();
  let requestedPoints
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      let playerObj = teamObj[teamKey]
      if(teamKey === "players"){
        let playerObj = teamObj[teamKey]
        for (let player in playerObj){
          if(player === playerName) {
           requestedPoints = playerObj[player].points
          }
      }
    }  
      }
    }
    return requestedPoints
  }

function shoeSize(playerName){
  let game = gameObject();
  let playerObj 

  for( let teamKey in game){
     let teamObj = game[teamKey]
     playerObj = teamObj.players[playerName] ? teamObj.players[playerName] : playerObj
  }
  return playerObj.shoe

}
shoeSize("Alan Anderson")

  
function teamColors(teamName){
   const game = gameObject()
   if(game.away.teamName === teamName){
    return game.away.colors
   }
   if(game.home.teamName === teamName){
    return game.home.colors
   }
}
teamColors("Charlotte Hornets")

function teamNames(game){
  return [game.away.teamName, game.home.teamName]
}
console.log(teamNames(gameObject()))

function playerNumbers(team){
  const game = gameObject()
  const jerseyNumbers = []
   
   for(let teamKey in game){
    const {players, teamName} = game[teamKey]
   if(teamName === team){
    for (let player in players){
      let playerNumber = players[player].number
      jerseyNumbers.push(playerNumber)
    }
  }
}  
return jerseyNumbers
}
console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName){
  let game = gameObject()
  let playerObj 

  for(let teamKey in game){
    let teamObj = game[teamKey]
    
    if(teamObj.players[playerName]){
      playerObj = teamObj.players[playerName]
    }
   }
return playerObj
}
console.log(playerStats("Brook Lopez"))


