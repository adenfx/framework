const Pool = require('pg').Pool
const pool =new Pool({
    user:'postgres',
    password:'1234',
    host:'localhost',
    port:5432,
    database:'coba',
})
const getCstmr = (request,response) =>{
    pool.query('SELECT * FROM pelanggan', (error,results)=>{
        if(error){
            throw error
        }
        response.status(200).json (results.rows)
    })
};
const cariCstmr = (request,response) =>{
    const id_pelanggan = request.params.id
        pool.query('SELECT * FROM pelanggan WHERE id_pelanggan =$1',
        [1], (error,results)=>{
            if(error){
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
    const getLaptop = (request,response) =>{
        pool.query('SELECT * FROM laptop', (error,results)=>{
            if(error){
                throw error
            }
            response.status(200).json (results.rows)
        })
    };
    const cariLaptop = (request,response) =>{
        const id_laptop = request.params.id
            pool.query('SELECT * FROM laptop WHERE id_laptop =$1',
            [1], (error,results)=>{
                if(error){
                    throw error
                }
                response.status(200).json(results.rows)
            })
        }
        const getAksesoris = (request,response) =>{
            pool.query('SELECT * FROM aksesoris', (error,results)=>{
                if(error){
                    throw error
                }
                response.status(200).json (results.rows)
            })
        };
        const cariAksesoris = (request,response) =>{
            const id_aksesoris = request.params.id
                pool.query('SELECT * FROM aksesoris WHERE id_aksesoris =$1',
                [2], (error,results)=>{
                    if(error){
                        throw error
                    }
                    response.status(200).json(results.rows)
                })
            }
        const getPesan = (request,response) =>{
                pool.query('SELECT * FROM pesan', (error,results)=>{
                    if(error){
                        throw error
                    }
                    response.status(200).json (results.rows)
                })
            };
        const cariPesan = (request,response) =>{
             const id_pesan = request.params.id
                 pool.query('SELECT * FROM pesan WHERE id_aksesoris =$1',
                [3], (error,results)=>{
                    if(error){
                        throw error
                    }
                    response.status(200).json(results.rows)
                    })
                }
        const cariHarga = (request,response) =>{
            //  const harga = request.params.id
                 pool.query('select laptop.nama_laptop,laptop.harga_laptop,aksesoris.nama_aksesoris,aksesoris.harga_aksesoris from laptop,aksesoris where laptop.id_laptop=aksesoris.id_aksesoris', 
                 (error,results)=>{
                    if(error){
                        throw error
                    }
                    response.status(200).json(results.rows)
                    })
                };

        const createLaptop =(Request,response)=>{
            // console.log('log:', request.body);
            const data = {
                id_laptop : request.body.id_laptop,
                nama_laptop : request.body.nama_laptop,
                harga_laptop : request.body.harga_laptop,

            };
            const values=[
                data.id_laptop,
                data.nama_laptop,
                data.harga_laptop
            ];
            console.log('id_laptop:', values)
            pool.query('insert into laptop(id_laptop, nama_laptop, harga_laptop) values ($1,$2,$3)'), 
            values,
            (error,results)=>{
                if (error){
                    throw error
                }
                response.send('masuk');
                console.log('user:', results.rows[0]);
            }
        }


module.exports = {
    getCstmr,cariCstmr,getLaptop,cariLaptop,getAksesoris,cariAksesoris,getPesan,cariPesan,cariHarga,createLaptop
}