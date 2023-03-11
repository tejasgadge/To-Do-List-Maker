//finding button of adding task
const addbutton=document.querySelector('.add-button');
//event listner on button
addbutton.addEventListener('click',()=>{
    const inputelement=document.querySelector('.input-field');
    if(inputelement.value.length==0){
        alert("Please Enter A Task")
    }
    else{
    const tasklist=document.querySelector('.tasks');
    tasklist.innerHTML+=`   
        <div class="new-task">
            <div>    
                <p>${inputelement.value}</p>
            </div>
            <button id="remove-button">❌</button>
        </div>
    `;
    const removebutton=document.querySelectorAll("#remove-button");
    for(var i=0;i<removebutton.length;i++){
            removebutton[i].addEventListener('click',function(event){
                this.parentNode.remove();
            // removebutton[i].parentNode.remove();
        })
    }
    }
})