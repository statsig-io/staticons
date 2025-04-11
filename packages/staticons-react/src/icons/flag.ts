
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.375 3.872v16.256a.75.75 0 0 0 1.5 0v-5.23c1.903.514 4.273.474 6.4-.341 1.624-.623 3.757-.885 5.644-.268.772.252 1.706-.274 1.706-1.207V5.65c0-.48-.28-.946-.763-1.141-2.402-.972-5.062-.669-7.124.122-1.984.76-4.162.716-5.864.168v-.927a.75.75 0 0 0-1.499 0Zm1.5 2.488v6.974c1.64.547 3.876.586 5.863-.176 1.786-.685 4.164-1.018 6.388-.373V5.83c-1.912-.709-4.086-.478-5.85.2-2.146.822-4.471.844-6.402.33Z","clip-rule":"evenodd"}]]

/**
 * @component @name Flag
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4zNzUgMy44NzJ2MTYuMjU2YS43NS43NSAwIDAgMCAxLjUgMHYtNS4yM2MxLjkwMy41MTQgNC4yNzMuNDc0IDYuNC0uMzQxIDEuNjI0LS42MjMgMy43NTctLjg4NSA1LjY0NC0uMjY4Ljc3Mi4yNTIgMS43MDYtLjI3NCAxLjcwNi0xLjIwN1Y1LjY1YzAtLjQ4LS4yOC0uOTQ2LS43NjMtMS4xNDEtMi40MDItLjk3Mi01LjA2Mi0uNjY5LTcuMTI0LjEyMi0xLjk4NC43Ni00LjE2Mi43MTYtNS44NjQuMTY4di0uOTI3YS43NS43NSAwIDAgMC0xLjQ5OSAwWm0xLjUgMi40ODh2Ni45NzRjMS42NC41NDcgMy44NzYuNTg2IDUuODYzLS4xNzYgMS43ODYtLjY4NSA0LjE2NC0xLjAxOCA2LjM4OC0uMzczVjUuODNjLTEuOTEyLS43MDktNC4wODYtLjQ3OC01Ljg1LjItMi4xNDYuODIyLTQuNDcxLjg0NC02LjQwMi4zM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Flag = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flag',
        'staticon-Flag',
        className
      ),
      ...props,
    })
);
Flag.displayName = 'Flag'

export default Flag;
