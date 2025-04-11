
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.36 5.311v-1.31a.75.75 0 0 0-1.501 0v1.31H5.752A2.752 2.752 0 0 0 3 8.063v9.935a2.752 2.752 0 0 0 2.752 2.752h12.496A2.752 2.752 0 0 0 21 17.998V8.063a2.752 2.752 0 0 0-2.752-2.752h-1.13v-1.31a.75.75 0 1 0-1.5 0v1.31H8.36ZM5.752 6.812c-.69 0-1.251.56-1.251 1.251v1.212h14.998V8.063c0-.69-.56-1.25-1.25-1.25H5.751ZM4.5 17.998v-7.222h14.998v7.222c0 .69-.56 1.25-1.25 1.25H5.751c-.69 0-1.251-.56-1.251-1.25Zm3.345-5.726c-.968 0-1.752.784-1.752 1.751v2.123c0 .967.784 1.751 1.752 1.751h2.122c.967 0 1.752-.784 1.752-1.751v-2.123c0-.967-.785-1.751-1.752-1.751H7.846Zm-.25 1.751a.25.25 0 0 1 .25-.25h2.122a.25.25 0 0 1 .25.25v2.123a.25.25 0 0 1-.25.25H7.846a.25.25 0 0 1-.25-.25v-2.123Z","clip-rule":"evenodd"}]]

/**
 * @component @name Events
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4zNiA1LjMxMXYtMS4zMWEuNzUuNzUgMCAwIDAtMS41MDEgMHYxLjMxSDUuNzUyQTIuNzUyIDIuNzUyIDAgMCAwIDMgOC4wNjN2OS45MzVhMi43NTIgMi43NTIgMCAwIDAgMi43NTIgMi43NTJoMTIuNDk2QTIuNzUyIDIuNzUyIDAgMCAwIDIxIDE3Ljk5OFY4LjA2M2EyLjc1MiAyLjc1MiAwIDAgMC0yLjc1Mi0yLjc1MmgtMS4xM3YtMS4zMWEuNzUuNzUgMCAxIDAtMS41IDB2MS4zMUg4LjM2Wk01Ljc1MiA2LjgxMmMtLjY5IDAtMS4yNTEuNTYtMS4yNTEgMS4yNTF2MS4yMTJoMTQuOTk4VjguMDYzYzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNUg1Ljc1MVpNNC41IDE3Ljk5OHYtNy4yMjJoMTQuOTk4djcuMjIyYzAgLjY5LS41NiAxLjI1LTEuMjUgMS4yNUg1Ljc1MWMtLjY5IDAtMS4yNTEtLjU2LTEuMjUxLTEuMjVabTMuMzQ1LTUuNzI2Yy0uOTY4IDAtMS43NTIuNzg0LTEuNzUyIDEuNzUxdjIuMTIzYzAgLjk2Ny43ODQgMS43NTEgMS43NTIgMS43NTFoMi4xMjJjLjk2NyAwIDEuNzUyLS43ODQgMS43NTItMS43NTF2LTIuMTIzYzAtLjk2Ny0uNzg1LTEuNzUxLTEuNzUyLTEuNzUxSDcuODQ2Wm0tLjI1IDEuNzUxYS4yNS4yNSAwIDAgMSAuMjUtLjI1aDIuMTIyYS4yNS4yNSAwIDAgMSAuMjUuMjV2Mi4xMjNhLjI1LjI1IDAgMCAxLS4yNS4yNUg3Ljg0NmEuMjUuMjUgMCAwIDEtLjI1LS4yNXYtMi4xMjNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Events = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-events',
        'staticon-Events',
        className
      ),
      ...props,
    })
);
Events.displayName = 'Events'

export default Events;
