var ul = document.getElementById('list');
var li;


var addbutton = document.getElementById('add');
addbutton.addEventListener('click', addItem);




var delbutton = document.getElementById('del');
delbutton.addEventListener('click',delItem);






function addItem() {
    var input = document.getElementById('inp');
    var item = input.value;
    var textnode = document.createTextNode(item);
    
    if(item === "") {
        return false;
    } else {
        //create li
        var li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        //giving id
        checkbox.setAttribute('id','check');
        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item');
        
        //add these elements
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        li.class = 'visual';
        
        input.value = '';
    }
}

function delItem() {
    li = ul.children; 
    for(let index = 0; index < li.length ; index++) {
        while(li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
    
}