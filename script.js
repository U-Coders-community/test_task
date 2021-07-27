//first task
document.getElementById('side__menu-btn').addEventListener('click', () => {
    const menuBtnChild = document.getElementById('side__menu-btn').children;
    console.log()
    for (elem of menuBtnChild) {
        elem.classList.toggle('change')
    }
    const sideMenuList = document.getElementById('nav__menu-list').children;
    for (elem of sideMenuList) {
        elem.classList.toggle('hideMenu')
    }
})

//second task
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sideShift(arr, n) {
    arr = arr.splice(-n).concat(arr);
    return arr
}

function sideShift2(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    return arr
}


//third task

// const arrOfStr = ['abbasqwer', ' dsadaqwer']
// const str1 = 'dsadsaqwerqqq';
// const str2 = 'dsdaaqwerba'
// const finder = (line1, line2) => {
//     let arr = [];
//     line1.split('').reduce((last, item) => {
//         if (line2.indexOf(`${last}${item}`) !== -1) {
//             arr.push(`${last}${item}`);
//             return `${last}${item}`;
//         } else return item;
//     }, '');
//     return arr.sort((a, b) => b.length - a.length)[0]
// }





//Fourth task
const showAll = document.querySelector('.checkboxAll');
const showNew = document.querySelector('.checkboxNew');
const showHot = document.querySelector('.checkboxHot');
const showBest = document.querySelector('.checkboxBest');
const allNews = document.querySelectorAll('.main__content-items')
const newInfo = document.querySelectorAll('.new');
const hotInfo = document.querySelectorAll('.hot');
const bestInfo = document.querySelectorAll('.best');

showAll.addEventListener('click', (e) => {
    if (showAll.checked) {
        showNew.checked = false;
        showBest.checked = false;
        showHot.checked = false;
        allNews.forEach((elem) => elem.style.display = 'block')
    }
    if (!showAll.checked) {
        allNews.forEach((elem) => elem.style.display = 'none')
    }
})


showNew.addEventListener('click', (e) => {

    if (showNew.checked) {
        showAll.checked = false;
        showBest.checked = false;
        showHot.checked = false
        hotInfo.forEach((elem) => elem.style.display = 'none')
        bestInfo.forEach((elem) => elem.style.display = 'none')
        newInfo.forEach((elem) => elem.style.display = 'block')
    }
    if (!showAll.checked) {
        newInfo.forEach((elem) => elem.style.display = 'none')
    }
})


showHot.addEventListener('click', (e) => {
    if (showHot.checked) {
        showAll.checked = false;
        showNew.checked = false;
        showBest.checked = false;
        newInfo.forEach((elem) => elem.style.display = 'none')
        bestInfo.forEach((elem) => elem.style.display = 'none')
        hotInfo.forEach((elem) => elem.style.display = 'block')
    }
    if (showHot.checked === false) {
        hotInfo.forEach((elem) => elem.style.display = 'none')
    }
})


showBest.addEventListener('click', (e) => {
    if (showBest.checked) {
        showAll.checked = false;
        showNew.checked = false;
        showHot.checked = false;
        newInfo.forEach((elem) => elem.style.display = 'none')
        hotInfo.forEach((elem) => elem.style.display = 'none')
        bestInfo.forEach((elem) => elem.style.display = 'block')
    }
    if (showBest.checked === false) {
        bestInfo.forEach((elem) => elem.style.display = 'none')
    }
})


