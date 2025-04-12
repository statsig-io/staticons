
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M.875 3c0-1.036.84-1.875 1.875-1.875h10.5c1.036 0 1.875.84 1.875 1.875v7.326c0 1.036-.84 1.875-1.875 1.875H7.268l-2.548 2.43a.875.875 0 0 1-1.48-.633v-1.797h-.49a1.875 1.875 0 0 1-1.875-1.875V3Zm1.875-.625A.625.625 0 0 0 2.125 3v7.326c0 .345.28.625.625.625h.882c.474 0 .859.384.859.859v1.312l2.022-1.93a.875.875 0 0 1 .604-.241h6.133c.345 0 .625-.28.625-.625V3a.625.625 0 0 0-.625-.625H2.75ZM8 3.423c.345 0 .625.28.625.625v1.947h1.947a.625.625 0 0 1 0 1.25H8.625v1.948a.625.625 0 0 1-1.25 0V7.245H5.427a.625.625 0 0 1 0-1.25h1.948V4.048c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name AddComment
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjg3NSAzYzAtMS4wMzYuODQtMS44NzUgMS44NzUtMS44NzVoMTAuNWMxLjAzNiAwIDEuODc1Ljg0IDEuODc1IDEuODc1djcuMzI2YzAgMS4wMzYtLjg0IDEuODc1LTEuODc1IDEuODc1SDcuMjY4bC0yLjU0OCAyLjQzYS44NzUuODc1IDAgMCAxLTEuNDgtLjYzM3YtMS43OTdoLS40OWExLjg3NSAxLjg3NSAwIDAgMS0xLjg3NS0xLjg3NVYzWm0xLjg3NS0uNjI1QS42MjUuNjI1IDAgMCAwIDIuMTI1IDN2Ny4zMjZjMCAuMzQ1LjI4LjYyNS42MjUuNjI1aC44ODJjLjQ3NCAwIC44NTkuMzg0Ljg1OS44NTl2MS4zMTJsMi4wMjItMS45M2EuODc1Ljg3NSAwIDAgMSAuNjA0LS4yNDFoNi4xMzNjLjM0NSAwIC42MjUtLjI4LjYyNS0uNjI1VjNhLjYyNS42MjUgMCAwIDAtLjYyNS0uNjI1SDIuNzVaTTggMy40MjNjLjM0NSAwIC42MjUuMjguNjI1LjYyNXYxLjk0N2gxLjk0N2EuNjI1LjYyNSAwIDAgMSAwIDEuMjVIOC42MjV2MS45NDhhLjYyNS42MjUgMCAwIDEtMS4yNSAwVjcuMjQ1SDUuNDI3YS42MjUuNjI1IDAgMCAxIDAtMS4yNWgxLjk0OFY0LjA0OGMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AddComment = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-add-comment',
        'staticon-AddComment',
        className
      ),
      ...props,
    })
);
AddComment.displayName = 'AddComment'

export default AddComment;
