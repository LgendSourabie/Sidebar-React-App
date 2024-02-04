import React from "react";
import { shallow } from "enzyme";
import SingleLink from "./SingleLink";

describe("SingleLink", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SingleLink />);
    expect(wrapper).toMatchSnapshot();
  });
});
