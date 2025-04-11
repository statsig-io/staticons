
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.386 17.801a.75.75 0 1 1-1.018-1.102l5.089-4.7L6.368 7.3a.75.75 0 0 1 1.018-1.102l5.287 4.883a1.25 1.25 0 0 1 0 1.837l-5.287 4.883Zm4.799 0a.75.75 0 1 1-1.018-1.102l5.089-4.7-5.09-4.699a.75.75 0 1 1 1.019-1.102l5.287 4.883a1.25 1.25 0 0 1 0 1.837l-5.287 4.883Z","clip-rule":"evenodd"}]]

/**
 * @component @name DoubleChevronRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4zODYgMTcuODAxYS43NS43NSAwIDEgMS0xLjAxOC0xLjEwMmw1LjA4OS00LjdMNi4zNjggNy4zYS43NS43NSAwIDAgMSAxLjAxOC0xLjEwMmw1LjI4NyA0Ljg4M2ExLjI1IDEuMjUgMCAwIDEgMCAxLjgzN2wtNS4yODcgNC44ODNabTQuNzk5IDBhLjc1Ljc1IDAgMSAxLTEuMDE4LTEuMTAybDUuMDg5LTQuNy01LjA5LTQuNjk5YS43NS43NSAwIDEgMSAxLjAxOS0xLjEwMmw1LjI4NyA0Ljg4M2ExLjI1IDEuMjUgMCAwIDEgMCAxLjgzN2wtNS4yODcgNC44ODNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DoubleChevronRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-double-chevron-right',
        'staticon-DoubleChevronRight',
        className
      ),
      ...props,
    })
);
DoubleChevronRight.displayName = 'DoubleChevronRight'

export default DoubleChevronRight;
