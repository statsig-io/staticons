
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M13.45 4.248 9.965 2.241a.878.878 0 0 0-1.262.461L7.394 6.31c-.032.09-.143.2-.344.235-1.404.242-3.107 1.179-4.288 3.305a1.1 1.1 0 0 0 .422 1.487l4.08 2.349-1.885 3.254a.623.623 0 0 0 .229.853c.299.172.682.07.855-.23l1.884-3.254 4.08 2.349c.503.29 1.18.155 1.503-.38 1.257-2.083 1.22-4.021.728-5.354-.07-.191-.03-.342.032-.415l2.48-2.932a.872.872 0 0 0-.232-1.32l-3.487-2.008Zm-5.018 8.667 4.502 2.591c.98-1.704.901-3.195.55-4.15-.188-.506-.17-1.157.25-1.652l2.19-2.59-3.1-1.784-3.098-1.784-1.155 3.186c-.22.61-.777.95-1.31 1.042-1.006.174-2.341.851-3.331 2.55l4.502 2.591Z","clip-rule":"evenodd"}]]

/**
 * @component @name Pin
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDUgNC4yNDggOS45NjUgMi4yNDFhLjg3OC44NzggMCAwIDAtMS4yNjIuNDYxTDcuMzk0IDYuMzFjLS4wMzIuMDktLjE0My4yLS4zNDQuMjM1LTEuNDA0LjI0Mi0zLjEwNyAxLjE3OS00LjI4OCAzLjMwNWExLjEgMS4xIDAgMCAwIC40MjIgMS40ODdsNC4wOCAyLjM0OS0xLjg4NSAzLjI1NGEuNjIzLjYyMyAwIDAgMCAuMjI5Ljg1M2MuMjk5LjE3Mi42ODIuMDcuODU1LS4yM2wxLjg4NC0zLjI1NCA0LjA4IDIuMzQ5Yy41MDMuMjkgMS4xOC4xNTUgMS41MDMtLjM4IDEuMjU3LTIuMDgzIDEuMjItNC4wMjEuNzI4LTUuMzU0LS4wNy0uMTkxLS4wMy0uMzQyLjAzMi0uNDE1bDIuNDgtMi45MzJhLjg3Mi44NzIgMCAwIDAtLjIzMi0xLjMybC0zLjQ4Ny0yLjAwOFptLTUuMDE4IDguNjY3IDQuNTAyIDIuNTkxYy45OC0xLjcwNC45MDEtMy4xOTUuNTUtNC4xNS0uMTg4LS41MDYtLjE3LTEuMTU3LjI1LTEuNjUybDIuMTktMi41OS0zLjEtMS43ODQtMy4wOTgtMS43ODQtMS4xNTUgMy4xODZjLS4yMi42MS0uNzc3Ljk1LTEuMzEgMS4wNDItMS4wMDYuMTc0LTIuMzQxLjg1MS0zLjMzMSAyLjU1bDQuNTAyIDIuNTkxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Pin = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pin',
        'staticon-Pin',
        className
      ),
      ...props,
    })
);
Pin.displayName = 'Pin'

export default Pin;
