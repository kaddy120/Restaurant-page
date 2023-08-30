/* Contact */

const contacts = [
  {
    title: 'Pysical address',
    details: ['478 Songozwi Street', 'Louis Trichardt', 'Limpopo'],
  },
  {
    title: 'Kaddy Marindi',
    details: ['Manager', '086 162 7000', 'kaddy_marindi@marindicafe.co.za'],
  },
  {
    title: 'Tebogo Ramalapa',
    details: ['Sr. Manager', '086 162 7111', 'Tebo.Ramalapa@marindicafe.co.za'],
  },
];

export default function About() {
  let html = '';

  const detailsList = (details) => {
    let list = '';
    for (let item of details) {
      list += `<li>${item}</li>`;
    }
    return list;
  };

  for (let contant of contacts) {
      html += `<div class='contanct_list_item'>
      <h4 class='card-title'>${contant.title}</h4>
      <ul>
         ${detailsList(contant.details)}
      </ul> 
     </div>`;
  }
  return `
<section class='contact'>
  <div class='container'>
    <h3 class='section-title'>Contact us</h3>
    <div class='contact_list'>
      ${html}
    </div>
  </div>
</section>
`  
}

