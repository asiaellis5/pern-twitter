import React from "react";
import { shallow, render } from "enzyme";
import Navigation from "./navigation";

describe("HomePage", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Navigation />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <nav />", () => {
    expect(wrapper.find("nav").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });


});
