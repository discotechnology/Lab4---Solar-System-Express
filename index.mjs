import express from 'express';
const planets = (await import('npm-solarsystem')).default
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   res.render('index');
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


app.listen(3000, () => {
   console.log('server started');
});
