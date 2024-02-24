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
    const sql = "SELECT * FROM book ORDER BY date DESC";
    db.query(sql,(err,r)=>{
        if(err) return res.json({mes: "error"});
        return res.json(r);

    }
    )
})
app.get('/sr',(req,res)=>{
    const sql = "SELECT * FROM book ORDER BY date ASC";
    db.query(sql,(err,r)=>{
        if(err) return res.json({mes: "error"});
        return res.json(r);

    }
    )
})

app.post('/usr', (req, res) => {
    const v = [
        req.body.em,
        req.body.pass
    ];
    
    const sql = "SELECT * FROM user WHERE email = ? AND password = ? "; 
    db.query(sql, v, (err, r) => {
        if (err) {
            return res.json({ error: err, status: '400' });
        } else {
            return res.json({ re: r, status: '200' });
        }
    });
});

app.post('/usrs', (req, res) => {
    const v = [
        req.body.em,
        req.body.pass
    ];
    
    const sql = "INSERT INTO `user` (email,password) VALUES (?)";
    db.query(sql, [v], (err, r) => {
        if (err) {
            return res.json({ error: err, status: '400' });
        } else {
            return res.json({ re: r, status: '200' });
        }
    });
});

app.post('/adms', (req, res) => {
    const v = [
        req.body.em,
        req.body.pass
    ];
    
    const sql = "INSERT INTO `admin` (email,password) VALUES (?)";
    db.query(sql, [v], (err, r) => {
        if (err) {
            return res.json({ error: err, status: '400' });
        } else {
            return res.json({ re: r, status: '200' });
        }
    });
});

app.post('/adm', (req, res) => {
    const v = [
        req.body.em,
        req.body.pass
    ];
    
    const sql = "SELECT * FROM admin WHERE email = ? AND password = ? "; 
    db.query(sql, v, (err, r) => {
        if (err) {
            return res.json({ error: err, status: '400' });
        } else {
            return res.json({ re: r, status: '200' });
        }
    });
});

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



app.post('/add',(req,res)=>{
    const sql = "INSERT INTO book (title,subject,author,date) VALUES (?)"
    
    const vla = [
        req.body.title,
        req.body.subject,
        req.body.author,
        req.body.date,
       
    ]
    
    db.query(sql,[vla],(err,r)=>{
        if(err){
            return res.json(err)
        } 
        else{
            return res.json(r)
        }
    
    })
})

app.delete('/del', (req, res) => {
    const v = req.body.id; 
   
    const sql = "DELETE FROM book WHERE id = ?"; 
    db.query(sql, v, (err, r) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(r);
        }
    });
});

app.listen(7000,()=>{
    console.log("running")
    
})