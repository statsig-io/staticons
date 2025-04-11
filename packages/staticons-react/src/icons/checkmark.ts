
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.78 7.074a.75.75 0 0 1 0 1.06l-9.243 9.227a1.25 1.25 0 0 1-1.766 0l-4.55-4.543a.75.75 0 1 1 1.059-1.061l4.374 4.367 9.066-9.05a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Checkmark
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNzggNy4wNzRhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtOS4yNDMgOS4yMjdhMS4yNSAxLjI1IDAgMCAxLTEuNzY2IDBsLTQuNTUtNC41NDNhLjc1Ljc1IDAgMSAxIDEuMDU5LTEuMDYxbDQuMzc0IDQuMzY3IDkuMDY2LTkuMDVhLjc1Ljc1IDAgMCAxIDEuMDYgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
