import React from "react";
import { shallow } from "enzyme";
import PrimaryPage from "./primaryPage";

describe("PrimaryPage", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<PrimaryPage />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <h1 />", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });
});
