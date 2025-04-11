
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12.001 16.437a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.625 7.625v1.5H6.5a2.75 2.75 0 0 0-2.75 2.75V18a2.75 2.75 0 0 0 2.75 2.75h11A2.75 2.75 0 0 0 20.25 18v-6.125a2.75 2.75 0 0 0-2.75-2.75h-1.125v-1.5a4.376 4.376 0 0 0-8.75 0Zm1.5 0v1.5h5.75v-1.5a2.875 2.875 0 0 0-5.75 0Zm-2.625 3c-.69 0-1.25.56-1.25 1.25V18c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25v-6.125c0-.69-.56-1.25-1.25-1.25h-11Z","clip-rule":"evenodd"}]]

/**
 * @component @name Private
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyLjAwMSAxNi40MzdhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42MjUgNy42MjV2MS41SDYuNWEyLjc1IDIuNzUgMCAwIDAtMi43NSAyLjc1VjE4YTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoMTFBMi43NSAyLjc1IDAgMCAwIDIwLjI1IDE4di02LjEyNWEyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1aC0xLjEyNXYtMS41YTQuMzc2IDQuMzc2IDAgMCAwLTguNzUgMFptMS41IDB2MS41aDUuNzV2LTEuNWEyLjg3NSAyLjg3NSAwIDAgMC01Ljc1IDBabS0yLjYyNSAzYy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNVYxOGMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWgxMWMuNjkgMCAxLjI1LS41NiAxLjI1LTEuMjV2LTYuMTI1YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNWgtMTFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Private = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-private',
        'staticon-Private',
        className
      ),
      ...props,
    })
);
Private.displayName = 'Private'

export default Private;
