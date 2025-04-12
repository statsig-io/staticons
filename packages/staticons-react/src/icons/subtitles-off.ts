
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.813.932a.623.623 0 1 0-.88.881l.77.772c-.495.278-.83.81-.829 1.418l.005 7.996c0 .897.728 1.624 1.625 1.624h10.238l1.445 1.444a.623.623 0 1 0 .88-.88l-.77-.772c.495-.278.83-.809.829-1.418l-.005-7.996c0-.897-.728-1.624-1.625-1.624H3.258L1.813.932Zm.933 2.695h-.247a.375.375 0 0 0-.375.375l.005 7.996c0 .207.168.375.375.375h8.988l-.97-.97h-.116a.625.625 0 0 1-.616-.732L8.3 9.18h-.87a.625.625 0 0 1-.302-1.172L2.746 3.627Zm6.066 4.304L4.508 3.627h8.988c.207 0 .375.168.375.375l.005 7.996a.375.375 0 0 1-.375.375h-.247l-.971-.971a.625.625 0 0 0-.022-1.25h-1.228l-.971-.971h2.199a.625.625 0 1 0 0-1.25H8.81Zm-5.71.625c0-.346.28-.625.625-.625h1.485a.625.625 0 1 1 0 1.25H3.727a.625.625 0 0 1-.625-.625Zm5.082 2.846a.625.625 0 1 0 0-1.25H3.727a.625.625 0 0 0 0 1.25h4.457Z","clip-rule":"evenodd"}]]

/**
 * @component @name SubtitlesOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS44MTMuOTMyYS42MjMuNjIzIDAgMSAwLS44OC44ODFsLjc3Ljc3MmMtLjQ5NS4yNzgtLjgzLjgxLS44MjkgMS40MThsLjAwNSA3Ljk5NmMwIC44OTcuNzI4IDEuNjI0IDEuNjI1IDEuNjI0aDEwLjIzOGwxLjQ0NSAxLjQ0NGEuNjIzLjYyMyAwIDEgMCAuODgtLjg4bC0uNzctLjc3MmMuNDk1LS4yNzguODMtLjgwOS44MjktMS40MThsLS4wMDUtNy45OTZjMC0uODk3LS43MjgtMS42MjQtMS42MjUtMS42MjRIMy4yNThMMS44MTMuOTMyWm0uOTMzIDIuNjk1aC0uMjQ3YS4zNzUuMzc1IDAgMCAwLS4zNzUuMzc1bC4wMDUgNy45OTZjMCAuMjA3LjE2OC4zNzUuMzc1LjM3NWg4Ljk4OGwtLjk3LS45N2gtLjExNmEuNjI1LjYyNSAwIDAgMS0uNjE2LS43MzJMOC4zIDkuMThoLS44N2EuNjI1LjYyNSAwIDAgMS0uMzAyLTEuMTcyTDIuNzQ2IDMuNjI3Wm02LjA2NiA0LjMwNEw0LjUwOCAzLjYyN2g4Ljk4OGMuMjA3IDAgLjM3NS4xNjguMzc1LjM3NWwuMDA1IDcuOTk2YS4zNzUuMzc1IDAgMCAxLS4zNzUuMzc1aC0uMjQ3bC0uOTcxLS45NzFhLjYyNS42MjUgMCAwIDAtLjAyMi0xLjI1aC0xLjIyOGwtLjk3MS0uOTcxaDIuMTk5YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg4LjgxWm0tNS43MS42MjVjMC0uMzQ2LjI4LS42MjUuNjI1LS42MjVoMS40ODVhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDMuNzI3YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVptNS4wODIgMi44NDZhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDMuNzI3YS42MjUuNjI1IDAgMCAwIDAgMS4yNWg0LjQ1N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SubtitlesOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-subtitles-off',
        'staticon-SubtitlesOff',
        className
      ),
      ...props,
    })
);
SubtitlesOff.displayName = 'SubtitlesOff'

export default SubtitlesOff;
