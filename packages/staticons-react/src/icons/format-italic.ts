
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.625 5.252a.75.75 0 0 1 .75-.75h8.749a.75.75 0 0 1 0 1.5H14.33l-3.111 11.997h3.405a.75.75 0 1 1 0 1.5H5.875a.75.75 0 0 1 0-1.5h3.794L12.78 6.002H9.375a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatItalic
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42MjUgNS4yNTJhLjc1Ljc1IDAgMCAxIC43NS0uNzVoOC43NDlhLjc1Ljc1IDAgMCAxIDAgMS41SDE0LjMzbC0zLjExMSAxMS45OTdoMy40MDVhLjc1Ljc1IDAgMSAxIDAgMS41SDUuODc1YS43NS43NSAwIDAgMSAwLTEuNWgzLjc5NEwxMi43OCA2LjAwMkg5LjM3NWEuNzUuNzUgMCAwIDEtLjc1LS43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
