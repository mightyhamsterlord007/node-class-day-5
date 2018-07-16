const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/signup', function(req, res) {
    res.render('form');
});

app.post('/signup', function(req, res) {
    res.json({
        user: req.body.name,
        password: req.body.password
    });
});

/*
get request /signteamup 

{
    team: 'NY Knicks',
    password '123'
}

post/signteamup
*/

app.get('/search', function(req, res) {

    const message = req.query.message;
    const taco = req.query.taco;

    if (message) {
        res.json({
            message: message
        })
    }
    if (taco) {
        res.json({
            food: taco

        })
    }
});

app.get('/makesearch', function(req, res) {
    const zip = req.query.zip;
    const city = req.query.city;

    if (zip) {
        res.json({
            data: zip
        });
    }
    if (city) {
        res.json({
            data: city
        });
    }

    res.send('Please input query');

});



app.get('/name', function(req, res) {
    res.send('hello class 000000!!!!!!')
});


app.post('/class-logIn', function(req, res) {
    const data = req.body;
    console.log(req.body)
    res.json({
        data: data
    });
});

app.get('/teams/:teamname/:player/:score', function(req, res) {
    const teamname = req.params.teamname;
    const player = req.params.player;
    const score = req.params.score;
    res.json({
        name: teamname,
        player: player,
        score: score
    });
})

app.get('*', function(req, res) {
    //res.send('Page does not exist. Check your url');
    res.render('error', {message: 'TRY SOMETHING ELSE'});
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server is now running on PORT ${port}`);
});
