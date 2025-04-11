
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M17.766 14.45a.758.758 0 0 1 0 1.067l-4.192 4.22a2.215 2.215 0 0 1-3.148 0l-4.192-4.22a.758.758 0 0 1 0-1.068.747.747 0 0 1 1.06 0l3.956 3.981V8.616c0-.417.336-.755.75-.755s.75.338.75.755v9.814l3.955-3.98a.747.747 0 0 1 1.061 0Zm1.607-9.298c.414 0 .75-.338.75-.755a.752.752 0 0 0-.75-.754H4.627a.752.752 0 0 0-.75.754c0 .417.336.755.75.755h14.746Z"}]]

/**
 * @component @name ExpandDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3Ljc2NiAxNC40NWEuNzU4Ljc1OCAwIDAgMSAwIDEuMDY3bC00LjE5MiA0LjIyYTIuMjE1IDIuMjE1IDAgMCAxLTMuMTQ4IDBsLTQuMTkyLTQuMjJhLjc1OC43NTggMCAwIDEgMC0xLjA2OC43NDcuNzQ3IDAgMCAxIDEuMDYgMGwzLjk1NiAzLjk4MVY4LjYxNmMwLS40MTcuMzM2LS43NTUuNzUtLjc1NXMuNzUuMzM4Ljc1Ljc1NXY5LjgxNGwzLjk1NS0zLjk4YS43NDcuNzQ3IDAgMCAxIDEuMDYxIDBabTEuNjA3LTkuMjk4Yy40MTQgMCAuNzUtLjMzOC43NS0uNzU1YS43NTIuNzUyIDAgMCAwLS43NS0uNzU0SDQuNjI3YS43NTIuNzUyIDAgMCAwLS43NS43NTRjMCAuNDE3LjMzNi43NTUuNzUuNzU1aDE0Ljc0NloiLz4KPC9zdmc+Cg==)
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
