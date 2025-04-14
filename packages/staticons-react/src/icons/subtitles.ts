
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M15.996 5.126H3.999a.625.625 0 0 0-.625.625l.005 8.498c0 .345.28.625.625.625H16c.346 0 .626-.28.625-.625l-.005-8.498a.625.625 0 0 0-.625-.625ZM3.999 3.876h11.997c1.035 0 1.874.839 1.875 1.874l.005 8.498a1.875 1.875 0 0 1-1.875 1.876H4.004a1.875 1.875 0 0 1-1.875-1.874l-.005-8.498a1.875 1.875 0 0 1 1.875-1.876Zm4.741 6.735c0-.345.28-.625.625-.625h5.388a.625.625 0 1 1 0 1.25H9.365a.625.625 0 0 1-.625-.625Zm-3.505-.625a.625.625 0 1 0 0 1.25H6.89a.625.625 0 1 0 0-1.25H5.235Zm5.595 3.07c0 .345-.28.625-.625.625h-4.97a.625.625 0 1 1 0-1.25h4.97c.345 0 .625.28.625.625Zm3.923.625a.625.625 0 1 0 0-1.25h-2.068a.625.625 0 0 0 0 1.25h2.068Z","clip-rule":"evenodd"}]]

/**
 * @component @name Subtitles
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuOTk2IDUuMTI2SDMuOTk5YS42MjUuNjI1IDAgMCAwLS42MjUuNjI1bC4wMDUgOC40OThjMCAuMzQ1LjI4LjYyNS42MjUuNjI1SDE2Yy4zNDYgMCAuNjI2LS4yOC42MjUtLjYyNWwtLjAwNS04LjQ5OGEuNjI1LjYyNSAwIDAgMC0uNjI1LS42MjVaTTMuOTk5IDMuODc2aDExLjk5N2MxLjAzNSAwIDEuODc0LjgzOSAxLjg3NSAxLjg3NGwuMDA1IDguNDk4YTEuODc1IDEuODc1IDAgMCAxLTEuODc1IDEuODc2SDQuMDA0YTEuODc1IDEuODc1IDAgMCAxLTEuODc1LTEuODc0bC0uMDA1LTguNDk4YTEuODc1IDEuODc1IDAgMCAxIDEuODc1LTEuODc2Wm00Ljc0MSA2LjczNWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg1LjM4OGEuNjI1LjYyNSAwIDEgMSAwIDEuMjVIOS4zNjVhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1Wm0tMy41MDUtLjYyNWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVINi44OWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINS4yMzVabTUuNTk1IDMuMDdjMCAuMzQ1LS4yOC42MjUtLjYyNS42MjVoLTQuOTdhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDQuOTdjLjM0NSAwIC42MjUuMjguNjI1LjYyNVptMy45MjMuNjI1YS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtMi4wNjhhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDIuMDY4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Subtitles = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-subtitles',
        'staticon-Subtitles',
        className
      ),
      ...props,
    })
);
Subtitles.displayName = 'Subtitles'

export default Subtitles;
