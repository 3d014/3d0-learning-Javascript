/**ovo je responsive meni 
 * 
 * 
 * */
const mobileMenu = () => {
    let menu = document.querySelector('.header ul')
    let btn = document.querySelector('.header button')

    if (btn.innerText == 'MENU') {

        menu.style.display = 'block';
        btn.innerText = 'CLOSE'
    }
    else {
        menu.style.display = 'none'
        btn.innerText = 'MENU'
    }



}


/**
 * ovo je galerija
 */

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img')

let imgNum = 0;

rightBtn.addEventListener('click', () => {
    if (imgNum < pictures.length - 1) {


        pictures[imgNum].style.display = 'none';
        imgNum += 1;
        pictures[imgNum].style.display = 'block'
    } else {

        imgNum = 0;
        pictures[pictures.length - 1].style.display = 'none';
        pictures[imgNum].style.display = 'block'
    }

})

leftBtn.addEventListener('click', () => {
    if (imgNum == 0) {
        imgNum = pictures.length - 1;
        pictures[0].style.display = 'none';
        pictures[imgNum].style.display = 'block';
    } else {
        pictures[imgNum--].style.display = 'none';
        pictures[imgNum].style.display = 'block'

    }





})


/**
 * portofolio
 *
 */




/**
 * modal
 */




let openModalBtn = document.querySelector('.modal-section button')
openModalBtn.addEventListener("click", () => {
    let modalWindow = document.querySelector('.popup-modal')
    let overlay = document.querySelector('.overlay')
    modalWindow.style.display = "block"
    overlay.style.display = "block"
})


let closeModalBtn = document.querySelector('#closeModal')
closeModalBtn.addEventListener("click", () => {
    let modalWindow = document.querySelector('.popup-modal')
    let overlay = document.querySelector('.overlay')
    modalWindow.style.display = "none"
    overlay.style.display = "none"
})


let portfolioBtn = document.querySelectorAll('.portfolio-categories button')



portfolioBtn.forEach(button => {
    button.addEventListener("click", (item) => {

        element = button.getAttribute('data-category')

        let allItems = document.querySelectorAll('.portfolio-items .portfolio-single-item')

        allItems.forEach(item => {
            item.style.display = "none";
        })

        if (element === 'sve') {
            allItems.forEach(item => {
                item.style.display = "block";
            })
        }

        allItems.forEach((item) => {
            if (item.getAttribute('data-category').includes(element)) {
                item.style.display = "block";
            }
        })
    })
})


let mobile = document.querySelector('.header button')
mobile.addEventListener('click', () => { mobileMenu() })