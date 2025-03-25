var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var init_utils = __esm({
  "src/lib/utils.ts"() {
    "use strict";
  }
});

// src/registry/ui/input.tsx
var input_exports = {};
__export(input_exports, {
  Input: () => Input
});
import * as React2 from "react";
import { cva } from "class-variance-authority";
import { EyeIcon, EyeOffIcon } from "lucide-react";
var containerVariants, inputVariants, Input;
var init_input = __esm({
  "src/registry/ui/input.tsx"() {
    "use strict";
    "use client";
    init_utils();
    containerVariants = cva(
      "flex w-full rounded-md text-base relative cursor-text data-[is-invalid=true]:border-destructive focus-within:border-ring transition-all duration-200",
      {
        variants: {
          variant: {
            default: "bg-muted border-2 border-input",
            bordered: "border-2 border-input",
            underline: "border-b-2 border-input rounded-none"
          },
          size: {
            sm: "h-10 min-h-8 px-3 py-1.5",
            md: "h-12 min-h-10 px-3 py-2",
            lg: "h-14 min-h-12 px-3 py-2.5"
          }
        },
        compoundVariants: [
          {
            variant: "underline",
            className: "px-0.5"
          }
        ],
        defaultVariants: {
          variant: "default",
          size: "md"
        }
      }
    );
    inputVariants = cva(
      "w-full h-full outline-hidden disabled:cursor-not-allowed bg-transparent [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill:hover]:bg-transparent [&:-webkit-autofill:focus]:bg-transparent [&:-webkit-autofill:active]:bg-transparent [&:-webkit-autofill]:[transition-delay:9999s]",
      {
        variants: {
          size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg"
          }
        },
        defaultVariants: {
          size: "md"
        }
      }
    );
    Input = React2.forwardRef(
      ({ className, inputClassName, type, placeholder, value, variant, size: size4, "aria-invalid": ariaInvalid, disabled, startContent, endContent, ...props }, ref) => {
        const [showPassword, setShowPassword] = React2.useState(false);
        const endContentRender = () => {
          if (endContent) {
            return endContent;
          }
          if (type === "password") {
            return /* @__PURE__ */ React2.createElement(
              "button",
              {
                "aria-label": "Change password visibility",
                type: "button",
                className: "cursor-pointer",
                onClick: () => setShowPassword(!showPassword)
              },
              !showPassword ? /* @__PURE__ */ React2.createElement(EyeOffIcon, { size: 20 }) : /* @__PURE__ */ React2.createElement(EyeIcon, { size: 20 })
            );
          }
          return null;
        };
        return /* @__PURE__ */ React2.createElement(
          "div",
          {
            className: cn(
              containerVariants({ variant, size: size4 }),
              "group flex items-center justify-center gap-1.5",
              className
            ),
            "data-is-invalid": ariaInvalid?.toString()
          },
          startContent && startContent,
          /* @__PURE__ */ React2.createElement("div", { className: cn(
            "inline-flex w-full items-end h-full relative",
            disabled && "opacity-50"
          ) }, /* @__PURE__ */ React2.createElement(
            "input",
            {
              type: type === "password" && endContent === void 0 && showPassword ? "text" : type,
              ref,
              className: cn(inputVariants({ size: size4 }), inputClassName),
              value,
              disabled,
              placeholder,
              ...props
            }
          )),
          endContentRender()
        );
      }
    );
    Input.displayName = "Input";
  }
});

// src/registry/example/input/size.tsx
var size_exports = {};
__export(size_exports, {
  InputSizeExample: () => InputSizeExample
});
var InputSizeExample;
var init_size = __esm({
  "src/registry/example/input/size.tsx"() {
    "use strict";
    init_input();
    InputSizeExample = () => {
      const sizes = ["sm", "md", "lg"];
      return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-4 w-full max-w-sm" }, sizes.map((size4) => /* @__PURE__ */ React.createElement(Input, { key: size4, size: size4, placeholder: size4 })));
    };
  }
});

// src/registry/example/input/variant.tsx
var variant_exports = {};
__export(variant_exports, {
  InputVariantExample: () => InputVariantExample
});
var InputVariantExample;
var init_variant = __esm({
  "src/registry/example/input/variant.tsx"() {
    "use strict";
    init_input();
    InputVariantExample = () => {
      const variants = ["default", "bordered", "underline"];
      return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-4 w-full max-w-sm" }, variants.map((variant) => /* @__PURE__ */ React.createElement(Input, { key: variant, variant, placeholder: "Please enter" })));
    };
  }
});

// src/registry/example/input/start-end-content.tsx
var start_end_content_exports = {};
__export(start_end_content_exports, {
  InputStartEndContentExample: () => InputStartEndContentExample
});
import { CheckCheck, SearchIcon } from "lucide-react";
var InputStartEndContentExample;
var init_start_end_content = __esm({
  "src/registry/example/input/start-end-content.tsx"() {
    "use strict";
    init_input();
    InputStartEndContentExample = () => {
      const variants = ["default", "bordered", "underline"];
      const startContent = /* @__PURE__ */ React.createElement(SearchIcon, { size: 20 });
      const endContent = /* @__PURE__ */ React.createElement(CheckCheck, { size: 20 });
      return /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, variants.map((variant) => /* @__PURE__ */ React.createElement(Input, { key: variant, variant, placeholder: "Please enter", startContent })), variants.map((variant) => /* @__PURE__ */ React.createElement(Input, { key: variant, variant, placeholder: "Please enter", endContent })), variants.map((variant) => /* @__PURE__ */ React.createElement(Input, { key: variant, variant, placeholder: "Please enter", startContent, endContent })));
    };
  }
});

// src/registry/example/input/password.tsx
var password_exports = {};
__export(password_exports, {
  InputPasswordExample: () => InputPasswordExample
});
var InputPasswordExample;
var init_password = __esm({
  "src/registry/example/input/password.tsx"() {
    "use strict";
    init_input();
    InputPasswordExample = () => {
      const variants = ["default", "bordered", "underline"];
      return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-4 w-full max-w-sm" }, variants.map((variant) => /* @__PURE__ */ React.createElement(Input, { key: variant, variant, type: "password", placeholder: "Please enter your password" })));
    };
  }
});

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
var init_dist = __esm({
  "node_modules/@radix-ui/primitive/dist/index.mjs"() {
  }
});

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React3 from "react";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i2 = 0; i2 < cleanups.length; i2++) {
          const cleanup = cleanups[i2];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i2], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React3.useCallback(composeRefs(...refs), refs);
}
var init_dist2 = __esm({
  "node_modules/@radix-ui/react-compose-refs/dist/index.mjs"() {
  }
});

// node_modules/@radix-ui/react-context/dist/index.mjs
import * as React4 from "react";
import { jsx } from "react/jsx-runtime";
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React4.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const value = React4.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const context = React4.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React4.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React4.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React4.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var init_dist3 = __esm({
  "node_modules/@radix-ui/react-context/dist/index.mjs"() {
  }
});

// node_modules/@radix-ui/react-slot/dist/index.mjs
import * as React5 from "react";
import { Fragment as Fragment2, jsx as jsx2 } from "react/jsx-runtime";
function isSlottable(child) {
  return React5.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Slot, SlotClone, Slottable;
var init_dist4 = __esm({
  "node_modules/@radix-ui/react-slot/dist/index.mjs"() {
    init_dist2();
    Slot = React5.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      const childrenArray = React5.Children.toArray(children);
      const slottable = childrenArray.find(isSlottable);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (React5.Children.count(newElement) > 1) return React5.Children.only(null);
            return React5.isValidElement(newElement) ? newElement.props.children : null;
          } else {
            return child;
          }
        });
        return /* @__PURE__ */ jsx2(SlotClone, { ...slotProps, ref: forwardedRef, children: React5.isValidElement(newElement) ? React5.cloneElement(newElement, void 0, newChildren) : null });
      }
      return /* @__PURE__ */ jsx2(SlotClone, { ...slotProps, ref: forwardedRef, children });
    });
    Slot.displayName = "Slot";
    SlotClone = React5.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      if (React5.isValidElement(children)) {
        const childrenRef = getElementRef(children);
        const props2 = mergeProps(slotProps, children.props);
        if (children.type !== React5.Fragment) {
          props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
        }
        return React5.cloneElement(children, props2);
      }
      return React5.Children.count(children) > 1 ? React5.Children.only(null) : null;
    });
    SlotClone.displayName = "SlotClone";
    Slottable = ({ children }) => {
      return /* @__PURE__ */ jsx2(Fragment2, { children });
    };
  }
});

// node_modules/@radix-ui/react-primitive/dist/index.mjs
import * as React6 from "react";
import * as ReactDOM from "react-dom";
import { jsx as jsx3 } from "react/jsx-runtime";
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
var NODES, Primitive;
var init_dist5 = __esm({
  "node_modules/@radix-ui/react-primitive/dist/index.mjs"() {
    init_dist4();
    NODES = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul"
    ];
    Primitive = NODES.reduce((primitive, node) => {
      const Node2 = React6.forwardRef((props, forwardedRef) => {
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
          window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ jsx3(Comp, { ...primitiveProps, ref: forwardedRef });
      });
      Node2.displayName = `Primitive.${node}`;
      return { ...primitive, [node]: Node2 };
    }, {});
  }
});

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
import * as React7 from "react";
function useCallbackRef(callback) {
  const callbackRef = React7.useRef(callback);
  React7.useEffect(() => {
    callbackRef.current = callback;
  });
  return React7.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
var init_dist6 = __esm({
  "node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"() {
  }
});

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
import * as React8 from "react";
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React8.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}
var init_dist7 = __esm({
  "node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs"() {
    init_dist6();
  }
});

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import * as React9 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React9.useRef(false);
  const handleClickRef = React9.useRef(() => {
  });
  React9.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React9.useRef(false);
  React9.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var DISMISSABLE_LAYER_NAME, CONTEXT_UPDATE, POINTER_DOWN_OUTSIDE, FOCUS_OUTSIDE, originalBodyPointerEvents, DismissableLayerContext, DismissableLayer, BRANCH_NAME, DismissableLayerBranch;
var init_dist8 = __esm({
  "node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"() {
    "use client";
    init_dist();
    init_dist5();
    init_dist2();
    init_dist6();
    init_dist7();
    DISMISSABLE_LAYER_NAME = "DismissableLayer";
    CONTEXT_UPDATE = "dismissableLayer.update";
    POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
    FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
    DismissableLayerContext = React9.createContext({
      layers: /* @__PURE__ */ new Set(),
      layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
      branches: /* @__PURE__ */ new Set()
    });
    DismissableLayer = React9.forwardRef(
      (props, forwardedRef) => {
        const {
          disableOutsidePointerEvents = false,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          onDismiss,
          ...layerProps
        } = props;
        const context = React9.useContext(DismissableLayerContext);
        const [node, setNode] = React9.useState(null);
        const ownerDocument = node?.ownerDocument ?? globalThis?.document;
        const [, force] = React9.useState({});
        const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
        const layers = Array.from(context.layers);
        const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
        const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
        const index2 = node ? layers.indexOf(node) : -1;
        const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
        const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
        const pointerDownOutside = usePointerDownOutside((event) => {
          const target = event.target;
          const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
          if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
          onPointerDownOutside?.(event);
          onInteractOutside?.(event);
          if (!event.defaultPrevented) onDismiss?.();
        }, ownerDocument);
        const focusOutside = useFocusOutside((event) => {
          const target = event.target;
          const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
          if (isFocusInBranch) return;
          onFocusOutside?.(event);
          onInteractOutside?.(event);
          if (!event.defaultPrevented) onDismiss?.();
        }, ownerDocument);
        useEscapeKeydown((event) => {
          const isHighestLayer = index2 === context.layers.size - 1;
          if (!isHighestLayer) return;
          onEscapeKeyDown?.(event);
          if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
          }
        }, ownerDocument);
        React9.useEffect(() => {
          if (!node) return;
          if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
              originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
              ownerDocument.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
          }
          context.layers.add(node);
          dispatchUpdate();
          return () => {
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
              ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
            }
          };
        }, [node, ownerDocument, disableOutsidePointerEvents, context]);
        React9.useEffect(() => {
          return () => {
            if (!node) return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
          };
        }, [node, context]);
        React9.useEffect(() => {
          const handleUpdate = () => force({});
          document.addEventListener(CONTEXT_UPDATE, handleUpdate);
          return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
        }, []);
        return /* @__PURE__ */ jsx4(
          Primitive.div,
          {
            ...layerProps,
            ref: composedRefs,
            style: {
              pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
              ...props.style
            },
            onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
            onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
            onPointerDownCapture: composeEventHandlers(
              props.onPointerDownCapture,
              pointerDownOutside.onPointerDownCapture
            )
          }
        );
      }
    );
    DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
    BRANCH_NAME = "DismissableLayerBranch";
    DismissableLayerBranch = React9.forwardRef((props, forwardedRef) => {
      const context = React9.useContext(DismissableLayerContext);
      const ref = React9.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      React9.useEffect(() => {
        const node = ref.current;
        if (node) {
          context.branches.add(node);
          return () => {
            context.branches.delete(node);
          };
        }
      }, [context.branches]);
      return /* @__PURE__ */ jsx4(Primitive.div, { ...props, ref: composedRefs });
    });
    DismissableLayerBranch.displayName = BRANCH_NAME;
  }
});

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
import * as React10 from "react";
function useFocusGuards() {
  React10.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
var count;
var init_dist9 = __esm({
  "node_modules/@radix-ui/react-focus-guards/dist/index.mjs"() {
    "use client";
    count = 0;
  }
});

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
import * as React11 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item2) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item2);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item2) => item2.tagName !== "A");
}
var AUTOFOCUS_ON_MOUNT, AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS, FOCUS_SCOPE_NAME, FocusScope, focusScopesStack;
var init_dist10 = __esm({
  "node_modules/@radix-ui/react-focus-scope/dist/index.mjs"() {
    "use client";
    init_dist2();
    init_dist5();
    init_dist6();
    AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    EVENT_OPTIONS = { bubbles: false, cancelable: true };
    FOCUS_SCOPE_NAME = "FocusScope";
    FocusScope = React11.forwardRef((props, forwardedRef) => {
      const {
        loop = false,
        trapped = false,
        onMountAutoFocus: onMountAutoFocusProp,
        onUnmountAutoFocus: onUnmountAutoFocusProp,
        ...scopeProps
      } = props;
      const [container, setContainer] = React11.useState(null);
      const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
      const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
      const lastFocusedElementRef = React11.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
      const focusScope = React11.useRef({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      }).current;
      React11.useEffect(() => {
        if (trapped) {
          let handleFocusIn2 = function(event) {
            if (focusScope.paused || !container) return;
            const target = event.target;
            if (container.contains(target)) {
              lastFocusedElementRef.current = target;
            } else {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }, handleFocusOut2 = function(event) {
            if (focusScope.paused || !container) return;
            const relatedTarget = event.relatedTarget;
            if (relatedTarget === null) return;
            if (!container.contains(relatedTarget)) {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }, handleMutations2 = function(mutations) {
            const focusedElement = document.activeElement;
            if (focusedElement !== document.body) return;
            for (const mutation of mutations) {
              if (mutation.removedNodes.length > 0) focus(container);
            }
          };
          var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
          document.addEventListener("focusin", handleFocusIn2);
          document.addEventListener("focusout", handleFocusOut2);
          const mutationObserver = new MutationObserver(handleMutations2);
          if (container) mutationObserver.observe(container, { childList: true, subtree: true });
          return () => {
            document.removeEventListener("focusin", handleFocusIn2);
            document.removeEventListener("focusout", handleFocusOut2);
            mutationObserver.disconnect();
          };
        }
      }, [trapped, container, focusScope.paused]);
      React11.useEffect(() => {
        if (container) {
          focusScopesStack.add(focusScope);
          const previouslyFocusedElement = document.activeElement;
          const hasFocusedCandidate = container.contains(previouslyFocusedElement);
          if (!hasFocusedCandidate) {
            const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            container.dispatchEvent(mountEvent);
            if (!mountEvent.defaultPrevented) {
              focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
              if (document.activeElement === previouslyFocusedElement) {
                focus(container);
              }
            }
          }
          return () => {
            container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            setTimeout(() => {
              const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
              container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
              container.dispatchEvent(unmountEvent);
              if (!unmountEvent.defaultPrevented) {
                focus(previouslyFocusedElement ?? document.body, { select: true });
              }
              container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
              focusScopesStack.remove(focusScope);
            }, 0);
          };
        }
      }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
      const handleKeyDown = React11.useCallback(
        (event) => {
          if (!loop && !trapped) return;
          if (focusScope.paused) return;
          const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
          const focusedElement = document.activeElement;
          if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
              if (focusedElement === container2) event.preventDefault();
            } else {
              if (!event.shiftKey && focusedElement === last) {
                event.preventDefault();
                if (loop) focus(first, { select: true });
              } else if (event.shiftKey && focusedElement === first) {
                event.preventDefault();
                if (loop) focus(last, { select: true });
              }
            }
          }
        },
        [loop, trapped, focusScope.paused]
      );
      return /* @__PURE__ */ jsx5(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
    });
    FocusScope.displayName = FOCUS_SCOPE_NAME;
    focusScopesStack = createFocusScopesStack();
  }
});

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React12 from "react";
var useLayoutEffect2;
var init_dist11 = __esm({
  "node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"() {
    useLayoutEffect2 = Boolean(globalThis?.document) ? React12.useLayoutEffect : () => {
    };
  }
});

// node_modules/@radix-ui/react-id/dist/index.mjs
import * as React13 from "react";
function useId(deterministicId) {
  const [id, setId] = React13.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count2++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
var useReactId, count2;
var init_dist12 = __esm({
  "node_modules/@radix-ui/react-id/dist/index.mjs"() {
    init_dist11();
    useReactId = React13["useId".toString()] || (() => void 0);
    count2 = 0;
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
var sides, min, max, round, floor, createCoords, oppositeSideMap, oppositeAlignmentMap;
var init_floating_ui_utils = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"() {
    sides = ["top", "right", "bottom", "left"];
    min = Math.min;
    max = Math.max;
    round = Math.round;
    floor = Math.floor;
    createCoords = (v) => ({
      x: v,
      y: v
    });
    oppositeSideMap = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    oppositeAlignmentMap = {
      start: "end",
      end: "start"
    };
  }
});

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var computePosition, arrow, flip, hide, offset, shift, limitShift, size;
var init_floating_ui_core = __esm({
  "node_modules/@floating-ui/core/dist/floating-ui.core.mjs"() {
    init_floating_ui_utils();
    init_floating_ui_utils();
    computePosition = async (reference, floating, config) => {
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform: platform2
      } = config;
      const validMiddleware = middleware.filter(Boolean);
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
      let rects = await platform2.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x,
        y
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i2 = 0; i2 < validMiddleware.length; i2++) {
        const {
          name,
          fn
        } = validMiddleware[i2];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x,
          y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform: platform2,
          elements: {
            reference,
            floating
          }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
          ...middlewareData,
          [name]: {
            ...middlewareData[name],
            ...data
          }
        };
        if (reset && resetCount <= 50) {
          resetCount++;
          if (typeof reset === "object") {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform2.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x,
              y
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i2 = -1;
        }
      }
      return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    };
    arrow = (options) => ({
      name: "arrow",
      options,
      async fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          platform: platform2,
          elements,
          middlewareData
        } = state;
        const {
          element,
          padding = 0
        } = evaluate(options, state) || {};
        if (element == null) {
          return {};
        }
        const paddingObject = getPaddingObject(padding);
        const coords = {
          x,
          y
        };
        const axis = getAlignmentAxis(placement);
        const length = getAxisLength(axis);
        const arrowDimensions = await platform2.getDimensions(element);
        const isYAxis = axis === "y";
        const minProp = isYAxis ? "top" : "left";
        const maxProp = isYAxis ? "bottom" : "right";
        const clientProp = isYAxis ? "clientHeight" : "clientWidth";
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
        if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;
        const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        const minPadding = min(paddingObject[minProp], largestPossiblePadding);
        const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
        const min$1 = minPadding;
        const max2 = clientSize - arrowDimensions[length] - maxPadding;
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset4 = clamp(min$1, center, max2);
        const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
        return {
          [axis]: coords[axis] + alignmentOffset,
          data: {
            [axis]: offset4,
            centerOffset: center - offset4 - alignmentOffset,
            ...shouldAddOffset && {
              alignmentOffset
            }
          },
          reset: shouldAddOffset
        };
      }
    });
    flip = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "flip",
        options,
        async fn(state) {
          var _middlewareData$arrow, _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform: platform2,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = "bestFit",
            fallbackAxisSideDirection = "none",
            flipAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);
          if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          const side = getSide(placement);
          const initialSideAxis = getSideAxis(initialPlacement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
          if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements2 = [initialPlacement, ...fallbackPlacements];
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const sides2 = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];
          if (!overflows.every((side2) => side2 <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements2[nextIndex];
            if (nextPlacement) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$filter2;
                  const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d.placement);
                      return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                      // reading directions favoring greater width.
                      currentSideAxis === "y";
                    }
                    return true;
                  }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    };
    hide = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "hide",
        options,
        async fn(state) {
          const {
            rects
          } = state;
          const {
            strategy = "referenceHidden",
            ...detectOverflowOptions
          } = evaluate(options, state);
          switch (strategy) {
            case "referenceHidden": {
              const overflow = await detectOverflow(state, {
                ...detectOverflowOptions,
                elementContext: "reference"
              });
              const offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
            case "escaped": {
              const overflow = await detectOverflow(state, {
                ...detectOverflowOptions,
                altBoundary: true
              });
              const offsets = getSideOffsets(overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: offsets,
                  escaped: isAnySideFullyClipped(offsets)
                }
              };
            }
            default: {
              return {};
            }
          }
        }
      };
    };
    offset = function(options) {
      if (options === void 0) {
        options = 0;
      }
      return {
        name: "offset",
        options,
        async fn(state) {
          var _middlewareData$offse, _middlewareData$arrow;
          const {
            x,
            y,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options);
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x + diffCoords.x,
            y: y + diffCoords.y,
            data: {
              ...diffCoords,
              placement
            }
          };
        }
      };
    };
    shift = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "shift",
        options,
        async fn(state) {
          const {
            x,
            y,
            placement
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x2,
                  y: y2
                } = _ref;
                return {
                  x: x2,
                  y: y2
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const coords = {
            x,
            y
          };
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const crossAxis = getSideAxis(getSide(placement));
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === "y" ? "top" : "left";
            const maxSide = mainAxis === "y" ? "bottom" : "right";
            const min2 = mainAxisCoord + overflow[minSide];
            const max2 = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = clamp(min2, mainAxisCoord, max2);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === "y" ? "top" : "left";
            const maxSide = crossAxis === "y" ? "bottom" : "right";
            const min2 = crossAxisCoord + overflow[minSide];
            const max2 = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = clamp(min2, crossAxisCoord, max2);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x,
              y: limitedCoords.y - y,
              enabled: {
                [mainAxis]: checkMainAxis,
                [crossAxis]: checkCrossAxis
              }
            }
          };
        }
      };
    };
    limitShift = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        options,
        fn(state) {
          const {
            x,
            y,
            placement,
            rects,
            middlewareData
          } = state;
          const {
            offset: offset4 = 0,
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true
          } = evaluate(options, state);
          const coords = {
            x,
            y
          };
          const crossAxis = getSideAxis(placement);
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          const rawOffset = evaluate(offset4, state);
          const computedOffset = typeof rawOffset === "number" ? {
            mainAxis: rawOffset,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...rawOffset
          };
          if (checkMainAxis) {
            const len = mainAxis === "y" ? "height" : "width";
            const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
            const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
            if (mainAxisCoord < limitMin) {
              mainAxisCoord = limitMin;
            } else if (mainAxisCoord > limitMax) {
              mainAxisCoord = limitMax;
            }
          }
          if (checkCrossAxis) {
            var _middlewareData$offse, _middlewareData$offse2;
            const len = mainAxis === "y" ? "width" : "height";
            const isOriginSide = ["top", "left"].includes(getSide(placement));
            const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
            const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
            if (crossAxisCoord < limitMin) {
              crossAxisCoord = limitMin;
            } else if (crossAxisCoord > limitMax) {
              crossAxisCoord = limitMax;
            }
          }
          return {
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          };
        }
      };
    };
    size = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "size",
        options,
        async fn(state) {
          var _state$middlewareData, _state$middlewareData2;
          const {
            placement,
            rects,
            platform: platform2,
            elements
          } = state;
          const {
            apply = () => {
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const isYAxis = getSideAxis(placement) === "y";
          const {
            width,
            height
          } = rects.floating;
          let heightSide;
          let widthSide;
          if (side === "top" || side === "bottom") {
            heightSide = side;
            widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
          } else {
            widthSide = side;
            heightSide = alignment === "end" ? "top" : "bottom";
          }
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          const maximumClippingWidth = width - overflow.left - overflow.right;
          const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
          const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
          const noShift = !state.middlewareData.shift;
          let availableHeight = overflowAvailableHeight;
          let availableWidth = overflowAvailableWidth;
          if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
            availableWidth = maximumClippingWidth;
          }
          if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
            availableHeight = maximumClippingHeight;
          }
          if (noShift && !alignment) {
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            if (isYAxis) {
              availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
            } else {
              availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
          }
          await apply({
            ...state,
            availableWidth,
            availableHeight
          });
          const nextDimensions = await platform2.getDimensions(elements.floating);
          if (width !== nextDimensions.width || height !== nextDimensions.height) {
            return {
              reset: {
                rects: true
              }
            };
          }
          return {};
        }
      };
    };
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e2) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
var init_floating_ui_utils_dom = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"() {
  }
});

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e2) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var noOffsets, getElementRects, platform, offset2, shift2, flip2, size2, hide2, arrow2, limitShift2, computePosition2;
var init_floating_ui_dom = __esm({
  "node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"() {
    init_floating_ui_core();
    init_floating_ui_utils();
    init_floating_ui_utils_dom();
    noOffsets = /* @__PURE__ */ createCoords(0);
    getElementRects = async function(data) {
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      const floatingDimensions = await getDimensionsFn(data.floating);
      return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
          x: 0,
          y: 0,
          width: floatingDimensions.width,
          height: floatingDimensions.height
        }
      };
    };
    platform = {
      convertOffsetParentRelativeRectToViewportRelativeRect,
      getDocumentElement,
      getClippingRect,
      getOffsetParent,
      getElementRects,
      getClientRects,
      getDimensions,
      getScale,
      isElement,
      isRTL
    };
    offset2 = offset;
    shift2 = shift;
    flip2 = flip;
    size2 = size;
    hide2 = hide;
    arrow2 = arrow;
    limitShift2 = limitShift;
    computePosition2 = (reference, floating, options) => {
      const cache = /* @__PURE__ */ new Map();
      const mergedOptions = {
        platform,
        ...options
      };
      const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
      };
      return computePosition(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
      });
    };
  }
});

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React14 from "react";
import { useLayoutEffect as useLayoutEffect3, useEffect as useEffect6 } from "react";
import * as ReactDOM2 from "react-dom";
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i2;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a[i2], b[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React14.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React14.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React14.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React14.useState(null);
  const [_floating, _setFloating] = React14.useState(null);
  const setReference = React14.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React14.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React14.useRef(null);
  const floatingRef = React14.useRef(null);
  const dataRef = React14.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React14.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React14.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React14.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React14.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React14.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React14.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var index, arrow$1, offset3, shift3, limitShift3, flip3, size3, hide3, arrow3;
var init_floating_ui_react_dom = __esm({
  "node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"() {
    init_floating_ui_dom();
    init_floating_ui_dom();
    index = typeof document !== "undefined" ? useLayoutEffect3 : useEffect6;
    arrow$1 = (options) => {
      function isRef(value) {
        return {}.hasOwnProperty.call(value, "current");
      }
      return {
        name: "arrow",
        options,
        fn(state) {
          const {
            element,
            padding
          } = typeof options === "function" ? options(state) : options;
          if (element && isRef(element)) {
            if (element.current != null) {
              return arrow2({
                element: element.current,
                padding
              }).fn(state);
            }
            return {};
          }
          if (element) {
            return arrow2({
              element,
              padding
            }).fn(state);
          }
          return {};
        }
      };
    };
    offset3 = (options, deps) => ({
      ...offset2(options),
      options: [options, deps]
    });
    shift3 = (options, deps) => ({
      ...shift2(options),
      options: [options, deps]
    });
    limitShift3 = (options, deps) => ({
      ...limitShift2(options),
      options: [options, deps]
    });
    flip3 = (options, deps) => ({
      ...flip2(options),
      options: [options, deps]
    });
    size3 = (options, deps) => ({
      ...size2(options),
      options: [options, deps]
    });
    hide3 = (options, deps) => ({
      ...hide2(options),
      options: [options, deps]
    });
    arrow3 = (options, deps) => ({
      ...arrow$1(options),
      options: [options, deps]
    });
  }
});

// node_modules/@radix-ui/react-arrow/dist/index.mjs
import * as React15 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var NAME, Arrow, Root;
var init_dist13 = __esm({
  "node_modules/@radix-ui/react-arrow/dist/index.mjs"() {
    init_dist5();
    NAME = "Arrow";
    Arrow = React15.forwardRef((props, forwardedRef) => {
      const { children, width = 10, height = 5, ...arrowProps } = props;
      return /* @__PURE__ */ jsx6(
        Primitive.svg,
        {
          ...arrowProps,
          ref: forwardedRef,
          width,
          height,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: props.asChild ? children : /* @__PURE__ */ jsx6("polygon", { points: "0,0 30,0 15,10" })
        }
      );
    });
    Arrow.displayName = NAME;
    Root = Arrow;
  }
});

// node_modules/@radix-ui/react-use-size/dist/index.mjs
import * as React16 from "react";
function useSize(element) {
  const [size4, setSize] = React16.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}
var init_dist14 = __esm({
  "node_modules/@radix-ui/react-use-size/dist/index.mjs"() {
    init_dist11();
  }
});

// node_modules/@radix-ui/react-popper/dist/index.mjs
import * as React17 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
function isNotNull(value) {
  return value !== null;
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var POPPER_NAME, createPopperContext, createPopperScope, PopperProvider, usePopperContext, Popper, ANCHOR_NAME, PopperAnchor, CONTENT_NAME, PopperContentProvider, useContentContext, PopperContent, ARROW_NAME, OPPOSITE_SIDE, PopperArrow, transformOrigin, Root2, Anchor, Content, Arrow2;
var init_dist15 = __esm({
  "node_modules/@radix-ui/react-popper/dist/index.mjs"() {
    "use client";
    init_floating_ui_react_dom();
    init_dist13();
    init_dist2();
    init_dist3();
    init_dist5();
    init_dist6();
    init_dist11();
    init_dist14();
    POPPER_NAME = "Popper";
    [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
    [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
    Popper = (props) => {
      const { __scopePopper, children } = props;
      const [anchor, setAnchor] = React17.useState(null);
      return /* @__PURE__ */ jsx7(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
    };
    Popper.displayName = POPPER_NAME;
    ANCHOR_NAME = "PopperAnchor";
    PopperAnchor = React17.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopper, virtualRef, ...anchorProps } = props;
        const context = usePopperContext(ANCHOR_NAME, __scopePopper);
        const ref = React17.useRef(null);
        const composedRefs = useComposedRefs(forwardedRef, ref);
        React17.useEffect(() => {
          context.onAnchorChange(virtualRef?.current || ref.current);
        });
        return virtualRef ? null : /* @__PURE__ */ jsx7(Primitive.div, { ...anchorProps, ref: composedRefs });
      }
    );
    PopperAnchor.displayName = ANCHOR_NAME;
    CONTENT_NAME = "PopperContent";
    [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
    PopperContent = React17.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopePopper,
          side = "bottom",
          sideOffset = 0,
          align = "center",
          alignOffset = 0,
          arrowPadding = 0,
          avoidCollisions = true,
          collisionBoundary = [],
          collisionPadding: collisionPaddingProp = 0,
          sticky = "partial",
          hideWhenDetached = false,
          updatePositionStrategy = "optimized",
          onPlaced,
          ...contentProps
        } = props;
        const context = usePopperContext(CONTENT_NAME, __scopePopper);
        const [content, setContent] = React17.useState(null);
        const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
        const [arrow4, setArrow] = React17.useState(null);
        const arrowSize = useSize(arrow4);
        const arrowWidth = arrowSize?.width ?? 0;
        const arrowHeight = arrowSize?.height ?? 0;
        const desiredPlacement = side + (align !== "center" ? "-" + align : "");
        const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
        const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
        const hasExplicitBoundaries = boundary.length > 0;
        const detectOverflowOptions = {
          padding: collisionPadding,
          boundary: boundary.filter(isNotNull),
          // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
          altBoundary: hasExplicitBoundaries
        };
        const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
          // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
          strategy: "fixed",
          placement: desiredPlacement,
          whileElementsMounted: (...args) => {
            const cleanup = autoUpdate(...args, {
              animationFrame: updatePositionStrategy === "always"
            });
            return cleanup;
          },
          elements: {
            reference: context.anchor
          },
          middleware: [
            offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
            avoidCollisions && shift3({
              mainAxis: true,
              crossAxis: false,
              limiter: sticky === "partial" ? limitShift3() : void 0,
              ...detectOverflowOptions
            }),
            avoidCollisions && flip3({ ...detectOverflowOptions }),
            size3({
              ...detectOverflowOptions,
              apply: ({ elements, rects, availableWidth, availableHeight }) => {
                const { width: anchorWidth, height: anchorHeight } = rects.reference;
                const contentStyle = elements.floating.style;
                contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
                contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
                contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
                contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
              }
            }),
            arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
            transformOrigin({ arrowWidth, arrowHeight }),
            hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
          ]
        });
        const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
        const handlePlaced = useCallbackRef(onPlaced);
        useLayoutEffect2(() => {
          if (isPositioned) {
            handlePlaced?.();
          }
        }, [isPositioned, handlePlaced]);
        const arrowX = middlewareData.arrow?.x;
        const arrowY = middlewareData.arrow?.y;
        const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
        const [contentZIndex, setContentZIndex] = React17.useState();
        useLayoutEffect2(() => {
          if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
        }, [content]);
        return /* @__PURE__ */ jsx7(
          "div",
          {
            ref: refs.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...floatingStyles,
              transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
              // keep off the page when measuring
              minWidth: "max-content",
              zIndex: contentZIndex,
              ["--radix-popper-transform-origin"]: [
                middlewareData.transformOrigin?.x,
                middlewareData.transformOrigin?.y
              ].join(" "),
              // hide the content if using the hide middleware and should be hidden
              // set visibility to hidden and disable pointer events so the UI behaves
              // as if the PopperContent isn't there at all
              ...middlewareData.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: props.dir,
            children: /* @__PURE__ */ jsx7(
              PopperContentProvider,
              {
                scope: __scopePopper,
                placedSide,
                onArrowChange: setArrow,
                arrowX,
                arrowY,
                shouldHideArrow: cannotCenterArrow,
                children: /* @__PURE__ */ jsx7(
                  Primitive.div,
                  {
                    "data-side": placedSide,
                    "data-align": placedAlign,
                    ...contentProps,
                    ref: composedRefs,
                    style: {
                      ...contentProps.style,
                      // if the PopperContent hasn't been placed yet (not all measurements done)
                      // we prevent animations so that users's animation don't kick in too early referring wrong sides
                      animation: !isPositioned ? "none" : void 0
                    }
                  }
                )
              }
            )
          }
        );
      }
    );
    PopperContent.displayName = CONTENT_NAME;
    ARROW_NAME = "PopperArrow";
    OPPOSITE_SIDE = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    };
    PopperArrow = React17.forwardRef(function PopperArrow2(props, forwardedRef) {
      const { __scopePopper, ...arrowProps } = props;
      const contentContext = useContentContext(ARROW_NAME, __scopePopper);
      const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
      return (
        // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
        // doesn't report size as we'd expect on SVG elements.
        // it reports their bounding box which is effectively the largest path inside the SVG.
        /* @__PURE__ */ jsx7(
          "span",
          {
            ref: contentContext.onArrowChange,
            style: {
              position: "absolute",
              left: contentContext.arrowX,
              top: contentContext.arrowY,
              [baseSide]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              }[contentContext.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: `rotate(180deg)`,
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              }[contentContext.placedSide],
              visibility: contentContext.shouldHideArrow ? "hidden" : void 0
            },
            children: /* @__PURE__ */ jsx7(
              Root,
              {
                ...arrowProps,
                ref: forwardedRef,
                style: {
                  ...arrowProps.style,
                  // ensures the element can be measured correctly (mostly for if SVG)
                  display: "block"
                }
              }
            )
          }
        )
      );
    });
    PopperArrow.displayName = ARROW_NAME;
    transformOrigin = (options) => ({
      name: "transformOrigin",
      options,
      fn(data) {
        const { placement, rects, middlewareData } = data;
        const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
        const isArrowHidden = cannotCenterArrow;
        const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
        const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
        const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
        const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
        const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
        const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
        let x = "";
        let y = "";
        if (placedSide === "bottom") {
          x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
          y = `${-arrowHeight}px`;
        } else if (placedSide === "top") {
          x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
          y = `${rects.floating.height + arrowHeight}px`;
        } else if (placedSide === "right") {
          x = `${-arrowHeight}px`;
          y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
        } else if (placedSide === "left") {
          x = `${rects.floating.width + arrowHeight}px`;
          y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
        }
        return { data: { x, y } };
      }
    });
    Root2 = Popper;
    Anchor = PopperAnchor;
    Content = PopperContent;
    Arrow2 = PopperArrow;
  }
});

// node_modules/@radix-ui/react-portal/dist/index.mjs
import * as React18 from "react";
import ReactDOM3 from "react-dom";
import { jsx as jsx8 } from "react/jsx-runtime";
var PORTAL_NAME, Portal;
var init_dist16 = __esm({
  "node_modules/@radix-ui/react-portal/dist/index.mjs"() {
    "use client";
    init_dist5();
    init_dist11();
    PORTAL_NAME = "Portal";
    Portal = React18.forwardRef((props, forwardedRef) => {
      const { container: containerProp, ...portalProps } = props;
      const [mounted, setMounted] = React18.useState(false);
      useLayoutEffect2(() => setMounted(true), []);
      const container = containerProp || mounted && globalThis?.document?.body;
      return container ? ReactDOM3.createPortal(/* @__PURE__ */ jsx8(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
    });
    Portal.displayName = PORTAL_NAME;
  }
});

// node_modules/@radix-ui/react-presence/dist/index.mjs
import * as React22 from "react";
import * as React19 from "react";
function useStateMachine(initialState, machine) {
  return React19.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
function usePresence(present) {
  const [node, setNode] = React22.useState();
  const stylesRef = React22.useRef({});
  const prevPresentRef = React22.useRef(present);
  const prevAnimationNameRef = React22.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React22.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React22.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Presence;
var init_dist17 = __esm({
  "node_modules/@radix-ui/react-presence/dist/index.mjs"() {
    "use client";
    init_dist2();
    init_dist11();
    Presence = (props) => {
      const { present, children } = props;
      const presence = usePresence(present);
      const child = typeof children === "function" ? children({ present: presence.isPresent }) : React22.Children.only(children);
      const ref = useComposedRefs(presence.ref, getElementRef2(child));
      const forceMount = typeof children === "function";
      return forceMount || presence.isPresent ? React22.cloneElement(child, { ref }) : null;
    };
    Presence.displayName = "Presence";
  }
});

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React20 from "react";
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);
  const setValue = React20.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = React20.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = React20.useRef(value);
  const handleChange = useCallbackRef(onChange);
  React20.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}
var init_dist18 = __esm({
  "node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"() {
    init_dist6();
  }
});

// node_modules/@radix-ui/react-popover/dist/index.mjs
import * as React21 from "react";
import { hideOthers } from "aria-hidden";
import { RemoveScroll } from "react-remove-scroll";
import { jsx as jsx9 } from "react/jsx-runtime";
function getState(open) {
  return open ? "open" : "closed";
}
var POPOVER_NAME, createPopoverContext, createPopoverScope, usePopperScope, PopoverProvider, usePopoverContext, Popover, ANCHOR_NAME2, PopoverAnchor, TRIGGER_NAME, PopoverTrigger, PORTAL_NAME2, PortalProvider, usePortalContext, PopoverPortal, CONTENT_NAME2, PopoverContent, PopoverContentModal, PopoverContentNonModal, PopoverContentImpl, CLOSE_NAME, PopoverClose, ARROW_NAME2, PopoverArrow, Root22, Trigger, Portal2, Content2;
var init_dist19 = __esm({
  "node_modules/@radix-ui/react-popover/dist/index.mjs"() {
    "use client";
    init_dist();
    init_dist2();
    init_dist3();
    init_dist8();
    init_dist9();
    init_dist10();
    init_dist12();
    init_dist15();
    init_dist15();
    init_dist16();
    init_dist17();
    init_dist5();
    init_dist4();
    init_dist18();
    POPOVER_NAME = "Popover";
    [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [
      createPopperScope
    ]);
    usePopperScope = createPopperScope();
    [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
    Popover = (props) => {
      const {
        __scopePopover,
        children,
        open: openProp,
        defaultOpen,
        onOpenChange,
        modal = false
      } = props;
      const popperScope = usePopperScope(__scopePopover);
      const triggerRef = React21.useRef(null);
      const [hasCustomAnchor, setHasCustomAnchor] = React21.useState(false);
      const [open = false, setOpen] = useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      });
      return /* @__PURE__ */ jsx9(Root2, { ...popperScope, children: /* @__PURE__ */ jsx9(
        PopoverProvider,
        {
          scope: __scopePopover,
          contentId: useId(),
          triggerRef,
          open,
          onOpenChange: setOpen,
          onOpenToggle: React21.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
          hasCustomAnchor,
          onCustomAnchorAdd: React21.useCallback(() => setHasCustomAnchor(true), []),
          onCustomAnchorRemove: React21.useCallback(() => setHasCustomAnchor(false), []),
          modal,
          children
        }
      ) });
    };
    Popover.displayName = POPOVER_NAME;
    ANCHOR_NAME2 = "PopoverAnchor";
    PopoverAnchor = React21.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...anchorProps } = props;
        const context = usePopoverContext(ANCHOR_NAME2, __scopePopover);
        const popperScope = usePopperScope(__scopePopover);
        const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
        React21.useEffect(() => {
          onCustomAnchorAdd();
          return () => onCustomAnchorRemove();
        }, [onCustomAnchorAdd, onCustomAnchorRemove]);
        return /* @__PURE__ */ jsx9(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
      }
    );
    PopoverAnchor.displayName = ANCHOR_NAME2;
    TRIGGER_NAME = "PopoverTrigger";
    PopoverTrigger = React21.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...triggerProps } = props;
        const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
        const popperScope = usePopperScope(__scopePopover);
        const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
        const trigger = /* @__PURE__ */ jsx9(
          Primitive.button,
          {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": context.open,
            "aria-controls": context.contentId,
            "data-state": getState(context.open),
            ...triggerProps,
            ref: composedTriggerRef,
            onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
          }
        );
        return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsx9(Anchor, { asChild: true, ...popperScope, children: trigger });
      }
    );
    PopoverTrigger.displayName = TRIGGER_NAME;
    PORTAL_NAME2 = "PopoverPortal";
    [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME2, {
      forceMount: void 0
    });
    PopoverPortal = (props) => {
      const { __scopePopover, forceMount, children, container } = props;
      const context = usePopoverContext(PORTAL_NAME2, __scopePopover);
      return /* @__PURE__ */ jsx9(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsx9(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx9(Portal, { asChild: true, container, children }) }) });
    };
    PopoverPortal.displayName = PORTAL_NAME2;
    CONTENT_NAME2 = "PopoverContent";
    PopoverContent = React21.forwardRef(
      (props, forwardedRef) => {
        const portalContext = usePortalContext(CONTENT_NAME2, props.__scopePopover);
        const { forceMount = portalContext.forceMount, ...contentProps } = props;
        const context = usePopoverContext(CONTENT_NAME2, props.__scopePopover);
        return /* @__PURE__ */ jsx9(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsx9(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx9(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
      }
    );
    PopoverContent.displayName = CONTENT_NAME2;
    PopoverContentModal = React21.forwardRef(
      (props, forwardedRef) => {
        const context = usePopoverContext(CONTENT_NAME2, props.__scopePopover);
        const contentRef = React21.useRef(null);
        const composedRefs = useComposedRefs(forwardedRef, contentRef);
        const isRightClickOutsideRef = React21.useRef(false);
        React21.useEffect(() => {
          const content = contentRef.current;
          if (content) return hideOthers(content);
        }, []);
        return /* @__PURE__ */ jsx9(RemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsx9(
          PopoverContentImpl,
          {
            ...props,
            ref: composedRefs,
            trapFocus: context.open,
            disableOutsidePointerEvents: true,
            onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
              event.preventDefault();
              if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
            }),
            onPointerDownOutside: composeEventHandlers(
              props.onPointerDownOutside,
              (event) => {
                const originalEvent = event.detail.originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                isRightClickOutsideRef.current = isRightClick;
              },
              { checkForDefaultPrevented: false }
            ),
            onFocusOutside: composeEventHandlers(
              props.onFocusOutside,
              (event) => event.preventDefault(),
              { checkForDefaultPrevented: false }
            )
          }
        ) });
      }
    );
    PopoverContentNonModal = React21.forwardRef(
      (props, forwardedRef) => {
        const context = usePopoverContext(CONTENT_NAME2, props.__scopePopover);
        const hasInteractedOutsideRef = React21.useRef(false);
        const hasPointerDownOutsideRef = React21.useRef(false);
        return /* @__PURE__ */ jsx9(
          PopoverContentImpl,
          {
            ...props,
            ref: forwardedRef,
            trapFocus: false,
            disableOutsidePointerEvents: false,
            onCloseAutoFocus: (event) => {
              props.onCloseAutoFocus?.(event);
              if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
              }
              hasInteractedOutsideRef.current = false;
              hasPointerDownOutsideRef.current = false;
            },
            onInteractOutside: (event) => {
              props.onInteractOutside?.(event);
              if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                  hasPointerDownOutsideRef.current = true;
                }
              }
              const target = event.target;
              const targetIsTrigger = context.triggerRef.current?.contains(target);
              if (targetIsTrigger) event.preventDefault();
              if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
              }
            }
          }
        );
      }
    );
    PopoverContentImpl = React21.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopePopover,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          ...contentProps
        } = props;
        const context = usePopoverContext(CONTENT_NAME2, __scopePopover);
        const popperScope = usePopperScope(__scopePopover);
        useFocusGuards();
        return /* @__PURE__ */ jsx9(
          FocusScope,
          {
            asChild: true,
            loop: true,
            trapped: trapFocus,
            onMountAutoFocus: onOpenAutoFocus,
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ jsx9(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onInteractOutside,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onDismiss: () => context.onOpenChange(false),
                children: /* @__PURE__ */ jsx9(
                  Content,
                  {
                    "data-state": getState(context.open),
                    role: "dialog",
                    id: context.contentId,
                    ...popperScope,
                    ...contentProps,
                    ref: forwardedRef,
                    style: {
                      ...contentProps.style,
                      // re-namespace exposed content custom properties
                      ...{
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                      }
                    }
                  }
                )
              }
            )
          }
        );
      }
    );
    CLOSE_NAME = "PopoverClose";
    PopoverClose = React21.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...closeProps } = props;
        const context = usePopoverContext(CLOSE_NAME, __scopePopover);
        return /* @__PURE__ */ jsx9(
          Primitive.button,
          {
            type: "button",
            ...closeProps,
            ref: forwardedRef,
            onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
          }
        );
      }
    );
    PopoverClose.displayName = CLOSE_NAME;
    ARROW_NAME2 = "PopoverArrow";
    PopoverArrow = React21.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...arrowProps } = props;
        const popperScope = usePopperScope(__scopePopover);
        return /* @__PURE__ */ jsx9(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
      }
    );
    PopoverArrow.displayName = ARROW_NAME2;
    Root22 = Popover;
    Trigger = PopoverTrigger;
    Portal2 = PopoverPortal;
    Content2 = PopoverContent;
  }
});

// src/components/ui/popover.tsx
import * as React23 from "react";
var Popover2, PopoverTrigger2, PopoverContent2;
var init_popover = __esm({
  "src/components/ui/popover.tsx"() {
    "use strict";
    "use client";
    init_dist19();
    init_utils();
    Popover2 = Root22;
    PopoverTrigger2 = Trigger;
    PopoverContent2 = React23.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React23.createElement(Portal2, null, /* @__PURE__ */ React23.createElement(
      Content2,
      {
        ref,
        align,
        sideOffset,
        className: cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        ...props
      }
    )));
    PopoverContent2.displayName = Content2.displayName;
  }
});

// src/registry/example/input/phone-input.tsx
var phone_input_exports = {};
__export(phone_input_exports, {
  PhoneInputExample: () => PhoneInputExample
});
import { Check, ChevronDown } from "lucide-react";
import { useEffect as useEffect11, useState as useState12 } from "react";
var countries, PhoneInputExample, PhoneInput, BorderedPhoneInput, UnderlinePhoneInput;
var init_phone_input = __esm({
  "src/registry/example/input/phone-input.tsx"() {
    "use strict";
    "use client";
    init_input();
    init_popover();
    countries = [
      { name: "Hong Kong", flag: "\u{1F1ED}\u{1F1F0}", dialCode: "+852" },
      { name: "United States", flag: "\u{1F1FA}\u{1F1F8}", dialCode: "+1" },
      { name: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", dialCode: "+44" },
      { name: "Australia", flag: "\u{1F1E6}\u{1F1FA}", dialCode: "+61" },
      { name: "Germany", flag: "\u{1F1E9}\u{1F1EA}", dialCode: "+49" },
      { name: "France", flag: "\u{1F1EB}\u{1F1F7}", dialCode: "+33" },
      { name: "Canada", flag: "\u{1F1E8}\u{1F1E6}", dialCode: "+1" },
      { name: "China", flag: "\u{1F1E8}\u{1F1F3}", dialCode: "+86" },
      { name: "Japan", flag: "\u{1F1EF}\u{1F1F5}", dialCode: "+81" },
      { name: "India", flag: "\u{1F1EE}\u{1F1F3}", dialCode: "+91" },
      { name: "Brazil", flag: "\u{1F1E7}\u{1F1F7}", dialCode: "+55" },
      { name: "South Korea", flag: "\u{1F1F0}\u{1F1F7}", dialCode: "+82" },
      { name: "Russia", flag: "\u{1F1F7}\u{1F1FA}", dialCode: "+7" },
      { name: "Mexico", flag: "\u{1F1F2}\u{1F1FD}", dialCode: "+52" },
      { name: "Spain", flag: "\u{1F1EA}\u{1F1F8}", dialCode: "+34" },
      { name: "Italy", flag: "\u{1F1EE}\u{1F1F9}", dialCode: "+39" },
      { name: "Singapore", flag: "\u{1F1F8}\u{1F1EC}", dialCode: "+65" },
      { name: "Netherlands", flag: "\u{1F1F3}\u{1F1F1}", dialCode: "+31" },
      { name: "Sweden", flag: "\u{1F1F8}\u{1F1EA}", dialCode: "+46" },
      { name: "Switzerland", flag: "\u{1F1E8}\u{1F1ED}", dialCode: "+41" }
    ];
    PhoneInputExample = () => {
      return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-4 w-full max-w-sm" }, /* @__PURE__ */ React.createElement(PhoneInput, null), /* @__PURE__ */ React.createElement(BorderedPhoneInput, null), /* @__PURE__ */ React.createElement(UnderlinePhoneInput, null));
    };
    PhoneInput = ({ value, onChange }) => {
      const [country, setCountry] = useState12(countries[0]);
      const [phoneNumber, setPhoneNumber] = useState12("");
      const [isOpen, setIsOpen] = useState12(false);
      useEffect11(() => {
        if (value) {
          const match = value.match(/^\+\d{1,3}\s\d{7,14}$/);
          if (match) {
            const [dialCode, phoneNumber2] = match[0].split(" ");
            setCountry(countries.find((c) => c.dialCode === dialCode) || countries[0]);
            setPhoneNumber(phoneNumber2);
          }
        }
      }, []);
      const handleCountrySelect = (country2) => {
        setCountry(country2);
        setIsOpen(false);
        onChange?.(`${country2.dialCode} ${phoneNumber}`);
      };
      const handlePhoneNumberChange = (e2) => {
        const newNumber = e2.target.value;
        if (newNumber !== "" && !/^[0-9]+$/.test(newNumber)) {
          return;
        }
        setPhoneNumber(newNumber);
        onChange?.(`${country.dialCode} ${newNumber}`);
      };
      return /* @__PURE__ */ React.createElement(
        Input,
        {
          value: phoneNumber,
          onChange: handlePhoneNumberChange,
          placeholder: "Enter phone number",
          startContent: /* @__PURE__ */ React.createElement("div", { className: "h-full flex items-center" }, /* @__PURE__ */ React.createElement(Popover2, { open: isOpen, onOpenChange: setIsOpen }, /* @__PURE__ */ React.createElement(PopoverTrigger2, { asChild: true }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "flex items-center justify-between gap-1 text-sm cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, country.flag), /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, country.dialCode)), /* @__PURE__ */ React.createElement(ChevronDown, { className: "w-4 h-4 ml-1 text-muted-foreground" }))), /* @__PURE__ */ React.createElement(
            PopoverContent2,
            {
              className: "w-64 p-0",
              align: "start",
              side: "bottom",
              sideOffset: 16,
              alignOffset: -12,
              avoidCollisions: true
            },
            /* @__PURE__ */ React.createElement("div", { className: "max-h-[300px] overflow-y-auto" }, countries.map((item2, index2) => /* @__PURE__ */ React.createElement(
              "button",
              {
                key: index2,
                type: "button",
                className: "flex items-center w-full px-4 py-2 text-sm hover:bg-muted",
                onClick: () => handleCountrySelect(item2)
              },
              /* @__PURE__ */ React.createElement("span", { className: "mr-2 text-base" }, item2.flag),
              /* @__PURE__ */ React.createElement("span", { className: "flex-1 text-left" }, item2.name),
              /* @__PURE__ */ React.createElement("span", { className: "text-muted-foreground" }, item2.dialCode),
              item2.dialCode === country.dialCode && /* @__PURE__ */ React.createElement(Check, { className: "w-4 h-4 ml-2 text-primary" })
            )))
          )), /* @__PURE__ */ React.createElement("div", { className: "h-full border-r py-1 pl-1.5" }))
        }
      );
    };
    BorderedPhoneInput = ({ value, onChange }) => {
      const [country, setCountry] = useState12(countries[0]);
      const [phoneNumber, setPhoneNumber] = useState12("");
      const [isOpen, setIsOpen] = useState12(false);
      useEffect11(() => {
        if (value) {
          const match = value.match(/^\+\d{1,3}\s\d{7,14}$/);
          if (match) {
            const [dialCode, phoneNumber2] = match[0].split(" ");
            setCountry(countries.find((c) => c.dialCode === dialCode) || countries[0]);
            setPhoneNumber(phoneNumber2);
          }
        }
      }, []);
      const handleCountrySelect = (country2) => {
        setCountry(country2);
        setIsOpen(false);
        onChange?.(`${country2.dialCode} ${phoneNumber}`);
      };
      const handlePhoneNumberChange = (e2) => {
        const newNumber = e2.target.value;
        if (newNumber !== "" && !/^[0-9]+$/.test(newNumber)) {
          return;
        }
        setPhoneNumber(newNumber);
        onChange?.(`${country.dialCode} ${newNumber}`);
      };
      return /* @__PURE__ */ React.createElement(
        Input,
        {
          variant: "bordered",
          value: phoneNumber,
          onChange: handlePhoneNumberChange,
          placeholder: "Enter phone number",
          startContent: /* @__PURE__ */ React.createElement("div", { className: "h-full flex items-center" }, /* @__PURE__ */ React.createElement(Popover2, { open: isOpen, onOpenChange: setIsOpen }, /* @__PURE__ */ React.createElement(PopoverTrigger2, { asChild: true }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "flex items-center justify-between gap-1 text-sm cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, country.flag), /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, country.dialCode)), /* @__PURE__ */ React.createElement(ChevronDown, { className: "w-4 h-4 ml-1 text-muted-foreground" }))), /* @__PURE__ */ React.createElement(
            PopoverContent2,
            {
              className: "w-64 p-0",
              align: "start",
              side: "bottom",
              sideOffset: 16,
              alignOffset: -12,
              avoidCollisions: true
            },
            /* @__PURE__ */ React.createElement("div", { className: "max-h-[300px] overflow-y-auto" }, countries.map((item2, index2) => /* @__PURE__ */ React.createElement(
              "button",
              {
                key: index2,
                type: "button",
                className: "flex items-center w-full px-4 py-2 text-sm hover:bg-muted",
                onClick: () => handleCountrySelect(item2)
              },
              /* @__PURE__ */ React.createElement("span", { className: "mr-2 text-base" }, item2.flag),
              /* @__PURE__ */ React.createElement("span", { className: "flex-1 text-left" }, item2.name),
              /* @__PURE__ */ React.createElement("span", { className: "text-muted-foreground" }, item2.dialCode),
              item2.dialCode === country.dialCode && /* @__PURE__ */ React.createElement(Check, { className: "w-4 h-4 ml-2 text-primary" })
            )))
          )), /* @__PURE__ */ React.createElement("div", { className: "h-full border-r py-1 pl-1.5" }))
        }
      );
    };
    UnderlinePhoneInput = ({ value, onChange }) => {
      const [country, setCountry] = useState12(countries[0]);
      const [phoneNumber, setPhoneNumber] = useState12("");
      const [isOpen, setIsOpen] = useState12(false);
      useEffect11(() => {
        if (value) {
          const match = value.match(/^\+\d{1,3}\s\d{7,14}$/);
          if (match) {
            const [dialCode, phoneNumber2] = match[0].split(" ");
            setCountry(countries.find((c) => c.dialCode === dialCode) || countries[0]);
            setPhoneNumber(phoneNumber2);
          }
        }
      }, []);
      const handleCountrySelect = (country2) => {
        setCountry(country2);
        setIsOpen(false);
        onChange?.(`${country2.dialCode} ${phoneNumber}`);
      };
      const handlePhoneNumberChange = (e2) => {
        const newNumber = e2.target.value;
        if (newNumber !== "" && !/^[0-9]+$/.test(newNumber)) {
          return;
        }
        setPhoneNumber(newNumber);
        onChange?.(`${country.dialCode} ${newNumber}`);
      };
      return /* @__PURE__ */ React.createElement(
        Input,
        {
          variant: "underline",
          value: phoneNumber,
          onChange: handlePhoneNumberChange,
          placeholder: "Enter phone number",
          startContent: /* @__PURE__ */ React.createElement("div", { className: "h-full flex items-center" }, /* @__PURE__ */ React.createElement(Popover2, { open: isOpen, onOpenChange: setIsOpen }, /* @__PURE__ */ React.createElement(PopoverTrigger2, { asChild: true }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "flex items-center justify-between gap-1 text-sm cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, country.flag), /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, country.dialCode)), /* @__PURE__ */ React.createElement(ChevronDown, { className: "w-4 h-4 ml-1 text-muted-foreground" }))), /* @__PURE__ */ React.createElement(
            PopoverContent2,
            {
              className: "w-64 p-0",
              align: "start",
              side: "bottom",
              sideOffset: 16,
              alignOffset: -4,
              avoidCollisions: true
            },
            /* @__PURE__ */ React.createElement("div", { className: "max-h-[300px] overflow-y-auto" }, countries.map((item2, index2) => /* @__PURE__ */ React.createElement(
              "button",
              {
                key: index2,
                type: "button",
                className: "flex items-center w-full px-4 py-2 text-sm hover:bg-muted",
                onClick: () => handleCountrySelect(item2)
              },
              /* @__PURE__ */ React.createElement("span", { className: "mr-2 text-base" }, item2.flag),
              /* @__PURE__ */ React.createElement("span", { className: "flex-1 text-left" }, item2.name),
              /* @__PURE__ */ React.createElement("span", { className: "text-muted-foreground" }, item2.dialCode),
              item2.dialCode === country.dialCode && /* @__PURE__ */ React.createElement(Check, { className: "w-4 h-4 ml-2 text-primary" })
            )))
          )), /* @__PURE__ */ React.createElement("div", { className: "h-full border-r py-1 pl-1.5" }))
        }
      );
    };
  }
});

// node_modules/@hookform/resolvers/dist/resolvers.mjs
import { get as e, set as t } from "react-hook-form";
function n(e2) {
  return e2.replace(/\]|\[/g, "");
}
var r, o, s, i;
var init_resolvers = __esm({
  "node_modules/@hookform/resolvers/dist/resolvers.mjs"() {
    r = (t2, r2, o3) => {
      if (t2 && "reportValidity" in t2) {
        const s3 = e(o3, r2);
        t2.setCustomValidity(s3 && s3.message || ""), t2.reportValidity();
      }
    };
    o = (e2, t2) => {
      for (const o3 in t2.fields) {
        const s3 = t2.fields[o3];
        s3 && s3.ref && "reportValidity" in s3.ref ? r(s3.ref, o3, e2) : s3 && s3.refs && s3.refs.forEach((t3) => r(t3, o3, e2));
      }
    };
    s = (r2, s3) => {
      s3.shouldUseNativeValidation && o(r2, s3);
      const n3 = {};
      for (const o3 in r2) {
        const f = e(s3.fields, o3), c = Object.assign(r2[o3] || {}, { ref: f && f.ref });
        if (i(s3.names || Object.keys(r2), o3)) {
          const r3 = Object.assign({}, e(n3, o3));
          t(r3, "root", c), t(n3, o3, r3);
        } else t(n3, o3, c);
      }
      return n3;
    };
    i = (e2, t2) => {
      const r2 = n(t2);
      return e2.some((e3) => n(e3).match(`^${r2}\\.\\d+`));
    };
  }
});

// node_modules/@hookform/resolvers/zod/dist/zod.mjs
import { appendErrors as o2 } from "react-hook-form";
function n2(r2, e2) {
  for (var n3 = {}; r2.length; ) {
    var s3 = r2[0], t2 = s3.code, i2 = s3.message, a = s3.path.join(".");
    if (!n3[a]) if ("unionErrors" in s3) {
      var u2 = s3.unionErrors[0].errors[0];
      n3[a] = { message: u2.message, type: u2.code };
    } else n3[a] = { message: i2, type: t2 };
    if ("unionErrors" in s3 && s3.unionErrors.forEach(function(e3) {
      return e3.errors.forEach(function(e4) {
        return r2.push(e4);
      });
    }), e2) {
      var c = n3[a].types, f = c && c[s3.code];
      n3[a] = o2(a, e2, n3, t2, f ? [].concat(f, s3.message) : s3.message);
    }
    r2.shift();
  }
  return n3;
}
function s2(o3, s3, t2) {
  return void 0 === t2 && (t2 = {}), function(i2, a, u2) {
    try {
      return Promise.resolve(function(e2, n3) {
        try {
          var a2 = Promise.resolve(o3["sync" === t2.mode ? "parse" : "parseAsync"](i2, s3)).then(function(e3) {
            return u2.shouldUseNativeValidation && o({}, u2), { errors: {}, values: t2.raw ? Object.assign({}, i2) : e3 };
          });
        } catch (r2) {
          return n3(r2);
        }
        return a2 && a2.then ? a2.then(void 0, n3) : a2;
      }(0, function(r2) {
        if (function(r3) {
          return Array.isArray(null == r3 ? void 0 : r3.errors);
        }(r2)) return { values: {}, errors: s(n2(r2.errors, !u2.shouldUseNativeValidation && "all" === u2.criteriaMode), u2) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
}
var init_zod = __esm({
  "node_modules/@hookform/resolvers/zod/dist/zod.mjs"() {
    init_resolvers();
  }
});

// src/components/ui/button.tsx
import * as React24 from "react";
import { cva as cva2 } from "class-variance-authority";
var buttonVariants, Button;
var init_button = __esm({
  "src/components/ui/button.tsx"() {
    "use strict";
    init_dist4();
    init_utils();
    buttonVariants = cva2(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "size-9"
          }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        }
      }
    );
    Button = React24.forwardRef(
      ({ className, variant, size: size4, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return /* @__PURE__ */ React24.createElement(
          Comp,
          {
            className: cn(buttonVariants({ variant, size: size4, className })),
            ref,
            ...props
          }
        );
      }
    );
    Button.displayName = "Button";
  }
});

// node_modules/@radix-ui/react-label/dist/index.mjs
import * as React25 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var NAME2, Label, Root3;
var init_dist20 = __esm({
  "node_modules/@radix-ui/react-label/dist/index.mjs"() {
    "use client";
    init_dist5();
    NAME2 = "Label";
    Label = React25.forwardRef((props, forwardedRef) => {
      return /* @__PURE__ */ jsx10(
        Primitive.label,
        {
          ...props,
          ref: forwardedRef,
          onMouseDown: (event) => {
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
          }
        }
      );
    });
    Label.displayName = NAME2;
    Root3 = Label;
  }
});

// src/components/ui/label.tsx
import * as React26 from "react";
import { cva as cva3 } from "class-variance-authority";
var labelVariants, Label2;
var init_label = __esm({
  "src/components/ui/label.tsx"() {
    "use strict";
    "use client";
    init_dist20();
    init_utils();
    labelVariants = cva3(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    );
    Label2 = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React26.createElement(
      Root3,
      {
        ref,
        className: cn(labelVariants(), className),
        ...props
      }
    ));
    Label2.displayName = Root3.displayName;
  }
});

// src/components/ui/form.tsx
import * as React27 from "react";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";
var Form, FormFieldContext, FormField, useFormField, FormItemContext, FormItem, FormLabel, FormControl, FormDescription, FormMessage;
var init_form = __esm({
  "src/components/ui/form.tsx"() {
    "use strict";
    "use client";
    init_dist4();
    init_utils();
    init_label();
    Form = FormProvider;
    FormFieldContext = React27.createContext(
      {}
    );
    FormField = ({
      ...props
    }) => {
      return /* @__PURE__ */ React27.createElement(FormFieldContext.Provider, { value: { name: props.name } }, /* @__PURE__ */ React27.createElement(Controller, { ...props }));
    };
    useFormField = () => {
      const fieldContext = React27.useContext(FormFieldContext);
      const itemContext = React27.useContext(FormItemContext);
      const { getFieldState, formState } = useFormContext();
      const fieldState = getFieldState(fieldContext.name, formState);
      if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
      }
      const { id } = itemContext;
      return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
      };
    };
    FormItemContext = React27.createContext(
      {}
    );
    FormItem = React27.forwardRef(({ className, ...props }, ref) => {
      const id = React27.useId();
      return /* @__PURE__ */ React27.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React27.createElement("div", { ref, className: cn("space-y-2", className), ...props }));
    });
    FormItem.displayName = "FormItem";
    FormLabel = React27.forwardRef(({ className, ...props }, ref) => {
      const { error, formItemId } = useFormField();
      return /* @__PURE__ */ React27.createElement(
        Label2,
        {
          ref,
          className: cn(error && "text-destructive", className),
          htmlFor: formItemId,
          ...props
        }
      );
    });
    FormLabel.displayName = "FormLabel";
    FormControl = React27.forwardRef(({ ...props }, ref) => {
      const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
      return /* @__PURE__ */ React27.createElement(
        Slot,
        {
          ref,
          id: formItemId,
          "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
          "aria-invalid": !!error,
          ...props
        }
      );
    });
    FormControl.displayName = "FormControl";
    FormDescription = React27.forwardRef(({ className, ...props }, ref) => {
      const { formDescriptionId } = useFormField();
      return /* @__PURE__ */ React27.createElement(
        "p",
        {
          ref,
          id: formDescriptionId,
          className: cn("text-[0.8rem] text-muted-foreground", className),
          ...props
        }
      );
    });
    FormDescription.displayName = "FormDescription";
    FormMessage = React27.forwardRef(({ className, children, ...props }, ref) => {
      const { error, formMessageId } = useFormField();
      const body = error ? String(error?.message ?? "") : children;
      if (!body) {
        return null;
      }
      return /* @__PURE__ */ React27.createElement(
        "p",
        {
          ref,
          id: formMessageId,
          className: cn("text-[0.8rem] font-medium text-destructive", className),
          ...props
        },
        body
      );
    });
    FormMessage.displayName = "FormMessage";
  }
});

// src/components/ui/card.tsx
import * as React28 from "react";
function Card({ className, ...props }) {
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-xs",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
var init_card = __esm({
  "src/components/ui/card.tsx"() {
    "use strict";
    init_utils();
  }
});

// src/registry/example/input/form.tsx
var form_exports = {};
__export(form_exports, {
  InputFormExample: () => InputFormExample
});
import * as React29 from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
var formSchema, InputFormExample;
var init_form2 = __esm({
  "src/registry/example/input/form.tsx"() {
    "use strict";
    "use client";
    init_zod();
    init_button();
    init_form();
    init_input();
    init_card();
    formSchema = z.object({
      email: z.string().email({
        message: "Invalid email"
      }),
      password: z.string().nonempty({
        message: "Password is required"
      })
    });
    InputFormExample = () => {
      const form = useForm({
        resolver: s2(formSchema),
        defaultValues: {
          email: "",
          password: ""
        }
      });
      function onSubmit(values) {
        toast.success("Login Successfully");
      }
      return /* @__PURE__ */ React29.createElement(Card, { className: "w-full max-w-sm" }, /* @__PURE__ */ React29.createElement(CardHeader, null, /* @__PURE__ */ React29.createElement(CardTitle, null, "Login"), /* @__PURE__ */ React29.createElement(CardDescription, null, "Enjoy the best experience with us")), /* @__PURE__ */ React29.createElement(CardContent, null, /* @__PURE__ */ React29.createElement(Form, { ...form }, /* @__PURE__ */ React29.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-2" }, /* @__PURE__ */ React29.createElement(
        FormField,
        {
          control: form.control,
          name: "email",
          render: ({ field }) => /* @__PURE__ */ React29.createElement(FormItem, null, /* @__PURE__ */ React29.createElement(FormLabel, null, "Email"), /* @__PURE__ */ React29.createElement(FormControl, null, /* @__PURE__ */ React29.createElement(
            Input,
            {
              placeholder: "Please enter your Email",
              ...field
            }
          )), /* @__PURE__ */ React29.createElement(FormMessage, null))
        }
      ), /* @__PURE__ */ React29.createElement(
        FormField,
        {
          control: form.control,
          name: "password",
          render: ({ field }) => /* @__PURE__ */ React29.createElement(FormItem, null, /* @__PURE__ */ React29.createElement(FormLabel, null, "Password"), /* @__PURE__ */ React29.createElement(FormControl, null, /* @__PURE__ */ React29.createElement(
            Input,
            {
              type: "password",
              placeholder: "Please enter your Password",
              ...field
            }
          )), /* @__PURE__ */ React29.createElement(FormMessage, null))
        }
      ), /* @__PURE__ */ React29.createElement("div", { className: "flex justify-end pt-2" }, /* @__PURE__ */ React29.createElement(Button, { type: "submit" }, "Submit"))))));
    };
  }
});

// src/registry/lib/utils.ts
var utils_exports = {};
__export(utils_exports, {
  cn: () => cn2
});
import { clsx as clsx2 } from "clsx";
import { twMerge as twMerge2 } from "tailwind-merge";
function cn2(...inputs) {
  return twMerge2(clsx2(inputs));
}
var init_utils2 = __esm({
  "src/registry/lib/utils.ts"() {
    "use strict";
  }
});

// node_modules/@shikijs/compat/dist/index.mjs
import fs from "node:fs";
import fsp from "node:fs/promises";

// node_modules/@shikijs/types/dist/index.mjs
var ShikiError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

// node_modules/@shikijs/transformers/dist/index.mjs
function transformerCompactLineOptions(lineOptions = []) {
  return {
    name: "@shikijs/transformers:compact-line-options",
    line(node, line) {
      const lineOption = lineOptions.find((o3) => o3.line === line);
      if (lineOption?.classes)
        this.addClassToHast(node, lineOption.classes);
      return node;
    }
  };
}
var symbol = Symbol("highlighted-lines");

// node_modules/@shikijs/compat/dist/index.mjs
import { bundledLanguages, bundledThemes, warnDeprecated, createHighlighter, normalizeTheme, tokenizeAnsiWithTheme } from "shiki";
import { normalizeTheme as normalizeTheme2, normalizeTheme as normalizeTheme3 } from "shiki";
var ShikiCompatError = class extends ShikiError {
  constructor(message) {
    super(message);
    this.name = "ShikiCompatError";
  }
};
var _warned = /* @__PURE__ */ new Set();
function warnOnce(message) {
  if (!_warned.has(message)) {
    console.warn(`[shiki-compat]: ${message}`);
    _warned.add(message);
  }
}
function stubFunction(name) {
  return () => {
    warnOnce(`\`${name}\` is a stub function in \`shiki-compat\` and does nothing.`);
  };
}
var setCDN = stubFunction("setCDN");
var setOnigasmWASM = stubFunction("setOnigasmWASM");
var setWasm = stubFunction("setWasm");
var setColorReplacements = stubFunction("setColorReplacements");
async function getHighlighter(options = {}) {
  warnDeprecated(`@shikijs/compat is deprecated and will be removed in v3, please migrate to the main shiki package`);
  const themes = options.themes || [];
  const langs = options.langs || [];
  if (options.theme)
    themes.unshift(options.theme);
  if (!themes.length)
    themes.push("nord");
  if (!langs.length)
    langs.push(...Object.keys(bundledLanguages));
  const shiki = await createHighlighter({
    ...options,
    themes,
    langs
  });
  const defaultTheme = shiki.getLoadedThemes()[0];
  function codeToTokensBase(code, lang, theme, options2) {
    const tokens = shiki.codeToTokensBase(code, {
      includeExplanation: true,
      lang,
      theme: theme || defaultTheme,
      ...options2
    });
    tokens.forEach((line) => {
      line.forEach((token) => {
        token.explanation || (token.explanation = []);
        delete token.offset;
      });
    });
    return tokens;
  }
  function codeToHtml(code, arg1, arg2, options2) {
    const options3 = (typeof arg1 === "string" ? options2 : arg1) || {};
    if (typeof arg1 === "string")
      options3.lang || (options3.lang = arg1);
    if (!("themes" in options3)) {
      options3.theme = "theme" in options3 ? options3.theme || defaultTheme : arg2 || defaultTheme;
    }
    if (options3.lineOptions) {
      options3.transformers || (options3.transformers = []);
      options3.transformers.push(transformerCompactLineOptions(options3.lineOptions));
    }
    return shiki.codeToHtml(code, options3);
  }
  function ansiToThemedTokens(ansi, options2 = {}) {
    const theme = shiki.getTheme(options2.theme || shiki.getLoadedThemes()[0]);
    return tokenizeAnsiWithTheme(theme, ansi);
  }
  return {
    ...shiki,
    ansiToThemedTokens,
    codeToTokensBase,
    codeToThemedTokens: codeToTokensBase,
    codeToHtml,
    ansiToHtml(code, options2) {
      return shiki.codeToHtml(code, {
        lang: "ansi",
        ...options2,
        theme: options2?.theme || defaultTheme
      });
    },
    getBackgroundColor(theme) {
      return shiki.getTheme(theme).bg;
    },
    getForegroundColor(theme) {
      return shiki.getTheme(theme).fg;
    },
    /**
     * @deprecated Not supported by Shiki
     */
    setColorReplacements(..._args) {
      throw new ShikiCompatError("`setColorReplacements` is not supported by @shikijs/compat");
    }
  };
}

// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit as visit3 } from "unist-util-visit";

// src/lib/rehype-component.ts
import fs2 from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// src/__registry__/index.tsx
import * as React30 from "react";
var Index = {
  "index": {
    name: "index",
    description: "",
    type: "registry:style",
    registryDependencies: ["utils"],
    files: [],
    component: null,
    meta: void 0
  },
  "input": {
    name: "input",
    description: "A input component",
    type: "registry:ui",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/ui/input.tsx",
      type: "registry:ui",
      target: "components/ednesdayw/input.tsx"
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_input(), input_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  },
  "input-size-demo": {
    name: "input-size-demo",
    description: "A demo of the input size",
    type: "registry:example",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/example/input/size.tsx",
      type: "registry:example",
      target: "components/ednesdayw/input-size-demo.tsx"
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_size(), size_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  },
  "input-variant-demo": {
    name: "input-variant-demo",
    description: "A demo of the input variant",
    type: "registry:example",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/example/input/variant.tsx",
      type: "registry:example",
      target: "components/ednesdayw/input-variant-demo.tsx"
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_variant(), variant_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  },
  "input-start-end-content-demo": {
    name: "input-start-end-content-demo",
    description: "A demo of the input start end content",
    type: "registry:example",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/example/input/start-end-content.tsx",
      type: "registry:example",
      target: "components/ednesdayw/input-start-end-content-demo.tsx"
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_start_end_content(), start_end_content_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  },
  "input-password-demo": {
    name: "input-password-demo",
    description: "A demo of the input password",
    type: "registry:example",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/example/input/password.tsx",
      type: "registry:example",
      target: "components/ednesdayw/input-password-demo.tsx"
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_password(), password_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  },
  "input-phone-input-demo": {
    name: "input-phone-input-demo",
    description: "A demo of the input phone input",
    type: "registry:example",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/example/input/phone-input.tsx",
      type: "registry:example",
      target: "components/ednesdayw/input-phone-input-demo.tsx"
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_phone_input(), phone_input_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  },
  "input-form-demo": {
    name: "input-form-demo",
    description: "A demo of the input form",
    type: "registry:example",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/example/input/form.tsx",
      type: "registry:example",
      target: "components/ednesdayw/input-form-demo.tsx"
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_form2(), form_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  },
  "utils": {
    name: "utils",
    description: "",
    type: "registry:lib",
    registryDependencies: void 0,
    files: [{
      path: "src/registry/lib/utils.ts",
      type: "registry:lib",
      target: ""
    }],
    component: React30.lazy(async () => {
      const mod = await Promise.resolve().then(() => (init_utils2(), utils_exports));
      const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: void 0
  }
};

// src/lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          let src;
          if (srcPath) {
            src = path.join(process.cwd(), srcPath);
          } else {
            const component = Index[name];
            src = fileName ? component.files.find((file) => {
              if (typeof file === "string") {
                return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
              }
              return false;
            }) || component.files[0]?.path : component.files[0]?.path;
          }
          const filePath = src;
          let source = fs2.readFileSync(filePath, "utf8");
          source = source.replaceAll(`@/registry/hooks/`, "@/hooks/");
          source = source.replaceAll("export default", "export");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          const component = Index[name];
          const src = component.files[0]?.path;
          const filePath = src;
          let source = fs2.readFileSync(filePath, "utf8");
          source = source.replaceAll("@/registry/hooks/", "@/hooks/");
          source = source.replaceAll("export default", "export");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// src/lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawstring__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawstring__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm install",
          "bun add"
        );
      }
      if (node.properties?.["__rawstring__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawstring__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx create-",
          "yarn create "
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx create-",
          "pnpm create "
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      if (node.properties?.["__rawstring__"]?.startsWith("npm create")) {
        const npmCommand = node.properties?.["__rawstring__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm create",
          "yarn create"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm create",
          "pnpm create"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm create",
          "bun create"
        );
      }
      if (node.properties?.["__rawstring__"]?.startsWith("npx") && !node.properties?.["__rawstring__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawstring__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx",
          "yarn dlx"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx",
          "pnpm dlx"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      delete node.properties?.["style"];
    });
  };
}

// contentlayer.config.ts
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    links: {
      type: "json",
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            node.properties["__rawstring__"] = codeEl.children?.[0].value;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          getHighlighter,
          theme: "github-dark"
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__rawstring__"] = node.properties["__rawstring__"];
            delete node.properties["__rawstring__"];
          }
        });
      },
      rehypeNpmCommand
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4PGM4OMV.mjs.map
