
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M10.79 7.238a.625.625 0 0 0 0-1.25H9.195a.625.625 0 1 0 0 1.25h1.595Z"}],["path",{"fill-rule":"evenodd","d":"M3.393 5.623c0-1.174.951-2.125 2.125-2.125h8.965c1.173 0 2.125.951 2.125 2.125v6.914h.518c.484 0 .875.392.875.875v.715a2.375 2.375 0 0 1-2.375 2.375H4.374a2.375 2.375 0 0 1-2.375-2.375v-.715c0-.483.391-.875.875-.875h.52V5.623Zm-.144 8.164v.34c0 .621.503 1.125 1.125 1.125h11.253c.62 0 1.124-.504 1.124-1.125v-.34H3.25Zm12.109-8.164v6.914H4.643V5.623c0-.483.392-.875.875-.875h8.965c.483 0 .875.392.875.875Z","clip-rule":"evenodd"}]]

/**
 * @component @name Computer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTEwLjc5IDcuMjM4YS42MjUuNjI1IDAgMCAwIDAtMS4yNUg5LjE5NWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMS41OTVaIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zOTMgNS42MjNjMC0xLjE3NC45NTEtMi4xMjUgMi4xMjUtMi4xMjVoOC45NjVjMS4xNzMgMCAyLjEyNS45NTEgMi4xMjUgMi4xMjV2Ni45MTRoLjUxOGMuNDg0IDAgLjg3NS4zOTIuODc1Ljg3NXYuNzE1YTIuMzc1IDIuMzc1IDAgMCAxLTIuMzc1IDIuMzc1SDQuMzc0YTIuMzc1IDIuMzc1IDAgMCAxLTIuMzc1LTIuMzc1di0uNzE1YzAtLjQ4My4zOTEtLjg3NS44NzUtLjg3NWguNTJWNS42MjNabS0uMTQ0IDguMTY0di4zNGMwIC42MjEuNTAzIDEuMTI1IDEuMTI1IDEuMTI1aDExLjI1M2MuNjIgMCAxLjEyNC0uNTA0IDEuMTI0LTEuMTI1di0uMzRIMy4yNVptMTIuMTA5LTguMTY0djYuOTE0SDQuNjQzVjUuNjIzYzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWg4Ljk2NWMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Computer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-computer',
        'staticon-Computer',
        className
      ),
      ...props,
    })
);
Computer.displayName = 'Computer'

export default Computer;
