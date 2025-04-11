
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.006 8.47c-.062-.885.28-1.664.948-2.239.677-.583 1.72-.979 3.056-.979 2.578 0 3.991 1.91 3.991 3.27a.75.75 0 0 0 1.5 0c0-2.252-2.15-4.77-5.49-4.77-1.625 0-3.037.482-4.036 1.343-1.009.87-1.562 2.1-1.465 3.48.088 1.256.721 2.093 1.557 2.675H3.25a.75.75 0 0 0 0 1.5h8.639c.119.036.237.07.353.106.978.292 1.847.551 2.534.94.742.42 1.16.928 1.218 1.735.062.885-.28 1.663-.948 2.238-.677.583-1.72.98-3.056.98-2.578 0-3.991-1.91-3.991-3.27a.75.75 0 0 0-1.5 0c0 2.25 2.15 4.77 5.49 4.77 1.625 0 3.037-.483 4.036-1.344 1.009-.87 1.562-2.1 1.465-3.48-.088-1.255-.724-2.093-1.561-2.675h4.821a.75.75 0 0 0 0-1.5h-8.64l-.372-.112c-.977-.291-1.84-.55-2.523-.937-.736-.417-1.152-.922-1.209-1.732Z","clip-rule":"evenodd"}]]

/**
 * @component @name StrikethroughS
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4wMDYgOC40N2MtLjA2Mi0uODg1LjI4LTEuNjY0Ljk0OC0yLjIzOS42NzctLjU4MyAxLjcyLS45NzkgMy4wNTYtLjk3OSAyLjU3OCAwIDMuOTkxIDEuOTEgMy45OTEgMy4yN2EuNzUuNzUgMCAwIDAgMS41IDBjMC0yLjI1Mi0yLjE1LTQuNzctNS40OS00Ljc3LTEuNjI1IDAtMy4wMzcuNDgyLTQuMDM2IDEuMzQzLTEuMDA5Ljg3LTEuNTYyIDIuMS0xLjQ2NSAzLjQ4LjA4OCAxLjI1Ni43MjEgMi4wOTMgMS41NTcgMi42NzVIMy4yNWEuNzUuNzUgMCAwIDAgMCAxLjVoOC42MzljLjExOS4wMzYuMjM3LjA3LjM1My4xMDYuOTc4LjI5MiAxLjg0Ny41NTEgMi41MzQuOTQuNzQyLjQyIDEuMTYuOTI4IDEuMjE4IDEuNzM1LjA2Mi44ODUtLjI4IDEuNjYzLS45NDggMi4yMzgtLjY3Ny41ODMtMS43Mi45OC0zLjA1Ni45OC0yLjU3OCAwLTMuOTkxLTEuOTEtMy45OTEtMy4yN2EuNzUuNzUgMCAwIDAtMS41IDBjMCAyLjI1IDIuMTUgNC43NyA1LjQ5IDQuNzcgMS42MjUgMCAzLjAzNy0uNDgzIDQuMDM2LTEuMzQ0IDEuMDA5LS44NyAxLjU2Mi0yLjEgMS40NjUtMy40OC0uMDg4LTEuMjU1LS43MjQtMi4wOTMtMS41NjEtMi42NzVoNC44MjFhLjc1Ljc1IDAgMCAwIDAtMS41aC04LjY0bC0uMzcyLS4xMTJjLS45NzctLjI5MS0xLjg0LS41NS0yLjUyMy0uOTM3LS43MzYtLjQxNy0xLjE1Mi0uOTIyLTEuMjA5LTEuNzMyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StrikethroughS = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-strikethrough-s',
        'staticon-StrikethroughS',
        className
      ),
      ...props,
    })
);
StrikethroughS.displayName = 'StrikethroughS'

export default StrikethroughS;
