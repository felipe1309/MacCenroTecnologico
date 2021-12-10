const footerReifh = () => {
  return (
    <>
      <aside>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          ullam, corrupti nam corporis quo eos vero minima quasi possimus sit
          iure nulla nisi, ratione quisquam, ipsum earum nemo. Quidem ducimus,
          quia molestiae autem vitae perferendis est ea temporibus aliquam
          magnam? Suscipit at, ex sapiente impedit similique quos placeat sed
          cum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          similique nesciunt aut omnis porro amet quidem beatae nobis voluptas,
          doloribus fugit! Ratione quos quaerat, odio fuga delectus, neque
          nostrum dolorum voluptate cupiditate expedita nihil reiciendis
          accusamus magni maiores. Maxime tenetur qui blanditiis, praesentium
          dignissimos molestias rerum similique nihil? Saepe eaque illum quod
          deserunt aspernatur facere iusto? Harum illum sapiente quos.
        </p>
        <footer>
          puedes seguirnos en nuestras redes{" "}
          <a
            href="https://www.facebook.com/Maccentrodetecnologia"
            target="_blank"
          >
            facebook
          </a>{" "}
          o en{" "}
          <a
            href="https://www.instagram.com/mac_centro_tecnologico"
            target="_blank"
          >
            instagran
          </a>
        </footer>
      </aside>
      <style jsx>{`
        aside {
          box-sizing: border-box;
          background-color: #1a1a1a;
          width: 50%;
          height: 100%;
          opacity: 0.8;
          color: #fff;
          padding: 20px;
        }
        h1 {
          font-size: 2em;
          color: white;
        }
        p {
          font-size: 1.2em;
          color: white;
        }
        footer {
          position: absolute;
          bottom: 0;
          font-size: 1.2em;
          color: white;
          margin-bottom:10px;
        }
        a{
            color:white;
            text-decoration:none;
        }
      `}</style>
    </>
  );
};

export default footerReifh;
