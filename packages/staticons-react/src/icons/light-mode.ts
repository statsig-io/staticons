
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.375 3.126a.625.625 0 1 0 1.25 0V1.5a.625.625 0 1 0-1.25 0v1.626Zm5.663-.165a.625.625 0 0 1 0 .884L11.89 4.993a.625.625 0 0 1-.884-.884l1.148-1.148a.625.625 0 0 1 .884 0ZM7.102 7.103a1.269 1.269 0 1 0 1.794 1.794 1.269 1.269 0 0 0-1.794-1.794ZM6.218 9.78A2.519 2.519 0 1 1 9.78 6.22a2.519 2.519 0 0 1-3.562 3.56Zm-1.226 2.11a.625.625 0 0 0-.883-.885l-1.147 1.147a.625.625 0 0 0 .884.884l1.146-1.147Zm8.046 1.147a.625.625 0 0 1-.884 0l-1.15-1.15a.625.625 0 1 1 .884-.884l1.15 1.15a.625.625 0 0 1 0 .884ZM4.112 4.996a.625.625 0 1 0 .883-.884l-1.15-1.15a.625.625 0 1 0-.883.884l1.15 1.15Zm11.013 3.003c0 .345-.28.625-.625.625h-1.623a.625.625 0 1 1 0-1.25H14.5c.345 0 .625.28.625.625Zm-12.003.625a.625.625 0 1 0 0-1.25H1.5a.625.625 0 1 0 0 1.25h1.622ZM8 15.124a.625.625 0 0 1-.625-.624v-1.627a.625.625 0 0 1 1.25 0V14.5c0 .345-.28.625-.625.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name LightMode
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4zNzUgMy4xMjZhLjYyNS42MjUgMCAxIDAgMS4yNSAwVjEuNWEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2MS42MjZabTUuNjYzLS4xNjVhLjYyNS42MjUgMCAwIDEgMCAuODg0TDExLjg5IDQuOTkzYS42MjUuNjI1IDAgMCAxLS44ODQtLjg4NGwxLjE0OC0xLjE0OGEuNjI1LjYyNSAwIDAgMSAuODg0IDBaTTcuMTAyIDcuMTAzYTEuMjY5IDEuMjY5IDAgMSAwIDEuNzk0IDEuNzk0IDEuMjY5IDEuMjY5IDAgMCAwLTEuNzk0LTEuNzk0Wk02LjIxOCA5Ljc4QTIuNTE5IDIuNTE5IDAgMSAxIDkuNzggNi4yMmEyLjUxOSAyLjUxOSAwIDAgMS0zLjU2MiAzLjU2Wm0tMS4yMjYgMi4xMWEuNjI1LjYyNSAwIDAgMC0uODgzLS44ODVsLTEuMTQ3IDEuMTQ3YS42MjUuNjI1IDAgMCAwIC44ODQuODg0bDEuMTQ2LTEuMTQ3Wm04LjA0NiAxLjE0N2EuNjI1LjYyNSAwIDAgMS0uODg0IDBsLTEuMTUtMS4xNWEuNjI1LjYyNSAwIDEgMSAuODg0LS44ODRsMS4xNSAxLjE1YS42MjUuNjI1IDAgMCAxIDAgLjg4NFpNNC4xMTIgNC45OTZhLjYyNS42MjUgMCAxIDAgLjg4My0uODg0bC0xLjE1LTEuMTVhLjYyNS42MjUgMCAxIDAtLjg4My44ODRsMS4xNSAxLjE1Wm0xMS4wMTMgMy4wMDNjMCAuMzQ1LS4yOC42MjUtLjYyNS42MjVoLTEuNjIzYS42MjUuNjI1IDAgMSAxIDAtMS4yNUgxNC41Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabS0xMi4wMDMuNjI1YS42MjUuNjI1IDAgMSAwIDAtMS4yNUgxLjVhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDEuNjIyWk04IDE1LjEyNGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjR2LTEuNjI3YS42MjUuNjI1IDAgMCAxIDEuMjUgMFYxNC41YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LightMode = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-light-mode',
        'staticon-LightMode',
        className
      ),
      ...props,
    })
);
LightMode.displayName = 'LightMode'

export default LightMode;
