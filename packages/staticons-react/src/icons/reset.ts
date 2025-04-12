
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M13.085.749c.345 0 .625.28.625.625v2.602c0 .43-.348.777-.777.777h-2.601a.625.625 0 0 1 0-1.25h1.395a5.737 5.737 0 0 0-6.733-.723 5.756 5.756 0 0 0-2.648 6.567.626.626 0 0 1-1.2.347A7.008 7.008 0 0 1 4.37 1.697a6.984 6.984 0 0 1 8.09.785V1.374c0-.345.28-.625.625-.625Zm.57 5.911a.626.626 0 0 1 1.2-.348 7.008 7.008 0 0 1-3.225 7.997 6.984 6.984 0 0 1-8.09-.785v1.102a.625.625 0 1 1-1.25 0V12.03c0-.429.348-.777.777-.777h2.601a.625.625 0 0 1 0 1.25H4.274a5.737 5.737 0 0 0 6.732.724 5.756 5.756 0 0 0 2.649-6.568Z"}]]

/**
 * @component @name Reset
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzLjA4NS43NDljLjM0NSAwIC42MjUuMjguNjI1LjYyNXYyLjYwMmMwIC40My0uMzQ4Ljc3Ny0uNzc3Ljc3N2gtMi42MDFhLjYyNS42MjUgMCAwIDEgMC0xLjI1aDEuMzk1YTUuNzM3IDUuNzM3IDAgMCAwLTYuNzMzLS43MjMgNS43NTYgNS43NTYgMCAwIDAtMi42NDggNi41NjcuNjI2LjYyNiAwIDAgMS0xLjIuMzQ3QTcuMDA4IDcuMDA4IDAgMCAxIDQuMzcgMS42OTdhNi45ODQgNi45ODQgMCAwIDEgOC4wOS43ODVWMS4zNzRjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVabS41NyA1LjkxMWEuNjI2LjYyNiAwIDAgMSAxLjItLjM0OCA3LjAwOCA3LjAwOCAwIDAgMS0zLjIyNSA3Ljk5NyA2Ljk4NCA2Ljk4NCAwIDAgMS04LjA5LS43ODV2MS4xMDJhLjYyNS42MjUgMCAxIDEtMS4yNSAwVjEyLjAzYzAtLjQyOS4zNDgtLjc3Ny43NzctLjc3N2gyLjYwMWEuNjI1LjYyNSAwIDAgMSAwIDEuMjVINC4yNzRhNS43MzcgNS43MzcgMCAwIDAgNi43MzIuNzI0IDUuNzU2IDUuNzU2IDAgMCAwIDIuNjQ5LTYuNTY4WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Reset = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-reset',
        'staticon-Reset',
        className
      ),
      ...props,
    })
);
Reset.displayName = 'Reset'

export default Reset;
