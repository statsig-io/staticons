
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12.876 1.498c.898 0 1.625.728 1.625 1.625v2.548a.625.625 0 1 1-1.25 0V3.123a.375.375 0 0 0-.375-.375h-2.541a.625.625 0 1 1 0-1.25h2.541Zm-9.753.001c-.897 0-1.625.728-1.625 1.625v2.541a.625.625 0 0 0 1.25 0V3.124c0-.207.168-.375.375-.375h2.548a.625.625 0 0 0 0-1.25H3.123ZM12.877 14.5c.898 0 1.625-.727 1.625-1.624v-2.542a.625.625 0 0 0-1.25 0v2.542a.375.375 0 0 1-.375.375H10.33a.625.625 0 1 0 0 1.25h2.548ZM1.499 12.877c0 .898.727 1.625 1.625 1.625h2.54a.625.625 0 0 0 0-1.25h-2.54a.375.375 0 0 1-.375-.375V10.33a.625.625 0 1 0-1.25 0v2.548Z"}]]

/**
 * @component @name FullScreen
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyLjg3NiAxLjQ5OGMuODk4IDAgMS42MjUuNzI4IDEuNjI1IDEuNjI1djIuNTQ4YS42MjUuNjI1IDAgMSAxLTEuMjUgMFYzLjEyM2EuMzc1LjM3NSAwIDAgMC0uMzc1LS4zNzVoLTIuNTQxYS42MjUuNjI1IDAgMSAxIDAtMS4yNWgyLjU0MVptLTkuNzUzLjAwMWMtLjg5NyAwLTEuNjI1LjcyOC0xLjYyNSAxLjYyNXYyLjU0MWEuNjI1LjYyNSAwIDAgMCAxLjI1IDBWMy4xMjRjMC0uMjA3LjE2OC0uMzc1LjM3NS0uMzc1aDIuNTQ4YS42MjUuNjI1IDAgMCAwIDAtMS4yNUgzLjEyM1pNMTIuODc3IDE0LjVjLjg5OCAwIDEuNjI1LS43MjcgMS42MjUtMS42MjR2LTIuNTQyYS42MjUuNjI1IDAgMCAwLTEuMjUgMHYyLjU0MmEuMzc1LjM3NSAwIDAgMS0uMzc1LjM3NUgxMC4zM2EuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMi41NDhaTTEuNDk5IDEyLjg3N2MwIC44OTguNzI3IDEuNjI1IDEuNjI1IDEuNjI1aDIuNTRhLjYyNS42MjUgMCAwIDAgMC0xLjI1aC0yLjU0YS4zNzUuMzc1IDAgMCAxLS4zNzUtLjM3NVYxMC4zM2EuNjI1LjYyNSAwIDEgMC0xLjI1IDB2Mi41NDhaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FullScreen = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-full-screen',
        'staticon-FullScreen',
        className
      ),
      ...props,
    })
);
FullScreen.displayName = 'FullScreen'

export default FullScreen;
