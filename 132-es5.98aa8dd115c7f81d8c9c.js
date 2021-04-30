function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _templateObject(){var t=_taggedTemplateLiteral([":\u241f994e6a27b92ba37201e3bb9f8ae312f2a46b5b39\u241f7136888919962092730:Changelog"]);return _templateObject=function(){return t},t}function _taggedTemplateLiteral(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{"nnM+":function(t,i,e){"use strict";e.r(i),e.d(i,"ChangelogModule",(function(){return b}));var s,a,o=e("sEIs"),c=e("SVIu"),f=e("DgXe"),n=e("EM62"),d=e("OZlg"),m=["header",$localize(_templateObject())],u=((a=function t(){_classCallCheck(this,t),this.changelog='# Changelog\n\nAll notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.\n\n### [2.8.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.6.2...v2.8.1) (2021-04-30)\n\n### Bug Fixes\n\n-   **core:** `PrimitiveTextfield` fix growing wider than container ([#364](https://github.com/TinkoffCreditSystems/taiga-ui/issues/364)) ([e64fe49](https://github.com/TinkoffCreditSystems/taiga-ui/commit/e64fe4931f22430a4edc260d74a4e5862903e6d5))\n\n## [2.8.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.7.0...v2.8.0) (2021-04-29)\n\n### Features\n\n-   **addon-editor:** `Toolbar` add `ColorPicker` ([#335](https://github.com/TinkoffCreditSystems/taiga-ui/issues/335)) ([67dfd6f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/67dfd6f9ea7b74864cc57aabc9be7aab8759a0f0))\n-   **core:** add `hasIcon` for `NotificationsService` ([#274](https://github.com/TinkoffCreditSystems/taiga-ui/issues/274)) ([0519af6](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0519af62b8af5dc1df21f52311db318457c97216))\n-   **kit:** `DropdownHover` add new directive ([#361](https://github.com/TinkoffCreditSystems/taiga-ui/pull/361))\n-   **kit:** `TabsWithMore` always show the active tab ([#345](https://github.com/TinkoffCreditSystems/taiga-ui/issues/345)) ([c437871](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c4378719b1a30c8b1ca65671ee2542dbae13c076))\n\n### Bug Fixes\n\n-   **addon-editor:** `Editor` fix scroll jumping on edits ([#323](https://github.com/TinkoffCreditSystems/taiga-ui/issues/323)) ([c4a1e13](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c4a1e13cde7bc6f758b36b4e4989b47714d26a2f))\n-   **addon-editor:** `Editor` fix scrollbar dragging ([#333](https://github.com/TinkoffCreditSystems/taiga-ui/issues/333)) ([a01227e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a01227e55d5c41b6dff082d963b2d975247f4a95))\n-   **addon-editor:** open links in a new tab ([#328](https://github.com/TinkoffCreditSystems/taiga-ui/issues/328)) ([222863f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/222863f965d950d3b28c99a95603e06bfcd95b33))\n-   **cdk:** `ActiveZone` fix emitting `false` on element removal in Chrome ([#362](https://github.com/TinkoffCreditSystems/taiga-ui/issues/362)) ([a424417](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a4244177906cb897fc47e8c65c5c1ff41dfbdadc))\n-   **cdk:** `ScrollService` fix `NullInjectorError` ([#355](https://github.com/TinkoffCreditSystems/taiga-ui/issues/355)) ([c6db6d1](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c6db6d197a382cc1f6f33ee9d4d1bba4b9d580c4))\n-   **cdk:** use passive event listeners ([#344](https://github.com/TinkoffCreditSystems/taiga-ui/issues/344)) ([dbc1188](https://github.com/TinkoffCreditSystems/taiga-ui/commit/dbc1188defa13cd0e5eae219372d3255fccb3f3d))\n-   **core:** `Scrollbar` fix content sticky beyond container height ([#348](https://github.com/TinkoffCreditSystems/taiga-ui/issues/348)) ([173213f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/173213fa013c73ea38e2afbc16c5ba3f3996bae3))\n-   **core:** fix issues with components being used inside `ControlValueAccessor` ([#346](https://github.com/TinkoffCreditSystems/taiga-ui/issues/346)) ([e90a0f7](https://github.com/TinkoffCreditSystems/taiga-ui/commit/e90a0f7f78a58e997b5645631eb6d94fd8416cef))\n-   **kit:** `InputCount` correct work with negative values ([#337](https://github.com/TinkoffCreditSystems/taiga-ui/issues/337)) ([82ceda8](https://github.com/TinkoffCreditSystems/taiga-ui/commit/82ceda86cd7bbfbc15f18b767df7d25d5295e523))\n-   **kit:** `InputDateTime` fix changing date ([#322](https://github.com/TinkoffCreditSystems/taiga-ui/issues/322)) ([3cafe28](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3cafe28cffb1a9c14b4942ad24408043a891c9ec))\n-   **kit:** `InputTime` open dropdown by click ([#322](https://github.com/TinkoffCreditSystems/taiga-ui/issues/322)) ([3cafe28](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3cafe28cffb1a9c14b4942ad24408043a891c9ec))\n-   **kit:** `InputFile` do not reset loading files on new file selection ([#356](https://github.com/TinkoffCreditSystems/taiga-ui/issues/356)) ([bc01ace](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bc01aceeb3e3d403a15ba6f8f7544ab4257011e2))\n-   **kit:** `InputNumber` fix caret for zeroes in decimal part ([#318](https://github.com/TinkoffCreditSystems/taiga-ui/issues/318)) ([1b1dd68](https://github.com/TinkoffCreditSystems/taiga-ui/commit/1b1dd68e60786433cc815cf7f586b2131278a586))\n-   **kit:** `InputTag` fix scrolling with arrows ([#334](https://github.com/TinkoffCreditSystems/taiga-ui/issues/334)) ([436bcaa](https://github.com/TinkoffCreditSystems/taiga-ui/commit/436bcaa4fc71d3a1727c3ffa579665404d815eb1))\n-   **kit:** `InputCount` prevent buttons from focusing input on mobile ([#272](https://github.com/TinkoffCreditSystems/taiga-ui/issues/272)) ([17f8d47](https://github.com/TinkoffCreditSystems/taiga-ui/commit/17f8d47fa3bcf5d1c00e790daaa7fd9a428db328))\n-   **kit:** fix iOS device detection ([#320](https://github.com/TinkoffCreditSystems/taiga-ui/issues/320)) ([6e90cad](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6e90cad33d6eae1a592765fa71f85fb7d8ce0396))\n\n## [2.7.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.6.2...v2.7.0) (2021-03-29)\n\n### Features\n\n-   **addon-mobile:** `Sidebar` add `autoWidth` option ([#299](https://github.com/TinkoffCreditSystems/taiga-ui/issues/299)) ([73f593b](https://github.com/TinkoffCreditSystems/taiga-ui/commit/73f593b0e370dba57b4da1756631e77e7b64115f))\n-   **core:** `NightThemeService` add new service ([#226](https://github.com/TinkoffCreditSystems/taiga-ui/issues/226)) ([bd85236](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bd8523666579048e54ba34cec48f56022f566478))\n-   **core:** `NotificationsService` add `hasIcon` option ([#274](https://github.com/TinkoffCreditSystems/taiga-ui/issues/274)) ([0519af6](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0519af62b8af5dc1df21f52311db318457c97216))\n-   **demo:** Improve documentation (descriptions, unexpected behavior etc.) ([#284](https://github.com/TinkoffCreditSystems/taiga-ui/issues/284)) ([96638d0](https://github.com/TinkoffCreditSystems/taiga-ui/commit/96638d09693bdd023a2a931d6698d04f36ee09f5))\n-   **demo:** added link to source code and fixed routing ([#273](https://github.com/TinkoffCreditSystems/taiga-ui/issues/273)) ([99ede5a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/99ede5a3b52f9686adf8b97191d58c8abeb5290f))\n-   **kit:** `Tabs` update scroll position on active index change ([#268](https://github.com/TinkoffCreditSystems/taiga-ui/issues/268)) ([a753a5e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a753a5e8f7a5fddf1496ac190897a922e48c49f9))\n\n### Bug Fixes\n\n-   **addon-doc:** fix import package ([#291](https://github.com/TinkoffCreditSystems/taiga-ui/issues/291)) ([cdabcd1](https://github.com/TinkoffCreditSystems/taiga-ui/commit/cdabcd1d4f8e33b51d472ee94476165a13a99fa4))\n-   **addon-editor:** fix font & highlight displayed colors ([#311](https://github.com/TinkoffCreditSystems/taiga-ui/issues/311)) ([6375d65](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6375d656aa2cbeef0d8d6f0cee9599e9d76da712))\n-   **addon-table:** `Table` fix dual borders ([#277](https://github.com/TinkoffCreditSystems/taiga-ui/issues/277)) ([52534fc](https://github.com/TinkoffCreditSystems/taiga-ui/commit/52534fcec5ee0786b1d78648b04110c042dbfa69))\n-   **cdk:** `ActiveZone` stay in zone if focused element removed ([#304](https://github.com/TinkoffCreditSystems/taiga-ui/issues/304)) ([30cb717](https://github.com/TinkoffCreditSystems/taiga-ui/commit/30cb717f087393b7aa0eabb7c4605ecf078cd081))\n-   **cdk:** `FocusTrap` fix ExpressionChanged error ([#304](https://github.com/TinkoffCreditSystems/taiga-ui/issues/304)) ([30cb717](https://github.com/TinkoffCreditSystems/taiga-ui/commit/30cb717f087393b7aa0eabb7c4605ecf078cd081))\n-   **kit:** `HoveredService` fix for iOS 12 ([#303](https://github.com/TinkoffCreditSystems/taiga-ui/issues/303)) ([3cbf8f2](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3cbf8f2b07c9c3ec616e8f0b8fe97f2358faed37))\n-   **kit:** `InputTag` error icon layout ([#296](https://github.com/TinkoffCreditSystems/taiga-ui/issues/296)) ([75c2baa](https://github.com/TinkoffCreditSystems/taiga-ui/commit/75c2baa5f17366bfa70e5cfd6a99e1dbf9f2bdd9))\n-   **kit:** `InputRange` prevent emitting same value on blur ([#298](https://github.com/TinkoffCreditSystems/taiga-ui/issues/298)) ([685cc00](https://github.com/TinkoffCreditSystems/taiga-ui/commit/685cc006b6649ed14a297ee4d94559e5180bd1b4))\n-   **kit:** `InputRange` prevent from focusing input field on mobile devices ([#280](https://github.com/TinkoffCreditSystems/taiga-ui/issues/280)) ([c8cf497](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c8cf49785683d969371f3ee1152482e6ba8ae2d0))\n-   **kit:** `Tabs` fix extra change detection ticks ([#314](https://github.com/TinkoffCreditSystems/taiga-ui/issues/314)) ([0f36a06](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0f36a066fb2c0dc1a679c789527a8c912423460c))\n-   **kit:** `TextArea` fix `m` size styles ([#302](https://github.com/TinkoffCreditSystems/taiga-ui/issues/302)) ([39850ef](https://github.com/TinkoffCreditSystems/taiga-ui/commit/39850ef68caa1a8a63ee15f31562305b72d65191))\n-   **kit:** `InputPassword` fix change detection issue ([#300](https://github.com/TinkoffCreditSystems/taiga-ui/issues/300)) ([a32a9dd](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a32a9dd5a82b2672686aadd4b42c542b9c2e3607))\n-   **kit:** `InputCount` prevent buttons from focusing input field on mobile ([#272](https://github.com/TinkoffCreditSystems/taiga-ui/issues/272)) ([17f8d47](https://github.com/TinkoffCreditSystems/taiga-ui/commit/17f8d47fa3bcf5d1c00e790daaa7fd9a428db328))\n\n### [2.6.2](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.6.1...v2.6.2) (2021-03-04)\n\n### Features\n\n-   **cdk:** add `isSafari` util ([e616b53](https://github.com/TinkoffCreditSystems/taiga-ui/commit/e616b53f9535416b960486dd2c7b6e615a9e14ce))\n-   **core:** `TUI_ASSERT_ENABLED` add new token to allow enabling assertions in prod mode ([39af6cb](https://github.com/TinkoffCreditSystems/taiga-ui/commit/39af6cb58687d0edfa398da8525d71fcf391f444))\n-   **kit:** `Radio` add customization through token ([#264](https://github.com/TinkoffCreditSystems/taiga-ui/issues/264)) ([1a6d574](https://github.com/TinkoffCreditSystems/taiga-ui/commit/1a6d57447de0118e87e96848f96d8db4f3dc5b64))\n\n### Bug Fixes\n\n-   **addon-table:** fix not drawing default cells ([61cd807](https://github.com/TinkoffCreditSystems/taiga-ui/commit/61cd8071f8c631f737dd554cfff373da30ccf95a))\n-   **core:** `Loader` fix form freezing in Safari ([#266](https://github.com/TinkoffCreditSystems/taiga-ui/issues/266)) ([0c7330c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0c7330ce0e8d4a3d16dce06d8689f75ce3a96dff))\n-   **kit:** `InoutNumber` fix all problems with caret in Safari ([b4930c9](https://github.com/TinkoffCreditSystems/taiga-ui/commit/b4930c9d59b915b51a0c6aa705f2cff78b9170f3))\n-   **kit:** `InputCount` fix wrong button height for customized height ([#216](https://github.com/TinkoffCreditSystems/taiga-ui/issues/216)) ([4c39f7a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/4c39f7a27dd81c59352cdc3af46114d2ff3184cf))\n-   **kit:** fix loader in toggle size m ([#261](https://github.com/TinkoffCreditSystems/taiga-ui/issues/261)) ([a1eeaa4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a1eeaa417a2aa3b6b68ba32b524eed17d6f2f144))\n\n### [2.6.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.6.0...v2.6.1) (2021-02-26)\n\n### Bug Fixes\n\n-   **addon-table:** fix incorrect style minification ([c00cf1b](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c00cf1b5bfe61fabba137ab8d41c719a0bf96451))\n-   **core:** fix underline pseudo link ([#246](https://github.com/TinkoffCreditSystems/taiga-ui/issues/246)) ([bca9201](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bca9201ffd30463da0b24a70aece4a1f2ac01f5b))\n\n## [2.6.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.5.0...v2.6.0) (2021-02-25)\n\n### Features\n\n-   **addon-doc:** add "Edit on Online IDE" button support ([5cae178](https://github.com/TinkoffCreditSystems/taiga-ui/commit/5cae178da83d0ab825afa5354d5f3805b02600ad))\n-   **addon-table:** `Table` add new module ([9ac0243](https://github.com/TinkoffCreditSystems/taiga-ui/commit/9ac024368168fc19af0a8bb903b7c80d97ef7171))\n-   **i18n:** add Ukrainian support ([#231](https://github.com/TinkoffCreditSystems/taiga-ui/issues/231)) ([38b292b](https://github.com/TinkoffCreditSystems/taiga-ui/commit/38b292b2d19ca5d19bb603979f26758ce4d11b09))\n\n### Bug Fixes\n\n-   **core:** `Dialog` fix closing non-dismissible dialog by clicking on border ([#240](https://github.com/TinkoffCreditSystems/taiga-ui/issues/240)) ([516dc74](https://github.com/TinkoffCreditSystems/taiga-ui/commit/516dc74a09267024b7154ebad46d36402d3d6625))\n-   **core:** `Link` properly handle various modes ([#241](https://github.com/TinkoffCreditSystems/taiga-ui/issues/241)) ([9197895](https://github.com/TinkoffCreditSystems/taiga-ui/commit/919789593d9553f278bee7b1e0552a0665a6c1ef))\n\n## [2.5.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.4.0...v2.5.0) (2021-02-08)\n\n### Features\n\n-   **addon-commerce:** add UAH currency ([#214](https://github.com/TinkoffCreditSystems/taiga-ui/issues/214)) ([54f64a6](https://github.com/TinkoffCreditSystems/taiga-ui/commit/54f64a6490fb6f3d259a0cd49c7477eb4e0e359c))\n-   **common:** added CSS custom properties for fonts ([#201](https://github.com/TinkoffCreditSystems/taiga-ui/issues/201)) ([c9d527c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c9d527c0fb518b68a3f483b1d878c14221c90ef6))\n-   **core:** `Dialog` add `page` size for a fullscreen dialog without any padding ([#213](https://github.com/TinkoffCreditSystems/taiga-ui/issues/213)) ([523eaf9](https://github.com/TinkoffCreditSystems/taiga-ui/commit/523eaf909246509c7fa9e1baec1f58ca20c19986))\n-   **core:** `PrimitiveCheckbox` full customization through DI ([#209](https://github.com/TinkoffCreditSystems/taiga-ui/issues/209)) ([78e87b5](https://github.com/TinkoffCreditSystems/taiga-ui/commit/78e87b5df496de3d73fbaa4d55c16a0dbb9d0a07))\n-   **i18n:** add Dutch with 100% support ([#206](https://github.com/TinkoffCreditSystems/taiga-ui/issues/206)) ([41c0554](https://github.com/TinkoffCreditSystems/taiga-ui/commit/41c055470494ed90a8090582e4cf19f18e639efe))\n-   **i18n:** add Turkish with 100% support ([#200](https://github.com/TinkoffCreditSystems/taiga-ui/issues/200)) ([a4de9d9](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a4de9d983edd6fa453019be6c424f496d8d882fd))\n-   **kit:** allow configuration of default checkbox options ([#139](https://github.com/TinkoffCreditSystems/taiga-ui/issues/139)) ([a977e6e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a977e6e65e048e0a053a89ed37698fa68ca2037f))\n\n### Bug Fixes\n\n-   **core:** `Svg` fix custom icons processing ([#212](https://github.com/TinkoffCreditSystems/taiga-ui/issues/212)) ([76ec2d8](https://github.com/TinkoffCreditSystems/taiga-ui/commit/76ec2d8ead0e3ac326203d9c4984ee25656aa039))\n-   **core:** dialog not closing due to transparent border, closes [#148](https://github.com/TinkoffCreditSystems/taiga-ui/issues/148) ([#190](https://github.com/TinkoffCreditSystems/taiga-ui/issues/190)) ([c791da7](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c791da71f79b59b4f0feb5cc40be38d25943e972))\n-   **i18n:** correct inconsistencies in English translations ([#207](https://github.com/TinkoffCreditSystems/taiga-ui/issues/207)) ([977d7bd](https://github.com/TinkoffCreditSystems/taiga-ui/commit/977d7bd965630062bd9a2cefa565102332faf4bc))\n-   **kit:** `Tabs` clicking on external links will not update active index ([#218](https://github.com/TinkoffCreditSystems/taiga-ui/issues/218)) ([4fee5a3](https://github.com/TinkoffCreditSystems/taiga-ui/commit/4fee5a386d58ba7a2d44263ebec4013ee93acb14))\n\n## [2.4.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.3.0...v2.4.0) (2021-02-02)\n\n### Features\n\n-   **core:** add scss mixin support ([#165](https://github.com/TinkoffCreditSystems/taiga-ui/issues/165)) ([865bbaa](https://github.com/TinkoffCreditSystems/taiga-ui/commit/865bbaafb5cac5587dd3ffc20eacfa2283329b10))\n-   **i18n:** Add German with 100% support ([#198](https://github.com/TinkoffCreditSystems/taiga-ui/issues/198)) ([54f1284](https://github.com/TinkoffCreditSystems/taiga-ui/commit/54f12843e3521543cb39effea64c66e9440de1c9))\n-   **i18n:** add Spanish with 100% support ([#191](https://github.com/TinkoffCreditSystems/taiga-ui/issues/191)) ([6f9a19e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6f9a19e7cdee34445cdfe26584a91bd7bcd64291))\n-   **kit:** use lazy loading strategy in avatar component ([#185](https://github.com/TinkoffCreditSystems/taiga-ui/issues/185)) ([d6ea803](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d6ea8032a11a546e7c65474d9991da46030e7e08))\n\n### Bug Fixes\n\n-   **button:** fix button loader size for XL ([#174](https://github.com/TinkoffCreditSystems/taiga-ui/issues/174)) ([f9929fe](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f9929fef2d73cbf829f8d9f53150316d04c739ca))\n-   **cdk:** fix isFirefox check ([#158](https://github.com/TinkoffCreditSystems/taiga-ui/issues/158)) ([8e9c7a4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))\n-   **core:** `Button` fix margin for right aligned icons ([#173](https://github.com/TinkoffCreditSystems/taiga-ui/issues/173)) ([a3f9ed5](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a3f9ed5a4ab6b650130c16616bb8f20e78d8d718))\n\n## [2.3.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.2.1...v2.3.0) (2021-01-29)\n\n### Features\n\n-   **core:** add `ThemeNight` component ([#167](https://github.com/TinkoffCreditSystems/taiga-ui/issues/167)) ([a953be7](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a953be715ac1c624bf4b2b1d12631715fd376234))\n-   **demo:** add `Wrapper` customization page ([#153](https://github.com/TinkoffCreditSystems/taiga-ui/issues/153)) ([eef8382](https://github.com/TinkoffCreditSystems/taiga-ui/commit/eef83822593c20f8de8c398ed1e4e705578d11bf))\n-   **demo:** add guide on using different icon set ([#157](https://github.com/TinkoffCreditSystems/taiga-ui/issues/157)) ([b35a891](https://github.com/TinkoffCreditSystems/taiga-ui/commit/b35a89181cb59e6ae5f80a54d52ea266490152c1))\n-   **demo:** add page on custom dialogs ([#159](https://github.com/TinkoffCreditSystems/taiga-ui/issues/159)) ([13e17a1](https://github.com/TinkoffCreditSystems/taiga-ui/commit/13e17a13c0e2a805984425f19ad04b6979abdfb0))\n-   **format:** number formatting supports custom thousands separator ([#145](https://github.com/TinkoffCreditSystems/taiga-ui/issues/145)) ([a8c0743](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a8c0743dae7ad432576d1e6f567943a28e7c8a37))\n\n### Bug Fixes\n\n-   **cdk:** fix isFirefox check ([#158](https://github.com/TinkoffCreditSystems/taiga-ui/issues/158)) ([8e9c7a4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))\n-   **core:** `Svg` properly use Angular `Sanitizer` ([#170](https://github.com/TinkoffCreditSystems/taiga-ui/issues/170)) ([249392d](https://github.com/TinkoffCreditSystems/taiga-ui/commit/249392d2727c7af1d0da404ae0f2619a08847857))\n-   **core:** fix new CSS vars for height name mismatch ([#149](https://github.com/TinkoffCreditSystems/taiga-ui/issues/149)) ([aa7c961](https://github.com/TinkoffCreditSystems/taiga-ui/commit/aa7c9617ed42b767a118e2c145e2ba6bc4cb54d8))\n\n### [2.2.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.2.0...v2.2.1) (2021-01-22)\n\n### Bug Fixes\n\n-   **highlight:** change background color to selection ([#137](https://github.com/TinkoffCreditSystems/taiga-ui/issues/137)) ([7f60e25](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7f60e25b2f4b0ef4bf00eaac99892067801316cc))\n\n## [2.2.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.3...v2.2.0) (2021-01-22)\n\n### \u26a0 BREAKING CHANGES\n\n-   **kit:** `UnfinishedValidator` now has no default message\n-   **cdk, core:** `MonthPipe` import it from @taiga-ui/core library and use with async pipe\n\n### Features\n\n-   **cdk, core:** `TuiMonthPipe` move from cdk to core, add i18n ([59474d2](https://github.com/TinkoffCreditSystems/taiga-ui/commit/59474d2d4eceea34a744a9c2034a0081bff260fb))\n-   **demo:** add page for `Sidebar` directive ([#125](https://github.com/TinkoffCreditSystems/taiga-ui/issues/125)) ([bea427e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bea427e1d88e6275ee87bf40d53a03a562b3952b))\n-   **i18n:** add i18n package ([523d5de](https://github.com/TinkoffCreditSystems/taiga-ui/commit/523d5dec3f76a23bda81cb873bd9c5201ce665d5))\n-   **i18n:** add russian language ([71dab5c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/71dab5c8ed6d18e6cddee52121e2354db8c56fee))\n-   **kit:** add tokens to customize `Checkbox`, `Radio` and `InputTag` ([#124](https://github.com/TinkoffCreditSystems/taiga-ui/issues/124)) ([94e8b00](https://github.com/TinkoffCreditSystems/taiga-ui/commit/94e8b00a32b01e81108e8c74c7a9601d6179abf7))\n-   **kit:** allow setting mask directly on `Input`, `InputInline` and `InputCopy` ([#122](https://github.com/TinkoffCreditSystems/taiga-ui/issues/122)) ([173cd8f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/173cd8ffc1f0d123915eb916f93b46cb04c08e68))\n\n### Bug Fixes\n\n-   **cdk:** `Media` fix stuttering in Safari ([#129](https://github.com/TinkoffCreditSystems/taiga-ui/issues/129)) ([43afe21](https://github.com/TinkoffCreditSystems/taiga-ui/commit/43afe21e912f65e50da211de5e47354cac026ec2))\n-   **kit:** `TabsWithMore` fix freezing on resize loop ([#121](https://github.com/TinkoffCreditSystems/taiga-ui/issues/121)) ([b87737a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/b87737ae2d98a266fa37e367caac003ab45e9a76))\n\n### [2.1.3](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.2...v2.1.3) (2021-01-19)\n\n### Features\n\n-   **cdk:** add `uniqBy` utility method ([#108](https://github.com/TinkoffCreditSystems/taiga-ui/issues/108)) ([2fe83be](https://github.com/TinkoffCreditSystems/taiga-ui/commit/2fe83be88c5db38eccf25d8d1a28f94b4cd3714a))\n-   **let:** improve type checking for tuiLet ([#98](https://github.com/TinkoffCreditSystems/taiga-ui/issues/98)) ([5cff8ae](https://github.com/TinkoffCreditSystems/taiga-ui/commit/5cff8ae205b6d4711bf44e0576603edf9ab88730))\n\n### Bug Fixes\n\n-   **core:** add lost body-l-2 global text class ([#106](https://github.com/TinkoffCreditSystems/taiga-ui/issues/106)) ([d296243](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d296243350269a4984bf1cd81275c71b064ffc3e))\n-   **core:** add will-change for smooth transition ([#99](https://github.com/TinkoffCreditSystems/taiga-ui/issues/99)) ([35e2bf4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/35e2bf48253487218c71aa0eb258ec28bf20b583)), closes [#90](https://github.com/TinkoffCreditSystems/taiga-ui/issues/90)\n-   **icons:** fix broken flags ([#96](https://github.com/TinkoffCreditSystems/taiga-ui/issues/96)) ([37d2e61](https://github.com/TinkoffCreditSystems/taiga-ui/commit/37d2e6101546e493cd6eec2ea47de8e2adac20d9))\n-   **kit:** `DataListWrapper` fix `emptyContent` not working ([#89](https://github.com/TinkoffCreditSystems/taiga-ui/issues/89)) ([f90d96f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f90d96fe5ef96fef6498c8bdb662b1cbcbb84176))\n-   **kit:** `InputDate` fix mobile calendar ([#104](https://github.com/TinkoffCreditSystems/taiga-ui/issues/104)) ([0fd20e5](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0fd20e58a3c22763b94881541a8e21b9bb2b39e0)), closes [#100](https://github.com/TinkoffCreditSystems/taiga-ui/issues/100)\n-   **kit:** `Select` fix template for falsy values ([#118](https://github.com/TinkoffCreditSystems/taiga-ui/issues/118)) ([c718e1f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c718e1fe6a2462f9dd9ae7a4c88d444796f589b7))\n\n### [2.1.2](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.1...v2.1.2) (2021-01-12)\n\n### Bug Fixes\n\n-   **core:** textfield style fix wrapper .transition mixin ([12206ea](https://github.com/TinkoffCreditSystems/taiga-ui/commit/12206ead01d35f88928aa574a32a4f27965116b2))\n\n### [2.1.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.0...v2.1.1) (2021-01-12)\n\n### Bug Fixes\n\n-   **core:** fix theme less import syntax for StackBlitz ([#86](https://github.com/TinkoffCreditSystems/taiga-ui/issues/86)) ([3b6d874](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3b6d87447bf99e67b38cb6962a88a7b752475ee8))\n\n## [2.1.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.0.1...v2.1.0) (2021-01-11)\n\n### Features\n\n-   **cdk:** `Media` add `playbackRate` input ([#83](https://github.com/TinkoffCreditSystems/taiga-ui/issues/83)) ([5351762](https://github.com/TinkoffCreditSystems/taiga-ui/commit/5351762299835c2e99777bb62a37e2a1cc217913))\n\n### [2.0.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.0.0...v2.0.1) (2021-01-11)\n\n### Features\n\n-   **core:** enable `window` scrolling instead of `tui-root` ([#80](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0190a8fb1aeb26870402f288f8ee933e36228e25))\n-   **demo:** fix play/pause icons, add eur and gbp currency ([#77](https://github.com/TinkoffCreditSystems/taiga-ui/issues/77)) ([360a3b1](https://github.com/TinkoffCreditSystems/taiga-ui/commit/360a3b1b2ab9ae4743bbcd693ac7df01fd7e3726))\n\n### Bug Fixes\n\n-   **addon-doc:** fix demo component on mobile ([#79](https://github.com/TinkoffCreditSystems/taiga-ui/issues/79)) ([7676d84](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7676d84513525f464303ec45e9ed07ddde55183a))\n-   **all:** fix .less relative paths for better IDE and StackBlitz support ([#81](https://github.com/TinkoffCreditSystems/taiga-ui/issues/81)) ([f061dcd](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f061dcd8dbff4ef0fe902260981be8bdf3ee8714))\n-   **doc:** prevent tabs underline above sidebar in Safari ([4ed25de](https://github.com/TinkoffCreditSystems/taiga-ui/commit/4ed25de66a78f8280c3865be9d588d0d813ddffa))\n\n## [2.0.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.5...v2.0.0) (2020-12-29)\n\n### Features\n\n-   **addon-doc:** add header ([#58](https://github.com/TinkoffCreditSystems/taiga-ui/issues/58)) ([1f2abd4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/1f2abd4358a442c9e4dbd1e5106d3081119f2c33))\n-   **demo:** add SSR support ([#64](https://github.com/TinkoffCreditSystems/taiga-ui/issues/64)) ([aaf0786](https://github.com/TinkoffCreditSystems/taiga-ui/commit/aaf07864b63697c7205cdaeab656a19195d394f4))\n-   **demo:** translate into eng ([#51](https://github.com/TinkoffCreditSystems/taiga-ui/issues/51)) ([04f9994](https://github.com/TinkoffCreditSystems/taiga-ui/commit/04f9994ae759fe3ca854cbf96e44cb0ebf8a30a8)), closes [#69](https://github.com/TinkoffCreditSystems/taiga-ui/issues/69) [#68](https://github.com/TinkoffCreditSystems/taiga-ui/issues/68)\n-   **icons:** add editor and color picker icons ([170f9a0](https://github.com/TinkoffCreditSystems/taiga-ui/commit/170f9a00fcd26abd8ef96b4dfcfc4dd4507707b0))\n\n### Bug Fixes\n\n-   **cdk:** `DialogHost` fix overlay above dialog issue ([3e16ec8](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3e16ec838457198753b8ee6830893ada50236b30))\n-   **cdk:** `tuiZoneOptimized` fix re-entering the zone ([#66](https://github.com/TinkoffCreditSystems/taiga-ui/issues/66)) ([6c5667c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6c5667cd75aa15530b5aed35fc0281df58966941))\n-   **core:** `PrimitiveTextfield` fix value content selecting ([6c85668](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6c85668903e796ce4d0af22d9396ac96864798d5))\n-   **core:** fix less style strings in font weight ([404b01f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/404b01f00a72383888afa456665a0c7295201abb))\n-   **doc:** `Page` fix package input name ([bdc32a7](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bdc32a72457663e59f0c10b06011c949d4791ea6))\n\n### [1.6.5](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.4...v1.6.5) (2020-12-11)\n\n### [1.6.4](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.3...v1.6.4) (2020-12-09)\n\n### [1.6.3](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.2...v1.6.3) (2020-12-08)\n\n### Bug Fixes\n\n-   **addon-commerce:** `InputCVC` fix font issue ([#54](https://github.com/TinkoffCreditSystems/taiga-ui/issues/54)) ([bf3a4bd](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bf3a4bd64b05c9796b7ded57566215c374283b74))\n\n### [1.6.2](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.1...v1.6.2) (2020-12-08)\n\n### Features\n\n-   **cdk:** `mustBePresent` add new operator ([#53](https://github.com/TinkoffCreditSystems/taiga-ui/issues/53)) ([0f12ac5](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0f12ac5b972529c4cbef8f0ff53ce7f75c59f3d2))\n-   **core:** move theme related styles into separate export ([#50](https://github.com/TinkoffCreditSystems/taiga-ui/issues/50)) ([c240274](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c240274104a7460c416e818876913920b5ddd53f))\n-   **kit:** `InputFile` add mode support ([#52](https://github.com/TinkoffCreditSystems/taiga-ui/issues/52)) ([dacf719](https://github.com/TinkoffCreditSystems/taiga-ui/commit/dacf719721a3097325542903d55a266fc57166a2))\n\n### [1.6.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.0...v1.6.1) (2020-12-04)\n\n### Features\n\n-   **all:** i18n for packages ([#49](https://github.com/TinkoffCreditSystems/taiga-ui/issues/49)) ([020fb59](https://github.com/TinkoffCreditSystems/taiga-ui/commit/020fb59b12959c0dfbda19db167bf9cc7f621f90))\n-   **core:** `TableMode` add new directive, remove `tuiTable` from `Mode` ([#48](https://github.com/TinkoffCreditSystems/taiga-ui/issues/48)) ([60da86f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/60da86f6f6e344dc802180c91132c41821b475b3))\n-   **kit:** refactor `Badge` and `BadgedContent` to use colors directly ([#46](https://github.com/TinkoffCreditSystems/taiga-ui/issues/46)) ([1961b9a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/1961b9a05ca6454d75c692fb1684dd85bb56de86))\n\n### Bug Fixes\n\n-   **core, addon-mobile:** include styles as library asset ([#47](https://github.com/TinkoffCreditSystems/taiga-ui/issues/47)) ([f4797ec](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f4797ec9ac09e9c442aece8258bd8b54272c9cbf))\n\n## [1.6.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.5.2...v1.6.0) (2020-12-02)\n\n### Features\n\n-   **core, kit, addons, demo, tools:** add packages ([854b544](https://github.com/TinkoffCreditSystems/taiga-ui/commit/854b544e87a8916703ecdb8624757b602b3e9a40))\n\n### [1.5.2](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.5.1...v1.5.2) (2020-11-25)\n\n### [1.5.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.5.0...v1.5.1) (2020-11-25)\n\n## [1.5.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.4.0...v1.5.0) (2020-11-24)\n\n### Features\n\n-   **cdk:** i18n for date fillers ([#43](https://github.com/TinkoffCreditSystems/taiga-ui/issues/43)) ([a5011ba](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a5011bad8ec585d517b384785e434c85c20385d9))\n\n## [1.4.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.3.0...v1.4.0) (2020-11-23)\n\n### Bug Fixes\n\n-   **cdk:** `FocusTrap` blur manually to prevent ExpressionChanged error ([#40](https://github.com/TinkoffCreditSystems/taiga-ui/issues/40)) ([339df70](https://github.com/TinkoffCreditSystems/taiga-ui/commit/339df706b34a2ab38614b55d13bdfc62bfb7482c))\n-   **cdk:** fix types in dist and remove metadata emit ([d92c0fa](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d92c0fa1310fdcce63214fd59fe63be5cc47d90d))\n-   **cdk:** rename `TUI_IDENTITY_MATCHER` to `TUI_DEFAULT_IDENTITY_MATCHER` to align to other constants ([#38](https://github.com/TinkoffCreditSystems/taiga-ui/issues/38)) ([3a9f2db](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3a9f2dbac044619c229de6f2c4e9ecdd678988ee))\n\n## [1.3.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.2.1...v1.3.0) (2020-11-18)\n\n### Features\n\n-   **cdk:** remove TuiValidation; AbstractControl works with pseudoInvalid boolean([#37](https://github.com/TinkoffCreditSystems/taiga-ui/issues/37)) ([ff8c921](https://github.com/TinkoffCreditSystems/taiga-ui/commit/ff8c92164939f180aa4b47afadef1a808e14569f))\n\n### [1.2.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.2.0...v1.2.1) (2020-11-16)\n\n## [1.2.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.1.0...v1.2.0) (2020-11-13)\n\n### Features\n\n-   **cdk:** `TUI_IDENTITY_MATCHER` consider two empty arrays equal ([#34](https://github.com/TinkoffCreditSystems/taiga-ui/issues/34)) ([e17c08d](https://github.com/TinkoffCreditSystems/taiga-ui/commit/e17c08d7eb209c6b389b4dc07a32ff9e792d70af))\n-   **cdk:** add @ng-web-apis/mutation-observer ([#32](https://github.com/TinkoffCreditSystems/taiga-ui/issues/32)) ([7459c70](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7459c70f272b464cd95959a7f66f039194d874ce))\n-   **cdk:** remove preventScroll polyfill ([#21](https://github.com/TinkoffCreditSystems/taiga-ui/issues/21)) ([68db75a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/68db75adc7bb3d7eea37709963e89a3ab2152f1e))\n-   **observables:** `stopPropagation` add operator ([d930e9d](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d930e9dcc0255c154089d1baceb4fe0a28e74604))\n\n### Bug Fixes\n\n-   **cdk:** `Control` fix typing ([#36](https://github.com/TinkoffCreditSystems/taiga-ui/issues/36)) ([7e1c91e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7e1c91e539ec81426eb4519080679016757c3a50))\n-   **cdk:** `TuiTime` fix currentLocal at 0:00 ([#16](https://github.com/TinkoffCreditSystems/taiga-ui/issues/16)) ([3f7786c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3f7786c62281c8c3c438b869afc7d317d0abba84))\n-   **observables:** `pressedObservable` ignore synthetic events ([28e6a04](https://github.com/TinkoffCreditSystems/taiga-ui/commit/28e6a045dbcb0c57b2afac44c5b4e784182cf3e9))\n\n## 1.1.0 (2020-09-26)\n\n### Features\n\n-   **cdk:** `Dialogs` add ability to create multiple custom dialogs ([#8](https://github.com/TinkoffCreditSystems/taiga-ui/issues/8)) ([7f18bfb](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7f18bfbb92199a7efcaeaa033dd0df86cb94974f))\n-   **cdk:** `Pure` add access to `this` ([#6](https://github.com/TinkoffCreditSystems/taiga-ui/issues/6)) ([4cf9e16](https://github.com/TinkoffCreditSystems/taiga-ui/commit/4cf9e161f415a151bb2522cec3793650041d7e7c))\n'}).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=n["\u0275\u0275defineComponent"]({type:a,selectors:[["changelog"]],decls:3,vars:1,consts:[[6,"header"],[3,"data"]],template:function(t,i){1&t&&(n["\u0275\u0275elementStart"](0,"tui-doc-page",0),n["\u0275\u0275i18nAttributes"](1,m),n["\u0275\u0275element"](2,"markdown",1),n["\u0275\u0275elementEnd"]()),2&t&&(n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("data",i.changelog))},directives:[d.a,f.a],styles:["markdown>:first-child,markdown>:nth-child(2){display:none}markdown>*{margin-left:20px}markdown a{text-decoration:none;color:var(--tui-link)}markdown a:active,markdown a:hover{color:var(--tui-link-hover)}markdown h2{font-size:2em;padding-bottom:.5em;margin-left:0;border-bottom:1px solid var(--tui-base-03)}markdown h3{text-transform:uppercase;font-weight:400;font-size:24px;margin:16px 0}markdown h3:not([id^=feat]):not([id^=bug]){font-size:28px;padding-bottom:.5em;margin:32px 0 0;border-bottom:1px solid var(--tui-base-03)}markdown h3[id^=breaking]{margin-left:20px;color:var(--tui-error-fill)}markdown code{color:#d45d8c}"],encapsulation:2,changeDetection:0}),a),b=((s=function t(){_classCallCheck(this,t)}).\u0275mod=n["\u0275\u0275defineNgModule"]({type:s}),s.\u0275inj=n["\u0275\u0275defineInjector"]({factory:function(t){return new(t||s)},imports:[[f.b,c.h,o.f.forChild(Object(c.o)(u))]]}),s)}}]);