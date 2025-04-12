
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12.839 4.242a6.126 6.126 0 1 0 1.288 3.667v-.101a.624.624 0 1 1 1.247-.038c.002.06.001.132 0 .184V8a7.375 7.375 0 1 1-1.684-4.692V1.249a.624.624 0 1 1 1.248 0v3.467a.774.774 0 0 1-.774.774h-3.467a.624.624 0 0 1 0-1.248h2.142Z"}]]

/**
 * @component @name Refresh
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyLjgzOSA0LjI0MmE2LjEyNiA2LjEyNiAwIDEgMCAxLjI4OCAzLjY2N3YtLjEwMWEuNjI0LjYyNCAwIDEgMSAxLjI0Ny0uMDM4Yy4wMDIuMDYuMDAxLjEzMiAwIC4xODRWOGE3LjM3NSA3LjM3NSAwIDEgMS0xLjY4NC00LjY5MlYxLjI0OWEuNjI0LjYyNCAwIDEgMSAxLjI0OCAwdjMuNDY3YS43NzQuNzc0IDAgMCAxLS43NzQuNzc0aC0zLjQ2N2EuNjI0LjYyNCAwIDAgMSAwLTEuMjQ4aDIuMTQyWiIvPgo8L3N2Zz4K)
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
