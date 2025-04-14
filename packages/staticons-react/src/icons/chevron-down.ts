
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.8 7.29c.253.235.268.63.034.884l-4.008 4.34a1.125 1.125 0 0 1-1.653 0l-4.008-4.34a.625.625 0 1 1 .919-.848L10 11.566l3.916-4.24a.625.625 0 0 1 .883-.035Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuOCA3LjI5Yy4yNTMuMjM1LjI2OC42My4wMzQuODg0bC00LjAwOCA0LjM0YTEuMTI1IDEuMTI1IDAgMCAxLTEuNjUzIDBsLTQuMDA4LTQuMzRhLjYyNS42MjUgMCAxIDEgLjkxOS0uODQ4TDEwIDExLjU2NmwzLjkxNi00LjI0YS42MjUuNjI1IDAgMCAxIC44ODMtLjAzNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-down',
        'staticon-ChevronDown',
        className
      ),
      ...props,
    })
);
ChevronDown.displayName = 'ChevronDown'

export default ChevronDown;
