
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10.488 2.249c.567 0 1.11.226 1.509.629l1.942 1.958c.395.398.616.935.616 1.496v3.219a3.932 3.932 0 0 1 1.234 5.732l1.402 1.402a.625.625 0 1 1-.884.883l-1.404-1.404a3.915 3.915 0 0 1-2.294.738 3.916 3.916 0 0 1-2.374-.797H4.75a2.125 2.125 0 0 1-2.125-2.125V4.374c0-1.174.951-2.125 2.125-2.125h5.737ZM9.156 14.855a3.933 3.933 0 0 1 4.149-5.758V6.333a.875.875 0 0 0-.253-.616l-1.943-1.958a.875.875 0 0 0-.62-.259H4.75a.875.875 0 0 0-.875.875v9.606c0 .483.392.875.875.875h4.405Zm3.453-4.569a2.683 2.683 0 1 0 0 5.366 2.683 2.683 0 0 0 0-5.366Z","clip-rule":"evenodd"}]]

/**
 * @component @name Inspect
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNDg4IDIuMjQ5Yy41NjcgMCAxLjExLjIyNiAxLjUwOS42MjlsMS45NDIgMS45NThjLjM5NS4zOTguNjE2LjkzNS42MTYgMS40OTZ2My4yMTlhMy45MzIgMy45MzIgMCAwIDEgMS4yMzQgNS43MzJsMS40MDIgMS40MDJhLjYyNS42MjUgMCAxIDEtLjg4NC44ODNsLTEuNDA0LTEuNDA0YTMuOTE1IDMuOTE1IDAgMCAxLTIuMjk0LjczOCAzLjkxNiAzLjkxNiAwIDAgMS0yLjM3NC0uNzk3SDQuNzVhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUtMi4xMjVWNC4zNzRjMC0xLjE3NC45NTEtMi4xMjUgMi4xMjUtMi4xMjVoNS43MzdaTTkuMTU2IDE0Ljg1NWEzLjkzMyAzLjkzMyAwIDAgMSA0LjE0OS01Ljc1OFY2LjMzM2EuODc1Ljg3NSAwIDAgMC0uMjUzLS42MTZsLTEuOTQzLTEuOTU4YS44NzUuODc1IDAgMCAwLS42Mi0uMjU5SDQuNzVhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2OS42MDZjMCAuNDgzLjM5Mi44NzUuODc1Ljg3NWg0LjQwNVptMy40NTMtNC41NjlhMi42ODMgMi42ODMgMCAxIDAgMCA1LjM2NiAyLjY4MyAyLjY4MyAwIDAgMCAwLTUuMzY2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Inspect = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-inspect',
        'staticon-Inspect',
        className
      ),
      ...props,
    })
);
Inspect.displayName = 'Inspect'

export default Inspect;
