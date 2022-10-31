import './App.css';
import Button from './components/buton/Button';
import Input from './components/input/Input';
import Form from "./components/form/Form";
import { useState } from "react";

function App() {

const [user, setUser] = useState({name:"", password:""})

const handleChange = (e) => {
  if(e.target.type === "text") {
    setUser({...user, name:e.target.value}) 
  } else if(e.target.type === "password"){
    setUser({...user, name:e.target.value}) 
  }
}

const handleClick = () => {
  if(user.name === "") {
    alert("Kullanıcı Adını Doldurunuz..")
  }else if(user.password === "") {
    alert("Password kısmını doldurunuz...")
  }else {
    alert("Kullanıcı Adı:" + user.name + " " + "Parolanız:" + user.password);
  }
}

  return (
    <div className="App">
      <h2 style={{color:"white"}}>Giriş Formu</h2>
      <Form>
        <Input 
        type={"text"} 
        value={user.name}
        placeholder={"Kullanıcı Adı"} 
        onChange={handleChange}/>
        <Input 
        type={"password"} 
        value={user.password}
        placeholder={"Kullanıcı Şifresi"}
        onChange={handleChange}/>        
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

export default App;
