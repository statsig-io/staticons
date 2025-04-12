
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.392 2.877c0-.345.28-.625.625-.625h6.609a.625.625 0 1 1 0 1.25h-2.82l-2.321 8.995h2.498a.625.625 0 1 1 0 1.25H3.374a.625.625 0 1 1 0-1.25h2.82l2.321-8.995H6.017a.625.625 0 0 1-.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatItalic
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4zOTIgMi44NzdjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNi42MDlhLjYyNS42MjUgMCAxIDEgMCAxLjI1aC0yLjgybC0yLjMyMSA4Ljk5NWgyLjQ5OGEuNjI1LjYyNSAwIDEgMSAwIDEuMjVIMy4zNzRhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDIuODJsMi4zMjEtOC45OTVINi4wMTdhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatItalic = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-italic',
        'staticon-FormatItalic',
        className
      ),
      ...props,
    })
);
FormatItalic.displayName = 'FormatItalic'

export default FormatItalic;
