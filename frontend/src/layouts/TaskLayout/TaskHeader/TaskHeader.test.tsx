import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TaskHeader } from "./TaskHeader";
import { BrowserRouter as Router } from "react-router-dom";

test("renders 'Tasks' title", () => {
  render(
    <Router>
      <TaskHeader />
    </Router>
  );
  expect(screen.getByText(/Tasks/i)).toBeInTheDocument();
});

test("clicking the 'Add' button redirects to '/create' route", () => {
  const { getByRole } = render(
    <Router>
      <TaskHeader />
    </Router>
  );
  fireEvent.click(getByRole("button"));
  expect(window.location.pathname).toEqual("/create");
});
