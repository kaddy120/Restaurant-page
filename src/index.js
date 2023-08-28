import Home from './views/home';
import Menu from './views/menu';
import About from './views/about';
import Layout from './views/layout';
import {socialsList} from './components/socials'
import './css/styles.css';

function Navigation() {
  const routes = {
    '/': { title: 'Home', render: Home },
    '/menu': { title: 'Menu', render: Menu },
    '/about': { title: 'About', render: About },
  };

  const serving = () => {
    let view = routes[location.pathname];
    if (view) {
      return location.pathname;
    } else {
      history.pushState('', '', '/');
      return '/';
    }
  };

  const servePage = () => {
    let view = routes[serving()];
    document.title = view.title;
    const content = view.render();
    if (content instanceof HTMLElement) {
      return content.outerHTML;
    } else if (typeof content === 'string') {
      return content;
    }
  };

  const router = () => {
    let view = routes[location.pathname];
    if (view) {
      /* serving = location.pathname; */
      /* console.log(serving); */
      /* document.title = view.title; */
      /* ref.innerHTML = ' '; */
      /* ref.append(view.render()); */
      /* return; */
    } else {
      history.pushState('', '', '/');
      router();
    }
  };

  /* or I can define this as handle click instead of listening to global click, I don't perhaps the good thing about this is that it helps with decoupling the compont from logic.*/

  window.addEventListener('click', (e) => {
    const container = document.querySelector('#container');
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      history.pushState('', '', e.target.href);
      main.innerHTML = servePage();
    }
  });

  /* window.addEventListener('popstate', router); */

  window.addEventListener('DOMContentLoaded', router);

  const link = (href, name, page) => {
    /* I would like to pass handle click to this link */
    routes[href] = { title: name, render: page };
    return `<a href="${href}" data-link>${name}</a>`;
  };

  return { link, servePage };
}

function App() {
  const here = () => document.querySelector('#container');
  const { link, servePage } = Navigation(here);
  /* const page = render(); */
  /* const handle = click(); */
  return `<header>
  <nav>
    <div class="log">
      <h3>Rindi's</h3>
    </div>
    <ul>
      <li>${link('/', 'Home', Home)}</li>
      <li>${link('/menu', 'Menu', Menu)}</li>
      <li>${link('/contact', 'Contact', About)}</li>
      <li class='list-space'></li>
      ${socialsList}
    </ul>
  </nav>
</header>
<main id="main">
  ${servePage()}
</main>
<footer>
  <div class="container">
    <p>Copyright &copy; 2023 kaddy120</p>
    <ul>${socialsList}</ul>
  </div>
</footer>`;
}
/* const content = document.querySelector('#content') */
content.innerHTML = App();
