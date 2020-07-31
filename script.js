//Práctica 8: Crear una página que muestre una lista de tareas.

//PASOS:
//Crear la etiqueta form y meterla al div inicial
//Crear el ul y colocarlo dentro del form
//Hcaer un for donde meta todos los li dentro del ul
//Crear un boton para el input type = checkbox 
//Crear el espacio para el label y se agregan los atributos con setAttribut
//Se coloca el checkbox y el label dentro de cada li


const tareas = ["Practica de Javascript","Ir al supermercado","Pasear al perro","Lavar los trastos"]

const lista = document.getElementById('lista');

const form = document.createElement('form');
lista.appendChild(form);

const ul = document.createElement('ul');
form.appendChild(ul);

for(i = 0; i < tareas.length; i++){
    const li = document.createElement('li');
    ul.appendChild(li);


    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `tarea-${i}`);
    

    const label = document.createElement('label');
    label.setAttribute('for', `tarea-${i}`);
    label.innerHTML = tareas[i];

    li.appendChild(checkbox);
    li.appendChild(label);
    
    
}

