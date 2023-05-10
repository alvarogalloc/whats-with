const APIKEY = "df1283dc605a42d1ae913243ff55e3ee";

async function getLatestStates(topic) {
  // from news api
  const country = await getcountryfromclient();
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${APIKEY}&pageSize=3`
  );
  const data = await response.json();
  return data;
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

  let news = document.querySelectorAll(".news");
  for (let i = 0; i < news.length; i++) {
    /*create 3 news in each with the topic data-topic*/
    const articles = getLatestStates(news[i].dataset.topic);
  }
}
