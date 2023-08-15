import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";


describe("Notifications", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it("renders three list items", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("li")).toHaveLength(3);
    });

    it("renders the correct text", () => {
        const wrapper = shallow(<Notifications />);
        expect(
            wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
        ).toBeTruthy();
    });

    it('renders ul', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul')).toBeDefined();
    });
});
