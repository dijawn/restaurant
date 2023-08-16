export function menuDisplay(){
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const image = document.querySelector('.image');
    main.removeChild(main.firstChild);


    const menuBackground = document.createElement('div');
    menuBackground.classList.add('menuBackground');
    menuBackground.textContent = 'MENU'
    main.appendChild(menuBackground);
    content.appendChild(main);


    
}
