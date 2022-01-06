const shareSocialMedia = document.getElementById("share_icons_container");

shareSocialMedia.addEventListener("click", function(){
    const showSocialMedia = shareSocialMedia.nextElementSibling;
    showSocialMedia.classList.toggle("active");
})