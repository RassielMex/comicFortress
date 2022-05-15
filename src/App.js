import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import RouteComponent from "./routes/RouteComponent";
import CartContext from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContext>
        <RouteComponent />
      </CartContext>
    </div>
  );
}

export default App;
