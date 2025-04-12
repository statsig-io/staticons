
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.692 4.28a.625.625 0 0 1 .89.879l-2.805 2.84 2.806 2.843a.625.625 0 1 1-.89.878L5.559 8.544a.775.775 0 0 1 0-1.09l3.134-3.173Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M.5 8a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Zm1.25 0a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 0 0-12.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name CircleLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguNjkyIDQuMjhhLjYyNS42MjUgMCAwIDEgLjg5Ljg3OWwtMi44MDUgMi44NCAyLjgwNiAyLjg0M2EuNjI1LjYyNSAwIDEgMS0uODkuODc4TDUuNTU5IDguNTQ0YS43NzUuNzc1IDAgMCAxIDAtMS4wOWwzLjEzNC0zLjE3M1oiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uNSA4YTcuNSA3LjUgMCAxIDAgMTUgMCA3LjUgNy41IDAgMCAwLTE1IDBabTEuMjUgMGE2LjI1IDYuMjUgMCAxIDAgMTIuNSAwIDYuMjUgNi4yNSAwIDAgMC0xMi41IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
