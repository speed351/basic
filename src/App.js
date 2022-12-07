import logo from './logo.svg';
import './App.css';

function App() {
  let myName ="park";

  return (
    <div>
      <h1>index page</h1>
      {/* myName이라는 변수 안에 있는 내용 사용하기 */}
      <p>my name is <strong>{myName}</strong></p>
      <button className='btn btn-primary'>click</button>
    </div>

  );
}

export default App;
