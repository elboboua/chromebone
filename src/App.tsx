import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    return (
        <div
            className="App"
            style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <header className="ChromeBone">
                <div className="width-div">
                    <h1>{width}</h1>
                </div>
            </header>
        </div>
    );
}

export default App;
