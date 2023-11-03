const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index', {data:
         {categorii:
             [{nume:"Bicicleta de curse", numar:6}, 
             {nume:"Bicicleta de ciclocros", numar:3}, 
             {nume:"Bicicleta de trekking", numar:7}, 
             {nume:"Bicicleta de oras", numar:1}, 
             {nume:"Bicicleta pliabila", numar:2}, 
             {nume:"Bicicleta olandeza", numar:13},
             {nume:"BMX", numar:13},
             {nume:"Bicicleta hibrida", numar:13}, 
             {nume:"Bicicleta electrica", numar:13}, 
             {nume:"Bicicleta de munte", numar:13}  ]
        }
    })
    }
) 

app.get('/:categorie/editare', (req, res)=>{
    res.render("editareCategorie", {data: 24})
})

app.get('/:categorie/:articol/editare', (req, res)=>{
    res.render("categorieArticolEditare", {data: "Mircea"})
})

app.get('/:categorie/:articol', (req, res) => {
    const articol = req.params.articol
    res.render('articol', {data: {userQuery: articol }})
}) 

app.get('/adaugarePost', (req,res)=>{
    res.render("adaugarePost", {data: 99})
})

app.get('/adaugareCategorie', (req,res)=>{
   res.render("adaugareCategorie", {data: "Antonia"})
})

app.get('/:categorie', (req, res)=>{
    const categorie = req.params.categorie
    res.render("categorie", {data: "Luna"})
})






//Prima pagina
app.get('/', (req, res)=>{
    return res.send('Hello everyone')
})

app.post('/', (req, res) =>{
    return res.send('Buton categorie noua')
})


//Un formular pentru a adauga o postare
app.post('/adaugarePost', (req,res)=>{
    return res.send('ai adaugat un articol nou')
})


//Un formular pentru a adauga o categorie
app.post('/adaugareCategorie', (req,res)=>{
    return res.send('ai adaugat o categorie noua')
})


//Pagina unei categorii
app.get('/:categorie', (req, res)=>{
    const categorie = req.params.categorie
    return res.send('ai accesat ' + categorie)
})
app.delete('/:categorie', (req, res)=>{
    return res.send('ai sters din categoria...')
})
app.put('/:categorie', (req, res)=>{
    return res.send('ai editat in categoria...')
})
app.post('/:categorie', (req, res)=>{
    return res.send('ai adaugat in categoria...')
})


//Un formular pentru a edita o categorie
app.put('/:categorie/editare', (req, res)=>{
    return res.send('ai editat categoria !')
})


//Pagina unui articol
app.get('/:categorie/:articol', (req, res)=>{
    const articol = req.params.articol
    return res.send('ai accesat articolul: ' + articol)
})
app.delete('/:categorie/:articol', (req, res)=>{
    return res.send('ai sters articolul')
})
app.put('/:categorie/:articol', (req, res)=>{
    return res.send('ai editat articolul')
})


//Un formular pentru a edita o postare
app.put('/:categorie/:articol/editare', (req, res)=>{
    return res.send('ai editat articolul !')
})




app.listen(port, ()=>{
    console.log(`App listens on port ${port}...`)
})