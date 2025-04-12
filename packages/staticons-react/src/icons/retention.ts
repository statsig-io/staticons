
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M15 14.125a.875.875 0 0 1-.875.875H1.875A.875.875 0 0 1 1 14.125l.001-7.624V1.875A.873.873 0 0 1 1.876 1h3.749c.483 0 .875.391.875.875v3.354h3.375c.483 0 .875.392.875.875V9.5h3.375c.483 0 .875.392.875.875v3.75ZM2.25 5.229h3V2.25h-3v2.98ZM6.5 6.48h3v3h-3v-3Zm-1.25.022V9.48H2.251V6.5H5.25ZM6.5 13.75h3v-3h-3v3Zm-1.25 0h-3v-3h3v3Zm5.5-3v3h3v-3h-3Z","clip-rule":"evenodd"}]]

/**
 * @component @name Retention
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMTQuMTI1YS44NzUuODc1IDAgMCAxLS44NzUuODc1SDEuODc1QS44NzUuODc1IDAgMCAxIDEgMTQuMTI1bC4wMDEtNy42MjRWMS44NzVBLjg3My44NzMgMCAwIDEgMS44NzYgMWgzLjc0OWMuNDgzIDAgLjg3NS4zOTEuODc1Ljg3NXYzLjM1NGgzLjM3NWMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NVY5LjVoMy4zNzVjLjQ4MyAwIC44NzUuMzkyLjg3NS44NzV2My43NVpNMi4yNSA1LjIyOWgzVjIuMjVoLTN2Mi45OFpNNi41IDYuNDhoM3YzaC0zdi0zWm0tMS4yNS4wMjJWOS40OEgyLjI1MVY2LjVINS4yNVpNNi41IDEzLjc1aDN2LTNoLTN2M1ptLTEuMjUgMGgtM3YtM2gzdjNabTUuNS0zdjNoM3YtM2gtM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Retention = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-retention',
        'staticon-Retention',
        className
      ),
      ...props,
    })
);
Retention.displayName = 'Retention'

export default Retention;
