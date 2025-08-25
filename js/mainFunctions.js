/*Implement at least 2 interactive features such as:
Form validation (e.g., contact form, order form).

Dynamic content updates (e.g., product gallery, customer reviews).

Simple user interactions (e.g., navigation menu, image slider).*/


//Functions for page display 

//Content display - consistent across all pages - prevent loading when not needed
totalPages = document.querySelectorAll(".display")
var activePage = null

for(let i = 0; i < totalPages.length; i++){


    if(totalPages[i] != homepage){

        totalPages[i].setAttribute("hide", "true");

    }else{

        totalPages[i].setAttribute("hide", "false");
        activePage = totalPages[i]

    };

};
function changePage(pageid){

    if(pageid != activePage){

        pageid.setAttribute("hide", "false");
        activePage.setAttribute("hide", "true");
        activePage = pageid;

    };
    
;}

//Image slider

//Style functions- media queries reaction,etc

//Style function 1- Image/product update(portfolio item)

//Style function 2- navbar

//Style function 3 - dropdowns

//Form response/store- contact and book - read and compile

//cache clearing and loading content
