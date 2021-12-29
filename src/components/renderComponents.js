import { createElement } from "react";
import BoxComponent from "./BoxComponent";
import H1Component from "./H1Component";
import H2Component from "./H2Component";
import ListComponent from "./ListComponent";
import ParagraphComponent from "./ParagraphComponent";
import ButtonComponent from "./ButtonComponent";
import LinkComponent from "./LinkComponent";
import ModalComponent from "./ModalComponent";

const keysToComponentMap = {
  BoxComponent: BoxComponent,
  H1Component: H1Component,
  H2Component: H2Component,
  ListComponent: ListComponent,
  ParagraphComponent: ParagraphComponent,
  ButtonComponent: ButtonComponent,
  LinkComponent: LinkComponent,
  ModalComponent: ModalComponent,
};

export const renderComponent = (config) => {
  const childrenArray = config.Children
    ? Object.keys(config.Children).map((x) => config.Children[x])
    : [];

  if (typeof keysToComponentMap[config.Content.type] !== "undefined") {
    return createElement(
      keysToComponentMap[config.Content.type],
      {
        key: config.Content.type,
        props: config.Content.props,
      },

      childrenArray &&
        childrenArray.length > 0 &&
        childrenArray.map((child) => {
          return renderComponent(child);
        })
    );
  }
};
