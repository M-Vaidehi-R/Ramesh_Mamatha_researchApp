(() => {

    console.log(" main.js here..hehe");
   
    const NavLi = document.querySelectorAll(".nav-li");

    let FocusIndex = 0;
    NavLi[FocusIndex].focus();

    document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        FocusIndex = FocusIndex < NavLi.length - 1 ? FocusIndex + 1 : 0;
        NavLi[FocusIndex].focus();
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        FocusIndex = FocusIndex > 0 ? FocusIndex - 1 : NavLi.length - 1;
        NavLi[FocusIndex].focus();
    }
    });

})();