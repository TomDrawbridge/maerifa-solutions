// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorSvgIcon(props: VectorSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 660 376"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M656.984 338.138l-15.211-26.267-1.158-1.974-64.726-112.244c-3.036-5.167-8.607-8.423-14.585-8.517l-51.173.094c-3.349-.094-5.446-3.757-3.881-6.7l25.539-44.365a16.83 16.83 0 000-16.909L467.064 9.013c-.313-.627-.72-1.129-1.158-1.786 0-.062-.031-.093-.094-.093-1.784-2.193-4.1-4.009-6.729-5.166a23.65 23.65 0 00-2.097-.722c-.532-.218-1.158-.312-1.784-.406h-.094a17.41 17.41 0 00-2.629-.219h-129.42c-2.222 0-4.413.407-6.416 1.252-3.474 1.378-6.416 3.883-8.388 7.14l-13.052 22.604-12.488 21.761c-.751 1.034-1.69 1.784-2.848 2.098-1.471.313-2.942-.126-4.1-1.16a2.402 2.402 0 01-.814-.938L249.32 9.013c-1.91-3.257-4.852-5.668-8.201-7.14-1.909-.845-4.006-1.252-6.197-1.252H105.283c-.938 0-1.784.093-2.629.219-1.346.188-2.723.627-3.975 1.128-2.003.75-3.88 2.003-5.477 3.6-.407.532-.845 1.034-1.252 1.566 0 .093-.094.093-.094.093-.438.657-.845 1.159-1.158 1.786L25.973 121.257a16.833 16.833 0 000 16.908l25.54 44.365c1.564 2.943-.533 6.606-3.882 6.7l-51.173-.094c-5.978.094-11.55 3.35-14.585 8.517l-64.726 112.244-1.377 2.411c-1.784 4.634-1.47 9.862 1.159 14.403l81.094 140.487a17.115 17.115 0 008.2 7.137 17.424 17.424 0 006.51 1.253h129.733c5.884 0 11.549-3.131 14.492-8.39l13.145-22.7 12.488-21.635c1.69-2.943 6.009-2.943 7.668 0l25.634 44.335c3.067 5.165 8.513 8.296 14.522 8.39h129.608c5.978-.094 11.455-3.225 14.491-8.39l13.145-22.7 12.488-21.635c1.691-2.943 6.01-2.943 7.669 0l25.633 44.335c2.942 5.259 8.607 8.39 14.491 8.39h129.733c2.316 0 4.539-.407 6.542-1.253 3.255-1.47 6.071-3.881 7.981-7.137l64.788-112.12a17.36 17.36 0 000-16.94zm-272.893-13.743l-12.707 22.166-34.585 59.801c-2.191 3.883-6.291 6.2-10.704 6.2h-94.428c-4.413 0-8.607-2.317-10.829-6.2l-34.554-59.801-12.519-21.634c-.188-.439-.407-.753-.72-.971-1.784-1.66-4.413-1.66-6.103 0a2.588 2.588 0 00-.845.971l-46.948 81.435c-2.191 3.883-6.291 6.2-10.704 6.2H13.892c-4.414 0-8.514-2.317-10.704-6.2l-47.261-81.967a12.598 12.598 0 010-12.524l47.26-81.751c2.191-3.663 6.291-6.104 10.705-6.104h93.927c3.443 0 5.571-3.663 3.881-6.701l-34.147-59.27-12.926-22.072c-1.878-3.35-2.191-7.484-.72-11.054.188-.406.532-.938.72-1.44l34.678-59.8 12.614-21.854c0-.125.094-.125.094-.22.532-.939 1.158-1.69 1.878-2.411.438-.437.751-.75 1.158-1.064 2.222-1.69 4.851-2.63 7.668-2.63h94.553c2.191 0 4.319.626 6.197 1.691a12.704 12.704 0 012.629 2.003c.72.72 1.377 1.472 1.878 2.41l12.707 22.075 35.43 61.24c1.471 3.57 1.127 7.704-.751 11.054l-12.926 22.072-34.147 59.27c-1.659 3.038.438 6.701 3.912 6.701h93.896c4.413 0 8.513 2.441 10.704 6.104l47.293 81.875c2.191 3.883 2.19 8.61-.001 12.4z"
        }
        fill={"currentColor"}
        opacity={".13"}
      ></path>
    </svg>
  );
}

export default VectorSvgIcon;
/* prettier-ignore-end */
