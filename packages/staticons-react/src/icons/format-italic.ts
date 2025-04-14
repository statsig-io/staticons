
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.179 4.376c0-.345.28-.625.625-.625h7.32a.625.625 0 1 1 0 1.25h-3.177l-2.603 9.997h2.852a.625.625 0 0 1 0 1.25H4.875a.625.625 0 1 1 0-1.25h3.177l2.604-9.997H7.804a.625.625 0 0 1-.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatItalic
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4xNzkgNC4zNzZjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNy4zMmEuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTMuMTc3bC0yLjYwMyA5Ljk5N2gyLjg1MmEuNjI1LjYyNSAwIDAgMSAwIDEuMjVINC44NzVhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDMuMTc3bDIuNjA0LTkuOTk3SDcuODA0YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
