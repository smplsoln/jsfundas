let count = 60;

while(0 <= count) {
  let str = "";
  str = (50 === count) ? `Orbiter transfers from ground to internal power (T-${count} seconds)`
      : (31 === count) ? `Ground launch sequencer is go for auto sequence start (T-${count} seconds)`
      : (16 === count) ? `Activate launch pad sound suppression system (T-${count} seconds)`
      : (10 === count) ? `Activate main engine hydrogen burnoff system (T-${count} seconds)`
      : (6 === count) ? `Main engine start (T-${count} seconds)`
      : (0 === count) ? `Solid rocket booster ignition and liftoff! (T-${count} seconds)`
      : `T-${count} seconds`;
  console.log(str);
  count--;
}