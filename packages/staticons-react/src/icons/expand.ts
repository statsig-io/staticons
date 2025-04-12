
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M2.625 1.251a.625.625 0 1 0 0 1.25h10.75a.625.625 0 1 0 0-1.25H2.625Zm4.757 2.426a.875.875 0 0 1 1.238 0L10.642 5.7a.625.625 0 0 1-.884.884l-1.13-1.13v5.116l1.13-1.13a.625.625 0 0 1 .884.883l-2.024 2.024a.875.875 0 0 1-1.237 0l-2.023-2.022a.625.625 0 1 1 .884-.884l1.136 1.135V5.45L6.242 6.585A.625.625 0 1 1 5.36 5.7l2.023-2.024ZM2 14.124c0-.345.28-.625.625-.625h10.75a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 14.124Z"}]]

/**
 * @component @name Expand
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTIuNjI1IDEuMjUxYS42MjUuNjI1IDAgMSAwIDAgMS4yNWgxMC43NWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMi42MjVabTQuNzU3IDIuNDI2YS44NzUuODc1IDAgMCAxIDEuMjM4IDBMMTAuNjQyIDUuN2EuNjI1LjYyNSAwIDAgMS0uODg0Ljg4NGwtMS4xMy0xLjEzdjUuMTE2bDEuMTMtMS4xM2EuNjI1LjYyNSAwIDAgMSAuODg0Ljg4M2wtMi4wMjQgMi4wMjRhLjg3NS44NzUgMCAwIDEtMS4yMzcgMGwtMi4wMjMtMi4wMjJhLjYyNS42MjUgMCAxIDEgLjg4NC0uODg0bDEuMTM2IDEuMTM1VjUuNDVMNi4yNDIgNi41ODVBLjYyNS42MjUgMCAxIDEgNS4zNiA1LjdsMi4wMjMtMi4wMjRaTTIgMTQuMTI0YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDEwLjc1YS42MjUuNjI1IDAgMSAxIDAgMS4yNUgyLjYyNUEuNjI1LjYyNSAwIDAgMSAyIDE0LjEyNFoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Expand = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-expand',
        'staticon-Expand',
        className
      ),
      ...props,
    })
);
Expand.displayName = 'Expand'

export default Expand;
