export function contactDisplay(){
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    main.removeChild(main.firstChild);

    const contactPage = document.createElement('div');
    contactPage.classList.add('menuBackground');
    contactPage.textContent = 'CONTACT';
    main.appendChild(contactPage);

}