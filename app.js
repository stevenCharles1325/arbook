const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.render( path.join(__dirname, 'views/index'), { title: "Home"} )
})

app.get('/about', (req, res) => {
    res.render( path.join(__dirname, 'views/about'), { title: "About"} )
})

app.get('/manifest', (req, res) => {
    res.sendFile('./manifest.json')
})

app.get('/random_numbers', (req, res) => {
    res.sendFile( path.join(__dirname, 'data/data.random_numbers.json') )
})

app.use('/public', express.static( path.join(__dirname, 'public') ))

app.use('/', express.static( __dirname ))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen( PORT , () => {
    console.log(`listening to port ${PORT}`)
})

// !! This code generates the random number and store in into the data for random numbers !!
// function generate(){
//     let container = { numbers: [] }
//     let length = 9999
//     let max = 9999

//     function gen( cont ){
//         if( cont.length > length ) return cont

//         let random_number = Math.random() * max + 1
//         cont.push( random_number )

//         return gen( cont )
//     }

//     container.numbers = gen( container.numbers )
//     console.log(container.numbers)
//     fs.writeFileSync( path.join(__dirname, 'data/data.random_numbers.json'), JSON.stringify(container))
// }
