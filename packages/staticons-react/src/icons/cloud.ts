
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.97 9.441a5.75 5.75 0 0 1 5.651-4.692h.458a5.75 5.75 0 0 1 5.747 5.566l.03.978.462.033a3.968 3.968 0 0 1-.287 7.925H6.501a4.5 4.5 0 0 1-.893-8.912l.2-.04.161-.858Zm5.651-3.192a4.25 4.25 0 0 0-4.178 3.468l-.208 1.116a1.11 1.11 0 0 1-.871.884l-.458.092a3 3 0 0 0 .596 5.942h11.53a2.468 2.468 0 0 0 .177-4.929l-.827-.06a1.093 1.093 0 0 1-1.013-1.054l-.043-1.345A4.25 4.25 0 0 0 12.08 6.25h-.458Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cloud
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS45NyA5LjQ0MWE1Ljc1IDUuNzUgMCAwIDEgNS42NTEtNC42OTJoLjQ1OGE1Ljc1IDUuNzUgMCAwIDEgNS43NDcgNS41NjZsLjAzLjk3OC40NjIuMDMzYTMuOTY4IDMuOTY4IDAgMCAxLS4yODcgNy45MjVINi41MDFhNC41IDQuNSAwIDAgMS0uODkzLTguOTEybC4yLS4wNC4xNjEtLjg1OFptNS42NTEtMy4xOTJhNC4yNSA0LjI1IDAgMCAwLTQuMTc4IDMuNDY4bC0uMjA4IDEuMTE2YTEuMTEgMS4xMSAwIDAgMS0uODcxLjg4NGwtLjQ1OC4wOTJhMyAzIDAgMCAwIC41OTYgNS45NDJoMTEuNTNhMi40NjggMi40NjggMCAwIDAgLjE3Ny00LjkyOWwtLjgyNy0uMDZhMS4wOTMgMS4wOTMgMCAwIDEtMS4wMTMtMS4wNTRsLS4wNDMtMS4zNDVBNC4yNSA0LjI1IDAgMCAwIDEyLjA4IDYuMjVoLS40NThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cloud = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cloud',
        'staticon-Cloud',
        className
      ),
      ...props,
    })
);
Cloud.displayName = 'Cloud'

export default Cloud;
