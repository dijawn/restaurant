export function homeDisplay(){
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    main.removeChild(main.firstChild);

    const home = document.createElement('img');
    home.alt = "Eat Bread as often as possible";
    home.src = "/src/bread.jpg";
    home.classList.add('home');
    main.appendChild(home);
    content.appendChild(main);
}