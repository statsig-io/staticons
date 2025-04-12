
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.317 1.624a5.317 5.317 0 1 0 2.853 9.804l2.764 2.764a.624.624 0 0 0 .883-.883l-2.675-2.675a5.317 5.317 0 0 0-3.825-9.01ZM3.249 6.941a4.068 4.068 0 1 1 8.136 0 4.068 4.068 0 0 1-8.136 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Search
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4zMTcgMS42MjRhNS4zMTcgNS4zMTcgMCAxIDAgMi44NTMgOS44MDRsMi43NjQgMi43NjRhLjYyNC42MjQgMCAwIDAgLjg4My0uODgzbC0yLjY3NS0yLjY3NWE1LjMxNyA1LjMxNyAwIDAgMC0zLjgyNS05LjAxWk0zLjI0OSA2Ljk0MWE0LjA2OCA0LjA2OCAwIDEgMSA4LjEzNiAwIDQuMDY4IDQuMDY4IDAgMCAxLTguMTM2IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
