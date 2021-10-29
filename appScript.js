
// Global Variable List Start// 
let darkmodetheme = 0;
let bluemodetheme = 0; 
let caputuredHomePage = 0;
let caputuredContactPage = 0;
let caputuredBlogPage = 0;
let caputuredContent = 0;
let caputuredAboutPage = 0;

const CameraImg = document.querySelector(".galleryImage");
const imgs = document.querySelectorAll(".galleryCaputuredImages");



function pageCheckTheme() {

    if (caputuredHomePage === 1) {
        caputuredContactPage = 0;
        caputuredBlogPage = 0;
        reMoveGallery();
    }
    
    if (caputuredContactPage === 1) {

    }

    if (caputuredBlogPage === 1) {
        caputuredContactPage = 0;
        caputuredHomePage = 0;
        darkmodeBlog();
    }

}
function caputuredHome() {
    caputuredHomePage = 1;
    pageCheckTheme(); 
}

function caputuredBlog() {
    caputuredBlogPage = 1;
    pageCheckTheme();
}

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
