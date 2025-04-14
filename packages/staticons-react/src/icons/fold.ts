
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.818 3.933a.625.625 0 1 0-.883.884l3.447 3.447a.875.875 0 0 0 1.237 0l3.447-3.447a.625.625 0 1 0-.884-.884L10 7.115 6.818 3.933Zm6.364 12.134a.625.625 0 0 0 .884-.884l-3.447-3.447a.875.875 0 0 0-1.237 0l-3.447 3.447a.625.625 0 1 0 .883.884L10 12.885l3.182 3.182Z","clip-rule":"evenodd"}]]

/**
 * @component @name Fold
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi44MTggMy45MzNhLjYyNS42MjUgMCAxIDAtLjg4My44ODRsMy40NDcgMy40NDdhLjg3NS44NzUgMCAwIDAgMS4yMzcgMGwzLjQ0Ny0zLjQ0N2EuNjI1LjYyNSAwIDEgMC0uODg0LS44ODRMMTAgNy4xMTUgNi44MTggMy45MzNabTYuMzY0IDEyLjEzNGEuNjI1LjYyNSAwIDAgMCAuODg0LS44ODRsLTMuNDQ3LTMuNDQ3YS44NzUuODc1IDAgMCAwLTEuMjM3IDBsLTMuNDQ3IDMuNDQ3YS42MjUuNjI1IDAgMSAwIC44ODMuODg0TDEwIDEyLjg4NWwzLjE4MiAzLjE4MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Fold = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-fold',
        'staticon-Fold',
        className
      ),
      ...props,
    })
);
Fold.displayName = 'Fold'

export default Fold;
