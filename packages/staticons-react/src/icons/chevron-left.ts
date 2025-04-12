
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.069 12.299a.625.625 0 0 1-.884.035L5.324 8.768a1.045 1.045 0 0 1 0-1.536l3.861-3.566a.625.625 0 1 1 .848.918L6.335 8l3.698 3.416c.254.234.27.63.036.883Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMDY5IDEyLjI5OWEuNjI1LjYyNSAwIDAgMS0uODg0LjAzNUw1LjMyNCA4Ljc2OGExLjA0NSAxLjA0NSAwIDAgMSAwLTEuNTM2bDMuODYxLTMuNTY2YS42MjUuNjI1IDAgMSAxIC44NDguOTE4TDYuMzM1IDhsMy42OTggMy40MTZjLjI1NC4yMzQuMjcuNjMuMDM2Ljg4M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-left',
        'staticon-ChevronLeft',
        className
      ),
      ...props,
    })
);
ChevronLeft.displayName = 'ChevronLeft'

export default ChevronLeft;
