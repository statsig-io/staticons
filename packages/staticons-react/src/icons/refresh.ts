
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M20.137 4.126a.75.75 0 0 0-1.502 0v2.36a8.61 8.61 0 0 0-6.625-3.1c-4.763 0-8.624 3.86-8.624 8.62s3.861 8.62 8.624 8.62 8.625-3.86 8.625-8.62v-.053c0-.06.002-.146 0-.215a.74.74 0 0 0-1.48.045c.002.04.001.073 0 .117v.106a7.143 7.143 0 0 1-7.145 7.14 7.143 7.143 0 0 1-7.145-7.14 7.143 7.143 0 0 1 7.145-7.14 7.133 7.133 0 0 1 5.621 2.731h-2.47a.75.75 0 1 0 0 1.501h3.724c.691 0 1.252-.56 1.252-1.25V4.126Z"}]]

/**
 * @component @name Refresh
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTIwLjEzNyA0LjEyNmEuNzUuNzUgMCAwIDAtMS41MDIgMHYyLjM2YTguNjEgOC42MSAwIDAgMC02LjYyNS0zLjFjLTQuNzYzIDAtOC42MjQgMy44Ni04LjYyNCA4LjYyczMuODYxIDguNjIgOC42MjQgOC42MiA4LjYyNS0zLjg2IDguNjI1LTguNjJ2LS4wNTNjMC0uMDYuMDAyLS4xNDYgMC0uMjE1YS43NC43NCAwIDAgMC0xLjQ4LjA0NWMuMDAyLjA0LjAwMS4wNzMgMCAuMTE3di4xMDZhNy4xNDMgNy4xNDMgMCAwIDEtNy4xNDUgNy4xNCA3LjE0MyA3LjE0MyAwIDAgMS03LjE0NS03LjE0IDcuMTQzIDcuMTQzIDAgMCAxIDcuMTQ1LTcuMTQgNy4xMzMgNy4xMzMgMCAwIDEgNS42MjEgMi43MzFoLTIuNDdhLjc1Ljc1IDAgMSAwIDAgMS41MDFoMy43MjRjLjY5MSAwIDEuMjUyLS41NiAxLjI1Mi0xLjI1VjQuMTI2WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Refresh = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-refresh',
        'staticon-Refresh',
        className
      ),
      ...props,
    })
);
Refresh.displayName = 'Refresh'

export default Refresh;
