const arr=[]
const listEl=document.querySelector('.list')
const submitEl=document.getElementById('submitinput')


const refreshlist = function(){
    listEl.innerHTML=""
     for(let i=0;i<arr.length;i++){
       
        const todoitem=document.createElement('li')
        todoitem.setAttribute('class','list-item')
        todoitem.innerText=arr[i]
        todoitem.innerHTML += '<span class="deleteItem">&#10008;</span>'
        todoitem.innerHTML+='<span class="edititem">&#x270D</span>'
        listEl.insertAdjacentElement('beforeend',todoitem)
     }
     addEventListeners()
}

//refreshlist()

submitEl.addEventListener('keyup',(event)=>{
    if(event.keyCode===13 && event.target.value !=""){
        const val=event.target.value;
        arr.push(val)
        event.target.value="";
        refreshlist()
    }
})

refreshlist()

function edit(todoitem,toedit){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===todoitem){
            arr[i]=toedit;
            return;
        }
    }
}

function addEventListeners(){
const deleteItemEls=Array.from(document.getElementsByClassName('deleteItem'))
const edititems=Array.from(document.getElementsByClassName('edititem'))
   for(let i=0;i<deleteItemEls.length;i++){
        deleteItemEls[i].addEventListener('click',(event)=>{
        const item = event.target.parentNode.innerText
        //console.log(event.target.parentNode)
        const todoitem=item.slice(0,-3).trim()
        arr.splice(arr.indexOf(todoitem), 1);
        refreshlist();
        })

        edititems[i].addEventListener('click',(event)=>{
            const item=event.target.parentNode.innerText;
            const todoitem =item.slice(0,-3).trim();
            const val=submitEl.value
            if(val === ""){
                alert('Enter input in box')
                return;
            }
            edit(todoitem,val)
            submitEl.value=""
            refreshlist()

        })


    }

}