
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.754 4.749a.875.875 0 0 0-.875.875l-.003 8.752c0 .483.392.875.875.875h1.254c.313-1.054 1.014-2.164 2.084-2.793a2.855 2.855 0 1 1 3.828-.006c1.071.629 1.769 1.743 2.079 2.799h1.25a.875.875 0 0 0 .875-.875l.003-7.293a.875.875 0 0 0-.875-.876h-5.055c-.271 0-.533-.097-.738-.275L8.093 4.75h-3.34Zm7.923 10.502c-.44-1.124-1.38-2.052-2.653-2.06h-.039c-1.27.012-2.215.94-2.66 2.06h5.352Zm-2.657-3.31a1.605 1.605 0 1 0-.036 0h.036ZM2.63 5.623c0-1.173.951-2.124 2.125-2.124H8.14c.27 0 .532.098.737.275l1.363 1.183h5.009c1.174 0 2.125.952 2.125 2.126l-.003 7.294a2.125 2.125 0 0 1-2.125 2.124H4.75a2.125 2.125 0 0 1-2.125-2.126l.003-8.752Z","clip-rule":"evenodd"}]]

/**
 * @component @name UserProfileProperties
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43NTQgNC43NDlhLjg3NS44NzUgMCAwIDAtLjg3NS44NzVsLS4wMDMgOC43NTJjMCAuNDgzLjM5Mi44NzUuODc1Ljg3NWgxLjI1NGMuMzEzLTEuMDU0IDEuMDE0LTIuMTY0IDIuMDg0LTIuNzkzYTIuODU1IDIuODU1IDAgMSAxIDMuODI4LS4wMDZjMS4wNzEuNjI5IDEuNzY5IDEuNzQzIDIuMDc5IDIuNzk5aDEuMjVhLjg3NS44NzUgMCAwIDAgLjg3NS0uODc1bC4wMDMtNy4yOTNhLjg3NS44NzUgMCAwIDAtLjg3NS0uODc2aC01LjA1NWMtLjI3MSAwLS41MzMtLjA5Ny0uNzM4LS4yNzVMOC4wOTMgNC43NWgtMy4zNFptNy45MjMgMTAuNTAyYy0uNDQtMS4xMjQtMS4zOC0yLjA1Mi0yLjY1My0yLjA2aC0uMDM5Yy0xLjI3LjAxMi0yLjIxNS45NC0yLjY2IDIuMDZoNS4zNTJabS0yLjY1Ny0zLjMxYTEuNjA1IDEuNjA1IDAgMSAwLS4wMzYgMGguMDM2Wk0yLjYzIDUuNjIzYzAtMS4xNzMuOTUxLTIuMTI0IDIuMTI1LTIuMTI0SDguMTRjLjI3IDAgLjUzMi4wOTguNzM3LjI3NWwxLjM2MyAxLjE4M2g1LjAwOWMxLjE3NCAwIDIuMTI1Ljk1MiAyLjEyNSAyLjEyNmwtLjAwMyA3LjI5NGEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNSAyLjEyNEg0Ljc1YTIuMTI1IDIuMTI1IDAgMCAxLTIuMTI1LTIuMTI2bC4wMDMtOC43NTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
