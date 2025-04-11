
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.394 3.942a2.74 2.74 0 0 0-2.788 0l-6.25 3.692A2.764 2.764 0 0 0 3 10.014v7.785a2.756 2.756 0 0 0 2.75 2.762h12.5A2.756 2.756 0 0 0 21 17.799v-7.785c0-.979-.516-1.884-1.356-2.38l-6.25-3.692ZM11.366 5.24a1.246 1.246 0 0 1 1.268 0l6.25 3.692c.382.226.616.637.616 1.082v.018l-6.866 4.056a1.245 1.245 0 0 1-1.268 0L4.5 10.032v-.018c0-.445.234-.856.616-1.082l6.25-3.692ZM4.5 11.78v6.019c0 .693.56 1.255 1.25 1.255h12.5c.69 0 1.25-.562 1.25-1.255v-6.02l-6.106 3.607a2.74 2.74 0 0 1-2.788 0L4.5 11.779Z","clip-rule":"evenodd"}]]

/**
 * @component @name Invite
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMzk0IDMuOTQyYTIuNzQgMi43NCAwIDAgMC0yLjc4OCAwbC02LjI1IDMuNjkyQTIuNzY0IDIuNzY0IDAgMCAwIDMgMTAuMDE0djcuNzg1YTIuNzU2IDIuNzU2IDAgMCAwIDIuNzUgMi43NjJoMTIuNUEyLjc1NiAyLjc1NiAwIDAgMCAyMSAxNy43OTl2LTcuNzg1YzAtLjk3OS0uNTE2LTEuODg0LTEuMzU2LTIuMzhsLTYuMjUtMy42OTJaTTExLjM2NiA1LjI0YTEuMjQ2IDEuMjQ2IDAgMCAxIDEuMjY4IDBsNi4yNSAzLjY5MmMuMzgyLjIyNi42MTYuNjM3LjYxNiAxLjA4MnYuMDE4bC02Ljg2NiA0LjA1NmExLjI0NSAxLjI0NSAwIDAgMS0xLjI2OCAwTDQuNSAxMC4wMzJ2LS4wMThjMC0uNDQ1LjIzNC0uODU2LjYxNi0xLjA4Mmw2LjI1LTMuNjkyWk00LjUgMTEuNzh2Ni4wMTljMCAuNjkzLjU2IDEuMjU1IDEuMjUgMS4yNTVoMTIuNWMuNjkgMCAxLjI1LS41NjIgMS4yNS0xLjI1NXYtNi4wMmwtNi4xMDYgMy42MDdhMi43NCAyLjc0IDAgMCAxLTIuNzg4IDBMNC41IDExLjc3OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
