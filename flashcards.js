var BasicCard = function(front, back){
  this.front = function(){
    console.log(front);
  }
  this.back = function(){
    console.log(back);
  }

}

var ClozeCard = function(text, cloze){
  this.cloze = function(){
    console.log(cloze);
  }
  this.partial = function(){
    var newString = str.replace()
  }
  this.full = function(){
    console.log(text);
  }
  this.errorCloze = function(error){
    console.log("Your cloze deletion is broken" + error);

  }
}

var superBowlRings = new BasicCard (
  "What team has the most superbowl championships to date?", "Pittsburgh Steelers"
);

var superBowlRingsCloze = new ClozeCard (
  "The Pittsburgh Steelers have the most superbowl championship.", "Pittsburgh Steelers"
);

superBowlRings.front();
superBowlRings.back();
superBowlRingsCloze.cloze();
superBowlRingsCloze.full();
