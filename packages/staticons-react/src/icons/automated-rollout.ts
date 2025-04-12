
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.624 10.25a2.253 2.253 0 0 0 2.164-1.627h1.04a2.253 2.253 0 0 0 4.329 0h1.055A2.253 2.253 0 0 0 15.627 8a2.251 2.251 0 0 0-4.414-.627h-1.057a2.253 2.253 0 0 0-4.326 0H4.787A2.253 2.253 0 0 0 .373 8c0 1.243 1.01 2.25 2.251 2.25ZM3.626 8a1.001 1.001 0 0 1-2.003 0 1.001 1.001 0 0 1 2.003 0Zm9.75 1c.553 0 1.001-.45 1.001-1a1.001 1.001 0 0 0-2.003 0c0 .55.449 1 1.002 1ZM7.993 9c.553 0 1.001-.45 1.001-1a1.001 1.001 0 0 0-2.003 0c0 .55.449 1 1.002 1Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutomatedRollout
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi42MjQgMTAuMjVhMi4yNTMgMi4yNTMgMCAwIDAgMi4xNjQtMS42MjdoMS4wNGEyLjI1MyAyLjI1MyAwIDAgMCA0LjMyOSAwaDEuMDU1QTIuMjUzIDIuMjUzIDAgMCAwIDE1LjYyNyA4YTIuMjUxIDIuMjUxIDAgMCAwLTQuNDE0LS42MjdoLTEuMDU3YTIuMjUzIDIuMjUzIDAgMCAwLTQuMzI2IDBINC43ODdBMi4yNTMgMi4yNTMgMCAwIDAgLjM3MyA4YzAgMS4yNDMgMS4wMSAyLjI1IDIuMjUxIDIuMjVaTTMuNjI2IDhhMS4wMDEgMS4wMDEgMCAwIDEtMi4wMDMgMCAxLjAwMSAxLjAwMSAwIDAgMSAyLjAwMyAwWm05Ljc1IDFjLjU1MyAwIDEuMDAxLS40NSAxLjAwMS0xYTEuMDAxIDEuMDAxIDAgMCAwLTIuMDAzIDBjMCAuNTUuNDQ5IDEgMS4wMDIgMVpNNy45OTMgOWMuNTUzIDAgMS4wMDEtLjQ1IDEuMDAxLTFhMS4wMDEgMS4wMDEgMCAwIDAtMi4wMDMgMGMwIC41NS40NDkgMSAxLjAwMiAxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutomatedRollout = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-automated-rollout',
        'staticon-AutomatedRollout',
        className
      ),
      ...props,
    })
);
AutomatedRollout.displayName = 'AutomatedRollout'

export default AutomatedRollout;
