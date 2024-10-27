// MODE BUTTON //

let darkMode = localStorage.getItem('darkMode');
const modeSwitch = document.querySelector('.mode-icon');

const enableDarkmode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode','active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkMode');
    localStorage.removeItem('darkMode');
};

if(darkMode === "active") enableDarkmode();

modeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});


// UP BUTTON //

const upArrow = document.querySelector('.up-arrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { 
        upArrow.style.display = 'flex'; 
    } else {
        upArrow.style.display = 'none';
    }
});

upArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
