
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10.015 16.75a6.751 6.751 0 0 0 6.678-5.871l-1.508 1.063a2.625 2.625 0 0 1-3.052-.02l-.63-.457a3.291 3.291 0 0 1-1.341-3.025l.014-.128a.875.875 0 0 0-1.108-.937l-.504.142a2.125 2.125 0 0 1-2.702-2.045v-.805A6.739 6.739 0 0 0 3.25 10c0 .749.122 1.469.347 2.142h1.49a.375.375 0 0 0 .313-.17l.579-.878a1.625 1.625 0 0 1 2.739.038l.745 1.203c.517.835.755 1.813.678 2.793l-.126 1.622Zm-1.245-.112.125-1.607a3.375 3.375 0 0 0-.495-2.038l-.745-1.203a.375.375 0 0 0-.632-.01l-.579.88c-.3.457-.81.732-1.357.732h-.924a6.757 6.757 0 0 0 4.607 3.246Zm5.695-5.718 2.252-1.588a6.75 6.75 0 0 0-9.605-5.435v1.575c0 .58.554 1 1.112.842l.505-.142a2.125 2.125 0 0 1 2.69 2.277l-.015.127c-.08.73.238 1.447.832 1.877l.63.457a1.375 1.375 0 0 0 1.6.01ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z","clip-rule":"evenodd"}]]

/**
 * @component @name Public
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMDE1IDE2Ljc1YTYuNzUxIDYuNzUxIDAgMCAwIDYuNjc4LTUuODcxbC0xLjUwOCAxLjA2M2EyLjYyNSAyLjYyNSAwIDAgMS0zLjA1Mi0uMDJsLS42My0uNDU3YTMuMjkxIDMuMjkxIDAgMCAxLTEuMzQxLTMuMDI1bC4wMTQtLjEyOGEuODc1Ljg3NSAwIDAgMC0xLjEwOC0uOTM3bC0uNTA0LjE0MmEyLjEyNSAyLjEyNSAwIDAgMS0yLjcwMi0yLjA0NXYtLjgwNUE2LjczOSA2LjczOSAwIDAgMCAzLjI1IDEwYzAgLjc0OS4xMjIgMS40NjkuMzQ3IDIuMTQyaDEuNDlhLjM3NS4zNzUgMCAwIDAgLjMxMy0uMTdsLjU3OS0uODc4YTEuNjI1IDEuNjI1IDAgMCAxIDIuNzM5LjAzOGwuNzQ1IDEuMjAzYy41MTcuODM1Ljc1NSAxLjgxMy42NzggMi43OTNsLS4xMjYgMS42MjJabS0xLjI0NS0uMTEyLjEyNS0xLjYwN2EzLjM3NSAzLjM3NSAwIDAgMC0uNDk1LTIuMDM4bC0uNzQ1LTEuMjAzYS4zNzUuMzc1IDAgMCAwLS42MzItLjAxbC0uNTc5Ljg4Yy0uMy40NTctLjgxLjczMi0xLjM1Ny43MzJoLS45MjRhNi43NTcgNi43NTcgMCAwIDAgNC42MDcgMy4yNDZabTUuNjk1LTUuNzE4IDIuMjUyLTEuNTg4YTYuNzUgNi43NSAwIDAgMC05LjYwNS01LjQzNXYxLjU3NWMwIC41OC41NTQgMSAxLjExMi44NDJsLjUwNS0uMTQyYTIuMTI1IDIuMTI1IDAgMCAxIDIuNjkgMi4yNzdsLS4wMTUuMTI3Yy0uMDguNzMuMjM4IDEuNDQ3LjgzMiAxLjg3N2wuNjMuNDU3YTEuMzc1IDEuMzc1IDAgMCAwIDEuNi4wMVpNMTAgMThhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Public = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-public',
        'staticon-Public',
        className
      ),
      ...props,
    })
);
Public.displayName = 'Public'

export default Public;
