import InputGerick from "../Bottons/InputGerick";
import BottonOf from "../Bottons/BottonOf";
const FormStart = () => {
  const onSubmit = (values) => {
    values.preventDefault();
  };
  const onChange = () => {
    return;
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>inicia sesión en MacCentroTecnologico.com </h1>
        <InputGerick
          name="email"
          placeholder="ingresa tu correo"
          type="email"
          onChange={onChange()}
        ></InputGerick>
        <InputGerick
          name="password"
          placeholder="ingresa tu contraseña"
          type="password"
          onChange={onChange()}
        ></InputGerick>
        <div>
          <BottonOf typeBotton="facebook" />
          <input id="iniciar" type="submit" value="iniciar" />
          <BottonOf typeBotton="google" />
        </div>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          width: 35vw;
          height: 70vh;
          background-color: #f2f2f2;
          border-radius: 10px;
        }
        #iniciar:focus {
          outline: none;
        }
        #iniciar {
          background-color: #4267b2;
          color: white;
          border: none;
          font-size: 1.2rem;
          padding: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default FormStart;
