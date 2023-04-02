function newItem(){

    //jquery
    //1. Adding a new item to the list of items: 
       let li = $('<li></li>');
       let inputValue = $('#input').val();
       li.append(inputValue);

       if(inputValue === ''){
        alert("You must write something!")
       } else {
        let list = $('#list')
        list.append(li)
       }

       //javascript
       /*let li = document.createElement("li");
       let inputValue = document.getElementById("input").value;
       let text = document.createTextNode(inputValue);
       li.appendChild(text);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = document.querySelector('#list');
         list.appendChild(li);
       }*/
    
     //2. Crossing out an item from the list of items:
      li.on("dblclick", function crossOut() {
         li.toggleClass("strike");
       });
     
       //javascript
       /*function crossOut() {
             li.classList.toggle("strike");
         }
    
         li.addEventListener("dblclick",crossOut);*/
    
     //3. Adding the delete button "X": 
       let crossOutButton = $('<crossOutButton></crossOutButton>');
         crossOutButton.append(document.createTextNode('X'));
         li.append(crossOutButton);
     
         crossOutButton.on("click", deleteListItem);
         function deleteListItem() {
            li.addClass("delete");
          }

       //javascript
       /*let crossOutButton = document.createElement("crossOutButton");
         crossOutButton.appendChild(document.createTextNode("X"));
         li.appendChild(crossOutButton);
    
         crossOutButton.addEventListener("click", deleteListItem);

       function deleteListItem(){
             li.classList.add("delete")
         }*/

     // 4. Reordering the items: 
       $('#list').sortable();
    
    }