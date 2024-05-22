import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
    const [items, setItems] = useState<string[]>([]);

    const addItems = () => {
        const newItems = [];
        for (let i = 0; i < 20000; i++) {
            newItems.push(`Item ${i}`);
        }
        setItems(newItems);
    };

    const updateItems = () => {
        setItems((prevItems) => prevItems.map((item) => `Updated ${item}`));
    };

    return (
        <div>
            <div className="alert-box">test</div>
            <button onClick={addItems}>Add Items</button>
            <button onClick={updateItems}>Update Items</button>
            <div id="container">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Failed to find the root element");
}

export default App;
