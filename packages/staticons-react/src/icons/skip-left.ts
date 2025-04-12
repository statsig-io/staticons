
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M4.251 12.875v-9.75a.625.625 0 0 0-1.25 0v9.75a.625.625 0 1 0 1.25 0Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.141 2.827c.73-.627 1.858-.109 1.858.853v8.67c0 .961-1.129 1.48-1.858.853L6.095 8.868a1.125 1.125 0 0 1 0-1.707l5.046-4.334Zm.608 9.25V3.953l-4.73 4.063 4.73 4.063Z","clip-rule":"evenodd"}]]

/**
 * @component @name SkipLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTQuMjUxIDEyLjg3NXYtOS43NWEuNjI1LjYyNSAwIDAgMC0xLjI1IDB2OS43NWEuNjI1LjYyNSAwIDEgMCAxLjI1IDBaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMTQxIDIuODI3Yy43My0uNjI3IDEuODU4LS4xMDkgMS44NTguODUzdjguNjdjMCAuOTYxLTEuMTI5IDEuNDgtMS44NTguODUzTDYuMDk1IDguODY4YTEuMTI1IDEuMTI1IDAgMCAxIDAtMS43MDdsNS4wNDYtNC4zMzRabS42MDggOS4yNVYzLjk1M2wtNC43MyA0LjA2MyA0LjczIDQuMDYzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SkipLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-skip-left',
        'staticon-SkipLeft',
        className
      ),
      ...props,
    })
);
SkipLeft.displayName = 'SkipLeft'

export default SkipLeft;
