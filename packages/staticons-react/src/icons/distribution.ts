
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M11.55 3.372C11.101 3.125 10.587 3 10 3c-.588 0-1.102.124-1.55.37a3.2 3.2 0 0 0-1.07.99c-.53.757-.873 1.774-1.21 2.779l-.018.054c-.71 2.113-1.51 4.452-3.879 6.06a.623.623 0 1 0 .7 1.032c2.734-1.856 3.643-4.56 4.343-6.644l.017-.05c.363-1.08.653-1.924 1.068-2.513a1.95 1.95 0 0 1 .651-.615c.24-.132.542-.216.948-.216.406 0 .708.084.948.216.242.133.454.333.652.615.414.59.704 1.433 1.067 2.512l.017.051c.7 2.083 1.61 4.788 4.342 6.644a.623.623 0 1 0 .7-1.031c-2.368-1.609-3.167-3.948-3.878-6.061l-.018-.054c-.337-1.005-.68-2.022-1.21-2.778a3.199 3.199 0 0 0-1.07-.99ZM2.623 15.75a.623.623 0 0 0 0 1.247h14.754a.623.623 0 1 0 0-1.246H2.623Z"}]]

/**
 * @component @name Distribution
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTExLjU1IDMuMzcyQzExLjEwMSAzLjEyNSAxMC41ODcgMyAxMCAzYy0uNTg4IDAtMS4xMDIuMTI0LTEuNTUuMzdhMy4yIDMuMiAwIDAgMC0xLjA3Ljk5Yy0uNTMuNzU3LS44NzMgMS43NzQtMS4yMSAyLjc3OWwtLjAxOC4wNTRjLS43MSAyLjExMy0xLjUxIDQuNDUyLTMuODc5IDYuMDZhLjYyMy42MjMgMCAxIDAgLjcgMS4wMzJjMi43MzQtMS44NTYgMy42NDMtNC41NiA0LjM0My02LjY0NGwuMDE3LS4wNWMuMzYzLTEuMDguNjUzLTEuOTI0IDEuMDY4LTIuNTEzYTEuOTUgMS45NSAwIDAgMSAuNjUxLS42MTVjLjI0LS4xMzIuNTQyLS4yMTYuOTQ4LS4yMTYuNDA2IDAgLjcwOC4wODQuOTQ4LjIxNi4yNDIuMTMzLjQ1NC4zMzMuNjUyLjYxNS40MTQuNTkuNzA0IDEuNDMzIDEuMDY3IDIuNTEybC4wMTcuMDUxYy43IDIuMDgzIDEuNjEgNC43ODggNC4zNDIgNi42NDRhLjYyMy42MjMgMCAxIDAgLjctMS4wMzFjLTIuMzY4LTEuNjA5LTMuMTY3LTMuOTQ4LTMuODc4LTYuMDYxbC0uMDE4LS4wNTRjLS4zMzctMS4wMDUtLjY4LTIuMDIyLTEuMjEtMi43NzhhMy4xOTkgMy4xOTkgMCAwIDAtMS4wNy0uOTlaTTIuNjIzIDE1Ljc1YS42MjMuNjIzIDAgMCAwIDAgMS4yNDdoMTQuNzU0YS42MjMuNjIzIDAgMSAwIDAtMS4yNDZIMi42MjNaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Distribution = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-distribution',
        'staticon-Distribution',
        className
      ),
      ...props,
    })
);
Distribution.displayName = 'Distribution'

export default Distribution;
