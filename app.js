let btnUpdate = document.querySelector('#cats-update')

btnUpdate.addEventListener('click', updateCats)

function updateCats(){
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let gatos = JSON.parse(this.responseText)
            
            createEstructure(gatos)

        }
    }
    xhttp.open('GET', 'http://localhost:1337/gatos-ingresados', true)
    xhttp.send()
}

function createEstructure(e){
    for(let i = 0; i < e.length; i++){
        let bodyTable = document.querySelector('tbody')
        let newRow = document.createElement('tr')
        let date = new Date(e[i].ingresado)
        bodyTable.appendChild(newRow)
        if(!e[i].fecha_alta){
            newRow.innerHTML = `<td>${e[i].nombre}</td><td>${e[i].raza}</td><td>${date.toLocaleString()}</td>`
        }
        console.log(e[i])   
    }
}