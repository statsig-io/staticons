
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M3.347 9.805a.58.58 0 0 0 0 .82l3.536 3.536a1.58 1.58 0 0 0 2.234 0l3.536-3.536a.58.58 0 0 0-.82-.82L8.58 13.06V5.373a.58.58 0 0 0-1.159 0v7.686L4.166 9.805a.58.58 0 0 0-.82 0ZM2.08 2.536a.58.58 0 0 1 0-1.16l11.84.001a.58.58 0 1 1 0 1.159H2.08Z"}]]

/**
 * @component @name ExpandDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTMuMzQ3IDkuODA1YS41OC41OCAwIDAgMCAwIC44MmwzLjUzNiAzLjUzNmExLjU4IDEuNTggMCAwIDAgMi4yMzQgMGwzLjUzNi0zLjUzNmEuNTguNTggMCAwIDAtLjgyLS44Mkw4LjU4IDEzLjA2VjUuMzczYS41OC41OCAwIDAgMC0xLjE1OSAwdjcuNjg2TDQuMTY2IDkuODA1YS41OC41OCAwIDAgMC0uODIgMFpNMi4wOCAyLjUzNmEuNTguNTggMCAwIDEgMC0xLjE2bDExLjg0LjAwMWEuNTguNTggMCAxIDEgMCAxLjE1OUgyLjA4WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ExpandDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-expand-down',
        'staticon-ExpandDown',
        className
      ),
      ...props,
    })
);
ExpandDown.displayName = 'ExpandDown'

export default ExpandDown;
