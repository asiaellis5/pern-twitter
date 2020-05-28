import React from "react";
import { shallow } from "enzyme";
import AddTweet from "./addTweet";

describe("AddTweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AddTweet />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
