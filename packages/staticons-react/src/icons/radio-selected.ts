
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.75 10a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 3.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name RadioSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNzUgMTBhNi43NSA2Ljc1IDAgMSAxLTEzLjUgMCA2Ljc1IDYuNzUgMCAwIDEgMTMuNSAwWk0xOCAxMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFptLTggMy43NWEzLjc1IDMuNzUgMCAxIDAgMC03LjUgMy43NSAzLjc1IDAgMCAwIDAgNy41WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const RadioSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-radio-selected',
        'staticon-RadioSelected',
        className
      ),
      ...props,
    })
);
RadioSelected.displayName = 'RadioSelected'

export default RadioSelected;
