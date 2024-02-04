import React from "react";
import { shallow } from "enzyme";
import SocialLink from "./SocialLink";

describe("SocialLink", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SocialLink />);
    expect(wrapper).toMatchSnapshot();
  });
});
