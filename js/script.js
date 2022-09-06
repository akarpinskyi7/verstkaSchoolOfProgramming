let point1=document.getElementById("a1");
function active1(){
    point1.classList.toggle('linenameOn');
}
let point2=document.getElementById("a2");
function active2(){
    point2.classList.toggle('linenameOn');
}
let point3=document.getElementById("a3");
function active3(){
    point3.classList.toggle('linenameOn');
}
let point4=document.getElementById("a4");
function active4(){
    point4.classList.toggle('linenameOn');
}

let imgSrc=['file:///C:/Users/a1928/Desktop/project%20for%20ITA2/images/partners1.png',
'file:///C:/Users/a1928/Desktop/project%20for%20ITA2/images/partners2.png',
'file:///C:/Users/a1928/Desktop/project%20for%20ITA2/images/partners3.png'];
let imgt=document.getElementById("carul");
let point;
// console.log(imgt.lastElementChild.src);
function next(){
    point=imgSrc.indexOf(imgt.firstElementChild.src);
    if(point==0){
        point = imgSrc.length;
    }
    imgt.lastElementChild.src=imgt.firstElementChild.nextElementSibling.src;
    imgt.firstElementChild.nextElementSibling.src=imgt.firstElementChild.src;
    imgt.firstElementChild.src=imgSrc[point-1];
     
}
function back(){
    point=imgSrc.indexOf(imgt.lastElementChild.src);
    if(point==(imgSrc.length-1)){
        point=-1;
    }    
    imgt.firstElementChild.src=imgt.firstElementChild.nextElementSibling.src;
    imgt.firstElementChild.nextElementSibling.src=imgt.lastElementChild.src;
    imgt.lastElementChild.src=imgSrc[point+1];
}

let pip=document.getElementById("sho");
        function param(){
            pip.classList.toggle("treba");
        }