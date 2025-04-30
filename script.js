import {menuArray} from './data.js'

const mainMenu = document.getElementById('restaurant-menu')
const clientOrder = document.getElementById('restaurant-order')
const orderList = document.getElementById('order-list')

function renderMenu(menuArr){
    let html = ''
    menuArr.forEach(function(meal){
        html += 
        `
        <section>
            <div class ="meal">
                <div class="emoji">
                    <img src="${meal.emoji}">
                </div>
                <div class="menu-info" id="${meal.name}>
                    <p class="bold">${meal.name}</p> 
                    <p class="light">${meal.ingredients}</p>
                    <p class="bold">$${meal.price}
                </div>
                <div>
                    <button class="btn" data-meal="${meal.name}">+</button>
                </div>
            </div>
        </section>
        `
    })
    return html
}

mainMenu.innerHTML = renderMenu(menuArray)


const orderArray = []

mainMenu.addEventListener('click',function(e){
    if(e.target.dataset.meal){
        clientOrder.style.visibility = 'visible'
        orderArray.push(e.target.dataset.meal)
        orderList.innerHTML = renderOrderList(orderArray)
    }
})

function renderOrderList(orderArr){
    let orderHtml=''
    for (let i = 0; i < orderArr.length; i++) {
        orderHtml +=
        `
        <li>${orderArr[i]}</li>
        `
    }
    return orderHtml
}
