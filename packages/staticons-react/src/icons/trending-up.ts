
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.998 6.627a.75.75 0 0 0 0 1.5h4.158l-5.282 5.397a.75.75 0 0 1-1.128-.063l-2.053-2.637a2.25 2.25 0 0 0-3.383-.19l-5.348 5.464a.75.75 0 0 0 1.072 1.05l5.348-5.466a.75.75 0 0 1 1.128.064l2.053 2.636a2.25 2.25 0 0 0 3.383.191l5.302-5.417v4.221a.75.75 0 0 0 1.5 0v-5a1.75 1.75 0 0 0-1.75-1.75h-5Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuOTk4IDYuNjI3YS43NS43NSAwIDAgMCAwIDEuNWg0LjE1OGwtNS4yODIgNS4zOTdhLjc1Ljc1IDAgMCAxLTEuMTI4LS4wNjNsLTIuMDUzLTIuNjM3YTIuMjUgMi4yNSAwIDAgMC0zLjM4My0uMTlsLTUuMzQ4IDUuNDY0YS43NS43NSAwIDAgMCAxLjA3MiAxLjA1bDUuMzQ4LTUuNDY2YS43NS43NSAwIDAgMSAxLjEyOC4wNjRsMi4wNTMgMi42MzZhMi4yNSAyLjI1IDAgMCAwIDMuMzgzLjE5MWw1LjMwMi01LjQxN3Y0LjIyMWEuNzUuNzUgMCAwIDAgMS41IDB2LTVhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NWgtNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TrendingUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-trending-up',
        'staticon-TrendingUp',
        className
      ),
      ...props,
    })
);
TrendingUp.displayName = 'TrendingUp'

export default TrendingUp;
