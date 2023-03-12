import logo from './logo.svg';
import './App.css';

function App() {
  function sendToServer(e) {
    fetch("/sendToServer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data:"funny"
      }),
    });
  }

  function sendImg(fileImg) {
    fetch("/sendImg", {
      method: "POST",
      headers: {
        "Content-Type": "form/multipart"
      },
      body:""
    })
  }

  function test(e) {
    e.preventDefault()
    console.log(e);
  }

  return (
    <div className="App">
        <button onClick={sendToServer}>click me</button>
        <form onSubmit={(e)=>test(e)} encType='multipart/form-data'>
          <input type="file" name="file" id="file"></input>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
