
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M17.76 8.699a.75.75 0 0 1 .042 1.06l-4.964 5.375a1.14 1.14 0 0 1-1.675 0L6.199 9.759A.75.75 0 0 1 7.301 8.74l4.7 5.089L16.7 8.74a.75.75 0 0 1 1.06-.042Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNzYgOC42OTlhLjc1Ljc1IDAgMCAxIC4wNDIgMS4wNmwtNC45NjQgNS4zNzVhMS4xNCAxLjE0IDAgMCAxLTEuNjc1IDBMNi4xOTkgOS43NTlBLjc1Ljc1IDAgMCAxIDcuMzAxIDguNzRsNC43IDUuMDg5TDE2LjcgOC43NGEuNzUuNzUgMCAwIDEgMS4wNi0uMDQyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-down',
        'staticon-ChevronDown',
        className
      ),
      ...props,
    })
);
ChevronDown.displayName = 'ChevronDown'

export default ChevronDown;
