
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 14.876a1.874 1.874 0 0 1-1.875-1.873V2.998c0-1.035.84-1.874 1.874-1.874h7.053c.496 0 .973.197 1.324.548l2.95 2.947c.352.352.55.829.55 1.326v7.058a1.874 1.874 0 0 1-1.874 1.873H2.999Zm-.625-1.873c0 .345.28.624.624.624h.895V8.865c0-.619.502-1.12 1.12-1.12h5.957c.618 0 1.12.501 1.12 1.12v4.762h.91c.346 0 .625-.28.625-.624V5.945a.624.624 0 0 0-.183-.442l-2.95-2.947a.625.625 0 0 0-.441-.183h-.088V4.77a1.12 1.12 0 0 1-1.12 1.12h-3.83a1.12 1.12 0 0 1-1.12-1.12V2.373h-.895a.625.625 0 0 0-.624.625v10.005Zm8.467.624V8.994H5.143v4.633h5.699ZM5.143 2.373h3.572v2.269H5.143V2.373Z","clip-rule":"evenodd"}]]

/**
 * @component @name Save
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAxNC44NzZhMS44NzQgMS44NzQgMCAwIDEtMS44NzUtMS44NzNWMi45OThjMC0xLjAzNS44NC0xLjg3NCAxLjg3NC0xLjg3NGg3LjA1M2MuNDk2IDAgLjk3My4xOTcgMS4zMjQuNTQ4bDIuOTUgMi45NDdjLjM1Mi4zNTIuNTUuODI5LjU1IDEuMzI2djcuMDU4YTEuODc0IDEuODc0IDAgMCAxLTEuODc0IDEuODczSDIuOTk5Wm0tLjYyNS0xLjg3M2MwIC4zNDUuMjguNjI0LjYyNC42MjRoLjg5NVY4Ljg2NWMwLS42MTkuNTAyLTEuMTIgMS4xMi0xLjEyaDUuOTU3Yy42MTggMCAxLjEyLjUwMSAxLjEyIDEuMTJ2NC43NjJoLjkxYy4zNDYgMCAuNjI1LS4yOC42MjUtLjYyNFY1Ljk0NWEuNjI0LjYyNCAwIDAgMC0uMTgzLS40NDJsLTIuOTUtMi45NDdhLjYyNS42MjUgMCAwIDAtLjQ0MS0uMTgzaC0uMDg4VjQuNzdhMS4xMiAxLjEyIDAgMCAxLTEuMTIgMS4xMmgtMy44M2ExLjEyIDEuMTIgMCAwIDEtMS4xMi0xLjEyVjIuMzczaC0uODk1YS42MjUuNjI1IDAgMCAwLS42MjQuNjI1djEwLjAwNVptOC40NjcuNjI0VjguOTk0SDUuMTQzdjQuNjMzaDUuNjk5Wk01LjE0MyAyLjM3M2gzLjU3MnYyLjI2OUg1LjE0M1YyLjM3M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Save = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-save',
        'staticon-Save',
        className
      ),
      ...props,
    })
);
Save.displayName = 'Save'

export default Save;
