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


const str1 = 'dsandsaqwerqbananaoobaskgoal';
const str2 = 'dsdanaqwerkkkqwwbananaqqq'
const finder = (line1, line2) => {
    let arr = [];
    line1.split('').reduce((last, item) => {
        if (line2.indexOf(`${last}${item}`) !== -1) {
            arr.push(`${last}${item}`);
            return `${last}${item}`;
        } else return item;
    });
    return arr.sort((a, b) => b.length - a.length)[0]
}


//Fourth task
const allNews = document.querySelectorAll('.main__content-items')
const newInfo = document.querySelectorAll('.new');
const hotInfo = document.querySelectorAll('.hot');
const bestInfo = document.querySelectorAll('.best');
const allCheckbox = document.querySelectorAll('.check')
const eachAllHandler = (e) => {
    allCheckbox.forEach((item) => {
        allNews.forEach((elem) => elem.style.display = 'block')
        if (item.id !== e) {
            item.checked = false
        }
    })
}
const eachNewHandler = (e) => {
    allCheckbox.forEach((item) => {
        hotInfo.forEach(({style}) => style.display = 'none')
        bestInfo.forEach(({style}) => style.display = 'none')
        newInfo.forEach(({style}) => style.display = 'block')
        if (item.id !== e) {
            item.checked = false
        }
    })
}
const eachHotHandler = (e) => {
    newInfo.forEach((elem) => elem.style.display = 'none')
    bestInfo.forEach((elem) => elem.style.display = 'none')
    hotInfo.forEach((elem) => elem.style.display = 'block')
    allCheckbox.forEach((item) => {
        if (item.id !== e) {
            item.checked = false
        }
    })
}
const eachBestHandler = (e) => {
    newInfo.forEach((elem) => elem.style.display = 'none')
    hotInfo.forEach((elem) => elem.style.display = 'none')
    bestInfo.forEach((elem) => elem.style.display = 'block')
    return allCheckbox.forEach((item) => {
        if (item.id !== e) {
            item.checked = false
        }
    })
}
allCheckbox.forEach((item) => {
    item.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'All':
                return eachAllHandler(e.target.id)
            case 'new':
                return eachNewHandler(e.target.id)
            case 'hot':
                return eachHotHandler(e.target.id)
            case 'best':
                return eachBestHandler(e.target.id)
            default:
                return null
        }
    })
})
