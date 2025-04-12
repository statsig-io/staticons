
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.25 8a6.25 6.25 0 1 0-12.5 0 6.25 6.25 0 0 0 12.5 0Zm1.25 0a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0ZM8 3.937c.346 0 .626.28.626.625v3.015l2.402 1.387a.625.625 0 1 1-.625 1.083L7.73 8.504a.625.625 0 0 1-.355-.587V4.562c0-.346.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Clock
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMjUgOGE2LjI1IDYuMjUgMCAxIDAtMTIuNSAwIDYuMjUgNi4yNSAwIDAgMCAxMi41IDBabTEuMjUgMGE3LjUgNy41IDAgMSAwLTE1IDAgNy41IDcuNSAwIDAgMCAxNSAwWk04IDMuOTM3Yy4zNDYgMCAuNjI2LjI4LjYyNi42MjV2My4wMTVsMi40MDIgMS4zODdhLjYyNS42MjUgMCAxIDEtLjYyNSAxLjA4M0w3LjczIDguNTA0YS42MjUuNjI1IDAgMCAxLS4zNTUtLjU4N1Y0LjU2MmMwLS4zNDYuMjgtLjYyNS42MjUtLjYyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Clock = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-clock',
        'staticon-Clock',
        className
      ),
      ...props,
    })
);
Clock.displayName = 'Clock'

export default Clock;
