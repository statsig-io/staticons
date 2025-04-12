
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.51.751c.5 0 .98.2 1.331.555l1.88 1.895c.349.351.544.826.544 1.32v3.06a3.687 3.687 0 0 1 1.158 5.332l1.27 1.27a.625.625 0 0 1-.884.883l-1.273-1.272c-.6.421-1.33.669-2.119.669-.859 0-1.65-.294-2.276-.786H2.999a1.875 1.875 0 0 1-1.875-1.875V2.626c0-1.036.84-1.875 1.875-1.875H8.51ZM7.118 12.427a3.689 3.689 0 0 1 3.897-5.294V4.521a.625.625 0 0 0-.18-.44L8.953 2.186A.625.625 0 0 0 8.51 2H3a.625.625 0 0 0-.625.625v9.176c0 .345.28.625.625.625h4.12Zm3.299-4.092a2.439 2.439 0 1 0 0 4.878 2.439 2.439 0 0 0 0-4.878Z","clip-rule":"evenodd"}]]

/**
 * @component @name Inspect
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41MS43NTFjLjUgMCAuOTguMiAxLjMzMS41NTVsMS44OCAxLjg5NWMuMzQ5LjM1MS41NDQuODI2LjU0NCAxLjMydjMuMDZhMy42ODcgMy42ODcgMCAwIDEgMS4xNTggNS4zMzJsMS4yNyAxLjI3YS42MjUuNjI1IDAgMCAxLS44ODQuODgzbC0xLjI3My0xLjI3MmMtLjYuNDIxLTEuMzMuNjY5LTIuMTE5LjY2OS0uODU5IDAtMS42NS0uMjk0LTIuMjc2LS43ODZIMi45OTlhMS44NzUgMS44NzUgMCAwIDEtMS44NzUtMS44NzVWMi42MjZjMC0xLjAzNi44NC0xLjg3NSAxLjg3NS0xLjg3NUg4LjUxWk03LjExOCAxMi40MjdhMy42ODkgMy42ODkgMCAwIDEgMy44OTctNS4yOTRWNC41MjFhLjYyNS42MjUgMCAwIDAtLjE4LS40NEw4Ljk1MyAyLjE4NkEuNjI1LjYyNSAwIDAgMCA4LjUxIDJIM2EuNjI1LjYyNSAwIDAgMC0uNjI1LjYyNXY5LjE3NmMwIC4zNDUuMjguNjI1LjYyNS42MjVoNC4xMlptMy4yOTktNC4wOTJhMi40MzkgMi40MzkgMCAxIDAgMCA0Ljg3OCAyLjQzOSAyLjQzOSAwIDAgMCAwLTQuODc4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Inspect = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-inspect',
        'staticon-Inspect',
        className
      ),
      ...props,
    })
);
Inspect.displayName = 'Inspect'

export default Inspect;
