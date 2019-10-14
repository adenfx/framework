const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db= require('./queries')
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.json({
        message:'Belajar PEVN Stack Kelas A'
    });
});

app.get('/cos',db.getCstmr);
app.get('/cos/:id_pelanggan',db.cariCstmr);
app.get('/lap',db.getLaptop);
app.get('/lap/:id_laptop',db.cariLaptop);
app.get('/aks',db.getAksesoris);
app.get('/aks/:id_aksesoris',db.cariAksesoris);
app.get('/pesan',db.getPesan);
app.get('/pesan:id_pesan',db.cariPesan);

app.get('/harga',db.cariHarga);
app.post('/insert',db.createLaptop);


const port = process.env.PORT || 4000;
app.listen(port,() =>{
    console.log(`listening on port: ${port}`);
});