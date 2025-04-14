
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M12.57 14.799a.625.625 0 0 1-.883.035l-4.34-4.008a1.125 1.125 0 0 1 0-1.653l4.34-4.008a.625.625 0 0 1 .848.918L8.295 10l4.24 3.916c.254.235.27.63.035.884Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNTcgMTQuNzk5YS42MjUuNjI1IDAgMCAxLS44ODMuMDM1bC00LjM0LTQuMDA4YTEuMTI1IDEuMTI1IDAgMCAxIDAtMS42NTNsNC4zNC00LjAwOGEuNjI1LjYyNSAwIDAgMSAuODQ4LjkxOEw4LjI5NSAxMGw0LjI0IDMuOTE2Yy4yNTQuMjM1LjI3LjYzLjAzNS44ODRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
