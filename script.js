function addNewWEField()
{

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('wefield');
newNode.classList.add("mt-2")
newNode.setAttribute('rows',3);
newNode.setAttribute('placeholder','enter here')

let weOb=document.getElementById('we');

let weAddbuttonOb=document.getElementById('weAddbutton');
weOb.insertBefore(newNode, weAddbuttonOb)

}
function addNewAQField()
{

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-2")
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','enter here')
    
    let aqOb=document.getElementById('aq');
    
    let aqAddbuttonOb=document.getElementById('aqAddbutton');
    aqOb.insertBefore(newNode, aqAddbuttonOb)
    

}
function generatecv()

{
let namefield=document.getElementById("namefield").value;
let nameT1=document.getElementById('nameT1');
nameT1.innerHTML=namefield;

document.getElementById('nameT2').innerHTML=namefield;

document.getElementById('contactT').innerHTML=document.getElementById("contactfield").value;

document.getElementById('addressT').innerHTML=document.getElementById("addressfield").value;

document.getElementById('fbT').innerHTML=document.getElementById("fbfield").value;

document.getElementById('instaT').innerHTML=document.getElementById("instafield").value;
 
document.getElementById('linkedT').innerHTML=document.getElementById("linkedinfield").value;


document.getElementById('aboutT').innerHTML=document.getElementById("aboutfield").value;


let wes=document.getElementsByClassName("wefield");

let str="";
for(let e of wes)
{

    str=str +`<li> ${e.value}</li>`;
}
document.getElementById("weT").innerHTML=str;

let aqs=document.getElementsByClassName('eqfield');
let str1='';
for(let e of aqs)
{
str1+=`<li>${e.value}</li>`;


}
document.getElementById('aqT').innerHTML=str1;

let file=document.getElementById('imgfield').files[0];
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
reader.onloadend=function()
{
document.getElementById("imgT").src=reader.result;

}



document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';




}
function printcv()
{
window.print()


}