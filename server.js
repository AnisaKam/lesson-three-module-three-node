const express = require('express'); //importing express - nmp i express!!
const app = express();
const bodyParser = require('body-parser');               //Урок 9

app.use(bodyParser.urlencoded({entended: false}))        //Урок 9

//альтернатива написания bodyParser, чтобы ушло предупреждение об ошибке: 
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//Урок 8.9
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form-submitted', (req, res) => {
    const answer = req.body.firstname + ' ' + res.body.lastname + ' ' + req.body.email + ' ' + req.body.course;
    res.send('Your answers are: ' + ' ' + answer);
})

app.listen(3000, () => {
    console.log(`It's working`)
})

/* Урок 1-7
app.get('/', (req, res) => {
    res.send('Hi I got here')
})

/* задание: 
/vegan
//res.send('Vegan recipes')
*/

//ДЗ № 1

/*app.get('/vegan', (req, res) => {
    res.send('Vegan recipes')
})

app.listen(3000, () => {
    console.log(`It's working`)
})*/