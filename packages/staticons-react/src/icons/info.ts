
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 1.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5ZM8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.625 11.458a.625.625 0 1 1-1.25 0V7.453a.625.625 0 1 1 1.25 0v4.005ZM8 5.916a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z","clip-rule":"evenodd"}]]

/**
 * @component @name Info
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjc1YTYuMjUgNi4yNSAwIDEgMSAwIDEyLjUgNi4yNSA2LjI1IDAgMCAxIDAtMTIuNVpNOCAuNWE3LjUgNy41IDAgMSAxIDAgMTUgNy41IDcuNSAwIDAgMSAwLTE1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42MjUgMTEuNDU4YS42MjUuNjI1IDAgMSAxLTEuMjUgMFY3LjQ1M2EuNjI1LjYyNSAwIDEgMSAxLjI1IDB2NC4wMDVaTTggNS45MTZhMSAxIDAgMSAxIDAtMS45OTkgMSAxIDAgMCAxIDAgMS45OTlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Info = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-info',
        'staticon-Info',
        className
      ),
      ...props,
    })
);
Info.displayName = 'Info'

export default Info;
