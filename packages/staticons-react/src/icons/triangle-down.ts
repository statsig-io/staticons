
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"m9.619 13.199-4.875-5.75a.5.5 0 0 1 .381-.824h9.75a.5.5 0 0 1 .381.823l-4.874 5.75a.5.5 0 0 1-.763 0Z"}]]

/**
 * @component @name TriangleDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0ibTkuNjE5IDEzLjE5OS00Ljg3NS01Ljc1YS41LjUgMCAwIDEgLjM4MS0uODI0aDkuNzVhLjUuNSAwIDAgMSAuMzgxLjgyM2wtNC44NzQgNS43NWEuNS41IDAgMCAxLS43NjMgMFoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TriangleDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-triangle-down',
        'staticon-TriangleDown',
        className
      ),
      ...props,
    })
);
TriangleDown.displayName = 'TriangleDown'

export default TriangleDown;
