
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.635 17.511a2.124 2.124 0 0 1-2.125-2.124V4.633c0-1.173.951-2.124 2.125-2.124h7.58c.563 0 1.103.223 1.501.621l3.171 3.168c.4.399.623.94.623 1.503v7.586a2.124 2.124 0 0 1-2.124 2.124H4.635Zm-.876-2.124c0 .484.392.876.876.876h.826v-4.847c0-.897.728-1.625 1.625-1.625h5.858c.897 0 1.625.728 1.625 1.625v4.847h.817a.876.876 0 0 0 .876-.876V7.801a.876.876 0 0 0-.257-.62l-3.171-3.168a.876.876 0 0 0-.62-.256h-.052v2.245c0 .898-.727 1.625-1.624 1.625H7.086A1.624 1.624 0 0 1 5.46 6.002V3.757h-.826a.876.876 0 0 0-.876.876v10.754Zm9.561.876v-4.847a.376.376 0 0 0-.376-.376H7.087a.376.376 0 0 0-.376.376v4.847h6.61ZM6.71 3.757h4.204v2.245a.376.376 0 0 1-.376.376H7.086a.376.376 0 0 1-.376-.376V3.757Z","clip-rule":"evenodd"}]]

/**
 * @component @name Save
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42MzUgMTcuNTExYTIuMTI0IDIuMTI0IDAgMCAxLTIuMTI1LTIuMTI0VjQuNjMzYzAtMS4xNzMuOTUxLTIuMTI0IDIuMTI1LTIuMTI0aDcuNThjLjU2MyAwIDEuMTAzLjIyMyAxLjUwMS42MjFsMy4xNzEgMy4xNjhjLjQuMzk5LjYyMy45NC42MjMgMS41MDN2Ny41ODZhMi4xMjQgMi4xMjQgMCAwIDEtMi4xMjQgMi4xMjRINC42MzVabS0uODc2LTIuMTI0YzAgLjQ4NC4zOTIuODc2Ljg3Ni44NzZoLjgyNnYtNC44NDdjMC0uODk3LjcyOC0xLjYyNSAxLjYyNS0xLjYyNWg1Ljg1OGMuODk3IDAgMS42MjUuNzI4IDEuNjI1IDEuNjI1djQuODQ3aC44MTdhLjg3Ni44NzYgMCAwIDAgLjg3Ni0uODc2VjcuODAxYS44NzYuODc2IDAgMCAwLS4yNTctLjYybC0zLjE3MS0zLjE2OGEuODc2Ljg3NiAwIDAgMC0uNjItLjI1NmgtLjA1MnYyLjI0NWMwIC44OTgtLjcyNyAxLjYyNS0xLjYyNCAxLjYyNUg3LjA4NkExLjYyNCAxLjYyNCAwIDAgMSA1LjQ2IDYuMDAyVjMuNzU3aC0uODI2YS44NzYuODc2IDAgMCAwLS44NzYuODc2djEwLjc1NFptOS41NjEuODc2di00Ljg0N2EuMzc2LjM3NiAwIDAgMC0uMzc2LS4zNzZINy4wODdhLjM3Ni4zNzYgMCAwIDAtLjM3Ni4zNzZ2NC44NDdoNi42MVpNNi43MSAzLjc1N2g0LjIwNHYyLjI0NWEuMzc2LjM3NiAwIDAgMS0uMzc2LjM3Nkg3LjA4NmEuMzc2LjM3NiAwIDAgMS0uMzc2LS4zNzZWMy43NTdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
