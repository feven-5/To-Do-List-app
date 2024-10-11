let elements = document.querySelector(".inputList");
let ul = document.querySelector(".ul");
let li = document.createElement('li');

document.querySelector('Form').addEventListener('submit', addlist);
function addlist(event){
  
  event.preventDefault();
  let ul = document.querySelector(".ul");
  let li = document.createElement('li');
  let elements = document.querySelector(".inputList");
  let newList = elements.value; 

  if (newList.trim() ==="") return;

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = "100px"
  checkbox.style.transform = 'scale(1.5,1.5)';
  checkbox.style.accentColor = "rgb(219 234 254)";

  let txtNode = document.createTextNode(newList);
  li.appendChild(checkbox);
  li.appendChild(txtNode);

  
  let button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'x';
  button.style.float = "right";
  button.style.border = 'none';
  button.style.borderRadius ="4px"
  button.style.width = "25px"
  button.style.color = 'black';
  button.style.backgroundColor = 'rgb(219 234 254)';
  button.style.lineHeight = "24px"
  button.addEventListener("click", function(){
    ul.removeChild(li);
  });

  checkbox.addEventListener("change", function(){
    if (checkbox.checked){
      li.style.textDecoration = "line-through"
    }
    else{
      li.style.textDecoration ="none";
    }
  });
  li.appendChild(button);

  ul.appendChild(li);
  elements.value="";
}

