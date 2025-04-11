
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#1F2328","fill-rule":"evenodd","d":"M3.375 17.876a2.75 2.75 0 0 0 2.75 2.75h11.75a2.75 2.75 0 0 0 2.75-2.75V6.124a2.75 2.75 0 0 0-2.75-2.75H6.125a2.75 2.75 0 0 0-2.75 2.75v11.752Zm13.502-5.127a.75.75 0 0 0 0-1.5H7.123a.75.75 0 0 0 0 1.5h9.754Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxPartialSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zNzUgMTcuODc2YTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoMTEuNzVhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVY2LjEyNGEyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1SDYuMTI1YTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MTEuNzUyWm0xMy41MDItNS4xMjdhLjc1Ljc1IDAgMCAwIDAtMS41SDcuMTIzYS43NS43NSAwIDAgMCAwIDEuNWg5Ljc1NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxPartialSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-partial-selected',
        'staticon-CheckboxPartialSelected',
        className
      ),
      ...props,
    })
);
CheckboxPartialSelected.displayName = 'CheckboxPartialSelected'

export default CheckboxPartialSelected;
