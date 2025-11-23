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


app.listen(3000, () => {
   console.log('server started');
});
