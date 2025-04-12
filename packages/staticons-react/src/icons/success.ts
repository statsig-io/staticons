
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.625 8a5.625 5.625 0 1 1-11.25 0 5.625 5.625 0 0 1 11.25 0Zm1.25 0a6.875 6.875 0 1 1-13.75 0 6.875 6.875 0 0 1 13.75 0Zm-3.027-1.287a.625.625 0 1 0-.883-.884l-3.95 3.95-1.98-1.978a.625.625 0 1 0-.884.884L6.466 11a.775.775 0 0 0 1.096 0l4.286-4.287Z","clip-rule":"evenodd"}]]

/**
 * @component @name Success
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNjI1IDhhNS42MjUgNS42MjUgMCAxIDEtMTEuMjUgMCA1LjYyNSA1LjYyNSAwIDAgMSAxMS4yNSAwWm0xLjI1IDBhNi44NzUgNi44NzUgMCAxIDEtMTMuNzUgMCA2Ljg3NSA2Ljg3NSAwIDAgMSAxMy43NSAwWm0tMy4wMjctMS4yODdhLjYyNS42MjUgMCAxIDAtLjg4My0uODg0bC0zLjk1IDMuOTUtMS45OC0xLjk3OGEuNjI1LjYyNSAwIDEgMC0uODg0Ljg4NEw2LjQ2NiAxMWEuNzc1Ljc3NSAwIDAgMCAxLjA5NiAwbDQuMjg2LTQuMjg3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Success = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-success',
        'staticon-Success',
        className
      ),
      ...props,
    })
);
Success.displayName = 'Success'

export default Success;
