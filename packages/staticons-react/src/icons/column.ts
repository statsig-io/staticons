
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.644 15a1.875 1.875 0 0 1-1.875-1.875V2.876c0-1.036.84-1.875 1.875-1.875h4.713c1.035 0 1.875.84 1.875 1.875v10.249c0 1.035-.84 1.875-1.875 1.875H5.644Zm-.625-1.875c0 .345.28.625.625.625h4.713c.345 0 .625-.28.625-.625v-2.41H5.019v2.41Zm0-3.66h5.963v-2.93H5.019v2.93Zm0-4.18h5.963V2.877a.625.625 0 0 0-.625-.625H5.644a.625.625 0 0 0-.625.625v2.41Zm-2.167.616a.625.625 0 0 0-.625-.625h-.853a.875.875 0 0 0-.875.875v3.68c0 .484.391.875.875.875h.853a.625.625 0 1 0 0-1.25h-.478v-2.93h.478c.345 0 .625-.28.625-.625Zm10.297 0c0-.345.28-.625.625-.625h.853c.483 0 .875.391.875.875v3.68a.875.875 0 0 1-.875.875h-.853a.625.625 0 1 1 0-1.25h.478v-2.93h-.478a.625.625 0 0 1-.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Column
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS42NDQgMTVhMS44NzUgMS44NzUgMCAwIDEtMS44NzUtMS44NzVWMi44NzZjMC0xLjAzNi44NC0xLjg3NSAxLjg3NS0xLjg3NWg0LjcxM2MxLjAzNSAwIDEuODc1Ljg0IDEuODc1IDEuODc1djEwLjI0OWMwIDEuMDM1LS44NCAxLjg3NS0xLjg3NSAxLjg3NUg1LjY0NFptLS42MjUtMS44NzVjMCAuMzQ1LjI4LjYyNS42MjUuNjI1aDQuNzEzYy4zNDUgMCAuNjI1LS4yOC42MjUtLjYyNXYtMi40MUg1LjAxOXYyLjQxWm0wLTMuNjZoNS45NjN2LTIuOTNINS4wMTl2Mi45M1ptMC00LjE4aDUuOTYzVjIuODc3YS42MjUuNjI1IDAgMCAwLS42MjUtLjYyNUg1LjY0NGEuNjI1LjYyNSAwIDAgMC0uNjI1LjYyNXYyLjQxWm0tMi4xNjcuNjE2YS42MjUuNjI1IDAgMCAwLS42MjUtLjYyNWgtLjg1M2EuODc1Ljg3NSAwIDAgMC0uODc1Ljg3NXYzLjY4YzAgLjQ4NC4zOTEuODc1Ljg3NS44NzVoLjg1M2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLS40Nzh2LTIuOTNoLjQ3OGMuMzQ1IDAgLjYyNS0uMjguNjI1LS42MjVabTEwLjI5NyAwYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aC44NTNjLjQ4MyAwIC44NzUuMzkxLjg3NS44NzV2My42OGEuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NWgtLjg1M2EuNjI1LjYyNSAwIDEgMSAwLTEuMjVoLjQ3OHYtMi45M2gtLjQ3OGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Column = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-column',
        'staticon-Column',
        className
      ),
      ...props,
    })
);
Column.displayName = 'Column'

export default Column;
