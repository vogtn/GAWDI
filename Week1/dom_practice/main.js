console.log("Main is running");

document.addEventListener("DOMContentLoaded", function(){
  console.log("All DOM content has been loaded.");
  var paragraphTags = document.getElementsByTagName("p");
  console.log(paragraphTags);

  for(var i =0; i < paragraphTags.length; i++){
    paragraphTags[i].addEventListener("click", function(){
      alert("this paragraph tag says: " + this.innerHTML);
    });
  }
});
