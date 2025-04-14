
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.75 10a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-4.335c.369 0 .667.299.667.667v3.217l2.562 1.48a.667.667 0 1 1-.666 1.154l-2.854-1.648a.667.667 0 0 1-.375-.623v-3.58c0-.368.298-.667.667-.667Z","clip-rule":"evenodd"}]]

/**
 * @component @name Clock
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNzUgMTBhNi43NSA2Ljc1IDAgMSAxLTEzLjUgMCA2Ljc1IDYuNzUgMCAwIDEgMTMuNSAwWk0xOCAxMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFptLTgtNC4zMzVjLjM2OSAwIC42NjcuMjk5LjY2Ny42Njd2My4yMTdsMi41NjIgMS40OGEuNjY3LjY2NyAwIDEgMS0uNjY2IDEuMTU0bC0yLjg1NC0xLjY0OGEuNjY3LjY2NyAwIDAgMS0uMzc1LS42MjN2LTMuNThjMC0uMzY4LjI5OC0uNjY3LjY2Ny0uNjY3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Clock = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-clock',
        'staticon-Clock',
        className
      ),
      ...props,
    })
);
Clock.displayName = 'Clock'

export default Clock;
