/*! For license information please see components-Button-button-stories.2abf6cc3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkhamburger_design=self.webpackChunkhamburger_design||[]).push([[161],{"./src/components/Button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,DashButton:()=>DashButton,Default:()=>Default,Large:()=>Large,Link:()=>Link,Primary:()=>Primary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=props=>{const{btnType,className,disabled,size,children,href,...restProps}=props,cls=classnames_default()("hamburgerButton",className,{["hamburgerButton--".concat(btnType)]:btnType,["hamburgerButton--".concat(size)]:"mid"!==size,"hamburgerButton--disabled":disabled});return"link"===btnType&&href?(0,jsx_runtime.jsx)("a",{className:cls,href:disabled?"javascript:void(0)":href,...restProps,children}):(0,jsx_runtime.jsx)("button",{className:cls,disabled,...restProps,children})},Button_button=Button;Button.__docgenInfo={description:">按钮用于开始一个即时操作。\n\n### 何时使用\n标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。\nhamburger-design我们提供了6种按钮\n\n- 默认按钮：用于没有主次之分的一组行动点。\n- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。\n- 危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。\n- 链接按钮：一般用于链接，即导航至某位置。\n- 图标按钮：可以通过Icon组件，为按钮提供各式各样的图标选择。\n- 虚线按钮：常用于添加操作。\n\n\n除了默认Mid Button尺寸，还提供了两种尺寸可供自由组合\n- Large Button\n- Samll Button\n\n所有按钮都提供了disabled属性，用于行动点不可用的时候，一般需要文案解释。",methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'sm' | 'mid'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'mid'"}]},description:""},btnType:{required:!1,tsType:{name:"union",raw:"'primary' | 'default' | 'danger' | 'link' | 'dash'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'link'"},{name:"literal",value:"'dash'"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:""}}};const button_stories={title:"组件/Button 按钮",component:Button_button,parameters:{layout:"centered"},tags:["autodocs"],args:{size:"mid",btnType:"default",disabled:!1,onClick:()=>alert("click")}},Template={render:args=>(0,jsx_runtime.jsx)(Button_button,{...args})},Default={...Template,args:{children:"Default Button"}};Default.storyName="Defalut Button 默认按钮";const Primary={...Template,args:{btnType:"primary",children:"Primary Button"}};Primary.storyName="Primary Button 主按钮";const Danger={...Template,args:{btnType:"danger",children:"danger Button"}};Danger.storyName="Danger Button 危险按钮";const Link={...Template,args:{btnType:"link",children:"link Button",href:"https://google.com"}};Link.storyName="Link Button 链接按钮";const DashButton={...Template,args:{btnType:"dash",children:"dash Button"}};DashButton.storyName="Dash Button 虚线按钮";const Large={...Template,args:{size:"lg",children:"large Button"}};Large.storyName="Large Button 大按钮";const Small={...Template,args:{size:"sm",children:"small Button"}};Small.storyName="Small Button 小按钮",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    children: 'Default Button'\n  }\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    btnType: 'primary',\n    children: 'Primary Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    btnType: 'danger',\n    children: 'danger Button'\n  }\n}",...Danger.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    btnType: 'link',\n    children: 'link Button',\n    href: 'https://google.com'\n  }\n}",...Link.parameters?.docs?.source}}},DashButton.parameters={...DashButton.parameters,docs:{...DashButton.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    btnType: 'dash',\n    children: 'dash Button'\n  }\n}",...DashButton.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    size: 'lg',\n    children: 'large Button'\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    size: 'sm',\n    children: 'small Button'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Danger","Link","DashButton","Large","Small"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);