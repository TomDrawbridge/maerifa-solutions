// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: umqBp7PH6EsELMxj7VcR5D
// Component: BlDT9nvXmxpX

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

import WorldMap from "../../worldMap"; // plasmic-import: KN691sHGOwmt/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: umqBp7PH6EsELMxj7VcR5D/projectcss
import sty from "./PlasmicBentoBoxWorldMap.module.css"; // plasmic-import: BlDT9nvXmxpX/css

createPlasmicElementProxy;

export type PlasmicBentoBoxWorldMap__VariantMembers = {
  type: "globe" | "noImage" | "midWidth" | "vertical" | "noHoverButton";
  color: "white";
  noImageTypes: "smallText" | "slot";
};
export type PlasmicBentoBoxWorldMap__VariantsArgs = {
  type?: SingleChoiceArg<
    "globe" | "noImage" | "midWidth" | "vertical" | "noHoverButton"
  >;
  color?: SingleChoiceArg<"white">;
  noImageTypes?: SingleChoiceArg<"smallText" | "slot">;
};
type VariantPropType = keyof PlasmicBentoBoxWorldMap__VariantsArgs;
export const PlasmicBentoBoxWorldMap__VariantProps = new Array<VariantPropType>(
  "type",
  "color",
  "noImageTypes"
);

export type PlasmicBentoBoxWorldMap__ArgsType = {
  header?: string;
  svgUrl?: string;
  description?: string;
  destination?: string;
  onClick?: (event: any) => void;
};
type ArgPropType = keyof PlasmicBentoBoxWorldMap__ArgsType;
export const PlasmicBentoBoxWorldMap__ArgProps = new Array<ArgPropType>(
  "header",
  "svgUrl",
  "description",
  "destination",
  "onClick"
);

export type PlasmicBentoBoxWorldMap__OverridesType = {
  bentoBox?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  worldMap?: Flex__<typeof WorldMap>;
};

export interface DefaultBentoBoxWorldMapProps {
  header?: string;
  svgUrl?: string;
  description?: string;
  destination?: string;
  onClick?: (event: any) => void;
  type?: SingleChoiceArg<
    "globe" | "noImage" | "midWidth" | "vertical" | "noHoverButton"
  >;
  color?: SingleChoiceArg<"white">;
  noImageTypes?: SingleChoiceArg<"smallText" | "slot">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBentoBoxWorldMap__RenderFunc(props: {
  variants: PlasmicBentoBoxWorldMap__VariantsArgs;
  args: PlasmicBentoBoxWorldMap__ArgsType;
  overrides: PlasmicBentoBoxWorldMap__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          header: "Header Text",
          svgUrl:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" version="1.1" id="Database-Refresh--Streamline-Core"> \t<path d="M5.726 0.48497399999999996C3.33683 0.537096 1.317778 1.19266 0.699482 2.1170240000000002C0.601244 2.2638979999999997 0.5583899999999999 2.3536240000000004 0.513898 2.5057060000000004L0.483084 2.611 0.47884200000000005 5.9430000000000005C0.475916 8.246433999999999 0.47923400000000005 9.315404 0.489594 9.405872C0.5377120000000001 9.82597 0.8062320000000001 10.191734 1.309588 10.522848C2.084992 11.032896 3.3278280000000002 11.385626 4.859078 11.530218C5.101026 11.553066000000001 5.10622 11.552982 5.16859 11.525388C5.25966 11.48511 5.31013 11.413066 5.316556 11.314128C5.32266 11.22044 5.294912 11.159442 5.217814000000001 11.097044C5.171838 11.059832000000002 5.151804 11.054764 4.981298000000001 11.037277999999999C4.399332 10.97761 4.1055980000000005 10.936268 3.689 10.855376C2.318806 10.58932 1.316826 10.099782000000001 1.0561040000000002 9.569C1.02963 9.5151 1.0016720000000001 9.437064000000001 0.9939859999999999 9.395596000000001C0.980154 9.321004 0.9729720000000001 7.0280000000000005 0.9865659999999999 7.0280000000000005C0.9901780000000001 7.0280000000000005 1.052758 7.074606 1.125628 7.131572C1.74489 7.6156500000000005 2.809576 7.989142 4.081 8.168314C4.670274 8.251362 5.175268 8.287832000000002 5.7372000000000005 8.28793C6.135878 8.288 6.145048 8.286502 6.218604 8.208746000000001C6.291292 8.131928 6.30581 8.029755999999999 6.258042 7.931083999999999C6.224008 7.860776 6.16784 7.817166 6.087452 7.798629999999999C6.054202 7.790958 5.882099999999999 7.784503999999999 5.705 7.78428C4.09829 7.78225 2.45224 7.408925999999999 1.603 6.853966000000001C1.231356 6.6110940000000005 1.0269 6.359206 0.9942799999999999 6.104C0.986748 6.045032 0.9806720000000001 5.50872 0.9804340000000001 4.88082L0.98 3.7626260000000005 1.0395 3.811276C1.472464 4.16528 2.04477 4.439624 2.814 4.66193C4.437692 5.131154 6.71391 5.200216 8.537116 4.835586C9.57978 4.62707 10.445624 4.27847 10.9795 3.852282L11.088000000000001 3.765664 11.088000000000001 4.9283920000000006C11.088000000000001 6.061692 11.0887 6.092492 11.115874 6.145748C11.195044 6.300952 11.410602 6.332942 11.524968 6.20648C11.594562 6.129508 11.592014 6.19878 11.591887999999999 4.392948C11.591832000000002 3.311672 11.586652 2.6764360000000003 11.577440000000001 2.618C11.543028 2.3998939999999997 11.436992 2.1811160000000003 11.265044 1.9734540000000003C10.955994 1.6002280000000002 10.321612 1.233708 9.541 0.9773820000000001C8.509732 0.6387360000000001 7.088088 0.45525200000000005 5.726 0.48497399999999996M5.712 0.988792C3.791396 1.0398500000000002 2.123156 1.480024 1.351 2.139466C1.00289 2.43677 0.90734 2.745512 1.0647980000000001 3.064236C1.1836579999999999 3.304812 1.509214 3.577602 1.925 3.785012C2.92971 4.286198 4.39411 4.56372 6.034 4.56372C7.8053360000000005 4.56372 9.41157 4.231626 10.357144000000002 3.6698760000000004C10.553298 3.553354 10.652614 3.477964 10.798116 3.33515C10.920868 3.2146660000000002 10.993556 3.1127740000000004 11.044964 2.989112C11.092535999999999 2.874662 11.093936 2.690772 11.0481 2.5739560000000004C10.763578 1.8488540000000002 9.225958 1.224412 7.28 1.0436720000000002C6.83263 1.00212 6.132546 0.97762 5.712 0.988792M9.695 7.909748C9.509752 7.939694 9.349298000000001 7.980294 9.194192 8.036462C9.037868 8.093064 8.99696 8.120644 8.961917999999999 8.193052C8.91219 8.295755999999999 8.925644 8.396794 8.999395999999999 8.474746000000001C9.091012 8.571584 9.163798 8.575714000000001 9.403562 8.497720000000001C9.642584 8.41995 9.853900000000001 8.386000000000001 10.098886 8.386000000000001C10.855082000000001 8.386014 11.544246000000001 8.750714 11.961824000000002 9.371852C12.319986 9.904622 12.431608 10.577546 12.264658 11.197536L12.24853 11.25747 12.084758 11.044376C11.994696000000001 10.927182 11.903220000000001 10.818178 11.881478000000001 10.802148C11.850622 10.779398 11.821194 10.773 11.747386 10.773C11.66473 10.773 11.646152 10.778082000000001 11.599882000000001 10.813376C11.503926 10.886568 11.468618000000001 11.019148 11.519144 11.116546C11.565707999999999 11.206286 12.19085 12.018776 12.231128 12.04189C12.291902 12.076764 12.353586 12.085346000000001 12.418238 12.06793C12.495322 12.047182000000001 13.350567999999999 11.404498 13.39065 11.337214000000001C13.433658000000001 11.26503 13.428674 11.149572000000001 13.379338 11.075022C13.318508 10.983098 13.185018000000001 10.93708 13.08741 10.97439C13.069588000000001 10.981207999999999 12.998342 11.028584 12.929098 11.07967C12.85984 11.130756 12.801096000000001 11.166302 12.798562 11.158686C12.796014 11.151056 12.803392 11.083198000000001 12.814942 11.007906C12.878978 10.590678 12.84374 10.171518 12.710516 9.76577C12.553548000000001 9.287683999999999 12.253878 8.840957999999999 11.881996000000001 8.530676C11.463844 8.181796 10.989538 7.972048 10.46241 7.902958C10.247160000000001 7.874734 9.89212 7.877884000000001 9.695 7.909748M7.7490000000000006 9.214772C7.679504 9.254308000000002 6.883954 9.86391 6.8471340000000005 9.90584C6.7718 9.991646 6.776 10.125948000000001 6.8570459999999995 10.222254C6.903036 10.27691 6.966736 10.304 7.049252 10.304C7.127372 10.304 7.158004 10.288726 7.299628000000001 10.179162C7.3604579999999995 10.132094 7.412916000000001 10.096254 7.416192 10.099516C7.419454 10.102792 7.410928 10.173758 7.3972500000000005 10.257226C7.3632159999999995 10.465014 7.363244000000001 10.85721 7.397334 11.065292000000001C7.499142000000001 11.686696 7.768908000000001 12.201112 8.221332 12.636582C8.894129999999999 13.284194 9.866038 13.538742000000001 10.78 13.30672C10.948 13.264062000000001 11.136314 13.195378000000002 11.189948000000001 13.157186C11.238584 13.122564 11.283258 13.031928 11.283692 12.967051999999999C11.284042000000001 12.914608 11.252262 12.83079 11.216968 12.79103C11.184012 12.75393 11.090016 12.712672 11.037544 12.712308C11.013646 12.71214 10.919146 12.736752000000001 10.827544 12.766992C10.617166000000001 12.836446 10.487974 12.862752 10.270512 12.880419999999999C9.714936 12.925528 9.134874 12.743976 8.69953 12.388698000000002C8.56702 12.280562 8.37382 12.073712 8.27701 11.936344C7.956732 11.481862000000001 7.810683999999999 10.862432 7.897120000000001 10.325000000000001C7.915978000000001 10.20768 7.953666 10.047128 7.965384 10.034094C7.970788 10.028102 8.040858 10.109932 8.121106 10.215954C8.325548000000001 10.486042000000001 8.34596 10.502646 8.472632 10.501973999999999C8.57836 10.5014 8.657026 10.446394000000002 8.700328 10.342752C8.730204 10.271253999999999 8.727502000000001 10.221344 8.689842 10.148866C8.661856 10.095036 8.185716 9.454648 8.062488 9.3051C7.996408000000001 9.224908000000001 7.943866 9.198042000000001 7.854 9.198476C7.81165 9.198686 7.7644 9.206021999999999 7.7490000000000006 9.214772" stroke="none" fill="currentColor" fill-rule="evenodd"></path> </svg>',
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
        },
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "noImageTypes",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noImageTypes
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"bentoBox"}
      data-plasmic-override={overrides.bentoBox}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.bentoBox,
        {
          [sty.bentoBoxcolor_white]: hasVariant($state, "color", "white"),
          [sty.bentoBoxcolor_white_type_midWidth]:
            hasVariant($state, "type", "midWidth") &&
            hasVariant($state, "color", "white"),
          [sty.bentoBoxcolor_white_type_vertical]:
            hasVariant($state, "type", "vertical") &&
            hasVariant($state, "color", "white"),
          [sty.bentoBoxnoImageTypes_slot]: hasVariant(
            $state,
            "noImageTypes",
            "slot"
          ),
          [sty.bentoBoxnoImageTypes_smallText]: hasVariant(
            $state,
            "noImageTypes",
            "smallText"
          ),
          [sty.bentoBoxtype_globe]: hasVariant($state, "type", "globe"),
          [sty.bentoBoxtype_midWidth]: hasVariant($state, "type", "midWidth"),
          [sty.bentoBoxtype_noHoverButton]: hasVariant(
            $state,
            "type",
            "noHoverButton"
          ),
          [sty.bentoBoxtype_noImage]: hasVariant($state, "type", "noImage"),
          [sty.bentoBoxtype_vertical]: hasVariant($state, "type", "vertical")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxcolor_white]: hasVariant($state, "color", "white"),
          [sty.freeBoxnoImageTypes_slot]: hasVariant(
            $state,
            "noImageTypes",
            "slot"
          ),
          [sty.freeBoxnoImageTypes_smallText]: hasVariant(
            $state,
            "noImageTypes",
            "smallText"
          ),
          [sty.freeBoxtype_noImage]: hasVariant($state, "type", "noImage"),
          [sty.freeBoxtype_vertical]: hasVariant($state, "type", "vertical")
        })}
      />

      <WorldMap
        data-plasmic-name={"worldMap"}
        data-plasmic-override={overrides.worldMap}
        className={classNames("__wab_instance", sty.worldMap)}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  bentoBox: ["bentoBox", "freeBox", "worldMap"],
  freeBox: ["freeBox"],
  worldMap: ["worldMap"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  bentoBox: "div";
  freeBox: "div";
  worldMap: typeof WorldMap;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBentoBoxWorldMap__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBentoBoxWorldMap__VariantsArgs;
    args?: PlasmicBentoBoxWorldMap__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBentoBoxWorldMap__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBentoBoxWorldMap__ArgsType,
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
          internalArgPropNames: PlasmicBentoBoxWorldMap__ArgProps,
          internalVariantPropNames: PlasmicBentoBoxWorldMap__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBentoBoxWorldMap__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "bentoBox") {
    func.displayName = "PlasmicBentoBoxWorldMap";
  } else {
    func.displayName = `PlasmicBentoBoxWorldMap.${nodeName}`;
  }
  return func;
}

export const PlasmicBentoBoxWorldMap = Object.assign(
  // Top-level PlasmicBentoBoxWorldMap renders the root element
  makeNodeComponent("bentoBox"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    worldMap: makeNodeComponent("worldMap"),

    // Metadata about props expected for PlasmicBentoBoxWorldMap
    internalVariantProps: PlasmicBentoBoxWorldMap__VariantProps,
    internalArgProps: PlasmicBentoBoxWorldMap__ArgProps
  }
);

export default PlasmicBentoBoxWorldMap;
/* prettier-ignore-end */
