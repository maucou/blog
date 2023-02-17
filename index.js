const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./categories/categoriesController")
const articlesController = require("./articles/articlesController")

//View engine
app.set('view engine', 'ejs')

// static
app.use(express.static('public'))

//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database

connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

//controllers
app.use("/", categoriesController)
app.use("/", articlesController)



app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8080, () => {
    console.log("O servido está rodando!")
})