
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M16.95 7.22a.75.75 0 1 0-1.062 1.062l2.965 2.967H3.75a.75.75 0 0 0 0 1.501h15.103l-2.965 2.968a.751.751 0 0 0 1.061 1.061l3.538-3.54a1.753 1.753 0 0 0 0-2.478L16.95 7.22Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingFlat
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuOTUgNy4yMmEuNzUuNzUgMCAxIDAtMS4wNjIgMS4wNjJsMi45NjUgMi45NjdIMy43NWEuNzUuNzUgMCAwIDAgMCAxLjUwMWgxNS4xMDNsLTIuOTY1IDIuOTY4YS43NTEuNzUxIDAgMCAwIDEuMDYxIDEuMDYxbDMuNTM4LTMuNTRhMS43NTMgMS43NTMgMCAwIDAgMC0yLjQ3OEwxNi45NSA3LjIyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
