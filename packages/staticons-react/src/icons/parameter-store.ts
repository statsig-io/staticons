
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.689 2.626a2.75 2.75 0 0 0-2.75 2.75V10c0 .45.108.875.3 1.25H5.376A2.75 2.75 0 0 0 2.626 14v4.624a2.75 2.75 0 0 0 2.75 2.75h4.626c.787 0 1.497-.33 1.999-.861.501.53 1.211.861 1.999.861h4.626a2.75 2.75 0 0 0 2.75-2.75V14a2.75 2.75 0 0 0-2.75-2.75h-1.861c.192-.375.3-.8.3-1.25V5.376a2.75 2.75 0 0 0-2.75-2.75H9.689ZM11.25 14v-.055a1.25 1.25 0 0 0-1.227-1.195H5.376c-.69 0-1.25.56-1.25 1.25v4.624c0 .69.56 1.25 1.25 1.25h4.626c.672 0 1.22-.53 1.248-1.195V14ZM14 11.25h.336A1.25 1.25 0 0 0 15.565 10V5.376c0-.69-.56-1.25-1.25-1.25H9.689c-.69 0-1.25.56-1.25 1.25V10a1.25 1.25 0 0 0 1.229 1.25H14Zm0 8.624a1.25 1.25 0 0 1-1.248-1.25v-4.679a1.25 1.25 0 0 1 1.227-1.195h4.647c.69 0 1.25.56 1.25 1.25v4.624c0 .69-.56 1.25-1.25 1.25H14ZM11 5.761a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2ZM6.001 15a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm9.25-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z","clip-rule":"evenodd"}]]

/**
 * @component @name ParameterStore
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS42ODkgMi42MjZhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVYxMGMwIC40NS4xMDguODc1LjMgMS4yNUg1LjM3NkEyLjc1IDIuNzUgMCAwIDAgMi42MjYgMTR2NC42MjRhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWg0LjYyNmMuNzg3IDAgMS40OTctLjMzIDEuOTk5LS44NjEuNTAxLjUzIDEuMjExLjg2MSAxLjk5OS44NjFoNC42MjZhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVYxNGEyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1aC0xLjg2MWMuMTkyLS4zNzUuMy0uOC4zLTEuMjVWNS4zNzZhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NUg5LjY4OVpNMTEuMjUgMTR2LS4wNTVhMS4yNSAxLjI1IDAgMCAwLTEuMjI3LTEuMTk1SDUuMzc2Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXY0LjYyNGMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWg0LjYyNmMuNjcyIDAgMS4yMi0uNTMgMS4yNDgtMS4xOTVWMTRaTTE0IDExLjI1aC4zMzZBMS4yNSAxLjI1IDAgMCAwIDE1LjU2NSAxMFY1LjM3NmMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVIOS42ODljLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1VjEwYTEuMjUgMS4yNSAwIDAgMCAxLjIyOSAxLjI1SDE0Wm0wIDguNjI0YTEuMjUgMS4yNSAwIDAgMS0xLjI0OC0xLjI1di00LjY3OWExLjI1IDEuMjUgMCAwIDEgMS4yMjctMS4xOTVoNC42NDdjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2NC42MjRjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1SDE0Wk0xMSA1Ljc2MWEuNzUuNzUgMCAwIDAgMCAxLjVoMmEuNzUuNzUgMCAwIDAgMC0xLjVoLTJaTTYuMDAxIDE1YS43NS43NSAwIDAgMSAuNzUtLjc1aDJhLjc1Ljc1IDAgMCAxIDAgMS41aC0yYS43NS43NSAwIDAgMS0uNzUtLjc1Wm05LjI1LS43NWEuNzUuNzUgMCAwIDAgMCAxLjVoMmEuNzUuNzUgMCAwIDAgMC0xLjVoLTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ParameterStore = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-parameter-store',
        'staticon-ParameterStore',
        className
      ),
      ...props,
    })
);
ParameterStore.displayName = 'ParameterStore'

export default ParameterStore;
