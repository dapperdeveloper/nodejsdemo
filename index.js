const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message:'Working'})
})


app.listen(8000, () => console.log('server is running'))


