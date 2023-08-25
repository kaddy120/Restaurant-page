import './css/styles.css';

const content = document.querySelector('#content');

function Link(href) {}

function Navbar(ref) {
  const pages = [];
  /* Routing */
  window.addEventListener('popstate', (event) => {
    alert(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`
    );
  });

  const modifyUrl = (title, url) => {
    if (typeof history.replaceState != 'undefined') {
      var obj = {
        Title: title,
        Url: url,
      };
      history.pushState(obj, obj.Title, obj.Url);
    }
  };

  const handleMenu = (event) => {
    /* maybe from this event we can try to get attribute */
    /* generalise */

    let url = window.location.origin;
    const href = event.target.getAttribute('href');
    const title = href.slice(1);
    modifyUrl(title, url + href);
    pages.forEach((page)=>{
      if(page.name.toLowerCase() == title.toLowerCase()){
        ref.innerHTML  = '';
        ref.append((page.page)())
      }
    })
    event.preventDefault();
  };

  const link = (href, name, page) => {
    const btn = document.createElement('button');
    btn.innerHTML = name;
    pages.push({ name, page });
    btn.setAttribute('href', href);
    btn.onclick = handleMenu;
    return btn;
  };
  return link;
}

function App() {
  const here = document.querySelector('#here');
  const link = Navbar(here);
  const menuBtn = link('/menu', 'Menu', Menu);
  const homeBtn = link('/home', 'Home', Home);
  const contactBtn = link('/contact', 'Contact', About);

  const nav = document.createElement('nav');
  nav.appendChild(menuBtn);
  nav.appendChild(homeBtn);
  nav.appendChild(contactBtn);

  const app = document.createElement('div');
  app.appendChild(nav);
  return app;
}

App();

function Home() {
  const div = document.createElement('div');
  div.innerHTML = 'Home Page';
  return div;
}

function Menu() {
  const div = document.createElement('div');
  div.innerHTML = 'Menu Page';
  return div;
}

function About() {
  const div = document.createElement('div');
  div.innerHTML = 'About Page';
  return div;
}

content.append(App());


/* Note
* I think I need to have some window listener to get the reload, when that happens, 
* I should prevent the page from asking for requestig anther page. 
* but instead use navBar routing to get a page.
* */
