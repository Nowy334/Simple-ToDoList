const input = document.querySelector('.box__data--input');
const btn = document.querySelector('.box__data--btn');
const box = document.querySelector('.box__task');
let task;



function addTask(){

    const markup = `
    <div class="task">
        <span class="task--text">${input.value}</span>
        <span class="task--delete">X</span>
    </div>
    `;

    if(input.value !== ""){
        box.insertAdjacentHTML('afterbegin', markup);
        setTimeout(addAnimation, 100);
        input.value = "";
    }
    task = document.querySelector('.task');

}

btn.addEventListener('click', addTask);

document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.wiche === 13){
        addTask();
    }
});


function deleteEl(e){

    if (e.target.classList.contains("task--delete")) {
        e.target.closest('.task').classList.remove('task-animation');
        setTimeout(() => {
            e.target.closest(".task").remove();
        },500);
    }
}


function addAnimation(){
    document.querySelector('.task').classList.add('task-animation');
}

box.addEventListener('click', deleteEl);

