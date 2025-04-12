
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.12 3.867v-.865c0-.345.28-.625.625-.625h7.256c.345 0 .625.28.625.625v7.256c0 .345-.28.625-.625.625h-.872v-5.14a1.875 1.875 0 0 0-1.875-1.876H5.12Zm-1.25 0v-.865c0-1.036.84-1.875 1.875-1.875h7.256c1.035 0 1.875.84 1.875 1.875v7.256c0 1.035-.84 1.875-1.875 1.875h-.872v.865a1.874 1.874 0 0 1-1.875 1.875H3a1.875 1.875 0 0 1-1.875-1.875V5.742c0-1.035.84-1.875 1.875-1.875h.871ZM3 13.623a.625.625 0 0 1-.625-.625V5.742c0-.345.28-.625.625-.625h7.255c.346 0 .625.28.625.625v7.256c0 .345-.28.625-.625.625H3Z","clip-rule":"evenodd"}]]

/**
 * @component @name Copy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4xMiAzLjg2N3YtLjg2NWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg3LjI1NmMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djcuMjU2YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1aC0uODcydi01LjE0YTEuODc1IDEuODc1IDAgMCAwLTEuODc1LTEuODc2SDUuMTJabS0xLjI1IDB2LS44NjVjMC0xLjAzNi44NC0xLjg3NSAxLjg3NS0xLjg3NWg3LjI1NmMxLjAzNSAwIDEuODc1Ljg0IDEuODc1IDEuODc1djcuMjU2YzAgMS4wMzUtLjg0IDEuODc1LTEuODc1IDEuODc1aC0uODcydi44NjVhMS44NzQgMS44NzQgMCAwIDEtMS44NzUgMS44NzVIM2ExLjg3NSAxLjg3NSAwIDAgMS0xLjg3NS0xLjg3NVY1Ljc0MmMwLTEuMDM1Ljg0LTEuODc1IDEuODc1LTEuODc1aC44NzFaTTMgMTMuNjIzYS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVY1Ljc0MmMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg3LjI1NWMuMzQ2IDAgLjYyNS4yOC42MjUuNjI1djcuMjU2YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Copy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-copy',
        'staticon-Copy',
        className
      ),
      ...props,
    })
);
Copy.displayName = 'Copy'

export default Copy;
