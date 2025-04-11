
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M15.454 3.887a2.75 2.75 0 0 0-1.952-.814H6.82a2.75 2.75 0 0 0-2.75 2.75v11.128a2.75 2.75 0 0 0 2.75 2.75h6.33c.766.535 1.697.85 2.703.85a4.698 4.698 0 0 0 2.752-.886l1.685 1.685a.75.75 0 0 0 1.06-1.061l-1.68-1.681c.567-.78.902-1.739.902-2.777 0-1.64-.836-3.084-2.105-3.93V8.055a2.75 2.75 0 0 0-.797-1.936l-2.215-2.232ZM11.133 15.83a4.7 4.7 0 0 0 .637 2.37H6.82c-.69 0-1.25-.56-1.25-1.25V5.823c0-.69.56-1.25 1.25-1.25h6.683c.333 0 .653.133.887.37l2.215 2.232c.232.234.362.55.362.88v3.189a4.72 4.72 0 0 0-5.834 4.587Zm4.72-3.22a3.22 3.22 0 1 0 0 6.44 3.22 3.22 0 0 0 0-6.44Z","clip-rule":"evenodd"}]]

/**
 * @component @name Inspect
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNDU0IDMuODg3YTIuNzUgMi43NSAwIDAgMC0xLjk1Mi0uODE0SDYuODJhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NXYxMS4xMjhhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWg2LjMzYy43NjYuNTM1IDEuNjk3Ljg1IDIuNzAzLjg1YTQuNjk4IDQuNjk4IDAgMCAwIDIuNzUyLS44ODZsMS42ODUgMS42ODVhLjc1Ljc1IDAgMCAwIDEuMDYtMS4wNjFsLTEuNjgtMS42ODFjLjU2Ny0uNzguOTAyLTEuNzM5LjkwMi0yLjc3NyAwLTEuNjQtLjgzNi0zLjA4NC0yLjEwNS0zLjkzVjguMDU1YTIuNzUgMi43NSAwIDAgMC0uNzk3LTEuOTM2bC0yLjIxNS0yLjIzMlpNMTEuMTMzIDE1LjgzYTQuNyA0LjcgMCAwIDAgLjYzNyAyLjM3SDYuODJjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNVY1LjgyM2MwLS42OS41Ni0xLjI1IDEuMjUtMS4yNWg2LjY4M2MuMzMzIDAgLjY1My4xMzMuODg3LjM3bDIuMjE1IDIuMjMyYy4yMzIuMjM0LjM2Mi41NS4zNjIuODh2My4xODlhNC43MiA0LjcyIDAgMCAwLTUuODM0IDQuNTg3Wm00LjcyLTMuMjJhMy4yMiAzLjIyIDAgMSAwIDAgNi40NCAzLjIyIDMuMjIgMCAwIDAgMC02LjQ0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Inspect = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-inspect',
        'staticon-Inspect',
        className
      ),
      ...props,
    })
);
Inspect.displayName = 'Inspect'

export default Inspect;
