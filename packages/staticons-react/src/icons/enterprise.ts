
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.766 3.999a2.25 2.25 0 0 0-1.83.943L3.55 8.28a2.278 2.278 0 0 0 .087 2.762l6.623 8.129a2.245 2.245 0 0 0 3.487 0l6.618-8.13a2.278 2.278 0 0 0 .087-2.76l-2.384-3.337a2.25 2.25 0 0 0-1.83-.945H7.766Zm5.438 1.512 1.214 3.393H9.582l1.214-3.393h2.408Zm1.226 4.905H9.57L12 16.972l2.43-6.556Zm-.819 6.535 2.4-6.473a2.01 2.01 0 0 0 .022-.062h2.898l-5.32 6.535Zm2.404-8.047L14.8 5.511h1.438a.75.75 0 0 1 .61.314l2.199 3.08h-3.032ZM9.199 5.511 7.985 8.904h-3.03l2.202-3.079a.75.75 0 0 1 .61-.314h1.432Zm-1.21 4.968a2.243 2.243 0 0 1-.022-.063H5.07l5.314 6.522-2.395-6.46Z","clip-rule":"evenodd"}]]

/**
 * @component @name Enterprise
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy43NjYgMy45OTlhMi4yNSAyLjI1IDAgMCAwLTEuODMuOTQzTDMuNTUgOC4yOGEyLjI3OCAyLjI3OCAwIDAgMCAuMDg3IDIuNzYybDYuNjIzIDguMTI5YTIuMjQ1IDIuMjQ1IDAgMCAwIDMuNDg3IDBsNi42MTgtOC4xM2EyLjI3OCAyLjI3OCAwIDAgMCAuMDg3LTIuNzZsLTIuMzg0LTMuMzM3YTIuMjUgMi4yNSAwIDAgMC0xLjgzLS45NDVINy43NjZabTUuNDM4IDEuNTEyIDEuMjE0IDMuMzkzSDkuNTgybDEuMjE0LTMuMzkzaDIuNDA4Wm0xLjIyNiA0LjkwNUg5LjU3TDEyIDE2Ljk3MmwyLjQzLTYuNTU2Wm0tLjgxOSA2LjUzNSAyLjQtNi40NzNhMi4wMSAyLjAxIDAgMCAwIC4wMjItLjA2MmgyLjg5OGwtNS4zMiA2LjUzNVptMi40MDQtOC4wNDdMMTQuOCA1LjUxMWgxLjQzOGEuNzUuNzUgMCAwIDEgLjYxLjMxNGwyLjE5OSAzLjA4aC0zLjAzMlpNOS4xOTkgNS41MTEgNy45ODUgOC45MDRoLTMuMDNsMi4yMDItMy4wNzlhLjc1Ljc1IDAgMCAxIC42MS0uMzE0aDEuNDMyWm0tMS4yMSA0Ljk2OGEyLjI0MyAyLjI0MyAwIDAgMS0uMDIyLS4wNjNINS4wN2w1LjMxNCA2LjUyMi0yLjM5NS02LjQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Enterprise = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-enterprise',
        'staticon-Enterprise',
        className
      ),
      ...props,
    })
);
Enterprise.displayName = 'Enterprise'

export default Enterprise;
