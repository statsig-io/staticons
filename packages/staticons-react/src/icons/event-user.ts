
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.417 1.924v-.8a.625.625 0 1 0-1.25-.001v.8h-.793c-1.036 0-1.875.84-1.875 1.876v6.978c0 1.035.84 1.875 1.875 1.875h4.379a4.537 4.537 0 1 0 6.41-5.654v-3.2c0-1.035-.84-1.874-1.876-1.874h-.81v-.8a.625.625 0 0 0-1.25-.001v.8h-4.81Zm7.495 4.607v-.615H1.75v4.86c0 .346.28.626.625.626H6.45a4.535 4.535 0 0 1 5.462-4.871Zm0-2.732v.867H1.75v-.867c0-.346.28-.625.625-.625h8.913c.345 0 .625.28.625.625Zm-.947 10.454a3.27 3.27 0 0 0 1.578-.404c-.301-.621-.853-1.084-1.552-1.084-.706 0-1.267.473-1.57 1.103.46.245.986.384 1.544.384ZM12.569 12c.398.274.714.64.95 1.035a3.285 3.285 0 1 0-5.08.031 3.31 3.31 0 0 1 .942-1.045A2.064 2.064 0 1 1 12.569 12Zm-2.417-1.301a.814.814 0 1 1 1.628 0 .814.814 0 0 1-1.628 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name EventUser
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC40MTcgMS45MjR2LS44YS42MjUuNjI1IDAgMSAwLTEuMjUtLjAwMXYuOGgtLjc5M2MtMS4wMzYgMC0xLjg3NS44NC0xLjg3NSAxLjg3NnY2Ljk3OGMwIDEuMDM1Ljg0IDEuODc1IDEuODc1IDEuODc1aDQuMzc5YTQuNTM3IDQuNTM3IDAgMSAwIDYuNDEtNS42NTR2LTMuMmMwLTEuMDM1LS44NC0xLjg3NC0xLjg3Ni0xLjg3NGgtLjgxdi0uOGEuNjI1LjYyNSAwIDAgMC0xLjI1LS4wMDF2LjhoLTQuODFabTcuNDk1IDQuNjA3di0uNjE1SDEuNzV2NC44NmMwIC4zNDYuMjguNjI2LjYyNS42MjZINi40NWE0LjUzNSA0LjUzNSAwIDAgMSA1LjQ2Mi00Ljg3MVptMC0yLjczMnYuODY3SDEuNzV2LS44NjdjMC0uMzQ2LjI4LS42MjUuNjI1LS42MjVoOC45MTNjLjM0NSAwIC42MjUuMjguNjI1LjYyNVptLS45NDcgMTAuNDU0YTMuMjcgMy4yNyAwIDAgMCAxLjU3OC0uNDA0Yy0uMzAxLS42MjEtLjg1My0xLjA4NC0xLjU1Mi0xLjA4NC0uNzA2IDAtMS4yNjcuNDczLTEuNTcgMS4xMDMuNDYuMjQ1Ljk4Ni4zODQgMS41NDQuMzg0Wk0xMi41NjkgMTJjLjM5OC4yNzQuNzE0LjY0Ljk1IDEuMDM1YTMuMjg1IDMuMjg1IDAgMSAwLTUuMDguMDMxIDMuMzEgMy4zMSAwIDAgMSAuOTQyLTEuMDQ1QTIuMDY0IDIuMDY0IDAgMSAxIDEyLjU2OSAxMlptLTIuNDE3LTEuMzAxYS44MTQuODE0IDAgMSAxIDEuNjI4IDAgLjgxNC44MTQgMCAwIDEtMS42MjggMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EventUser = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-event-user',
        'staticon-EventUser',
        className
      ),
      ...props,
    })
);
EventUser.displayName = 'EventUser'

export default EventUser;
