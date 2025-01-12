 

//  ------------------ function for home page on loading-----------------------// 
((()=>{

function handler(responseJSON){
      var obj=responseJSON.data.results;
          var container=document.getElementById('container');
           obj.forEach(element => {
                container.innerHTML +=
                 `<div>
                 <div class="character">
                  <div id="character-detail">
                    <a href="moreInfo.html" target=" target="_blank"><img src="${element.thumbnail.path+".jpg"}"></a>
                 </div>
                 <div id="character-about">
                    <h4><span>${element.name}</span></h4>
                    <!-- <img src="assests/images/add-to-favorites.png" style="width:25px; height: 25px; margin: 10px;"> -->
                 </div>
              </div>
              
              <div style="display:none;">
              <span>${element.name}</span>
              <span>${element.description}</span>
              <span>${element.comics.available}</span>
              <span>${element.series.available}</span>
              <span>${element.stories.available}</span>
              <span>${element.thumbnail.path+'/portrait_uncanny.' + element.thumbnail.extension}</span>
              <span>${element.id}</span>
              <span>${element.thumbnail.path+'/landscape_incredible.' + element.thumbnail.extension}</span>
              <span>${element.thumbnail.path+'/standard_fantastic.' + element.thumbnail.extension}</span>
             </div>
              
          </div>`
         });
         clickHandler();
         // ----footer-------------
         document.getElementById('footer').innerText=responseJSON.attributionText; 
}
fetch(`https://gateway.marvel.com/v1/public/characters?ts=2&apikey=494ed1eb931aff37808083dfe4f0d43f&hash=4999b6e62f85dd61c3aebc2b702c351ba`)
.then(res => res.json())
.then(data => handler(data));
})());



// -------function on click------------

function clickHandler(){
   let characterDetail = document.querySelectorAll('.character');
   console.log(characterDetail);
       
   characterDetail.forEach(element => {
             element.addEventListener('click',function(){
                  // console.log(this.parentElement.children[1].children[0].innerHTML);
               // console.log(this.parentElement.children[1].children[0].innerHTML);

         //  console.log(this.parentElement.children['1'].children['5'].innerHTML)

               let heroInfo = {
                  name:this.parentElement.children[1].children[0].innerHTML,
                  description:this.parentElement.children[1].children[1].innerHTML,
                  comics:this.parentElement.children[1].children[2].innerHTML,
                  series:this.parentElement.children[1].children[3].innerHTML,
                  stories:this.parentElement.children[1].children[4].innerHTML,
                  img:this.parentElement.children[1].children[8].innerHTML,
                  
                  id:this.parentElement.children[1].children[6].innerHTML,
               }
                 
               localStorage.setItem('heroInfo',JSON.stringify(heroInfo));
               console.log(JSON.parse(localStorage.getItem('heroInfo')));
            
             });   
   });

}
