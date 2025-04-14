
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.375 4.753a.625.625 0 1 0 1.25 0V3a.625.625 0 1 0-1.25 0v1.752Zm6.016-.145a.625.625 0 0 1 0 .884L14.155 6.73a.625.625 0 0 1-.884-.884l1.236-1.237a.625.625 0 0 1 .884 0ZM8.966 8.966a1.462 1.462 0 1 0 2.068 2.068 1.462 1.462 0 0 0-2.068-2.068Zm-.884 2.952a2.712 2.712 0 1 1 3.836-3.836 2.712 2.712 0 0 1-3.836 3.836Zm-1.354 2.237a.625.625 0 0 0-.884-.884L4.61 14.507a.625.625 0 0 0 .884.884l1.235-1.236Zm8.663 1.236a.625.625 0 0 1-.884 0l-1.239-1.24a.625.625 0 1 1 .884-.883l1.24 1.239a.625.625 0 0 1 0 .884ZM5.848 6.73a.625.625 0 1 0 .884-.884L5.493 4.61a.625.625 0 1 0-.884.884L5.848 6.73ZM17.624 10c0 .345-.28.625-.625.625H15.25a.625.625 0 0 1 0-1.25H17c.345 0 .625.28.625.625Zm-12.876.625a.625.625 0 1 0 0-1.25H3.001a.625.625 0 1 0 0 1.25h1.747Zm5.252 7a.625.625 0 0 1-.625-.626v-1.752a.625.625 0 1 1 1.25 0v1.752c0 .345-.28.625-.625.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name LightMode
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4zNzUgNC43NTNhLjYyNS42MjUgMCAxIDAgMS4yNSAwVjNhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjEuNzUyWm02LjAxNi0uMTQ1YS42MjUuNjI1IDAgMCAxIDAgLjg4NEwxNC4xNTUgNi43M2EuNjI1LjYyNSAwIDAgMS0uODg0LS44ODRsMS4yMzYtMS4yMzdhLjYyNS42MjUgMCAwIDEgLjg4NCAwWk04Ljk2NiA4Ljk2NmExLjQ2MiAxLjQ2MiAwIDEgMCAyLjA2OCAyLjA2OCAxLjQ2MiAxLjQ2MiAwIDAgMC0yLjA2OC0yLjA2OFptLS44ODQgMi45NTJhMi43MTIgMi43MTIgMCAxIDEgMy44MzYtMy44MzYgMi43MTIgMi43MTIgMCAwIDEtMy44MzYgMy44MzZabS0xLjM1NCAyLjIzN2EuNjI1LjYyNSAwIDAgMC0uODg0LS44ODRMNC42MSAxNC41MDdhLjYyNS42MjUgMCAwIDAgLjg4NC44ODRsMS4yMzUtMS4yMzZabTguNjYzIDEuMjM2YS42MjUuNjI1IDAgMCAxLS44ODQgMGwtMS4yMzktMS4yNGEuNjI1LjYyNSAwIDEgMSAuODg0LS44ODNsMS4yNCAxLjIzOWEuNjI1LjYyNSAwIDAgMSAwIC44ODRaTTUuODQ4IDYuNzNhLjYyNS42MjUgMCAxIDAgLjg4NC0uODg0TDUuNDkzIDQuNjFhLjYyNS42MjUgMCAxIDAtLjg4NC44ODRMNS44NDggNi43M1pNMTcuNjI0IDEwYzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDE1LjI1YS42MjUuNjI1IDAgMCAxIDAtMS4yNUgxN2MuMzQ1IDAgLjYyNS4yOC42MjUuNjI1Wm0tMTIuODc2LjYyNWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMy4wMDFhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDEuNzQ3Wm01LjI1MiA3YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNnYtMS43NTJhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjEuNzUyYzAgLjM0NS0uMjguNjI1LS42MjUuNjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
