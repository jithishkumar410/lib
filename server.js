const express= require('express')
const mysql = require('mysql')
const cors =require('cors')
const bp = require('body-parser')
const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection(
    {
        host:"sql6.freesqldatabase.com",
        user:'sql6685684',
        password:"RjnUBFvL6E",
        database:'sql6685684'
    }
)

app.get('/',(req,res)=>{
    const sql = "SELECT * FROM book";
    db.query(sql,(err,r)=>{
        if(err) return res.json({mes: "error"});
        return res.json(r);

    }
    )
})
app.post('/search', (req, res) => {
    const v = req.body.sea; 
    console.log(v)
    const sql = "SELECT * FROM book WHERE title = ?"; 
    db.query(sql, [v], (err, r) => {
        if (err) {
            return res.json(err);
        } else {
           
            return res.json(r);
        }
    });
});



// app.post('/ser',(req,res)=>{
//     const sql = "INSERT INTO book (title,subject,author,date) VALUES (?)"
    
//     const vla = [
//         req.body.title,
//         req.body.subject,
//         req.body.author,
//         req.body.date,
       
//     ]
    
//     db.query(sql,[vla],(err,r)=>{
//         if(err){
//             return res.json(err)
//         } 
//         else{
//             return res.json(r)
//         }
    
//     })
// })
app.listen(7000,()=>{
    console.log("running")
    
})