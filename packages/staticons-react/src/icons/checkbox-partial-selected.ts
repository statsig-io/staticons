
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.501 15.375c0 1.174.952 2.125 2.125 2.125h10.748a2.125 2.125 0 0 0 2.125-2.125V4.625A2.125 2.125 0 0 0 15.374 2.5H4.626a2.125 2.125 0 0 0-2.125 2.125v10.75Zm11.948-4.75a.625.625 0 1 0 0-1.25H5.551a.625.625 0 1 0 0 1.25h8.898Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxPartialSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41MDEgMTUuMzc1YzAgMS4xNzQuOTUyIDIuMTI1IDIuMTI1IDIuMTI1aDEwLjc0OGEyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVY0LjYyNUEyLjEyNSAyLjEyNSAwIDAgMCAxNS4zNzQgMi41SDQuNjI2YTIuMTI1IDIuMTI1IDAgMCAwLTIuMTI1IDIuMTI1djEwLjc1Wm0xMS45NDgtNC43NWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINS41NTFhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDguODk4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxPartialSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-partial-selected',
        'staticon-CheckboxPartialSelected',
        className
      ),
      ...props,
    })
);
CheckboxPartialSelected.displayName = 'CheckboxPartialSelected'

export default CheckboxPartialSelected;
