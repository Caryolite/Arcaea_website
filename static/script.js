const scrList = document.querySelectorAll(".scr");
const scrbList = document.querySelectorAll(".scrb");
let p = 1;

scrList.forEach((scr) => {
    scr.addEventListener("click", () => {
        const idx = scr.getAttribute("data-idx");
        changeImg(idx);
    });
});

const changeImg = (idx) => {
    scrbList.forEach((scrb) => {
        scrb.style.visibility = 'hidden';
    });
    scrbList[idx-1].style.visibility = 'visible';
};

changeImg(p);

// const scr1 = document.querySelector(".scr-1");
// const scr2 = document.querySelector(".scr-2");
// const scr3 = document.querySelector(".scr-3");
// const scr4 = document.querySelector(".scr-4");
// const scr5 = document.querySelector(".scr-5");

// let scrb = [
//     document.querySelector(".scr-1b"),
//     document.querySelector(".scr-2b"),
//     document.querySelector(".scr-3b"),
//     document.querySelector(".scr-4b"),
//     document.querySelector(".scr-5b")
// ]

// let p = 2;

// function changeImg(){
//     // 測試
//     // console.log("c");
//     // console.log(scrb[p]);

//     // 把所有的圖片隱藏
//     var x = document.querySelectorAll(".scrb");
//     var i;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.visibility = 'hidden';
//     } 

//     // 把點擊的圖片顯示
//     scrb[p].style.visibility = 'visible';
// }

// scr1.addEventListener("click",() => p = 0);
// scr2.addEventListener("click",() => p = 1);
// scr3.addEventListener("click",() => p = 2);
// scr4.addEventListener("click",() => p = 3);
// scr5.addEventListener("click",() => p = 4);

// scr1.addEventListener("click",changeImg);
// scr2.addEventListener("click",changeImg);
// scr3.addEventListener("click",changeImg);
// scr4.addEventListener("click",changeImg);
// scr5.addEventListener("click",changeImg);