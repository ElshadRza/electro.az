import items from './data.json' assert {type: 'json'};
console.log(items.phone.Iphone.IphoneX[0].img); 
// search algoritm start

const navInput = document.getElementById("navInput");
const navList = document.getElementById("navList");

navInput.onkeyup = function () {
  for (const navItem of navList.children) {
    const dbItem = navItem.textContent.toLowerCase();
    const inputVal = this.value.toLowerCase();

    dbItem.startsWith(inputVal)
      ? navItem.classList.add("active")
      : navItem.classList.remove("active");
  }
};

let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(event){
    let searchQuery = event.target.value.toLowerCase();
    
    console.log(searchQuery)

    let allNamesDOMCollection  = document.getElementsByClassName('name') 
  
    
    for(let i=0;i<allNamesDOMCollection.length;i++){
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
        
        if(currentName.includes(searchQuery))  
        {
            console.log(currentName)
            allNamesDOMCollection[i].style.display = 'block';
        }   
        else{
           
            allNamesDOMCollection[i].style.display = 'none';
        }

    }
})
// search algoritm ends
