/**
 * Created by swlyons on 3/13/2017.

 */

$(document).ready(function(){
  var ideaArray=[];
    document.getElementById("Add").addEventListener("click", addIdea);
    function addIdea(){
      var input = document.getElementById("addIdea");
      ideaArray.push(input);
    }

    document.getElementById("retrieveIdea").addEventListener("click", showIdea);

    function showIdea() {
      var index = Math.floor(Math.random() * ideaArray.length);
      document.getElementById("idea").innerHTML = ideaArray[index];
    }
  });
