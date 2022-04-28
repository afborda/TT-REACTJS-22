import "./style.css";

const Button = ({ children, setClick }) => {
  return (
    <button onClick={setClick} className="button-red">
      {children}
    </button>
  );
};

export default Button;
