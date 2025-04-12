
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.5 3a.625.625 0 1 0 0 1.25h13a.625.625 0 1 0 0-1.25h-13Zm1.738 5c0-.344.28-.624.625-.624h8.274a.625.625 0 1 1 0 1.25H3.863A.625.625 0 0 1 3.238 8Zm2.021 4.376c0-.345.28-.625.625-.625h4.234a.625.625 0 0 1 0 1.25H5.884a.625.625 0 0 1-.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Filter
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS41IDNhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDEzYS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtMTNabTEuNzM4IDVjMC0uMzQ0LjI4LS42MjQuNjI1LS42MjRoOC4yNzRhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDMuODYzQS42MjUuNjI1IDAgMCAxIDMuMjM4IDhabTIuMDIxIDQuMzc2YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDQuMjM0YS42MjUuNjI1IDAgMCAxIDAgMS4yNUg1Ljg4NGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Filter = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-filter',
        'staticon-Filter',
        className
      ),
      ...props,
    })
);
Filter.displayName = 'Filter'

export default Filter;
