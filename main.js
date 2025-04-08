var gameData = {
    Fish: 0,
    Money: 0,
    FishPerClick: 1,
    BetterFishingCost: 10,
    FishPrice: 5,
    Fishinglvl: 1,
    Update: 1
}

function CatchFish()    {
    gameData.Fish += gameData.FishPerClick
    setFishCaught()
}

function SellFish() {
    gameData.Money += gameData.Fish * gameData.FishPrice
    gameData.Fish = 0
    setMoney()
    setFishCaught()
}

function BuyBetterFishing() {
    if(gameData.Money >= gameData.BetterFishingCost)    {
        gameData.Money -= gameData.BetterFishingCost
        gameData.FishPerClick += 1
        gameData.BetterFishingCost *= 2
        gameData.Fishinglvl += 1
        setMoney()
        setRodUpgrade()
    }
}

function setRodUpgrade()    {
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Fishing Rod (Currently lvl " + gameData.Fishinglvl + ") Cost: " + gameData.BetterFishingCost
}

function setFishCaught()    {
    document.getElementById("FishCaught").innerHTML = gameData.Fish + " Fish Catched"
}

function setMoney() {
    document.getElementById("MoneyEarned").innerHTML = gameData.Money + " Money"
}

function setGameData()  {
    setMoney()
    setFishCaught()
    setRodUpgrade()
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("CatFichSave", JSON.stringify(gameData))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("CatFichSave"))
    if (savegame !== null) {
        gameData = savegame
        setGameData()
    }
