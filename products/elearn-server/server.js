const express = require('express')
const app = express()
const i18next = require('i18next')
const backend = require('i18next-fs-backend')
const middleware = require('i18next-http-middleware')


i18next.use(backend).use(middleware.LanguageDetector)
.init({
    fallbackLng:'en',
    backend:{
        loadPath:('./node_modules/lang/{{lng}}/translation.json')
    }
})

app.use(middleware.handle(i18next))


app.get("/",(req,res) => {
    
        res.send(req.t('description'))
    
})




app.listen(8000,() => console.log("Server started at port 8000"))