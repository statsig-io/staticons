
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.98 3.768c0-.674.808-1.024 1.305-.565l6.359 5.87c.48.443.479 1.197 0 1.64l-6.359 5.868c-.497.459-1.306.109-1.306-.565v-3.472c-1.235.066-2.193.341-3.116.895-1.064.637-2.122 1.668-3.5 3.291-.47.555-1.39.215-1.366-.519.103-3.242 1.361-5.485 3.05-6.92 1.52-1.29 3.356-1.899 4.932-2.026V3.768Zm1.253 1.088v2.857c0 .424-.34.764-.762.774-1.42.03-3.185.542-4.609 1.751-1.159.985-2.12 2.454-2.472 4.57.984-1.068 1.881-1.87 2.825-2.436 1.272-.762 2.587-1.07 4.233-1.088.43-.005.785.34.785.77v2.874l5.456-5.035-5.456-5.037Z","clip-rule":"evenodd"}]]

/**
 * @component @name ShareForward
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS45OCAzLjc2OGMwLS42NzQuODA4LTEuMDI0IDEuMzA1LS41NjVsNi4zNTkgNS44N2MuNDguNDQzLjQ3OSAxLjE5NyAwIDEuNjRsLTYuMzU5IDUuODY4Yy0uNDk3LjQ1OS0xLjMwNi4xMDktMS4zMDYtLjU2NXYtMy40NzJjLTEuMjM1LjA2Ni0yLjE5My4zNDEtMy4xMTYuODk1LTEuMDY0LjYzNy0yLjEyMiAxLjY2OC0zLjUgMy4yOTEtLjQ3LjU1NS0xLjM5LjIxNS0xLjM2Ni0uNTE5LjEwMy0zLjI0MiAxLjM2MS01LjQ4NSAzLjA1LTYuOTIgMS41Mi0xLjI5IDMuMzU2LTEuODk5IDQuOTMyLTIuMDI2VjMuNzY4Wm0xLjI1MyAxLjA4OHYyLjg1N2MwIC40MjQtLjM0Ljc2NC0uNzYyLjc3NC0xLjQyLjAzLTMuMTg1LjU0Mi00LjYwOSAxLjc1MS0xLjE1OS45ODUtMi4xMiAyLjQ1NC0yLjQ3MiA0LjU3Ljk4NC0xLjA2OCAxLjg4MS0xLjg3IDIuODI1LTIuNDM2IDEuMjcyLS43NjIgMi41ODctMS4wNyA0LjIzMy0xLjA4OC40My0uMDA1Ljc4NS4zNC43ODUuNzd2Mi44NzRsNS40NTYtNS4wMzUtNS40NTYtNS4wMzdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ShareForward = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-share-forward',
        'staticon-ShareForward',
        className
      ),
      ...props,
    })
);
ShareForward.displayName = 'ShareForward'

export default ShareForward;
