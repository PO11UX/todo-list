let add = document.getElementById('addBtn');
let input = document.getElementById('enter');
let list =document.getElementById('list');
let checked = document.getElementById('checked');
let b =document.getElementById('remove');
let checkbox = document.getElementById('checkbox');
let id = 0;
var arr=[];
var div;
let tasks;
let paragraph;


let remove = document.createElement('button');
//remove.classList.add('delete');
//remove.style='height: 20px; width: 20px;';

function del(e){
    
    console.log(e.target.dataset.id)

    for (let i = 0; i < arr.length; i++) {
        if (e.target.dataset.id == arr[i].id){
            arr.splice(i, 1);
        }
    }
    updateList();
}

function check (e){
    // console.log(e.target)
    
    //checked.appendChild(div);
    // check = true;
    for (let i = 0; i < arr.length; i++) {
        //tasks.done=true;
        if (e.target.dataset.id == arr[i].id) {
            console.log('data id');
            arr[i].done = true;
        }
    }
    updateList();
}

let taskHTML;
let task = document.createElement('div');

add.addEventListener('click',function(){
    // div = document.createElement('div');
    // div.classList.add('task');
    // paragraph = document.createElement('span');
    // paragraph.innerText=input.value;
    // div.appendChild(paragraph);
    // div.appendChild(remove);
    // list.appendChild(div);

    taskHTML = `
    <div class='task'>
    <span class='tsk' data-id='${id}' onclick='check(event)' >${input.value}</span>
    <div class='btns'>
        <button onclick='undo(event)' class="undo"><img data-id='${id}' src="https://img.icons8.com/windows/22/000000/undo-alt.png"/>
        <button onclick='del(event)' class="delete"><img  data-id='${id}' src='https://img.icons8.com/flat_round/20/000000/delete-sign.png'></button>
    </div>
    </div>
    `
    // task.innerHTML = taskHTML;
    
    crateObject();
    updateList();
    input.value='';
})
function undo(e){
    for (let i = 0; i < arr.length; i++) {
        //tasks.done=true;
        if (e.target.dataset.id == arr[i].id) {
            console.log('data id');
            arr[i].done = false;
        }
    }
    updateList();

}
function updateList(){

    list.innerHTML = '';
    checked.innerHTML = '';

    for(var i=0;i<arr.length;i++){

        let task = document.createElement('div');
        task.innerHTML = arr[i].tasks

        if(arr[i].done){
            task.style.textDecoration = "line-through";
            checked.appendChild(task);
        }else{
            list.appendChild(task);
        }
    }
}
function crateObject(){
    if(input.value !==''){
        tasks={tasks:taskHTML,done:false,name:input.value,id:id};
        arr.push(tasks);
        console.log(arr);
        remove.dataset.id = id;
        id++;
    }
}