
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.149 4.384a2.942 2.942 0 1 1 .455 1.18l-2.83 1.634a2.945 2.945 0 0 1 0 1.606l2.829 1.633a2.942 2.942 0 1 1-.454 1.18l-2.964-1.71a2.943 2.943 0 1 1 0-3.811L9.15 4.383Zm1.216-.443a1.693 1.693 0 1 0 3.385 0 1.693 1.693 0 0 0-3.385 0ZM3.942 9.694a1.694 1.694 0 1 1 0-3.387 1.694 1.694 0 0 1 0 3.387Zm8.116 4.058a1.693 1.693 0 1 1 0-3.386 1.693 1.693 0 0 1 0 3.386Z","clip-rule":"evenodd"}]]

/**
 * @component @name Share
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4xNDkgNC4zODRhMi45NDIgMi45NDIgMCAxIDEgLjQ1NSAxLjE4bC0yLjgzIDEuNjM0YTIuOTQ1IDIuOTQ1IDAgMCAxIDAgMS42MDZsMi44MjkgMS42MzNhMi45NDIgMi45NDIgMCAxIDEtLjQ1NCAxLjE4bC0yLjk2NC0xLjcxYTIuOTQzIDIuOTQzIDAgMSAxIDAtMy44MTFMOS4xNSA0LjM4M1ptMS4yMTYtLjQ0M2ExLjY5MyAxLjY5MyAwIDEgMCAzLjM4NSAwIDEuNjkzIDEuNjkzIDAgMCAwLTMuMzg1IDBaTTMuOTQyIDkuNjk0YTEuNjk0IDEuNjk0IDAgMSAxIDAtMy4zODcgMS42OTQgMS42OTQgMCAwIDEgMCAzLjM4N1ptOC4xMTYgNC4wNThhMS42OTMgMS42OTMgMCAxIDEgMC0zLjM4NiAxLjY5MyAxLjY5MyAwIDAgMSAwIDMuMzg2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Share = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-share',
        'staticon-Share',
        className
      ),
      ...props,
    })
);
Share.displayName = 'Share'

export default Share;
