# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Applies new local tokens to `SearchHistory`, `SearchTop`, `SearchDropdown` and `SearchSuggestions` ([#150](https://github.com/vtex-sites/gatsby.store/pull/150))
- Applies CSS Modules to `Incentives` ([#147](https://github.com/vtex-sites/gatsby.store/pull/147))
- Applies new local tokens to `Footer` ([#147](https://github.com/vtex-sites/gatsby.store/pull/147))
- Applies new local tokens to `Breadcrumb` ([#146](https://github.com/vtex-sites/gatsby.store/pull/146))
- Applies new local tokens to `SlideOver` ([#142](https://github.com/vtex-sites/gatsby.store/pull/142))
- Applies new local tokens to `CartSidebar` ([#142](https://github.com/vtex-sites/gatsby.store/pull/142))
- Adds [MSW Addon](https://storybook.js.org/addons/msw-storybook-addon) ([#143](https://github.com/vtex-sites/gatsby.store/pull/143))
- Global tokens doc page on storybook ([#140](https://github.com/vtex-sites/gatsby.store/pull/140))
- Uses new cross selling API on PDP ([#137](https://github.com/vtex-sites/gatsby.store/pull/137))
- Applies new local tokens to `SuggestionProductCard` ([#135](https://github.com/vtex-sites/gatsby.store/pull/135))
- Applies new local tokens to `Navbar` ([#132](https://github.com/vtex-sites/gatsby.store/pull/132))

### Changed

- Cypress version from 9.5.4 to 9.6.0 to match WebOps' ([#151](https://github.com/vtex-sites/gatsby.store/pull/151))
- Renames and refactors the components of Search feature ([#150](https://github.com/vtex-sites/gatsby.store/pull/150))
- A flaky PLP infinite scroll test to be more stable ([#149](https://github.com/vtex-sites/gatsby.store/pull/149))
- Cypress version from 6.6.0 to 9.5.4 to match WebOps' ([#148](https://github.com/vtex-sites/gatsby.store/pull/148))
- Updates `IncentivesFooter` content ([#147](https://github.com/vtex-sites/gatsby.store/pull/147))
- Updated Getting Started doc page and overall improvements ([#140](https://github.com/vtex-sites/gatsby.store/pull/140))

### Deprecated

### Removed

### Fixed

- Transfers responsibility of `InputText`'s main attributes and callbacks to the renderer ([#144](https://github.com/vtex-sites/gatsby.store/pull/144))
- priceCurrency field on SEO meta data ([#139](https://github.com/vtex-sites/gatsby.store/pull/139))

## [22.26.0.beta] - 2022-07-01

### Added

- Applies new local tokens to `Filter` ([#128](https://github.com/vtex-sites/gatsby.store/pull/128))
- Applies new local tokens to `ProductGrid` ([#127](https://github.com/vtex-sites/gatsby.store/pull/127))
- Applies new local tokens to `Tiles` ([#120](https://github.com/vtex-sites/gatsby.store/pull/120))
- Applies new local tokens to `Accordion` ([#126](https://github.com/vtex-sites/gatsby.store/pull/126))
- Applies new local tokens to `ImageGallery` ([#125](https://github.com/vtex-sites/gatsby.store/pull/125))
- Creates Doc page for `Regionalization` Feature ([#124](https://github.com/vtex-sites/gatsby.store/pull/124))
- Applies new local tokens to `RegionalizationBar` ([#124](https://github.com/vtex-sites/gatsby.store/pull/124))
- Applies new local tokens to `Modal` and `RegionalizationModal` ([#123](https://github.com/vtex-sites/gatsby.store/pull/123))
- Displays the `Sandbox` tab on the storybook along with `Viewport` toolbar and `Accessibility` checks ([#115](https://github.com/vtex-sites/gatsby.store/pull/115))
- PriceRange component to PLP and StoryBook ([#112](https://github.com/vtex-sites/gatsby.store/pull/112))
- Applies new local tokens to `EmptyState` ([#113](https://github.com/vtex-sites/gatsby.store/pull/113))
- Applies new local tokens to `Dropdown` ([#111](https://github.com/vtex-sites/gatsby.store/pull/111))
- Creates and styles `Dropdown` component ([#111](https://github.com/vtex-sites/gatsby.store/pull/111))
- Creates new Storybook section `BestPractices` ([#110](https://github.com/vtex-sites/gatsby.store/pull/110))
- 301 redirects when visiting old VTEX product routes ([#87](https://github.com/vtex-sites/gatsby.store/pull/87))

### Changed

- Move logo's svg code from JS into static asset ([#116](https://github.com/vtex-sites/gatsby.store/pull/116))
- Upgrade dependencies ([#114](https://github.com/vtex-sites/gatsby.store/pull/114))
- Storybook's version from 6.4.20 to 6.5.9 ([#109](https://github.com/vtex-sites/gatsby.store/pull/109))
- Unifies `Link` component usage by adding support for both external and client-side links ([#103](https://github.com/vtex-sites/gatsby.store/pull/103))

### Fixed

- A test related infinite scroll pagination that only failed in development mode ([#118](https://github.com/vtex-sites/gatsby.store/pull/118))
- SonarQube warnings and error ([#145](https://github.com/vtex-sites/gatsby.store/pull/145))
- `ImageGallerySelector` scroll that isn't working on Safari ([##121](https://github.com/vtex-sites/gatsby.store/pull/121))
- Some console errors when running the storybook ([#115](https://github.com/vtex-sites/gatsby.store/pull/115))
- Status code when error occurs (404/500) ([#108](https://github.com/vtex-sites/gatsby.store/pull/108))

## [22.23.0.beta] - 2022-06-10

### Added

- The search input now includes the last 4 previously searched terms (`SearchHistory`) ([#67](https://github.com/vtex-sites/gatsby.store/pull/67)).
- The top 5 searches (`SuggestionsTopSearch`) are now integrated into the search input ([#67](https://github.com/vtex-sites/gatsby.store/pull/67)).
- Applies new local tokens to `OutOfStock` ([#99](https://github.com/vtex-sites/gatsby.store/pull/99))
- Applies new local tokens to `CartItem` ([#95](https://github.com/vtex-sites/gatsby.store/pull/95))
- Applies new local tokens to `ProductTitle` ([#84](https://github.com/vtex-sites/gatsby.store/pull/84))
- Creates `Radio` component ([#89](https://github.com/vtex-sites/gatsby.store/pull/89))
- Applies new local tokens to `Price` ([#83](https://github.com/vtex-sites/gatsby.store/pull/83))
- Applies new local tokens to `Alert` ([#77](https://github.com/vtex-sites/gatsby.store/pull/77))
- Refactors `Button` component and adds Storybook doc ([#52](https://github.com/vtex-sites/gatsby.store/pull/52))
- Add Storybook documentation for `QuantitySelector` component ([#85](https://github.com/vtex-sites/gatsby.store/pull/85))
- Applies new local tokens to `Checkbox` ([#61](https://github.com/vtex-sites/gatsby.store/pull/61))
- Attachments to CartItem id ([#53](https://github.com/vtex-sites/gatsby.store/pull/53))
- Adds tests for analytics events on `CartItem` ([#66](https://github.com/vtex-sites/gatsby.store/pull/66))
- Applies new local tokens to `Incentives` ([#49](https://github.com/vtex-sites/gatsby.store/pull/49))
- Uses new WebOps Incremental Static Builds ([#47](https://github.com/vtex-sites/gatsby.store/pull/47))
- `add_to_cart` and `remove_from_cart` analytics events to `CartItem` ([#43](https://github.com/vtex-sites/gatsby.store/pull/43))

### Changed

- Merges UIProvider and ModalProvider into a single context provider ([#93](https://github.com/vtex-sites/gatsby.store/pull/93))
- Synchronizes the components' code of both starters ([#94](https://github.com/vtex-sites/gatsby.store/pull/94))
- Uses `--docs` option on storybook script ([#97](https://github.com/vtex-sites/gatsby.store/pull/97))
- Improves storybook doc's table rows ([#96](https://github.com/vtex-sites/gatsby.store/pull/96))
- Updates `Checkbox` tokens ([#89](https://github.com/vtex-sites/gatsby.store/pull/89))
- Uses `Hero` component from FSUI ([#92](https://github.com/vtex-sites/gatsby.store/pull/92))
- Uses CSS Modules on `Checkbox` component ([#81](https://github.com/vtex-sites/gatsby.store/pull/81))
- Uses CSS Modules on `QuantitySelector` component ([#75](https://github.com/vtex-sites/gatsby.store/pull/75))
- `OutOfStock` component ([#70](https://github.com/vtex-sites/gatsby.store/pull/70))
- Displays 5 products on product suggestion for better mobile experience ([#73](https://github.com/vtex-sites/gatsby.store/pull/73))
- Uses CSS Modules on `ProductGallery` section ([#54](https://github.com/vtex-sites/gatsby.store/pull/54))
- Uses CSS Modules on `ProductCard` component ([#54](https://github.com/vtex-sites/gatsby.store/pull/54))
- Uses CSS Modules on `ProductGrid` component ([#54](https://github.com/vtex-sites/gatsby.store/pull/54))
- Upgrade Gatsby and other dependencies ([#59](https://github.com/vtex-sites/gatsby.store/pull/59))
- LCP images to be fetched with a higher priority and improve the score ([#51](https://github.com/vtex-sites/gatsby.store/pull/51))
- Applies styles to `Toast` ([#28](https://github.com/vtex-sites/gatsby.store/pull/28))
- Added base files (`Getting Started`, `Theming`, `Colors`, `Typography` and `Icons`) to Storybook ([#26](https://github.com/vtex-sites/gatsby.store/pull/26))
- Updated tokens' naming scheme ([#26](https://github.com/vtex-sites/gatsby.store/pull/26))
- Uses CSS Modules to import CSS at `ImageGallery` component ([#41](https://github.com/vtex-sites/gatsby.store/pull/41))

### Removed

- Fix Region Input's behavior when setting zipCode ([#98](https://github.com/vtex-sites/gatsby.store/pull/98))
- Removes unnecessary logic in suspense hooks ([#91](https://github.com/vtex-sites/gatsby.store/pull/91))
- `Hero` component from `components/ui`([#92](https://github.com/vtex-sites/gatsby.store/pull/92))
- Unused `-default` at css variables ([#82](https://github.com/vtex-sites/gatsby.store/pull/82))

### Fixed

- Duplicated query at `useTopSearch` hook ([#105](https://github.com/vtex-sites/gatsby.store/pull/105))
- Use `SpotPrice` for low/high price on `aggretateOffer` ([#102](https://github.com/vtex-sites/gatsby.store/pull/102))
- The search input showing more than 5 suggested products ([#67](https://github.com/vtex-sites/gatsby.store/pull/67)).
- The search input's dropdown not closing when a suggested product was selected ([#67](https://github.com/vtex-sites/gatsby.store/pull/67).
- Region Input ([#98](https://github.com/vtex-sites/gatsby.store/pull/98))
- Search suggestions missing locale info ([#69](https://github.com/vtex-sites/gatsby.store/pull/69))
- Limit custom props only for `img` and `link` tags ([#60](https://github.com/vtex-sites/gatsby.store/pull/60))
- `ArrowsClockwise` icon closing tag ([#57](https://github.com/vtex-sites/gatsby.store/pull/57))
- Fix Storybook `@reach/router` issue ([#48](https://github.com/vtex-sites/gatsby.store/pull/48))

## [22.19.0.beta] - 2022-05-06

### Added

- An initial integration of the search term & product suggestions ([#16](https://github.com/vtex-sites/gatsby.store/pull/16)).
- Suspend the `useProductsQuery`, the `ProductShelve`s and `ProductTile`s ([#10](https://github.com/vtex-sites/gatsby.store/pull/10)).
- Applies new local tokens to `Select` ([#17](https://github.com/vtex-sites/gatsby.store/pull/17))
- Applies new local tokens to `Input Text` ([#15](https://github.com/vtex-sites/gatsby.store/pull/15))
- `Toggle` component ([#14](https://github.com/vtex-sites/gatsby.store/pull/14))
- Applies new local tokens to `Link` ([#19](https://github.com/vtex-sites/gatsby.store/pull/19))
- `ImageGallery` to PDP ([#6](https://github.com/vtex-sites/gatsby.store/pull/6))
- New items in the `pull_request_template.md` ([#12](https://github.com/vtex-sites/gatsby.store/pull/12))
- Integrates with `search.query` event API ([#2](https://github.com/vtex-sites/gatsby.store/pull/2))
- Applies new local tokens to `Badge` ([#462](https://github.com/vtex-sites/base.store/pull/462))
- Applies new local tokens to `Hero` ([#435](https://github.com/vtex-sites/base.store/pull/435))
- Applies new local tokens to `Quantity Selector` ([#448](https://github.com/vtex-sites/base.store/pull/448))
- Applies new local tokens to `ProductShelf` component ([#464](https://github.com/vtex-sites/base.store/pull/464))
- Adds Storybook configs ([#463](https://github.com/vtex-sites/base.store/pull/463))
- Adds VTEX search tracking script. With this we will populate `TopSearches` and `Autocomplete` indices ([#389](https://github.com/vtex-sites/base.store/pull/389))
- Add `RegionalizationBar`, `RegionalizationButton` components and integrates it on Mobile and Desktop devices ([#424](https://github.com/vtex-sites/base.store/pull/424)).

### Changed

- Uses `ProductCard` component from FSUI instead of `Card` ([#34](https://github.com/vtex-sites/gatsby.store/pull/34))
- General code improvements at `ImageGallerySelector` ([#40](https://github.com/vtex-sites/gatsby.store/pull/40))
- Adjust `Alert` component for `CMS` ([#29](https://github.com/vtex-sites/gatsby.store/pull/29))
- Accessibility tests to output what were the actual violations, not just how many ([#23](https://github.com/vtex-sites/gatsby.store/pull/23)).
- `SearchHistory`, `Suggestions`, and `SuggestionsTopSearch` components to reuse shared markup and styles ([#7](https://github.com/vtex-sites/gatsby.store/pull/7)).
- `CHANGELOG.md` to link to PRs and fixed some markdown ([#24](https://github.com/vtex-sites/gatsby.store/pull/24)).
- `useQuery`, at `usePersonQuery`, in favor of `request` ([#10](https://github.com/vtex-sites/gatsby.store/pull/10)).
- Renames `Badge` component prop `interactive` to `actionable`([#25](https://github.com/vtex-sites/gatsby.store/pull/25))
- Update Regionalization input to use the `TextInput` component ([#9](https://github.com/vtex-sites/gatsby.store/pull/9))
- Update `RegionalizationButton` and `RegionalizationBar` to show the postal code ([#8](https://github.com/vtex-sites/gatsby.store/pull/8))
- `ImageGallery` now uses native scroll instead of useSlider ([#6](https://github.com/vtex-sites/gatsby.store/pull/6))
- Fixes `ProductCard` bordered variant ([#5](https://github.com/vtex-sites/gatsby.store/pull/5))
- Changed name from BaseStore to GatsbyStore ([#497](https://github.com/vtex-sites/base.store/pull/497))
- Applies new local tokens to `BannerText` ([#470](https://github.com/vtex-sites/base.store/pull/470))
- Update the `Incentives` component to handle CMS data ([#474](https://github.com/vtex-sites/base.store/pull/474)).

### Removed

- The GitHub Action that was running Lighthouse, as it was frequently failing and WebOps already runs it ([#484](https://github.com/vtex-sites/base.store/pull/484)).
- Removes CSS imports of components that are not being used ([#476](https://github.com/vtex-sites/base.store/pull/476))

### Fixed

- Fix `ImageGallerySelector` arrow toggle according to scroll position ([#27](https://github.com/vtex-sites/gatsby.store/pull/27))
- Fix hydration mismatch on PLPs at `?page=1` pagination ([#3](https://github.com/vtex-sites/gatsby.store/pull/3))
- A bugged vertical gap with the `EmptyState` component inside the cart ([#20](https://github.com/vtex-sites/gatsby.store/pull/20)).
- Some pages missing component styles because they weren't imported ([#20](https://github.com/vtex-sites/gatsby.store/pull/20)).
- Fix Storybook initialization ([#492](https://github.com/vtex-sites/base.store/pull/492))
- Fix styling issue on Regionalization Modal by adding the missing imports in layout.scss ([#488](https://github.com/vtex-sites/base.store/pull/488))
- Fix unused CSS problem by separating imports into different files for each page ([#473](https://github.com/vtex-sites/base.store/pull/473))
- Potential layout shift on `Hero` section fixed ([#472](https://github.com/vtex-sites/base.store/pull/472))
- Fix layout section spacings style ([#469](https://github.com/vtex-sites/base.store/pull/469))

## [0.2.2] - 2022-04-07

### Added

- Add `InputText` component ([#440](https://github.com/vtex-sites/base.store/pull/440))

### Changed

- Enable Stylelint for some files and apply the rules after the Theme structure ([#430](https://github.com/vtex-sites/base.store/pull/430))
- Upgrades to React18 ([#461](https://github.com/vtex-sites/base.store/pull/461))
- Uses new Automatic JSX runtime ([#460](https://github.com/vtex-sites/base.store/pull/460))
- Migrates Gatsby config files to TypeScript ([#373](https://github.com/vtex-sites/base.store/pull/373))
- Migrates to Gatsby v4 ([#456](https://github.com/vtex-sites/base.store/pull/456))
- Reduces the padding of `Breadcrumb`component ([#453](https://github.com/vtex-sites/base.store/pull/453))

### Fixed

- Fix `SlideOver` scroll background behavior ([#420](https://github.com/vtex-sites/base.store/pull/420))
- `SearchInput` margin left on mobile ([#457](https://github.com/vtex-sites/base.store/pull/457))
- Fixed BaseStore logo right margin on mobile devices ([#455](https://github.com/vtex-sites/base.store/pull/455))
- Fix PLP scroll bug after applying filters for the mobile version ([#454](https://github.com/vtex-sites/base.store/pull/454))

## [0.2.1] - 2022-04-04

### Added

- `RegionalizationModal` component ([#426](https://github.com/vtex-sites/base.store/pull/426))
- Add preloadQuery function ([#445](https://github.com/vtex-sites/base.store/pull/445))
- New file `styles/global/tokens.scss` containing all global design tokens. ([#442](https://github.com/vtex-sites/base.store/pull/442))
- Send channel string as search facet ([#428](https://github.com/vtex-sites/base.store/pull/428))
- Add the brand new BaseStore logo ([#447](https://github.com/vtex-sites/base.store/pull/447))
- Add `Dropdown` component in `Breadcrumb` component ([#436](https://github.com/vtex-sites/base.store/pull/436))

### Changed

- Replaces `onDismissTransition` callback by a Provider that handles opening/closing of modal/slide over's behavior ([#426](https://github.com/vtex-sites/base.store/pull/426))
- `OutOfStock` integrated with regionalization ([#441](https://github.com/vtex-sites/base.store/pull/441))
- Move `ProductShelf` and `ProductTiles` to the client side ([#431](https://github.com/vtex-sites/base.store/pull/431))
- Drop gatsby-plugin-image in favor of custom/simpler component ([#401](https://github.com/vtex-sites/base.store/pull/401))
- Replace `stylelint-config-rational-order` with `stylelint-config-recess-order` ([#415](https://github.com/vtex-sites/base.store/pull/415))
- Simplify filters component by using `useReducer` instead of multiple `useState` ([#422](https://github.com/vtex-sites/base.store/pull/422))
- Applies new local tokens to `ProductCard`. ([#425](https://github.com/vtex-sites/base.store/pull/425))
- `OutOfStock` style and success message. ([#399](https://github.com/vtex-sites/base.store/pull/399))
- Apply new local tokens to `Button` ([#442](https://github.com/vtex-sites/base.store/pull/442))
- Gather all `Button` variants in the folder (`ButtonBuy`, `ButtonLink`, `ButtonIcon`, `ButtonSignIn`) ([#442](https://github.com/vtex-sites/base.store/pull/442))

### Fixed

- CSS Warnings ([#434](https://github.com/vtex-sites/base.store/pull/434))
- Fix alert banner colors ([#442](https://github.com/vtex-sites/base.store/pull/442))

## [0.2.0] - 2022-04-01

### Added

- Add hideUnavailableItems at store.config ([#400](https://github.com/vtex-sites/base.store/pull/400))
- Sections component with `content-visibility: auto` ([#368](https://github.com/vtex-sites/base.store/pull/368))
- Webpack Bundle analyzer ([#357](https://github.com/vtex-sites/base.store/pull/357))
- `GatsbyLink` to `Link` ui component. ([#329](https://github.com/vtex-sites/base.store/pull/329))
- `Skeleton` loading components. ([#317](https://github.com/vtex-sites/base.store/pull/317))
- `SuggestionsTopSearch` component ([#355](https://github.com/vtex-sites/base.store/pull/355))
- `PostalCodeInput` component and `usePostalCode` hook. ([#322](https://github.com/vtex-sites/base.store/pull/322))
- `SuggestionProductCard` component. ([#359](https://github.com/vtex-sites/base.store/pull/359))
- `EmptyState` component. ([#367](https://github.com/vtex-sites/base.store/pull/367))
- `EmptyState` at the `ProductGallery` section. ([#367](https://github.com/vtex-sites/base.store/pull/367))
- `IconSVG` component to load SVG Icons. ([#378](https://github.com/vtex-sites/base.store/pull/378))
- `Suggestions` component. ([#372](https://github.com/vtex-sites/base.store/pull/372))
- `SearchHistory` component. ([#391](https://github.com/vtex-sites/base.store/pull/391))
- `Badge` interactive variation. ([#396](https://github.com/vtex-sites/base.store/pull/396))
- New folder `styles/global` containing all global styles. ([#407](https://github.com/vtex-sites/base.store/pull/407))
- Session mutation when the user enters a new postal code. ([#392](https://github.com/vtex-sites/base.store/pull/392))

### Changed

- Move inline styles to external stylesheet to improve TBT ([#408](https://github.com/vtex-sites/base.store/pull/408))
- Changed `ProductGallery` and `EmptyGallery` styles to make the search results page ([#387](https://github.com/vtex-sites/base.store/pull/387))
- Moved all icons to use Icon component ([#386](https://github.com/vtex-sites/base.store/pull/386))
- Moved common/IconsSVG to ui/Icons ([#386](https://github.com/vtex-sites/base.store/pull/386))
- Moved EmptyState from common to ui folder ([#386](https://github.com/vtex-sites/base.store/pull/386))
- Removed fit-in property from image component ([#375](https://github.com/vtex-sites/base.store/pull/375))
- Sections are now self-contained ([#371](https://github.com/vtex-sites/base.store/pull/371))
- Moves icons to `/static/icons` folder ([#357](https://github.com/vtex-sites/base.store/pull/357))
- Replaces page type redirects, a.k.a. `/account`, `/login` to a corresponding file in `/pages` folder ([#310](https://github.com/vtex-sites/base.store/pull/310))
- Replaces `let` declarations for `useRef` for better React compatibility ([#319](https://github.com/vtex-sites/base.store/pull/319))
- Refactors cart sidebar ([#325](https://github.com/vtex-sites/base.store/pull/325))
- `BreadcrumbWrapper` from components/ui folder to `Breadcrumb` at components/sections ([#326](https://github.com/vtex-sites/base.store/pull/326))
- Replace relative stylesheets imports with absolute path ([#349](https://github.com/vtex-sites/base.store/pull/349))
- Moves some `Filter` component logic to the API ([#321](https://github.com/vtex-sites/base.store/pull/321))
- `Sort` and `Button Filter` (Mobile) `Skeleton's` loading criteria ([#362](https://github.com/vtex-sites/base.store/pull/362))
- Keep the latest `Filter` component state (Mobile) ([#362](https://github.com/vtex-sites/base.store/pull/362))
- Implements the expanded mode of `Searchbar` in mobile devices. ([#369](https://github.com/vtex-sites/base.store/pull/369))
- Updates Lighthouse and Cypress URL with valid product links ([#369](https://github.com/vtex-sites/base.store/pull/369))
- `Hero` image responsive sizes for mobile and desktop. ([#363](https://github.com/vtex-sites/base.store/pull/363))
- `Badge` variants names ([#381](https://github.com/vtex-sites/base.store/pull/381))
- `Tiles` and `Tile` to use semantic list elements. ([#383](https://github.com/vtex-sites/base.store/pull/383))
- `postalCode` from storage to Session context. ([#388](https://github.com/vtex-sites/base.store/pull/388))
- Updates all tokens naming and simplifies the global styles. ([#407](https://github.com/vtex-sites/base.store/pull/407))
- Changes `theme.scss` file to `global/tokens.scss`. ([#407](https://github.com/vtex-sites/base.store/pull/407))

### Deprecated

- useWindowDimensions hook ([#328](https://github.com/vtex-sites/base.store/pull/328))

### Removed

- Frontend computation in favor of backend processing ([#411](https://github.com/vtex-sites/base.store/pull/411))
- Removing hooks folder and migrating these hooks to sdk ou inline them on components ([#377](https://github.com/vtex-sites/base.store/pull/377))
- gatsby-plugin-offline due to CLS on recurrent users ([#348](https://github.com/vtex-sites/base.store/pull/348))
- useWindowDimensions hook ([#340](https://github.com/vtex-sites/base.store/pull/340))
- Removes unused `<FacetedFilter/>` component ([#345](https://github.com/vtex-sites/base.store/pull/345))
- Unnecessary map at hooks ([#323](https://github.com/vtex-sites/base.store/pull/323))
- API style redirects from `/_v/private/graphql` since they have no effect ([#310](https://github.com/vtex-sites/base.store/pull/310))
- Display box from `<ProductCard/>` component ([#354](https://github.com/vtex-sites/base.store/pull/354))
- `useTotalCount` hook ([#362](https://github.com/vtex-sites/base.store/pull/362))
- Phosphor-react library ([#378](https://github.com/vtex-sites/base.store/pull/378))
- `main::store::postalCode` value from storage. ([#388](https://github.com/vtex-sites/base.store/pull/388))

### Fixed

- Unnecessary app rerender after login feature ([#418](https://github.com/vtex-sites/base.store/pull/418))
- Fix typos found across the codebase ([#412](https://github.com/vtex-sites/base.store/pull/412))
- Fix border style for Product Card and its skeleton on mobile ([#379](https://github.com/vtex-sites/base.store/pull/379))
- The divisor for the `Breadcrumb` component not rendering valid HTML. ([#365](https://github.com/vtex-sites/base.store/pull/365))
- useBuyButton/useRemoveButton hooks with inconsistent typings/behaviors ([#360](https://github.com/vtex-sites/base.store/pull/360))
- React tree re-rendering ([#328](https://github.com/vtex-sites/base.store/pull/328))
- Footer rendering pipeline ([#328](https://github.com/vtex-sites/base.store/pull/328))
- Scroll lock when transitioning pages on mobile via `SlideOver` component navigation ([#344](https://github.com/vtex-sites/base.store/pull/344))
- Filter Button specificity on desktop ([#346](https://github.com/vtex-sites/base.store/pull/346))
- Filter facets are not being selected on mobile ([#380](https://github.com/vtex-sites/base.store/pull/380))
- `CartItem` image size and truncate long product's title ([#405](https://github.com/vtex-sites/base.store/pull/405))
- Entrusting the definition of the cursor property to the browser ([#419](https://github.com/vtex-sites/base.store/pull/419))

## [0.1.1] - 2022-02-07

### Added

- Feat: Style IconButton ([#290](https://github.com/vtex-sites/base.store/pull/290))

### Changed

- Chore: tweaks search page ([#293](https://github.com/vtex-sites/base.store/pull/293))
- Extract UISelect from Sort to its own component ([#299](https://github.com/vtex-sites/base.store/pull/299))
- Feat: lazy loading and improvements (CLS) ([#300](https://github.com/vtex-sites/base.store/pull/300))

### Fixed

- SonarQube warning ([#297](https://github.com/vtex-sites/base.store/pull/297))
- General fixes on Beta component ([#287](https://github.com/vtex-sites/base.store/pull/287))
- Fix/Adjust inappropriate rerenders ([#304](https://github.com/vtex-sites/base.store/pull/304))

## [0.1.0] - 2022-02-01

Version released for the Closed Beta

### Added

- This changelog
