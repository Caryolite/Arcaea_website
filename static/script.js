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
    if (window.innerWidth > 1024) {
        scrbList.forEach((scrb) => {
            scrb.style.visibility = 'hidden';
        });
        scrbList[idx - 1].style.visibility = 'visible';
    } else {
        scrbList.forEach((scrb) => {
            scrb.style.visibility = 'visible';

        })
    }
};

// 調整窗口
window.addEventListener('resize', function () {
    // let windowWidth = window.innerWidth;
    // console.log("網頁視窗寬度變化: " + windowWidth + "px");
    if (window.innerWidth > 1024) {
        scrbList.forEach((scrb) => {
            scrb.style.visibility = 'hidden';
        });
        scrbList[0].style.visibility = 'visible';
    } else  {
        scrbList.forEach((scrb) => {
            scrb.style.visibility = 'visible';
        });
    };
});

changeImg(page);

// 我草你媽
// 這她媽是個啥

// 新的好了就的又壞
// ==

//  if (window.innerWidth <= 1024) 