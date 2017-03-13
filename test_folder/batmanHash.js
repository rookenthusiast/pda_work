var batmanVillains = {"Joker": "laughing gas","Penguin": "birds","TwoFace": "luck"};

var villainsByPower = [
  { name: 'Joker', value: 10 },
  { name: 'Black Mask', value: 4 },
  { name: 'ClayFace', value: 6 }
];

var orderVillainsByPower = function(array){
  array.sort(function(a, b){
    return b.value - a.value;
  });
  console.log(array);
  }

  var findVillain = function(array, name){
    for (villain of array){
      if (villain.name === name){
        console.log(villain);
      }
    }
  }

var badGuysWeapons = function(villains){
  for (var badGuy in villains){
    console.log(villains[badGuy]);
  }
}

// badGuysWeapons(batmanVillains);
orderVillainsByPower(villainsByPower);
findVillain(villainsByPower, "Joker");