
// let btn = document.getElementById('btn');

// btn.addEventListener('click',function(){
//     if (inp%2==0)
// document.getElementById("result").innerHTML= `${no} is even number`;
// else
// document.getElementById("result").innerHTML= `${no} is odd number`;
// })

function oden() {
    let inp = document.getElementById('input').value;
    let temp = '';
    if (inp % 2 == 0){
        temp = 'even no';
    }
        
    else{
        temp = 'odd no';
    }
       
    document.getElementById("result").innerHTML = `${inp} ${temp}`;
}
