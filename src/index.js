const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()




// http logger 
app.use(morgan('combined'))

// template engine
app.engine('hbs', engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

app.use(express.static('src/public'));


app.get('/', (req, res) => {
  return res.render('home')
})

app.listen(3000)

