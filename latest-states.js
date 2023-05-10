
async function getLatestStates(topic) {
  // from news api
  const data = await fetch(
    `./.netlify/functions/getNews?query=${topic}`
  );
  const jsondata = await data.json();
  return jsondata.articles;
}

function createNewsCard(Title, Description, Image, Url) {
  const new_tag = document.createElement("div");
  new_tag.classList.add("new");
  new_tag.innerHTML = `
    <div class="new__image">
      <img src="${Image}" alt="${Title}" />
    </div>
    <div class="new__info">
      <h2 class="new__title">${Title}</h2>
      <p class="new__description">
        ${Description}
      </p>
      <a href="${Url}" class="new__link" target="_blank">Read More</a>
    </div>
  `;
  return new_tag;
}

function makeNews(element) {
  const articles = getLatestStates(element.dataset.topic);
  articles.then((data) => {
    data.forEach((article) => {
      const new_tag = createNewsCard(
        article.title,
        article.description,
        article.urlToImage,
        article.url
      );
      element.appendChild(new_tag);
    });
  });
}

const searchbar = document.querySelector("#searchbar");
searchbar.addEventListener("keypress", (e) => {
  if (e.keyCode != 13) return;
  const newNews = document.createElement("div");
  newNews.classList.add("news");
  newNews.dataset.topic = e.target.value;
  newNews.innerHTML = `<h2 class="center">About ${e.target.value}</h2>`;
  makeNews(newNews);
  const newscontainer = document.querySelector(".news_container");
  // put at the top
  newscontainer.insertBefore(newNews, newscontainer.firstChild);
});

let news = document.querySelectorAll(".news");
for (let i = 0; i < news.length; i++) {
  /*create 3 news in each with the topic data-topic*/
  makeNews(news[i]);
}
