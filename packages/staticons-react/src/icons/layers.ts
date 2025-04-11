
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m12.285 4.841 7 4.85a.5.5 0 0 1 0 .823l-7 4.85a.5.5 0 0 1-.57 0l-7-4.85a.5.5 0 0 1 0-.822l7-4.85a.5.5 0 0 1 .57 0Zm-1.424-1.233a2 2 0 0 1 2.278 0l7 4.85a2 2 0 0 1 0 3.289l-7 4.85a2 2 0 0 1-2.278 0l-7-4.85a2 2 0 0 1 0-3.288l7-4.85Zm-6.68 10.384a.75.75 0 0 0-.854 1.233l7.393 5.123a2.25 2.25 0 0 0 2.563 0l7.392-5.122a.75.75 0 0 0-.855-1.234l-7.392 5.123a.75.75 0 0 1-.854 0l-7.392-5.122Z","clip-rule":"evenodd"}]]

/**
 * @component @name Layers
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIuMjg1IDQuODQxIDcgNC44NWEuNS41IDAgMCAxIDAgLjgyM2wtNyA0Ljg1YS41LjUgMCAwIDEtLjU3IDBsLTctNC44NWEuNS41IDAgMCAxIDAtLjgyMmw3LTQuODVhLjUuNSAwIDAgMSAuNTcgMFptLTEuNDI0LTEuMjMzYTIgMiAwIDAgMSAyLjI3OCAwbDcgNC44NWEyIDIgMCAwIDEgMCAzLjI4OWwtNyA0Ljg1YTIgMiAwIDAgMS0yLjI3OCAwbC03LTQuODVhMiAyIDAgMCAxIDAtMy4yODhsNy00Ljg1Wm0tNi42OCAxMC4zODRhLjc1Ljc1IDAgMCAwLS44NTQgMS4yMzNsNy4zOTMgNS4xMjNhMi4yNSAyLjI1IDAgMCAwIDIuNTYzIDBsNy4zOTItNS4xMjJhLjc1Ljc1IDAgMCAwLS44NTUtMS4yMzRsLTcuMzkyIDUuMTIzYS43NS43NSAwIDAgMS0uODU0IDBsLTcuMzkyLTUuMTIyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Layers = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-layers',
        'staticon-Layers',
        className
      ),
      ...props,
    })
);
Layers.displayName = 'Layers'

export default Layers;
