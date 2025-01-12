// Selecting the card container from the DOM
let cardContainer = document.getElementById('container');

// Event listener attached to dom which is executed when the page is loaded
 function fun(name){
    let favourites = localStorage.getItem(name);

    if (favourites == null) {
        // cardContainer.innerHTML = "<p class=\"no-characters\">No characters present in Favourites</p>"
        return;
    }
    
    else {
        favourites = JSON.parse(this.localStorage.getItem(name));
    }
    
    console.log(favourites);
    
      // if all the characters are deleted from favourites and not character left for displaying
      if (favourites.length == 0) {
        // cardContainer.innerHTML = "<p class=\"no-characters\">No characters present in Favourites</p>";
        return;
    }
    
    favourites.forEach(character => {
        //    console.log(element.img); 
        cardContainer.innerHTML +=`
        <div class="flex-col card">
    
          <img src="${character.img}" alt="">
          <span class="name">${character.name}</span>
          <span class="id">Id : ${character.id}</span>
          <span class="comics">Comics : ${character.comics}</span>
          <span class="series">Series : ${character.series}</span>
          <span class="stories">Stories : ${character.stories}</span>
          
               <button class="btn" id="btn1"><i class="fa-solid fa-circle-info"></i> &nbsp; Remove</button>
          
    
        </div>`
       });
       events();
};

(() =>{
    fun('fav');
    fun('fav2');
})();






 function events() {
    var btn=document.querySelectorAll('.btn');
    // console.log(btn);/
    // console.log(btn[2].id);

    btn.forEach(element =>{
           element.addEventListener('click',removeFav);
        console.log(element+'hii');
    })
    
 }

 function removeFav(){
    // console.log(this.parentElement.children[1].innerHTML);
    // console.log(this.id);
    if(this.id == 'btn2'){
        var name = this.parentElement.children[1].innerHTML;
            var arr = JSON.parse(localStorage.getItem("fav2"));
            // console.log(arr);
            // console.log(name);
            arr=arr.filter((element)=>{
                return element.name !== name;
            })
            // console.log(arr);
            localStorage.setItem('fav2',JSON.stringify(arr));
            // console.log(this.parentElement.parentElement);
            this.parentElement.innerHTML="";
            alert('Removed');
    }
    else{
        
        console.log(this.id);
        var name = this.parentElement.children[1].innerHTML;
        var arr = JSON.parse(localStorage.getItem("fav"));
        console.log(arr);
        // console.log(name);
        arr=arr.filter((element)=>{
            return element.name !== name;
        })
        console.log(arr+'fav2');
        localStorage.setItem('fav',JSON.stringify(arr));
        // console.log(this.parentElement.parentElement);
        this.parentElement.innerHTML="";
        alert('Removed');
    }

    


 }

