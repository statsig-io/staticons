
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M10.292 5.5v5a.625.625 0 0 1-1.25 0v-5a.625.625 0 1 1 1.25 0Zm-3.334 5v-5a.625.625 0 0 0-1.25 0v5a.625.625 0 0 0 1.25 0Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 15.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm0-1.25a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name Pause
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEwLjI5MiA1LjV2NWEuNjI1LjYyNSAwIDAgMS0xLjI1IDB2LTVhLjYyNS42MjUgMCAxIDEgMS4yNSAwWm0tMy4zMzQgNXYtNWEuNjI1LjYyNSAwIDAgMC0xLjI1IDB2NWEuNjI1LjYyNSAwIDAgMCAxLjI1IDBaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxNS41YTcuNSA3LjUgMCAxIDEgMC0xNSA3LjUgNy41IDAgMCAxIDAgMTVabTAtMS4yNWE2LjI1IDYuMjUgMCAxIDEgMC0xMi41IDYuMjUgNi4yNSAwIDAgMSAwIDEyLjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Pause = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pause',
        'staticon-Pause',
        className
      ),
      ...props,
    })
);
Pause.displayName = 'Pause'

export default Pause;
