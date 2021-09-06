const chooseStations = function (stationsList) {
  let choices = [];
  for (const station of stationsList) {
    if ((station[1] >= 20) && (station[2] === 'school' || station[2] === 'community centre')) {
      choices.push(station[0]);
    }
  }
  return choices;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
