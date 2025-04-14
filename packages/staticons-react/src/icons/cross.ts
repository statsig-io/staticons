
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.442 4.558a.625.625 0 1 0-.884.884L9.116 10l-4.558 4.558a.625.625 0 0 0 .884.884L10 10.884l4.558 4.558a.625.625 0 1 0 .884-.884L10.884 10l4.558-4.558a.625.625 0 1 0-.884-.884L10 9.116 5.442 4.558Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cross
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS40NDIgNC41NThhLjYyNS42MjUgMCAxIDAtLjg4NC44ODRMOS4xMTYgMTBsLTQuNTU4IDQuNTU4YS42MjUuNjI1IDAgMCAwIC44ODQuODg0TDEwIDEwLjg4NGw0LjU1OCA0LjU1OGEuNjI1LjYyNSAwIDEgMCAuODg0LS44ODRMMTAuODg0IDEwbDQuNTU4LTQuNTU4YS42MjUuNjI1IDAgMSAwLS44ODQtLjg4NEwxMCA5LjExNiA1LjQ0MiA0LjU1OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
