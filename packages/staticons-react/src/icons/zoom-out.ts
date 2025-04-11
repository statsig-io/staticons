
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M16 11.249a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.25 11.25a8 8 0 1 1 13.685 5.627l2.844 2.844a.75.75 0 1 1-1.06 1.061l-2.939-2.938A8 8 0 0 1 3.25 11.25Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z","clip-rule":"evenodd"}]]

/**
 * @component @name ZoomOut
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE2IDExLjI0OWEuNzUuNzUgMCAwIDEtLjc1Ljc1aC04YS43NS43NSAwIDAgMSAwLTEuNWg4YS43NS43NSAwIDAgMSAuNzUuNzVaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4yNSAxMS4yNWE4IDggMCAxIDEgMTMuNjg1IDUuNjI3bDIuODQ0IDIuODQ0YS43NS43NSAwIDEgMS0xLjA2IDEuMDYxbC0yLjkzOS0yLjkzOEE4IDggMCAwIDEgMy4yNSAxMS4yNVptOC02LjVhNi41IDYuNSAwIDEgMCAwIDEzIDYuNSA2LjUgMCAwIDAgMC0xM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ZoomOut = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-zoom-out',
        'staticon-ZoomOut',
        className
      ),
      ...props,
    })
);
ZoomOut.displayName = 'ZoomOut'

export default ZoomOut;
