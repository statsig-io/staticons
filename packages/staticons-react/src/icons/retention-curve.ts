
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.874 4.501a.75.75 0 1 0-1.5 0V17.5a2.75 2.75 0 0 0 2.75 2.75h13.752a.75.75 0 0 0 0-1.5H6.124c-.69 0-1.25-.56-1.25-1.25v-13Zm3.212.4a.75.75 0 0 0-1.5 0c0 1.141.002 2.574.193 4.017.19 1.442.575 2.95 1.377 4.234 1.105 1.766 2.81 2.706 4.775 3.204 1.946.494 4.215.573 6.542.573a.75.75 0 0 0 0-1.5c-2.325 0-4.426-.083-6.173-.527-1.728-.438-3.037-1.21-3.872-2.545-.643-1.028-.986-2.3-1.162-3.635-.176-1.332-.18-2.671-.18-3.821Z","clip-rule":"evenodd"}]]

/**
 * @component @name RetentionCurve
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC44NzQgNC41MDFhLjc1Ljc1IDAgMSAwLTEuNSAwVjE3LjVhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWgxMy43NTJhLjc1Ljc1IDAgMCAwIDAtMS41SDYuMTI0Yy0uNjkgMC0xLjI1LS41Ni0xLjI1LTEuMjV2LTEzWm0zLjIxMi40YS43NS43NSAwIDAgMC0xLjUgMGMwIDEuMTQxLjAwMiAyLjU3NC4xOTMgNC4wMTcuMTkgMS40NDIuNTc1IDIuOTUgMS4zNzcgNC4yMzQgMS4xMDUgMS43NjYgMi44MSAyLjcwNiA0Ljc3NSAzLjIwNCAxLjk0Ni40OTQgNC4yMTUuNTczIDYuNTQyLjU3M2EuNzUuNzUgMCAwIDAgMC0xLjVjLTIuMzI1IDAtNC40MjYtLjA4My02LjE3My0uNTI3LTEuNzI4LS40MzgtMy4wMzctMS4yMS0zLjg3Mi0yLjU0NS0uNjQzLTEuMDI4LS45ODYtMi4zLTEuMTYyLTMuNjM1LS4xNzYtMS4zMzItLjE4LTIuNjcxLS4xOC0zLjgyMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const RetentionCurve = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-retention-curve',
        'staticon-RetentionCurve',
        className
      ),
      ...props,
    })
);
RetentionCurve.displayName = 'RetentionCurve'

export default RetentionCurve;
