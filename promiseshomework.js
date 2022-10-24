let colors = async function (){
    let response = await fetch('https://reqres.in/api/unknown');
    if (response.status != 200) {
throw 'error';
    }
    let data = await response.json();
    return data;
};

colors()
.then ( (data) => {
    let ul = document.createElement('ul');
    data.data.forEach(element=> {
                let li = document.createElement('li');
                
                li.textContent= `${element.name} ${element.color} ${element.year}`;
                ul.appendChild(li);
            });
    
     document.getElementById('promises').appendChild(ul);

})
    