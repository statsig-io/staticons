
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M15.2 4.684a.625.625 0 0 1 .883 0l1.73 1.73a.625.625 0 0 1 0 .884l-1.73 1.73a.625.625 0 0 1-.884-.883l.653-.653H2.626a.625.625 0 0 1 0-1.25h13.247l-.674-.674a.625.625 0 0 1 0-.884Zm-7.524 9.44c0 .759.615 1.374 1.375 1.374h1.888c.76 0 1.375-.615 1.375-1.375v-1.888c0-.76-.616-1.375-1.375-1.375H9.05c-.76 0-1.375.616-1.375 1.375v1.888Zm1.375.124a.125.125 0 0 1-.125-.125v-1.888c0-.07.056-.125.125-.125h1.888c.069 0 .125.056.125.125v1.888c0 .07-.056.125-.125.125H9.05Zm4.309-.124c0 .76.616 1.375 1.375 1.375h1.888c.76 0 1.375-.616 1.375-1.375v-1.889c0-.759-.615-1.375-1.375-1.375h-1.888c-.76 0-1.375.616-1.375 1.375v1.889Zm1.375.125a.125.125 0 0 1-.125-.125v-1.889c0-.069.056-.125.125-.125h1.888c.07 0 .125.056.125.125v1.889a.125.125 0 0 1-.125.125h-1.888ZM3.018 15.473a1 1 0 0 1-1-1v-2.585a1 1 0 0 1 1-1h2.584a1 1 0 0 1 1 1v2.585a1 1 0 0 1-1 1H3.018Z","clip-rule":"evenodd"}]]

/**
 * @component @name ReleasePipeline
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMiA0LjY4NGEuNjI1LjYyNSAwIDAgMSAuODgzIDBsMS43MyAxLjczYS42MjUuNjI1IDAgMCAxIDAgLjg4NGwtMS43MyAxLjczYS42MjUuNjI1IDAgMCAxLS44ODQtLjg4M2wuNjUzLS42NTNIMi42MjZhLjYyNS42MjUgMCAwIDEgMC0xLjI1aDEzLjI0N2wtLjY3NC0uNjc0YS42MjUuNjI1IDAgMCAxIDAtLjg4NFptLTcuNTI0IDkuNDRjMCAuNzU5LjYxNSAxLjM3NCAxLjM3NSAxLjM3NGgxLjg4OGMuNzYgMCAxLjM3NS0uNjE1IDEuMzc1LTEuMzc1di0xLjg4OGMwLS43Ni0uNjE2LTEuMzc1LTEuMzc1LTEuMzc1SDkuMDVjLS43NiAwLTEuMzc1LjYxNi0xLjM3NSAxLjM3NXYxLjg4OFptMS4zNzUuMTI0YS4xMjUuMTI1IDAgMCAxLS4xMjUtLjEyNXYtMS44ODhjMC0uMDcuMDU2LS4xMjUuMTI1LS4xMjVoMS44ODhjLjA2OSAwIC4xMjUuMDU2LjEyNS4xMjV2MS44ODhjMCAuMDctLjA1Ni4xMjUtLjEyNS4xMjVIOS4wNVptNC4zMDktLjEyNGMwIC43Ni42MTYgMS4zNzUgMS4zNzUgMS4zNzVoMS44ODhjLjc2IDAgMS4zNzUtLjYxNiAxLjM3NS0xLjM3NXYtMS44ODljMC0uNzU5LS42MTUtMS4zNzUtMS4zNzUtMS4zNzVoLTEuODg4Yy0uNzYgMC0xLjM3NS42MTYtMS4zNzUgMS4zNzV2MS44ODlabTEuMzc1LjEyNWEuMTI1LjEyNSAwIDAgMS0uMTI1LS4xMjV2LTEuODg5YzAtLjA2OS4wNTYtLjEyNS4xMjUtLjEyNWgxLjg4OGMuMDcgMCAuMTI1LjA1Ni4xMjUuMTI1djEuODg5YS4xMjUuMTI1IDAgMCAxLS4xMjUuMTI1aC0xLjg4OFpNMy4wMTggMTUuNDczYTEgMSAwIDAgMS0xLTF2LTIuNTg1YTEgMSAwIDAgMSAxLTFoMi41ODRhMSAxIDAgMCAxIDEgMXYyLjU4NWExIDEgMCAwIDEtMSAxSDMuMDE4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ReleasePipeline = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-release-pipeline',
        'staticon-ReleasePipeline',
        className
      ),
      ...props,
    })
);
ReleasePipeline.displayName = 'ReleasePipeline'

export default ReleasePipeline;
