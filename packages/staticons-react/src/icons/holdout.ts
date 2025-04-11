
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.406 5.84a1.588 1.588 0 1 0 3.175 0 1.588 1.588 0 0 0-3.175 0Zm.838 2.996a3.089 3.089 0 0 1 .75-6.084 3.088 3.088 0 0 1 .75 6.084v2.163h3.33a2.75 2.75 0 0 1 2.75 2.75v.5a.75.75 0 1 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25H7.96c-.69 0-1.25.56-1.25 1.25l.002 1.415a3.089 3.089 0 0 1-.751 6.083 3.088 3.088 0 0 1-.75-6.084v-1.412a2.75 2.75 0 0 1 2.75-2.752h3.283V8.836Zm-6.87 9.323a1.588 1.588 0 1 0 3.174 0 1.588 1.588 0 0 0-3.175 0Zm16.533-1.234a.75.75 0 1 0-1.061-1.06l-1.521 1.52-1.521-1.52a.75.75 0 0 0-1.06 1.06l1.52 1.521-1.52 1.521a.75.75 0 0 0 1.06 1.06l1.52-1.52 1.522 1.52a.75.75 0 1 0 1.06-1.06l-1.52-1.52 1.52-1.522Z","clip-rule":"evenodd"}]]

/**
 * @component @name Holdout
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNDA2IDUuODRhMS41ODggMS41ODggMCAxIDAgMy4xNzUgMCAxLjU4OCAxLjU4OCAwIDAgMC0zLjE3NSAwWm0uODM4IDIuOTk2YTMuMDg5IDMuMDg5IDAgMCAxIC43NS02LjA4NCAzLjA4OCAzLjA4OCAwIDAgMSAuNzUgNi4wODR2Mi4xNjNoMy4zM2EyLjc1IDIuNzUgMCAwIDEgMi43NSAyLjc1di41YS43NS43NSAwIDEgMS0xLjUgMHYtLjVjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1SDcuOTZjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1bC4wMDIgMS40MTVhMy4wODkgMy4wODkgMCAwIDEtLjc1MSA2LjA4MyAzLjA4OCAzLjA4OCAwIDAgMS0uNzUtNi4wODR2LTEuNDEyYTIuNzUgMi43NSAwIDAgMSAyLjc1LTIuNzUyaDMuMjgzVjguODM2Wm0tNi44NyA5LjMyM2ExLjU4OCAxLjU4OCAwIDEgMCAzLjE3NCAwIDEuNTg4IDEuNTg4IDAgMCAwLTMuMTc1IDBabTE2LjUzMy0xLjIzNGEuNzUuNzUgMCAxIDAtMS4wNjEtMS4wNmwtMS41MjEgMS41Mi0xLjUyMS0xLjUyYS43NS43NSAwIDAgMC0xLjA2IDEuMDZsMS41MiAxLjUyMS0xLjUyIDEuNTIxYS43NS43NSAwIDAgMCAxLjA2IDEuMDZsMS41Mi0xLjUyIDEuNTIyIDEuNTJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMS41Mi0xLjUyIDEuNTItMS41MjJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Holdout = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-holdout',
        'staticon-Holdout',
        className
      ),
      ...props,
    })
);
Holdout.displayName = 'Holdout'

export default Holdout;
