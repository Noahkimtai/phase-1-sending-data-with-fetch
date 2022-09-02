// Add your code here
function submitData(name,mail){
    let bodyobj= {
        name:name,
        email:mail
    };
    return fetch('http://localhost:3002/users',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            accept:'application/json',
        },
        body:JSON.stringify(bodyobj)
    }).then(res =>res.json()).then(data =>{
        let p = document.querySelector('p')
        p.innerText = data.id
        document.appendChild(p)
    });
};
console.log(submitData('noah','noah.com'))