
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M16.015 6.257a4.014 4.014 0 0 0-4.014-4.009 4.014 4.014 0 0 0-4.015 4.01 4.014 4.014 0 0 0 3.282 3.942v2.11H6.956a2.75 2.75 0 0 0-2.75 2.751v1.406a2.695 2.695 0 0 0 .735 5.285 2.693 2.693 0 0 0 .766-5.276v-1.415c0-.69.559-1.25 1.25-1.25l4.311-.002v2.658A2.695 2.695 0 0 0 12 21.752a2.693 2.693 0 0 0 .768-5.275V13.81h4.312c.69 0 1.25.56 1.25 1.25v1.407a2.695 2.695 0 0 0 .73 5.286 2.693 2.693 0 0 0 .77-5.274v-1.42a2.75 2.75 0 0 0-2.75-2.75l-4.312.001v-2.116a4.014 4.014 0 0 0 3.247-3.936Zm-4.014-2.509a2.514 2.514 0 0 1 2.514 2.51 2.514 2.514 0 0 1-2.514 2.509 2.514 2.514 0 0 1-2.515-2.51 2.514 2.514 0 0 1 2.515-2.509ZM12 17.866a1.193 1.193 0 1 1-.002 2.385A1.193 1.193 0 0 1 12 17.866Zm-5.867 1.193a1.193 1.193 0 1 0-2.386 0 1.193 1.193 0 0 0 2.386 0Zm12.927-1.193a1.193 1.193 0 1 1-.002 2.386 1.193 1.193 0 0 1 .002-2.386Z","clip-rule":"evenodd"}]]

/**
 * @component @name Hierarchy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDE1IDYuMjU3YTQuMDE0IDQuMDE0IDAgMCAwLTQuMDE0LTQuMDA5IDQuMDE0IDQuMDE0IDAgMCAwLTQuMDE1IDQuMDEgNC4wMTQgNC4wMTQgMCAwIDAgMy4yODIgMy45NDJ2Mi4xMUg2Ljk1NmEyLjc1IDIuNzUgMCAwIDAtMi43NSAyLjc1MXYxLjQwNmEyLjY5NSAyLjY5NSAwIDAgMCAuNzM1IDUuMjg1IDIuNjkzIDIuNjkzIDAgMCAwIC43NjYtNS4yNzZ2LTEuNDE1YzAtLjY5LjU1OS0xLjI1IDEuMjUtMS4yNWw0LjMxMS0uMDAydjIuNjU4QTIuNjk1IDIuNjk1IDAgMCAwIDEyIDIxLjc1MmEyLjY5MyAyLjY5MyAwIDAgMCAuNzY4LTUuMjc1VjEzLjgxaDQuMzEyYy42OSAwIDEuMjUuNTYgMS4yNSAxLjI1djEuNDA3YTIuNjk1IDIuNjk1IDAgMCAwIC43MyA1LjI4NiAyLjY5MyAyLjY5MyAwIDAgMCAuNzctNS4yNzR2LTEuNDJhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NWwtNC4zMTIuMDAxdi0yLjExNmE0LjAxNCA0LjAxNCAwIDAgMCAzLjI0Ny0zLjkzNlptLTQuMDE0LTIuNTA5YTIuNTE0IDIuNTE0IDAgMCAxIDIuNTE0IDIuNTEgMi41MTQgMi41MTQgMCAwIDEtMi41MTQgMi41MDkgMi41MTQgMi41MTQgMCAwIDEtMi41MTUtMi41MSAyLjUxNCAyLjUxNCAwIDAgMSAyLjUxNS0yLjUwOVpNMTIgMTcuODY2YTEuMTkzIDEuMTkzIDAgMSAxLS4wMDIgMi4zODVBMS4xOTMgMS4xOTMgMCAwIDEgMTIgMTcuODY2Wm0tNS44NjcgMS4xOTNhMS4xOTMgMS4xOTMgMCAxIDAtMi4zODYgMCAxLjE5MyAxLjE5MyAwIDAgMCAyLjM4NiAwWm0xMi45MjctMS4xOTNhMS4xOTMgMS4xOTMgMCAxIDEtLjAwMiAyLjM4NiAxLjE5MyAxLjE5MyAwIDAgMSAuMDAyLTIuMzg2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Hierarchy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-hierarchy',
        'staticon-Hierarchy',
        className
      ),
      ...props,
    })
);
Hierarchy.displayName = 'Hierarchy'

export default Hierarchy;
