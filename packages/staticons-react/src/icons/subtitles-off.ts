
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.07 2.187a.625.625 0 0 0-.884.884l.993.993a1.875 1.875 0 0 0-1.055 1.688l.005 8.498c0 1.035.84 1.874 1.875 1.874H15.24l1.697 1.697a.625.625 0 0 0 .884-.884l-1.001-1a1.875 1.875 0 0 0 1.056-1.69l-.005-8.497c0-1.035-.84-1.874-1.875-1.874H4.759L3.07 2.187Zm1.172 2.939h-.243a.625.625 0 0 0-.625.625l.005 8.498c0 .345.28.625.625.625h9.986l-1.193-1.193h-.112a.625.625 0 0 1-.617-.728l-1.716-1.717h-.987a.625.625 0 0 1-.222-1.209L4.242 5.126Zm6.628 4.86-4.86-4.86h9.986c.345 0 .625.28.625.625l.005 8.498c0 .345-.28.625-.625.625h-.243l-1.194-1.193h.19a.625.625 0 1 0 0-1.25h-1.44l-1.194-1.195h2.633a.625.625 0 1 0 0-1.25H10.87Zm-6.26.625c0-.345.28-.625.625-.625H6.89a.625.625 0 1 1 0 1.25H5.235a.625.625 0 0 1-.625-.625Zm5.595 3.07a.625.625 0 0 0 0-1.25h-4.97a.625.625 0 0 0 0 1.25h4.97Z","clip-rule":"evenodd"}]]

/**
 * @component @name SubtitlesOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4wNyAyLjE4N2EuNjI1LjYyNSAwIDAgMC0uODg0Ljg4NGwuOTkzLjk5M2ExLjg3NSAxLjg3NSAwIDAgMC0xLjA1NSAxLjY4OGwuMDA1IDguNDk4YzAgMS4wMzUuODQgMS44NzQgMS44NzUgMS44NzRIMTUuMjRsMS42OTcgMS42OTdhLjYyNS42MjUgMCAwIDAgLjg4NC0uODg0bC0xLjAwMS0xYTEuODc1IDEuODc1IDAgMCAwIDEuMDU2LTEuNjlsLS4wMDUtOC40OTdjMC0xLjAzNS0uODQtMS44NzQtMS44NzUtMS44NzRINC43NTlMMy4wNyAyLjE4N1ptMS4xNzIgMi45MzloLS4yNDNhLjYyNS42MjUgMCAwIDAtLjYyNS42MjVsLjAwNSA4LjQ5OGMwIC4zNDUuMjguNjI1LjYyNS42MjVoOS45ODZsLTEuMTkzLTEuMTkzaC0uMTEyYS42MjUuNjI1IDAgMCAxLS42MTctLjcyOGwtMS43MTYtMS43MTdoLS45ODdhLjYyNS42MjUgMCAwIDEtLjIyMi0xLjIwOUw0LjI0MiA1LjEyNlptNi42MjggNC44Ni00Ljg2LTQuODZoOS45ODZjLjM0NSAwIC42MjUuMjguNjI1LjYyNWwuMDA1IDguNDk4YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1aC0uMjQzbC0xLjE5NC0xLjE5M2guMTlhLjYyNS42MjUgMCAxIDAgMC0xLjI1aC0xLjQ0bC0xLjE5NC0xLjE5NWgyLjYzM2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMTAuODdabS02LjI2LjYyNWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNUg2Ljg5YS42MjUuNjI1IDAgMSAxIDAgMS4yNUg1LjIzNWEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVabTUuNTk1IDMuMDdhLjYyNS42MjUgMCAwIDAgMC0xLjI1aC00Ljk3YS42MjUuNjI1IDAgMCAwIDAgMS4yNWg0Ljk3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SubtitlesOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-subtitles-off',
        'staticon-SubtitlesOff',
        className
      ),
      ...props,
    })
);
SubtitlesOff.displayName = 'SubtitlesOff'

export default SubtitlesOff;
