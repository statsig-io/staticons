
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.954 4.916a.116.116 0 0 1 .065-.036.132.132 0 0 1 .072.01.132.132 0 0 1 .057.044c.01.014.02.034.02.07v9.99c0 .037-.01.058-.02.072a.132.132 0 0 1-.057.044.133.133 0 0 1-.072.01.117.117 0 0 1-.065-.036l-2.07-2.046a2.125 2.125 0 0 0-1.494-.613H4.124a.875.875 0 0 1-.875-.875v-3.1c0-.483.392-.875.875-.875H6.39c.559 0 1.096-.22 1.493-.613l2.071-2.047Zm1.463.089c0-1.221-1.473-1.837-2.341-.978L7.005 6.073a.875.875 0 0 1-.615.253H4.124a2.125 2.125 0 0 0-2.125 2.125v3.099c0 1.173.951 2.125 2.125 2.125H6.39c.23 0 .451.09.615.252l2.071 2.046c.869.858 2.341.243 2.341-.978v-9.99Zm6.402 2.56a.625.625 0 0 1 0 .884L16.268 10l1.55 1.551a.625.625 0 0 1-.884.884l-1.55-1.55-1.551 1.55a.625.625 0 1 1-.884-.884L14.5 10l-1.55-1.55a.625.625 0 1 1 .884-.884l1.55 1.55 1.55-1.55a.625.625 0 0 1 .884 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name VolumeOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS45NTQgNC45MTZhLjExNi4xMTYgMCAwIDEgLjA2NS0uMDM2LjEzMi4xMzIgMCAwIDEgLjA3Mi4wMS4xMzIuMTMyIDAgMCAxIC4wNTcuMDQ0Yy4wMS4wMTQuMDIuMDM0LjAyLjA3djkuOTljMCAuMDM3LS4wMS4wNTgtLjAyLjA3MmEuMTMyLjEzMiAwIDAgMS0uMDU3LjA0NC4xMzMuMTMzIDAgMCAxLS4wNzIuMDEuMTE3LjExNyAwIDAgMS0uMDY1LS4wMzZsLTIuMDctMi4wNDZhMi4xMjUgMi4xMjUgMCAwIDAtMS40OTQtLjYxM0g0LjEyNGEuODc1Ljg3NSAwIDAgMS0uODc1LS44NzV2LTMuMWMwLS40ODMuMzkyLS44NzUuODc1LS44NzVINi4zOWMuNTU5IDAgMS4wOTYtLjIyIDEuNDkzLS42MTNsMi4wNzEtMi4wNDdabTEuNDYzLjA4OWMwLTEuMjIxLTEuNDczLTEuODM3LTIuMzQxLS45NzhMNy4wMDUgNi4wNzNhLjg3NS44NzUgMCAwIDEtLjYxNS4yNTNINC4xMjRhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjV2My4wOTljMCAxLjE3My45NTEgMi4xMjUgMi4xMjUgMi4xMjVINi4zOWMuMjMgMCAuNDUxLjA5LjYxNS4yNTJsMi4wNzEgMi4wNDZjLjg2OS44NTggMi4zNDEuMjQzIDIuMzQxLS45Nzh2LTkuOTlabTYuNDAyIDIuNTZhLjYyNS42MjUgMCAwIDEgMCAuODg0TDE2LjI2OCAxMGwxLjU1IDEuNTUxYS42MjUuNjI1IDAgMCAxLS44ODQuODg0bC0xLjU1LTEuNTUtMS41NTEgMS41NWEuNjI1LjYyNSAwIDEgMS0uODg0LS44ODRMMTQuNSAxMGwtMS41NS0xLjU1YS42MjUuNjI1IDAgMSAxIC44ODQtLjg4NGwxLjU1IDEuNTUgMS41NS0xLjU1YS42MjUuNjI1IDAgMCAxIC44ODQgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const VolumeOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-volume-off',
        'staticon-VolumeOff',
        className
      ),
      ...props,
    })
);
VolumeOff.displayName = 'VolumeOff'

export default VolumeOff;
