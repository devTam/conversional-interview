import { createElement } from "react";
import BoxComponent from "./BoxComponent";
import H1Component from "./H1Component";
import H2Component from "./H2Component";
import ListComponent from "./ListComponent";
import ParagraphComponent from "./ParagraphComponent";
import ButtonComponent from "./ButtonComponent";
import LinkComponent from "./LinkComponent";


const keysToComponentMap = {
  BoxComponent: BoxComponent,
  H1Component: H1Component,
  H2Component: H2Component,
  ListComponent: ListComponent,
  ParagraphComponent: ParagraphComponent,
  ButtonComponent: ButtonComponent,
  LinkComponent: LinkComponent,
};

// const stylesMap = (styles) => {
//   let mappedStyles = {};
//   styles.forEach((style) => {
//     mappedStyles[style.name] = style.value;
//   });
//   return mappedStyles;
// };

export const renderComponent = (config, title) => {
  const childrenArray = config.Children
    ? Object.keys(config.Children).map((x) => {
        return {
          [x]: config.Children[x],
        };
      })
    : [];

  if (typeof keysToComponentMap[config.Content.type] !== "undefined") {
    return createElement(
      keysToComponentMap[config.Content.type],
      {
        // id: config.id,
        key: config.Content.type,
        props: config.Content.props,
        titleName: title
      },
      childrenArray &&
        childrenArray.length > 0 &&
        childrenArray.map((child) => {
          const childKeys = Object.keys(child).join("");
          const childValues = Object.values(child)[0];
          return renderComponent(childValues, childKeys);
        })
    );
  }
};
