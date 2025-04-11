
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.877 11.123a4.123 4.123 0 1 0 8.246 0V4.5a.75.75 0 0 1 1.5 0v6.623a5.623 5.623 0 1 1-11.246 0V4.5a.75.75 0 1 1 1.5 0v6.623ZM5.125 18.75a.75.75 0 0 0 0 1.5h13.75a.75.75 0 0 0 0-1.5H5.125Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatUnderlined
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44NzcgMTEuMTIzYTQuMTIzIDQuMTIzIDAgMSAwIDguMjQ2IDBWNC41YS43NS43NSAwIDAgMSAxLjUgMHY2LjYyM2E1LjYyMyA1LjYyMyAwIDEgMS0xMS4yNDYgMFY0LjVhLjc1Ljc1IDAgMSAxIDEuNSAwdjYuNjIzWk01LjEyNSAxOC43NWEuNzUuNzUgMCAwIDAgMCAxLjVoMTMuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDUuMTI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
