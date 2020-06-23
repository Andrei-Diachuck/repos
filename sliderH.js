let showPrevBtn = document.getElementById("show-prev");
let showNextBtn = document.getElementById("show-next");
let slideImg = document.getElementById("slider-img");
let currentImgIndex = 0;


let imhUrl = [];
imhUrl.push("./img5/1.jpg");
imhUrl.push("./img5/2.jpg");
imhUrl.push("./img5/3.jpg");
imhUrl.push("./img5/4.jpg");
imhUrl.push("./img5/5.jpg");
imhUrl.push("./img5/6.jpg");
imhUrl.push("./img5/7.jpg");
imhUrl.push("./img5/9.jpg");
imhUrl.push("./img5/10.jpg");
imhUrl.push("./img5/11.jpg");
imhUrl.push("./img5/12.jpg");
imhUrl.push("./img5/13.jpg");
imhUrl.push("./img5/14.jpg");
imhUrl.push("./img5/15.jpg");
imhUrl.push("./img5/16.jpg");
imhUrl.push("./img5/17.jpg");
imhUrl.push("./img5/18.jpg");
imhUrl.push("./img5/19.jpg");
imhUrl.push("./img5/20.jpg");
imhUrl.push("./img5/21.jpg");
imhUrl.push("./img5/22.jpg");
imhUrl.push("./img5/23.jpg");
imhUrl.push("./img5/24.jpg");
imhUrl.push("./img5/25.jpg");
imhUrl.push("./img5/26.jpg");
imhUrl.push("./img5/27.jpg");
imhUrl.push("./img5/28.jpg");
imhUrl.push("./img5/29.jpg");
imhUrl.push("./img5/30.jpg");
imhUrl.push("./img5/31.jpg");
imhUrl.push("./img5/32.jpg");
imhUrl.push("./img5/33.jpg");
imhUrl.push("./img5/34.jpg");
imhUrl.push("./img5/35.jpg");


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