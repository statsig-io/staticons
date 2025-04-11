
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M7.507 18.125a.75.75 0 0 1-1.5 0V5.875a.75.75 0 1 1 1.5 0v12.25Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M15.617 5.591c1.134-.974 2.89-.168 2.89 1.328v10.103c0 1.496-1.756 2.302-2.89 1.327l-5.881-5.051a1.75 1.75 0 0 1 0-2.655l5.88-5.052Zm1.39 1.328a.25.25 0 0 0-.413-.19l-5.88 5.052a.25.25 0 0 0 0 .379l5.88 5.051a.25.25 0 0 0 .413-.19V6.92Z","clip-rule":"evenodd"}]]

/**
 * @component @name SkipLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTcuNTA3IDE4LjEyNWEuNzUuNzUgMCAwIDEtMS41IDBWNS44NzVhLjc1Ljc1IDAgMSAxIDEuNSAwdjEyLjI1WiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjYxNyA1LjU5MWMxLjEzNC0uOTc0IDIuODktLjE2OCAyLjg5IDEuMzI4djEwLjEwM2MwIDEuNDk2LTEuNzU2IDIuMzAyLTIuODkgMS4zMjdsLTUuODgxLTUuMDUxYTEuNzUgMS43NSAwIDAgMSAwLTIuNjU1bDUuODgtNS4wNTJabTEuMzkgMS4zMjhhLjI1LjI1IDAgMCAwLS40MTMtLjE5bC01Ljg4IDUuMDUyYS4yNS4yNSAwIDAgMCAwIC4zNzlsNS44OCA1LjA1MWEuMjUuMjUgMCAwIDAgLjQxMy0uMTlWNi45MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SkipLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-skip-left',
        'staticon-SkipLeft',
        className
      ),
      ...props,
    })
);
SkipLeft.displayName = 'SkipLeft'

export default SkipLeft;
