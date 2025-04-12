
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M.499 3.376c0-1.036.84-1.875 1.875-1.875h8.78c1.036 0 1.875.84 1.875 1.875v2.356h.847c.897 0 1.625.728 1.625 1.625v3.9c0 .883-.705 1.602-1.583 1.624v.841a.775.775 0 0 1-1.242.619l-1.932-1.46H8.022a1.625 1.625 0 0 1-1.625-1.625v-.455l-2.33 1.58a.775.775 0 0 1-1.21-.642v-1.221h-.483A1.875 1.875 0 0 1 .499 8.643V3.376Zm12.53 5.267v-1.66h.847c.207 0 .375.167.375.374v3.9a.375.375 0 0 1-.375.374h-.433a.775.775 0 0 0-.775.775v.362l-1.204-.91a1.125 1.125 0 0 0-.678-.226H8.022a.375.375 0 0 1-.375-.376v-.738h3.507c1.036 0 1.875-.84 1.875-1.875ZM2.374 2.75a.625.625 0 0 0-.625.625v5.267c0 .345.28.625.625.625h.858c.483 0 .875.392.875.875v.7L6.235 9.4a.775.775 0 0 1 .434-.133h4.485c.345 0 .625-.28.625-.625V3.376a.625.625 0 0 0-.625-.625h-8.78Zm1.331 2.642a.765.765 0 1 0 0 1.53.765.765 0 0 0 0-1.53Zm5.354.765a.765.765 0 1 1 1.53 0 .765.765 0 0 1-1.53 0Zm-2.295-.765a.765.765 0 1 0 0 1.53.765.765 0 0 0 0-1.53Z","clip-rule":"evenodd"}]]

/**
 * @component @name Discussion
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjQ5OSAzLjM3NmMwLTEuMDM2Ljg0LTEuODc1IDEuODc1LTEuODc1aDguNzhjMS4wMzYgMCAxLjg3NS44NCAxLjg3NSAxLjg3NXYyLjM1NmguODQ3Yy44OTcgMCAxLjYyNS43MjggMS42MjUgMS42MjV2My45YzAgLjg4My0uNzA1IDEuNjAyLTEuNTgzIDEuNjI0di44NDFhLjc3NS43NzUgMCAwIDEtMS4yNDIuNjE5bC0xLjkzMi0xLjQ2SDguMDIyYTEuNjI1IDEuNjI1IDAgMCAxLTEuNjI1LTEuNjI1di0uNDU1bC0yLjMzIDEuNThhLjc3NS43NzUgMCAwIDEtMS4yMS0uNjQydi0xLjIyMWgtLjQ4M0ExLjg3NSAxLjg3NSAwIDAgMSAuNDk5IDguNjQzVjMuMzc2Wm0xMi41MyA1LjI2N3YtMS42NmguODQ3Yy4yMDcgMCAuMzc1LjE2Ny4zNzUuMzc0djMuOWEuMzc1LjM3NSAwIDAgMS0uMzc1LjM3NGgtLjQzM2EuNzc1Ljc3NSAwIDAgMC0uNzc1Ljc3NXYuMzYybC0xLjIwNC0uOTFhMS4xMjUgMS4xMjUgMCAwIDAtLjY3OC0uMjI2SDguMDIyYS4zNzUuMzc1IDAgMCAxLS4zNzUtLjM3NnYtLjczOGgzLjUwN2MxLjAzNiAwIDEuODc1LS44NCAxLjg3NS0xLjg3NVpNMi4zNzQgMi43NWEuNjI1LjYyNSAwIDAgMC0uNjI1LjYyNXY1LjI2N2MwIC4zNDUuMjguNjI1LjYyNS42MjVoLjg1OGMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NXYuN0w2LjIzNSA5LjRhLjc3NS43NzUgMCAwIDEgLjQzNC0uMTMzaDQuNDg1Yy4zNDUgMCAuNjI1LS4yOC42MjUtLjYyNVYzLjM3NmEuNjI1LjYyNSAwIDAgMC0uNjI1LS42MjVoLTguNzhabTEuMzMxIDIuNjQyYS43NjUuNzY1IDAgMSAwIDAgMS41My43NjUuNzY1IDAgMCAwIDAtMS41M1ptNS4zNTQuNzY1YS43NjUuNzY1IDAgMSAxIDEuNTMgMCAuNzY1Ljc2NSAwIDAgMS0xLjUzIDBabS0yLjI5NS0uNzY1YS43NjUuNzY1IDAgMSAwIDAgMS41My43NjUuNzY1IDAgMCAwIDAtMS41M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Discussion = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-discussion',
        'staticon-Discussion',
        className
      ),
      ...props,
    })
);
Discussion.displayName = 'Discussion'

export default Discussion;
