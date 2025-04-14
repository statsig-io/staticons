
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.12 12.037a.625.625 0 0 0 0 .884l3.731 3.731a1.625 1.625 0 0 0 2.298 0l3.731-3.731a.625.625 0 1 0-.884-.884l-3.371 3.371V7.117a.625.625 0 1 0-1.25 0v8.291l-3.371-3.371a.625.625 0 0 0-.884 0ZM3.75 4.123a.625.625 0 0 1 0-1.25h12.5a.625.625 0 1 1 0 1.25H3.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name ExpandDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4xMiAxMi4wMzdhLjYyNS42MjUgMCAwIDAgMCAuODg0bDMuNzMxIDMuNzMxYTEuNjI1IDEuNjI1IDAgMCAwIDIuMjk4IDBsMy43MzEtMy43MzFhLjYyNS42MjUgMCAxIDAtLjg4NC0uODg0bC0zLjM3MSAzLjM3MVY3LjExN2EuNjI1LjYyNSAwIDEgMC0xLjI1IDB2OC4yOTFsLTMuMzcxLTMuMzcxYS42MjUuNjI1IDAgMCAwLS44ODQgMFpNMy43NSA0LjEyM2EuNjI1LjYyNSAwIDAgMSAwLTEuMjVoMTIuNWEuNjI1LjYyNSAwIDEgMSAwIDEuMjVIMy43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
