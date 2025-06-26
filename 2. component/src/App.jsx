import "./App.css";
import Login from "./Login";

function App() {
  return (
    <>
      <div>
        <p>
          Export ve export default arasındaki fark, export ile birden fazla
          öğeyi dışa aktarabilirken, export default ile yalnızca tek bir öğe
          dışa aktarılabilmesidir. Export default, genellikle bir modülün ana
          işlevselliğini temsil eden öğeyi belirtmek için kullanılır. Bu, modülü
          içe aktaranların daha basit ve anlaşılır bir sözdizimi kullanmasına
          olanak tanır.
        </p>

        <Login />
      </div>
    </>
  );
}

export default App;
