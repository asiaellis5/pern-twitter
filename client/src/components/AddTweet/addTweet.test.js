import React from "react";
import { shallow, mount } from "enzyme";
import AddTweet from "./addTweet";

describe("AddTweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AddTweet />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("adds a tweet via the online form", () => {
    const eventObj = { target: { value: "test tweet" } };
    expect(wrapper.find("input.form").props().value).toBe("");
    wrapper.find("input.form").simulate("change", eventObj);
    expect(wrapper.find("input.form").props().value).toBe("test tweet");
  });
});

it("calls onSubmit prop function when form is submitted", () => {
  const onSubmitForm = jest.fn();
  const wrapper = mount(<form onSubmit={onSubmitForm} />);
  const form = wrapper.find("form");
  form.simulate("submit");
  expect(onSubmitForm).toHaveBeenCalledTimes(1);
});
