
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.674 15.326a3.971 3.971 0 0 1 0-5.616l.856-.856a.625.625 0 1 0-.883-.884l-.857.856a5.221 5.221 0 1 0 7.384 7.384l.857-.856a.625.625 0 1 0-.884-.884l-.857.856a3.971 3.971 0 0 1-5.616 0ZM7.97 4.646a.625.625 0 1 0 .884.883l.856-.856a3.971 3.971 0 1 1 5.616 5.616l-.856.857a.625.625 0 1 0 .884.884l.856-.857A5.221 5.221 0 1 0 8.827 3.79l-.856.857Zm-.55 7.05a.625.625 0 0 0 .883.883l4.276-4.275a.625.625 0 1 0-.884-.884L7.42 11.695Z","clip-rule":"evenodd"}]]

/**
 * @component @name Link
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NzQgMTUuMzI2YTMuOTcxIDMuOTcxIDAgMCAxIDAtNS42MTZsLjg1Ni0uODU2YS42MjUuNjI1IDAgMSAwLS44ODMtLjg4NGwtLjg1Ny44NTZhNS4yMjEgNS4yMjEgMCAxIDAgNy4zODQgNy4zODRsLjg1Ny0uODU2YS42MjUuNjI1IDAgMSAwLS44ODQtLjg4NGwtLjg1Ny44NTZhMy45NzEgMy45NzEgMCAwIDEtNS42MTYgMFpNNy45NyA0LjY0NmEuNjI1LjYyNSAwIDEgMCAuODg0Ljg4M2wuODU2LS44NTZhMy45NzEgMy45NzEgMCAxIDEgNS42MTYgNS42MTZsLS44NTYuODU3YS42MjUuNjI1IDAgMSAwIC44ODQuODg0bC44NTYtLjg1N0E1LjIyMSA1LjIyMSAwIDEgMCA4LjgyNyAzLjc5bC0uODU2Ljg1N1ptLS41NSA3LjA1YS42MjUuNjI1IDAgMCAwIC44ODMuODgzbDQuMjc2LTQuMjc1YS42MjUuNjI1IDAgMSAwLS44ODQtLjg4NEw3LjQyIDExLjY5NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Link = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-link',
        'staticon-Link',
        className
      ),
      ...props,
    })
);
Link.displayName = 'Link'

export default Link;
