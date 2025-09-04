async function handler(req, res) {
  const query = req.query.q;

  const data = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`)
    .then(response => response.json())
    .then(json => json.Response === "True" ? json.Search : []);

  res.status(200).json(data);
}