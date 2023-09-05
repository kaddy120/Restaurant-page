const routes = {
  '/': { title: 'Home', render: Home },
  '/menu': { title: 'Menu', render: Menu },
  '/about': { title: 'About', render: About },
};

function Navigation(routes) {
  const routes = routes;
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
      page.innerHTML = servePage();
    }
  });

  window.addEventListener('DOMContentLoaded', router);

  return {servePage };
}

const link = (href, name, page) => {
  routes[href] = { title: name, render: page };
  return `<a href="${href}" data-link>${name}</a>`;
};

path, element, index = '/'
export { Routes, Route, Outlet, Link } 

  <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>

    </div>
  );
}
