import React from "react";
import renderer from "react-test-renderer";
import Loader from "../components/loader";
import TemplateCard from "../components/templateCard";

it("renders correctly", () => {
  const templateCard = renderer.create(<TemplateCard name="A special template" describe="fake template description for test" />).toJSON();
  const loader = renderer.create(<Loader />).toJSON();
  expect(templateCard).toMatchSnapshot();
  expect(loader).toMatchSnapshot();
});