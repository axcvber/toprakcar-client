import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  Upload: any;
};

export type AboutPage = {
  __typename?: 'AboutPage';
  aboutItem: Array<Maybe<ComponentMainListItem>>;
  contactInfo: Array<Maybe<ComponentMainMarkdownItem>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heading: ComponentHomeHero;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AboutPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AboutPageAboutItemArgs = {
  filters?: InputMaybe<ComponentMainListItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AboutPageContactInfoArgs = {
  filters?: InputMaybe<ComponentMainMarkdownItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  aboutItem?: InputMaybe<Array<InputMaybe<ComponentMainListItemInput>>>;
  contactInfo?: InputMaybe<Array<InputMaybe<ComponentMainMarkdownItemInput>>>;
  heading?: InputMaybe<ComponentHomeHeroInput>;
};

export type AboutPageRelationResponseCollection = {
  __typename?: 'AboutPageRelationResponseCollection';
  data: Array<AboutPageEntity>;
};

export type BodyStyle = {
  __typename?: 'BodyStyle';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BodyStyleRelationResponseCollection>;
  style: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BodyStyleLocalizationsArgs = {
  filters?: InputMaybe<BodyStyleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BodyStyleEntity = {
  __typename?: 'BodyStyleEntity';
  attributes?: Maybe<BodyStyle>;
  id?: Maybe<Scalars['ID']>;
};

export type BodyStyleEntityResponse = {
  __typename?: 'BodyStyleEntityResponse';
  data?: Maybe<BodyStyleEntity>;
};

export type BodyStyleEntityResponseCollection = {
  __typename?: 'BodyStyleEntityResponseCollection';
  data: Array<BodyStyleEntity>;
  meta: ResponseCollectionMeta;
};

export type BodyStyleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BodyStyleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BodyStyleFiltersInput>;
  not?: InputMaybe<BodyStyleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BodyStyleFiltersInput>>>;
  style?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BodyStyleInput = {
  style?: InputMaybe<Scalars['String']>;
};

export type BodyStyleRelationResponseCollection = {
  __typename?: 'BodyStyleRelationResponseCollection';
  data: Array<BodyStyleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Brand = {
  __typename?: 'Brand';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  attributes?: Maybe<Brand>;
  id?: Maybe<Scalars['ID']>;
};

export type BrandEntityResponse = {
  __typename?: 'BrandEntityResponse';
  data?: Maybe<BrandEntity>;
};

export type BrandEntityResponseCollection = {
  __typename?: 'BrandEntityResponseCollection';
  data: Array<BrandEntity>;
  meta: ResponseCollectionMeta;
};

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BrandInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type Color = {
  __typename?: 'Color';
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ColorRelationResponseCollection>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ColorLocalizationsArgs = {
  filters?: InputMaybe<ColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ColorEntity = {
  __typename?: 'ColorEntity';
  attributes?: Maybe<Color>;
  id?: Maybe<Scalars['ID']>;
};

export type ColorEntityResponse = {
  __typename?: 'ColorEntityResponse';
  data?: Maybe<ColorEntity>;
};

export type ColorEntityResponseCollection = {
  __typename?: 'ColorEntityResponseCollection';
  data: Array<ColorEntity>;
  meta: ResponseCollectionMeta;
};

export type ColorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ColorFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ColorFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ColorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ColorFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ColorInput = {
  color?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ColorRelationResponseCollection = {
  __typename?: 'ColorRelationResponseCollection';
  data: Array<ColorEntity>;
};

export type ComponentDynamicAccordion = {
  __typename?: 'ComponentDynamicAccordion';
  answer: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
};

export type ComponentDynamicAccordionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDynamicAccordionFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentDynamicAccordionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentDynamicAccordionFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentDynamicAccordionInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeBenefits = {
  __typename?: 'ComponentHomeBenefits';
  additionalBenefits: Array<Maybe<ComponentMainIconBox>>;
  benefitsHeading: ComponentMainHeading;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  leftSide: Array<Maybe<ComponentMainIconBox>>;
  rightSide: Array<Maybe<ComponentMainIconBox>>;
};


export type ComponentHomeBenefitsAdditionalBenefitsArgs = {
  filters?: InputMaybe<ComponentMainIconBoxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentHomeBenefitsLeftSideArgs = {
  filters?: InputMaybe<ComponentMainIconBoxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentHomeBenefitsRightSideArgs = {
  filters?: InputMaybe<ComponentMainIconBoxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeBenefitsInput = {
  additionalBenefits?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxInput>>>;
  benefitsHeading?: InputMaybe<ComponentMainHeadingInput>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  leftSide?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxInput>>>;
  rightSide?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxInput>>>;
};

export type ComponentHomeBrands = {
  __typename?: 'ComponentHomeBrands';
  id: Scalars['ID'];
  images: UploadFileRelationResponseCollection;
};


export type ComponentHomeBrandsImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeBrandsInput = {
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentHomeFaq = {
  __typename?: 'ComponentHomeFaq';
  faqHeading: ComponentMainHeading;
  faqItem: Array<Maybe<ComponentDynamicAccordion>>;
  id: Scalars['ID'];
};


export type ComponentHomeFaqFaqItemArgs = {
  filters?: InputMaybe<ComponentDynamicAccordionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeFaqInput = {
  faqHeading?: InputMaybe<ComponentMainHeadingInput>;
  faqItem?: InputMaybe<Array<InputMaybe<ComponentDynamicAccordionInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHomeFleets = {
  __typename?: 'ComponentHomeFleets';
  fleetsHeading: ComponentMainHeading;
  id: Scalars['ID'];
};

export type ComponentHomeFleetsInput = {
  fleetsHeading?: InputMaybe<ComponentMainHeadingInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHomeHero = {
  __typename?: 'ComponentHomeHero';
  description: Scalars['String'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentHomeHeroInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeServices = {
  __typename?: 'ComponentHomeServices';
  id: Scalars['ID'];
  serviceOptions: Array<Maybe<ComponentMainIconOption>>;
  servicesHeading: ComponentMainHeading;
};


export type ComponentHomeServicesServiceOptionsArgs = {
  filters?: InputMaybe<ComponentMainIconOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeServicesInput = {
  id?: InputMaybe<Scalars['ID']>;
  serviceOptions?: InputMaybe<Array<InputMaybe<ComponentMainIconOptionInput>>>;
  servicesHeading?: InputMaybe<ComponentMainHeadingInput>;
};

export type ComponentHomeSteps = {
  __typename?: 'ComponentHomeSteps';
  id: Scalars['ID'];
  stepOptions: Array<Maybe<ComponentMainIconOption>>;
  stepsHeading: ComponentMainHeading;
};


export type ComponentHomeStepsStepOptionsArgs = {
  filters?: InputMaybe<ComponentMainIconOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeStepsInput = {
  id?: InputMaybe<Scalars['ID']>;
  stepOptions?: InputMaybe<Array<InputMaybe<ComponentMainIconOptionInput>>>;
  stepsHeading?: InputMaybe<ComponentMainHeadingInput>;
};

export type ComponentMainHeading = {
  __typename?: 'ComponentMainHeading';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentMainHeadingInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentMainIconBox = {
  __typename?: 'ComponentMainIconBox';
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentMainIconBoxFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxFiltersInput>>>;
  not?: InputMaybe<ComponentMainIconBoxFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentMainIconBoxInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentMainIconOption = {
  __typename?: 'ComponentMainIconOption';
  description: Scalars['String'];
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentMainIconOptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainIconOptionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainIconOptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainIconOptionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentMainIconOptionInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentMainListItem = {
  __typename?: 'ComponentMainListItem';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentMainListItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainListItemFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainListItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainListItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentMainListItemInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentMainMarkdownItem = {
  __typename?: 'ComponentMainMarkdownItem';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentMainMarkdownItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainMarkdownItemFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainMarkdownItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainMarkdownItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentMainMarkdownItemInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FleetPage = {
  __typename?: 'FleetPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  headingImage: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<FleetPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FleetPageEntity = {
  __typename?: 'FleetPageEntity';
  attributes?: Maybe<FleetPage>;
  id?: Maybe<Scalars['ID']>;
};

export type FleetPageEntityResponse = {
  __typename?: 'FleetPageEntityResponse';
  data?: Maybe<FleetPageEntity>;
};

export type FleetPageInput = {
  headingImage?: InputMaybe<Scalars['ID']>;
};

export type FleetPageRelationResponseCollection = {
  __typename?: 'FleetPageRelationResponseCollection';
  data: Array<FleetPageEntity>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type FuelType = {
  __typename?: 'FuelType';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<FuelTypeRelationResponseCollection>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FuelTypeLocalizationsArgs = {
  filters?: InputMaybe<FuelTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FuelTypeEntity = {
  __typename?: 'FuelTypeEntity';
  attributes?: Maybe<FuelType>;
  id?: Maybe<Scalars['ID']>;
};

export type FuelTypeEntityResponse = {
  __typename?: 'FuelTypeEntityResponse';
  data?: Maybe<FuelTypeEntity>;
};

export type FuelTypeEntityResponseCollection = {
  __typename?: 'FuelTypeEntityResponseCollection';
  data: Array<FuelTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type FuelTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FuelTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<FuelTypeFiltersInput>;
  not?: InputMaybe<FuelTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FuelTypeFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FuelTypeInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type FuelTypeRelationResponseCollection = {
  __typename?: 'FuelTypeRelationResponseCollection';
  data: Array<FuelTypeEntity>;
};

export type GenericMorph = AboutPage | BodyStyle | Brand | Color | ComponentDynamicAccordion | ComponentHomeBenefits | ComponentHomeBrands | ComponentHomeFaq | ComponentHomeFleets | ComponentHomeHero | ComponentHomeServices | ComponentHomeSteps | ComponentMainHeading | ComponentMainIconBox | ComponentMainIconOption | ComponentMainListItem | ComponentMainMarkdownItem | FleetPage | FuelType | HomePage | I18NLocale | Location | Model | RentCar | Transmission | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VehicleClass;

export type HomePage = {
  __typename?: 'HomePage';
  benefits: ComponentHomeBenefits;
  brands: ComponentHomeBrands;
  createdAt?: Maybe<Scalars['DateTime']>;
  faq: ComponentHomeFaq;
  fleets: ComponentHomeFleets;
  hero: ComponentHomeHero;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  services: ComponentHomeServices;
  steps: ComponentHomeSteps;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  benefits?: InputMaybe<ComponentHomeBenefitsInput>;
  brands?: InputMaybe<ComponentHomeBrandsInput>;
  faq?: InputMaybe<ComponentHomeFaqInput>;
  fleets?: InputMaybe<ComponentHomeFleetsInput>;
  hero?: InputMaybe<ComponentHomeHeroInput>;
  services?: InputMaybe<ComponentHomeServicesInput>;
  steps?: InputMaybe<ComponentHomeStepsInput>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LocationEntity = {
  __typename?: 'LocationEntity';
  attributes?: Maybe<Location>;
  id?: Maybe<Scalars['ID']>;
};

export type LocationEntityResponse = {
  __typename?: 'LocationEntityResponse';
  data?: Maybe<LocationEntity>;
};

export type LocationEntityResponseCollection = {
  __typename?: 'LocationEntityResponseCollection';
  data: Array<LocationEntity>;
  meta: ResponseCollectionMeta;
};

export type LocationFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LocationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LocationInput = {
  address?: InputMaybe<Scalars['String']>;
};

export type LocationRelationResponseCollection = {
  __typename?: 'LocationRelationResponseCollection';
  data: Array<LocationEntity>;
};

export type Model = {
  __typename?: 'Model';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ModelRelationResponseCollection>;
  model: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ModelLocalizationsArgs = {
  filters?: InputMaybe<ModelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ModelEntity = {
  __typename?: 'ModelEntity';
  attributes?: Maybe<Model>;
  id?: Maybe<Scalars['ID']>;
};

export type ModelEntityResponse = {
  __typename?: 'ModelEntityResponse';
  data?: Maybe<ModelEntity>;
};

export type ModelEntityResponseCollection = {
  __typename?: 'ModelEntityResponseCollection';
  data: Array<ModelEntity>;
  meta: ResponseCollectionMeta;
};

export type ModelFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ModelFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ModelFiltersInput>;
  model?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ModelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ModelInput = {
  model?: InputMaybe<Scalars['String']>;
};

export type ModelRelationResponseCollection = {
  __typename?: 'ModelRelationResponseCollection';
  data: Array<ModelEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutPageLocalization?: Maybe<AboutPageEntityResponse>;
  createBodyStyle?: Maybe<BodyStyleEntityResponse>;
  createBodyStyleLocalization?: Maybe<BodyStyleEntityResponse>;
  createBrand?: Maybe<BrandEntityResponse>;
  createColor?: Maybe<ColorEntityResponse>;
  createColorLocalization?: Maybe<ColorEntityResponse>;
  createFleetPageLocalization?: Maybe<FleetPageEntityResponse>;
  createFuelType?: Maybe<FuelTypeEntityResponse>;
  createFuelTypeLocalization?: Maybe<FuelTypeEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createLocation?: Maybe<LocationEntityResponse>;
  createModel?: Maybe<ModelEntityResponse>;
  createModelLocalization?: Maybe<ModelEntityResponse>;
  createRentCar?: Maybe<RentCarEntityResponse>;
  createRentCarLocalization?: Maybe<RentCarEntityResponse>;
  createTransmission?: Maybe<TransmissionEntityResponse>;
  createTransmissionLocalization?: Maybe<TransmissionEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVehicleClass?: Maybe<VehicleClassEntityResponse>;
  createVehicleClassLocalization?: Maybe<VehicleClassEntityResponse>;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteBodyStyle?: Maybe<BodyStyleEntityResponse>;
  deleteBrand?: Maybe<BrandEntityResponse>;
  deleteColor?: Maybe<ColorEntityResponse>;
  deleteFleetPage?: Maybe<FleetPageEntityResponse>;
  deleteFuelType?: Maybe<FuelTypeEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteLocation?: Maybe<LocationEntityResponse>;
  deleteModel?: Maybe<ModelEntityResponse>;
  deleteRentCar?: Maybe<RentCarEntityResponse>;
  deleteTransmission?: Maybe<TransmissionEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVehicleClass?: Maybe<VehicleClassEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateBodyStyle?: Maybe<BodyStyleEntityResponse>;
  updateBrand?: Maybe<BrandEntityResponse>;
  updateColor?: Maybe<ColorEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFleetPage?: Maybe<FleetPageEntityResponse>;
  updateFuelType?: Maybe<FuelTypeEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateLocation?: Maybe<LocationEntityResponse>;
  updateModel?: Maybe<ModelEntityResponse>;
  updateRentCar?: Maybe<RentCarEntityResponse>;
  updateTransmission?: Maybe<TransmissionEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVehicleClass?: Maybe<VehicleClassEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAboutPageLocalizationArgs = {
  data?: InputMaybe<AboutPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBodyStyleArgs = {
  data: BodyStyleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBodyStyleLocalizationArgs = {
  data?: InputMaybe<BodyStyleInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBrandArgs = {
  data: BrandInput;
};


export type MutationCreateColorArgs = {
  data: ColorInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateColorLocalizationArgs = {
  data?: InputMaybe<ColorInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFleetPageLocalizationArgs = {
  data?: InputMaybe<FleetPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFuelTypeArgs = {
  data: FuelTypeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFuelTypeLocalizationArgs = {
  data?: InputMaybe<FuelTypeInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateLocationArgs = {
  data: LocationInput;
};


export type MutationCreateModelArgs = {
  data: ModelInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateModelLocalizationArgs = {
  data?: InputMaybe<ModelInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateRentCarArgs = {
  data: RentCarInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateRentCarLocalizationArgs = {
  data?: InputMaybe<RentCarInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTransmissionArgs = {
  data: TransmissionInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTransmissionLocalizationArgs = {
  data?: InputMaybe<TransmissionInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVehicleClassArgs = {
  data: VehicleClassInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateVehicleClassLocalizationArgs = {
  data?: InputMaybe<VehicleClassInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBodyStyleArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteColorArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFleetPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFuelTypeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteLocationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteModelArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteRentCarArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTransmissionArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVehicleClassArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBodyStyleArgs = {
  data: BodyStyleInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBrandArgs = {
  data: BrandInput;
  id: Scalars['ID'];
};


export type MutationUpdateColorArgs = {
  data: ColorInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFleetPageArgs = {
  data: FleetPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFuelTypeArgs = {
  data: FuelTypeInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateLocationArgs = {
  data: LocationInput;
  id: Scalars['ID'];
};


export type MutationUpdateModelArgs = {
  data: ModelInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateRentCarArgs = {
  data: RentCarInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTransmissionArgs = {
  data: TransmissionInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVehicleClassArgs = {
  data: VehicleClassInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  bodyStyle?: Maybe<BodyStyleEntityResponse>;
  bodyStyles?: Maybe<BodyStyleEntityResponseCollection>;
  brand?: Maybe<BrandEntityResponse>;
  brands?: Maybe<BrandEntityResponseCollection>;
  color?: Maybe<ColorEntityResponse>;
  colors?: Maybe<ColorEntityResponseCollection>;
  fleetPage?: Maybe<FleetPageEntityResponse>;
  fuelType?: Maybe<FuelTypeEntityResponse>;
  fuelTypes?: Maybe<FuelTypeEntityResponseCollection>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  location?: Maybe<LocationEntityResponse>;
  locations?: Maybe<LocationEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  model?: Maybe<ModelEntityResponse>;
  models?: Maybe<ModelEntityResponseCollection>;
  rentCar?: Maybe<RentCarEntityResponse>;
  rentCars?: Maybe<RentCarEntityResponseCollection>;
  transmission?: Maybe<TransmissionEntityResponse>;
  transmissions?: Maybe<TransmissionEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vehicleClass?: Maybe<VehicleClassEntityResponse>;
  vehicleClasses?: Maybe<VehicleClassEntityResponseCollection>;
};


export type QueryAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBodyStyleArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBodyStylesArgs = {
  filters?: InputMaybe<BodyStyleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryColorArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryColorsArgs = {
  filters?: InputMaybe<ColorFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFleetPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryFuelTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryFuelTypesArgs = {
  filters?: InputMaybe<FuelTypeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLocationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryModelArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryModelsArgs = {
  filters?: InputMaybe<ModelFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRentCarArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryRentCarsArgs = {
  filters?: InputMaybe<RentCarFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTransmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTransmissionsArgs = {
  filters?: InputMaybe<TransmissionFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVehicleClassArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryVehicleClassesArgs = {
  filters?: InputMaybe<VehicleClassFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RentCar = {
  __typename?: 'RentCar';
  body_style?: Maybe<BodyStyleEntityResponse>;
  brand?: Maybe<BrandEntityResponse>;
  color?: Maybe<ColorEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dailyPrice: Scalars['Int'];
  fuel_type?: Maybe<FuelTypeEntityResponse>;
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<RentCarRelationResponseCollection>;
  locations?: Maybe<LocationRelationResponseCollection>;
  model?: Maybe<ModelEntityResponse>;
  name: Scalars['String'];
  passengers: Scalars['Int'];
  transmission?: Maybe<TransmissionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicle_class?: Maybe<VehicleClassEntityResponse>;
};


export type RentCarLocalizationsArgs = {
  filters?: InputMaybe<RentCarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RentCarLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RentCarEntity = {
  __typename?: 'RentCarEntity';
  attributes?: Maybe<RentCar>;
  id?: Maybe<Scalars['ID']>;
};

export type RentCarEntityResponse = {
  __typename?: 'RentCarEntityResponse';
  data?: Maybe<RentCarEntity>;
};

export type RentCarEntityResponseCollection = {
  __typename?: 'RentCarEntityResponseCollection';
  data: Array<RentCarEntity>;
  meta: ResponseCollectionMeta;
};

export type RentCarFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RentCarFiltersInput>>>;
  body_style?: InputMaybe<BodyStyleFiltersInput>;
  brand?: InputMaybe<BrandFiltersInput>;
  color?: InputMaybe<ColorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dailyPrice?: InputMaybe<IntFilterInput>;
  fuel_type?: InputMaybe<FuelTypeFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<RentCarFiltersInput>;
  locations?: InputMaybe<LocationFiltersInput>;
  model?: InputMaybe<ModelFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RentCarFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RentCarFiltersInput>>>;
  passengers?: InputMaybe<IntFilterInput>;
  transmission?: InputMaybe<TransmissionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  vehicle_class?: InputMaybe<VehicleClassFiltersInput>;
};

export type RentCarInput = {
  body_style?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  color?: InputMaybe<Scalars['ID']>;
  dailyPrice?: InputMaybe<Scalars['Int']>;
  fuel_type?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  locations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  model?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  passengers?: InputMaybe<Scalars['Int']>;
  transmission?: InputMaybe<Scalars['ID']>;
  vehicle_class?: InputMaybe<Scalars['ID']>;
};

export type RentCarRelationResponseCollection = {
  __typename?: 'RentCarRelationResponseCollection';
  data: Array<RentCarEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Transmission = {
  __typename?: 'Transmission';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TransmissionRelationResponseCollection>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TransmissionLocalizationsArgs = {
  filters?: InputMaybe<TransmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransmissionEntity = {
  __typename?: 'TransmissionEntity';
  attributes?: Maybe<Transmission>;
  id?: Maybe<Scalars['ID']>;
};

export type TransmissionEntityResponse = {
  __typename?: 'TransmissionEntityResponse';
  data?: Maybe<TransmissionEntity>;
};

export type TransmissionEntityResponseCollection = {
  __typename?: 'TransmissionEntityResponseCollection';
  data: Array<TransmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type TransmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TransmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TransmissionFiltersInput>;
  not?: InputMaybe<TransmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TransmissionFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TransmissionInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type TransmissionRelationResponseCollection = {
  __typename?: 'TransmissionRelationResponseCollection';
  data: Array<TransmissionEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VehicleClass = {
  __typename?: 'VehicleClass';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<VehicleClassRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type VehicleClassLocalizationsArgs = {
  filters?: InputMaybe<VehicleClassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VehicleClassEntity = {
  __typename?: 'VehicleClassEntity';
  attributes?: Maybe<VehicleClass>;
  id?: Maybe<Scalars['ID']>;
};

export type VehicleClassEntityResponse = {
  __typename?: 'VehicleClassEntityResponse';
  data?: Maybe<VehicleClassEntity>;
};

export type VehicleClassEntityResponseCollection = {
  __typename?: 'VehicleClassEntityResponseCollection';
  data: Array<VehicleClassEntity>;
  meta: ResponseCollectionMeta;
};

export type VehicleClassFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VehicleClassFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<VehicleClassFiltersInput>;
  not?: InputMaybe<VehicleClassFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VehicleClassFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VehicleClassInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type VehicleClassRelationResponseCollection = {
  __typename?: 'VehicleClassRelationResponseCollection';
  data: Array<VehicleClassEntity>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', hero: { __typename?: 'ComponentHomeHero', title: string, description: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type RentCarsQueryVariables = Exact<{
  brandId?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type RentCarsQuery = { __typename?: 'Query', rentCars?: { __typename?: 'RentCarEntityResponseCollection', data: Array<{ __typename?: 'RentCarEntity', id?: string | null, attributes?: { __typename?: 'RentCar', name: string, dailyPrice: number, passengers: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, body_style?: { __typename?: 'BodyStyleEntityResponse', data?: { __typename?: 'BodyStyleEntity', attributes?: { __typename?: 'BodyStyle', style: string } | null } | null } | null, vehicle_class?: { __typename?: 'VehicleClassEntityResponse', data?: { __typename?: 'VehicleClassEntity', attributes?: { __typename?: 'VehicleClass', title: string } | null } | null } | null, fuel_type?: { __typename?: 'FuelTypeEntityResponse', data?: { __typename?: 'FuelTypeEntity', attributes?: { __typename?: 'FuelType', type: string } | null } | null } | null, transmission?: { __typename?: 'TransmissionEntityResponse', data?: { __typename?: 'TransmissionEntity', attributes?: { __typename?: 'Transmission', type: string } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetRentFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRentFiltersQuery = { __typename?: 'Query', brands?: { __typename?: 'BrandEntityResponseCollection', data: Array<{ __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', name: string } | null }> } | null, vehicleClasses?: { __typename?: 'VehicleClassEntityResponseCollection', data: Array<{ __typename?: 'VehicleClassEntity', id?: string | null, attributes?: { __typename?: 'VehicleClass', title: string } | null }> } | null, bodyStyles?: { __typename?: 'BodyStyleEntityResponseCollection', data: Array<{ __typename?: 'BodyStyleEntity', id?: string | null, attributes?: { __typename?: 'BodyStyle', style: string } | null }> } | null, fuelTypes?: { __typename?: 'FuelTypeEntityResponseCollection', data: Array<{ __typename?: 'FuelTypeEntity', id?: string | null, attributes?: { __typename?: 'FuelType', type: string } | null }> } | null, transmissions?: { __typename?: 'TransmissionEntityResponseCollection', data: Array<{ __typename?: 'TransmissionEntity', id?: string | null, attributes?: { __typename?: 'Transmission', type: string } | null }> } | null, colors?: { __typename?: 'ColorEntityResponseCollection', data: Array<{ __typename?: 'ColorEntity', id?: string | null, attributes?: { __typename?: 'Color', name: string, color: string } | null }> } | null };


export const HomePageDocument = gql`
    query HomePage {
  homePage {
    data {
      attributes {
        hero {
          title
          description
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const RentCarsDocument = gql`
    query RentCars($brandId: [ID], $locale: I18NLocaleCode) {
  rentCars(filters: {brand: {id: {in: $brandId}}}, locale: $locale) {
    data {
      id
      attributes {
        name
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        dailyPrice
        body_style {
          data {
            attributes {
              style
            }
          }
        }
        vehicle_class {
          data {
            attributes {
              title
            }
          }
        }
        fuel_type {
          data {
            attributes {
              type
            }
          }
        }
        transmission {
          data {
            attributes {
              type
            }
          }
        }
        passengers
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;

/**
 * __useRentCarsQuery__
 *
 * To run a query within a React component, call `useRentCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRentCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRentCarsQuery({
 *   variables: {
 *      brandId: // value for 'brandId'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useRentCarsQuery(baseOptions?: Apollo.QueryHookOptions<RentCarsQuery, RentCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RentCarsQuery, RentCarsQueryVariables>(RentCarsDocument, options);
      }
export function useRentCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RentCarsQuery, RentCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RentCarsQuery, RentCarsQueryVariables>(RentCarsDocument, options);
        }
export type RentCarsQueryHookResult = ReturnType<typeof useRentCarsQuery>;
export type RentCarsLazyQueryHookResult = ReturnType<typeof useRentCarsLazyQuery>;
export type RentCarsQueryResult = Apollo.QueryResult<RentCarsQuery, RentCarsQueryVariables>;
export const GetRentFiltersDocument = gql`
    query GetRentFilters {
  brands {
    data {
      id
      attributes {
        name
      }
    }
  }
  vehicleClasses {
    data {
      id
      attributes {
        title
      }
    }
  }
  bodyStyles {
    data {
      id
      attributes {
        style
      }
    }
  }
  fuelTypes {
    data {
      id
      attributes {
        type
      }
    }
  }
  transmissions {
    data {
      id
      attributes {
        type
      }
    }
  }
  colors {
    data {
      id
      attributes {
        name
        color
      }
    }
  }
}
    `;

/**
 * __useGetRentFiltersQuery__
 *
 * To run a query within a React component, call `useGetRentFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRentFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRentFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRentFiltersQuery(baseOptions?: Apollo.QueryHookOptions<GetRentFiltersQuery, GetRentFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRentFiltersQuery, GetRentFiltersQueryVariables>(GetRentFiltersDocument, options);
      }
export function useGetRentFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRentFiltersQuery, GetRentFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRentFiltersQuery, GetRentFiltersQueryVariables>(GetRentFiltersDocument, options);
        }
export type GetRentFiltersQueryHookResult = ReturnType<typeof useGetRentFiltersQuery>;
export type GetRentFiltersLazyQueryHookResult = ReturnType<typeof useGetRentFiltersLazyQuery>;
export type GetRentFiltersQueryResult = Apollo.QueryResult<GetRentFiltersQuery, GetRentFiltersQueryVariables>;