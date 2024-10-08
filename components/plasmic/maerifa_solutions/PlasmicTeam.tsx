// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: umqBp7PH6EsELMxj7VcR5D
// Component: MK7PU_8zBcy2

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageWrapper from "../../PageWrapper"; // plasmic-import: LxnEHVEe-YQz/component
import { PlasmicHead } from "@plasmicapp/react-web";
import FramerMotion from "../../FramerMotion"; // plasmic-import: NKtmoaTySRQh/codeComponent
import Kicker from "../../Kicker"; // plasmic-import: sRJYTCOVASaN/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import TeamCard from "../../TeamCard"; // plasmic-import: 9kMbghGPkPE0/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsjnoQdQuyEw7D } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JnoQdQUYEw7d/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "./plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: umqBp7PH6EsELMxj7VcR5D/projectcss
import sty from "./PlasmicTeam.module.css"; // plasmic-import: MK7PU_8zBcy2/css

import Layer12SvgIcon from "./icons/PlasmicIcon__Layer12Svg"; // plasmic-import: XGTI_fupuDy3/icon

createPlasmicElementProxy;

export type PlasmicTeam__VariantMembers = {};
export type PlasmicTeam__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeam__VariantsArgs;
export const PlasmicTeam__VariantProps = new Array<VariantPropType>();

export type PlasmicTeam__ArgsType = {};
type ArgPropType = keyof PlasmicTeam__ArgsType;
export const PlasmicTeam__ArgProps = new Array<ArgPropType>();

export type PlasmicTeam__OverridesType = {
  root?: Flex__<typeof PageWrapper>;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
  heroWrapper?: Flex__<"header">;
  heroInner?: Flex__<"div">;
  heroContent?: Flex__<"hgroup">;
  kicker?: Flex__<typeof Kicker>;
  h1?: Flex__<"h1">;
  text?: Flex__<"div">;
  radialBg?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
  h2?: Flex__<"h2">;
  accent?: Flex__<"div">;
  svg?: Flex__<"svg">;
  teamCard?: Flex__<typeof TeamCard>;
};

export interface DefaultTeamProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTeam__RenderFunc(props: {
  variants: PlasmicTeam__VariantsArgs;
  args: PlasmicTeam__ArgsType;
  overrides: PlasmicTeam__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    maerifaGraphQl: usePlasmicDataOp(() => {
      return {
        sourceId: "aMgmeTWQBv5yDEivoQ6vB4",
        opId: "5c0d471b-2dfd-4a5b-986d-a18be36ad0a3",
        userArgs: {},
        cacheKey: `plasmic.$.5c0d471b-2dfd-4a5b-986d-a18be36ad0a3.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjnoQdQuyEw7D()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicTeam.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicTeam.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicTeam.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <PageWrapper
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          bottomLineNavbar={(() => {
            try {
              return $ctx.isScrolled;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return false;
              }
              throw e;
            }
          })()}
          children2={
            <div className={classNames(projectcss.all, sty.freeBox__mcnez)}>
              <PlasmicHead
                data-plasmic-name={"pageMetadataOverride"}
                data-plasmic-override={overrides.pageMetadataOverride}
                className={classNames(
                  "__wab_instance",
                  sty.pageMetadataOverride
                )}
                image={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "/plasmic/maerifa_solutions/images/asset28Png.png"
                    : "/plasmic/maerifa_solutions/images/asset28Png.png"
                }
                title={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Maerifa Solutions | High-Performance Server Technology on a Global Scale"
                    : "Maerifa Solutions | High-Performance Server Technology on a Global Scale"
                }
              />

              <header
                data-plasmic-name={"heroWrapper"}
                data-plasmic-override={overrides.heroWrapper}
                className={classNames(projectcss.all, sty.heroWrapper)}
              >
                <div
                  data-plasmic-name={"heroInner"}
                  data-plasmic-override={overrides.heroInner}
                  className={classNames(projectcss.all, sty.heroInner)}
                >
                  <Stack__
                    as={"hgroup"}
                    data-plasmic-name={"heroContent"}
                    data-plasmic-override={overrides.heroContent}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.heroContent)}
                  >
                    <FramerMotion
                      className={classNames(
                        "__wab_instance",
                        sty.framerMotion__ga2Uq
                      )}
                      delay={0}
                    >
                      <Kicker
                        data-plasmic-name={"kicker"}
                        data-plasmic-override={overrides.kicker}
                        className={classNames("__wab_instance", sty.kicker)}
                        color={"dark"}
                        text={"Our Leadership"}
                      />
                    </FramerMotion>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__vSfZx)}
                    >
                      <FramerMotion
                        className={classNames(
                          "__wab_instance",
                          sty.framerMotion___0H75R
                        )}
                        delay={0.1}
                      >
                        <h1
                          data-plasmic-name={"h1"}
                          data-plasmic-override={overrides.h1}
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1
                          )}
                        >
                          {"Meet the team"}
                        </h1>
                      </FramerMotion>
                      <FramerMotion
                        className={classNames(
                          "__wab_instance",
                          sty.framerMotion__hxLqz
                        )}
                        delay={0.2}
                      >
                        <div
                          data-plasmic-name={"text"}
                          data-plasmic-override={overrides.text}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text
                          )}
                        >
                          {
                            "Delivering innovative solutions tailored to each industry's unique needs, Maerifa Solutions' team combines world-class expertise in finance, technology, and server infrastructure"
                          }
                        </div>
                      </FramerMotion>
                    </Stack__>
                  </Stack__>
                </div>
              </header>
              <div className={classNames(projectcss.all, sty.freeBox__hvcDh)}>
                <div
                  data-plasmic-name={"radialBg"}
                  data-plasmic-override={overrides.radialBg}
                  className={classNames(projectcss.all, sty.radialBg)}
                />

                {(() => {
                  try {
                    return $queries.maerifaGraphQl.isLoading;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={
                      '<svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <style>\n    .spinner_5nOS{transform-origin:center;animation:spinner_sEAn .75s infinite linear}\n    @keyframes spinner_sEAn{100%{transform:rotate(360deg)}}\n  </style>\n  <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".15" fill="var(--token-5AI_Gda4ZPGN)"/>\n  <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z" class="spinner_5nOS" fill="var(--token-5AI_Gda4ZPGN)"/>\n</svg>'
                    }
                  />
                ) : null}
                {(() => {
                  try {
                    return !$queries.maerifaGraphQl.isLoading;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <FramerMotion
                    className={classNames(
                      "__wab_instance",
                      sty.framerMotion__tbOjB
                    )}
                    delay={0.3}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.maerifaGraphQl.data.response.data
                            .team_sections;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__kYtxA
                          )}
                          key={currentIndex}
                        >
                          <Stack__
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__cOuk9
                            )}
                          >
                            <h2
                              data-plasmic-name={"h2"}
                              data-plasmic-override={overrides.h2}
                              className={classNames(
                                projectcss.all,
                                projectcss.h2,
                                projectcss.__wab_text,
                                sty.h2
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return currentItem.name;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "Meet the Maerifa Team";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            </h2>
                            <Stack__
                              as={"div"}
                              data-plasmic-name={"accent"}
                              data-plasmic-override={overrides.accent}
                              hasGap={true}
                              className={classNames(projectcss.all, sty.accent)}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__jKrUd
                                )}
                              />

                              <Layer12SvgIcon
                                data-plasmic-name={"svg"}
                                data-plasmic-override={overrides.svg}
                                className={classNames(projectcss.all, sty.svg)}
                                role={"img"}
                              />
                            </Stack__>
                          </Stack__>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__xxcld
                            )}
                          >
                            {(_par =>
                              !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                              (() => {
                                try {
                                  return (() => {
                                    function filterTeamMembers(teamMembers) {
                                      return teamMembers.map(member => {
                                        if (
                                          member.team_members_id &&
                                          member.team_members_id.status ===
                                            "tba"
                                        ) {
                                          return {
                                            id: member.id,
                                            team_sections_id:
                                              member.team_sections_id,
                                            team_members_id: {
                                              id: member.team_members_id.id,
                                              status: "tba"
                                            }
                                          };
                                        } else {
                                          return member;
                                        }
                                      });
                                    }
                                    const filteredTeamMembers =
                                      filterTeamMembers(
                                        currentItem.team_member
                                      );
                                    return filteredTeamMembers;
                                  })();
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return [];
                                  }
                                  throw e;
                                }
                              })()
                            ).map((__plasmic_item_1, __plasmic_idx_1) => {
                              const currentItem = __plasmic_item_1;
                              const currentIndex = __plasmic_idx_1;
                              return (
                                <TeamCard
                                  data-plasmic-name={"teamCard"}
                                  data-plasmic-override={overrides.teamCard}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.teamCard
                                  )}
                                  destination2={""}
                                  header={(() => {
                                    try {
                                      return (() => {
                                        function combineNamesWithFallback(
                                          item
                                        ) {
                                          const firstName =
                                            item?.team_members_id?.first_name;
                                          const lastName =
                                            item?.team_members_id?.last_name;
                                          return firstName || lastName
                                            ? `${firstName || ""} ${
                                                lastName || ""
                                              }`.trim()
                                            : "TBA";
                                        }
                                        const fullName =
                                          combineNamesWithFallback(currentItem);
                                        return "Full name:", fullName;
                                      })();
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                  image={(() => {
                                    try {
                                      return (
                                        "https://content.maerifasolutions.com/assets/" +
                                        currentItem.team_members_id
                                          .profile_image.id +
                                        "?width=550&quality=50"
                                      );
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return {
                                          src: "/plasmic/maerifa_solutions/images/group6Png.png",
                                          fullWidth: 946,
                                          fullHeight: 946,
                                          aspectRatio: undefined
                                        };
                                      }
                                      throw e;
                                    }
                                  })()}
                                  key={currentIndex}
                                  longBio={(() => {
                                    try {
                                      return currentItem.team_members_id
                                        .long_bio;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                  shortBio={(() => {
                                    try {
                                      return (
                                        currentItem.team_members_id.short_bio ||
                                        "This member of the Maerifa Solutions team will be announced soon on our LinkedIn"
                                      );
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                  title={(() => {
                                    try {
                                      return (
                                        currentItem.team_members_id.role ||
                                        "To be announced"
                                      );
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                  type={(() => {
                                    try {
                                      return currentItem.team_members_id
                                        .status === "tba"
                                        ? "noHoverButton"
                                        : "";
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return [];
                                      }
                                      throw e;
                                    }
                                  })()}
                                />
                              );
                            })}
                          </div>
                        </Stack__>
                      );
                    })}
                  </FramerMotion>
                ) : null}
              </div>
            </div>
          }
          className={classNames("__wab_instance", sty.root)}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageMetadataOverride",
    "heroWrapper",
    "heroInner",
    "heroContent",
    "kicker",
    "h1",
    "text",
    "radialBg",
    "embedHtml",
    "h2",
    "accent",
    "svg",
    "teamCard"
  ],
  pageMetadataOverride: ["pageMetadataOverride"],
  heroWrapper: [
    "heroWrapper",
    "heroInner",
    "heroContent",
    "kicker",
    "h1",
    "text"
  ],
  heroInner: ["heroInner", "heroContent", "kicker", "h1", "text"],
  heroContent: ["heroContent", "kicker", "h1", "text"],
  kicker: ["kicker"],
  h1: ["h1"],
  text: ["text"],
  radialBg: ["radialBg"],
  embedHtml: ["embedHtml"],
  h2: ["h2"],
  accent: ["accent", "svg"],
  svg: ["svg"],
  teamCard: ["teamCard"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof PageWrapper;
  pageMetadataOverride: typeof PlasmicHead;
  heroWrapper: "header";
  heroInner: "div";
  heroContent: "hgroup";
  kicker: typeof Kicker;
  h1: "h1";
  text: "div";
  radialBg: "div";
  embedHtml: typeof Embed;
  h2: "h2";
  accent: "div";
  svg: "svg";
  teamCard: typeof TeamCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeam__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeam__VariantsArgs;
    args?: PlasmicTeam__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeam__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeam__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTeam__ArgProps,
          internalVariantPropNames: PlasmicTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeam";
  } else {
    func.displayName = `PlasmicTeam.${nodeName}`;
  }
  return func;
}

export const PlasmicTeam = Object.assign(
  // Top-level PlasmicTeam renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),
    heroWrapper: makeNodeComponent("heroWrapper"),
    heroInner: makeNodeComponent("heroInner"),
    heroContent: makeNodeComponent("heroContent"),
    kicker: makeNodeComponent("kicker"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    radialBg: makeNodeComponent("radialBg"),
    embedHtml: makeNodeComponent("embedHtml"),
    h2: makeNodeComponent("h2"),
    accent: makeNodeComponent("accent"),
    svg: makeNodeComponent("svg"),
    teamCard: makeNodeComponent("teamCard"),

    // Metadata about props expected for PlasmicTeam
    internalVariantProps: PlasmicTeam__VariantProps,
    internalArgProps: PlasmicTeam__ArgProps,

    // Page metadata
    pageMetadata: {
      title:
        "Our Team | Maerifa Solutions | Maerifa Solutions | Leading-edge technology solutions on a global scale",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTeam;
/* prettier-ignore-end */
