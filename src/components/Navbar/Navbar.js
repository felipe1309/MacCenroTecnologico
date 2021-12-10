/* eslint-disable react/react-in-jsx-scope */
import { useContexto } from "../../context/Contexto";
import Link from "next/link";
import Desplegable from "./Desplegable";
import { useRouter } from "next/router";
const Navbar = () => {
  const { user,setUser } = useContexto();
  const router = useRouter();
  function handlePushClick(e) {
    e.preventDefault();
    // eslint-disable-next-line semi
    router.push("/");
  }
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <header>
        <nav id="nav-global">
          <ul className="nav-children" style={{ width: "50%" }}>
            <img
              onClick={handlePushClick}
              className="logo-nav"
              src="/logo-mac.jpg"
              alt="logo mac"
            />
            <li className="nav-component">
              <Link href="/">
                <a>inicio</a>
              </Link>
            </li>
            <Desplegable type="PRODUCTOS">
              <ul className="desplegable">
                <li>
                  <Link href="/productos/camaras"><a>camaras</a></Link>
                </li>
                <li>
                  <Link href="/productos/videojuegos"><a>videojuegos</a></Link>
                </li>
                <li>
                  <Link href="/productos/computadoras-accesorios"><a>compuntadoras y accesorios</a></Link>
                </li>
              </ul>
            </Desplegable>
            <li className="nav-component">
              <Link href="/servicios">
                <a>servicios</a>
              </Link>
            </li>
          </ul>
          {user ? (
            <div>
              <img
                id="cart-shopping"
                src="/cartShopping.png"
                alt="cart shopping"
              />
              <h2>{user.name}</h2>{" "}
              <img onClick={() => setUser(null)} className="user" src={user.photoURL} alt={user.name} />{" "}
            </div>
          ) : (
            <ul className="nav-log" style={{ width: "20%" }}>
              <li className="nav-component">
                <Link href="/iniciar">
                  <a>iniciar secion</a>
                </Link>
              </li>
              <li className="nav-component">
                <Link href="/crear-cuenta">
                  <a>crear cuenta</a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            width: 18vw;
            height: 100%;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            color: black;
          }
          h2{
            font-size: 1.2rem;
          }
          img.user {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid black;
          }
          img#cart-shopping{
            width: 30px;
            height: 30px;
          }
          #nav-global {
            width: 100%;
            height: 7vh;
            background-color: aqua;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
          }
          .nav-children {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          ul.nav-log{
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .nav-component {
            font-size: 1.2rem;
            position: relative;
          }
          .nav-component:after {
            content: "";
            width: 0;
            height: 4px;
            background-color: black;
            position: absolute;
            bottom: 0;
            right:50%;
            transition: all 0.3s;
            will-change: width;
          }
          .nav-component:hover:after {
            width: 100%;
            right: 0;
          }
          .logo-nav {
            height: 7vh;
            border-radius: 50%;
            pointer-events: pointer;
          }
          a{
            font-size: 1.5rem;
            text-transform: uppercase;
          }


        `}
      </style>
    </>
  );
};

export default Navbar;
