
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M11.432 6.198a1.625 1.625 0 0 1-1.625-1.625v-2.7a.625.625 0 0 1 1.25 0v2.7c0 .207.168.375.375.375h2.693a.625.625 0 1 1 0 1.25h-2.693Zm-5.239 5.229c0-.898-.728-1.625-1.625-1.625H1.875a.625.625 0 0 0 0 1.25h2.693c.207 0 .375.168.375.375v2.7a.625.625 0 0 0 1.25 0v-2.7Zm3.614 0c0-.898.728-1.625 1.625-1.625h2.693a.625.625 0 1 1 0 1.25h-2.693a.375.375 0 0 0-.375.375v2.7a.625.625 0 0 1-1.25 0v-2.7ZM6.193 4.573c0 .897-.727 1.625-1.625 1.625H1.875a.625.625 0 1 1 0-1.25h2.693a.375.375 0 0 0 .375-.375v-2.7a.625.625 0 1 1 1.25 0v2.7Z"}]]

/**
 * @component @name ExitFullScreen
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjQzMiA2LjE5OGExLjYyNSAxLjYyNSAwIDAgMS0xLjYyNS0xLjYyNXYtMi43YS42MjUuNjI1IDAgMCAxIDEuMjUgMHYyLjdjMCAuMjA3LjE2OC4zNzUuMzc1LjM3NWgyLjY5M2EuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTIuNjkzWm0tNS4yMzkgNS4yMjljMC0uODk4LS43MjgtMS42MjUtMS42MjUtMS42MjVIMS44NzVhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDIuNjkzYy4yMDcgMCAuMzc1LjE2OC4zNzUuMzc1djIuN2EuNjI1LjYyNSAwIDAgMCAxLjI1IDB2LTIuN1ptMy42MTQgMGMwLS44OTguNzI4LTEuNjI1IDEuNjI1LTEuNjI1aDIuNjkzYS42MjUuNjI1IDAgMSAxIDAgMS4yNWgtMi42OTNhLjM3NS4zNzUgMCAwIDAtLjM3NS4zNzV2Mi43YS42MjUuNjI1IDAgMCAxLTEuMjUgMHYtMi43Wk02LjE5MyA0LjU3M2MwIC44OTctLjcyNyAxLjYyNS0xLjYyNSAxLjYyNUgxLjg3NWEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMi42OTNhLjM3NS4zNzUgMCAwIDAgLjM3NS0uMzc1di0yLjdhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjIuN1oiLz4KPC9zdmc+Cg==)
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
