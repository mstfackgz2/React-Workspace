import "./App.css";

function App() {
  // Js kodlari buraya yazilir
  // let name = "Mustafa";
  // let karsilamaMesaji = `merhaba ${name};
  let names = ["ahmet", "mehmet", "ayse"];

  return (
    //hmtl kodlari buraya yazilir
    <div>
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
}

export default App;
