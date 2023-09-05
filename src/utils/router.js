/* import { Routes } from "./navigation"; */

export default function Router() {
  let routes;

  const Routes = (route) => {
    routes = route
  }

  const serving = () => {
    let view = routes[location.pathname];
    if (view) {
      return location.pathname;
    } else {
      history.pushState('', '', '/');
      return '/';
    }
  };

  const ServePage = () => {
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
    } else {
      history.pushState('', '', '/');
      router();
    }
  };

  window.addEventListener('click', (e) => {
    const page = document.querySelector('#page');
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      history.pushState('', '', e.target.href);
      page.innerHTML = ServePage();
    }
  });

  window.addEventListener('DOMContentLoaded', router);

  const Link = (href, name, page) => {
    /* routes[href] = { title: name, render: page }; */
    return `<a href="${href}" data-link>${name}</a>`;
  };

  return {Link, ServePage, Routes};
}

export const {Link, ServePage, Routes} = Router()
