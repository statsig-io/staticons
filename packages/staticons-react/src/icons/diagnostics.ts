
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.791 10.512h2.866l1.463-3.39c.378-.875 1.65-.775 1.887.149l1.58 6.178.956-2.188a1.25 1.25 0 0 1 1.145-.75h3.02a6.5 6.5 0 0 0-12.917 0Zm12.914 1.5h-2.853l-1.473 3.37c-.381.872-1.65.77-1.885-.152L9.917 9.062l-.948 2.195a1.25 1.25 0 0 1-1.147.755H4.794a6.5 6.5 0 0 0 12.911 0ZM3.25 11.25a8 8 0 1 1 13.683 5.629l2.843 2.842a.75.75 0 1 1-1.061 1.061l-2.937-2.937A8 8 0 0 1 3.25 11.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name Diagnostics
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43OTEgMTAuNTEyaDIuODY2bDEuNDYzLTMuMzljLjM3OC0uODc1IDEuNjUtLjc3NSAxLjg4Ny4xNDlsMS41OCA2LjE3OC45NTYtMi4xODhhMS4yNSAxLjI1IDAgMCAxIDEuMTQ1LS43NWgzLjAyYTYuNSA2LjUgMCAwIDAtMTIuOTE3IDBabTEyLjkxNCAxLjVoLTIuODUzbC0xLjQ3MyAzLjM3Yy0uMzgxLjg3Mi0xLjY1Ljc3LTEuODg1LS4xNTJMOS45MTcgOS4wNjJsLS45NDggMi4xOTVhMS4yNSAxLjI1IDAgMCAxLTEuMTQ3Ljc1NUg0Ljc5NGE2LjUgNi41IDAgMCAwIDEyLjkxMSAwWk0zLjI1IDExLjI1YTggOCAwIDEgMSAxMy42ODMgNS42MjlsMi44NDMgMi44NDJhLjc1Ljc1IDAgMSAxLTEuMDYxIDEuMDYxbC0yLjkzNy0yLjkzN0E4IDggMCAwIDEgMy4yNSAxMS4yNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Diagnostics = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-diagnostics',
        'staticon-Diagnostics',
        className
      ),
      ...props,
    })
);
Diagnostics.displayName = 'Diagnostics'

export default Diagnostics;
