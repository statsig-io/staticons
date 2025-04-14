
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.12 7.963a.625.625 0 0 1 0-.884l3.73-3.731a1.625 1.625 0 0 1 2.298 0l3.731 3.731a.625.625 0 1 1-.884.884l-3.371-3.371v8.291a.625.625 0 1 1-1.25 0V4.592l-3.37 3.371a.625.625 0 0 1-.884 0Zm-1.37 7.914a.625.625 0 1 0 0 1.25h12.5a.625.625 0 1 0 0-1.25H3.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name ExpandUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4xMiA3Ljk2M2EuNjI1LjYyNSAwIDAgMSAwLS44ODRsMy43My0zLjczMWExLjYyNSAxLjYyNSAwIDAgMSAyLjI5OCAwbDMuNzMxIDMuNzMxYS42MjUuNjI1IDAgMSAxLS44ODQuODg0bC0zLjM3MS0zLjM3MXY4LjI5MWEuNjI1LjYyNSAwIDEgMS0xLjI1IDBWNC41OTJsLTMuMzcgMy4zNzFhLjYyNS42MjUgMCAwIDEtLjg4NCAwWm0tMS4zNyA3LjkxNGEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMTIuNWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMy43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ExpandUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-expand-up',
        'staticon-ExpandUp',
        className
      ),
      ...props,
    })
);
ExpandUp.displayName = 'ExpandUp'

export default ExpandUp;
