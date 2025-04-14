
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.103 3.523v-.9a.625.625 0 1 0-1.25 0v.9h-.728A2.125 2.125 0 0 0 2 5.648v7.136c0 1.174.95 2.125 2.125 2.125h4.662A4.758 4.758 0 0 0 18 13.246a4.756 4.756 0 0 0-2.544-4.212V5.648a2.125 2.125 0 0 0-2.125-2.125h-.747v-.9a.625.625 0 1 0-1.25 0v.9h-5.23Zm8.103 5.064v-.882H3.25v5.08c0 .483.391.874.875.874h4.38a4.756 4.756 0 0 1 5.7-5.073Zm0-2.94v.808H3.25v-.807c0-.484.391-.875.875-.875h9.206c.483 0 .875.391.875.875Zm-.962 11.105a3.49 3.49 0 0 0 1.75-.468c-.323-.698-.935-1.23-1.722-1.23-.795 0-1.417.544-1.742 1.25a3.49 3.49 0 0 0 1.714.448Zm1.652-2.463c.454.302.812.718 1.07 1.166a3.506 3.506 0 1 0-5.417.034c.257-.45.612-.87 1.063-1.178a2.166 2.166 0 1 1 3.284-.022Zm-2.568-1.402a.916.916 0 1 1 1.833 0 .916.916 0 0 1-1.833 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name EventUser
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMDMgMy41MjN2LS45YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYuOWgtLjcyOEEyLjEyNSAyLjEyNSAwIDAgMCAyIDUuNjQ4djcuMTM2YzAgMS4xNzQuOTUgMi4xMjUgMi4xMjUgMi4xMjVoNC42NjJBNC43NTggNC43NTggMCAwIDAgMTggMTMuMjQ2YTQuNzU2IDQuNzU2IDAgMCAwLTIuNTQ0LTQuMjEyVjUuNjQ4YTIuMTI1IDIuMTI1IDAgMCAwLTIuMTI1LTIuMTI1aC0uNzQ3di0uOWEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2LjloLTUuMjNabTguMTAzIDUuMDY0di0uODgySDMuMjV2NS4wOGMwIC40ODMuMzkxLjg3NC44NzUuODc0aDQuMzhhNC43NTYgNC43NTYgMCAwIDEgNS43LTUuMDczWm0wLTIuOTR2LjgwOEgzLjI1di0uODA3YzAtLjQ4NC4zOTEtLjg3NS44NzUtLjg3NWg5LjIwNmMuNDgzIDAgLjg3NS4zOTEuODc1Ljg3NVptLS45NjIgMTEuMTA1YTMuNDkgMy40OSAwIDAgMCAxLjc1LS40NjhjLS4zMjMtLjY5OC0uOTM1LTEuMjMtMS43MjItMS4yMy0uNzk1IDAtMS40MTcuNTQ0LTEuNzQyIDEuMjVhMy40OSAzLjQ5IDAgMCAwIDEuNzE0LjQ0OFptMS42NTItMi40NjNjLjQ1NC4zMDIuODEyLjcxOCAxLjA3IDEuMTY2YTMuNTA2IDMuNTA2IDAgMSAwLTUuNDE3LjAzNGMuMjU3LS40NS42MTItLjg3IDEuMDYzLTEuMTc4YTIuMTY2IDIuMTY2IDAgMSAxIDMuMjg0LS4wMjJabS0yLjU2OC0xLjQwMmEuOTE2LjkxNiAwIDEgMSAxLjgzMyAwIC45MTYuOTE2IDAgMCAxLTEuODMzIDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EventUser = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-event-user',
        'staticon-EventUser',
        className
      ),
      ...props,
    })
);
EventUser.displayName = 'EventUser'

export default EventUser;
