// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: umqBp7PH6EsELMxj7VcR5D

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";
import ScrollProvider from "../../ScrollContext"; // plasmic-import: uPTC9bEzWvpe/codeComponent
import ThemeGlobalContext from "../../../src/ThemeGlobalContext"; // plasmic-import: RgDVU4heTPtd/codeComponent
import { useScreenVariants as useScreenVariantsjnoQdQuyEw7D } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JnoQdQUYEw7d/globalVariant

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
  scrollProviderProps?: Partial<
    Omit<React.ComponentProps<typeof ScrollProvider>, "children">
  >;
  themeGlobalContextProps?: Partial<
    Omit<React.ComponentProps<typeof ThemeGlobalContext>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    antdConfigProviderProps,
    embedCssProps,
    scrollProviderProps,
    themeGlobalContextProps
  } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjnoQdQuyEw7D()
  });

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 10
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#F1FAFA"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1D99FF"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : true
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : hasVariant(globalVariants, "screen", "mobileOnly")
          ? {
              fontFamily: "Outfit",
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "1.5",
              color: "#A3C8E7",
              letterSpacing: "normal"
            }
          : true
          ? {
              fontFamily: "Outfit",
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.5",
              color: "#A3C8E7",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <EmbedCss
        {...embedCssProps}
        css={
          embedCssProps && "css" in embedCssProps
            ? embedCssProps.css!
            : "@import url(\"https://use.typekit.net/bll5yzm.css\");\n\nvideo::-webkit-media-controls {\n  display: none;\n}\n.NavigationMenuLink[data-active] {\n\n   font-weight: 600;\n}\n.NavigationMenuRoot {\n    width: 100% !important;\n}\n.no-pointer {\n  pointer-events: none !important;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  scroll-padding-top: 100px;\n  scrollbar-color: #1d99ff #bbe0ff !important;\n  scrollbar-gutter: stable;\n  transition: 0.25s;\n}\n\n\n@import '@radix-ui/colors/black-alpha.css';\n\n/* reset */\nbutton {\n  all: unset;\n}\n\n.SwitchRoot {\n  width: 42px;\n  height: 25px;\n  background-color: #000000;\n  border-radius: 9999px;\n  position: relative;\n  box-shadow: 0 2px 10px #000000;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.SwitchRoot:focus {\n  box-shadow: 0 0 0 2px black;\n}\n.SwitchRoot[data-state='checked'] {\n  background-color: black;\n}\n\n.SwitchThumb {\n  display: block;\n  width: 21px;\n  height: 21px;\n  background-color: white;\n  border-radius: 9999px;\n  box-shadow: 0 2px 2px var(--black-a7);\n  transition: transform 100ms;\n  transform: translateX(2px);\n  will-change: transform;\n}\n.SwitchThumb[data-state='checked'] {\n  transform: translateX(19px);\n}\n\n.Label {\n  color: white;\n  font-size: 15px;\n  line-height: 1;\n}\n\n.logoexpand-0 {\n  height:35px !important;\n}\n.logoexpand-1 {\n  height:45px !important;\n}\n.logoexpand-2 {\n  height:55px !important;\n}\n.logoexpand-3 {\n  height:65px !important;\n}\nspinner_5nOS { color: var(--token-5AI_Gda4ZPGN); }\n\n.ant-modal-content {\n    border-radius: 15px !important;\n    overflow: hidden;\n}\n\n.breakword {\n  word-wrap: break-word !important;\n}\n\n\n.light-mode ul.NavigationMenuList {\n    background-color: var(--token-5AI_Gda4ZPGN);\n}\n\n.light-mode .CaretDown, .light-mode .NavigationMenuTrigger, .light-mode .NavigationMenuLink {\n    color: var(--token-u7dzQvXTMnBw);\n}\n.ant-select-dropdown .ant-select-item {\n  font-size: 16px;\n}\n/* Swiper Styles */\n.swiper {\n  overflow: visible !important;\n}\n\n.swiper-horizontal {\n    overflow: visible !important;\n}\n\n/* Importing external font */\n@import url(\"https://use.typekit.net/bll5yzm.css\");\n\n.swiper-pagination-bullet {\n  transition: 0.5s !important;\n}\n\n/* Specific styles for Swiper container and slides */\n.swiper-container {\n  height: auto !important;\n}\n\n.swiper-slide {\n  height: auto !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Additional specificity for custom class */\n.swiper-slide-content {\n  height: auto !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Ant Design Select Override Styles */\n.ant-select-single .ant-select-selector {\n  color: var(--token-u7dzQvXTMnBw);\n}\n\n:where(.css-1wc8eow).ant-select-single .ant-select-selector {\n  font-size: unset !important;\n}\n"
        }
      >
        <ScrollProvider {...scrollProviderProps}>
          <ThemeGlobalContext
            {...themeGlobalContextProps}
            initialTheme={
              themeGlobalContextProps &&
              "initialTheme" in themeGlobalContextProps
                ? themeGlobalContextProps.initialTheme!
                : "light"
            }
          >
            {children}
          </ThemeGlobalContext>
        </ScrollProvider>
      </EmbedCss>
    </AntdConfigProvider>
  );
}
