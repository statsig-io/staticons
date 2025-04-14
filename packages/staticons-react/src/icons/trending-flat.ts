
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.15 6.058a.625.625 0 1 0-.884.885l2.432 2.432h-12.7a.625.625 0 1 0 0 1.25h12.7l-2.432 2.433a.626.626 0 0 0 .885.884l3.146-3.146a1.127 1.127 0 0 0 0-1.592L14.15 6.058Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingFlat
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMTUgNi4wNThhLjYyNS42MjUgMCAxIDAtLjg4NC44ODVsMi40MzIgMi40MzJoLTEyLjdhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDEyLjdsLTIuNDMyIDIuNDMzYS42MjYuNjI2IDAgMCAwIC44ODUuODg0bDMuMTQ2LTMuMTQ2YTEuMTI3IDEuMTI3IDAgMCAwIDAtMS41OTJMMTQuMTUgNi4wNThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TrendingFlat = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-trending-flat',
        'staticon-TrendingFlat',
        className
      ),
      ...props,
    })
);
TrendingFlat.displayName = 'TrendingFlat'

export default TrendingFlat;
