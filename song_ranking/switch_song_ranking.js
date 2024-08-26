const btnPaid = document.querySelector("#btn_paid");
const btnfree = document.querySelector("#btn_free");

const paidSongs = document.querySelector("#paid");
const freeSongs = document.querySelector("#free");

let i = 0;

function switchIframe (){
    freeSongs.classList.remove('fadein');
    paidSongs.classList.remove('fadein');
    if (i == 0){
        freeSongs.style.visibility = "hidden";
        paidSongs.style.visibility = "visible";
        paidSongs.classList.add('fadein');
    } else {
        paidSongs.style.visibility = "hidden";
        freeSongs.style.visibility = "visible";
        freeSongs.classList.add('fadein');
    };
};

btnPaid.addEventListener("click", () =>{
    i = 0;
    switchIframe(i);
});

btnfree.addEventListener("click", () =>{
    i = 1;
    switchIframe(i);
});

switchIframe();