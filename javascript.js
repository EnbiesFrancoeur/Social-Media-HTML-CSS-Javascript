// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//NOTIF
const notifPopup = document.querySelector('.notifications-popup');


//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



function dropdownMenuToggle() {
    dropdownMenu.classList.toggle(".dropdown-menu-height");
}

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

// Notifications Pop up
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();

        item.classList.add('active');
        if (item.id != 'notifications') {
            notifPopup.style.display = 'none';
        } else {
            notifPopup.style.display = 'block';
            // Remove Notification count
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// close Notif
// const closeNotif = (menuItem) => {
//     if (menuItem.target.classList.contains("container")) {
//         notifPopup.style.display = 'none';
//     }
// }
// notifPopup.addEventListener('click', closeNotif);



// ========================  MESSAGES  ===================
// search message
function searchMessage() {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('.message-body').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });
}

messageSearch.addEventListener('keyup', searchMessage);

// highlight message
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// --------------------- THEME CUSTOMIZATION ---------------------
// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// close modal
const closeThemeModal = (i) => {
    if (i.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);
// ========================= FONTS ==========================

// remove active class on font size
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('-==-sticky-top-left', '5.4rem');
            root.style.setProperty('-==-sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('-==-sticky-top-left', '5.4rem');
            root.style.setProperty('-==-sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--==sticky-top-left', '-2rem');
            root.style.setProperty('-==-sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('==--sticky-top-left', '-5rem');
            root.style.setProperty('-==-sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
}
)

// ====================== COLOR PALETTE =================
//remove active class from color
const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
// change color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        //remove active class
        changeActiveColor();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// Theme Background values
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
// change background color
bg1.addEventListener('click', () => {
    // add active class
    bg1.classList.add('active');
    //remove active class from others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();

})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';


    // add active class
    bg2.classList.add('active');
    //remove active class from others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';


    // add active class
    bg3.classList.add('active');
    //remove active class from others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})