
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.994 4.376c-2.566 0-4.551 1.08-5.888 2.285a8.536 8.536 0 0 0-1.53 1.807 5.103 5.103 0 0 0-.411.801c-.092.234-.165.491-.165.73 0 .24.073.498.166.732a5.1 5.1 0 0 0 .412.802 8.553 8.553 0 0 0 1.534 1.806c1.34 1.205 3.328 2.284 5.893 2.284 2.566 0 4.552-1.08 5.888-2.285a8.531 8.531 0 0 0 1.53-1.807c.176-.282.314-.554.411-.8a2.06 2.06 0 0 0 .165-.731c0-.24-.073-.498-.165-.732a5.104 5.104 0 0 0-.413-.801 8.552 8.552 0 0 0-1.534-1.807c-1.34-1.204-3.328-2.284-5.893-2.284ZM3.25 10c0-.003.001-.026.013-.075.012-.05.033-.117.065-.198.064-.164.167-.369.31-.601a7.29 7.29 0 0 1 1.305-1.537A7.791 7.791 0 0 1 6.79 6.348a3.919 3.919 0 1 0 6.425.006A7.82 7.82 0 0 1 15.05 7.59a7.308 7.308 0 0 1 1.308 1.536 3.9 3.9 0 0 1 .312.6c.032.083.053.149.065.2a.378.378 0 0 1 .013.073.382.382 0 0 1-.013.075c-.012.05-.033.117-.065.199a3.868 3.868 0 0 1-.31.6 7.293 7.293 0 0 1-1.305 1.537c-1.158 1.044-2.857 1.963-5.05 1.963-2.194 0-3.896-.919-5.058-1.963a7.31 7.31 0 0 1-1.308-1.537 3.863 3.863 0 0 1-.312-.6 1.53 1.53 0 0 1-.065-.2.365.365 0 0 1-.013-.073Zm4.08-1.404a2.669 2.669 0 1 1 5.338 0 2.669 2.669 0 0 1-5.338 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Eye
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS45OTQgNC4zNzZjLTIuNTY2IDAtNC41NTEgMS4wOC01Ljg4OCAyLjI4NWE4LjUzNiA4LjUzNiAwIDAgMC0xLjUzIDEuODA3IDUuMTAzIDUuMTAzIDAgMCAwLS40MTEuODAxYy0uMDkyLjIzNC0uMTY1LjQ5MS0uMTY1LjczIDAgLjI0LjA3My40OTguMTY2LjczMmE1LjEgNS4xIDAgMCAwIC40MTIuODAyIDguNTUzIDguNTUzIDAgMCAwIDEuNTM0IDEuODA2YzEuMzQgMS4yMDUgMy4zMjggMi4yODQgNS44OTMgMi4yODQgMi41NjYgMCA0LjU1Mi0xLjA4IDUuODg4LTIuMjg1YTguNTMxIDguNTMxIDAgMCAwIDEuNTMtMS44MDdjLjE3Ni0uMjgyLjMxNC0uNTU0LjQxMS0uOGEyLjA2IDIuMDYgMCAwIDAgLjE2NS0uNzMxYzAtLjI0LS4wNzMtLjQ5OC0uMTY1LS43MzJhNS4xMDQgNS4xMDQgMCAwIDAtLjQxMy0uODAxIDguNTUyIDguNTUyIDAgMCAwLTEuNTM0LTEuODA3Yy0xLjM0LTEuMjA0LTMuMzI4LTIuMjg0LTUuODkzLTIuMjg0Wk0zLjI1IDEwYzAtLjAwMy4wMDEtLjAyNi4wMTMtLjA3NS4wMTItLjA1LjAzMy0uMTE3LjA2NS0uMTk4LjA2NC0uMTY0LjE2Ny0uMzY5LjMxLS42MDFhNy4yOSA3LjI5IDAgMCAxIDEuMzA1LTEuNTM3QTcuNzkxIDcuNzkxIDAgMCAxIDYuNzkgNi4zNDhhMy45MTkgMy45MTkgMCAxIDAgNi40MjUuMDA2QTcuODIgNy44MiAwIDAgMSAxNS4wNSA3LjU5YTcuMzA4IDcuMzA4IDAgMCAxIDEuMzA4IDEuNTM2IDMuOSAzLjkgMCAwIDEgLjMxMi42Yy4wMzIuMDgzLjA1My4xNDkuMDY1LjJhLjM3OC4zNzggMCAwIDEgLjAxMy4wNzMuMzgyLjM4MiAwIDAgMS0uMDEzLjA3NWMtLjAxMi4wNS0uMDMzLjExNy0uMDY1LjE5OWEzLjg2OCAzLjg2OCAwIDAgMS0uMzEuNiA3LjI5MyA3LjI5MyAwIDAgMS0xLjMwNSAxLjUzN2MtMS4xNTggMS4wNDQtMi44NTcgMS45NjMtNS4wNSAxLjk2My0yLjE5NCAwLTMuODk2LS45MTktNS4wNTgtMS45NjNhNy4zMSA3LjMxIDAgMCAxLTEuMzA4LTEuNTM3IDMuODYzIDMuODYzIDAgMCAxLS4zMTItLjYgMS41MyAxLjUzIDAgMCAxLS4wNjUtLjIuMzY1LjM2NSAwIDAgMS0uMDEzLS4wNzNabTQuMDgtMS40MDRhMi42NjkgMi42NjkgMCAxIDEgNS4zMzggMCAyLjY2OSAyLjY2OSAwIDAgMS01LjMzOCAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Eye = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-eye',
        'staticon-Eye',
        className
      ),
      ...props,
    })
);
Eye.displayName = 'Eye'

export default Eye;
