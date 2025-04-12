
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.736 3.057a.625.625 0 0 0-.884.884l.52.52H1.127a.625.625 0 0 0 0 1.25h12.226l-.501.5a.625.625 0 1 0 .884.885l1.577-1.578a.625.625 0 0 0 0-.884l-1.577-1.577ZM1.559 13.122a1 1 0 0 1-1-1V9.721a1 1 0 0 1 1-1H3.96a1 1 0 0 1 1 1v2.401a1 1 0 0 1-1 1h-2.4Zm5.362.004A1.125 1.125 0 0 1 5.796 12V9.841c0-.621.504-1.125 1.125-1.125h2.158c.621 0 1.125.504 1.125 1.125V12c0 .62-.504 1.125-1.125 1.125H6.921Zm.125-1.25h1.908v-1.91H7.046v1.909Zm5.168 1.25A1.125 1.125 0 0 1 11.09 12V9.841c0-.621.504-1.125 1.125-1.125h2.159c.621 0 1.125.504 1.125 1.125V12c0 .62-.504 1.125-1.125 1.125h-2.159Zm.125-1.25h1.909v-1.91h-1.909v1.909Z","clip-rule":"evenodd"}]]

/**
 * @component @name ReleasePipeline
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNzM2IDMuMDU3YS42MjUuNjI1IDAgMCAwLS44ODQuODg0bC41Mi41MkgxLjEyN2EuNjI1LjYyNSAwIDAgMCAwIDEuMjVoMTIuMjI2bC0uNTAxLjVhLjYyNS42MjUgMCAxIDAgLjg4NC44ODVsMS41NzctMS41NzhhLjYyNS42MjUgMCAwIDAgMC0uODg0bC0xLjU3Ny0xLjU3N1pNMS41NTkgMTMuMTIyYTEgMSAwIDAgMS0xLTFWOS43MjFhMSAxIDAgMCAxIDEtMUgzLjk2YTEgMSAwIDAgMSAxIDF2Mi40MDFhMSAxIDAgMCAxLTEgMWgtMi40Wm01LjM2Mi4wMDRBMS4xMjUgMS4xMjUgMCAwIDEgNS43OTYgMTJWOS44NDFjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWgyLjE1OGMuNjIxIDAgMS4xMjUuNTA0IDEuMTI1IDEuMTI1VjEyYzAgLjYyLS41MDQgMS4xMjUtMS4xMjUgMS4xMjVINi45MjFabS4xMjUtMS4yNWgxLjkwOHYtMS45MUg3LjA0NnYxLjkwOVptNS4xNjggMS4yNUExLjEyNSAxLjEyNSAwIDAgMSAxMS4wOSAxMlY5Ljg0MWMwLS42MjEuNTA0LTEuMTI1IDEuMTI1LTEuMTI1aDIuMTU5Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjVWMTJjMCAuNjItLjUwNCAxLjEyNS0xLjEyNSAxLjEyNWgtMi4xNTlabS4xMjUtMS4yNWgxLjkwOXYtMS45MWgtMS45MDl2MS45MDlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ReleasePipeline = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-release-pipeline',
        'staticon-ReleasePipeline',
        className
      ),
      ...props,
    })
);
ReleasePipeline.displayName = 'ReleasePipeline'

export default ReleasePipeline;
