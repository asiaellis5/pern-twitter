import React from "react";
import { shallow } from "enzyme";
import AddTweet from "./addTweet";

describe("AddTweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AddTweet />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <h1 />", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
