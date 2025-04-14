
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M12.258 5.094a.625.625 0 0 1 .883 0L16.9 8.851a1.625 1.625 0 0 1 0 2.298l-3.758 3.757a.625.625 0 0 1-.883-.884l3.397-3.397H6.93a.625.625 0 1 1 0-1.25h8.725l-3.397-3.397a.625.625 0 0 1 0-.884ZM3.875 4.85c0-.538.437-.975.975-.975h4.158a.625.625 0 1 0 0-1.25H4.85A2.225 2.225 0 0 0 2.625 4.85v10.3c0 1.229.997 2.225 2.225 2.225h4.158a.625.625 0 1 0 0-1.25H4.85a.975.975 0 0 1-.975-.975V4.85Z","clip-rule":"evenodd"}]]

/**
 * @component @name LogOut
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMjU4IDUuMDk0YS42MjUuNjI1IDAgMCAxIC44ODMgMEwxNi45IDguODUxYTEuNjI1IDEuNjI1IDAgMCAxIDAgMi4yOThsLTMuNzU4IDMuNzU3YS42MjUuNjI1IDAgMCAxLS44ODMtLjg4NGwzLjM5Ny0zLjM5N0g2LjkzYS42MjUuNjI1IDAgMSAxIDAtMS4yNWg4LjcyNWwtMy4zOTctMy4zOTdhLjYyNS42MjUgMCAwIDEgMC0uODg0Wk0zLjg3NSA0Ljg1YzAtLjUzOC40MzctLjk3NS45NzUtLjk3NWg0LjE1OGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINC44NUEyLjIyNSAyLjIyNSAwIDAgMCAyLjYyNSA0Ljg1djEwLjNjMCAxLjIyOS45OTcgMi4yMjUgMi4yMjUgMi4yMjVoNC4xNThhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDQuODVhLjk3NS45NzUgMCAwIDEtLjk3NS0uOTc1VjQuODVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LogOut = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-log-out',
        'staticon-LogOut',
        className
      ),
      ...props,
    })
);
LogOut.displayName = 'LogOut'

export default LogOut;
