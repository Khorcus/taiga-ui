(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{mFkU:function(e,a,t){"use strict";t.r(a),t.d(a,"WrapperModule",(function(){return T}));var r=t("HHFY"),n=t("2kYt"),o=t("nIj0"),i=t("sEIs"),c=t("SVIu"),p=t("Qq0t"),d=t("dvRg"),l=t("EM62"),m=t("OZlg"),u=t("iyc4"),s=t("GdrL"),b=t("D+uv"),f=t("zV1d");let g=(()=>{class e{constructor(){this.value="",this.checkbox=!1}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-wrapper-example-1"]],features:[l["\u0275\u0275ProvidersFeature"]([{provide:p.TUI_TEXTFIELD_APPEARANCE,useValue:"material-textfield"},{provide:p.TUI_CHECKBOX_OPTIONS,useValue:Object.assign(Object.assign({},p.TUI_CHECKBOX_DEFAULT_OPTIONS),{appearances:{unchecked:"material-checkbox-off",checked:"material-checkbox-on",indeterminate:"material-checkbox-on"}})}])],decls:7,vars:2,consts:[["minlength","5",1,"b-form",3,"ngModel","ngModelChange"],[1,"tui-space_vertical-4"],[3,"ngModel","ngModelChange"],["tuiButton","","size","s","appearance","material-button"]],template:function(e,a){1&e&&(l["\u0275\u0275elementStart"](0,"tui-input",0),l["\u0275\u0275listener"]("ngModelChange",(function(e){return a.value=e})),l["\u0275\u0275text"](1," Input example\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-checkbox-labeled",2),l["\u0275\u0275listener"]("ngModelChange",(function(e){return a.checkbox=e})),l["\u0275\u0275text"](4," Checkbox example "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"button",3),l["\u0275\u0275text"](6,"Submit"),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275property"]("ngModel",a.value),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngModel",a.checkbox))},directives:[s.a,o.MinLengthValidator,o.NgControlStatus,o.NgModel,b.a,f.a],styles:['tui-wrapper[data-appearance=material-textfield]{background:#f5f5f5;color:rgba(0,0,0,.87);border-radius:.25rem .25rem 0 0}tui-wrapper[data-appearance=material-textfield]:after{height:.0625rem;background:#8e8e8e;top:auto;border:none;-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transition:all var(--tui-duration);transition:all var(--tui-duration)}tui-wrapper[data-appearance=material-textfield][data-state=hovered]{background:#ececec}tui-wrapper[data-appearance=material-textfield][data-state=hovered]:after{background:#1f1f1f}tui-wrapper[data-appearance=material-textfield]._focused{background:#dcdcdc}tui-wrapper[data-appearance=material-textfield]._focused label{color:#6200ee!important}tui-wrapper[data-appearance=material-textfield]._focused:after{background:#6200ee;-webkit-transform:scaleY(2);transform:scaleY(2)}tui-wrapper[data-appearance=material-textfield]._invalid label{color:#b00020!important}tui-wrapper[data-appearance=material-textfield]._invalid:after{background:#b00020}tui-wrapper[data-appearance=material-button]{border-radius:.25rem;background:#6200ee;color:#fff;text-transform:uppercase;font-weight:700;-webkit-box-shadow:0 .1875rem .0625rem -.125rem rgba(0,0,0,.2),0 .125rem .125rem 0 rgba(0,0,0,.0014),0 .0625rem .3125rem 0 rgba(0,0,0,.12);box-shadow:0 .1875rem .0625rem -.125rem rgba(0,0,0,.2),0 .125rem .125rem 0 rgba(0,0,0,.0014),0 .0625rem .3125rem 0 rgba(0,0,0,.12);-webkit-transition:all var(--tui-duration);transition:all var(--tui-duration)}tui-wrapper[data-appearance=material-button][data-state=hovered]{background:#6e14ef;-webkit-box-shadow:0 .125rem .25rem -.0625rem rgba(0,0,0,.2),0 .25rem .3125rem 0 rgba(0,0,0,.14),0 .0625rem .625rem 0 rgba(0,0,0,.12);box-shadow:0 .125rem .25rem -.0625rem rgba(0,0,0,.2),0 .25rem .3125rem 0 rgba(0,0,0,.14),0 .0625rem .625rem 0 rgba(0,0,0,.12)}tui-wrapper[data-appearance=material-button][data-state=pressed]{background:#6e14ef;-webkit-box-shadow:0 .3125rem .3125rem -.1875rem rgba(0,0,0,.2),0 .5rem .625rem .0625rem rgba(0,0,0,.14),0 .1875rem .875rem .125rem rgba(0,0,0,.12);box-shadow:0 .3125rem .3125rem -.1875rem rgba(0,0,0,.2),0 .5rem .625rem .0625rem rgba(0,0,0,.14),0 .1875rem .875rem .125rem rgba(0,0,0,.12)}tui-wrapper[data-appearance=material-button]._focused{background:#883df2}tui-wrapper[data-appearance=material-button]._focused:after{display:none}tui-wrapper[data-appearance=material-checkbox-off],tui-wrapper[data-appearance=material-checkbox-on]{color:#fff}tui-wrapper[data-appearance=material-checkbox-off]:before,tui-wrapper[data-appearance=material-checkbox-on]:before{position:absolute;content:"";top:0;left:0;right:0;bottom:0;border-radius:.125rem;border:2px solid rgba(0,0,0,.54);-webkit-transition:all var(--tui-duration);transition:all var(--tui-duration)}tui-wrapper[data-appearance=material-checkbox-off]:after,tui-wrapper[data-appearance=material-checkbox-on]:after{position:absolute;top:-.5rem;left:-.5rem;right:-.5rem;bottom:-.5rem;border-radius:100%;background:#000;opacity:0;-webkit-transition:opacity var(--tui-duration);transition:opacity var(--tui-duration)}tui-wrapper[data-appearance=material-checkbox-off][data-state=hovered]:after,tui-wrapper[data-appearance=material-checkbox-on][data-state=hovered]:after{opacity:.05}tui-wrapper[data-appearance=material-checkbox-off]._focused:after,tui-wrapper[data-appearance=material-checkbox-off][data-state=pressed]:after,tui-wrapper[data-appearance=material-checkbox-on]._focused:after,tui-wrapper[data-appearance=material-checkbox-on][data-state=pressed]:after{opacity:.1}tui-wrapper[data-appearance=material-checkbox-on]:after,tui-wrapper[data-appearance=material-checkbox-on]:before{background:#6200ee;border-color:transparent}'],encapsulation:2}),e})();var h=t("ER+R");const k=["header",$localize`:␟35330b8bd8fae8bd891f4fc98bb518fdaf27095b␟6199836572724339721:Wrapper`];var x,w;x=$localize`:␟7b2b2ee53f4b7a8f035d59ce764f8907eb0a5f41␟1351822894570451890: Many Taiga UI components use ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tui-wrapper${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: component internally. It is responsible for display of various interactive states and is controlled with CSS. Buttons provide a direct input for ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:appearance${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: while others, like input fields, are configurable through Dependency Injection. `,x=l["\u0275\u0275i18nPostprocess"](x),w=$localize`:␟782da18aa411d0f44908c8df3b2d2bb74aa718c2␟3199947270986380724: Built-in appearances come with Taiga UI theme. You can extend or completely replace them with your own in global non-encapsulated styles. Here are CSS selectors you can use to target wrapper and customize the look of components: `;const v=["heading",$localize`:␟428a5c79e6b5bb5ed9ba84f0e336ee249b1c187e␟1847855813698345106:Imitate material`];function E(e,a){if(1&e&&(l["\u0275\u0275elementStart"](0,"li"),l["\u0275\u0275elementStart"](1,"tui-doc-copy",3),l["\u0275\u0275elementStart"](2,"code"),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"]()),2&e){const e=a.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("cdkCopyToClipboard",e.key),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.key),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" \u2014 ",e.value," ")}}let _=(()=>{class e{constructor(){this.example1={HTML:'<tui-input class="b-form" minlength="5" [(ngModel)]="value">\n    Input example\n</tui-input>\n<div class="tui-space_vertical-4">\n    <tui-checkbox-labeled [(ngModel)]="checkbox">\n        Checkbox example\n    </tui-checkbox-labeled>\n</div>\n<button tuiButton size="s" appearance="material-button">Submit</button>\n',LESS:"tui-wrapper[data-appearance='material-textfield'] {\n    background: #f5f5f5;\n    color: rgba(0, 0, 0, 0.87);\n    border-radius: 0.25rem 0.25rem 0 0;\n\n    &:after {\n        height: 0.0625rem;\n        background: #8e8e8e;\n        top: auto;\n        border: none;\n        transform-origin: bottom;\n        transition: all var(--tui-duration);\n    }\n\n    &[data-state='hovered'] {\n        background: #ececec;\n\n        &:after {\n            background: #1f1f1f;\n        }\n    }\n\n    &._focused {\n        background: #dcdcdc;\n\n        // TODO: Better internal elements customization\n        label {\n            color: #6200ee !important;\n        }\n\n        &:after {\n            background: #6200ee;\n            transform: scaleY(2);\n        }\n    }\n\n    &._invalid {\n        // TODO: Better internal elements customization\n        label {\n            color: #b00020 !important;\n        }\n\n        &:after {\n            background: #b00020;\n        }\n    }\n}\n\ntui-wrapper[data-appearance='material-button'] {\n    border-radius: 0.25rem;\n    background: #6200ee;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    box-shadow: 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0rem 0.125rem 0.125rem 0rem rgba(0, 0, 0, 0.14%),\n        0rem 0.0625rem 0.3125rem 0rem rgba(0, 0, 0, 0.12);\n    transition: all var(--tui-duration);\n\n    &[data-state='hovered'] {\n        background: #6e14ef;\n        box-shadow: 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.14),\n            0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.12);\n    }\n\n    &[data-state='pressed'] {\n        background: #6e14ef;\n        box-shadow: 0 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2),\n            0rem 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12);\n    }\n\n    &._focused {\n        background: #883df2;\n\n        &:after {\n            display: none;\n        }\n    }\n}\n\ntui-wrapper[data-appearance='material-checkbox-on'],\ntui-wrapper[data-appearance='material-checkbox-off'] {\n    color: #fff;\n\n    &:before {\n        position: absolute;\n        content: '';\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 0.125rem;\n        border: 2px solid rgba(0, 0, 0, 0.54);\n        transition: all var(--tui-duration);\n    }\n\n    &:after {\n        position: absolute;\n        top: -0.5rem;\n        left: -0.5rem;\n        right: -0.5rem;\n        bottom: -0.5rem;\n        border-radius: 100%;\n        background: #000;\n        opacity: 0;\n        transition: opacity var(--tui-duration);\n    }\n\n    &[data-state='hovered'] {\n        &:after {\n            opacity: 0.05;\n        }\n    }\n\n    &[data-state='pressed'],\n    &._focused {\n        &:after {\n            opacity: 0.1;\n        }\n    }\n}\n\ntui-wrapper[data-appearance='material-checkbox-on'] {\n    &:before,\n    &:after {\n        background: #6200ee;\n        border-color: transparent;\n    }\n}\n",TypeScript:"import {Component, ViewEncapsulation} from '@angular/core';\nimport {\n    TUI_CHECKBOX_DEFAULT_OPTIONS,\n    TUI_CHECKBOX_OPTIONS,\n    TUI_TEXTFIELD_APPEARANCE,\n} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-wrapper-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    providers: [\n        {\n            provide: TUI_TEXTFIELD_APPEARANCE,\n            useValue: 'material-textfield',\n        },\n        {\n            provide: TUI_CHECKBOX_OPTIONS,\n            useValue: {\n                ...TUI_CHECKBOX_DEFAULT_OPTIONS,\n                appearances: {\n                    unchecked: 'material-checkbox-off',\n                    checked: 'material-checkbox-on',\n                    indeterminate: 'material-checkbox-on',\n                },\n            },\n        },\n    ],\n})\nexport class TuiWrapperExample1 {\n    value = '';\n    checkbox = false;\n}\n"},this.state={"[data-appearance]":"appearance string","[data-mode]":'optional "onDark"/"onLight" mode',"[data-state]":'interactive state: "hovered"/"pressed"/"readonly"/"disabled"',"._focused":"class for focused state","._invalid":"class for invalid state"}}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["wrapper"]],decls:14,vars:4,consts:[[6,"header"],[4,"ngFor","ngForOf"],["id","material",3,"content",6,"heading"],[1,"var",3,"cdkCopyToClipboard"]],template:function(e,a){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,k),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18nStart"](3,x),l["\u0275\u0275element"](4,"code"),l["\u0275\u0275element"](5,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"p"),l["\u0275\u0275i18n"](7,w),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"ul"),l["\u0275\u0275template"](9,E,5,3,"li",1),l["\u0275\u0275pipe"](10,"keyvalue"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"tui-doc-example",2),l["\u0275\u0275i18nAttributes"](12,v),l["\u0275\u0275element"](13,"tui-wrapper-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("ngForOf",l["\u0275\u0275pipeBind1"](10,2,a.state)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",a.example1))},directives:[m.a,n.s,u.a,g,h.a,r.a],pipes:[n.l],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(a){return new(a||e)},imports:[[n.c,r.c,p.TuiButtonModule,c.j,d.TuiInputModule,d.TuiCheckboxLabeledModule,c.h,i.f.forChild(Object(c.o)(_)),o.FormsModule]]}),e})()}}]);