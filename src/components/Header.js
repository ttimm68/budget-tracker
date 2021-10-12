import Button from "./Button.js";

const Header = ({ title, onAdd }) => {
  return (
    <header className='App-header'>
      <h1>{title}</h1>
      <Button
        bgColor = "lightgreen"
        text = "Add Money"
        onClick = {onAdd}
      />
      <Button
        bgColor = "indianred"
        text = "Remove Money"
        onClick = {onAdd}
      />
    </header>
  );
};

export default Header;