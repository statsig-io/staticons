
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.042 15.407A6.72 6.72 0 0 1 10 16.75a6.72 6.72 0 0 1-3.974-1.293c.494-1.803 1.94-3.49 4.027-3.49 2.066 0 3.489 1.654 3.989 3.44Zm1.007-.927c-.506-1.32-1.47-2.612-2.864-3.285a3.482 3.482 0 1 0-4.33.032c-1.388.693-2.347 1.996-2.845 3.319a6.75 6.75 0 1 1 10.04-.066ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-3.747a2.232 2.232 0 1 0 0 4.463 2.232 2.232 0 0 0 0-4.463Z","clip-rule":"evenodd"}]]

/**
 * @component @name Account
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMDQyIDE1LjQwN0E2LjcyIDYuNzIgMCAwIDEgMTAgMTYuNzVhNi43MiA2LjcyIDAgMCAxLTMuOTc0LTEuMjkzYy40OTQtMS44MDMgMS45NC0zLjQ5IDQuMDI3LTMuNDkgMi4wNjYgMCAzLjQ4OSAxLjY1NCAzLjk4OSAzLjQ0Wm0xLjAwNy0uOTI3Yy0uNTA2LTEuMzItMS40Ny0yLjYxMi0yLjg2NC0zLjI4NWEzLjQ4MiAzLjQ4MiAwIDEgMC00LjMzLjAzMmMtMS4zODguNjkzLTIuMzQ3IDEuOTk2LTIuODQ1IDMuMzE5YTYuNzUgNi43NSAwIDEgMSAxMC4wNC0uMDY2Wk0xOCAxMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFptLTgtMy43NDdhMi4yMzIgMi4yMzIgMCAxIDAgMCA0LjQ2MyAyLjIzMiAyLjIzMiAwIDAgMCAwLTQuNDYzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Account = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-account',
        'staticon-Account',
        className
      ),
      ...props,
    })
);
Account.displayName = 'Account'

export default Account;
