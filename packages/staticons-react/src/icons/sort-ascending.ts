
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12.043 2.604a.775.775 0 0 1 1.096 0l2.179 2.178a.625.625 0 1 1-.884.884l-1.218-1.218v8.55a.625.625 0 0 1-1.25 0V4.449L10.75 5.664a.625.625 0 1 1-.884-.883l2.176-2.177ZM1.124 4.335a.625.625 0 0 1 0-1.25H4.24a.625.625 0 0 1 0 1.25H1.124Zm0 3.128a.625.625 0 0 0 0 1.25h5.532a.625.625 0 1 0 0-1.25H1.124Zm-.625 5.004c0 .345.28.625.625.625H9.18a.625.625 0 0 0 0-1.25H1.124a.625.625 0 0 0-.625.625Z"}]]

/**
 * @component @name SortAscending
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyLjA0MyAyLjYwNGEuNzc1Ljc3NSAwIDAgMSAxLjA5NiAwbDIuMTc5IDIuMTc4YS42MjUuNjI1IDAgMSAxLS44ODQuODg0bC0xLjIxOC0xLjIxOHY4LjU1YS42MjUuNjI1IDAgMCAxLTEuMjUgMFY0LjQ0OUwxMC43NSA1LjY2NGEuNjI1LjYyNSAwIDEgMS0uODg0LS44ODNsMi4xNzYtMi4xNzdaTTEuMTI0IDQuMzM1YS42MjUuNjI1IDAgMCAxIDAtMS4yNUg0LjI0YS42MjUuNjI1IDAgMCAxIDAgMS4yNUgxLjEyNFptMCAzLjEyOGEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoNS41MzJhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDEuMTI0Wm0tLjYyNSA1LjAwNGMwIC4zNDUuMjguNjI1LjYyNS42MjVIOS4xOGEuNjI1LjYyNSAwIDAgMCAwLTEuMjVIMS4xMjRhLjYyNS42MjUgMCAwIDAtLjYyNS42MjVaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SortAscending = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort-ascending',
        'staticon-SortAscending',
        className
      ),
      ...props,
    })
);
SortAscending.displayName = 'SortAscending'

export default SortAscending;
