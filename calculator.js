let string = '';
let buttons = document.getElementsByClassName('buttons');
Array.from(buttons).forEach((element)=>{
    element.addEventListener('click',(event)=>{
        if(event.target.innerHTML == '='){
            try {
                string = eval(string);
                document.getElementById('display-input').value = string;    
            } catch{
                string = 'syntax error!'
                document.getElementById('display-input').value = string;    
            }
        }
        else{
        string = string + event.target.innerHTML;
        document.getElementById('display-input').value = string;
    }
})
})
const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    string = '';
    document.getElementById('display-input').value = string;
})
