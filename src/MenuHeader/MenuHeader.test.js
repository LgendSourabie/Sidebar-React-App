import React from "react";
import { shallow } from "enzyme";
import MenuHeader from "./MenuHeader";

describe("MenuHeader", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MenuHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
