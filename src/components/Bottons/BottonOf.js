const LoginWhite = ({typeBotton,onClick}) => {
    return (
        <>
        <button onClick={onClick} className={typeBotton}>
            {typeBotton=== 'facebook' ? <i id="facebook" className="icon fab fa-facebook"></i> : <i className="fab fa-google"></i>}
            {typeBotton}
        </button>
        <style jsx>{`
            button.facebook{
                background-color: #1637F2;
                border: none;
                font-size:1.2rem;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                color: white;
                
            }
            .google{
                background-color: red;
                border: none;
                font-family: 'Roboto', sans-serif;
                font-size:1.2rem;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                color: white;

            }
            .facebook:focus{
                outline: none;
            }
            `}</style>
        </>
    )
}

export default LoginWhite
