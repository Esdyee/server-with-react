import ReactDOM from "react-dom/client";
import "./App.css";
import TagList from "./components/TagList";
import { Outlet } from "react-router-dom";

function App() {

    return (
        <div>
            {/* <TagList
                tags={['태그1', '태그2', '태그3']}
                onTagClick={(tag) => console.log(tag)}
            /> */}
            <Outlet />
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
