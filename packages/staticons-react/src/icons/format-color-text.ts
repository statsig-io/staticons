
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.142 4.489c-.441-.987-1.841-.987-2.283 0L7.513 11.97l-1.69 3.78a.75.75 0 1 0 1.368.612l1.492-3.335h6.635l1.492 3.335a.75.75 0 0 0 1.369-.612l-1.69-3.78-3.349-7.48ZM12 5.61l2.646 5.917H9.354l2.647-5.917ZM5.124 18.75a.75.75 0 0 0 0 1.5h13.75a.75.75 0 0 0 0-1.5H5.125Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatColorText
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTQyIDQuNDg5Yy0uNDQxLS45ODctMS44NDEtLjk4Ny0yLjI4MyAwTDcuNTEzIDExLjk3bC0xLjY5IDMuNzhhLjc1Ljc1IDAgMSAwIDEuMzY4LjYxMmwxLjQ5Mi0zLjMzNWg2LjYzNWwxLjQ5MiAzLjMzNWEuNzUuNzUgMCAwIDAgMS4zNjktLjYxMmwtMS42OS0zLjc4LTMuMzQ5LTcuNDhaTTEyIDUuNjFsMi42NDYgNS45MTdIOS4zNTRsMi42NDctNS45MTdaTTUuMTI0IDE4Ljc1YS43NS43NSAwIDAgMCAwIDEuNWgxMy43NWEuNzUuNzUgMCAwIDAgMC0xLjVINS4xMjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatColorText = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-color-text',
        'staticon-FormatColorText',
        className
      ),
      ...props,
    })
);
FormatColorText.displayName = 'FormatColorText'

export default FormatColorText;
