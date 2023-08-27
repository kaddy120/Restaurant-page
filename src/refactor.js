const handleMenu = (event) => {
  let url = window.location.origin;
  const href = event.target.getAttribute('href');
  const title = href.slice(1);
  modifyUrl(title, url + href);
  pages.forEach((page) => {
    if (page.name.toLowerCase() == title.toLowerCase()) {
      /* ref.innerHTML = ''; */
      /* ref.append(routes.render()); */
    }
  });
  event.preventDefault();
};

/* Maybe instead of putting everything in routes object, some of thme can come to stateObj */
const modifyUrl = (title, url) => {
  if (typeof history.replaceState != 'undefined') {
    var obj = {
      Title: title,
      Url: url,
    };
    history.pushState(obj, obj.Title, obj.Url);
  }
};
