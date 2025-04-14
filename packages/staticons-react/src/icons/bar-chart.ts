
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.09 4.124c0-.621.504-1.125 1.125-1.125h3.57c.621 0 1.125.504 1.125 1.125v2.579h3.465c.621 0 1.125.503 1.125 1.125v8.046c0 .622-.504 1.125-1.125 1.125H3.625A1.125 1.125 0 0 1 2.5 15.874v-5.018c0-.62.504-1.124 1.125-1.124H7.09V4.124Zm4.57 2.579v9.045H8.34V4.25h3.32v2.454Zm1.25 9.046h3.34V7.953h-3.34v7.796Zm-9.16-4.768v4.768h3.34V10.98H3.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name BarChart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4wOSA0LjEyNGMwLS42MjEuNTA0LTEuMTI1IDEuMTI1LTEuMTI1aDMuNTdjLjYyMSAwIDEuMTI1LjUwNCAxLjEyNSAxLjEyNXYyLjU3OWgzLjQ2NWMuNjIxIDAgMS4xMjUuNTAzIDEuMTI1IDEuMTI1djguMDQ2YzAgLjYyMi0uNTA0IDEuMTI1LTEuMTI1IDEuMTI1SDMuNjI1QTEuMTI1IDEuMTI1IDAgMCAxIDIuNSAxNS44NzR2LTUuMDE4YzAtLjYyLjUwNC0xLjEyNCAxLjEyNS0xLjEyNEg3LjA5VjQuMTI0Wm00LjU3IDIuNTc5djkuMDQ1SDguMzRWNC4yNWgzLjMydjIuNDU0Wm0xLjI1IDkuMDQ2aDMuMzRWNy45NTNoLTMuMzR2Ny43OTZabS05LjE2LTQuNzY4djQuNzY4aDMuMzRWMTAuOThIMy43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const BarChart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-bar-chart',
        'staticon-BarChart',
        className
      ),
      ...props,
    })
);
BarChart.displayName = 'BarChart'

export default BarChart;
