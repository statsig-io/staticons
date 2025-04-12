
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.342 3.723a5.444 5.444 0 0 0-7.63.302.625.625 0 1 1-.912-.856 6.694 6.694 0 0 1 9.351-.4l-.031-.584a.625.625 0 1 1 1.248-.068l.103 1.88a.86.86 0 0 1-.81.905l-1.881.103a.625.625 0 1 1-.069-1.248l.63-.034Zm1.564 2.506a.625.625 0 0 1 1.2-.351 6.694 6.694 0 0 1-4.332 8.23l.52.264a.625.625 0 0 1-.565 1.115l-1.68-.85a.86.86 0 0 1-.378-1.155l.85-1.68a.625.625 0 0 1 1.116.564l-.286.566a5.444 5.444 0 0 0 3.556-6.703Zm-10.56.412.31.475a.625.625 0 0 0 1.047-.683L3.675 4.857a.86.86 0 0 0-1.19-.25L.91 5.638a.625.625 0 0 0 .684 1.046l.54-.353a6.694 6.694 0 0 0 4.957 7.925.625.625 0 0 0 .296-1.214 5.444 5.444 0 0 1-4.04-6.4Z","clip-rule":"evenodd"}]]

/**
 * @component @name Lifecycle
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMzQyIDMuNzIzYTUuNDQ0IDUuNDQ0IDAgMCAwLTcuNjMuMzAyLjYyNS42MjUgMCAxIDEtLjkxMi0uODU2IDYuNjk0IDYuNjk0IDAgMCAxIDkuMzUxLS40bC0uMDMxLS41ODRhLjYyNS42MjUgMCAxIDEgMS4yNDgtLjA2OGwuMTAzIDEuODhhLjg2Ljg2IDAgMCAxLS44MS45MDVsLTEuODgxLjEwM2EuNjI1LjYyNSAwIDEgMS0uMDY5LTEuMjQ4bC42My0uMDM0Wm0xLjU2NCAyLjUwNmEuNjI1LjYyNSAwIDAgMSAxLjItLjM1MSA2LjY5NCA2LjY5NCAwIDAgMS00LjMzMiA4LjIzbC41Mi4yNjRhLjYyNS42MjUgMCAwIDEtLjU2NSAxLjExNWwtMS42OC0uODVhLjg2Ljg2IDAgMCAxLS4zNzgtMS4xNTVsLjg1LTEuNjhhLjYyNS42MjUgMCAwIDEgMS4xMTYuNTY0bC0uMjg2LjU2NmE1LjQ0NCA1LjQ0NCAwIDAgMCAzLjU1Ni02LjcwM1ptLTEwLjU2LjQxMi4zMS40NzVhLjYyNS42MjUgMCAwIDAgMS4wNDctLjY4M0wzLjY3NSA0Ljg1N2EuODYuODYgMCAwIDAtMS4xOS0uMjVMLjkxIDUuNjM4YS42MjUuNjI1IDAgMCAwIC42ODQgMS4wNDZsLjU0LS4zNTNhNi42OTQgNi42OTQgMCAwIDAgNC45NTcgNy45MjUuNjI1LjYyNSAwIDAgMCAuMjk2LTEuMjE0IDUuNDQ0IDUuNDQ0IDAgMCAxLTQuMDQtNi40WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Lifecycle = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-lifecycle',
        'staticon-Lifecycle',
        className
      ),
      ...props,
    })
);
Lifecycle.displayName = 'Lifecycle'

export default Lifecycle;
