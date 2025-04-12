
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.299 5.543c.254.234.27.63.035.883l-3.566 3.862a1.045 1.045 0 0 1-1.536 0L3.666 6.426a.625.625 0 1 1 .918-.848L8 9.277l3.416-3.7a.625.625 0 0 1 .883-.034Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMjk5IDUuNTQzYy4yNTQuMjM0LjI3LjYzLjAzNS44ODNsLTMuNTY2IDMuODYyYTEuMDQ1IDEuMDQ1IDAgMCAxLTEuNTM2IDBMMy42NjYgNi40MjZhLjYyNS42MjUgMCAxIDEgLjkxOC0uODQ4TDggOS4yNzdsMy40MTYtMy43YS42MjUuNjI1IDAgMCAxIC44ODMtLjAzNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-down',
        'staticon-ChevronDown',
        className
      ),
      ...props,
    })
);
ChevronDown.displayName = 'ChevronDown'

export default ChevronDown;
