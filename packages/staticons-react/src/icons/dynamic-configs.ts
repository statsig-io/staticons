
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.384 3.752a2.75 2.75 0 0 0-2.75 2.75v1.071A3.943 3.943 0 0 1 3 11.293a.75.75 0 0 0 0 1.415 3.943 3.943 0 0 1 2.633 3.719v1.071a2.75 2.75 0 0 0 2.75 2.75h.413c.15 0 .3-.012.449-.037l.372-.061a.75.75 0 1 0-.245-1.48L9 18.732a1.259 1.259 0 0 1-.204.016h-.413c-.69 0-1.25-.56-1.25-1.25v-1.071A5.444 5.444 0 0 0 4.859 12a5.444 5.444 0 0 0 2.275-4.427V6.502c0-.69.56-1.25 1.25-1.25h.413c.068 0 .136.005.204.017l.372.061a.75.75 0 1 0 .245-1.48l-.372-.061a2.75 2.75 0 0 0-.45-.037h-.412Zm9.983 2.75a2.75 2.75 0 0 0-2.75-2.75h-.413c-.15 0-.301.012-.45.037l-.371.061a.75.75 0 1 0 .245 1.48L15 5.27a1.25 1.25 0 0 1 .204-.017h.413c.69 0 1.25.56 1.25 1.25v1.071c0 1.787.872 3.423 2.275 4.427a5.444 5.444 0 0 0-2.275 4.427v1.071c0 .69-.56 1.25-1.25 1.25h-.413c-.069 0-.137-.005-.204-.016l-.372-.062a.75.75 0 1 0-.245 1.48l.372.061c.148.025.298.037.449.037h.413a2.75 2.75 0 0 0 2.75-2.75v-1.071a3.943 3.943 0 0 1 2.632-3.72.75.75 0 0 0 0-1.415 3.943 3.943 0 0 1-2.632-3.719V6.502Z"}]]

/**
 * @component @name DynamicConfigs
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguMzg0IDMuNzUyYTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MS4wNzFBMy45NDMgMy45NDMgMCAwIDEgMyAxMS4yOTNhLjc1Ljc1IDAgMCAwIDAgMS40MTUgMy45NDMgMy45NDMgMCAwIDEgMi42MzMgMy43MTl2MS4wNzFhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWguNDEzYy4xNSAwIC4zLS4wMTIuNDQ5LS4wMzdsLjM3Mi0uMDYxYS43NS43NSAwIDEgMC0uMjQ1LTEuNDhMOSAxOC43MzJhMS4yNTkgMS4yNTkgMCAwIDEtLjIwNC4wMTZoLS40MTNjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNXYtMS4wNzFBNS40NDQgNS40NDQgMCAwIDAgNC44NTkgMTJhNS40NDQgNS40NDQgMCAwIDAgMi4yNzUtNC40MjdWNi41MDJjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoLjQxM2MuMDY4IDAgLjEzNi4wMDUuMjA0LjAxN2wuMzcyLjA2MWEuNzUuNzUgMCAxIDAgLjI0NS0xLjQ4bC0uMzcyLS4wNjFhMi43NSAyLjc1IDAgMCAwLS40NS0uMDM3aC0uNDEyWm05Ljk4MyAyLjc1YTIuNzUgMi43NSAwIDAgMC0yLjc1LTIuNzVoLS40MTNjLS4xNSAwLS4zMDEuMDEyLS40NS4wMzdsLS4zNzEuMDYxYS43NS43NSAwIDEgMCAuMjQ1IDEuNDhMMTUgNS4yN2ExLjI1IDEuMjUgMCAwIDEgLjIwNC0uMDE3aC40MTNjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2MS4wNzFjMCAxLjc4Ny44NzIgMy40MjMgMi4yNzUgNC40MjdhNS40NDQgNS40NDQgMCAwIDAtMi4yNzUgNC40Mjd2MS4wNzFjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1aC0uNDEzYy0uMDY5IDAtLjEzNy0uMDA1LS4yMDQtLjAxNmwtLjM3Mi0uMDYyYS43NS43NSAwIDEgMC0uMjQ1IDEuNDhsLjM3Mi4wNjFjLjE0OC4wMjUuMjk4LjAzNy40NDkuMDM3aC40MTNhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NXYtMS4wNzFhMy45NDMgMy45NDMgMCAwIDEgMi42MzItMy43Mi43NS43NSAwIDAgMCAwLTEuNDE1IDMuOTQzIDMuOTQzIDAgMCAxLTIuNjMyLTMuNzE5VjYuNTAyWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DynamicConfigs = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-dynamic-configs',
        'staticon-DynamicConfigs',
        className
      ),
      ...props,
    })
);
DynamicConfigs.displayName = 'DynamicConfigs'

export default DynamicConfigs;
