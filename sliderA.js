let showPrevBtn = document.getElementById("show-prev");
let showNextBtn = document.getElementById("show-next");
let slideImg = document.getElementById("slider-img");
let currentImgIndex = 0;


let imhUrl = [];
imhUrl.push("./img4/1.jpg");
imhUrl.push("./img4/2.jpg");
imhUrl.push("./img4/3.jpg");
imhUrl.push("./img4/4.jpg");
imhUrl.push("./img4/5.jpg");
imhUrl.push("./img4/6.jpg");
imhUrl.push("./img4/7.jpg");


slideImg.src = imhUrl[currentImgIndex];
showPrevBtn.disabled = true;
function onShowPrevBtnClick() {
    currentImgIndex--;
    slideImg.src = imhUrl[currentImgIndex];
    showNextBtn.disabled = false;

    if (currentImgIndex === 0 ){
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClick() {
    currentImgIndex++;
    slideImg.src = imhUrl[currentImgIndex];
    showPrevBtn.disabled = false;

    if (currentImgIndex === (imhUrl.length - 1 ) ){
        showNextBtn.disabled = true;
    }
}
alert("При скачивание картинок, качество изображения будет лучше")