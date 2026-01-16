document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.navbar .dropdown');

    hamburger.addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });
});

var bar = document.getElementById("nmBar");
function hideBar () { if (
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPod") ||
        navigator.userAgent.includes("iPad") ||
        navigator.userAgent.includes("Android") ||
        navigator.userAgent.includes("Windows Phone") ||
        navigator.userAgent.includes("BlackBerry") ||
        navigator.userAgent.includes("Windows NT") ||
        navigator.userAgent.includes("Mobile") 
                            ) 
    {
     bar.style.display = "none";
     console.log(true);
     console.log(navigator.userAgent);   
    }
                      };

