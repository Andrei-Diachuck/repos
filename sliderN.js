let showPrevBtn = document.getElementById("show-prev");
let showNextBtn = document.getElementById("show-next");
let slideImg = document.getElementById("slider-img");
let currentImgIndex = 0;


let imhUrl = [];
imhUrl.push("./img6/1.jpg");
imhUrl.push("./img6/2.jpg");
imhUrl.push("./img6/3.jpg");
imhUrl.push("./img6/4.jpg");
imhUrl.push("./img6/5.jpg");
imhUrl.push("./img6/6.jpg");
imhUrl.push("./img6/7.jpg");
imhUrl.push("./img6/9.jpg");
imhUrl.push("./img6/10.jpg");


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