
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m3.552 12.806-.037-.037a4.745 4.745 0 0 1 0-6.71L5.56 4.014a4.745 4.745 0 0 1 6.307-.36 4.75 4.75 0 0 1 6.293.378l2.033 2.033a5.744 5.744 0 0 1 0 8.122l-6.535 6.535a2.233 2.233 0 0 1-3.807-1.434 2.224 2.224 0 0 1-1.446-.65 2.224 2.224 0 0 1-.65-1.449 2.224 2.224 0 0 1-1.452-.65 2.225 2.225 0 0 1-.65-1.462 2.225 2.225 0 0 1-1.448-.65 2.227 2.227 0 0 1-.653-1.621Zm9.411-8.099 1.99 1.99a2.416 2.416 0 0 1-3.417 3.416L9.508 8.085l-4.243 4.243a.735.735 0 1 0 1.039 1.04l2.827-2.829a.75.75 0 0 1 1.28.549.747.747 0 0 1-.22.525L7.363 14.44a.735.735 0 1 0 1.039 1.038l2.828-2.827a.747.747 0 0 1 .551-.22.75.75 0 0 1 .511 1.279l-2.827 2.83a.735.735 0 0 0 .951 1.114l.085-.09 2.827-2.827a.75.75 0 0 1 1.264.378.748.748 0 0 1-.201.696l-2.828 2.827a2.297 2.297 0 0 1-.08.077.735.735 0 0 0 1.116.948l6.534-6.534a4.245 4.245 0 0 0 0-6.004L17.1 5.091a3.253 3.253 0 0 0-4.137-.384ZM10.09 6.551l.033.03 2.472 2.473a.918.918 0 0 0 1.298-1.298L11.21 5.073a3.246 3.246 0 0 0-4.591 0L4.574 7.118a3.247 3.247 0 0 0-.369 4.151L8.98 6.494a.75.75 0 0 1 1.11.057Z","clip-rule":"evenodd"}]]

/**
 * @component @name Collaboration
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMy41NTIgMTIuODA2LS4wMzctLjAzN2E0Ljc0NSA0Ljc0NSAwIDAgMSAwLTYuNzFMNS41NiA0LjAxNGE0Ljc0NSA0Ljc0NSAwIDAgMSA2LjMwNy0uMzYgNC43NSA0Ljc1IDAgMCAxIDYuMjkzLjM3OGwyLjAzMyAyLjAzM2E1Ljc0NCA1Ljc0NCAwIDAgMSAwIDguMTIybC02LjUzNSA2LjUzNWEyLjIzMyAyLjIzMyAwIDAgMS0zLjgwNy0xLjQzNCAyLjIyNCAyLjIyNCAwIDAgMS0xLjQ0Ni0uNjUgMi4yMjQgMi4yMjQgMCAwIDEtLjY1LTEuNDQ5IDIuMjI0IDIuMjI0IDAgMCAxLTEuNDUyLS42NSAyLjIyNSAyLjIyNSAwIDAgMS0uNjUtMS40NjIgMi4yMjUgMi4yMjUgMCAwIDEtMS40NDgtLjY1IDIuMjI3IDIuMjI3IDAgMCAxLS42NTMtMS42MjFabTkuNDExLTguMDk5IDEuOTkgMS45OWEyLjQxNiAyLjQxNiAwIDAgMS0zLjQxNyAzLjQxNkw5LjUwOCA4LjA4NWwtNC4yNDMgNC4yNDNhLjczNS43MzUgMCAxIDAgMS4wMzkgMS4wNGwyLjgyNy0yLjgyOWEuNzUuNzUgMCAwIDEgMS4yOC41NDkuNzQ3Ljc0NyAwIDAgMS0uMjIuNTI1TDcuMzYzIDE0LjQ0YS43MzUuNzM1IDAgMSAwIDEuMDM5IDEuMDM4bDIuODI4LTIuODI3YS43NDcuNzQ3IDAgMCAxIC41NTEtLjIyLjc1Ljc1IDAgMCAxIC41MTEgMS4yNzlsLTIuODI3IDIuODNhLjczNS43MzUgMCAwIDAgLjk1MSAxLjExNGwuMDg1LS4wOSAyLjgyNy0yLjgyN2EuNzUuNzUgMCAwIDEgMS4yNjQuMzc4Ljc0OC43NDggMCAwIDEtLjIwMS42OTZsLTIuODI4IDIuODI3YTIuMjk3IDIuMjk3IDAgMCAxLS4wOC4wNzcuNzM1LjczNSAwIDAgMCAxLjExNi45NDhsNi41MzQtNi41MzRhNC4yNDUgNC4yNDUgMCAwIDAgMC02LjAwNEwxNy4xIDUuMDkxYTMuMjUzIDMuMjUzIDAgMCAwLTQuMTM3LS4zODRaTTEwLjA5IDYuNTUxbC4wMzMuMDMgMi40NzIgMi40NzNhLjkxOC45MTggMCAwIDAgMS4yOTgtMS4yOThMMTEuMjEgNS4wNzNhMy4yNDYgMy4yNDYgMCAwIDAtNC41OTEgMEw0LjU3NCA3LjExOGEzLjI0NyAzLjI0NyAwIDAgMC0uMzY5IDQuMTUxTDguOTggNi40OTRhLjc1Ljc1IDAgMCAxIDEuMTEuMDU3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Collaboration = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-collaboration',
        'staticon-Collaboration',
        className
      ),
      ...props,
    })
);
Collaboration.displayName = 'Collaboration'

export default Collaboration;
