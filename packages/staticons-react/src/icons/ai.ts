
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"m14.728 9.618.678-1.695a.625.625 0 0 1 .348-.348l1.695-.678c.734-.293.734-1.332 0-1.625l-1.695-.678a.625.625 0 0 1-.348-.348l-.678-1.695c-.293-.733-1.331-.733-1.625 0l-.678 1.695a.625.625 0 0 1-.348.348l-1.695.678c-.733.293-.733 1.332 0 1.625l1.695.678c.159.063.285.19.348.348l.678 1.695c.294.733 1.332.733 1.625 0Zm-.812-1.335-.33-.824a1.875 1.875 0 0 0-1.045-1.045l-.824-.33.824-.33c.477-.19.854-.567 1.045-1.044l.33-.824.33.824c.19.477.568.854 1.044 1.045l.825.33-.825.33a1.87 1.87 0 0 0-1.044 1.044l-.33.824ZM2 14.873C2 16.6 3.4 18 5.125 18h9.072c1.726 0 3.125-1.4 3.125-3.125v-4.778a.625.625 0 0 0-1.25 0v4.778c0 1.035-.84 1.875-1.875 1.875H5.125a1.875 1.875 0 0 1-1.875-1.875V6.288c0-1.036.84-1.875 1.875-1.875h4.293a.625.625 0 1 0 0-1.25H5.125A3.125 3.125 0 0 0 2 6.288v8.586Zm9.398-5.007a.625.625 0 1 0-1.25 0v1.433a.625.625 0 0 0 1.25 0V9.866ZM5.76 9.252c.346 0 .625.28.625.625v1.517a.625.625 0 0 1-1.25 0V9.877c0-.345.28-.625.625-.625Zm1.454 4.295a.625.625 0 1 0-.884.884 2.773 2.773 0 0 0 3.917 0 .625.625 0 1 0-.884-.884 1.523 1.523 0 0 1-2.15 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Ai
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTQuNzI4IDkuNjE4LjY3OC0xLjY5NWEuNjI1LjYyNSAwIDAgMSAuMzQ4LS4zNDhsMS42OTUtLjY3OGMuNzM0LS4yOTMuNzM0LTEuMzMyIDAtMS42MjVsLTEuNjk1LS42NzhhLjYyNS42MjUgMCAwIDEtLjM0OC0uMzQ4bC0uNjc4LTEuNjk1Yy0uMjkzLS43MzMtMS4zMzEtLjczMy0xLjYyNSAwbC0uNjc4IDEuNjk1YS42MjUuNjI1IDAgMCAxLS4zNDguMzQ4bC0xLjY5NS42NzhjLS43MzMuMjkzLS43MzMgMS4zMzIgMCAxLjYyNWwxLjY5NS42NzhjLjE1OS4wNjMuMjg1LjE5LjM0OC4zNDhsLjY3OCAxLjY5NWMuMjk0LjczMyAxLjMzMi43MzMgMS42MjUgMFptLS44MTItMS4zMzUtLjMzLS44MjRhMS44NzUgMS44NzUgMCAwIDAtMS4wNDUtMS4wNDVsLS44MjQtLjMzLjgyNC0uMzNjLjQ3Ny0uMTkuODU0LS41NjcgMS4wNDUtMS4wNDRsLjMzLS44MjQuMzMuODI0Yy4xOS40NzcuNTY4Ljg1NCAxLjA0NCAxLjA0NWwuODI1LjMzLS44MjUuMzNhMS44NyAxLjg3IDAgMCAwLTEuMDQ0IDEuMDQ0bC0uMzMuODI0Wk0yIDE0Ljg3M0MyIDE2LjYgMy40IDE4IDUuMTI1IDE4aDkuMDcyYzEuNzI2IDAgMy4xMjUtMS40IDMuMTI1LTMuMTI1di00Ljc3OGEuNjI1LjYyNSAwIDAgMC0xLjI1IDB2NC43NzhjMCAxLjAzNS0uODQgMS44NzUtMS44NzUgMS44NzVINS4xMjVhMS44NzUgMS44NzUgMCAwIDEtMS44NzUtMS44NzVWNi4yODhjMC0xLjAzNi44NC0xLjg3NSAxLjg3NS0xLjg3NWg0LjI5M2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVINS4xMjVBMy4xMjUgMy4xMjUgMCAwIDAgMiA2LjI4OHY4LjU4NlptOS4zOTgtNS4wMDdhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjEuNDMzYS42MjUuNjI1IDAgMCAwIDEuMjUgMFY5Ljg2NlpNNS43NiA5LjI1MmMuMzQ2IDAgLjYyNS4yOC42MjUuNjI1djEuNTE3YS42MjUuNjI1IDAgMCAxLTEuMjUgMFY5Ljg3N2MwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVptMS40NTQgNC4yOTVhLjYyNS42MjUgMCAxIDAtLjg4NC44ODQgMi43NzMgMi43NzMgMCAwIDAgMy45MTcgMCAuNjI1LjYyNSAwIDEgMC0uODg0LS44ODQgMS41MjMgMS41MjMgMCAwIDEtMi4xNSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Ai = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-ai',
        'staticon-Ai',
        className
      ),
      ...props,
    })
);
Ai.displayName = 'Ai'

export default Ai;
