//while loop
function testloops() {
  let x = 0;

  while (x < 5) {
    if (x == 3) {
      break;
    }
    x += 1;
  }

  return x * x;
}

//for loop
function testforloop() {
  for (x = 0; x < 5; x++) {
    console.log(x);
  }
}

//switch statements
function testswitch() {
    switch(new Date().getDay()){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
    }
    return day;
}
