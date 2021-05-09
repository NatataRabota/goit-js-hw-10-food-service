import './styles.css';
import menu from './data/menu.json';
import createMenu from './templates/menuTemplate.hbs';

const refs = {
    menuList: document.querySelector('.js-menu'),
    switchButton: document.querySelector('.theme-switch__toggle'),
    body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));
refs.switchButton.addEventListener('click', onChangeTheme);

// Устанавливает исходную тему LIGHT для body
refs.body.classList.add(
    localStorage.getItem('theme') === null
        ? Theme.LIGHT
        : localStorage.getItem('theme'),
);

// Устанавливает DARK тему при чекнутом инпуте  
refs.switchButton.checked = localStorage.getItem('theme') === Theme.DARK;

function changeTheme(rem, add) {
    // refs.body.classList.remove(rem);
    // refs.body.classList.add(add);
    refs.body.classList.replace(rem, add);
    localStorage.setItem('theme', add);
}

// Функция смены темы
function onChangeTheme(e) {
    if (e.target.checked) {
        changeTheme(Theme.LIGHT, Theme.DARK);
        return;
    }
    changeTheme(Theme.DARK, Theme.LIGHT);
}