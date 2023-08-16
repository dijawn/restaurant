import '/src/style.css';

import './page-load';

import { menuDisplay } from './menu';

import { contactDisplay } from './contact';

import { homeDisplay } from './home'

const menu = document.querySelector('.menu');
menu.addEventListener('click', menuDisplay);

const contact = document.querySelector('.contact');
contact.addEventListener('click', contactDisplay);

const home = document.querySelector('.home');
home.addEventListener('click', homeDisplay);
