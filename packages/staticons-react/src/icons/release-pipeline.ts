
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M18.596 5.345a.75.75 0 0 1 1.06 0l2.122 2.121a.75.75 0 0 1 0 1.06l-2.121 2.122a.75.75 0 1 1-1.061-1.06l.829-.83H2.763a.75.75 0 1 1 0-1.5h16.686l-.853-.853a.75.75 0 0 1 0-1.06Zm-9.47 11.78c0 .966.784 1.75 1.75 1.75h2.248a1.75 1.75 0 0 0 1.75-1.75v-2.248a1.75 1.75 0 0 0-1.75-1.75h-2.248a1.75 1.75 0 0 0-1.75 1.75v2.248Zm1.75.25a.25.25 0 0 1-.25-.25v-2.248a.25.25 0 0 1 .25-.25h2.248a.25.25 0 0 1 .25.25v2.248a.25.25 0 0 1-.25.25h-2.248Zm5.376-.25c0 .967.784 1.75 1.75 1.75h2.248a1.75 1.75 0 0 0 1.75-1.75v-2.248a1.75 1.75 0 0 0-1.75-1.75h-2.248a1.75 1.75 0 0 0-1.75 1.75v2.248Zm1.75.25a.25.25 0 0 1-.25-.25v-2.248a.25.25 0 0 1 .25-.25h2.248a.25.25 0 0 1 .25.25v2.248a.25.25 0 0 1-.25.25h-2.248ZM3.5 18.875a1.5 1.5 0 0 1-1.5-1.5v-2.748a1.5 1.5 0 0 1 1.5-1.5h2.747a1.5 1.5 0 0 1 1.5 1.5v2.748a1.5 1.5 0 0 1-1.5 1.5H3.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name ReleasePipeline
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguNTk2IDUuMzQ1YS43NS43NSAwIDAgMSAxLjA2IDBsMi4xMjIgMi4xMjFhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtMi4xMjEgMi4xMjJhLjc1Ljc1IDAgMSAxLTEuMDYxLTEuMDZsLjgyOS0uODNIMi43NjNhLjc1Ljc1IDAgMSAxIDAtMS41aDE2LjY4NmwtLjg1My0uODUzYS43NS43NSAwIDAgMSAwLTEuMDZabS05LjQ3IDExLjc4YzAgLjk2Ni43ODQgMS43NSAxLjc1IDEuNzVoMi4yNDhhMS43NSAxLjc1IDAgMCAwIDEuNzUtMS43NXYtMi4yNDhhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NWgtMi4yNDhhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NXYyLjI0OFptMS43NS4yNWEuMjUuMjUgMCAwIDEtLjI1LS4yNXYtMi4yNDhhLjI1LjI1IDAgMCAxIC4yNS0uMjVoMi4yNDhhLjI1LjI1IDAgMCAxIC4yNS4yNXYyLjI0OGEuMjUuMjUgMCAwIDEtLjI1LjI1aC0yLjI0OFptNS4zNzYtLjI1YzAgLjk2Ny43ODQgMS43NSAxLjc1IDEuNzVoMi4yNDhhMS43NSAxLjc1IDAgMCAwIDEuNzUtMS43NXYtMi4yNDhhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NWgtMi4yNDhhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NXYyLjI0OFptMS43NS4yNWEuMjUuMjUgMCAwIDEtLjI1LS4yNXYtMi4yNDhhLjI1LjI1IDAgMCAxIC4yNS0uMjVoMi4yNDhhLjI1LjI1IDAgMCAxIC4yNS4yNXYyLjI0OGEuMjUuMjUgMCAwIDEtLjI1LjI1aC0yLjI0OFpNMy41IDE4Ljg3NWExLjUgMS41IDAgMCAxLTEuNS0xLjV2LTIuNzQ4YTEuNSAxLjUgMCAwIDEgMS41LTEuNWgyLjc0N2ExLjUgMS41IDAgMCAxIDEuNSAxLjV2Mi43NDhhMS41IDEuNSAwIDAgMS0xLjUgMS41SDMuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
