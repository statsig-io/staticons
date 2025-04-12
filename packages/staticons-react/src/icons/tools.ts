
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.29 5.473a3.915 3.915 0 0 0 1.093 3.285 3.555 3.555 0 0 0 4.011.712.885.885 0 0 1 1.023.202l3.4 3.715a1.112 1.112 0 1 0 1.57-1.573L9.669 8.422a.886.886 0 0 1-.204-1.025 3.56 3.56 0 0 0-.711-4.013A3.914 3.914 0 0 0 5.47 2.291L7.457 4.28c.217.216.304.53.231.828l-.384 1.56a.875.875 0 0 1-.64.641l-1.56.384a.874.874 0 0 1-.827-.231L2.291 5.473ZM1.278 4.411c.232-.637 1.005-.714 1.415-.304l2.32 2.32 1.133-.279.28-1.135-2.32-2.32c-.41-.41-.333-1.184.304-1.416C6.158.64 8.269 1.131 9.637 2.5a4.808 4.808 0 0 1 1.068 5.175l3.524 3.215a2.364 2.364 0 0 1 .078 3.417 2.36 2.36 0 0 1-3.411-.075L7.672 10.71A4.802 4.802 0 0 1 2.5 9.642C1.131 8.273.64 6.16 1.277 4.41Z","clip-rule":"evenodd"}]]

/**
 * @component @name Tools
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4yOSA1LjQ3M2EzLjkxNSAzLjkxNSAwIDAgMCAxLjA5MyAzLjI4NSAzLjU1NSAzLjU1NSAwIDAgMCA0LjAxMS43MTIuODg1Ljg4NSAwIDAgMSAxLjAyMy4yMDJsMy40IDMuNzE1YTEuMTEyIDEuMTEyIDAgMSAwIDEuNTctMS41NzNMOS42NjkgOC40MjJhLjg4Ni44ODYgMCAwIDEtLjIwNC0xLjAyNSAzLjU2IDMuNTYgMCAwIDAtLjcxMS00LjAxM0EzLjkxNCAzLjkxNCAwIDAgMCA1LjQ3IDIuMjkxTDcuNDU3IDQuMjhjLjIxNy4yMTYuMzA0LjUzLjIzMS44MjhsLS4zODQgMS41NmEuODc1Ljg3NSAwIDAgMS0uNjQuNjQxbC0xLjU2LjM4NGEuODc0Ljg3NCAwIDAgMS0uODI3LS4yMzFMMi4yOTEgNS40NzNaTTEuMjc4IDQuNDExYy4yMzItLjYzNyAxLjAwNS0uNzE0IDEuNDE1LS4zMDRsMi4zMiAyLjMyIDEuMTMzLS4yNzkuMjgtMS4xMzUtMi4zMi0yLjMyYy0uNDEtLjQxLS4zMzMtMS4xODQuMzA0LTEuNDE2QzYuMTU4LjY0IDguMjY5IDEuMTMxIDkuNjM3IDIuNWE0LjgwOCA0LjgwOCAwIDAgMSAxLjA2OCA1LjE3NWwzLjUyNCAzLjIxNWEyLjM2NCAyLjM2NCAwIDAgMSAuMDc4IDMuNDE3IDIuMzYgMi4zNiAwIDAgMS0zLjQxMS0uMDc1TDcuNjcyIDEwLjcxQTQuODAyIDQuODAyIDAgMCAxIDIuNSA5LjY0MkMxLjEzMSA4LjI3My42NCA2LjE2IDEuMjc3IDQuNDFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Tools = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-tools',
        'staticon-Tools',
        className
      ),
      ...props,
    })
);
Tools.displayName = 'Tools'

export default Tools;
