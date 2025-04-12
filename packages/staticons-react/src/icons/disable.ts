
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-1.25 0a6.25 6.25 0 0 1-10.205 4.84l8.794-8.795A6.224 6.224 0 0 1 14.25 8ZM3.16 11.956l8.796-8.795a6.25 6.25 0 0 0-8.795 8.795Z","clip-rule":"evenodd"}]]

/**
 * @component @name Disable
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNSA4YTcuNSA3LjUgMCAxIDEtMTUgMCA3LjUgNy41IDAgMCAxIDE1IDBabS0xLjI1IDBhNi4yNSA2LjI1IDAgMCAxLTEwLjIwNSA0Ljg0bDguNzk0LTguNzk1QTYuMjI0IDYuMjI0IDAgMCAxIDE0LjI1IDhaTTMuMTYgMTEuOTU2bDguNzk2LTguNzk1YTYuMjUgNi4yNSAwIDAgMC04Ljc5NSA4Ljc5NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Disable = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-disable',
        'staticon-Disable',
        className
      ),
      ...props,
    })
);
Disable.displayName = 'Disable'

export default Disable;
