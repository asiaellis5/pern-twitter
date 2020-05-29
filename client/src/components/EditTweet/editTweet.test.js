import React from "react";
import { shallow } from "enzyme";
import EditTweet from "./editTweet";

describe("EditTweet", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <EditTweet tweet={{ tweet_id: 1, description: "Tweet" }} />
      ))
  );

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(4);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(7);
  });
});
