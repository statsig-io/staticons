
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.102 15.67c.44.44 1.151.44 1.59 0l2.125-2.124a.625.625 0 0 0-.883-.884l-1.412 1.411V4.626a.625.625 0 1 0-1.25 0v9.447l-1.41-1.41a.625.625 0 1 0-.883.885l2.123 2.123ZM2.624 14.123a.625.625 0 0 0 0 1.25h3.38a.625.625 0 1 0 0-1.25h-3.38Zm0-3.5a.625.625 0 1 1 0-1.25h6.001a.625.625 0 0 1 0 1.25H2.624Zm-.625-5.375c0-.345.28-.625.625-.625h8.74a.625.625 0 1 1 0 1.25h-8.74a.625.625 0 0 1-.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name SortDescending
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMTAyIDE1LjY3Yy40NC40NCAxLjE1MS40NCAxLjU5IDBsMi4xMjUtMi4xMjRhLjYyNS42MjUgMCAwIDAtLjg4My0uODg0bC0xLjQxMiAxLjQxMVY0LjYyNmEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2OS40NDdsLTEuNDEtMS40MWEuNjI1LjYyNSAwIDEgMC0uODgzLjg4NWwyLjEyMyAyLjEyM1pNMi42MjQgMTQuMTIzYS42MjUuNjI1IDAgMCAwIDAgMS4yNWgzLjM4YS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtMy4zOFptMC0zLjVhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDYuMDAxYS42MjUuNjI1IDAgMCAxIDAgMS4yNUgyLjYyNFptLS42MjUtNS4zNzVjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoOC43NGEuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTguNzRhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SortDescending = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort-descending',
        'staticon-SortDescending',
        className
      ),
      ...props,
    })
);
SortDescending.displayName = 'SortDescending'

export default SortDescending;
