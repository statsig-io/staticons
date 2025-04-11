
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.208 17.759a.75.75 0 0 0 1.06.042l5.375-4.964a1.14 1.14 0 0 0 0-1.675L10.268 6.2A.75.75 0 1 0 9.25 7.3l5.088 4.7-5.088 4.7a.75.75 0 0 0-.042 1.059Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4yMDggMTcuNzU5YS43NS43NSAwIDAgMCAxLjA2LjA0Mmw1LjM3NS00Ljk2NGExLjE0IDEuMTQgMCAwIDAgMC0xLjY3NUwxMC4yNjggNi4yQS43NS43NSAwIDEgMCA5LjI1IDcuM2w1LjA4OCA0LjctNS4wODggNC43YS43NS43NSAwIDAgMC0uMDQyIDEuMDU5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-right',
        'staticon-ChevronRight',
        className
      ),
      ...props,
    })
);
ChevronRight.displayName = 'ChevronRight'

export default ChevronRight;
