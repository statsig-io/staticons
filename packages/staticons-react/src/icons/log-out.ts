
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.68 6.427a.75.75 0 0 1 1.061 0l4 4a2.225 2.225 0 0 1 0 3.147l-4 4a.75.75 0 0 1-1.06-1.061l3.762-3.763h-9.75a.75.75 0 0 1 0-1.5h9.75L14.68 7.487a.75.75 0 0 1 0-1.06Zm-9.43-.085c0-.672.546-1.217 1.218-1.217h4.537a.75.75 0 1 0 0-1.5H6.468a2.717 2.717 0 0 0-2.717 2.717v11.316c0 1.5 1.217 2.717 2.717 2.717h4.537a.75.75 0 1 0 0-1.5H6.468a1.217 1.217 0 0 1-1.217-1.217V6.342Z","clip-rule":"evenodd"}]]

/**
 * @component @name LogOut
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNjggNi40MjdhLjc1Ljc1IDAgMCAxIDEuMDYxIDBsNCA0YTIuMjI1IDIuMjI1IDAgMCAxIDAgMy4xNDdsLTQgNGEuNzUuNzUgMCAwIDEtMS4wNi0xLjA2MWwzLjc2Mi0zLjc2M2gtOS43NWEuNzUuNzUgMCAwIDEgMC0xLjVoOS43NUwxNC42OCA3LjQ4N2EuNzUuNzUgMCAwIDEgMC0xLjA2Wm0tOS40My0uMDg1YzAtLjY3Mi41NDYtMS4yMTcgMS4yMTgtMS4yMTdoNC41MzdhLjc1Ljc1IDAgMSAwIDAtMS41SDYuNDY4YTIuNzE3IDIuNzE3IDAgMCAwLTIuNzE3IDIuNzE3djExLjMxNmMwIDEuNSAxLjIxNyAyLjcxNyAyLjcxNyAyLjcxN2g0LjUzN2EuNzUuNzUgMCAxIDAgMC0xLjVINi40NjhhMS4yMTcgMS4yMTcgMCAwIDEtMS4yMTctMS4yMTdWNi4zNDJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LogOut = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-log-out',
        'staticon-LogOut',
        className
      ),
      ...props,
    })
);
LogOut.displayName = 'LogOut'

export default LogOut;
