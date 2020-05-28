import React from "react";
import { shallow } from "enzyme";
import LogInPage from "./loginPage";

describe("App", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<LogInPage />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
