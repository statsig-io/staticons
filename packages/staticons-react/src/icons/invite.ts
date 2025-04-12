
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.974 1.398a1.874 1.874 0 0 0-1.948 0L1.775 4.595c-.559.34-.9.946-.9 1.6v6.807c0 1.035.84 1.874 1.874 1.874h10.502a1.874 1.874 0 0 0 1.874-1.874V6.195c0-.654-.341-1.26-.9-1.6l-5.25-3.197ZM7.675 2.465c.2-.121.45-.121.65 0l5.25 3.197c.187.113.3.315.3.533v.194L8.318 9.66a.625.625 0 0 1-.634 0l-5.56-3.27v-.194c0-.218.114-.42.3-.533l5.251-3.197ZM2.125 7.84v5.163c0 .345.279.625.624.625h10.502c.345 0 .625-.28.625-.625V7.84L8.95 10.736a1.874 1.874 0 0 1-1.9 0L2.124 7.839Z","clip-rule":"evenodd"}]]

/**
 * @component @name Invite
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC45NzQgMS4zOThhMS44NzQgMS44NzQgMCAwIDAtMS45NDggMEwxLjc3NSA0LjU5NWMtLjU1OS4zNC0uOS45NDYtLjkgMS42djYuODA3YzAgMS4wMzUuODQgMS44NzQgMS44NzQgMS44NzRoMTAuNTAyYTEuODc0IDEuODc0IDAgMCAwIDEuODc0LTEuODc0VjYuMTk1YzAtLjY1NC0uMzQxLTEuMjYtLjktMS42bC01LjI1LTMuMTk3Wk03LjY3NSAyLjQ2NWMuMi0uMTIxLjQ1LS4xMjEuNjUgMGw1LjI1IDMuMTk3Yy4xODcuMTEzLjMuMzE1LjMuNTMzdi4xOTRMOC4zMTggOS42NmEuNjI1LjYyNSAwIDAgMS0uNjM0IDBsLTUuNTYtMy4yN3YtLjE5NGMwLS4yMTguMTE0LS40Mi4zLS41MzNsNS4yNTEtMy4xOTdaTTIuMTI1IDcuODR2NS4xNjNjMCAuMzQ1LjI3OS42MjUuNjI0LjYyNWgxMC41MDJjLjM0NSAwIC42MjUtLjI4LjYyNS0uNjI1VjcuODRMOC45NSAxMC43MzZhMS44NzQgMS44NzQgMCAwIDEtMS45IDBMMi4xMjQgNy44MzlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Invite = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-invite',
        'staticon-Invite',
        className
      ),
      ...props,
    })
);
Invite.displayName = 'Invite'

export default Invite;
