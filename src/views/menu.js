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

  const priceList = (cups) => {
    let list = '';
    for (let cup of cups) {
      list += `<li><span class='price'>${cup.price}</span> | <span class='size'>${cup.size}</span></li>`;
    }
    return list;
  };

  for (let drink of drinks) {
    menu += `<div> 
       <h3>${drink.name}</h3>
       <p>${drink.discription}</p>
       <ul>${priceList(drink.cup)}
    </div>`;
  }

  return `<div><h1>Hot Baverages</h1>
    ${menu}
</div>`;
}
