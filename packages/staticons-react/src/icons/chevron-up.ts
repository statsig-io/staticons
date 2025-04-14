
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.8 12.71a.625.625 0 0 0 .034-.884l-4.008-4.34a1.125 1.125 0 0 0-1.653 0l-4.008 4.34a.625.625 0 1 0 .919.848L10 8.434l3.916 4.24c.234.254.63.27.883.035Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuOCAxMi43MWEuNjI1LjYyNSAwIDAgMCAuMDM0LS44ODRsLTQuMDA4LTQuMzRhMS4xMjUgMS4xMjUgMCAwIDAtMS42NTMgMGwtNC4wMDggNC4zNGEuNjI1LjYyNSAwIDEgMCAuOTE5Ljg0OEwxMCA4LjQzNGwzLjkxNiA0LjI0Yy4yMzQuMjU0LjYzLjI3Ljg4My4wMzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-up',
        'staticon-ChevronUp',
        className
      ),
      ...props,
    })
);
ChevronUp.displayName = 'ChevronUp'

export default ChevronUp;
