import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import CreateProduct from "./CreateProduct";
import store from "../services/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Create Product", () => {
  it("render CreateProduct component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );
    // screen.debug();
    expect(screen.getByText(/Create Product/i)).toBeInTheDocument();
  });

  it("Input Product Name", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByRole("textbox", { name: "ProductName" }), { target: { value: "ASUS TUF" } });
    expect(screen.getByRole("textbox", { name: "ProductName" }).value).toBe("ASUS TUF");
  });

  it("Input Select Category", () => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(getByTestId("select-category"), { target: { value: "Handphone" } });
    let options = getAllByTestId("select-option");

    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });

  it("Upload Product Image", async () => {
    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    const input = getByTestId("upload-image");
    await userEvent.upload(input, fakeFile);

    // console.log(input.files);
    expect(input.files[0]).toStrictEqual(fakeFile);
    expect(input.files.item(0)).toStrictEqual(fakeFile);
    expect(input.files).toHaveLength(1);
  });

  it("Test Radio Input Freshness", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    const firstRadio = getByTestId("test-freshness1");
    const secondRadio = getByTestId("test-freshness2");

    fireEvent.click(firstRadio);
    expect(firstRadio).toBeChecked();
    expect(secondRadio).not.toBeChecked();
  });

  it("Test Input Description Product", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByRole("textbox", { name: "descriptionProd" }), { target: { value: "Product in good condition" } });
    expect(screen.getByRole("textbox", { name: "descriptionProd" }).value).toBe("Product in good condition");
  });

  it("Input Product Price", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByRole("textbox", { name: "ProductPrice" }), { target: { value: "20000" } });
    expect(screen.getByRole("textbox", { name: "ProductPrice" }).value).toBe("20000");
  });
});
