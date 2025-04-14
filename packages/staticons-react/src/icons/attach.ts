
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.902 3.803c1.043-1.698 3.308-2.304 5.059-1.354a3.38 3.38 0 0 1 1.282 4.794l-4.216 6.864a2.258 2.258 0 0 1-2.968.794 1.983 1.983 0 0 1-.752-2.812l4.264-6.942a.666.666 0 0 1 .876-.234.586.586 0 0 1 .223.83l-4.265 6.942a.812.812 0 0 0 .308 1.15.924.924 0 0 0 1.215-.324l4.216-6.864a2.21 2.21 0 0 0-.838-3.133c-1.144-.62-2.624-.225-3.305.885l-4.17 6.786c-1.112 1.81-.499 4.1 1.37 5.114 1.867 1.014 4.283.368 5.396-1.443l4.216-6.864c.18-.294.573-.4.877-.234a.586.586 0 0 1 .222.83l-4.216 6.864c-1.474 2.4-4.675 3.255-7.15 1.912-2.475-1.342-3.287-4.376-1.813-6.775l4.169-6.786Z","clip-rule":"evenodd"}]]

/**
 * @component @name Attach
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy45MDIgMy44MDNjMS4wNDMtMS42OTggMy4zMDgtMi4zMDQgNS4wNTktMS4zNTRhMy4zOCAzLjM4IDAgMCAxIDEuMjgyIDQuNzk0bC00LjIxNiA2Ljg2NGEyLjI1OCAyLjI1OCAwIDAgMS0yLjk2OC43OTQgMS45ODMgMS45ODMgMCAwIDEtLjc1Mi0yLjgxMmw0LjI2NC02Ljk0MmEuNjY2LjY2NiAwIDAgMSAuODc2LS4yMzQuNTg2LjU4NiAwIDAgMSAuMjIzLjgzbC00LjI2NSA2Ljk0MmEuODEyLjgxMiAwIDAgMCAuMzA4IDEuMTUuOTI0LjkyNCAwIDAgMCAxLjIxNS0uMzI0bDQuMjE2LTYuODY0YTIuMjEgMi4yMSAwIDAgMC0uODM4LTMuMTMzYy0xLjE0NC0uNjItMi42MjQtLjIyNS0zLjMwNS44ODVsLTQuMTcgNi43ODZjLTEuMTEyIDEuODEtLjQ5OSA0LjEgMS4zNyA1LjExNCAxLjg2NyAxLjAxNCA0LjI4My4zNjggNS4zOTYtMS40NDNsNC4yMTYtNi44NjRjLjE4LS4yOTQuNTczLS40Ljg3Ny0uMjM0YS41ODYuNTg2IDAgMCAxIC4yMjIuODNsLTQuMjE2IDYuODY0Yy0xLjQ3NCAyLjQtNC42NzUgMy4yNTUtNy4xNSAxLjkxMi0yLjQ3NS0xLjM0Mi0zLjI4Ny00LjM3Ni0xLjgxMy02Ljc3NWw0LjE2OS02Ljc4NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Attach = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-attach',
        'staticon-Attach',
        className
      ),
      ...props,
    })
);
Attach.displayName = 'Attach'

export default Attach;
