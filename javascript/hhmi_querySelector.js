// extracting resource level from website to place in custom dimension within Google Analytics 

function levels() {
x = document.querySelector("#main > div.l-content > div > div.l-constrain > div > div > div.resource-header > div.resource-header__row > div.resource-header__meta > div.resource-header__grade-level").innerText;
  
c = x.replace(/\n/g, ";"); 
b =  c.replace("Level;","");
 
return b
  
}
