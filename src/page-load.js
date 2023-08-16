function component() {
    const content = document.querySelector('#content');
    
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    content.appendChild(sidebar);

    const sidebarLogo = document.createElement('span');
    sidebarLogo.classList.add('logo');
    sidebarLogo.textContent = 'Disadorno';
    sidebar.appendChild(sidebarLogo);



    const main = document.createElement('div');
    main.classList.add('main');
    const image = document.createElement('img');
    image.alt = "Eat Bread as often as possible";
    image.src = "/src/bread.jpg";
    image.classList.add('image');
    main.appendChild(image);
    content.appendChild(main);



    const tabs = document.createElement('div');
    tabs.classList.add('tabs')
    const home = document.createElement('span');
    home.textContent = 'Home';
    home.classList.add('home');
    tabs.appendChild(home);
    const menu = document.createElement('span');
    menu.classList.add('menu');
    menu.textContent = 'Menu';
    tabs.appendChild(menu);
    const contact = document.createElement('span');
    contact.classList.add('contact');
    contact.textContent = 'Contact Us';
    tabs.appendChild(contact);
    sidebar.appendChild(tabs);

   
    return content
}

document.body.appendChild(component());