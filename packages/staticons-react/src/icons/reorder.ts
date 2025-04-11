
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.5 4.492c0-.967.784-1.75 1.75-1.75h4.49c.966 0 1.75.783 1.75 1.75v1.247a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75V4.492Zm1.75-.25a.25.25 0 0 0-.25.25v1.247c0 .138.112.25.25.25h4.49a.25.25 0 0 0 .25-.25V4.492a.25.25 0 0 0-.25-.25H4.25ZM2.5 11.119c0-.966.784-1.75 1.75-1.75h4.49c.966 0 1.75.784 1.75 1.75v1.247a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75V11.12Zm1.75-.25a.25.25 0 0 0-.25.25v1.247c0 .138.112.25.25.25h4.49a.25.25 0 0 0 .25-.25V11.12a.25.25 0 0 0-.25-.25H4.25Zm0 5.128a1.75 1.75 0 0 0-1.75 1.75v1.247c0 .967.784 1.75 1.75 1.75h4.49a1.75 1.75 0 0 0 1.75-1.75v-1.247a1.75 1.75 0 0 0-1.75-1.75H4.25ZM4 17.747a.25.25 0 0 1 .25-.25h4.49a.25.25 0 0 1 .25.25v1.247a.25.25 0 0 1-.25.25H4.25a.25.25 0 0 1-.25-.25v-1.247Zm10.292-.126.843-.844a.75.75 0 0 0-1.06-1.06l-1.769 1.769a1.25 1.25 0 0 0 0 1.768l1.769 1.77a.75.75 0 1 0 1.06-1.061l-.841-.842h4.361a2.845 2.845 0 0 0 2.846-2.846V7.211a2.845 2.845 0 0 0-2.846-2.846h-5.912a.75.75 0 0 0 0 1.5h5.912c.743 0 1.346.603 1.346 1.346v9.064c0 .744-.603 1.346-1.346 1.346h-4.363Z","clip-rule":"evenodd"}]]

/**
 * @component @name Reorder
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDQuNDkyYzAtLjk2Ny43ODQtMS43NSAxLjc1LTEuNzVoNC40OWMuOTY2IDAgMS43NS43ODMgMS43NSAxLjc1djEuMjQ3YTEuNzUgMS43NSAwIDAgMS0xLjc1IDEuNzVINC4yNWExLjc1IDEuNzUgMCAwIDEtMS43NS0xLjc1VjQuNDkyWm0xLjc1LS4yNWEuMjUuMjUgMCAwIDAtLjI1LjI1djEuMjQ3YzAgLjEzOC4xMTIuMjUuMjUuMjVoNC40OWEuMjUuMjUgMCAwIDAgLjI1LS4yNVY0LjQ5MmEuMjUuMjUgMCAwIDAtLjI1LS4yNUg0LjI1Wk0yLjUgMTEuMTE5YzAtLjk2Ni43ODQtMS43NSAxLjc1LTEuNzVoNC40OWMuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djEuMjQ3YTEuNzUgMS43NSAwIDAgMS0xLjc1IDEuNzVINC4yNWExLjc1IDEuNzUgMCAwIDEtMS43NS0xLjc1VjExLjEyWm0xLjc1LS4yNWEuMjUuMjUgMCAwIDAtLjI1LjI1djEuMjQ3YzAgLjEzOC4xMTIuMjUuMjUuMjVoNC40OWEuMjUuMjUgMCAwIDAgLjI1LS4yNVYxMS4xMmEuMjUuMjUgMCAwIDAtLjI1LS4yNUg0LjI1Wm0wIDUuMTI4YTEuNzUgMS43NSAwIDAgMC0xLjc1IDEuNzV2MS4yNDdjMCAuOTY3Ljc4NCAxLjc1IDEuNzUgMS43NWg0LjQ5YTEuNzUgMS43NSAwIDAgMCAxLjc1LTEuNzV2LTEuMjQ3YTEuNzUgMS43NSAwIDAgMC0xLjc1LTEuNzVINC4yNVpNNCAxNy43NDdhLjI1LjI1IDAgMCAxIC4yNS0uMjVoNC40OWEuMjUuMjUgMCAwIDEgLjI1LjI1djEuMjQ3YS4yNS4yNSAwIDAgMS0uMjUuMjVINC4yNWEuMjUuMjUgMCAwIDEtLjI1LS4yNXYtMS4yNDdabTEwLjI5Mi0uMTI2Ljg0My0uODQ0YS43NS43NSAwIDAgMC0xLjA2LTEuMDZsLTEuNzY5IDEuNzY5YTEuMjUgMS4yNSAwIDAgMCAwIDEuNzY4bDEuNzY5IDEuNzdhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNjFsLS44NDEtLjg0Mmg0LjM2MWEyLjg0NSAyLjg0NSAwIDAgMCAyLjg0Ni0yLjg0NlY3LjIxMWEyLjg0NSAyLjg0NSAwIDAgMC0yLjg0Ni0yLjg0NmgtNS45MTJhLjc1Ljc1IDAgMCAwIDAgMS41aDUuOTEyYy43NDMgMCAxLjM0Ni42MDMgMS4zNDYgMS4zNDZ2OS4wNjRjMCAuNzQ0LS42MDMgMS4zNDYtMS4zNDYgMS4zNDZoLTQuMzYzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Reorder = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-reorder',
        'staticon-Reorder',
        className
      ),
      ...props,
    })
);
Reorder.displayName = 'Reorder'

export default Reorder;
