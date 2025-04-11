
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 4.626a7.36 7.36 0 0 0-5.825 2.852H8.15a.75.75 0 0 1 0 1.5H4.9c-.69 0-1.25-.56-1.25-1.25V4.477a.75.75 0 1 1 1.5 0v1.882A8.874 8.874 0 1 1 3.126 12v-.055a5.374 5.374 0 0 1 0-.22.75.75 0 1 1 1.5.045c-.002.042-.001.076 0 .121v.11A7.374 7.374 0 1 0 12 4.625Zm.743 3.205a.75.75 0 0 0-1.5 0v4.379c0 .33.213.61.508.71l3.655 1.837a.75.75 0 0 0 .674-1.34l-3.337-1.677V7.83Z","clip-rule":"evenodd"}]]

/**
 * @component @name History
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgNC42MjZhNy4zNiA3LjM2IDAgMCAwLTUuODI1IDIuODUySDguMTVhLjc1Ljc1IDAgMCAxIDAgMS41SDQuOWMtLjY5IDAtMS4yNS0uNTYtMS4yNS0xLjI1VjQuNDc3YS43NS43NSAwIDEgMSAxLjUgMHYxLjg4MkE4Ljg3NCA4Ljg3NCAwIDEgMSAzLjEyNiAxMnYtLjA1NWE1LjM3NCA1LjM3NCAwIDAgMSAwLS4yMi43NS43NSAwIDEgMSAxLjUuMDQ1Yy0uMDAyLjA0Mi0uMDAxLjA3NiAwIC4xMjF2LjExQTcuMzc0IDcuMzc0IDAgMSAwIDEyIDQuNjI1Wm0uNzQzIDMuMjA1YS43NS43NSAwIDAgMC0xLjUgMHY0LjM3OWMwIC4zMy4yMTMuNjEuNTA4LjcxbDMuNjU1IDEuODM3YS43NS43NSAwIDAgMCAuNjc0LTEuMzRsLTMuMzM3LTEuNjc3VjcuODNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const History = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-history',
        'staticon-History',
        className
      ),
      ...props,
    })
);
History.displayName = 'History'

export default History;
