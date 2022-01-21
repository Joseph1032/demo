const mobile = document.getElementById("mobile_menu");

mobile.addEventListener("click", () => {
    mobile.classList.toggle("active");

    const dropDown = document.getElementById("dropdown_menu");
    dropDown.classList.toggle("active");
})