// 首頁遊戲截圖切換
const scrList = document.querySelectorAll(".scrs");
const scrbList = document.querySelectorAll(".scrb");
let page = 1;

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

changeImg(page);

