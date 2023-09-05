import baristaImg from '../assets/barista.png';
import location from '../assets/Location.svg';
import time from '../assets/Group 42.svg';
import { Link } from '../utils/router';

export default function Home() {
  const myIcon = new Image();
  myIcon.src = baristaImg;

  const locationIcon = new Image();
  locationIcon.src = location;

  const timeIcon = new Image();
  timeIcon.src = time;

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
             <div class='menu-img'>${myIcon.outerHTML}</div>
             <div class='menu-about'>
                <h3>Our Menu</h3>
                <p>
                    Our diverse menu boasts a fusion of classic brunch favorites and innovative dishes. Whether you're craving the timeless perfection of a stack fluffy pancakes drizzled in real maple syrup or tempted by our signature avocado toast topped with poached eggs, every bite is an experience to remember.
                </p>
                ${Link('/menu', '<button>View Menu</button>')}
                
           </div>
          </div>
          <section class='info'> 
             <div class='container'>
               <div>
                 <div class="info-icon">
                    ${locationIcon.outerHTML}  
                 </div>
                 <div>
                   <h4>Locate Us</h4> 
                    <p> Ravele 22, Thsilwavhusiku, Limpopo</> 
                 </div>
               </div>
               <div class="info-operating_time">
                 <div class="info-icon">
                    ${timeIcon.outerHTML}  
                 </div>
                 <div>
                   <h4>Open hours</h4> 
                    <p>Mon to Fri 9:00 AM - 9:00 PM </p> 
                 </div>
               </div>
             </div>
           </section>
          </div>
        </section>
`;
  return home;
}
