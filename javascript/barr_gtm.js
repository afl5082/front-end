// extracting author out of foundation blog posts, if author isn't present, return null

function() {
  
  var e = document.querySelector("head meta:nth-child(5)").name;
  var b = document.querySelector("head meta:nth-child(5)").content;
  
  if (e != "author"){
  return "null";   }
  
  
   else {
     return b;
  }
  
}
  
