
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.75 10a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-3.548.624a.625.625 0 1 0 0-1.25H5.548a.625.625 0 1 0 0 1.25h8.904Z","clip-rule":"evenodd"}]]

/**
 * @component @name Minus
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNzUgMTBhNi43NSA2Ljc1IDAgMSAxLTEzLjUgMCA2Ljc1IDYuNzUgMCAwIDEgMTMuNSAwWk0xOCAxMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFptLTMuNTQ4LjYyNGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINS41NDhhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDguOTA0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Minus = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-minus',
        'staticon-Minus',
        className
      ),
      ...props,
    })
);
Minus.displayName = 'Minus'

export default Minus;
