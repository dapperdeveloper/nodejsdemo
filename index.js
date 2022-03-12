const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message:'Working'})
})


app.listen(PORT, () => console.log('server is running'))


