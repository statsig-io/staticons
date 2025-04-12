
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.732 1.121a.623.623 0 0 1-.621.624c-.246 0-.608.015-.836.042a6.253 6.253 0 1 0 5.93 2.747.623.623 0 0 1 1.038-.688A7.498 7.498 0 1 1 8.107.5c.345 0 .624.277.625.621Z"}]]

/**
 * @component @name Laoder
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguNzMyIDEuMTIxYS42MjMuNjIzIDAgMCAxLS42MjEuNjI0Yy0uMjQ2IDAtLjYwOC4wMTUtLjgzNi4wNDJhNi4yNTMgNi4yNTMgMCAxIDAgNS45MyAyLjc0Ny42MjMuNjIzIDAgMCAxIDEuMDM4LS42ODhBNy40OTggNy40OTggMCAxIDEgOC4xMDcuNWMuMzQ1IDAgLjYyNC4yNzcuNjI1LjYyMVoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Laoder = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-laoder',
        'staticon-Laoder',
        className
      ),
      ...props,
    })
);
Laoder.displayName = 'Laoder'

export default Laoder;
