const inputBox = document.getElementById('input-box')
const listContent =document.getElementById('list-container')

document.getElementById('add-list').addEventListener('click', function(){
    if(inputBox.value === ''){
        alert('You Most write somthing')
    }
    else{
        let li =document.createElement('li')
        li.innerHTML=`<span>${inputBox.value}</span> <i class="fa-solid fa-xmark"></i>  `
        listContent.appendChild(li)
    }
    inputBox.value='';
})
document.getElementById('list-container').addEventListener('click',function(event){
    if(event.target.classList.contains('fa-xmark')) {
        event.target.parentNode.remove()    
            }     
                let li = event.target.tagName === 'LI' ? event.target : event.target.parentElement;
                let span = li.querySelector('span');
                if (span) {
                    span.style.textDecoration = 'line-through';
            }    
})

document.getElementById('btn-ul').addEventListener('click', function(){
    let ul =document.querySelector('ul')
    ul.innerHTML='';
})