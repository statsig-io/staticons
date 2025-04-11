
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.887 3.808a2.75 2.75 0 0 0-2.483-.752l-4.326.863a2.75 2.75 0 0 0-2.159 2.159l-.863 4.326a2.75 2.75 0 0 0 .752 2.482l7.562 7.562a2.75 2.75 0 0 0 3.89 0l5.188-5.189a2.75 2.75 0 0 0 0-3.889l-7.561-7.562Zm-2.19.719a1.25 1.25 0 0 1 1.13.342l7.56 7.562a1.25 1.25 0 0 1 0 1.767l-5.189 5.19a1.25 1.25 0 0 1-1.767 0l-7.562-7.562a1.25 1.25 0 0 1-.342-1.129l.863-4.325a1.25 1.25 0 0 1 .982-.982l4.326-.863Zm-2.355 5.07A.887.887 0 1 0 9.596 8.34a.887.887 0 0 0-1.254 1.255Zm2.315 1.06A2.387 2.387 0 1 1 7.281 7.28a2.387 2.387 0 0 1 3.376 3.376Z","clip-rule":"evenodd"}]]

/**
 * @component @name Tag
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuODg3IDMuODA4YTIuNzUgMi43NSAwIDAgMC0yLjQ4My0uNzUybC00LjMyNi44NjNhMi43NSAyLjc1IDAgMCAwLTIuMTU5IDIuMTU5bC0uODYzIDQuMzI2YTIuNzUgMi43NSAwIDAgMCAuNzUyIDIuNDgybDcuNTYyIDcuNTYyYTIuNzUgMi43NSAwIDAgMCAzLjg5IDBsNS4xODgtNS4xODlhMi43NSAyLjc1IDAgMCAwIDAtMy44ODlsLTcuNTYxLTcuNTYyWm0tMi4xOS43MTlhMS4yNSAxLjI1IDAgMCAxIDEuMTMuMzQybDcuNTYgNy41NjJhMS4yNSAxLjI1IDAgMCAxIDAgMS43NjdsLTUuMTg5IDUuMTlhMS4yNSAxLjI1IDAgMCAxLTEuNzY3IDBsLTcuNTYyLTcuNTYyYTEuMjUgMS4yNSAwIDAgMS0uMzQyLTEuMTI5bC44NjMtNC4zMjVhMS4yNSAxLjI1IDAgMCAxIC45ODItLjk4Mmw0LjMyNi0uODYzWm0tMi4zNTUgNS4wN0EuODg3Ljg4NyAwIDEgMCA5LjU5NiA4LjM0YS44ODcuODg3IDAgMCAwLTEuMjU0IDEuMjU1Wm0yLjMxNSAxLjA2QTIuMzg3IDIuMzg3IDAgMSAxIDcuMjgxIDcuMjhhMi4zODcgMi4zODcgMCAwIDEgMy4zNzYgMy4zNzZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Tag = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-tag',
        'staticon-Tag',
        className
      ),
      ...props,
    })
);
Tag.displayName = 'Tag'

export default Tag;
