// 右選單開關

const menubtn = document.querySelector("#icon_menu");
const closeMenu = document.querySelector("#close_menu");
const menu = document.querySelector(".menu");

let p = 0;

// open menu
menubtn.addEventListener("click", () => {
    p = 1;
    // console.log(114514);
    menubtn.style.display = 'none';
    menu.style.left = 'calc(100% - 170px)';

});

// close menu
closeMenu.addEventListener("click", () => {
    p = 0;
    // console.log(1919810);
    menubtn.style.display = 'block';
    menu.style.left = 'calc(100%)';
}
);

// 出bug啦！！！！！
// 修復 開啟過選單再關閉的情況下 放大視窗選單按鈕不會消失的問題
window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    // console.log("網頁視窗寬度變化: " + windowWidth + "px");
    if (windowWidth > 840){
        menubtn.style.display = "none";
    } else{
        if (p == 1){
            menubtn.style.display = "none";
        } else {
            menubtn.style.display = "block";
            
        }
    };
});

// console.log(p);