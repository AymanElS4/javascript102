"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener('DOMContentLoaded', function(){
    const select = document.getElementById('items');
    const img = document.getElementById('displayImage');
    const photographer = document.getElementById('photographer');
    const description = document.getElementById('description'); 
    const score = document.getElementById('score');
    const btnIncrease = document.getElementById('increaseScore');
    const btnDecrease = document.getElementById('decreaseScore');

    for(let key in itemData){
        const option = document.createElement('option');
        option.value = key;
        option.textContent = itemData[key].name;
        select.appendChild(option);
    }

    function mostrarDatos(key) {
        const item = itemData[key];
        img.src = item.image;
        photographer.value = item.photographer;
        description.value = item.description;
        score.value = item.score;
    }  

    select.onchange = function() {
        mostrarDatos(this.value);
    };

    select.addEventListener('change', function(){
        mostrarDatos(this.value);
    })
    btnIncrease.addEventListener('click', function(){
        itemData[select.value].score += 1;
        score.value = itemData[select.value].score;
    });
    btnDecrease.addEventListener('click', function(){
        const key = select.value;
        itemData[key].score -= 1;
        score.value = itemData[key].score;
    });



});