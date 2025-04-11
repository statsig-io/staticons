
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.75 13.244V3.5a.75.75 0 0 0-1.5 0v9.744L7.436 9.43a.75.75 0 0 0-1.06 1.06l4.05 4.052c.87.869 2.278.869 3.148 0l4.05-4.052a.75.75 0 0 0-1.06-1.06l-3.814 3.814Zm-7.625 4.288c0 .672.545 1.217 1.217 1.217h11.316c.672 0 1.217-.545 1.217-1.217v-4.537a.75.75 0 0 1 1.5 0v4.537c0 1.5-1.217 2.717-2.717 2.717H6.342a2.717 2.717 0 0 1-2.717-2.717v-4.537a.75.75 0 0 1 1.5 0v4.537Z","clip-rule":"evenodd"}]]

/**
 * @component @name Download
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzUgMTMuMjQ0VjMuNWEuNzUuNzUgMCAwIDAtMS41IDB2OS43NDRMNy40MzYgOS40M2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDQuMDUgNC4wNTJjLjg3Ljg2OSAyLjI3OC44NjkgMy4xNDggMGw0LjA1LTQuMDUyYS43NS43NSAwIDAgMC0xLjA2LTEuMDZsLTMuODE0IDMuODE0Wm0tNy42MjUgNC4yODhjMCAuNjcyLjU0NSAxLjIxNyAxLjIxNyAxLjIxN2gxMS4zMTZjLjY3MiAwIDEuMjE3LS41NDUgMS4yMTctMS4yMTd2LTQuNTM3YS43NS43NSAwIDAgMSAxLjUgMHY0LjUzN2MwIDEuNS0xLjIxNyAyLjcxNy0yLjcxNyAyLjcxN0g2LjM0MmEyLjcxNyAyLjcxNyAwIDAgMS0yLjcxNy0yLjcxN3YtNC41MzdhLjc1Ljc1IDAgMCAxIDEuNSAwdjQuNTM3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Download = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-download',
        'staticon-Download',
        className
      ),
      ...props,
    })
);
Download.displayName = 'Download'

export default Download;
