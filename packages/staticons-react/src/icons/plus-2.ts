
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 1.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5ZM8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm0 3.125c.345 0 .625.28.625.625v3.125h3.124a.625.625 0 0 1 0 1.25H8.625v3.125a.625.625 0 1 1-1.25 0V8.625H4.249a.625.625 0 1 1 0-1.25h3.126V4.25c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Plus2
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjc1YTYuMjUgNi4yNSAwIDEgMSAwIDEyLjUgNi4yNSA2LjI1IDAgMCAxIDAtMTIuNVpNOCAuNWE3LjUgNy41IDAgMSAxIDAgMTUgNy41IDcuNSAwIDAgMSAwLTE1Wm0wIDMuMTI1Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjV2My4xMjVoMy4xMjRhLjYyNS42MjUgMCAwIDEgMCAxLjI1SDguNjI1djMuMTI1YS42MjUuNjI1IDAgMSAxLTEuMjUgMFY4LjYyNUg0LjI0OWEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMy4xMjZWNC4yNWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Plus2 = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-plus2',
        'staticon-Plus2',
        className
      ),
      ...props,
    })
);
Plus2.displayName = 'Plus2'

export default Plus2;
