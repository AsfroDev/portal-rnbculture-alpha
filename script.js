let menuDoor = '';

const widthCalc =  window.innerWidth;


function checkMenuDoor (){
    switch (menuDoor) {
        case 'close':
            menuDoor = 'open';
            openMenu();
          break;
        case 'open':
            menuDoor = 'close';
            closeMenu();
        
        default:
      }
}

function firstOpen() {
    switch (menuDoor) {
        case '':
            menuDoor = 'open';
            openMenu();
            break;
        default:
            checkMenuDoor();  
    }
    console.log(menuDoor);
}

function closeMenu() {
    document.getElementById('menu-btn1').setAttribute('style', 'display:none;');
    document.getElementById('menu-btn2').setAttribute('style', 'display:none;');
    document.getElementById('menu-btn3').setAttribute('style', 'display:none;');
    document.getElementById('menu-btn4').setAttribute('style', 'display:none;');
    document.getElementById('menu-btn5').setAttribute('style', 'display:none;');
}

function openMenu() {
    document.getElementById('menu-btn1').setAttribute('style', 'display:block;');
    document.getElementById('menu-btn2').setAttribute('style', 'display:block;');
    document.getElementById('menu-btn4').setAttribute('style', 'display:block;');
    document.getElementById('menu-btn5').setAttribute('style', 'display:block;');
    document.getElementById('menu-btn3').setAttribute('style', 'display:block;');
}

