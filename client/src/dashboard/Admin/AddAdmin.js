import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import { FiUser } from "react-icons/fi";
import Nav_Side from "./Nav_Side";
import Nav9 from "./Nav9";
import "./AddAdmin.css";
import { Link } from "react-router-dom";

function AddAdmin() {
  const nav = useNavigate();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [telephoneReg, settelephoneReg] = useState("");
  const [societeReg, setSocieteReg] = useState("");
  const [nomReg, setNomReg] = useState("");
  const [prenomReg, setPrenomReg] = useState("");

  const [values, setValues] = useState("");
  const [errors, setErrors] = useState("");

  Axios.defaults.withCredentials = true;
  const register = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/AddAdmin", {
      name: usernameReg,
      password: passwordReg,
      email: emailReg,
      telephone: telephoneReg,
      societe: societeReg,
    })
      .then((res) => {
        if (res) {
          nav("/login");
        }
        // setUsernameReg("");
        // setPasswordReg("");
        // setEmailReg("");
        // settelephoneReg("");
        // setSocieteReg("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    // <>
    //   <Nav9 />
    //   <form>
    //     {/* <Navigation /> */}
    //     <div className="hero">
    //       <div className="form-box">
    //         <center>
    //           <h3 className="form-title">Add new Admin</h3>
    //         </center>
    //         <form className="register-form" id="register-form">
    //           <div id="register" className="form-group">
    //             <form className="input-groupe">
    //               <label htmlFor="name">
    //                 <i class="zmdi zmdi-account material-icons-name"></i>
    //               </label>
    //               <input
    //                 name="username"
    //                 className="input-field"
    //                 type="text"
    //                 id="username"
    //                 autoComplete="off"
    //                 placeholder="Your username"
    //                 icon={<FiUser />}
    //                 value={usernameReg}
    //                 onChange={(e) => setUsernameReg(e.target.value)}
    //                 required
    //               />

    //               <div className="form-group">
    //                 <label htmlFor="email">
    //                   {" "}
    //                   <i class="zmdi zmdi-email material-icons-name"></i>
    //                 </label>
    //                 <input
    //                   className="input-fieeld"
    //                   name="email"
    //                   type="email"
    //                   id="email"
    //                   autoComplete="off"
    //                   placeholder="Your email"
    //                   value={emailReg}
    //                   onChange={(e) => setEmailReg(e.target.value)}
    //                   required
    //                 />
    //                 {/* {errors.email && <p className="error">{errors.email}</p>} */}
    //               </div>
    //               <div className="form-group">
    //                 <label>
    //                   <i class="zmdi zmdi-balance"></i>
    //                 </label>
    //                 <input
    //                   className="input-fieeld"
    //                   type="text"
    //                   id="societe"
    //                   autoComplete="off"
    //                   placeholder="Your company"
    //                   value={societeReg}
    //                   onChange={(e) => setSocieteReg(e.target.value)}
    //                   required
    //                 />
    //                 {/* {errors.societe && <p className="error">{errors.societe}</p>} */}
    //               </div>

    //               <div className="form-group">
    //                 <label>
    //                   <i class="zmdi zmdi-phone"></i>
    //                 </label>
    //                 <input
    //                   type="tel"
    //                   className="input-field"
    //                   id="tel"
    //                   autoComplete="off"
    //                   placeholder="Your number"
    //                   value={telephoneReg}
    //                   onChange={(e) => settelephoneReg(e.target.value)}
    //                   required
    //                   pattern="[0-9]{8}"
    //                 />
    //               </div>

    //               {/* {errors.telephone && <p className="error">{errors.telephone}</p>} */}

    //               <div className="form-group">
    //                 <label htmlFor="cpassword">
    //                   <i class="zmdi zmdi-lock"></i>
    //                 </label>
    //                 <input
    //                   type="password"
    //                   className="input-field"
    //                   id="password"
    //                   autoComplete="off"
    //                   placeholder="Your password"
    //                   value={passwordReg}
    //                   onChange={(e) => setPasswordReg(e.target.value)}
    //                   required
    //                 />
    //               </div>
    //               {/* {errors.password && <p className="error">{errors.password}</p>} */}
    //               <div className="button-box">
    //                 <button onClick={register} className="submit-btn">
    //                   {" "}
    //                   Register{" "}
    //                 </button>
    //                 <div className="social-icons">
    //                   {/* <img src={fb} alt="fb" /> */}
    //                   {/* <img src={gmail} alt="gm" /> */}
    //                   {/* <img src={twitter} alt="tw" /> */}
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </form>
    // </>
    <>
    <Nav9/>
    <div style={{ marginTop: "20px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        {/* <h1>{id}</h1> */}

       

        
        <label>Nom d'utilisateur :</label>
        <input
          type="text"  value={usernameReg}
                          onChange={(e) => setUsernameReg(e.target.value)}
                          required
         
        ></input>
        <label>Adresse email :</label>
        <input
          type="text"  value={emailReg}
                            onChange={(e) => setEmailReg(e.target.value)}
                             required
          
        ></input>
         <label>Nom  :</label>
        <input
          type="text"  value={nomReg}
                          onChange={(e) => setNomReg(e.target.value)}
                          required
         
        ></input>
         <label>Prenom :</label>
        <input
          type="text"  value={prenomReg}
                          onChange={(e) => setPrenomReg(e.target.value)}
                          required
         
        ></input>
        <label>Entreprise :</label>
        <input
          type="text"  value={societeReg}
                            onChange={(e) => setSocieteReg(e.target.value)}
                           required
         
        ></input>
        <label>Telephone : </label>
        <input
          type="text" value={telephoneReg}
                            onChange={(e) => settelephoneReg(e.target.value)}
                            required
                          pattern="[0-9]{8}"
          
        ></input>
        <label>Mot de passe : </label>
        <input
          type="text"
          
        ></input>

       
       
        <center>
          <button
            type="button"
            class="btn btn-success"
             onClick={register}
            
          >
            Valider
          </button>
          
          <Link to={"/Main"}>
            <button className="btn btn-edit">go back</button>
          </Link>
        </center>
      </form>
    </div>
    </>
  );
}

export default AddAdmin;
