// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Login from "../components/Login/Login";

// describe("<Login />", () => {
//   test("should check if username input is present", async () => {
//     render(<Login />);

//     const inputEl = screen.getByPlaceholderText("Username");
//     expect(inputEl).toBeInTheDocument();
//     expect(inputEl).toHaveValue("username");
//   });

//   test("testing valid email to test email input field", () => {
//     render(<Login />);

//     const inputEl = screen.getByPlaceholderText("Username");
//     userEvent.type(inputEl, "test@mail.com");

//     expect(screen.getAllByPlaceholderText("Username")).toHaveValue(
//       "test@mail.com"
//     );
//     expect(screen.queryByTestId("error")).not.toBeInTheDocument();
//   });
// });
