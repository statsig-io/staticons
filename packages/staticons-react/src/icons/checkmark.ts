
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.808 3.175c.248.24.256.635.016.884l-8.392 8.704a.777.777 0 0 1-1.126-.008L1.169 8.342a.625.625 0 1 1 .912-.855l3.797 4.05 8.046-8.346a.625.625 0 0 1 .884-.016Z","clip-rule":"evenodd"}]]

/**
 * @component @name Checkmark
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuODA4IDMuMTc1Yy4yNDguMjQuMjU2LjYzNS4wMTYuODg0bC04LjM5MiA4LjcwNGEuNzc3Ljc3NyAwIDAgMS0xLjEyNi0uMDA4TDEuMTY5IDguMzQyYS42MjUuNjI1IDAgMSAxIC45MTItLjg1NWwzLjc5NyA0LjA1IDguMDQ2LTguMzQ2YS42MjUuNjI1IDAgMCAxIC44ODQtLjAxNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Checkmark = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkmark',
        'staticon-Checkmark',
        className
      ),
      ...props,
    })
);
Checkmark.displayName = 'Checkmark'

export default Checkmark;
