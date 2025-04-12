
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.86 1.31c-.317.335-.713.787-.784 1.323-.051.389.081.733.299.96v.947H5.436c-1.035 0-1.875.84-1.875 1.875v2.401h-.123c-1.036 0-1.876.84-1.876 1.875v2.812a.625.625 0 0 0 .063 1.247h12.75a.625.625 0 0 0 .061-1.247v-2.812c0-1.035-.84-1.875-1.875-1.875h-.121v-2.4c0-1.036-.84-1.876-1.875-1.876h-1.94v-.947c.217-.228.349-.572.298-.96-.071-.536-.471-.99-.784-1.322a.193.193 0 0 0-.28 0Zm5.326 12.19H2.813v-2.809c0-.345.28-.625.624-.625h9.124c.345 0 .625.28.625.625v2.81ZM7.968 5.79a.627.627 0 0 0 .063 0h2.534c.345 0 .625.28.625.625v2.401H4.81v-2.4c0-.346.28-.626.625-.626h2.532Z","clip-rule":"evenodd"}]]

/**
 * @component @name FilterToFirstTime
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44NiAxLjMxYy0uMzE3LjMzNS0uNzEzLjc4Ny0uNzg0IDEuMzIzLS4wNTEuMzg5LjA4MS43MzMuMjk5Ljk2di45NDdINS40MzZjLTEuMDM1IDAtMS44NzUuODQtMS44NzUgMS44NzV2Mi40MDFoLS4xMjNjLTEuMDM2IDAtMS44NzYuODQtMS44NzYgMS44NzV2Mi44MTJhLjYyNS42MjUgMCAwIDAgLjA2MyAxLjI0N2gxMi43NWEuNjI1LjYyNSAwIDAgMCAuMDYxLTEuMjQ3di0yLjgxMmMwLTEuMDM1LS44NC0xLjg3NS0xLjg3NS0xLjg3NWgtLjEyMXYtMi40YzAtMS4wMzYtLjg0LTEuODc2LTEuODc1LTEuODc2aC0xLjk0di0uOTQ3Yy4yMTctLjIyOC4zNDktLjU3Mi4yOTgtLjk2LS4wNzEtLjUzNi0uNDcxLS45OS0uNzg0LTEuMzIyYS4xOTMuMTkzIDAgMCAwLS4yOCAwWm01LjMyNiAxMi4xOUgyLjgxM3YtMi44MDljMC0uMzQ1LjI4LS42MjUuNjI0LS42MjVoOS4xMjRjLjM0NSAwIC42MjUuMjguNjI1LjYyNXYyLjgxWk03Ljk2OCA1Ljc5YS42MjcuNjI3IDAgMCAwIC4wNjMgMGgyLjUzNGMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djIuNDAxSDQuODF2LTIuNGMwLS4zNDYuMjgtLjYyNi42MjUtLjYyNmgyLjUzMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FilterToFirstTime = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-filter-to-first-time',
        'staticon-FilterToFirstTime',
        className
      ),
      ...props,
    })
);
FilterToFirstTime.displayName = 'FilterToFirstTime'

export default FilterToFirstTime;
