
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.002 7.248a4.249 4.249 0 1 1 8.498.001 4.249 4.249 0 0 1-8.498-.001ZM7.25 4.5a2.749 2.749 0 1 0 0 5.497 2.749 2.749 0 0 0 0-5.497Zm11.616 1.493v2.443l.84-.84a.75.75 0 1 1 1.061 1.06l-2.121 2.121a.75.75 0 0 1-1.06 0l-2.122-2.121a.75.75 0 0 1 1.06-1.06l.842.84V5.994c0-.69-.56-1.25-1.25-1.25H13.75a.75.75 0 0 1 0-1.5h2.367a2.75 2.75 0 0 1 2.75 2.75ZM5.14 15.551l-.84.84a.75.75 0 1 1-1.062-1.06L5.36 13.21a.75.75 0 0 1 1.06 0l2.122 2.121a.75.75 0 0 1-1.06 1.06l-.842-.84v2.442c0 .69.56 1.25 1.25 1.25h2.367a.75.75 0 0 1 0 1.5H7.89a2.75 2.75 0 0 1-2.75-2.75v-2.442ZM16.75 12.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM14 16.75a2.75 2.75 0 1 1 5.5.001 2.75 2.75 0 0 1-5.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Conversion
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4wMDIgNy4yNDhhNC4yNDkgNC4yNDkgMCAxIDEgOC40OTguMDAxIDQuMjQ5IDQuMjQ5IDAgMCAxLTguNDk4LS4wMDFaTTcuMjUgNC41YTIuNzQ5IDIuNzQ5IDAgMSAwIDAgNS40OTcgMi43NDkgMi43NDkgMCAwIDAgMC01LjQ5N1ptMTEuNjE2IDEuNDkzdjIuNDQzbC44NC0uODRhLjc1Ljc1IDAgMSAxIDEuMDYxIDEuMDZsLTIuMTIxIDIuMTIxYS43NS43NSAwIDAgMS0xLjA2IDBsLTIuMTIyLTIuMTIxYS43NS43NSAwIDAgMSAxLjA2LTEuMDZsLjg0Mi44NFY1Ljk5NGMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVIMTMuNzVhLjc1Ljc1IDAgMCAxIDAtMS41aDIuMzY3YTIuNzUgMi43NSAwIDAgMSAyLjc1IDIuNzVaTTUuMTQgMTUuNTUxbC0uODQuODRhLjc1Ljc1IDAgMSAxLTEuMDYyLTEuMDZMNS4zNiAxMy4yMWEuNzUuNzUgMCAwIDEgMS4wNiAwbDIuMTIyIDIuMTIxYS43NS43NSAwIDAgMS0xLjA2IDEuMDZsLS44NDItLjg0djIuNDQyYzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aDIuMzY3YS43NS43NSAwIDAgMSAwIDEuNUg3Ljg5YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzV2LTIuNDQyWk0xNi43NSAxMi41YTQuMjUgNC4yNSAwIDEgMCAwIDguNSA0LjI1IDQuMjUgMCAwIDAgMC04LjVaTTE0IDE2Ljc1YTIuNzUgMi43NSAwIDEgMSA1LjUuMDAxIDIuNzUgMi43NSAwIDAgMS01LjUgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Conversion = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-conversion',
        'staticon-Conversion',
        className
      ),
      ...props,
    })
);
Conversion.displayName = 'Conversion'

export default Conversion;
