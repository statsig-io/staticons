
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M15.668 13.49a1.75 1.75 0 0 0 0-2.98l-4.24-2.61c-1.167-.716-2.668.123-2.668 1.492v5.216c0 1.369 1.501 2.208 2.667 1.49l4.241-2.607Zm-.785-1.703a.25.25 0 0 1 0 .426L10.64 14.82a.25.25 0 0 1-.38-.213V9.392a.25.25 0 0 1 .38-.213l4.242 2.608Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm1.5 0a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Run
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNjY4IDEzLjQ5YTEuNzUgMS43NSAwIDAgMCAwLTIuOThsLTQuMjQtMi42MWMtMS4xNjctLjcxNi0yLjY2OC4xMjMtMi42NjggMS40OTJ2NS4yMTZjMCAxLjM2OSAxLjUwMSAyLjIwOCAyLjY2NyAxLjQ5bDQuMjQxLTIuNjA3Wm0tLjc4NS0xLjcwM2EuMjUuMjUgMCAwIDEgMCAuNDI2TDEwLjY0IDE0LjgyYS4yNS4yNSAwIDAgMS0uMzgtLjIxM1Y5LjM5MmEuMjUuMjUgMCAwIDEgLjM4LS4yMTNsNC4yNDIgMi42MDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDEyYTkgOSAwIDEgMCAxOCAwIDkgOSAwIDAgMC0xOCAwWm0xLjUgMGE3LjUgNy41IDAgMSAwIDE1IDAgNy41IDcuNSAwIDAgMC0xNSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Run = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-run',
        'staticon-Run',
        className
      ),
      ...props,
    })
);
Run.displayName = 'Run'

export default Run;
