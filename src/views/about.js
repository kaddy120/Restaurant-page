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

export default function Contact() {
  let contactList = '';

  for (let contact of contacts) {
    contactList += contactItem(contact);
  }
  return `
<section class='contact'>
  <div class='container'>
    <h3 class='section-title'>Contact us</h3>
    <div class='contact_list'>
      ${contactList}
    </div>
  </div>
</section>
`;
}

function contactItem(contact) {
  const detailsList = (details) => {
    let list = '';
    for (let item of details) {
      list += `<li>${item}</li>`;
    }
    return list;
  };

  return `<div class='contanct_list_item'>
      <h4 class='card-title'>${contact.title}</h4>
      <ul>
         ${detailsList(contact.details)}
      </ul> 
     </div>`;
}
