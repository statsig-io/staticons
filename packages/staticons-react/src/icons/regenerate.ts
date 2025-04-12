
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 2.502A5.498 5.498 0 0 0 2.502 8a.625.625 0 1 1-1.25 0 6.748 6.748 0 0 1 12.146-4.05v-.857a.625.625 0 1 1 1.25 0v2.2a.875.875 0 0 1-.875.875h-2.2a.625.625 0 1 1 0-1.25h.98A5.492 5.492 0 0 0 8 2.502Zm6.123 4.873c.345 0 .625.28.625.625a6.748 6.748 0 0 1-12.112 4.095v.809a.625.625 0 0 1-1.25 0v-2.198c0-.484.391-.876.875-.876h2.198a.625.625 0 0 1 0 1.25H3.445A5.498 5.498 0 0 0 13.498 8c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Regenerate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAyLjUwMkE1LjQ5OCA1LjQ5OCAwIDAgMCAyLjUwMiA4YS42MjUuNjI1IDAgMSAxLTEuMjUgMCA2Ljc0OCA2Ljc0OCAwIDAgMSAxMi4xNDYtNC4wNXYtLjg1N2EuNjI1LjYyNSAwIDEgMSAxLjI1IDB2Mi4yYS44NzUuODc1IDAgMCAxLS44NzUuODc1aC0yLjJhLjYyNS42MjUgMCAxIDEgMC0xLjI1aC45OEE1LjQ5MiA1LjQ5MiAwIDAgMCA4IDIuNTAyWm02LjEyMyA0Ljg3M2MuMzQ1IDAgLjYyNS4yOC42MjUuNjI1YTYuNzQ4IDYuNzQ4IDAgMCAxLTEyLjExMiA0LjA5NXYuODA5YS42MjUuNjI1IDAgMCAxLTEuMjUgMHYtMi4xOThjMC0uNDg0LjM5MS0uODc2Ljg3NS0uODc2aDIuMTk4YS42MjUuNjI1IDAgMCAxIDAgMS4yNUgzLjQ0NUE1LjQ5OCA1LjQ5OCAwIDAgMCAxMy40OTggOGMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Regenerate = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-regenerate',
        'staticon-Regenerate',
        className
      ),
      ...props,
    })
);
Regenerate.displayName = 'Regenerate'

export default Regenerate;
