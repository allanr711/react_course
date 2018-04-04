const appRoot = document.getElementById('app');
let isClicked = true;

const toggleContent = () => {
  if (isClicked) {
    isClicked = false;
    render();
  }
  else {
    isClicked = true;
    render();
  }
};

const render = () => {
  const template = (
    <div>
      <h1>Visiblitiy Toggle</h1>
      <button onClick={toggleContent}>Show Details</button>
      <p className={isClicked ? 'toggleShow' :  'toggleHide'}>The devil is in the details</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();