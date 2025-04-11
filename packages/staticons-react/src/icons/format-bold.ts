
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.877 5.001a.75.75 0 0 1 .75-.75H11.8a4.12 4.12 0 0 1 3.058 6.884 4.38 4.38 0 0 1-1.112 8.614h-7.12a.75.75 0 0 1-.739-.874.755.755 0 0 1-.01-.122v-7a.735.735 0 0 1 0-.022V5Zm1.5.75v5.241h4.462a2.62 2.62 0 0 0-.039-5.241H7.377Zm0 6.741v5.757h6.369a2.878 2.878 0 0 0 0-5.757H7.377Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatBold
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS44NzcgNS4wMDFhLjc1Ljc1IDAgMCAxIC43NS0uNzVIMTEuOGE0LjEyIDQuMTIgMCAwIDEgMy4wNTggNi44ODQgNC4zOCA0LjM4IDAgMCAxLTEuMTEyIDguNjE0aC03LjEyYS43NS43NSAwIDAgMS0uNzM5LS44NzQuNzU1Ljc1NSAwIDAgMS0uMDEtLjEyMnYtN2EuNzM1LjczNSAwIDAgMSAwLS4wMjJWNVptMS41Ljc1djUuMjQxaDQuNDYyYTIuNjIgMi42MiAwIDAgMC0uMDM5LTUuMjQxSDcuMzc3Wm0wIDYuNzQxdjUuNzU3aDYuMzY5YTIuODc4IDIuODc4IDAgMCAwIDAtNS43NTdINy4zNzdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatBold = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-bold',
        'staticon-FormatBold',
        className
      ),
      ...props,
    })
);
FormatBold.displayName = 'FormatBold'

export default FormatBold;
