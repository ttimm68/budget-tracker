import Button from './Button.js';

const Header = ({ title }) => {

  const onClick = () => {
    console.log('button was clicked!')
  }

  return (
    <header className='App-header'>
      <h1>{title}</h1>
      <Button
        bgColor = 'lightgreen'
        text = 'Add Money'
        onClick = {onClick}
      />
      <Button
        bgColor = 'indianred'
        text = "Remove Money"
        onClick = {onClick}
      />
    </header>
  );
};

export default Header;