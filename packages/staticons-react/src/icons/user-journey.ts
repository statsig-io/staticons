
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.482 2.127c.621 0 1.125.504 1.125 1.125V4.84h1.766a.625.625 0 1 1 0 1.25h-1.766v1.588c0 .62-.504 1.125-1.125 1.125h-2.147a1.125 1.125 0 0 1-1.125-1.125V6.09h-1.185a.625.625 0 0 0-.625.625v2.038c0 .48-.18.918-.477 1.25.298.331.479.77.479 1.25v2.032c0 .346.28.625.625.625h1.183v-1.588c0-.621.503-1.125 1.125-1.125h2.147c.621 0 1.125.504 1.125 1.125v1.588h1.766a.625.625 0 1 1 0 1.25h-1.766v1.588c0 .621-.504 1.125-1.125 1.125h-2.147a1.125 1.125 0 0 1-1.125-1.125V15.16h-1.183a1.875 1.875 0 0 1-1.875-1.875v-2.032a.625.625 0 0 0-.612-.625H6.399v1.917c0 .621-.504 1.125-1.125 1.125H3.127a1.125 1.125 0 0 1-1.125-1.125V7.409c0-.622.504-1.125 1.125-1.125h2.147c.621 0 1.125.503 1.125 1.125v1.97h1.14a.625.625 0 0 0 .61-.626V6.715c0-1.035.84-1.875 1.876-1.875h1.185V3.252c0-.621.503-1.125 1.125-1.125h2.147Zm-.125 1.25H12.46v4.176h1.897V3.377ZM5.149 7.534H3.252v4.886h1.897V7.534Zm7.31 4.913h1.898v4.176H12.46v-4.176Z","clip-rule":"evenodd"}]]

/**
 * @component @name UserJourney
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNDgyIDIuMTI3Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjVWNC44NGgxLjc2NmEuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTEuNzY2djEuNTg4YzAgLjYyLS41MDQgMS4xMjUtMS4xMjUgMS4xMjVoLTIuMTQ3YTEuMTI1IDEuMTI1IDAgMCAxLTEuMTI1LTEuMTI1VjYuMDloLTEuMTg1YS42MjUuNjI1IDAgMCAwLS42MjUuNjI1djIuMDM4YzAgLjQ4LS4xOC45MTgtLjQ3NyAxLjI1LjI5OC4zMzEuNDc5Ljc3LjQ3OSAxLjI1djIuMDMyYzAgLjM0Ni4yOC42MjUuNjI1LjYyNWgxLjE4M3YtMS41ODhjMC0uNjIxLjUwMy0xLjEyNSAxLjEyNS0xLjEyNWgyLjE0N2MuNjIxIDAgMS4xMjUuNTA0IDEuMTI1IDEuMTI1djEuNTg4aDEuNzY2YS42MjUuNjI1IDAgMSAxIDAgMS4yNWgtMS43NjZ2MS41ODhjMCAuNjIxLS41MDQgMS4xMjUtMS4xMjUgMS4xMjVoLTIuMTQ3YTEuMTI1IDEuMTI1IDAgMCAxLTEuMTI1LTEuMTI1VjE1LjE2aC0xLjE4M2ExLjg3NSAxLjg3NSAwIDAgMS0xLjg3NS0xLjg3NXYtMi4wMzJhLjYyNS42MjUgMCAwIDAtLjYxMi0uNjI1SDYuMzk5djEuOTE3YzAgLjYyMS0uNTA0IDEuMTI1LTEuMTI1IDEuMTI1SDMuMTI3YTEuMTI1IDEuMTI1IDAgMCAxLTEuMTI1LTEuMTI1VjcuNDA5YzAtLjYyMi41MDQtMS4xMjUgMS4xMjUtMS4xMjVoMi4xNDdjLjYyMSAwIDEuMTI1LjUwMyAxLjEyNSAxLjEyNXYxLjk3aDEuMTRhLjYyNS42MjUgMCAwIDAgLjYxLS42MjZWNi43MTVjMC0xLjAzNS44NC0xLjg3NSAxLjg3Ni0xLjg3NWgxLjE4NVYzLjI1MmMwLS42MjEuNTAzLTEuMTI1IDEuMTI1LTEuMTI1aDIuMTQ3Wm0tLjEyNSAxLjI1SDEyLjQ2djQuMTc2aDEuODk3VjMuMzc3Wk01LjE0OSA3LjUzNEgzLjI1MnY0Ljg4NmgxLjg5N1Y3LjUzNFptNy4zMSA0LjkxM2gxLjg5OHY0LjE3NkgxMi40NnYtNC4xNzZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UserJourney = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-user-journey',
        'staticon-UserJourney',
        className
      ),
      ...props,
    })
);
UserJourney.displayName = 'UserJourney'

export default UserJourney;
