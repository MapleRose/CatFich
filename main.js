var gameData = {
    Fish: 0,
    Money: 0,
    FishPerClick: 1,
    BetterFishingCost: 10,
    FishPrice: 5,
    Fishinglvl: 1
}

function CatchFish()    {
    gameData.Fish += gameData.FishPerClick
    document.getElementById("FishCaught").innerHTML = gameData.Fish + " Fish Catched"
}

function SellFish() {
    gameData.Money += gameData.Fish * gameData.FishPrice
    gameData.Fish = 0
    document.getElementById("MoneyEarned").innerHTML = gameData.Money + " Money"
    document.getElementById("FishCaught").innerHTML = gameData.Fish + " Fish Catched"
}

function BuyBetterFishing() {
    if(gameData.Money >= gameData.BetterFishingCost)    {
        gameData.Money -= gameData.BetterFishingCost
        gameData.FishPerClick += 1
        gameData.BetterFishingCost *= 2
        gameData.Fishinglvl += 1
        document.getElementById("MoneyEarned").innerHTML = gameData.Money + " Money"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Fishing Rod (Currently lvl " + gameData.Fishinglvl + ") Cost: " + gameData.BetterFishingCost
    }
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("CatFichSave", JSON.stringify(gameData))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("CatFichSave"))
    if (savegame !== null) {
        gameData = savegame
    }