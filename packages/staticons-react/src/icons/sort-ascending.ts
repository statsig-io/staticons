
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.102 4.33c.44-.44 1.151-.44 1.59 0l2.125 2.124a.625.625 0 1 1-.883.884l-1.412-1.411v9.447a.625.625 0 1 1-1.25 0V5.927l-1.41 1.41a.625.625 0 1 1-.883-.885l2.123-2.122ZM2.624 5.878a.625.625 0 0 1 0-1.25h3.38a.625.625 0 1 1 0 1.25h-3.38Zm0 3.5a.625.625 0 0 0 0 1.25h6.001a.625.625 0 0 0 0-1.25H2.624Zm-.625 5.375c0 .345.28.625.625.625h8.74a.625.625 0 0 0 0-1.25h-8.74a.625.625 0 0 0-.625.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name SortAscending
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMTAyIDQuMzNjLjQ0LS40NCAxLjE1MS0uNDQgMS41OSAwbDIuMTI1IDIuMTI0YS42MjUuNjI1IDAgMSAxLS44ODMuODg0bC0xLjQxMi0xLjQxMXY5LjQ0N2EuNjI1LjYyNSAwIDEgMS0xLjI1IDBWNS45MjdsLTEuNDEgMS40MWEuNjI1LjYyNSAwIDEgMS0uODgzLS44ODVsMi4xMjMtMi4xMjJaTTIuNjI0IDUuODc4YS42MjUuNjI1IDAgMCAxIDAtMS4yNWgzLjM4YS42MjUuNjI1IDAgMSAxIDAgMS4yNWgtMy4zOFptMCAzLjVhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDYuMDAxYS42MjUuNjI1IDAgMCAwIDAtMS4yNUgyLjYyNFptLS42MjUgNS4zNzVjMCAuMzQ1LjI4LjYyNS42MjUuNjI1aDguNzRhLjYyNS42MjUgMCAwIDAgMC0xLjI1aC04Ljc0YS42MjUuNjI1IDAgMCAwLS42MjUuNjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SortAscending = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort-ascending',
        'staticon-SortAscending',
        className
      ),
      ...props,
    })
);
SortAscending.displayName = 'SortAscending'

export default SortAscending;
