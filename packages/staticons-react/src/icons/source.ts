
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M17.5 15.375a2.125 2.125 0 0 1-2.124 2.125H4.625A2.125 2.125 0 0 1 2.5 15.375v-2.09a.625.625 0 1 1 1.25 0v2.09c0 .483.391.875.875.875h10.75a.875.875 0 0 0 .876-.875V4.626a.875.875 0 0 0-.875-.875H4.625a.875.875 0 0 0-.875.875v2.125a.625.625 0 0 1-1.25 0V4.626c0-1.174.95-2.125 2.125-2.125h10.75c1.174 0 2.126.951 2.126 2.125v10.749Zm-3.347-4.755a.875.875 0 0 0 0-1.238l-3.067-3.066a.625.625 0 1 0-.883.884l2.174 2.174H3.125a.625.625 0 1 0 0 1.25h9.255l-2.173 2.174a.625.625 0 1 0 .884.884l3.062-3.062Z","clip-rule":"evenodd"}]]

/**
 * @component @name Source
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNSAxNS4zNzVhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjQgMi4xMjVINC42MjVBMi4xMjUgMi4xMjUgMCAwIDEgMi41IDE1LjM3NXYtMi4wOWEuNjI1LjYyNSAwIDEgMSAxLjI1IDB2Mi4wOWMwIC40ODMuMzkxLjg3NS44NzUuODc1aDEwLjc1YS44NzUuODc1IDAgMCAwIC44NzYtLjg3NVY0LjYyNmEuODc1Ljg3NSAwIDAgMC0uODc1LS44NzVINC42MjVhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2Mi4xMjVhLjYyNS42MjUgMCAwIDEtMS4yNSAwVjQuNjI2YzAtMS4xNzQuOTUtMi4xMjUgMi4xMjUtMi4xMjVoMTAuNzVjMS4xNzQgMCAyLjEyNi45NTEgMi4xMjYgMi4xMjV2MTAuNzQ5Wm0tMy4zNDctNC43NTVhLjg3NS44NzUgMCAwIDAgMC0xLjIzOGwtMy4wNjctMy4wNjZhLjYyNS42MjUgMCAxIDAtLjg4My44ODRsMi4xNzQgMi4xNzRIMy4xMjVhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDkuMjU1bC0yLjE3MyAyLjE3NGEuNjI1LjYyNSAwIDEgMCAuODg0Ljg4NGwzLjA2Mi0zLjA2MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Source = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-source',
        'staticon-Source',
        className
      ),
      ...props,
    })
);
Source.displayName = 'Source'

export default Source;
