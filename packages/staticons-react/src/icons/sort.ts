
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.499 3a.625.625 0 0 0 0 1.25H14.5a.625.625 0 1 0 0-1.25h-13ZM.874 8c0-.344.28-.624.625-.624h8.274a.625.625 0 0 1 0 1.25H1.5A.625.625 0 0 1 .874 8Zm0 4.376c0-.345.28-.625.625-.625h4.234a.625.625 0 1 1 0 1.25H1.5a.625.625 0 0 1-.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Sort
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS40OTkgM2EuNjI1LjYyNSAwIDAgMCAwIDEuMjVIMTQuNWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTEzWk0uODc0IDhjMC0uMzQ0LjI4LS42MjQuNjI1LS42MjRoOC4yNzRhLjYyNS42MjUgMCAwIDEgMCAxLjI1SDEuNUEuNjI1LjYyNSAwIDAgMSAuODc0IDhabTAgNC4zNzZjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNC4yMzRhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDEuNWEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Sort = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort',
        'staticon-Sort',
        className
      ),
      ...props,
    })
);
Sort.displayName = 'Sort'

export default Sort;
