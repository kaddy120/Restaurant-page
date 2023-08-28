/*get link*/
import baristaImg from '../assets/barista.png';
console.log("img img img img img")
console.log('img: ', baristaImg);

export default function Home() {
  const home = `
        <section class="home">
          <article class="hero">
            <div class='hero-bg_img'></div>
            <div class='hero-intro'>
              <h1 class="title">Rindi's Coffee Shop</h1>
              <p class="hero-tagline">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
          </article>
          <div class='menu'>
             <div class='menu-img'><img src='../assets/barista.png'/></div>
             <div class='menu-about'>
                <h3>Our Menu</h3>
                <p>
                    Our diverse menu boasts a fusion of classic brunch favorites and innovative dishes. Whether you're craving the timeless perfection of a stack fluffy pancakes drizzled in real maple syrup or tempted by our signature avocado toast topped with poached eggs, every bite is an experience to remember.
                </p>
                <button>View Menu</button>
              </div>
          </div>
          <h3>something about view our menu</h3>
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
        </section>
`;
  return home;
}
