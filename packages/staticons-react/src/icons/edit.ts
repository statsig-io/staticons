
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m14.141 6.92 1.055-1.055a1.25 1.25 0 0 1 1.768 0l1.172 1.171a1.25 1.25 0 0 1 0 1.768L17.08 9.859l-2.94-2.94Zm-1.06 1.06-6.892 6.892a.25.25 0 0 0-.069.13l-.616 3.201a.25.25 0 0 0 .293.293L9 17.88a.25.25 0 0 0 .13-.069l6.89-6.892-2.938-2.939Zm1.055-3.176L5.128 13.81a1.75 1.75 0 0 0-.48.907L4.03 17.92a1.75 1.75 0 0 0 2.05 2.05l3.201-.617a1.75 1.75 0 0 0 .907-.481l9.007-9.007a2.75 2.75 0 0 0 0-3.89l-1.171-1.171a2.75 2.75 0 0 0-3.89 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Edit
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTQuMTQxIDYuOTIgMS4wNTUtMS4wNTVhMS4yNSAxLjI1IDAgMCAxIDEuNzY4IDBsMS4xNzIgMS4xNzFhMS4yNSAxLjI1IDAgMCAxIDAgMS43NjhMMTcuMDggOS44NTlsLTIuOTQtMi45NFptLTEuMDYgMS4wNi02Ljg5MiA2Ljg5MmEuMjUuMjUgMCAwIDAtLjA2OS4xM2wtLjYxNiAzLjIwMWEuMjUuMjUgMCAwIDAgLjI5My4yOTNMOSAxNy44OGEuMjUuMjUgMCAwIDAgLjEzLS4wNjlsNi44OS02Ljg5Mi0yLjkzOC0yLjkzOVptMS4wNTUtMy4xNzZMNS4xMjggMTMuODFhMS43NSAxLjc1IDAgMCAwLS40OC45MDdMNC4wMyAxNy45MmExLjc1IDEuNzUgMCAwIDAgMi4wNSAyLjA1bDMuMjAxLS42MTdhMS43NSAxLjc1IDAgMCAwIC45MDctLjQ4MWw5LjAwNy05LjAwN2EyLjc1IDIuNzUgMCAwIDAgMC0zLjg5bC0xLjE3MS0xLjE3MWEyLjc1IDIuNzUgMCAwIDAtMy44OSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Edit = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-edit',
        'staticon-Edit',
        className
      ),
      ...props,
    })
);
Edit.displayName = 'Edit'

export default Edit;
