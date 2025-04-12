
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M7.404 4.28a.625.625 0 1 0-.89.879l2.805 2.84-2.806 2.842a.625.625 0 1 0 .89.879l3.135-3.176a.775.775 0 0 0 0-1.09L7.404 4.28Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-1.25 0a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name CircleRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTcuNDA0IDQuMjhhLjYyNS42MjUgMCAxIDAtLjg5Ljg3OWwyLjgwNSAyLjg0LTIuODA2IDIuODQyYS42MjUuNjI1IDAgMSAwIC44OS44NzlsMy4xMzUtMy4xNzZhLjc3NS43NzUgMCAwIDAgMC0xLjA5TDcuNDA0IDQuMjhaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNSA4YTcuNSA3LjUgMCAxIDEtMTUgMCA3LjUgNy41IDAgMCAxIDE1IDBabS0xLjI1IDBhNi4yNSA2LjI1IDAgMSAxLTEyLjUgMCA2LjI1IDYuMjUgMCAwIDEgMTIuNSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CircleRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-circle-right',
        'staticon-CircleRight',
        className
      ),
      ...props,
    })
);
CircleRight.displayName = 'CircleRight'

export default CircleRight;
