const woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
  ];
  
  const bags = haveYouAnyWool();

  function haveYouAnyWool() {
      for (let totalBags = 0; totalBags <= woolOwners.length; totalBags++) {
        console.log("BaaBaa BlackSheep have you any wool?");
        if (totalBags > 0) {
            console.log("yes sir, yes sir " + totalBags + " bags full");
        };
      }
      return (totalBags.value);
  };
  
  function oneForMy() {f
      for (let i = 0; i < 2; i++) {
          people = Object.keys(woolOwners);
          const person = people.toString();
          console.log("one for my " + person);
      }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
  const boy = Object.keys(woolOwners[2]);
  const littleBoy = boy[2];
  
  const whereHeLives = littleBoy.location;
  console.log("one for the " + littleBoy + " that lives " + whereHeLives);