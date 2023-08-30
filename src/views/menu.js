import cupImg from '../assets/Vector.svg';
const drinks = [
  {
    name: 'Expresso',
    discription: 'Single shot of espresso.',
    cup: [{ price: 'R35', size: '394 kj' }],
  },
  {
    name: 'Flat White',
    discription: 'Double shot of espresso with texturised milk.',
    cup: [{ price: 'R35', size: '394 kj' }],
  },
  {
    name: 'CAFFÈ LATTE',
    discription: 'Single shot of espresso with texturised milk.',
    cup: [{ price: 'R39', size: '705 kj' }],
  },
  {
    name: 'CAFFÈ MOCHA',
    discription: 'Hot chocolate & a shot of espresso with texturised milk.',
    cup: [{ price: 'R42', size: '705 kj' }],
  },
  {
    name: 'AMERICANO',
    discription: 'Double shot of espresso with hot water.',
    cup: [{ price: 'R32', size: '151 kj' }],
  },
  {
    name: 'CAPPUCCINO',
    discription: 'Double shot of espresso with texturised milk.',
    cup: [
      { price: 'R33', size: '366 kj: Short (single shot)' },
      { price: 'R36', size: '479 kj: Easy (double shot)' },
      { price: 'R42', size: '769 kj: Serious (double shot)' },
    ],
  },
];

export default function Menu() {
  let menu = '';

  const cupIcon = new Image();
  cupIcon.src = cupImg;
  cupIcon.classList.add('cup-icon');

  const priceList = (cups) => {
    let list = '';
    for (let cup of cups) {
      list += `<li><span class='price'>${cup.price}</span> | <span class='size'>${cup.size}</span></li>`;
    }
    return list;
  };

  for (let drink of drinks) {
    menu += `<div class="drink"> 
       <h4>${drink.name}</h4>
       <p>${drink.discription}</p>
       <ul class='drik-sizes'>${priceList(drink.cup)}
    </div>`;
  }

  return `
<section class='menu_'>
   <article class="hero">
      <div class='hero-bg_img'></div>
      <div class='hero-intro'>
        <h1 class="title">Our Menu</h1>
      </div>
    </article>
   <div class="menu_drinks">
        <h3><span>${cupIcon.outerHTML}<span> Drinks</h3> 
        <div class='drinks'>
          ${menu}
        </div>
   </div>
</section>`;
}
