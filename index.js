import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import'./index.css';
function MyForm() {
  const [number, setNumber] = useState("");
  const [images,setImages]=useState([]);
  const [textarea, setTextarea] = useState("Enter Content");
  function handleChange(event){
    setTextarea(event.target.value)
  }
  function onImageChange(e){
    setImages([...e.target.files]);
  }
  function OnNumberChange(e){
    setNumber(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(images);
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="rollno">
      <label>ROLL NUMBER:
        <input
          type="Number" 
          onChange={OnNumberChange}
        />
      </label>
      </div>
      <div className="imagee">
      <label> Upload your Image:
        <input
        type={"file"}
        multiple accept='image/*'
        onChange={onImageChange}
        />
      </label>
      </div>
      <div className='textarea'>
      <label>
      <textarea 
      value={textarea} 
      onChange={handleChange} 
      cols={60} rows={10}
      />
      </label>
      </div>
      <div>
      <input type="submit" />
      </div>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);