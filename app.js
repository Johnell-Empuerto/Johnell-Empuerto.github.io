let toggleNavStatus = false;

let toggleNav = function(){
    let getToggleButton = document.querySelector(".toggle-menu");
    let getSideBar = document.querySelector(".toggle-menu-content");
    let getSideBarUl = document.querySelector(".toggle-menu-content ul");
    let getSideBarLinks = document.querySelectorAll(".toggle-menu-content a");

    if (toggleNavStatus == false){
        getToggleButton.innerHTML= '<i class="bi bi-x-square"></i>';
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width ="200px";
        getSideBar.style.backgroundColor = "#000";
        getSideBar.style.display = "block";
       


        let arrayLength = getSideBarLinks.length;
        for (let i = 0; i< arrayLength; i++){
            getSideBarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus == true){
        getToggleButton.innerHTML = '<i class="bi bi-list"></i>';
        getSideBarUl.style.visibility = "hidden";
        getSideBar.style.width ="0";
        getSideBar.style.display = "block";

        let arrayLength = getSideBarLinks.length;
        for (let i = 0; i< arrayLength; i++){
            getSideBarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = false;
    }
}

var typed = new Typed('.typing', {
    strings: ['Developer', 'Freelancer', 'Coder'],
    typeSpeed: 100,
    backSpeed: 100, 
    loop: true
  });

  AOS.init();
