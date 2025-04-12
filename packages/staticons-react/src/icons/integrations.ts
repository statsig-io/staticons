
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.696 1.752A1.288 1.288 0 0 0 5.44 3.319c.101.46-.212 1.037-.816 1.037h-1.88a.992.992 0 0 0-.992.992v1.417l.07-.001a2.538 2.538 0 1 1-.07 5.074v1.417c0 .548.445.992.993.992h1.47a2.539 2.539 0 0 1 4.964 0h1.47a.992.992 0 0 0 .993-.992v-1.88c0-.606.578-.919 1.038-.816a1.288 1.288 0 1 0 0-2.514c-.46.102-1.038-.211-1.038-.816v-1.88a.992.992 0 0 0-.993-.993H8.77c-.605 0-.918-.577-.816-1.037a1.288 1.288 0 0 0-1.257-1.567Zm0-1.25a2.538 2.538 0 0 1 2.537 2.604h1.415a2.242 2.242 0 0 1 2.243 2.242v1.417l.07-.001a2.538 2.538 0 1 1-.07 5.074v1.417a2.242 2.242 0 0 1-2.243 2.242H8.7a.717.717 0 0 1-.716-.718 1.288 1.288 0 1 0-2.575 0 .718.718 0 0 1-.717.718H2.744A2.242 2.242 0 0 1 .5 13.255v-1.88c0-.605.578-.92 1.039-.817a1.288 1.288 0 1 0 0-2.514C1.08 8.147.5 7.834.5 7.23V5.35a2.242 2.242 0 0 1 2.243-2.243h1.415V3.04A2.538 2.538 0 0 1 6.696.502Z","clip-rule":"evenodd"}]]

/**
 * @component @name Integrations
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi42OTYgMS43NTJBMS4yODggMS4yODggMCAwIDAgNS40NCAzLjMxOWMuMTAxLjQ2LS4yMTIgMS4wMzctLjgxNiAxLjAzN2gtMS44OGEuOTkyLjk5MiAwIDAgMC0uOTkyLjk5MnYxLjQxN2wuMDctLjAwMWEyLjUzOCAyLjUzOCAwIDEgMS0uMDcgNS4wNzR2MS40MTdjMCAuNTQ4LjQ0NS45OTIuOTkzLjk5MmgxLjQ3YTIuNTM5IDIuNTM5IDAgMCAxIDQuOTY0IDBoMS40N2EuOTkyLjk5MiAwIDAgMCAuOTkzLS45OTJ2LTEuODhjMC0uNjA2LjU3OC0uOTE5IDEuMDM4LS44MTZhMS4yODggMS4yODggMCAxIDAgMC0yLjUxNGMtLjQ2LjEwMi0xLjAzOC0uMjExLTEuMDM4LS44MTZ2LTEuODhhLjk5Mi45OTIgMCAwIDAtLjk5My0uOTkzSDguNzdjLS42MDUgMC0uOTE4LS41NzctLjgxNi0xLjAzN2ExLjI4OCAxLjI4OCAwIDAgMC0xLjI1Ny0xLjU2N1ptMC0xLjI1YTIuNTM4IDIuNTM4IDAgMCAxIDIuNTM3IDIuNjA0aDEuNDE1YTIuMjQyIDIuMjQyIDAgMCAxIDIuMjQzIDIuMjQydjEuNDE3bC4wNy0uMDAxYTIuNTM4IDIuNTM4IDAgMSAxLS4wNyA1LjA3NHYxLjQxN2EyLjI0MiAyLjI0MiAwIDAgMS0yLjI0MyAyLjI0Mkg4LjdhLjcxNy43MTcgMCAwIDEtLjcxNi0uNzE4IDEuMjg4IDEuMjg4IDAgMSAwLTIuNTc1IDAgLjcxOC43MTggMCAwIDEtLjcxNy43MThIMi43NDRBMi4yNDIgMi4yNDIgMCAwIDEgLjUgMTMuMjU1di0xLjg4YzAtLjYwNS41NzgtLjkyIDEuMDM5LS44MTdhMS4yODggMS4yODggMCAxIDAgMC0yLjUxNEMxLjA4IDguMTQ3LjUgNy44MzQuNSA3LjIzVjUuMzVhMi4yNDIgMi4yNDIgMCAwIDEgMi4yNDMtMi4yNDNoMS40MTVWMy4wNEEyLjUzOCAyLjUzOCAwIDAgMSA2LjY5Ni41MDJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Integrations = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-integrations',
        'staticon-Integrations',
        className
      ),
      ...props,
    })
);
Integrations.displayName = 'Integrations'

export default Integrations;
