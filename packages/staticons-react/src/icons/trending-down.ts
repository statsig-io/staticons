
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m20.248 14.844-5.302-5.417a2.25 2.25 0 0 0-3.383.19L9.51 12.255a.75.75 0 0 1-1.128.064L3.034 6.853a.75.75 0 0 0-1.072 1.049l5.348 5.465a2.25 2.25 0 0 0 3.383-.191l2.053-2.636a.75.75 0 0 1 1.128-.064l5.282 5.397h-4.16a.75.75 0 1 0 0 1.5h5.002a1.75 1.75 0 0 0 1.75-1.75v-5.002a.75.75 0 0 0-1.5 0v4.223Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMjAuMjQ4IDE0Ljg0NC01LjMwMi01LjQxN2EyLjI1IDIuMjUgMCAwIDAtMy4zODMuMTlMOS41MSAxMi4yNTVhLjc1Ljc1IDAgMCAxLTEuMTI4LjA2NEwzLjAzNCA2Ljg1M2EuNzUuNzUgMCAwIDAtMS4wNzIgMS4wNDlsNS4zNDggNS40NjVhMi4yNSAyLjI1IDAgMCAwIDMuMzgzLS4xOTFsMi4wNTMtMi42MzZhLjc1Ljc1IDAgMCAxIDEuMTI4LS4wNjRsNS4yODIgNS4zOTdoLTQuMTZhLjc1Ljc1IDAgMSAwIDAgMS41aDUuMDAyYTEuNzUgMS43NSAwIDAgMCAxLjc1LTEuNzV2LTUuMDAyYS43NS43NSAwIDAgMC0xLjUgMHY0LjIyM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
