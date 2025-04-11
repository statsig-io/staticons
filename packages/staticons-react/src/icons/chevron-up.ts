
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M17.76 15.301a.75.75 0 0 0 .042-1.06l-4.964-5.374a1.14 1.14 0 0 0-1.675 0L6.199 14.24a.75.75 0 0 0 1.102 1.018l4.7-5.088 4.699 5.088a.75.75 0 0 0 1.06.042Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNzYgMTUuMzAxYS43NS43NSAwIDAgMCAuMDQyLTEuMDZsLTQuOTY0LTUuMzc0YTEuMTQgMS4xNCAwIDAgMC0xLjY3NSAwTDYuMTk5IDE0LjI0YS43NS43NSAwIDAgMCAxLjEwMiAxLjAxOGw0LjctNS4wODggNC42OTkgNS4wODhhLjc1Ljc1IDAgMCAwIDEuMDYuMDQyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-up',
        'staticon-ChevronUp',
        className
      ),
      ...props,
    })
);
ChevronUp.displayName = 'ChevronUp'

export default ChevronUp;
