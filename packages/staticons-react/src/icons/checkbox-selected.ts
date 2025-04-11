
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#1F2328","fill-rule":"evenodd","d":"M3.375 17.876a2.75 2.75 0 0 0 2.75 2.75h11.75a2.75 2.75 0 0 0 2.75-2.75V6.124a2.75 2.75 0 0 0-2.75-2.75H6.125a2.75 2.75 0 0 0-2.75 2.75v11.752Zm13.44-8a.75.75 0 0 0-1.06-1.061l-5.22 5.22-2.638-2.64a.75.75 0 1 0-1.061 1.062l2.815 2.815a1.25 1.25 0 0 0 1.768 0l5.397-5.396Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zNzUgMTcuODc2YTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoMTEuNzVhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVY2LjEyNGEyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1SDYuMTI1YTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MTEuNzUyWm0xMy40NC04YS43NS43NSAwIDAgMC0xLjA2LTEuMDYxbC01LjIyIDUuMjItMi42MzgtMi42NGEuNzUuNzUgMCAxIDAtMS4wNjEgMS4wNjJsMi44MTUgMi44MTVhMS4yNSAxLjI1IDAgMCAwIDEuNzY4IDBsNS4zOTctNS4zOTZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-selected',
        'staticon-CheckboxSelected',
        className
      ),
      ...props,
    })
);
CheckboxSelected.displayName = 'CheckboxSelected'

export default CheckboxSelected;
