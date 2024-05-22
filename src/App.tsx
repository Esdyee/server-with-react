import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
    const [isError, setIsError] = useState(false); // 에러 State

    return (
        <div>
            <div className="my-4">
              <Label htmlFor="email">이메일</Label>
              <DefaultTextField
                  id="email"
                  isError={isError}
                  iconPath="/icons/email.svg"
                  iconAlt="email"
                  placeholder="이메일"
                  onIconClick={() => console.log('clicked')}
                  onChange={(e) => console.log(e.target.value)}
                  value=""
              />
            </div>
            <div className="my-4">
              <Label htmlFor="password">비밀번호</Label>
              <DefaultTextField
                  id="password"
                  isError={isError}
                  iconPath="/icons/lock.svg"
                  iconAlt="lock"
                  placeholder="비밀번호"
                  onIconClick={() => console.log('clicked')}
                  onChange={(e) => console.log(e.target.value)}
                  value=""
              />
            </div>
            <button onClick={() => setIsError(!isError)}>에러 토글</button>

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
