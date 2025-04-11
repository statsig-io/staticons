
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M14.385 11.266a.754.754 0 0 1-1.06 0L10.03 7.992a.742.742 0 0 1 0-1.054l3.294-3.273a.753.753 0 0 1 1.061 0 .742.742 0 0 1 0 1.054L12.372 6.72H19.5c.414 0 .75.334.75.745a.748.748 0 0 1-.75.746h-7.128l2.013 2a.742.742 0 0 1 0 1.055Zm-3.709 1.362a.754.754 0 0 0-1.061 0 .742.742 0 0 0 0 1.054l2.013 2.001H4.5a.748.748 0 0 0-.75.745c0 .412.336.746.75.746h7.128l-2.013 2a.742.742 0 0 0 0 1.055.753.753 0 0 0 1.06 0l3.295-3.274a.742.742 0 0 0 0-1.054l-3.294-3.273Z"}]]

/**
 * @component @name Compare
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE0LjM4NSAxMS4yNjZhLjc1NC43NTQgMCAwIDEtMS4wNiAwTDEwLjAzIDcuOTkyYS43NDIuNzQyIDAgMCAxIDAtMS4wNTRsMy4yOTQtMy4yNzNhLjc1My43NTMgMCAwIDEgMS4wNjEgMCAuNzQyLjc0MiAwIDAgMSAwIDEuMDU0TDEyLjM3MiA2LjcySDE5LjVjLjQxNCAwIC43NS4zMzQuNzUuNzQ1YS43NDguNzQ4IDAgMCAxLS43NS43NDZoLTcuMTI4bDIuMDEzIDJhLjc0Mi43NDIgMCAwIDEgMCAxLjA1NVptLTMuNzA5IDEuMzYyYS43NTQuNzU0IDAgMCAwLTEuMDYxIDAgLjc0Mi43NDIgMCAwIDAgMCAxLjA1NGwyLjAxMyAyLjAwMUg0LjVhLjc0OC43NDggMCAwIDAtLjc1Ljc0NWMwIC40MTIuMzM2Ljc0Ni43NS43NDZoNy4xMjhsLTIuMDEzIDJhLjc0Mi43NDIgMCAwIDAgMCAxLjA1NS43NTMuNzUzIDAgMCAwIDEuMDYgMGwzLjI5NS0zLjI3NGEuNzQyLjc0MiAwIDAgMCAwLTEuMDU0bC0zLjI5NC0zLjI3M1oiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Compare = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-compare',
        'staticon-Compare',
        className
      ),
      ...props,
    })
);
Compare.displayName = 'Compare'

export default Compare;
