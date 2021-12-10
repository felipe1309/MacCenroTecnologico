const InputGerick = ({type,name,placeholder,onChange}) => {
    return (
        <>
          <input type={type} name={name} placeholder={placeholder} onChange={onChange}/>  
          <style jsx>{`
          input {
            width: 80%;
            height: 5vh;
            padding: 0.5rem;
            font-size: 1.5rem;
            border: none;
            border-bottom: 1px solid #ecf0f1;
            border-radius: 3px;
            background: none;
            border-bottom: 1px solid black;
          }
          input:focus {
            outline: none;
          }
              `}</style>
        </>
    )
}

export default InputGerick
