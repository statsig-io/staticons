
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.125 3.998c0-.345.28-.625.625-.625h7.237a.625.625 0 0 1 0 1.25H2.75a.625.625 0 0 1-.625-.625Zm.625 3.256a.625.625 0 1 1 0-1.25h4.062a.625.625 0 1 1 0 1.25H2.75Zm0 1.383a.625.625 0 1 0 0 1.25h3.083a.625.625 0 0 0 0-1.25H2.75Zm9.725-1.749a3.369 3.369 0 1 0 0 6.738 3.369 3.369 0 0 0 0-6.738Zm-4.619 3.37a4.62 4.62 0 1 1 7.842 3.308l1.994 1.994a.625.625 0 0 1-.884.884l-2.127-2.127a4.619 4.619 0 0 1-6.825-4.06Z","clip-rule":"evenodd"}]]

/**
 * @component @name EventExplorer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4xMjUgMy45OThjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNy4yMzdhLjYyNS42MjUgMCAwIDEgMCAxLjI1SDIuNzVhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1Wm0uNjI1IDMuMjU2YS42MjUuNjI1IDAgMSAxIDAtMS4yNWg0LjA2MmEuNjI1LjYyNSAwIDEgMSAwIDEuMjVIMi43NVptMCAxLjM4M2EuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMy4wODNhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDIuNzVabTkuNzI1LTEuNzQ5YTMuMzY5IDMuMzY5IDAgMSAwIDAgNi43MzggMy4zNjkgMy4zNjkgMCAwIDAgMC02LjczOFptLTQuNjE5IDMuMzdhNC42MiA0LjYyIDAgMSAxIDcuODQyIDMuMzA4bDEuOTk0IDEuOTk0YS42MjUuNjI1IDAgMCAxLS44ODQuODg0bC0yLjEyNy0yLjEyN2E0LjYxOSA0LjYxOSAwIDAgMS02LjgyNS00LjA2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EventExplorer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-event-explorer',
        'staticon-EventExplorer',
        className
      ),
      ...props,
    })
);
EventExplorer.displayName = 'EventExplorer'

export default EventExplorer;
