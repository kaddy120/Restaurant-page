import Home from './views/home';
import Menu from './views/menu';
import Contact from './views/about';
import { Link, ServePage, Routes } from './utils/router';
import { socialsList } from './components/socials';
import './css/styles.css';

const route = {
  '/': { title: 'Home', render: Home },
  '/contact': { title: 'Contact', render: Contact },
  '/menu': { title: 'Menu', render: Menu },
};

function App() {
  Routes(route);
  return `<header>
  <nav>
    <div class="log">
      <h3>Rindi's</h3>
    </div>
    <ul>
      <li>${Link('/', 'Home')}</li>
      <li>${Link('/menu', 'Menu')}</li>

      <li>${Link('/contact', 'Contact')}</li>
      <li class='list-space'></li>
      ${socialsList}
    </ul>
  </nav>
</header>
<main id="page">
  ${ServePage()}
</main>
<footer>
  <div class="container">
    <p>Copyright &copy; 2023 kaddy120</p>
    <ul>${socialsList}</ul>
  </div>
</footer>`;
}
const content = document.querySelector('#content');
content.innerHTML = App();
