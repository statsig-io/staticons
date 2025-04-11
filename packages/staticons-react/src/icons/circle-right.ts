
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm1.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9.712-4.53a.75.75 0 0 0-1.061 1.061l3.29 3.291a.25.25 0 0 1 0 .354l-3.292 3.293a.75.75 0 0 0 1.06 1.06l3.294-3.293a1.75 1.75 0 0 0 0-2.475l-3.291-3.29Z","clip-rule":"evenodd"}]]

/**
 * @component @name CircleRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNSAxMmE3LjUgNy41IDAgMSAxLTE1IDAgNy41IDcuNSAwIDAgMSAxNSAwWm0xLjUgMGE5IDkgMCAxIDEtMTggMCA5IDkgMCAwIDEgMTggMFptLTkuNzEyLTQuNTNhLjc1Ljc1IDAgMCAwLTEuMDYxIDEuMDYxbDMuMjkgMy4yOTFhLjI1LjI1IDAgMCAxIDAgLjM1NGwtMy4yOTIgMy4yOTNhLjc1Ljc1IDAgMCAwIDEuMDYgMS4wNmwzLjI5NC0zLjI5M2ExLjc1IDEuNzUgMCAwIDAgMC0yLjQ3NWwtMy4yOTEtMy4yOVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CircleRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-circle-right',
        'staticon-CircleRight',
        className
      ),
      ...props,
    })
);
CircleRight.displayName = 'CircleRight'

export default CircleRight;
