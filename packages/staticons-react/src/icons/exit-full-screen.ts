
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M13.88 8a1.875 1.875 0 0 1-1.874-1.875V3.373a.625.625 0 0 1 1.25 0v2.752c0 .345.28.625.625.625h2.744a.625.625 0 1 1 0 1.25h-2.744Zm-5.886 5.876C7.994 12.84 7.154 12 6.12 12H3.375a.625.625 0 1 0 0 1.25h2.744c.345 0 .625.28.625.625v2.752a.625.625 0 0 0 1.25 0v-2.752Zm4.012 0c0-1.036.84-1.875 1.875-1.875h2.744a.625.625 0 1 1 0 1.25h-2.744a.625.625 0 0 0-.625.625v2.752a.625.625 0 0 1-1.25 0v-2.752ZM7.995 6.125C7.995 7.161 7.155 8 6.12 8H3.375a.625.625 0 1 1 0-1.25H6.12c.345 0 .625-.28.625-.625V3.373a.625.625 0 0 1 1.25 0v2.752Z"}]]

/**
 * @component @name ExitFullScreen
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTEzLjg4IDhhMS44NzUgMS44NzUgMCAwIDEtMS44NzQtMS44NzVWMy4zNzNhLjYyNS42MjUgMCAwIDEgMS4yNSAwdjIuNzUyYzAgLjM0NS4yOC42MjUuNjI1LjYyNWgyLjc0NGEuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTIuNzQ0Wm0tNS44ODYgNS44NzZDNy45OTQgMTIuODQgNy4xNTQgMTIgNi4xMiAxMkgzLjM3NWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMi43NDRjLjM0NSAwIC42MjUuMjguNjI1LjYyNXYyLjc1MmEuNjI1LjYyNSAwIDAgMCAxLjI1IDB2LTIuNzUyWm00LjAxMiAwYzAtMS4wMzYuODQtMS44NzUgMS44NzUtMS44NzVoMi43NDRhLjYyNS42MjUgMCAxIDEgMCAxLjI1aC0yLjc0NGEuNjI1LjYyNSAwIDAgMC0uNjI1LjYyNXYyLjc1MmEuNjI1LjYyNSAwIDAgMS0xLjI1IDB2LTIuNzUyWk03Ljk5NSA2LjEyNUM3Ljk5NSA3LjE2MSA3LjE1NSA4IDYuMTIgOEgzLjM3NWEuNjI1LjYyNSAwIDEgMSAwLTEuMjVINi4xMmMuMzQ1IDAgLjYyNS0uMjguNjI1LS42MjVWMy4zNzNhLjYyNS42MjUgMCAwIDEgMS4yNSAwdjIuNzUyWiIvPgo8L3N2Zz4K)
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
