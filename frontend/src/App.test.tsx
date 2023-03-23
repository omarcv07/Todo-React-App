import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TaskContextProvider } from "./contexts/task/TaskContext";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
