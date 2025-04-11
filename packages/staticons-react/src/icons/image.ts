
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.376 6.506a2.875 2.875 0 1 0 0 5.749 2.875 2.875 0 0 0 0-5.75ZM8.001 9.38a1.375 1.375 0 1 1 2.75 0 1.375 1.375 0 0 1-2.75 0Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.125 20.627a2.75 2.75 0 0 1-2.75-2.75V6.123a2.75 2.75 0 0 1 2.75-2.75h11.75a2.75 2.75 0 0 1 2.75 2.75v11.753a2.75 2.75 0 0 1-2.75 2.75H6.125Zm0-1.5a1.25 1.25 0 0 1-1.066-.598l2.805-3.265a.75.75 0 0 1 1.137 0l1.152 1.341a1.25 1.25 0 0 0 1.897 0l2.823-3.287a.75.75 0 0 1 1.138 0l3.114 3.625v.933c0 .69-.56 1.25-1.25 1.25H6.125Zm13-13.003v8.517l-1.976-2.3a2.25 2.25 0 0 0-3.414 0l-2.633 3.066-.963-1.12a2.25 2.25 0 0 0-3.413 0l-1.851 2.155V6.124c0-.69.56-1.25 1.25-1.25h11.75c.69 0 1.25.56 1.25 1.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name Image
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4zNzYgNi41MDZhMi44NzUgMi44NzUgMCAxIDAgMCA1Ljc0OSAyLjg3NSAyLjg3NSAwIDAgMCAwLTUuNzVaTTguMDAxIDkuMzhhMS4zNzUgMS4zNzUgMCAxIDEgMi43NSAwIDEuMzc1IDEuMzc1IDAgMCAxLTIuNzUgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMTI1IDIwLjYyN2EyLjc1IDIuNzUgMCAwIDEtMi43NS0yLjc1VjYuMTIzYTIuNzUgMi43NSAwIDAgMSAyLjc1LTIuNzVoMTEuNzVhMi43NSAyLjc1IDAgMCAxIDIuNzUgMi43NXYxMS43NTNhMi43NSAyLjc1IDAgMCAxLTIuNzUgMi43NUg2LjEyNVptMC0xLjVhMS4yNSAxLjI1IDAgMCAxLTEuMDY2LS41OThsMi44MDUtMy4yNjVhLjc1Ljc1IDAgMCAxIDEuMTM3IDBsMS4xNTIgMS4zNDFhMS4yNSAxLjI1IDAgMCAwIDEuODk3IDBsMi44MjMtMy4yODdhLjc1Ljc1IDAgMCAxIDEuMTM4IDBsMy4xMTQgMy42MjV2LjkzM2MwIC42OS0uNTYgMS4yNS0xLjI1IDEuMjVINi4xMjVabTEzLTEzLjAwM3Y4LjUxN2wtMS45NzYtMi4zYTIuMjUgMi4yNSAwIDAgMC0zLjQxNCAwbC0yLjYzMyAzLjA2Ni0uOTYzLTEuMTJhMi4yNSAyLjI1IDAgMCAwLTMuNDEzIDBsLTEuODUxIDIuMTU1VjYuMTI0YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1aDExLjc1Yy42OSAwIDEuMjUuNTYgMS4yNSAxLjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Image = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-image',
        'staticon-Image',
        className
      ),
      ...props,
    })
);
Image.displayName = 'Image'

export default Image;
