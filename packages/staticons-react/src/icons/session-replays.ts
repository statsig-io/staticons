
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M3 12a9 9 0 0 1 15.866-5.819V4.999a.75.75 0 0 1 1.5 0v2.5c0 .69-.56 1.25-1.25 1.25h-2.5a.75.75 0 0 1 0-1.5h1.188A7.5 7.5 0 1 0 19.5 12v-.235a.75.75 0 0 1 1.5-.045c.002.072 0 .16 0 .224V12a9 9 0 1 1-18 0Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.76 9.392c0-1.37 1.501-2.208 2.667-1.491l4.241 2.608a1.75 1.75 0 0 1 0 2.982l-4.24 2.608c-1.167.717-2.668-.122-2.668-1.49V9.391Zm1.881-.213a.25.25 0 0 0-.38.213v5.216a.25.25 0 0 0 .38.213l4.242-2.608a.25.25 0 0 0 0-.426L10.64 9.179Z","clip-rule":"evenodd"}]]

/**
 * @component @name SessionReplays
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTMgMTJhOSA5IDAgMCAxIDE1Ljg2Ni01LjgxOVY0Ljk5OWEuNzUuNzUgMCAwIDEgMS41IDB2Mi41YzAgLjY5LS41NiAxLjI1LTEuMjUgMS4yNWgtMi41YS43NS43NSAwIDAgMSAwLTEuNWgxLjE4OEE3LjUgNy41IDAgMSAwIDE5LjUgMTJ2LS4yMzVhLjc1Ljc1IDAgMCAxIDEuNS0uMDQ1Yy4wMDIuMDcyIDAgLjE2IDAgLjIyNFYxMmE5IDkgMCAxIDEtMTggMFoiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ljc2IDkuMzkyYzAtMS4zNyAxLjUwMS0yLjIwOCAyLjY2Ny0xLjQ5MWw0LjI0MSAyLjYwOGExLjc1IDEuNzUgMCAwIDEgMCAyLjk4MmwtNC4yNCAyLjYwOGMtMS4xNjcuNzE3LTIuNjY4LS4xMjItMi42NjgtMS40OVY5LjM5MVptMS44ODEtLjIxM2EuMjUuMjUgMCAwIDAtLjM4LjIxM3Y1LjIxNmEuMjUuMjUgMCAwIDAgLjM4LjIxM2w0LjI0Mi0yLjYwOGEuMjUuMjUgMCAwIDAgMC0uNDI2TDEwLjY0IDkuMTc5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SessionReplays = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-session-replays',
        'staticon-SessionReplays',
        className
      ),
      ...props,
    })
);
SessionReplays.displayName = 'SessionReplays'

export default SessionReplays;
