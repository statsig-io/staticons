
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M12.592 14.31a.625.625 0 1 1 0-1.25h3.25L11.72 8.848a.625.625 0 0 0-.94.054l-1.56 2.004a1.875 1.875 0 0 1-2.82.16L2.177 6.75a.625.625 0 1 1 .894-.874l4.221 4.313c.265.27.707.246.94-.053l1.561-2.005a1.875 1.875 0 0 1 2.82-.159l4.138 4.229v-3.3a.625.625 0 1 1 1.25 0v4.284c0 .62-.504 1.124-1.125 1.124h-4.284Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNTkyIDE0LjMxYS42MjUuNjI1IDAgMSAxIDAtMS4yNWgzLjI1TDExLjcyIDguODQ4YS42MjUuNjI1IDAgMCAwLS45NC4wNTRsLTEuNTYgMi4wMDRhMS44NzUgMS44NzUgMCAwIDEtMi44Mi4xNkwyLjE3NyA2Ljc1YS42MjUuNjI1IDAgMSAxIC44OTQtLjg3NGw0LjIyMSA0LjMxM2MuMjY1LjI3LjcwNy4yNDYuOTQtLjA1M2wxLjU2MS0yLjAwNWExLjg3NSAxLjg3NSAwIDAgMSAyLjgyLS4xNTlsNC4xMzggNC4yMjl2LTMuM2EuNjI1LjYyNSAwIDEgMSAxLjI1IDB2NC4yODRjMCAuNjItLjUwNCAxLjEyNC0xLjEyNSAxLjEyNGgtNC4yODRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TrendingDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-trending-down',
        'staticon-TrendingDown',
        className
      ),
      ...props,
    })
);
TrendingDown.displayName = 'TrendingDown'

export default TrendingDown;
