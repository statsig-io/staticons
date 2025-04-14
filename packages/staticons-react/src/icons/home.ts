
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.784 3.444a1.88 1.88 0 0 1 2.432 0l5.035 4.272.006.005 1.522 1.29a.627.627 0 1 1-.811.956l-.493-.418v5.572a1.88 1.88 0 0 1-1.88 1.88h-1.607a1.88 1.88 0 0 1-1.88-1.88v-2.356H8.892v2.356a1.88 1.88 0 0 1-1.88 1.88H5.404a1.88 1.88 0 0 1-1.88-1.88V9.55l-.492.417a.627.627 0 0 1-.81-.955l1.52-1.29a.62.62 0 0 1 .007-.006l5.035-4.272ZM4.777 8.487v6.634c0 .346.281.627.627.627h1.608c.346 0 .626-.28.626-.627V12.64c0-.623.505-1.128 1.128-1.128h2.468c.623 0 1.127.505 1.127 1.128v2.481c0 .346.281.627.627.627h1.608c.346 0 .626-.28.626-.627V8.486L10.405 4.4a.627.627 0 0 0-.81 0L4.777 8.487Z","clip-rule":"evenodd"}]]

/**
 * @component @name Home
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC43ODQgMy40NDRhMS44OCAxLjg4IDAgMCAxIDIuNDMyIDBsNS4wMzUgNC4yNzIuMDA2LjAwNSAxLjUyMiAxLjI5YS42MjcuNjI3IDAgMSAxLS44MTEuOTU2bC0uNDkzLS40MTh2NS41NzJhMS44OCAxLjg4IDAgMCAxLTEuODggMS44OGgtMS42MDdhMS44OCAxLjg4IDAgMCAxLTEuODgtMS44OHYtMi4zNTZIOC44OTJ2Mi4zNTZhMS44OCAxLjg4IDAgMCAxLTEuODggMS44OEg1LjQwNGExLjg4IDEuODggMCAwIDEtMS44OC0xLjg4VjkuNTVsLS40OTIuNDE3YS42MjcuNjI3IDAgMCAxLS44MS0uOTU1bDEuNTItMS4yOWEuNjIuNjIgMCAwIDEgLjAwNy0uMDA2bDUuMDM1LTQuMjcyWk00Ljc3NyA4LjQ4N3Y2LjYzNGMwIC4zNDYuMjgxLjYyNy42MjcuNjI3aDEuNjA4Yy4zNDYgMCAuNjI2LS4yOC42MjYtLjYyN1YxMi42NGMwLS42MjMuNTA1LTEuMTI4IDEuMTI4LTEuMTI4aDIuNDY4Yy42MjMgMCAxLjEyNy41MDUgMS4xMjcgMS4xMjh2Mi40ODFjMCAuMzQ2LjI4MS42MjcuNjI3LjYyN2gxLjYwOGMuMzQ2IDAgLjYyNi0uMjguNjI2LS42MjdWOC40ODZMMTAuNDA1IDQuNGEuNjI3LjYyNyAwIDAgMC0uODEgMEw0Ljc3NyA4LjQ4N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Home = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-home',
        'staticon-Home',
        className
      ),
      ...props,
    })
);
Home.displayName = 'Home'

export default Home;
