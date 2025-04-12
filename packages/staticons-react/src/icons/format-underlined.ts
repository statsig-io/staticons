
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.964 7.343a3.035 3.035 0 1 0 6.07 0V2.37a.625.625 0 1 1 1.25 0v4.974a4.285 4.285 0 0 1-8.57 0V2.37a.625.625 0 1 1 1.25 0v4.974ZM2.751 13a.625.625 0 1 0 0 1.25h10.498a.625.625 0 1 0 0-1.25H2.751Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatUnderlined
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC45NjQgNy4zNDNhMy4wMzUgMy4wMzUgMCAxIDAgNi4wNyAwVjIuMzdhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjQuOTc0YTQuMjg1IDQuMjg1IDAgMCAxLTguNTcgMFYyLjM3YS42MjUuNjI1IDAgMSAxIDEuMjUgMHY0Ljk3NFpNMi43NTEgMTNhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDEwLjQ5OGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMi43NTFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatUnderlined = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-underlined',
        'staticon-FormatUnderlined',
        className
      ),
      ...props,
    })
);
FormatUnderlined.displayName = 'FormatUnderlined'

export default FormatUnderlined;
