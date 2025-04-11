
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.125 20.626a2.75 2.75 0 0 1-2.75-2.75V6.124a2.75 2.75 0 0 1 2.75-2.75h11.75a2.75 2.75 0 0 1 2.75 2.75v11.752a2.75 2.75 0 0 1-2.75 2.75H6.125Zm-1.25-2.75c0 .69.56 1.25 1.25 1.25h11.75c.69 0 1.25-.56 1.25-1.25V6.124c0-.69-.56-1.25-1.25-1.25H6.125c-.69 0-1.25.56-1.25 1.25v11.752Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxNonSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMjUgMjAuNjI2YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzVWNi4xMjRhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgxMS43NWEyLjc1IDIuNzUgMCAwIDEgMi43NSAyLjc1djExLjc1MmEyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1SDYuMTI1Wm0tMS4yNS0yLjc1YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aDExLjc1Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVY2LjEyNGMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVINi4xMjVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djExLjc1MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxNonSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-non-selected',
        'staticon-CheckboxNonSelected',
        className
      ),
      ...props,
    })
);
CheckboxNonSelected.displayName = 'CheckboxNonSelected'

export default CheckboxNonSelected;
