
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.797 4.31a.625.625 0 1 0-.884.883l2.181 2.181H1.5a.625.625 0 0 0 0 1.251h11.594l-2.18 2.181a.625.625 0 0 0 .883.884l3.073-3.07a.875.875 0 0 0 0-1.238L11.798 4.31Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingFlat
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNzk3IDQuMzFhLjYyNS42MjUgMCAxIDAtLjg4NC44ODNsMi4xODEgMi4xODFIMS41YS42MjUuNjI1IDAgMCAwIDAgMS4yNTFoMTEuNTk0bC0yLjE4IDIuMTgxYS42MjUuNjI1IDAgMCAwIC44ODMuODg0bDMuMDczLTMuMDdhLjg3NS44NzUgMCAwIDAgMC0xLjIzOEwxMS43OTggNC4zMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
