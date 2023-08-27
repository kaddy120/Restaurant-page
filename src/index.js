import Home from './views/home';
import Menu from './views/menu';
import About from './views/about';
import Layout from './views/layout';
import './css/styles.css';

function Navigation(ref) {
  const routes = {};

  const router = () => {
    let view = routes[location.pathname];
    if (view) {
      document.title = view.title;
      ref.innerHTML = ' ';
      ref.append(view.render());
    } else {
      history.pushState('', '', '/');
      router();
    }
  };

  /* or I can define this as handle click instead of listening to global click, I don't perhaps the good thing about this is that it helps with decoupling the compont from logic.*/

  window.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      /* console.log('match') */
      e.preventDefault();
      history.pushState('', '', e.target.href);
      router();
    }
  });

  window.addEventListener('popstate', router);
  window.addEventListener('DOMContentLoaded', router);

  const link = (href, name, page) => {
    routes[href] = { title: name, render: page };
    const a = document.createElement('a');
    a.innerHTML = name;
    a.setAttribute('href', href);
    a.dataset.link = '';
    return a;
  };

  return link;
}

function App() {
  const here = document.querySelector('#here');
  const link = Navigation(here);
  const menuLink = link('/menu', 'Menu', Menu);
  const homeLink = link('/', 'Home', Home);
  const contactLink = link('/contact', 'Contact', About);

  const nav = document.createElement('nav');
  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  const app = document.createElement('div');
  app.appendChild(nav);
  return app;
}

content.append(App());

