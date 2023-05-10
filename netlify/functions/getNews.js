exports.handler = async function (event, context) {
  const APIKEY = "df1283dc605a42d1ae913243ff55e3ee";
  // your server-side functionality
  const query = event.queryStringParameters;
  // fetch from news api with query
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${APIKEY}&pageSize=3`
  );
  return await data.json()
};
