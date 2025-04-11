
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.412 10.225c-1.048-.419-1.048-1.902 0-2.32l2.146-.86a2 2 0 0 0 1.114-1.113l.859-2.147c.419-1.047 1.902-1.047 2.32 0l.86 2.147a2 2 0 0 0 1.113 1.114l2.146.858c1.048.42 1.048 1.902 0 2.321l-2.146.859a2 2 0 0 0-1.114 1.114l-.858 2.146c-.42 1.048-1.902 1.048-2.322 0l-.858-2.146a2 2 0 0 0-1.114-1.114l.557-1.393a3.5 3.5 0 0 1 1.95 1.95l.626 1.566.626-1.566a3.5 3.5 0 0 1 1.95-1.95l1.566-.626-1.566-.627a3.5 3.5 0 0 1-1.95-1.95l-.626-1.565-.626 1.566a3.5 3.5 0 0 1-1.95 1.95l-1.566.626 1.566.626-.557 1.393-2.146-.859Zm15.279 8.51-.592 1.48c-.42 1.047-1.902 1.047-2.321 0l-.592-1.48a.75.75 0 0 0-.418-.418l-1.48-.592c-1.048-.42-1.048-1.902 0-2.321l1.48-.592a.75.75 0 0 0 .418-.418l.592-1.48c.419-1.048 1.902-1.048 2.32 0l.593 1.48a.75.75 0 0 0 .418.418l1.48.592c1.047.419 1.047 1.902 0 2.32l-1.48.593a.75.75 0 0 0-.418.418Zm-2.113-.557.36.9.36-.9a2.25 2.25 0 0 1 1.254-1.254l.9-.36-.9-.36a2.25 2.25 0 0 1-1.254-1.253l-.36-.9-.36.9a2.25 2.25 0 0 1-1.253 1.253l-.9.36.9.36a2.25 2.25 0 0 1 1.253 1.254Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutoAwesome
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy40MTIgMTAuMjI1Yy0xLjA0OC0uNDE5LTEuMDQ4LTEuOTAyIDAtMi4zMmwyLjE0Ni0uODZhMiAyIDAgMCAwIDEuMTE0LTEuMTEzbC44NTktMi4xNDdjLjQxOS0xLjA0NyAxLjkwMi0xLjA0NyAyLjMyIDBsLjg2IDIuMTQ3YTIgMiAwIDAgMCAxLjExMyAxLjExNGwyLjE0Ni44NThjMS4wNDguNDIgMS4wNDggMS45MDIgMCAyLjMyMWwtMi4xNDYuODU5YTIgMiAwIDAgMC0xLjExNCAxLjExNGwtLjg1OCAyLjE0NmMtLjQyIDEuMDQ4LTEuOTAyIDEuMDQ4LTIuMzIyIDBsLS44NTgtMi4xNDZhMiAyIDAgMCAwLTEuMTE0LTEuMTE0bC41NTctMS4zOTNhMy41IDMuNSAwIDAgMSAxLjk1IDEuOTVsLjYyNiAxLjU2Ni42MjYtMS41NjZhMy41IDMuNSAwIDAgMSAxLjk1LTEuOTVsMS41NjYtLjYyNi0xLjU2Ni0uNjI3YTMuNSAzLjUgMCAwIDEtMS45NS0xLjk1bC0uNjI2LTEuNTY1LS42MjYgMS41NjZhMy41IDMuNSAwIDAgMS0xLjk1IDEuOTVsLTEuNTY2LjYyNiAxLjU2Ni42MjYtLjU1NyAxLjM5My0yLjE0Ni0uODU5Wm0xNS4yNzkgOC41MS0uNTkyIDEuNDhjLS40MiAxLjA0Ny0xLjkwMiAxLjA0Ny0yLjMyMSAwbC0uNTkyLTEuNDhhLjc1Ljc1IDAgMCAwLS40MTgtLjQxOGwtMS40OC0uNTkyYy0xLjA0OC0uNDItMS4wNDgtMS45MDIgMC0yLjMyMWwxLjQ4LS41OTJhLjc1Ljc1IDAgMCAwIC40MTgtLjQxOGwuNTkyLTEuNDhjLjQxOS0xLjA0OCAxLjkwMi0xLjA0OCAyLjMyIDBsLjU5MyAxLjQ4YS43NS43NSAwIDAgMCAuNDE4LjQxOGwxLjQ4LjU5MmMxLjA0Ny40MTkgMS4wNDcgMS45MDIgMCAyLjMybC0xLjQ4LjU5M2EuNzUuNzUgMCAwIDAtLjQxOC40MThabS0yLjExMy0uNTU3LjM2LjkuMzYtLjlhMi4yNSAyLjI1IDAgMCAxIDEuMjU0LTEuMjU0bC45LS4zNi0uOS0uMzZhMi4yNSAyLjI1IDAgMCAxLTEuMjU0LTEuMjUzbC0uMzYtLjktLjM2LjlhMi4yNSAyLjI1IDAgMCAxLTEuMjUzIDEuMjUzbC0uOS4zNi45LjM2YTIuMjUgMi4yNSAwIDAgMSAxLjI1MyAxLjI1NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutoAwesome = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-auto-awesome',
        'staticon-AutoAwesome',
        className
      ),
      ...props,
    })
);
AutoAwesome.displayName = 'AutoAwesome'

export default AutoAwesome;
