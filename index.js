var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join('./dist/weather-network')));
app.use('/app/*', express.static(path.join('./dist/weather-network')));

app.use('/image', express.static(path.join(__dirname, './public')));

const photos = [
    {name: 'pic1', url: '/image/pic1.jpg'},
    {name: 'pic2', url: '/image/pic2.jpg'},
    {name: 'pic3', url: '/image/pic3.jpg'},
    {name: 'pic4', url: '/image/pic4.jpg'},
    {name: 'pic5', url: '/image/pic5.jpg'},
    {name: 'pic6', url: '/image/pic6.jpg'},
    {name: 'pic7', url: '/image/pic7.jpg'},
    {name: 'pic8', url: '/image/pic8.jpg'},
    {name: 'pic9', url: '/image/pic9.jpg'},
    {name: 'pic10', url: '/image/pic10.jpg'}
];

app.get('/api/photo', function (req, res) {
    res.send(photos);
})

app.listen(3220, () => console.log('listning on localhost:3220'))