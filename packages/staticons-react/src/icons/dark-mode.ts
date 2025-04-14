
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.126 4.283a5.99 5.99 0 1 0 7.725 7.725 5.837 5.837 0 0 1-7.725-7.725ZM9.4 3.35c.197.312.238.743.03 1.119a4.587 4.587 0 0 0 6.235 6.234 1.103 1.103 0 0 1 1.119.03.985.985 0 0 1 .434 1.112 7.24 7.24 0 1 1-8.93-8.93.985.985 0 0 1 1.112.435Z","clip-rule":"evenodd"}]]

/**
 * @component @name DarkMode
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xMjYgNC4yODNhNS45OSA1Ljk5IDAgMSAwIDcuNzI1IDcuNzI1IDUuODM3IDUuODM3IDAgMCAxLTcuNzI1LTcuNzI1Wk05LjQgMy4zNWMuMTk3LjMxMi4yMzguNzQzLjAzIDEuMTE5YTQuNTg3IDQuNTg3IDAgMCAwIDYuMjM1IDYuMjM0IDEuMTAzIDEuMTAzIDAgMCAxIDEuMTE5LjAzLjk4NS45ODUgMCAwIDEgLjQzNCAxLjExMiA3LjI0IDcuMjQgMCAxIDEtOC45My04LjkzLjk4NS45ODUgMCAwIDEgMS4xMTIuNDM1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DarkMode = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-dark-mode',
        'staticon-DarkMode',
        className
      ),
      ...props,
    })
);
DarkMode.displayName = 'DarkMode'

export default DarkMode;
