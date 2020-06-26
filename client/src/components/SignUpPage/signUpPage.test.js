import React from "react";
import { shallow } from "enzyme";
import SignUpPage from "./signUpPage";

describe("SignUpPage", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<SignUpPage />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });

  it("should render a <h1 />", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
