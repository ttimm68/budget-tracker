const Button = ({ bgColor, text, onClick }) => {

  return (
    <button className = "button" onClick = {onClick} style={{ backgroundColor: bgColor }}>
      {text}
    </button>
  );
};

export default Button;