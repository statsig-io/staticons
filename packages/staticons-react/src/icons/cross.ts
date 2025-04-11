
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M7.03 5.97a.75.75 0 0 0-1.06 1.06L10.94 12l-4.97 4.97a.75.75 0 0 0 1.06 1.06L12 13.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L13.06 12l4.97-4.97a.75.75 0 1 0-1.06-1.06L12 10.94 7.03 5.97Z"}]]

/**
 * @component @name Cross
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTcuMDMgNS45N2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2TDEwLjk0IDEybC00Ljk3IDQuOTdhLjc1Ljc1IDAgMCAwIDEuMDYgMS4wNkwxMiAxMy4wNmw0Ljk3IDQuOTdhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNkwxMy4wNiAxMmw0Ljk3LTQuOTdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkwxMiAxMC45NCA3LjAzIDUuOTdaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cross = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cross',
        'staticon-Cross',
        className
      ),
      ...props,
    })
);
Cross.displayName = 'Cross'

export default Cross;
