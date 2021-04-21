
console.log('hi');
// const currentLocation=location.href;
// const menuItem=document.querySelectorAll('a');
// const menuLength=menuItem.length;
// for(let i=0;i<menuLength;i++){
//     if(menuItem[i].href===currentLocation){
//         menuItem.className="current";
//         console.log(menuItem);
//     }
// }
const oneId=document.getElementById('one');
const secOne=document.getElementById('section1');
const targetOne;
targetOne=secOne.value;
oneId.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target===oneId){
        location.href=secOne;
    }


});