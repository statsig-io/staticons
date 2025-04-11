
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.684 4.336a2.75 2.75 0 0 1 2.631 0L20.72 8.37c.561.306.82.882.777 1.436v5.443a.75.75 0 1 1-1.5 0v-3.851l-1.706.93v4.394c0 .646-.282 1.336-.913 1.735A10.333 10.333 0 0 1 12 19.999c-2.368 0-4.307-.865-5.378-1.543-.63-.4-.913-1.089-.913-1.735v-4.395l-2.427-1.322c-1.044-.569-1.044-2.067 0-2.635l7.403-4.033Zm-3.476 8.807v3.578c0 .236.1.395.215.467A8.829 8.829 0 0 0 12 18.5c2.014 0 3.68-.742 4.577-1.31.116-.074.215-.232.215-.468v-3.578l-3.476 1.894a2.75 2.75 0 0 1-2.63 0l-3.477-1.894Zm5.39-7.49a1.25 1.25 0 0 0-1.196 0L3.998 9.686l7.404 4.033a1.25 1.25 0 0 0 1.196 0l7.404-4.033-7.404-4.033Z","clip-rule":"evenodd"}]]

/**
 * @component @name School
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNjg0IDQuMzM2YTIuNzUgMi43NSAwIDAgMSAyLjYzMSAwTDIwLjcyIDguMzdjLjU2MS4zMDYuODIuODgyLjc3NyAxLjQzNnY1LjQ0M2EuNzUuNzUgMCAxIDEtMS41IDB2LTMuODUxbC0xLjcwNi45M3Y0LjM5NGMwIC42NDYtLjI4MiAxLjMzNi0uOTEzIDEuNzM1QTEwLjMzMyAxMC4zMzMgMCAwIDEgMTIgMTkuOTk5Yy0yLjM2OCAwLTQuMzA3LS44NjUtNS4zNzgtMS41NDMtLjYzLS40LS45MTMtMS4wODktLjkxMy0xLjczNXYtNC4zOTVsLTIuNDI3LTEuMzIyYy0xLjA0NC0uNTY5LTEuMDQ0LTIuMDY3IDAtMi42MzVsNy40MDMtNC4wMzNabS0zLjQ3NiA4LjgwN3YzLjU3OGMwIC4yMzYuMS4zOTUuMjE1LjQ2N0E4LjgyOSA4LjgyOSAwIDAgMCAxMiAxOC41YzIuMDE0IDAgMy42OC0uNzQyIDQuNTc3LTEuMzEuMTE2LS4wNzQuMjE1LS4yMzIuMjE1LS40Njh2LTMuNTc4bC0zLjQ3NiAxLjg5NGEyLjc1IDIuNzUgMCAwIDEtMi42MyAwbC0zLjQ3Ny0xLjg5NFptNS4zOS03LjQ5YTEuMjUgMS4yNSAwIDAgMC0xLjE5NiAwTDMuOTk4IDkuNjg2bDcuNDA0IDQuMDMzYTEuMjUgMS4yNSAwIDAgMCAxLjE5NiAwbDcuNDA0LTQuMDMzLTcuNDA0LTQuMDMzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const School = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-school',
        'staticon-School',
        className
      ),
      ...props,
    })
);
School.displayName = 'School'

export default School;
