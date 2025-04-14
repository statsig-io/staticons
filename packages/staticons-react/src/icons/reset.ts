
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M15.279 2.5c.345 0 .625.28.625.625v2.71a.775.775 0 0 1-.775.776H12.42a.625.625 0 1 1 0-1.25h1.508a5.982 5.982 0 0 0-7.062-.795 5.994 5.994 0 0 0-2.76 6.84.626.626 0 0 1-1.201.347 7.245 7.245 0 0 1 3.337-8.27 7.23 7.23 0 0 1 8.41.847V3.125c0-.345.28-.625.626-.625Zm.614 6.093a.626.626 0 0 1 1.201-.347 7.245 7.245 0 0 1-3.337 8.27 7.23 7.23 0 0 1-8.41-.847v1.205a.625.625 0 1 1-1.25 0v-2.71c0-.428.346-.775.774-.775H7.58a.625.625 0 1 1 0 1.25H6.071a5.982 5.982 0 0 0 7.062.794 5.994 5.994 0 0 0 2.76-6.84Z","clip-rule":"evenodd"}]]

/**
 * @component @name Reset
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMjc5IDIuNWMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djIuNzFhLjc3NS43NzUgMCAwIDEtLjc3NS43NzZIMTIuNDJhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDEuNTA4YTUuOTgyIDUuOTgyIDAgMCAwLTcuMDYyLS43OTUgNS45OTQgNS45OTQgMCAwIDAtMi43NiA2Ljg0LjYyNi42MjYgMCAwIDEtMS4yMDEuMzQ3IDcuMjQ1IDcuMjQ1IDAgMCAxIDMuMzM3LTguMjcgNy4yMyA3LjIzIDAgMCAxIDguNDEuODQ3VjMuMTI1YzAtLjM0NS4yOC0uNjI1LjYyNi0uNjI1Wm0uNjE0IDYuMDkzYS42MjYuNjI2IDAgMCAxIDEuMjAxLS4zNDcgNy4yNDUgNy4yNDUgMCAwIDEtMy4zMzcgOC4yNyA3LjIzIDcuMjMgMCAwIDEtOC40MS0uODQ3djEuMjA1YS42MjUuNjI1IDAgMSAxLTEuMjUgMHYtMi43MWMwLS40MjguMzQ2LS43NzUuNzc0LS43NzVINy41OGEuNjI1LjYyNSAwIDEgMSAwIDEuMjVINi4wNzFhNS45ODIgNS45ODIgMCAwIDAgNy4wNjIuNzk0IDUuOTk0IDUuOTk0IDAgMCAwIDIuNzYtNi44NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
