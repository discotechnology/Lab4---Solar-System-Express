import express from 'express';
const planets = (await import('npm-solarsystem')).default
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async(req, res) => {
   let apiKey = "7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e";
   let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;
   let response = await fetch(url);
   let data = await response.json();
   let randomImage = data.urls.full;
   res.render("index",{"image":randomImage})
});


app.get('/earth', (req, res) => {
   let planet = planets.getEarth();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Earth"});
});

app.get('/mars', (req, res) => {
   let planet = planets.getMars();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Mars"});
});

app.get('/mercury', (req, res) => {
   let planet = planets.getMercury();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Mercury"});
});

app.get('/venus', (req, res) => {
   let planet = planets.getVenus();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Venus"});
});

app.get('/jupiter', (req, res) => {
   let planet = planets.getJupiter();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Jupiter"});
});

app.get('/saturn', (req, res) => {
   let planet = planets.getSaturn();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Saturn"});
});

app.get('/uranus', (req, res) => {
   let planet = planets.getUranus();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Uranus"});
});

app.get('/neptune', (req, res) => {
   let planet = planets.getNeptune();
   console.log(planet);
   res.render('planet', {"planet":planet, "planetName":"Neptune"});
});

app.get('/nasa', async(req, res) => {
   let url = "https://api.nasa.gov/planetary/apod?api_key=VFr6OhZeF3IdMguQTazGkKMUEAMsUnxlW83fJl0A&date=2025-11-23"
   let response = await fetch(url);
   let nasaFacts = await response.json();
   res.render("nasa",{nasaFacts})
});


app.listen(3000, () => {
   console.log('server started');
});
