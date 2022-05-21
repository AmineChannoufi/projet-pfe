const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const exphbs=require('express-handlebars')
const nodemailer=require('nodemailer')
const saltRounds = 10;
//Viewer engin setup
// app.engine('handlebars',exphbs());
// app.set('view engine','handlebars')
// //bodyparser midlewars
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())






const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PUT","PATCH"],
    credentials: true,
  })
); // enable cors
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userID",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "usuarios",
});
//get reponse for every client

//
//add reponse by the admin
app.put("/Reponse/feedback/:id", (req, res) => {
  const id = req.params.id;
  const response=req.body.response;
  console.log(response)

  const queryString =`UPDATE feedback SET  response = ?  WHERE id =?`

  db.query(queryString,[response,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
//delete feedback
app.delete("/delete/feedback/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM feedback WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// get feedback pour chaque client tous seul(adherent page)
app.get("/select/feedbackk/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM feedback where iduser=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// get feedback pour chaque client tous seul(admin page)
app.get("/select/feedback/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM feedback where id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
 //Get all FeedBacks for admin:
 app.get("/GetFeedBack", (req, res) => {
  db.query("SELECT * FROM feedback", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
 
//add a feedback(adherent)
app.post("/Feedback/:id", (req, res) => {
  const {Question} = req.body;
  const id = req.params.id;

  const ee =db.query(`SELECT name,email,societe
  FROM user
  WHERE id = '${id}'`,
  function (error, results) {
    if (error) throw error;
    Object.keys(results).forEach(function (key) {
      var row = results[key];
       const email=row.email;
       const societe=row.societe;
       const name=row.name;


       db.query(
        `INSERT INTO feedback (question,iduser, email,societe ,name ) VALUES
         ('${Question}','${id}','${email}','${societe}','${name}')`,
        function (error, results) {
          if (error) throw error;
          res.send(results);
        }
      );
    })});
   

  })
  
  

 

//Add new admin : 
app.post("/AddAdmin", function (req, res) {
  const { name, password, email, telephone, societe ,nom ,prenom } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
    console.log(name);
const role="admin";
    db.query(
      `INSERT INTO user (name, password, email , telephone , societe,role,nom,prenom) VALUES ('${name}','${hash}','${email}','${telephone}','${societe}','${role}','${nom}','${prenom}')`,
      function (error, results) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
});
// demande rejeter par la direction commercial : 
app.put("/rejetercommercial/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const queryString =`UPDATE demande SET  remarque ="demande rejeter"  WHERE id =?`

  db.query(queryString,[id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
// demande accepter par la directipn commercial :
app.put("/validercommercial/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(id)
  const queryString =`UPDATE demande SET  remarque ="demande accepté" ,delai=? , encours=?,re=?,encoursAc=? WHERE id =?`

  db.query(queryString,[body.delai,body.encours,body.re,body.enc,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
//edit user
app.put("/editee/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE user SET  name =? , role = ? , email =? ,telephone= ?,societe= ? WHERE id =?`

  db.query(queryString,[body.name,body.role,body.email,body.telephone,body.societe,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});

//select just one user
app.get("/select/user/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM user where id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//delete user
app.delete("/delete/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM user WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//get users for admin
app.get("/select/users", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// demande mta3 user we7ed
app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT adherent,ident,rib,ca,encours,id,remarque FROM demande where iduser=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/demande", (req, res) => {
  db.query("SELECT adherent,ident,rib,ca,encours,mode,delai,id FROM demande", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/demandee/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT adherent,ident,rib,ca,encours,mode,delai,id FROM demande where id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.put("/updateuser/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE demande SET  adherent =? , ident = ? , rib =? ,ca= ? WHERE iduser =?`

  db.query(queryString,[body.adherent,body.ident,body.rib,body.ca,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE demande SET  adherent =? , ident = ? , rib =? ,ca= ? ,encoursAc=? WHERE id =?`

  db.query(queryString,[body.adherent,body.ident,body.rib,body.ca,body.enc,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});



app.delete("/delete/demande/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM demande WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/registerr/:id", (req, res) => {
  const id=req.params.id;
  const {
    adherent,
adresse,nom,activite,tele,ident,resp,cin,personne,rib,ca,mode,delai,encours,
  } = req.body;
  // const qq=`INSERT INTO demande SET adherent=?,adresse=?,nom=?,activite=?,tele=?,ident=?,resp=?,cin=?,personne=?,rib=?,ca=?,mode=?,delai=?,encours=?,
  // WHERE iduser=?`
    
  // db.query(qq,[adherent,adresse,nom,activite,tele,ident,resp,cin,personne,rib,ca,mode,delai,encours,id],resp,(err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   return res.json({
  //     success: 1,
  //     message: 'modification avec succées !!',
  //   });
  //   }
  // );

  // ,adresse='${adresse}',username='${username}',nom='${nom}'
  // ,activite='${activite}',tele='${tele}',ident='${ident}',resp='${resp}',cin='${cin}',personne='${personne}',
  // rib='${rib}',ca='${ca}',mode='${mode}',delai='${delai}',encours='${encours}'
  db.query(
    `INSERT INTO demande (adherent,adresse,activite,tele,ident,resp,cin,personne,rib,ca,mode,delai,encours,iduser) VALUES('${adherent}',
    '${adresse}','${activite}','${tele}','${ident}','${resp}','${cin}','${personne}','${rib}','${ca}','${mode}','${delai}','${encours}','${id}')`
   ,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );

   
});



app.post("/register", function (req, res) {
  const { name,nom,prenom, password, email, telephone, societe } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
    console.log(name);

    db.query(
      `INSERT INTO user (name, password, email , telephone , societe,nom,prenom) VALUES ('${name}','${hash}','${email}','${telephone}','${societe}','${nom}','${prenom}')`,
      function (error, results) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
});
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user, });
  } else {
    res.send({ loggedIn: false });
  }
});
app.post("/login", function (req, res) {
  const { name, password } = req.body;
  db.query(
    `SELECT * FROM user WHERE name = '${name}'`,
    function (error, results) {
      if (error) throw error;
      Object.keys(results).forEach(function (key) {
        var row = results[key];
        // console.log(row.id)
      });
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function (err, result) {
          if (result) {
            req.session.user = results;
            res.status(200).send({results:results,id:results[0].id});
          } else {
            res.send({ message: "error, user or password incorrect" });
          }
        });
      } else {
        res.send({ message: "user does not exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
