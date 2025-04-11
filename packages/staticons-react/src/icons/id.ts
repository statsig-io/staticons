
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.242 5.751H4.751a.75.75 0 0 0-.75.75L4.008 17.5c0 .35.24.644.564.727.025-1.156.457-2.46 1.24-3.499a4.993 4.993 0 0 1 1.711-1.462 3.326 3.326 0 1 1 3.92-.006 4.953 4.953 0 0 1 1.717 1.47c.782 1.046 1.207 2.361 1.226 3.52h4.863a.75.75 0 0 0 .75-.75l-.007-11a.75.75 0 0 0-.75-.75ZM12.886 18.25c-.02-.837-.339-1.834-.927-2.62-.598-.8-1.43-1.33-2.468-1.33-1.04 0-1.878.53-2.482 1.332-.594.787-.917 1.784-.937 2.618h6.814Zm-8.136-14h14.491a2.25 2.25 0 0 1 2.25 2.249l.007 10.997a2.25 2.25 0 0 1-2.25 2.252H4.758a2.25 2.25 0 0 1-2.25-2.249L2.5 6.503a2.25 2.25 0 0 1 2.25-2.252Zm9.5 5.006a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm.75 2.246a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3ZM9.478 8.75a1.826 1.826 0 1 0 0 3.651 1.826 1.826 0 0 0 0-3.651Z","clip-rule":"evenodd"}]]

/**
 * @component @name Id
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMjQyIDUuNzUxSDQuNzUxYS43NS43NSAwIDAgMC0uNzUuNzVMNC4wMDggMTcuNWMwIC4zNS4yNC42NDQuNTY0LjcyNy4wMjUtMS4xNTYuNDU3LTIuNDYgMS4yNC0zLjQ5OWE0Ljk5MyA0Ljk5MyAwIDAgMSAxLjcxMS0xLjQ2MiAzLjMyNiAzLjMyNiAwIDEgMSAzLjkyLS4wMDYgNC45NTMgNC45NTMgMCAwIDEgMS43MTcgMS40N2MuNzgyIDEuMDQ2IDEuMjA3IDIuMzYxIDEuMjI2IDMuNTJoNC44NjNhLjc1Ljc1IDAgMCAwIC43NS0uNzVsLS4wMDctMTFhLjc1Ljc1IDAgMCAwLS43NS0uNzVaTTEyLjg4NiAxOC4yNWMtLjAyLS44MzctLjMzOS0xLjgzNC0uOTI3LTIuNjItLjU5OC0uOC0xLjQzLTEuMzMtMi40NjgtMS4zMy0xLjA0IDAtMS44NzguNTMtMi40ODIgMS4zMzItLjU5NC43ODctLjkxNyAxLjc4NC0uOTM3IDIuNjE4aDYuODE0Wm0tOC4xMzYtMTRoMTQuNDkxYTIuMjUgMi4yNSAwIDAgMSAyLjI1IDIuMjQ5bC4wMDcgMTAuOTk3YTIuMjUgMi4yNSAwIDAgMS0yLjI1IDIuMjUySDQuNzU4YTIuMjUgMi4yNSAwIDAgMS0yLjI1LTIuMjQ5TDIuNSA2LjUwM2EyLjI1IDIuMjUgMCAwIDEgMi4yNS0yLjI1MlptOS41IDUuMDA2YS43NS43NSAwIDAgMSAuNzUtLjc1aDNhLjc1Ljc1IDAgMSAxIDAgMS41aC0zYS43NS43NSAwIDAgMS0uNzUtLjc1Wm0uNzUgMi4yNDZhLjc1Ljc1IDAgMCAwIDAgMS41aDNhLjc1Ljc1IDAgMSAwIDAtMS41aC0zWk05LjQ3OCA4Ljc1YTEuODI2IDEuODI2IDAgMSAwIDAgMy42NTEgMS44MjYgMS44MjYgMCAwIDAgMC0zLjY1MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Id = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-id',
        'staticon-Id',
        className
      ),
      ...props,
    })
);
Id.displayName = 'Id'

export default Id;
