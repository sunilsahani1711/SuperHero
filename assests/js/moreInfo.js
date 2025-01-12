
// array to stor different character object
var arr=[];
// index of array
var a=0;


//  parsing string into object
let obj = JSON.parse(localStorage.getItem("heroInfo"));
console.log(obj);
let hername=document.getElementById('hero-name');
hername.innerHTML=obj.name;
document.getElementById('description').innerHTML=obj.description;
document.getElementById('Comics').innerHTML=obj.comics;
document.getElementById('Stories').innerHTML=obj.stories;
document.getElementById('id').innerHTML=obj.id;
document.getElementById('series').innerHTML=obj.series;
document.getElementById('imgfor').src=obj.img;
// console.log(obj.img);
document.getElementById('favorite').addEventListener('click',function(){
      if(arr.length!=0){
      for(let i of arr){
          if(obj.name==i.name )
          {
          alert('already in favorite');
           return;
          }
          
      }
      arr[a++]=obj;
      alert("Added")
    }
    else{
       arr[a]=obj;
       a++;
       alert("Added")
    }
  localStorage.setItem("fav2", JSON.stringify(arr));  
  console.log('done');
 });





