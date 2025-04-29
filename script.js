import {menuArray} from './data.js'

const mainMenu = document.getElementById('restaurant-menu')

function renderMenu(menuArr){
    let html = ''
    menuArr.forEach(function(meal){
        html += 
        `
        <section>
            <div class ="meal" id = ${meal.name}>
                <div class="emoji">
                    <img src="${meal.emoji}">
                </div>
                <div class="menu-info">
                    <p class="bold">${meal.name}</p> 
                    <p class="light">${meal.ingredients}</p>
                    <p class="bold">$${meal.price}
                </div>
                <div>
                    <button>+</button>
                </div>
            </div>
        </section>
        `
    })
    return html
}

mainMenu.innerHTML = renderMenu(menuArray)
