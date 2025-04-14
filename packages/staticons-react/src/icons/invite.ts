
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.545 4.128c.28-.17.63-.17.91 0l5.5 3.348c.26.158.42.442.42.747v.149l-5.931 3.489a.875.875 0 0 1-.888 0L3.625 8.37v-.148c0-.305.16-.589.42-.747l5.5-3.348Zm-5.92 5.694v5.303c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875V9.822l-5.298 3.116a2.125 2.125 0 0 1-2.154 0L3.625 9.822Zm7.48-6.762a2.125 2.125 0 0 0-2.21 0l-5.5 3.348a2.125 2.125 0 0 0-1.02 1.815v6.902c0 1.174.951 2.125 2.125 2.125h11a2.125 2.125 0 0 0 2.125-2.125V8.223c0-.742-.387-1.43-1.02-1.815l-5.5-3.348Z","clip-rule":"evenodd"}]]

/**
 * @component @name Invite
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS41NDUgNC4xMjhjLjI4LS4xNy42My0uMTcuOTEgMGw1LjUgMy4zNDhjLjI2LjE1OC40Mi40NDIuNDIuNzQ3di4xNDlsLTUuOTMxIDMuNDg5YS44NzUuODc1IDAgMCAxLS44ODggMEwzLjYyNSA4LjM3di0uMTQ4YzAtLjMwNS4xNi0uNTg5LjQyLS43NDdsNS41LTMuMzQ4Wm0tNS45MiA1LjY5NHY1LjMwM2MwIC40ODMuMzkyLjg3NS44NzUuODc1aDExYS44NzUuODc1IDAgMCAwIC44NzUtLjg3NVY5LjgyMmwtNS4yOTggMy4xMTZhMi4xMjUgMi4xMjUgMCAwIDEtMi4xNTQgMEwzLjYyNSA5LjgyMlptNy40OC02Ljc2MmEyLjEyNSAyLjEyNSAwIDAgMC0yLjIxIDBsLTUuNSAzLjM0OGEyLjEyNSAyLjEyNSAwIDAgMC0xLjAyIDEuODE1djYuOTAyYzAgMS4xNzQuOTUxIDIuMTI1IDIuMTI1IDIuMTI1aDExYTIuMTI1IDIuMTI1IDAgMCAwIDIuMTI1LTIuMTI1VjguMjIzYzAtLjc0Mi0uMzg3LTEuNDMtMS4wMi0xLjgxNWwtNS41LTMuMzQ4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
