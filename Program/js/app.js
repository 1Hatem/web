//link in button section and paragragh section

for(var sec=1;sec<=6;++sec){

sec=section.getAttrribute("data-nav");

Link=section.getAttrribute("id");

ListItems=document.createElement("li");


    ListItems.innerHTML =`<a class="main__link"> href="#${sec}">${Link}</a>`;
    
    navList.appendChild(ListItems);

    document.getElementById(navbar__list).appendChild(ListItems);

} 


// link sections and  properties in css 


function properties() {
  for(var sec=1;sec<=6;++sec){
    sec.classList.add("your-active-class");
  };
  };
//calling function


  properties();






