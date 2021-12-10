import FooterReifh from "../../components/Start/footerReifh";
import FormStart from "../../components/Start/FormStart";

const index = () => {
  return (
    <>
      <main>
        <img src="/IMG_0093.jpg" alt="fon Mac" />
        <div>
          <FormStart></FormStart>
        </div>
        <FooterReifh></FooterReifh>
      </main>
      <style jsx>{`
        div{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 50vw;
          height: 90vh;
          
        }
        main {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 93vh;
          width: 100vw;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default index;
