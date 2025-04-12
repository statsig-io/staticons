
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M.625 2.377c0-.345.28-.625.625-.625h6.777a.625.625 0 0 1 0 1.25H1.25a.625.625 0 0 1-.625-.625Zm.625 3.09a.625.625 0 0 1 0-1.25h3.804a.625.625 0 0 1 0 1.25H1.25Zm0 1.214a.625.625 0 0 0 0 1.25h2.887a.625.625 0 1 0 0-1.25H1.25Zm9.029-1.554a3.115 3.115 0 1 0 0 6.23 3.115 3.115 0 0 0 0-6.23ZM5.913 8.242a4.365 4.365 0 1 1 7.44 3.1l1.84 1.838a.625.625 0 1 1-.884.884l-1.972-1.971a4.365 4.365 0 0 1-6.424-3.85Z","clip-rule":"evenodd"}]]

/**
 * @component @name EventExplorer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjYyNSAyLjM3N2MwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg2Ljc3N2EuNjI1LjYyNSAwIDAgMSAwIDEuMjVIMS4yNWEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVabS42MjUgMy4wOWEuNjI1LjYyNSAwIDAgMSAwLTEuMjVoMy44MDRhLjYyNS42MjUgMCAwIDEgMCAxLjI1SDEuMjVabTAgMS4yMTRhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDIuODg3YS42MjUuNjI1IDAgMSAwIDAtMS4yNUgxLjI1Wm05LjAyOS0xLjU1NGEzLjExNSAzLjExNSAwIDEgMCAwIDYuMjMgMy4xMTUgMy4xMTUgMCAwIDAgMC02LjIzWk01LjkxMyA4LjI0MmE0LjM2NSA0LjM2NSAwIDEgMSA3LjQ0IDMuMWwxLjg0IDEuODM4YS42MjUuNjI1IDAgMSAxLS44ODQuODg0bC0xLjk3Mi0xLjk3MWE0LjM2NSA0LjM2NSAwIDAgMS02LjQyNC0zLjg1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
