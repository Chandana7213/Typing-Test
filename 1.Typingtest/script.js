var  passages = [
      [
        "The sun was setting on the horizon, casting a warm golden glow across the peaceful meadow. Birds chirped merrily as they flew overhead, their colorful wings creating a beautiful spectacle. The gentle breeze rustled through the tall grass, creating a soothing melody. The scent of wildflowers filled the air, adding a touch of sweetness to the tranquil scene." 
      ],
      [
          "The old oak tree stood tall and proud in the middle of the lush green forest. Its branches reached out like welcoming arms, providing shade and shelter to the creatures that sought refuge beneath its mighty canopy. The leaves rustled softly in the gentle breeze, creating a soothing symphony of nature's whispers. Sunlight filtered through the dense foliage, casting ethereal patterns on the forest floor." 
  
      ],
      [
        "Now we have devised robots that are much more complicated than any other machines we have ever had. They are complicated enough to do jobs that until now only human beings could do, but that are too simple for the marvellous brains we all have. The robots, even though they are smarter than other machines, are still only capable of very simple tasks - the kind of tasks human beings ought not to waste their time doing. In that case, why not let the robots do it? Why shouldn't human beings do other and better things? After all, whenever there is an important new invention, some jobs are lost. When the automobile came into use, there was a gradual, but steady, loss of jobs that involved horses." 
      ],
      [
        "Sher Singh breathed one more prayer, of thanks this time, and scrambled down into the river-bed. He stepped into the rive usual, and deeper than it had been. Sher Singh had to go slowly made ready to move with Kunwar on his back once again. HAn Sher Singh had been to this river often. But it was colder than because of slime on the stones. Thank goodness there was a bridge at the second river, he thought. It was a flimsy thing made of bamboo poles, stones, thick grass and river gravel. But it was at least a bridge. As Sher Singh washed up on to the shore, water twinkled in his footprints before sinking into the sand." 
  
      ],
      [
        "The steaming cloths did nothing. After a while Sher Singh mother said, 'He must be carried to the hospital at Kalaghat. Then Sher Singh knew that his brother was dying. for all jungle people know that the hospital is the last resort of the doomed.I will run for my father, he cried. lt may be days before you find him. Sher Singh's father was known far and wide as Sher Singh Bahadur the Brave-a famous shikari, with the title Bahadur added to his name like a medal because of all he had done. He lived his life here in Laldwani village, grazing his animals, cultivating his bit of land"
  
      ]
    ];

let outerIndex = Math.floor(Math.random() * passages.length);
let randomPassage = passages[outerIndex];
var pass = randomPassage.toString()
    
document.getElementById("content").innerText = pass;
var new_words =[]
var old_words = []
var correct_words = 0;
var seconds=60;
var timed = 0;
var timer;
function timing()
{
  window.onkeydown = function (event) {
    if (event.which == 8) { 
         event.preventDefault() 
      }
}
  if(seconds < 60) { 
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { 
     seconds--
     timed++;
  }
  if(timed == 60){
    var typed_content = document.getElementById("typed_content").value
    typed_content.toString()
    new_words = typed_content.split(" ")
    console.log(new_words)
    old_words = pass.split(" ")
    console.log(old_words)
  for(var i = 0; i <= new_words.length; i++){
    for(var j = 0; j <= new_words.length;j++){
        if(old_words[i] == new_words[j])
        {
          correct_words++;   
        } 
    }
  }
  var incorrect_words = Math.floor(new_words.length - correct_words)
  var gross_speed =new_words.length
  sessionStorage.setItem("gross",gross_speed)
  var netspeed = (correct_words)/1
  sessionStorage.setItem("net",netspeed)
  var accuracy = Math.floor((correct_words/gross_speed)*100)
  sessionStorage.setItem("acc",accuracy)
  window.location.href="main1.html";
  }
 }
document.getElementById("typed_content").onkeypress = function() {
  if(timer == null) {
    timer = window.setInterval(function() { 
      timing();
    }, 1000); 
  }
} 
document.getElementById("timer").innerHTML="01:00";
function result()
{
  var typed_content = document.getElementById("typed_content").value
  typed_content.toString()
  
  new_words = typed_content.split(" ")
  console.log(new_words)
  old_words = pass.split(" ")
  console.log(old_words)

for(var i = 0; i <= new_words.length; i++){
  for(var j = 0; j <= new_words.length;j++){
      if(old_words[i] == new_words[j])
      {
        correct_words++;   
      } 
  }
}
var incorrect_words = Math.floor(new_words.length - correct_words)
var gross_speed = Math.floor((new_words.length)/1)
sessionStorage.setItem("gross",gross_speed)
var netspeed = Math.floor((correct_words)/1)
sessionStorage.setItem("net",netspeed)
var accuracy = Math.floor((netspeed*100)/gross_speed)
sessionStorage.setItem("acc",accuracy)
window.location.href="main1.html";
}
