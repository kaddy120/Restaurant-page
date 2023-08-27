export default function Home() {
  const div = document.createElement('div');
  div.innerHTML = 'Home Page';
  return div;
}

const home = `
  <div id="content-mode">
    <header>
      <nav>
        <button onclick="handleMenu()">Home</button>
        <button id="menu">Menu</button>
        <button onclick="handleMenu()">Contact</button>
      </nav>
    </header>
    <main>
      <div class="container">
        <section class="home">
          <article class="hero">
            <h1 class="title">Rindi's Take Shop</h1>
          </article>
          <article>
            <p>
              Beary's has the best porridge! The atmosphere and customer
              service make you feel like you are sitting in the middle of the
              woods, eating like a bear! This is exactly the kind of place
              that I like to return to again and again.
            </p>
          </article>
          <article>
            <h3>Hours</h3>
            <ul>
              <li>Sunday: 8am - 8pm</li>
              <li>Monday: 6am - 6pm</li>
              <li>Tuesday: 6am - 6pm</li>
              <li>Wednesday: 6am - 6pm</li>
              <li>Thursday: 6am - 10pm</li>
              <li>Friday: 6am - 10pm</li>
              <li>Saturday: 8am - 10pm</li>
            </ul>
          </article>
          <article>
            <h3>Location</h3>
            <p>123 Forest Drive, Forestville, Maine</p>
          </article>
        </section>
      </div>
    </main>
  </div>
`;
