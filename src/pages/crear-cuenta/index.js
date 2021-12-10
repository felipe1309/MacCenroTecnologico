import { useState } from "react";
import { useRouter } from "next/router";
import { useContexto } from "../../context/Contexto";
import LoginWhite from "../../components/Bottons/BottonOf";
import InputGerick from "../../components/Bottons/InputGerick";

import { LoginWhiteFacebook, LoginWhiteGoogle } from "../../firebase/client";
const Index = () => {
  const { user,setUser,setUsers, users} = useContexto();
  const NewUser = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: Number,
  };
  const [creatingUser, setCreatingUser] = useState(NewUser);
  const userNew = creatingUser
  const route = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      creatingUser
    ])
    console.log(users)
  };
  const handleCreatingUser = (e) => {
    setCreatingUser({
      ...userNew,
      [e.target.name]: e.target.value,
    });
    console.log(creatingUser);
  };
  const hadleClickFacebook = () => {
    LoginWhiteFacebook();
  
  };
  const hadleClickGoogle = () => {
  LoginWhiteGoogle().then(res => {
    if(users.filter(user => user.email === res.email).length === 0){ 
      setUsers([...users,res])
      setUser(res)
      route.push("/");
      return;
    }
    alert("Usuario ya existe")
  })
  console.log(users)
  };
  return (
    <>
      <div className="container">
        <form onSubmit={e => e.preventDefault()} action="create a user" method="POST">
          <h1>create un usuario en MacCentroTecnologico.com!!</h1>
          <InputGerick 
          onChange={handleCreatingUser}
          type="text"
          name="name"
          placeholder="Nombre :"
          />
          <InputGerick 
          onChange={handleCreatingUser}
          type="email"
          name="email"
          placeholder="correo electronico"
          />
          <InputGerick 
          onChange={handleCreatingUser}
          type="password"
          name="password"
          placeholder="contraseña"
          />
          <InputGerick 
          onChange={handleCreatingUser}
          type="password"
          name="confirmpassword"
          placeholder="verica tu contraseña"
          />
          <InputGerick 
          onChange={handleCreatingUser}
          type="tel"
          name="phone"
          placeholder="ingresa tu numero"
          />
          <input
            className="input-submit"
            type="button"
            value="Crear"
            onClick={handleSubmit}
          />
          <div>
            <LoginWhite
              onClick={hadleClickFacebook}
              typeBotton="facebook"
            ></LoginWhite>
            <LoginWhite
              typeBotton="google"
              onClick={hadleClickGoogle}
            ></LoginWhite>
            {
              creatingUser === null && <h1>tu madre</h1>
            }
          </div>
          <input type="button" value="users" onClick={ () => console.log(users) }/>
        </form>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 93vh;
            background-color: Ivory;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          form {
            width: 80%;
            height: 80%;
            border: 1px solid #ecf0f1;
            border-radius: 5px;
            padding: 0.5rem;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }
          
          .input-submit {
            width: 15%;
            height: 5vh;
            font-size: 1.5rem;
            font-family: future-thin;
            border: none;
          }
        `}
      </style>
    </>
  );
};

export default Index;
