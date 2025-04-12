
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.407 2.77a5.618 5.618 0 1 0 5.823 5.824H9.032a1.625 1.625 0 0 1-1.625-1.625V2.77Zm7.077 5.614a6.868 6.868 0 1 1-6.868-6.867c.285-.505.835-.852 1.505-.752a7.289 7.289 0 0 1 6.114 6.114c.1.67-.247 1.22-.751 1.505ZM8.657 2.309c0-.106.043-.194.1-.248A.203.203 0 0 1 8.935 2 6.039 6.039 0 0 1 14 7.066a.203.203 0 0 1-.06.179.344.344 0 0 1-.248.1H9.03a.375.375 0 0 1-.374-.375V2.31Z","clip-rule":"evenodd"}]]

/**
 * @component @name Segments
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy40MDcgMi43N2E1LjYxOCA1LjYxOCAwIDEgMCA1LjgyMyA1LjgyNEg5LjAzMmExLjYyNSAxLjYyNSAwIDAgMS0xLjYyNS0xLjYyNVYyLjc3Wm03LjA3NyA1LjYxNGE2Ljg2OCA2Ljg2OCAwIDEgMS02Ljg2OC02Ljg2N2MuMjg1LS41MDUuODM1LS44NTIgMS41MDUtLjc1MmE3LjI4OSA3LjI4OSAwIDAgMSA2LjExNCA2LjExNGMuMS42Ny0uMjQ3IDEuMjItLjc1MSAxLjUwNVpNOC42NTcgMi4zMDljMC0uMTA2LjA0My0uMTk0LjEtLjI0OEEuMjAzLjIwMyAwIDAgMSA4LjkzNSAyIDYuMDM5IDYuMDM5IDAgMCAxIDE0IDcuMDY2YS4yMDMuMjAzIDAgMCAxLS4wNi4xNzkuMzQ0LjM0NCAwIDAgMS0uMjQ4LjFIOS4wM2EuMzc1LjM3NSAwIDAgMS0uMzc0LS4zNzVWMi4zMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Segments = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-segments',
        'staticon-Segments',
        className
      ),
      ...props,
    })
);
Segments.displayName = 'Segments'

export default Segments;
