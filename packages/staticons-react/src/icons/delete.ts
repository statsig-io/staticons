
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.75 4.25a.75.75 0 1 1 0-1.5h6.502a.75.75 0 0 1 0 1.5H8.75Zm1.249 5.747a.75.75 0 0 1 .75.75v5.497a.75.75 0 0 1-1.5 0v-5.497a.75.75 0 0 1 .75-.75Zm4.004 0a.75.75 0 0 1 .75.75v5.497a.75.75 0 0 1-1.5 0v-5.497a.75.75 0 0 1 .75-.75Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.002 5.561a.75.75 0 1 0 0 1.5h.537l.792 11.625a2.75 2.75 0 0 0 2.744 2.563h7.851a2.75 2.75 0 0 0 2.744-2.563l.792-11.625h.537a.75.75 0 0 0 0-1.5H4.002Zm13.956 1.5H6.043l.784 11.523a1.25 1.25 0 0 0 1.248 1.165h7.851a1.25 1.25 0 0 0 1.248-1.165l.784-11.523Z","clip-rule":"evenodd"}]]

/**
 * @component @name Delete
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguNzUgNC4yNWEuNzUuNzUgMCAxIDEgMC0xLjVoNi41MDJhLjc1Ljc1IDAgMCAxIDAgMS41SDguNzVabTEuMjQ5IDUuNzQ3YS43NS43NSAwIDAgMSAuNzUuNzV2NS40OTdhLjc1Ljc1IDAgMCAxLTEuNSAwdi01LjQ5N2EuNzUuNzUgMCAwIDEgLjc1LS43NVptNC4wMDQgMGEuNzUuNzUgMCAwIDEgLjc1Ljc1djUuNDk3YS43NS43NSAwIDAgMS0xLjUgMHYtNS40OTdhLjc1Ljc1IDAgMCAxIC43NS0uNzVaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4wMDIgNS41NjFhLjc1Ljc1IDAgMSAwIDAgMS41aC41MzdsLjc5MiAxMS42MjVhMi43NSAyLjc1IDAgMCAwIDIuNzQ0IDIuNTYzaDcuODUxYTIuNzUgMi43NSAwIDAgMCAyLjc0NC0yLjU2M2wuNzkyLTExLjYyNWguNTM3YS43NS43NSAwIDAgMCAwLTEuNUg0LjAwMlptMTMuOTU2IDEuNUg2LjA0M2wuNzg0IDExLjUyM2ExLjI1IDEuMjUgMCAwIDAgMS4yNDggMS4xNjVoNy44NTFhMS4yNSAxLjI1IDAgMCAwIDEuMjQ4LTEuMTY1bC43ODQtMTEuNTIzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Delete = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-delete',
        'staticon-Delete',
        className
      ),
      ...props,
    })
);
Delete.displayName = 'Delete'

export default Delete;
