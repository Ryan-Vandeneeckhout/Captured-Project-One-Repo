const darkModeOnBttn = document.querySelector(".darkModeOn");
let htmlElement = document.documentElement;

darkModeOnBttn.addEventListener("click", function () {
    if (darkmodetheme === 0) {
        darkModeOnBttn.classList.toggle("open");
        htmlElement.setAttribute("data-theme", "dark");
        darkmodetheme--;
    }
    else {
        htmlElement.setAttribute("data-theme", "light");
        darkmodetheme++;
    }
   
 
});

// Global Variable List Start// 
let darkmodetheme = 0;

function darkmodeBlog() {
    if (darkmodetheme === 0) {
    
        document.body.style.backgroundColor = "#2c2c2c";
        document.body.style.color = "white";
        darkModeOn.style.backgroundColor = "black";
        sideMenu.style.backgroundColor = "rgb(90, 90, 90)";
        webpageHeadingContainer1.style.color = "black";
        recentPosts.style.color = "white";
        recentPosts2.style.color = "white";
        recentPosts3.style.color = "white";
        recentPosts4.style.color = "white";
    }
}




function reMoveGallery() {

    if (darkmodetheme === 0) {
        document.body.style.backgroundColor = "#2c2c2c";
        whatIsCaptured.style.backgroundColor = "#2c2c2c";
        CapturedContactResources.style.backgroundColor = "#2c2c2c";
        monthlyProfile.style.backgroundColor = "rgb(90, 90, 90)";
        quadContentContainer.style.backgroundColor = "rgb(90, 90, 90)";
        galleryCaputuredImages.style.backgroundColor = "rgb(90, 90, 90)";
        galleryCaputured.style.backgroundColor = "#2c2c2c";
        credits.style.backgroundColor = "rgb(90, 90, 90)"; 
        darkModeOn.style.backgroundColor = "black";

        document.body.style.color = "black";
        whatIsCaptured.style.color = "white";
        monthlyProfile.style.color = "white";
        quadContentContainer.style.color = "white";
        galleryCaputuredImages.style.color = "white";
        contentContact1.style.color = "white";
        contentContact2.style.color = "white";
        contentContact3.style.color = "white";
        contentContact4.style.color = "white";
        icons1.style.backgroundColor = "white";
        icons2.style.backgroundColor = "white";
        icons3.style.backgroundColor = "white";
        icons4.style.backgroundColor = "white";

        darkmodetheme--;
    }
    
    else {         
        whatIsCaptured.style.backgroundColor = "#d8fbec";
        CapturedContactResources.style.backgroundColor = "#d8fbec";
        document.body.style.backgroundColor = "#d8fbec";
        monthlyProfile.style.backgroundColor = "#d8fbec";
        quadContentContainer.style.backgroundColor = "#fafafa";
        galleryCaputuredImages.style.backgroundColor = "#fafafa";
        darkModeOn.style.backgroundColor = "#fafafa";
        icons1.style.backgroundColor = "rgb(76, 238, 167)";
        icons2.style.backgroundColor = "rgb(76, 238, 167)";
        icons3.style.backgroundColor = "rgb(76, 238, 167)";
        icons4.style.backgroundColor = "rgb(76, 238, 167)";
        galleryCaputured.style.backgroundColor = "white";
        credits.style.backgroundColor = "#2c2c2c"; 

        whatIsCaptured.style.color = "black";
        CapturedContactResources.style.color = "black";
        monthlyProfile.style.color = "black";
        quadContentContainer.style.color = "black";
        galleryCaputuredImages.style.color = "black";
        contentContact1.style.color = "black";
        contentContact2.style.color = "black";
        contentContact3.style.color = "black";
        contentContact4.style.color = "black";
        darkmodetheme++;

    }

}
