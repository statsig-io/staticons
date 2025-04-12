
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.877 3.126a.625.625 0 0 0-.625.625l-.003 8.497c0 .346.28.626.625.626h1.335c.309-.963.955-1.96 1.924-2.545a2.742 2.742 0 1 1 3.739-.006c.97.585 1.614 1.586 1.92 2.55h1.331c.345 0 .625-.28.625-.624l.003-7.132a.625.625 0 0 0-.625-.625H8.192c-.27 0-.53-.097-.734-.272L6.187 3.126h-3.31Zm7.584 9.748c-.435-1.007-1.301-1.812-2.452-1.812-1.153 0-2.027.806-2.467 1.812h4.919ZM1 3.75a1.876 1.876 0 0 1 1.876-1.874h3.356c.27 0 .53.097.734.272l1.271 1.094h4.888c1.036 0 1.875.84 1.875 1.875l-.003 7.132c0 1.035-.84 1.875-1.875 1.875H2.874a1.875 1.875 0 0 1-1.875-1.876l.003-8.498Zm7 3.078a1.492 1.492 0 1 0 0 2.984 1.492 1.492 0 0 0 0-2.984Z","clip-rule":"evenodd"}]]

/**
 * @component @name UserProfileProperties
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi44NzcgMy4xMjZhLjYyNS42MjUgMCAwIDAtLjYyNS42MjVsLS4wMDMgOC40OTdjMCAuMzQ2LjI4LjYyNi42MjUuNjI2aDEuMzM1Yy4zMDktLjk2My45NTUtMS45NiAxLjkyNC0yLjU0NWEyLjc0MiAyLjc0MiAwIDEgMSAzLjczOS0uMDA2Yy45Ny41ODUgMS42MTQgMS41ODYgMS45MiAyLjU1aDEuMzMxYy4zNDUgMCAuNjI1LS4yOC42MjUtLjYyNGwuMDAzLTcuMTMyYS42MjUuNjI1IDAgMCAwLS42MjUtLjYyNUg4LjE5MmMtLjI3IDAtLjUzLS4wOTctLjczNC0uMjcyTDYuMTg3IDMuMTI2aC0zLjMxWm03LjU4NCA5Ljc0OGMtLjQzNS0xLjAwNy0xLjMwMS0xLjgxMi0yLjQ1Mi0xLjgxMi0xLjE1MyAwLTIuMDI3LjgwNi0yLjQ2NyAxLjgxMmg0LjkxOVpNMSAzLjc1YTEuODc2IDEuODc2IDAgMCAxIDEuODc2LTEuODc0aDMuMzU2Yy4yNyAwIC41My4wOTcuNzM0LjI3MmwxLjI3MSAxLjA5NGg0Ljg4OGMxLjAzNiAwIDEuODc1Ljg0IDEuODc1IDEuODc1bC0uMDAzIDcuMTMyYzAgMS4wMzUtLjg0IDEuODc1LTEuODc1IDEuODc1SDIuODc0YTEuODc1IDEuODc1IDAgMCAxLTEuODc1LTEuODc2bC4wMDMtOC40OThabTcgMy4wNzhhMS40OTIgMS40OTIgMCAxIDAgMCAyLjk4NCAxLjQ5MiAxLjQ5MiAwIDAgMCAwLTIuOTg0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UserProfileProperties = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-user-profile-properties',
        'staticon-UserProfileProperties',
        className
      ),
      ...props,
    })
);
UserProfileProperties.displayName = 'UserProfileProperties'

export default UserProfileProperties;
