import React from "react";
import { shallow, render } from "enzyme";
import HomePage from "./homePage";
import AddTweet from "./../AddTweet/addTweet";
import AllTweets from "./../AllTweets/allTweets";

describe("HomePage", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<HomePage />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });


});
