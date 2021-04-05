const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index',{
    title : 'Main Page'
   // user: 'Ismail'


  })
})
  app.get('/table', (req, res) => {
    res.render('table' ,{
      title : 'Table Page'
     // user: 'Ismail'
  
  
    })

  })

  app.get('/chart', (req, res) => {
    res.render('chart' ,{
      title : 'Chart Page'
     // user: 'Ismail'
        })
  })

  app.get('/login', (req, res) => {
    res.render('login',{
      title : 'Login Page'
     // user: 'Ismail'
  
  
    })
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})