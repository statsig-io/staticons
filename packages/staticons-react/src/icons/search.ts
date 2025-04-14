
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.202 2.75a6.077 6.077 0 1 0 3.403 11.114l3.203 3.203a.625.625 0 1 0 .884-.884l-3.126-3.126A6.077 6.077 0 0 0 9.202 2.75ZM4.375 8.827a4.827 4.827 0 1 1 9.655 0 4.827 4.827 0 0 1-9.655 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Search
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4yMDIgMi43NWE2LjA3NyA2LjA3NyAwIDEgMCAzLjQwMyAxMS4xMTRsMy4yMDMgMy4yMDNhLjYyNS42MjUgMCAxIDAgLjg4NC0uODg0bC0zLjEyNi0zLjEyNkE2LjA3NyA2LjA3NyAwIDAgMCA5LjIwMiAyLjc1Wk00LjM3NSA4LjgyN2E0LjgyNyA0LjgyNyAwIDEgMSA5LjY1NSAwIDQuODI3IDQuODI3IDAgMCAxLTkuNjU1IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
