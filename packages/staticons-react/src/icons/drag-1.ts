
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.125 4.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm0 5.26a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm-1.75 3.49a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm7-3.49a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0ZM12.625 3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm1.75 12.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Drag1
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4xMjUgNC43NWExLjc1IDEuNzUgMCAxIDAtMy41IDAgMS43NSAxLjc1IDAgMCAwIDMuNSAwWm0wIDUuMjZhMS43NSAxLjc1IDAgMSAwLTMuNSAwIDEuNzUgMS43NSAwIDAgMCAzLjUgMFptLTEuNzUgMy40OWExLjc1IDEuNzUgMCAxIDEgMCAzLjUgMS43NSAxLjc1IDAgMCAxIDAtMy41Wm03LTMuNDlhMS43NSAxLjc1IDAgMSAwLTMuNSAwIDEuNzUgMS43NSAwIDAgMCAzLjUgMFpNMTIuNjI1IDNhMS43NSAxLjc1IDAgMSAxIDAgMy41IDEuNzUgMS43NSAwIDAgMSAwLTMuNVptMS43NSAxMi4yNWExLjc1IDEuNzUgMCAxIDAtMy41IDAgMS43NSAxLjc1IDAgMCAwIDMuNSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Drag1 = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-drag1',
        'staticon-Drag1',
        className
      ),
      ...props,
    })
);
Drag1.displayName = 'Drag1'

export default Drag1;
