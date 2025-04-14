
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.374 4.749c0-1.174.95-2.125 2.125-2.125h11.003c1.173 0 2.124.951 2.124 2.125v7.594a2.125 2.125 0 0 1-2.125 2.125h-6.31l-2.79 2.664a.875.875 0 0 1-1.48-.632v-2.032H4.5a2.125 2.125 0 0 1-2.125-2.125V4.749Zm2.125-.875a.875.875 0 0 0-.875.875v7.594c0 .483.391.875.875.875h.798c.483 0 .875.392.875.875v1.53l2.193-2.094c.21-.2.487-.311.777-.311h6.36a.875.875 0 0 0 .874-.875V4.749a.875.875 0 0 0-.875-.875H4.5Zm5.016 6.597c0-.345.28-.625.625-.625h2.967a.625.625 0 0 1 0 1.25H10.14a.625.625 0 0 1-.625-.625Zm-2.18-4.403a.625.625 0 1 0-.884.884L7.989 8.49l-1.538 1.54a.625.625 0 0 0 .884.884l1.98-1.98a.625.625 0 0 0 0-.885l-1.98-1.98Z","clip-rule":"evenodd"}]]

/**
 * @component @name Prompt
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4zNzQgNC43NDljMC0xLjE3NC45NS0yLjEyNSAyLjEyNS0yLjEyNWgxMS4wMDNjMS4xNzMgMCAyLjEyNC45NTEgMi4xMjQgMi4xMjV2Ny41OTRhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUgMi4xMjVoLTYuMzFsLTIuNzkgMi42NjRhLjg3NS44NzUgMCAwIDEtMS40OC0uNjMydi0yLjAzMkg0LjVhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUtMi4xMjVWNC43NDlabTIuMTI1LS44NzVhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2Ny41OTRjMCAuNDgzLjM5MS44NzUuODc1Ljg3NWguNzk4Yy40ODMgMCAuODc1LjM5Mi44NzUuODc1djEuNTNsMi4xOTMtMi4wOTRjLjIxLS4yLjQ4Ny0uMzExLjc3Ny0uMzExaDYuMzZhLjg3NS44NzUgMCAwIDAgLjg3NC0uODc1VjQuNzQ5YS44NzUuODc1IDAgMCAwLS44NzUtLjg3NUg0LjVabTUuMDE2IDYuNTk3YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDIuOTY3YS42MjUuNjI1IDAgMCAxIDAgMS4yNUgxMC4xNGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVabS0yLjE4LTQuNDAzYS42MjUuNjI1IDAgMSAwLS44ODQuODg0TDcuOTg5IDguNDlsLTEuNTM4IDEuNTRhLjYyNS42MjUgMCAwIDAgLjg4NC44ODRsMS45OC0xLjk4YS42MjUuNjI1IDAgMCAwIDAtLjg4NWwtMS45OC0xLjk4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Prompt = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-prompt',
        'staticon-Prompt',
        className
      ),
      ...props,
    })
);
Prompt.displayName = 'Prompt'

export default Prompt;
