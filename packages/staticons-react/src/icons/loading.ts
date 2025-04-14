
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.481 3.872a6.625 6.625 0 1 0 8.036 2.457.625.625 0 0 1 1.04-.692 7.875 7.875 0 1 1-7.47-3.461 10.33 10.33 0 0 1 1.027-.053.625.625 0 1 1 .003 1.25c-.26 0-.643.016-.884.045a6.631 6.631 0 0 0-1.752.454Z","clip-rule":"evenodd"}]]

/**
 * @component @name Loading
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy40ODEgMy44NzJhNi42MjUgNi42MjUgMCAxIDAgOC4wMzYgMi40NTcuNjI1LjYyNSAwIDAgMSAxLjA0LS42OTIgNy44NzUgNy44NzUgMCAxIDEtNy40Ny0zLjQ2MSAxMC4zMyAxMC4zMyAwIDAgMSAxLjAyNy0uMDUzLjYyNS42MjUgMCAxIDEgLjAwMyAxLjI1Yy0uMjYgMC0uNjQzLjAxNi0uODg0LjA0NWE2LjYzMSA2LjYzMSAwIDAgMC0xLjc1Mi40NTRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Loading = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-loading',
        'staticon-Loading',
        className
      ),
      ...props,
    })
);
Loading.displayName = 'Loading'

export default Loading;
