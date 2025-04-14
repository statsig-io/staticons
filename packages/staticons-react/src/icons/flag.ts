
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.756 3.125v13.749a.625.625 0 1 0 1.25 0V12.41c1.592.429 3.574.396 5.352-.284 1.463-.56 3.412-.769 5.07-.097a.78.78 0 0 0 1.074-.72V4.437a.773.773 0 0 0-.462-.708c-2.052-.898-4.357-.65-6.129.028a7.58 7.58 0 0 1-4.905.14v-.772a.625.625 0 1 0-1.25 0ZM5.006 5.2v5.905c1.372.456 3.243.49 4.905-.147 1.49-.57 3.48-.85 5.341-.31v-5.89c-1.599-.591-3.417-.399-4.894.167-1.793.686-3.738.705-5.352.275Z","clip-rule":"evenodd"}]]

/**
 * @component @name Flag
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy43NTYgMy4xMjV2MTMuNzQ5YS42MjUuNjI1IDAgMSAwIDEuMjUgMFYxMi40MWMxLjU5Mi40MjkgMy41NzQuMzk2IDUuMzUyLS4yODQgMS40NjMtLjU2IDMuNDEyLS43NjkgNS4wNy0uMDk3YS43OC43OCAwIDAgMCAxLjA3NC0uNzJWNC40MzdhLjc3My43NzMgMCAwIDAtLjQ2Mi0uNzA4Yy0yLjA1Mi0uODk4LTQuMzU3LS42NS02LjEyOS4wMjhhNy41OCA3LjU4IDAgMCAxLTQuOTA1LjE0di0uNzcyYS42MjUuNjI1IDAgMSAwLTEuMjUgMFpNNS4wMDYgNS4ydjUuOTA1YzEuMzcyLjQ1NiAzLjI0My40OSA0LjkwNS0uMTQ3IDEuNDktLjU3IDMuNDgtLjg1IDUuMzQxLS4zMXYtNS44OWMtMS41OTktLjU5MS0zLjQxNy0uMzk5LTQuODk0LjE2Ny0xLjc5My42ODYtMy43MzguNzA1LTUuMzUyLjI3NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Flag = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flag',
        'staticon-Flag',
        className
      ),
      ...props,
    })
);
Flag.displayName = 'Flag'

export default Flag;
