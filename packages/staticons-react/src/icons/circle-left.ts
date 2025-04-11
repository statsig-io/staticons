
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12.802 7.47a.75.75 0 0 1 1.06 1.061l-3.29 3.291a.25.25 0 0 0 0 .354l3.293 3.293a.75.75 0 1 1-1.06 1.06L9.51 13.236a1.75 1.75 0 0 1 0-2.475l3.291-3.29Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm1.5 0a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name CircleLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyLjgwMiA3LjQ3YS43NS43NSAwIDAgMSAxLjA2IDEuMDYxbC0zLjI5IDMuMjkxYS4yNS4yNSAwIDAgMCAwIC4zNTRsMy4yOTMgMy4yOTNhLjc1Ljc1IDAgMSAxLTEuMDYgMS4wNkw5LjUxIDEzLjIzNmExLjc1IDEuNzUgMCAwIDEgMC0yLjQ3NWwzLjI5MS0zLjI5WiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMTJhOSA5IDAgMSAwIDE4IDAgOSA5IDAgMCAwLTE4IDBabTEuNSAwYTcuNSA3LjUgMCAxIDAgMTUgMCA3LjUgNy41IDAgMCAwLTE1IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CircleLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-circle-left',
        'staticon-CircleLeft',
        className
      ),
      ...props,
    })
);
CircleLeft.displayName = 'CircleLeft'

export default CircleLeft;
