
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.931 12.299c.235.254.63.27.884.035l3.861-3.566a1.045 1.045 0 0 0 0-1.536L6.815 3.666a.625.625 0 0 0-.848.918L9.665 8l-3.698 3.416a.625.625 0 0 0-.036.883Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS45MzEgMTIuMjk5Yy4yMzUuMjU0LjYzLjI3Ljg4NC4wMzVsMy44NjEtMy41NjZhMS4wNDUgMS4wNDUgMCAwIDAgMC0xLjUzNkw2LjgxNSAzLjY2NmEuNjI1LjYyNSAwIDAgMC0uODQ4LjkxOEw5LjY2NSA4bC0zLjY5OCAzLjQxNmEuNjI1LjYyNSAwIDAgMC0uMDM2Ljg4M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-right',
        'staticon-ChevronRight',
        className
      ),
      ...props,
    })
);
ChevronRight.displayName = 'ChevronRight'

export default ChevronRight;
