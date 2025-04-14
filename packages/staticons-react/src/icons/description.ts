
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.875 5.002c0-1.174.952-2.125 2.125-2.125h10c1.173 0 2.124.951 2.124 2.125v6.903c0 .566-.225 1.108-.626 1.507l-3.109 3.093a2.125 2.125 0 0 1-1.498.618H5a2.125 2.125 0 0 1-2.126-2.125V5.002ZM5 4.127a.875.875 0 0 0-.875.875v9.996c0 .483.392.875.875.875h6.26v-2.735c0-1.036.84-1.875 1.876-1.875h2.738V5.002A.875.875 0 0 0 15 4.127H5Zm10.616 8.399-3.105 3.09v-2.478c0-.345.28-.625.625-.625h2.493l-.013.013Zm-2.893-2.947a.625.625 0 1 0 0-1.25H6.432a.625.625 0 1 0 0 1.25h6.291Zm.625-3.142c0 .345-.28.625-.625.625H6.432a.625.625 0 1 1 0-1.25h6.291c.346 0 .625.28.625.625ZM9.357 12.09a.625.625 0 1 0 0-1.25H6.432a.625.625 0 0 0 0 1.25h2.925Z","clip-rule":"evenodd"}]]

/**
 * @component @name Description
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi44NzUgNS4wMDJjMC0xLjE3NC45NTItMi4xMjUgMi4xMjUtMi4xMjVoMTBjMS4xNzMgMCAyLjEyNC45NTEgMi4xMjQgMi4xMjV2Ni45MDNjMCAuNTY2LS4yMjUgMS4xMDgtLjYyNiAxLjUwN2wtMy4xMDkgMy4wOTNhMi4xMjUgMi4xMjUgMCAwIDEtMS40OTguNjE4SDVhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjYtMi4xMjVWNS4wMDJaTTUgNC4xMjdhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2OS45OTZjMCAuNDgzLjM5Mi44NzUuODc1Ljg3NWg2LjI2di0yLjczNWMwLTEuMDM2Ljg0LTEuODc1IDEuODc2LTEuODc1aDIuNzM4VjUuMDAyQS44NzUuODc1IDAgMCAwIDE1IDQuMTI3SDVabTEwLjYxNiA4LjM5OS0zLjEwNSAzLjA5di0yLjQ3OGMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWgyLjQ5M2wtLjAxMy4wMTNabS0yLjg5My0yLjk0N2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVINi40MzJhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDYuMjkxWm0uNjI1LTMuMTQyYzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDYuNDMyYS42MjUuNjI1IDAgMSAxIDAtMS4yNWg2LjI5MWMuMzQ2IDAgLjYyNS4yOC42MjUuNjI1Wk05LjM1NyAxMi4wOWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINi40MzJhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDIuOTI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Description = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-description',
        'staticon-Description',
        className
      ),
      ...props,
    })
);
Description.displayName = 'Description'

export default Description;
