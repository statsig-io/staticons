
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10.116 4.582c0 1.15.932 2.083 2.083 2.083h2.593a2.083 2.083 0 0 0 0-4.166h-2.593c-1.15 0-2.083.933-2.083 2.083Zm2.083.833a.833.833 0 0 1 0-1.666h2.593a.833.833 0 0 1 0 1.666h-2.593ZM10.116 10c0 1.15.932 2.083 2.083 2.083h2.593a2.083 2.083 0 0 0 0-4.166h-2.593c-1.15 0-2.083.932-2.083 2.083Zm2.083.833a.833.833 0 0 1 0-1.666h2.593a.833.833 0 0 1 0 1.666h-2.593Zm0 6.668a2.083 2.083 0 1 1 0-4.166h2.593a2.083 2.083 0 0 1 0 4.166h-2.593Zm-.833-2.083c0 .46.373.833.833.833h2.593a.833.833 0 1 0 0-1.666h-2.593a.833.833 0 0 0-.833.833ZM3.75 3.957a.625.625 0 1 0 0 1.25h4.393a.625.625 0 0 0 0-1.25H3.75ZM3.125 10c0-.345.28-.625.625-.625h4.393a.625.625 0 0 1 0 1.25H3.75A.625.625 0 0 1 3.125 10Zm.625 4.793a.625.625 0 1 0 0 1.25h4.393a.625.625 0 1 0 0-1.25H3.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name EnvironmentView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMTE2IDQuNTgyYzAgMS4xNS45MzIgMi4wODMgMi4wODMgMi4wODNoMi41OTNhMi4wODMgMi4wODMgMCAwIDAgMC00LjE2NmgtMi41OTNjLTEuMTUgMC0yLjA4My45MzMtMi4wODMgMi4wODNabTIuMDgzLjgzM2EuODMzLjgzMyAwIDAgMSAwLTEuNjY2aDIuNTkzYS44MzMuODMzIDAgMCAxIDAgMS42NjZoLTIuNTkzWk0xMC4xMTYgMTBjMCAxLjE1LjkzMiAyLjA4MyAyLjA4MyAyLjA4M2gyLjU5M2EyLjA4MyAyLjA4MyAwIDAgMCAwLTQuMTY2aC0yLjU5M2MtMS4xNSAwLTIuMDgzLjkzMi0yLjA4MyAyLjA4M1ptMi4wODMuODMzYS44MzMuODMzIDAgMCAxIDAtMS42NjZoMi41OTNhLjgzMy44MzMgMCAwIDEgMCAxLjY2NmgtMi41OTNabTAgNi42NjhhMi4wODMgMi4wODMgMCAxIDEgMC00LjE2NmgyLjU5M2EyLjA4MyAyLjA4MyAwIDAgMSAwIDQuMTY2aC0yLjU5M1ptLS44MzMtMi4wODNjMCAuNDYuMzczLjgzMy44MzMuODMzaDIuNTkzYS44MzMuODMzIDAgMSAwIDAtMS42NjZoLTIuNTkzYS44MzMuODMzIDAgMCAwLS44MzMuODMzWk0zLjc1IDMuOTU3YS42MjUuNjI1IDAgMSAwIDAgMS4yNWg0LjM5M2EuNjI1LjYyNSAwIDAgMCAwLTEuMjVIMy43NVpNMy4xMjUgMTBjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNC4zOTNhLjYyNS42MjUgMCAwIDEgMCAxLjI1SDMuNzVBLjYyNS42MjUgMCAwIDEgMy4xMjUgMTBabS42MjUgNC43OTNhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDQuMzkzYS42MjUuNjI1IDAgMSAwIDAtMS4yNUgzLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EnvironmentView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-environment-view',
        'staticon-EnvironmentView',
        className
      ),
      ...props,
    })
);
EnvironmentView.displayName = 'EnvironmentView'

export default EnvironmentView;
