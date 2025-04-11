
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M16.628 9.631a2.25 2.25 0 0 1-2.25-2.25V4.126a.75.75 0 0 1 1.5 0v3.255c0 .414.335.75.75.75h3.248a.75.75 0 0 1 0 1.5h-3.248ZM9.623 16.62a2.25 2.25 0 0 0-2.25-2.25H4.124a.75.75 0 0 0 0 1.5h3.249a.75.75 0 0 1 .75.75v3.254a.75.75 0 0 0 1.5 0v-3.255Zm4.754 0a2.25 2.25 0 0 1 2.25-2.25h3.25a.75.75 0 0 1 0 1.5h-3.25a.75.75 0 0 0-.75.75v3.254a.75.75 0 0 1-1.5 0v-3.255ZM9.623 7.381a2.25 2.25 0 0 1-2.25 2.25H4.125a.75.75 0 1 1 0-1.5h3.248a.75.75 0 0 0 .75-.75V4.126a.75.75 0 0 1 1.5 0v3.255Z"}]]

/**
 * @component @name ExitFullScreen
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE2LjYyOCA5LjYzMWEyLjI1IDIuMjUgMCAwIDEtMi4yNS0yLjI1VjQuMTI2YS43NS43NSAwIDAgMSAxLjUgMHYzLjI1NWMwIC40MTQuMzM1Ljc1Ljc1Ljc1aDMuMjQ4YS43NS43NSAwIDAgMSAwIDEuNWgtMy4yNDhaTTkuNjIzIDE2LjYyYTIuMjUgMi4yNSAwIDAgMC0yLjI1LTIuMjVINC4xMjRhLjc1Ljc1IDAgMCAwIDAgMS41aDMuMjQ5YS43NS43NSAwIDAgMSAuNzUuNzV2My4yNTRhLjc1Ljc1IDAgMCAwIDEuNSAwdi0zLjI1NVptNC43NTQgMGEyLjI1IDIuMjUgMCAwIDEgMi4yNS0yLjI1aDMuMjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0zLjI1YS43NS43NSAwIDAgMC0uNzUuNzV2My4yNTRhLjc1Ljc1IDAgMCAxLTEuNSAwdi0zLjI1NVpNOS42MjMgNy4zODFhMi4yNSAyLjI1IDAgMCAxLTIuMjUgMi4yNUg0LjEyNWEuNzUuNzUgMCAxIDEgMC0xLjVoMy4yNDhhLjc1Ljc1IDAgMCAwIC43NS0uNzVWNC4xMjZhLjc1Ljc1IDAgMCAxIDEuNSAwdjMuMjU1WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ExitFullScreen = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-exit-full-screen',
        'staticon-ExitFullScreen',
        className
      ),
      ...props,
    })
);
ExitFullScreen.displayName = 'ExitFullScreen'

export default ExitFullScreen;
