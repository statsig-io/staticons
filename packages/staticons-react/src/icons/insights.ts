
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.125 6.498A5.875 5.875 0 0 1 8 .624a5.875 5.875 0 0 1 3.874 10.29.241.241 0 0 0-.084.132l-.21 1.132c-.1.53-.487.946-.982 1.097-.23 1.209-1.32 2.101-2.597 2.101s-2.368-.892-2.598-2.1a1.418 1.418 0 0 1-.982-1.098l-.211-1.133a.24.24 0 0 0-.084-.13 5.861 5.861 0 0 1-2.001-4.417ZM8 1.874a4.625 4.625 0 0 0-3.05 8.101c.237.207.424.496.488.841l.212 1.133c.014.08.084.137.164.137H7.38V9.201c-1.318-.12-2.186-.627-2.448-1.442-.297-.924.355-1.837 1.272-1.948.757-.092 1.38.253 1.788.714a2.6 2.6 0 0 1 .616 1.327c.229-.094.449-.238.65-.416.379-.336.62-.73.695-.968a.625.625 0 0 1 1.192.379c-.157.492-.545 1.07-1.058 1.525-.386.341-.882.648-1.458.783v2.931h1.557c.08 0 .15-.057.165-.137l.21-1.133a1.48 1.48 0 0 1 .489-.84A4.625 4.625 0 0 0 8 1.874Zm-1.268 11.47a1.39 1.39 0 0 0 1.269.782 1.39 1.39 0 0 0 1.268-.781H6.732Zm.323-5.99c.153.172.256.388.3.59-.978-.113-1.202-.471-1.233-.568-.041-.128.045-.301.233-.324.26-.032.5.075.7.301Z","clip-rule":"evenodd"}]]

/**
 * @component @name Insights
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4xMjUgNi40OThBNS44NzUgNS44NzUgMCAwIDEgOCAuNjI0YTUuODc1IDUuODc1IDAgMCAxIDMuODc0IDEwLjI5LjI0MS4yNDEgMCAwIDAtLjA4NC4xMzJsLS4yMSAxLjEzMmMtLjEuNTMtLjQ4Ny45NDYtLjk4MiAxLjA5Ny0uMjMgMS4yMDktMS4zMiAyLjEwMS0yLjU5NyAyLjEwMXMtMi4zNjgtLjg5Mi0yLjU5OC0yLjFhMS40MTggMS40MTggMCAwIDEtLjk4Mi0xLjA5OGwtLjIxMS0xLjEzM2EuMjQuMjQgMCAwIDAtLjA4NC0uMTMgNS44NjEgNS44NjEgMCAwIDEtMi4wMDEtNC40MTdaTTggMS44NzRhNC42MjUgNC42MjUgMCAwIDAtMy4wNSA4LjEwMWMuMjM3LjIwNy40MjQuNDk2LjQ4OC44NDFsLjIxMiAxLjEzM2MuMDE0LjA4LjA4NC4xMzcuMTY0LjEzN0g3LjM4VjkuMjAxYy0xLjMxOC0uMTItMi4xODYtLjYyNy0yLjQ0OC0xLjQ0Mi0uMjk3LS45MjQuMzU1LTEuODM3IDEuMjcyLTEuOTQ4Ljc1Ny0uMDkyIDEuMzguMjUzIDEuNzg4LjcxNGEyLjYgMi42IDAgMCAxIC42MTYgMS4zMjdjLjIyOS0uMDk0LjQ0OS0uMjM4LjY1LS40MTYuMzc5LS4zMzYuNjItLjczLjY5NS0uOTY4YS42MjUuNjI1IDAgMCAxIDEuMTkyLjM3OWMtLjE1Ny40OTItLjU0NSAxLjA3LTEuMDU4IDEuNTI1LS4zODYuMzQxLS44ODIuNjQ4LTEuNDU4Ljc4M3YyLjkzMWgxLjU1N2MuMDggMCAuMTUtLjA1Ny4xNjUtLjEzN2wuMjEtMS4xMzNhMS40OCAxLjQ4IDAgMCAxIC40ODktLjg0QTQuNjI1IDQuNjI1IDAgMCAwIDggMS44NzRabS0xLjI2OCAxMS40N2ExLjM5IDEuMzkgMCAwIDAgMS4yNjkuNzgyIDEuMzkgMS4zOSAwIDAgMCAxLjI2OC0uNzgxSDYuNzMyWm0uMzIzLTUuOTljLjE1My4xNzIuMjU2LjM4OC4zLjU5LS45NzgtLjExMy0xLjIwMi0uNDcxLTEuMjMzLS41NjgtLjA0MS0uMTI4LjA0NS0uMzAxLjIzMy0uMzI0LjI2LS4wMzIuNS4wNzUuNy4zMDFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Insights = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-insights',
        'staticon-Insights',
        className
      ),
      ...props,
    })
);
Insights.displayName = 'Insights'

export default Insights;
