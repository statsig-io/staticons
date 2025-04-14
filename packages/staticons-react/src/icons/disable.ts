
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.75 10a6.75 6.75 0 0 1-11.06 5.194l9.504-9.505A6.722 6.722 0 0 1 16.75 10ZM4.805 14.31l9.505-9.505a6.75 6.75 0 0 0-9.505 9.505ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Disable
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNzUgMTBhNi43NSA2Ljc1IDAgMCAxLTExLjA2IDUuMTk0bDkuNTA0LTkuNTA1QTYuNzIyIDYuNzIyIDAgMCAxIDE2Ljc1IDEwWk00LjgwNSAxNC4zMWw5LjUwNS05LjUwNWE2Ljc1IDYuNzUgMCAwIDAtOS41MDUgOS41MDVaTTE4IDEwYTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
