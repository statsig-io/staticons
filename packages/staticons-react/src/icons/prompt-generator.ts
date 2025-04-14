
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.372 3.501a.625.625 0 0 0 0-1.25H2.625a.625.625 0 1 0 0 1.25h.756v12.997h-.756a.625.625 0 1 0 0 1.25h2.747a.625.625 0 1 0 0-1.25h-.741V3.501h.741Zm7.127 10.75.777-1.943a2.75 2.75 0 0 1 1.532-1.532l1.943-.777-1.943-.777a2.75 2.75 0 0 1-1.532-1.532L12.5 5.747l-.777 1.943a2.75 2.75 0 0 1-1.532 1.532l-1.942.777 1.942.777a2.75 2.75 0 0 1 1.532 1.532l.777 1.942Zm1.938-1.479-.777 1.943c-.42 1.047-1.902 1.047-2.321 0l-.777-1.943a1.5 1.5 0 0 0-.836-.836l-1.943-.777c-1.047-.419-1.047-1.902 0-2.32l1.943-.778a1.5 1.5 0 0 0 .836-.836l.777-1.942c.419-1.048 1.902-1.048 2.32 0l.778 1.942a1.5 1.5 0 0 0 .836.836l1.942.777c1.048.42 1.048 1.902 0 2.321l-1.942.777a1.5 1.5 0 0 0-.836.836Z","clip-rule":"evenodd"}]]

/**
 * @component @name PromptGenerator
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4zNzIgMy41MDFhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDIuNjI1YS42MjUuNjI1IDAgMSAwIDAgMS4yNWguNzU2djEyLjk5N2gtLjc1NmEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMi43NDdhLjYyNS42MjUgMCAxIDAgMC0xLjI1aC0uNzQxVjMuNTAxaC43NDFabTcuMTI3IDEwLjc1Ljc3Ny0xLjk0M2EyLjc1IDIuNzUgMCAwIDEgMS41MzItMS41MzJsMS45NDMtLjc3Ny0xLjk0My0uNzc3YTIuNzUgMi43NSAwIDAgMS0xLjUzMi0xLjUzMkwxMi41IDUuNzQ3bC0uNzc3IDEuOTQzYTIuNzUgMi43NSAwIDAgMS0xLjUzMiAxLjUzMmwtMS45NDIuNzc3IDEuOTQyLjc3N2EyLjc1IDIuNzUgMCAwIDEgMS41MzIgMS41MzJsLjc3NyAxLjk0MlptMS45MzgtMS40NzktLjc3NyAxLjk0M2MtLjQyIDEuMDQ3LTEuOTAyIDEuMDQ3LTIuMzIxIDBsLS43NzctMS45NDNhMS41IDEuNSAwIDAgMC0uODM2LS44MzZsLTEuOTQzLS43NzdjLTEuMDQ3LS40MTktMS4wNDctMS45MDIgMC0yLjMybDEuOTQzLS43NzhhMS41IDEuNSAwIDAgMCAuODM2LS44MzZsLjc3Ny0xLjk0MmMuNDE5LTEuMDQ4IDEuOTAyLTEuMDQ4IDIuMzIgMGwuNzc4IDEuOTQyYTEuNSAxLjUgMCAwIDAgLjgzNi44MzZsMS45NDIuNzc3YzEuMDQ4LjQyIDEuMDQ4IDEuOTAyIDAgMi4zMjFsLTEuOTQyLjc3N2ExLjUgMS41IDAgMCAwLS44MzYuODM2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const PromptGenerator = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-prompt-generator',
        'staticon-PromptGenerator',
        className
      ),
      ...props,
    })
);
PromptGenerator.displayName = 'PromptGenerator'

export default PromptGenerator;
