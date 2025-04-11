
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.107 3.75a6.857 6.857 0 1 0 3.707 12.626l3.654 3.654a.751.751 0 0 0 1.062-1.063l-3.544-3.543a6.857 6.857 0 0 0-4.88-11.674Zm-5.355 6.857a5.355 5.355 0 1 1 10.71 0 5.355 5.355 0 0 1-10.71 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Search
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMTA3IDMuNzVhNi44NTcgNi44NTcgMCAxIDAgMy43MDcgMTIuNjI2bDMuNjU0IDMuNjU0YS43NTEuNzUxIDAgMCAwIDEuMDYyLTEuMDYzbC0zLjU0NC0zLjU0M2E2Ljg1NyA2Ljg1NyAwIDAgMC00Ljg4LTExLjY3NFptLTUuMzU1IDYuODU3YTUuMzU1IDUuMzU1IDAgMSAxIDEwLjcxIDAgNS4zNTUgNS4zNTUgMCAwIDEtMTAuNzEgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Search = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-search',
        'staticon-Search',
        className
      ),
      ...props,
    })
);
Search.displayName = 'Search'

export default Search;
