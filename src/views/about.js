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
      html += `<div>
      <h3>${contant.title}</h3>
      <ul>
         ${detailsList(contant.details)}
      </ul> 
     </div>`;
  }
  return `<div><h1>Contact us</h1></div>
          <div>${html}</div>`
}

