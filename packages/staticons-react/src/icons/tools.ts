
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.805 8.752c-.242 1.458.252 3.096 1.37 4.214a4.493 4.493 0 0 0 4.958.95 1.285 1.285 0 0 1 1.455.303l4.17 4.556a1.428 1.428 0 1 0 2.016-2.02l-4.56-4.16a1.286 1.286 0 0 1-.303-1.458 4.499 4.499 0 0 0-.95-4.96c-1.118-1.119-2.755-1.613-4.212-1.37l2.464 2.464c.31.31.435.76.33 1.185l-.429 1.746a1.252 1.252 0 0 1-.916.917l-1.745.43a1.251 1.251 0 0 1-1.184-.331L4.805 8.752ZM3.49 7.79c.292-.965 1.43-1.049 2.006-.472l2.736 2.737 1.46-.36.359-1.46-2.736-2.738c-.576-.576-.492-1.715.473-2.007 2.12-.642 4.6-.012 6.235 1.624a6 6 0 0 1 1.325 6.48l4.438 4.05a2.933 2.933 0 0 1 .098 4.24 2.93 2.93 0 0 1-4.234-.094l-4.06-4.436a5.993 5.993 0 0 1-6.477-1.325C3.478 12.393 2.848 9.911 3.49 7.79Z","clip-rule":"evenodd"}]]

/**
 * @component @name Tools
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC44MDUgOC43NTJjLS4yNDIgMS40NTguMjUyIDMuMDk2IDEuMzcgNC4yMTRhNC40OTMgNC40OTMgMCAwIDAgNC45NTguOTUgMS4yODUgMS4yODUgMCAwIDEgMS40NTUuMzAzbDQuMTcgNC41NTZhMS40MjggMS40MjggMCAxIDAgMi4wMTYtMi4wMmwtNC41Ni00LjE2YTEuMjg2IDEuMjg2IDAgMCAxLS4zMDMtMS40NTggNC40OTkgNC40OTkgMCAwIDAtLjk1LTQuOTZjLTEuMTE4LTEuMTE5LTIuNzU1LTEuNjEzLTQuMjEyLTEuMzdsMi40NjQgMi40NjRjLjMxLjMxLjQzNS43Ni4zMyAxLjE4NWwtLjQyOSAxLjc0NmExLjI1MiAxLjI1MiAwIDAgMS0uOTE2LjkxN2wtMS43NDUuNDNhMS4yNTEgMS4yNTEgMCAwIDEtMS4xODQtLjMzMUw0LjgwNSA4Ljc1MlpNMy40OSA3Ljc5Yy4yOTItLjk2NSAxLjQzLTEuMDQ5IDIuMDA2LS40NzJsMi43MzYgMi43MzcgMS40Ni0uMzYuMzU5LTEuNDYtMi43MzYtMi43MzhjLS41NzYtLjU3Ni0uNDkyLTEuNzE1LjQ3My0yLjAwNyAyLjEyLS42NDIgNC42LS4wMTIgNi4yMzUgMS42MjRhNiA2IDAgMCAxIDEuMzI1IDYuNDhsNC40MzggNC4wNWEyLjkzMyAyLjkzMyAwIDAgMSAuMDk4IDQuMjQgMi45MyAyLjkzIDAgMCAxLTQuMjM0LS4wOTRsLTQuMDYtNC40MzZhNS45OTMgNS45OTMgMCAwIDEtNi40NzctMS4zMjVDMy40NzggMTIuMzkzIDIuODQ4IDkuOTExIDMuNDkgNy43OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Tools = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-tools',
        'staticon-Tools',
        className
      ),
      ...props,
    })
);
Tools.displayName = 'Tools'

export default Tools;
