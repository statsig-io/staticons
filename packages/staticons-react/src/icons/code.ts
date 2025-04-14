
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.376 3.126a2.125 2.125 0 0 0-2.125 2.125v9.497c0 1.174.951 2.125 2.125 2.125h11.248a2.125 2.125 0 0 0 2.125-2.125V5.25a2.125 2.125 0 0 0-2.125-2.125H4.376Zm-.875 2.125c0-.483.392-.875.875-.875h11.248c.483 0 .875.392.875.875v9.497a.875.875 0 0 1-.875.875H4.376a.875.875 0 0 1-.875-.875V5.25Zm8.043 1.39a.625.625 0 0 0-1.207-.324l-1.889 7.05a.625.625 0 1 0 1.208.323l1.888-7.05Zm.901 1.096a.625.625 0 0 1 .884 0l1.822 1.821a.625.625 0 0 1 0 .884l-1.822 1.821a.625.625 0 1 1-.884-.884l1.38-1.38-1.38-1.378a.625.625 0 0 1 0-.884Zm-5.782 0a.625.625 0 0 1 .884.884L6.167 10l1.38 1.38a.625.625 0 0 1-.884.883l-1.821-1.821a.625.625 0 0 1 0-.884l1.82-1.821Z","clip-rule":"evenodd"}]]

/**
 * @component @name Code
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4zNzYgMy4xMjZhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjV2OS40OTdjMCAxLjE3NC45NTEgMi4xMjUgMi4xMjUgMi4xMjVoMTEuMjQ4YTIuMTI1IDIuMTI1IDAgMCAwIDIuMTI1LTIuMTI1VjUuMjVhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUtMi4xMjVINC4zNzZabS0uODc1IDIuMTI1YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgxMS4yNDhjLjQ4MyAwIC44NzUuMzkyLjg3NS44NzV2OS40OTdhLjg3NS44NzUgMCAwIDEtLjg3NS44NzVINC4zNzZhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1VjUuMjVabTguMDQzIDEuMzlhLjYyNS42MjUgMCAwIDAtMS4yMDctLjMyNGwtMS44ODkgNy4wNWEuNjI1LjYyNSAwIDEgMCAxLjIwOC4zMjNsMS44ODgtNy4wNVptLjkwMSAxLjA5NmEuNjI1LjYyNSAwIDAgMSAuODg0IDBsMS44MjIgMS44MjFhLjYyNS42MjUgMCAwIDEgMCAuODg0bC0xLjgyMiAxLjgyMWEuNjI1LjYyNSAwIDEgMS0uODg0LS44ODRsMS4zOC0xLjM4LTEuMzgtMS4zNzhhLjYyNS42MjUgMCAwIDEgMC0uODg0Wm0tNS43ODIgMGEuNjI1LjYyNSAwIDAgMSAuODg0Ljg4NEw2LjE2NyAxMGwxLjM4IDEuMzhhLjYyNS42MjUgMCAwIDEtLjg4NC44ODNsLTEuODIxLTEuODIxYS42MjUuNjI1IDAgMCAxIDAtLjg4NGwxLjgyLTEuODIxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Code = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-code',
        'staticon-Code',
        className
      ),
      ...props,
    })
);
Code.displayName = 'Code'

export default Code;
