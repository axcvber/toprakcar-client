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
  logoSvg: UploadFileEntityResponse;
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
  logoSvg?: InputMaybe<Scalars['ID']>;
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
  rent_cars?: Maybe<RentCarRelationResponseCollection>;
};


export type ComponentHomeFleetsRent_CarsArgs = {
  filters?: InputMaybe<RentCarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeFleetsInput = {
  fleetsHeading?: InputMaybe<ComponentMainHeadingInput>;
  id?: InputMaybe<Scalars['ID']>;
  rent_cars?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
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
  image: UploadFileEntityResponse;
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
  image?: InputMaybe<Scalars['ID']>;
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

export type ComponentVehicleAdditionalRentServices = {
  __typename?: 'ComponentVehicleAdditionalRentServices';
  dailyPrice: Scalars['Float'];
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type ComponentVehicleAdditionalRentServicesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVehicleAdditionalRentServicesFiltersInput>>>;
  dailyPrice?: InputMaybe<FloatFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentVehicleAdditionalRentServicesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVehicleAdditionalRentServicesFiltersInput>>>;
};

export type ComponentVehicleAdditionalRentServicesInput = {
  dailyPrice?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
};

export type ComponentVehicleFeatureList = {
  __typename?: 'ComponentVehicleFeatureList';
  id: Scalars['ID'];
  option: Scalars['String'];
  optionsList: Scalars['String'];
};

export type ComponentVehicleMoneyBackLabel = {
  __typename?: 'ComponentVehicleMoneyBackLabel';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentVehicleMoneyBackLabelFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVehicleMoneyBackLabelFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentVehicleMoneyBackLabelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVehicleMoneyBackLabelFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentVehicleMoneyBackLabelInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentVehicleOverview = {
  __typename?: 'ComponentVehicleOverview';
  icon: UploadFileRelationResponseCollection;
  id: Scalars['ID'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
};


export type ComponentVehicleOverviewIconArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentVehicleOverviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVehicleOverviewFiltersInput>>>;
  not?: InputMaybe<ComponentVehicleOverviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVehicleOverviewFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentVehicleOverviewInput = {
  icon?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentVehiclePrice = {
  __typename?: 'ComponentVehiclePrice';
  currentPrice: Scalars['Float'];
  fullPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  showDiscounted?: Maybe<Scalars['Boolean']>;
};

export type ComponentVehiclePriceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVehiclePriceFiltersInput>>>;
  currentPrice?: InputMaybe<FloatFilterInput>;
  fullPrice?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentVehiclePriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVehiclePriceFiltersInput>>>;
  showDiscounted?: InputMaybe<BooleanFilterInput>;
};

export type ComponentVehiclePriceInput = {
  currentPrice?: InputMaybe<Scalars['Float']>;
  fullPrice?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  showDiscounted?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentVehicleSidebarOptions = {
  __typename?: 'ComponentVehicleSidebarOptions';
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  label: Scalars['String'];
  modalContent?: Maybe<Scalars['String']>;
};

export type ComponentVehicleSidebarOptionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVehicleSidebarOptionsFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  modalContent?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentVehicleSidebarOptionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVehicleSidebarOptionsFiltersInput>>>;
};

export type ComponentVehicleSidebarOptionsInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  modalContent?: InputMaybe<Scalars['String']>;
};

export type ComponentVehicleVehicle = {
  __typename?: 'ComponentVehicleVehicle';
  id: Scalars['ID'];
  overview?: Maybe<Array<Maybe<ComponentVehicleOverview>>>;
};


export type ComponentVehicleVehicleOverviewArgs = {
  filters?: InputMaybe<ComponentVehicleOverviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentVehicleVehicleFeatures = {
  __typename?: 'ComponentVehicleVehicleFeatures';
  id: Scalars['ID'];
  option: Scalars['String'];
  optionList: Scalars['String'];
};

export type ComponentVehicleVehicleFeaturesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVehicleVehicleFeaturesFiltersInput>>>;
  not?: InputMaybe<ComponentVehicleVehicleFeaturesFiltersInput>;
  option?: InputMaybe<StringFilterInput>;
  optionList?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVehicleVehicleFeaturesFiltersInput>>>;
};

export type ComponentVehicleVehicleFeaturesInput = {
  id?: InputMaybe<Scalars['ID']>;
  option?: InputMaybe<Scalars['String']>;
  optionList?: InputMaybe<Scalars['String']>;
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

export enum Enum_Salescar_State {
  New = 'new',
  Used = 'used'
}

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

export type GenericMorph = AboutPage | BodyStyle | Brand | Color | ComponentDynamicAccordion | ComponentHomeBenefits | ComponentHomeBrands | ComponentHomeFaq | ComponentHomeFleets | ComponentHomeHero | ComponentHomeServices | ComponentHomeSteps | ComponentMainHeading | ComponentMainIconBox | ComponentMainIconOption | ComponentMainListItem | ComponentMainMarkdownItem | ComponentVehicleAdditionalRentServices | ComponentVehicleFeatureList | ComponentVehicleMoneyBackLabel | ComponentVehicleOverview | ComponentVehiclePrice | ComponentVehicleSidebarOptions | ComponentVehicleVehicle | ComponentVehicleVehicleFeatures | FleetPage | FuelType | HomePage | I18NLocale | Location | Model | RentCar | SalesCar | Transmission | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VehicleClass;

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
  brand?: Maybe<BrandEntityResponse>;
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
  brand?: InputMaybe<BrandFiltersInput>;
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
  brand?: InputMaybe<Scalars['ID']>;
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
  createSalesCar?: Maybe<SalesCarEntityResponse>;
  createSalesCarLocalization?: Maybe<SalesCarEntityResponse>;
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
  deleteSalesCar?: Maybe<SalesCarEntityResponse>;
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
  updateSalesCar?: Maybe<SalesCarEntityResponse>;
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


export type MutationCreateSalesCarArgs = {
  data: SalesCarInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSalesCarLocalizationArgs = {
  data?: InputMaybe<SalesCarInput>;
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


export type MutationDeleteSalesCarArgs = {
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


export type MutationUpdateSalesCarArgs = {
  data: SalesCarInput;
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
  salesCar?: Maybe<SalesCarEntityResponse>;
  salesCars?: Maybe<SalesCarEntityResponseCollection>;
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


export type QuerySalesCarArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QuerySalesCarsArgs = {
  filters?: InputMaybe<SalesCarFiltersInput>;
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
  additionalServices: Array<Maybe<ComponentVehicleAdditionalRentServices>>;
  body_style?: Maybe<BodyStyleEntityResponse>;
  brand?: Maybe<BrandEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fuel_type?: Maybe<FuelTypeEntityResponse>;
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<RentCarRelationResponseCollection>;
  locations?: Maybe<LocationRelationResponseCollection>;
  moreInfo: Scalars['String'];
  name: Scalars['String'];
  passengers: Scalars['Int'];
  price: ComponentVehiclePrice;
  transmission?: Maybe<TransmissionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicle_class?: Maybe<VehicleClassEntityResponse>;
};


export type RentCarAdditionalServicesArgs = {
  filters?: InputMaybe<ComponentVehicleAdditionalRentServicesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  additionalServices?: InputMaybe<ComponentVehicleAdditionalRentServicesFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<RentCarFiltersInput>>>;
  body_style?: InputMaybe<BodyStyleFiltersInput>;
  brand?: InputMaybe<BrandFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fuel_type?: InputMaybe<FuelTypeFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<RentCarFiltersInput>;
  locations?: InputMaybe<LocationFiltersInput>;
  moreInfo?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RentCarFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RentCarFiltersInput>>>;
  passengers?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<ComponentVehiclePriceFiltersInput>;
  transmission?: InputMaybe<TransmissionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  vehicle_class?: InputMaybe<VehicleClassFiltersInput>;
};

export type RentCarInput = {
  additionalServices?: InputMaybe<Array<InputMaybe<ComponentVehicleAdditionalRentServicesInput>>>;
  body_style?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  fuel_type?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  locations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  moreInfo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  passengers?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<ComponentVehiclePriceInput>;
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

export type SalesCar = {
  __typename?: 'SalesCar';
  body_style?: Maybe<BodyStyleEntityResponse>;
  brand?: Maybe<BrandEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exterior_color?: Maybe<ColorEntityResponse>;
  fuel_type?: Maybe<FuelTypeEntityResponse>;
  gallery: UploadFileRelationResponseCollection;
  image: UploadFileEntityResponse;
  interior_color?: Maybe<ColorEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<SalesCarRelationResponseCollection>;
  mileage: Scalars['Int'];
  model?: Maybe<ModelEntityResponse>;
  moneyBackLabel: ComponentVehicleMoneyBackLabel;
  name: Scalars['String'];
  passengers: Scalars['Int'];
  price: ComponentVehiclePrice;
  sidebarOptions: Array<Maybe<ComponentVehicleSidebarOptions>>;
  slug?: Maybe<Scalars['String']>;
  state: Enum_Salescar_State;
  transmission?: Maybe<TransmissionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicleFeatures: Array<Maybe<ComponentVehicleVehicleFeatures>>;
  vehicleOverviews: Array<Maybe<ComponentVehicleOverview>>;
  year: Scalars['Int'];
};


export type SalesCarGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SalesCarLocalizationsArgs = {
  filters?: InputMaybe<SalesCarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SalesCarSidebarOptionsArgs = {
  filters?: InputMaybe<ComponentVehicleSidebarOptionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SalesCarVehicleFeaturesArgs = {
  filters?: InputMaybe<ComponentVehicleVehicleFeaturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SalesCarVehicleOverviewsArgs = {
  filters?: InputMaybe<ComponentVehicleOverviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SalesCarEntity = {
  __typename?: 'SalesCarEntity';
  attributes?: Maybe<SalesCar>;
  id?: Maybe<Scalars['ID']>;
};

export type SalesCarEntityResponse = {
  __typename?: 'SalesCarEntityResponse';
  data?: Maybe<SalesCarEntity>;
};

export type SalesCarEntityResponseCollection = {
  __typename?: 'SalesCarEntityResponseCollection';
  data: Array<SalesCarEntity>;
  meta: ResponseCollectionMeta;
};

export type SalesCarFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SalesCarFiltersInput>>>;
  body_style?: InputMaybe<BodyStyleFiltersInput>;
  brand?: InputMaybe<BrandFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  exterior_color?: InputMaybe<ColorFiltersInput>;
  fuel_type?: InputMaybe<FuelTypeFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  interior_color?: InputMaybe<ColorFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SalesCarFiltersInput>;
  mileage?: InputMaybe<IntFilterInput>;
  model?: InputMaybe<ModelFiltersInput>;
  moneyBackLabel?: InputMaybe<ComponentVehicleMoneyBackLabelFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SalesCarFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SalesCarFiltersInput>>>;
  passengers?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<ComponentVehiclePriceFiltersInput>;
  sidebarOptions?: InputMaybe<ComponentVehicleSidebarOptionsFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  transmission?: InputMaybe<TransmissionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  vehicleFeatures?: InputMaybe<ComponentVehicleVehicleFeaturesFiltersInput>;
  vehicleOverviews?: InputMaybe<ComponentVehicleOverviewFiltersInput>;
  year?: InputMaybe<IntFilterInput>;
};

export type SalesCarInput = {
  body_style?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  exterior_color?: InputMaybe<Scalars['ID']>;
  fuel_type?: InputMaybe<Scalars['ID']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['ID']>;
  interior_color?: InputMaybe<Scalars['ID']>;
  mileage?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['ID']>;
  moneyBackLabel?: InputMaybe<ComponentVehicleMoneyBackLabelInput>;
  name?: InputMaybe<Scalars['String']>;
  passengers?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<ComponentVehiclePriceInput>;
  sidebarOptions?: InputMaybe<Array<InputMaybe<ComponentVehicleSidebarOptionsInput>>>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Enum_Salescar_State>;
  transmission?: InputMaybe<Scalars['ID']>;
  vehicleFeatures?: InputMaybe<Array<InputMaybe<ComponentVehicleVehicleFeaturesInput>>>;
  vehicleOverviews?: InputMaybe<Array<InputMaybe<ComponentVehicleOverviewInput>>>;
  year?: InputMaybe<Scalars['Int']>;
};

export type SalesCarRelationResponseCollection = {
  __typename?: 'SalesCarRelationResponseCollection';
  data: Array<SalesCarEntity>;
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

export type GetAboutPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetAboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPageEntityResponse', data?: { __typename?: 'AboutPageEntity', attributes?: { __typename?: 'AboutPage', heading: { __typename?: 'ComponentHomeHero', title: string, description: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, aboutItem: Array<{ __typename?: 'ComponentMainListItem', id: string, title: string, description: string } | null>, contactInfo: Array<{ __typename?: 'ComponentMainMarkdownItem', id: string, title: string, description: string } | null> } | null } | null } | null };

export type FindAvailableShopFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAvailableShopFiltersQuery = { __typename?: 'Query', salesCars?: { __typename?: 'SalesCarEntityResponseCollection', data: Array<{ __typename?: 'SalesCarEntity', attributes?: { __typename?: 'SalesCar', brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', id?: string | null } | null } | null, body_style?: { __typename?: 'BodyStyleEntityResponse', data?: { __typename?: 'BodyStyleEntity', id?: string | null } | null } | null, fuel_type?: { __typename?: 'FuelTypeEntityResponse', data?: { __typename?: 'FuelTypeEntity', id?: string | null } | null } | null, transmission?: { __typename?: 'TransmissionEntityResponse', data?: { __typename?: 'TransmissionEntity', id?: string | null } | null } | null, exterior_color?: { __typename?: 'ColorEntityResponse', data?: { __typename?: 'ColorEntity', id?: string | null } | null } | null, interior_color?: { __typename?: 'ColorEntityResponse', data?: { __typename?: 'ColorEntity', id?: string | null } | null } | null } | null }> } | null };

export type GetHomeFleetsQueryVariables = Exact<{
  brandId?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetHomeFleetsQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', fleets: { __typename?: 'ComponentHomeFleets', rent_cars?: { __typename?: 'RentCarRelationResponseCollection', data: Array<{ __typename?: 'RentCarEntity', id?: string | null, attributes?: { __typename?: 'RentCar', name: string, passengers: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, vehicle_class?: { __typename?: 'VehicleClassEntityResponse', data?: { __typename?: 'VehicleClassEntity', attributes?: { __typename?: 'VehicleClass', title: string } | null } | null } | null, fuel_type?: { __typename?: 'FuelTypeEntityResponse', data?: { __typename?: 'FuelTypeEntity', attributes?: { __typename?: 'FuelType', type: string } | null } | null } | null, body_style?: { __typename?: 'BodyStyleEntityResponse', data?: { __typename?: 'BodyStyleEntity', attributes?: { __typename?: 'BodyStyle', style: string } | null } | null } | null, transmission?: { __typename?: 'TransmissionEntityResponse', data?: { __typename?: 'TransmissionEntity', attributes?: { __typename?: 'Transmission', type: string } | null } | null } | null, brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', attributes?: { __typename?: 'Brand', name: string } | null } | null } | null, price: { __typename?: 'ComponentVehiclePrice', fullPrice?: number | null, currentPrice: number, showDiscounted?: boolean | null } } | null }> } | null } } | null } | null } | null };

export type HomePageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', hero: { __typename?: 'ComponentHomeHero', title: string, description: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, brands: { __typename?: 'ComponentHomeBrands', images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> } }, steps: { __typename?: 'ComponentHomeSteps', stepsHeading: { __typename?: 'ComponentMainHeading', title: string, label?: string | null, description?: string | null }, stepOptions: Array<{ __typename?: 'ComponentMainIconOption', id: string, title: string, description: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> }, services: { __typename?: 'ComponentHomeServices', servicesHeading: { __typename?: 'ComponentMainHeading', title: string, label?: string | null, description?: string | null }, serviceOptions: Array<{ __typename?: 'ComponentMainIconOption', title: string, description: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, fleets: { __typename?: 'ComponentHomeFleets', fleetsHeading: { __typename?: 'ComponentMainHeading', title: string, label?: string | null, description?: string | null }, rent_cars?: { __typename?: 'RentCarRelationResponseCollection', data: Array<{ __typename?: 'RentCarEntity', attributes?: { __typename?: 'RentCar', brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', name: string, logoSvg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null } | null } | null }> } | null }, benefits: { __typename?: 'ComponentHomeBenefits', benefitsHeading: { __typename?: 'ComponentMainHeading', title: string, label?: string | null, description?: string | null }, leftSide: Array<{ __typename?: 'ComponentMainIconBox', id: string, title: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, rightSide: Array<{ __typename?: 'ComponentMainIconBox', id: string, title: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, additionalBenefits: Array<{ __typename?: 'ComponentMainIconBox', id: string, title: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> }, faq: { __typename?: 'ComponentHomeFaq', id: string, faqHeading: { __typename?: 'ComponentMainHeading', title: string, label?: string | null, description?: string | null }, faqItem: Array<{ __typename?: 'ComponentDynamicAccordion', id: string, question: string, answer: string } | null> } } | null } | null } | null };

export type GetRentFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRentFiltersQuery = { __typename?: 'Query', brands?: { __typename?: 'BrandEntityResponseCollection', data: Array<{ __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', name: string } | null }> } | null, vehicleClasses?: { __typename?: 'VehicleClassEntityResponseCollection', data: Array<{ __typename?: 'VehicleClassEntity', id?: string | null, attributes?: { __typename?: 'VehicleClass', title: string } | null }> } | null, bodyStyles?: { __typename?: 'BodyStyleEntityResponseCollection', data: Array<{ __typename?: 'BodyStyleEntity', id?: string | null, attributes?: { __typename?: 'BodyStyle', style: string } | null }> } | null, fuelTypes?: { __typename?: 'FuelTypeEntityResponseCollection', data: Array<{ __typename?: 'FuelTypeEntity', id?: string | null, attributes?: { __typename?: 'FuelType', type: string } | null }> } | null, transmissions?: { __typename?: 'TransmissionEntityResponseCollection', data: Array<{ __typename?: 'TransmissionEntity', id?: string | null, attributes?: { __typename?: 'Transmission', type: string } | null }> } | null, colors?: { __typename?: 'ColorEntityResponseCollection', data: Array<{ __typename?: 'ColorEntity', id?: string | null, attributes?: { __typename?: 'Color', name: string, color: string } | null }> } | null };

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'LocationEntityResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', address: string } | null }> } | null };

export type RentCarsQueryVariables = Exact<{
  address?: InputMaybe<Scalars['ID']>;
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  vehicleClasses?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  bodyStyles?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  fuelTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  transmissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type RentCarsQuery = { __typename?: 'Query', rentCars?: { __typename?: 'RentCarEntityResponseCollection', data: Array<{ __typename?: 'RentCarEntity', id?: string | null, attributes?: { __typename?: 'RentCar', name: string, passengers: number, moreInfo: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, price: { __typename?: 'ComponentVehiclePrice', currentPrice: number, fullPrice?: number | null, showDiscounted?: boolean | null }, body_style?: { __typename?: 'BodyStyleEntityResponse', data?: { __typename?: 'BodyStyleEntity', attributes?: { __typename?: 'BodyStyle', style: string } | null } | null } | null, vehicle_class?: { __typename?: 'VehicleClassEntityResponse', data?: { __typename?: 'VehicleClassEntity', attributes?: { __typename?: 'VehicleClass', title: string } | null } | null } | null, fuel_type?: { __typename?: 'FuelTypeEntityResponse', data?: { __typename?: 'FuelTypeEntity', attributes?: { __typename?: 'FuelType', type: string } | null } | null } | null, transmission?: { __typename?: 'TransmissionEntityResponse', data?: { __typename?: 'TransmissionEntity', attributes?: { __typename?: 'Transmission', type: string } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetAddRentServicesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetAddRentServicesQuery = { __typename?: 'Query', rentCar?: { __typename?: 'RentCarEntityResponse', data?: { __typename?: 'RentCarEntity', id?: string | null, attributes?: { __typename?: 'RentCar', additionalServices: Array<{ __typename?: 'ComponentVehicleAdditionalRentServices', id: string, label: string, dailyPrice: number } | null> } | null } | null } | null };

export type SaleCarsQueryVariables = Exact<{
  state?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Array<InputMaybe<Scalars['Float']>> | InputMaybe<Scalars['Float']>>;
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  bodyStyles?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  fuelTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  transmissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  mileage?: InputMaybe<Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>>;
  year?: InputMaybe<Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>>;
  exteriorColor?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  interiorColor?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type SaleCarsQuery = { __typename?: 'Query', salesCars?: { __typename?: 'SalesCarEntityResponseCollection', data: Array<{ __typename?: 'SalesCarEntity', id?: string | null, attributes?: { __typename?: 'SalesCar', name: string, slug?: string | null, mileage: number, year: number, passengers: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, price: { __typename?: 'ComponentVehiclePrice', currentPrice: number, fullPrice?: number | null, showDiscounted?: boolean | null }, fuel_type?: { __typename?: 'FuelTypeEntityResponse', data?: { __typename?: 'FuelTypeEntity', attributes?: { __typename?: 'FuelType', type: string } | null } | null } | null, transmission?: { __typename?: 'TransmissionEntityResponse', data?: { __typename?: 'TransmissionEntity', attributes?: { __typename?: 'Transmission', type: string } | null } | null } | null, body_style?: { __typename?: 'BodyStyleEntityResponse', data?: { __typename?: 'BodyStyleEntity', attributes?: { __typename?: 'BodyStyle', style: string } | null } | null } | null, model?: { __typename?: 'ModelEntityResponse', data?: { __typename?: 'ModelEntity', attributes?: { __typename?: 'Model', model: string } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetShopFiltersQueryVariables = Exact<{
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  bodyStyles?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  fuelTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  transmissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  exteriorColors?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  interiorColors?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
}>;


export type GetShopFiltersQuery = { __typename?: 'Query', brands?: { __typename?: 'BrandEntityResponseCollection', data: Array<{ __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', name: string } | null }> } | null, bodyStyles?: { __typename?: 'BodyStyleEntityResponseCollection', data: Array<{ __typename?: 'BodyStyleEntity', id?: string | null, attributes?: { __typename?: 'BodyStyle', style: string } | null }> } | null, fuelTypes?: { __typename?: 'FuelTypeEntityResponseCollection', data: Array<{ __typename?: 'FuelTypeEntity', id?: string | null, attributes?: { __typename?: 'FuelType', type: string } | null }> } | null, transmissions?: { __typename?: 'TransmissionEntityResponseCollection', data: Array<{ __typename?: 'TransmissionEntity', id?: string | null, attributes?: { __typename?: 'Transmission', type: string } | null }> } | null, exterior_color?: { __typename?: 'ColorEntityResponseCollection', data: Array<{ __typename?: 'ColorEntity', id?: string | null, attributes?: { __typename?: 'Color', name: string, color: string } | null }> } | null, interior_color?: { __typename?: 'ColorEntityResponseCollection', data: Array<{ __typename?: 'ColorEntity', id?: string | null, attributes?: { __typename?: 'Color', name: string, color: string } | null }> } | null };

export type GetSaleCarPropsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetSaleCarPropsQuery = { __typename?: 'Query', salesCars?: { __typename?: 'SalesCarEntityResponseCollection', data: Array<{ __typename?: 'SalesCarEntity', attributes?: { __typename?: 'SalesCar', name: string, mileage: number, year: number, price: { __typename?: 'ComponentVehiclePrice', fullPrice?: number | null, currentPrice: number, showDiscounted?: boolean | null }, moneyBackLabel: { __typename?: 'ComponentVehicleMoneyBackLabel', title: string, description: string }, sidebarOptions: Array<{ __typename?: 'ComponentVehicleSidebarOptions', id: string, label: string, modalContent?: string | null, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null>, vehicleOverviews: Array<{ __typename?: 'ComponentVehicleOverview', id: string, title: string, subtitle: string } | null>, vehicleFeatures: Array<{ __typename?: 'ComponentVehicleVehicleFeatures', id: string, option: string, optionList: string } | null>, gallery: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, model?: { __typename?: 'ModelEntityResponse', data?: { __typename?: 'ModelEntity', attributes?: { __typename?: 'Model', model: string } | null } | null } | null } | null }> } | null };

export type GetSalesCarsPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSalesCarsPathsQuery = { __typename?: 'Query', salesCars?: { __typename?: 'SalesCarEntityResponseCollection', data: Array<{ __typename?: 'SalesCarEntity', id?: string | null, attributes?: { __typename?: 'SalesCar', slug?: string | null, locale?: string | null } | null }> } | null };


export const GetAboutPageDocument = gql`
    query GetAboutPage($locale: I18NLocaleCode) {
  aboutPage(locale: $locale) {
    data {
      attributes {
        heading {
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
        aboutItem {
          id
          title
          description
        }
        contactInfo {
          id
          title
          description
        }
      }
    }
  }
}
    `;

/**
 * __useGetAboutPageQuery__
 *
 * To run a query within a React component, call `useGetAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAboutPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetAboutPageQuery(baseOptions?: Apollo.QueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
      }
export function useGetAboutPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
        }
export type GetAboutPageQueryHookResult = ReturnType<typeof useGetAboutPageQuery>;
export type GetAboutPageLazyQueryHookResult = ReturnType<typeof useGetAboutPageLazyQuery>;
export type GetAboutPageQueryResult = Apollo.QueryResult<GetAboutPageQuery, GetAboutPageQueryVariables>;
export const FindAvailableShopFiltersDocument = gql`
    query FindAvailableShopFilters {
  salesCars {
    data {
      attributes {
        brand {
          data {
            id
          }
        }
        body_style {
          data {
            id
          }
        }
        fuel_type {
          data {
            id
          }
        }
        transmission {
          data {
            id
          }
        }
        exterior_color {
          data {
            id
          }
        }
        interior_color {
          data {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFindAvailableShopFiltersQuery__
 *
 * To run a query within a React component, call `useFindAvailableShopFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAvailableShopFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAvailableShopFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAvailableShopFiltersQuery(baseOptions?: Apollo.QueryHookOptions<FindAvailableShopFiltersQuery, FindAvailableShopFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAvailableShopFiltersQuery, FindAvailableShopFiltersQueryVariables>(FindAvailableShopFiltersDocument, options);
      }
export function useFindAvailableShopFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAvailableShopFiltersQuery, FindAvailableShopFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAvailableShopFiltersQuery, FindAvailableShopFiltersQueryVariables>(FindAvailableShopFiltersDocument, options);
        }
export type FindAvailableShopFiltersQueryHookResult = ReturnType<typeof useFindAvailableShopFiltersQuery>;
export type FindAvailableShopFiltersLazyQueryHookResult = ReturnType<typeof useFindAvailableShopFiltersLazyQuery>;
export type FindAvailableShopFiltersQueryResult = Apollo.QueryResult<FindAvailableShopFiltersQuery, FindAvailableShopFiltersQueryVariables>;
export const GetHomeFleetsDocument = gql`
    query GetHomeFleets($brandId: ID, $locale: I18NLocaleCode) {
  homePage(locale: $locale) {
    data {
      attributes {
        fleets {
          rent_cars(filters: {brand: {id: {eq: $brandId}}}, pagination: {limit: 6}) {
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
                body_style {
                  data {
                    attributes {
                      style
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
                brand {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                price {
                  fullPrice
                  currentPrice
                  showDiscounted
                }
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
 * __useGetHomeFleetsQuery__
 *
 * To run a query within a React component, call `useGetHomeFleetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeFleetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeFleetsQuery({
 *   variables: {
 *      brandId: // value for 'brandId'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetHomeFleetsQuery(baseOptions?: Apollo.QueryHookOptions<GetHomeFleetsQuery, GetHomeFleetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomeFleetsQuery, GetHomeFleetsQueryVariables>(GetHomeFleetsDocument, options);
      }
export function useGetHomeFleetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomeFleetsQuery, GetHomeFleetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomeFleetsQuery, GetHomeFleetsQueryVariables>(GetHomeFleetsDocument, options);
        }
export type GetHomeFleetsQueryHookResult = ReturnType<typeof useGetHomeFleetsQuery>;
export type GetHomeFleetsLazyQueryHookResult = ReturnType<typeof useGetHomeFleetsLazyQuery>;
export type GetHomeFleetsQueryResult = Apollo.QueryResult<GetHomeFleetsQuery, GetHomeFleetsQueryVariables>;
export const HomePageDocument = gql`
    query HomePage($locale: I18NLocaleCode) {
  homePage(locale: $locale) {
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
        brands {
          images {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        steps {
          stepsHeading {
            title
            label
            description
          }
          stepOptions {
            id
            title
            description
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
        services {
          servicesHeading {
            title
            label
            description
          }
          serviceOptions {
            title
            description
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        fleets {
          fleetsHeading {
            title
            label
            description
          }
          rent_cars {
            data {
              attributes {
                brand {
                  data {
                    id
                    attributes {
                      name
                      logoSvg {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        benefits {
          benefitsHeading {
            title
            label
            description
          }
          leftSide {
            id
            title
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          rightSide {
            id
            title
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          additionalBenefits {
            id
            title
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
        faq {
          id
          faqHeading {
            title
            label
            description
          }
          faqItem {
            id
            question
            answer
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
 *      locale: // value for 'locale'
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
export const GetLocationsDocument = gql`
    query GetLocations {
  locations {
    data {
      id
      attributes {
        address
      }
    }
  }
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;
export const RentCarsDocument = gql`
    query RentCars($address: ID, $brands: [ID], $vehicleClasses: [ID], $bodyStyles: [ID], $fuelTypes: [ID], $transmissions: [ID], $locale: I18NLocaleCode) {
  rentCars(
    filters: {locations: {id: {eq: $address}}, brand: {id: {in: $brands}}, vehicle_class: {id: {in: $vehicleClasses}}, body_style: {id: {in: $bodyStyles}}, fuel_type: {id: {in: $fuelTypes}}, transmission: {id: {in: $transmissions}}}
    locale: $locale
  ) {
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
        price {
          currentPrice
          fullPrice
          showDiscounted
        }
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
        moreInfo
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
 *      address: // value for 'address'
 *      brands: // value for 'brands'
 *      vehicleClasses: // value for 'vehicleClasses'
 *      bodyStyles: // value for 'bodyStyles'
 *      fuelTypes: // value for 'fuelTypes'
 *      transmissions: // value for 'transmissions'
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
export const GetAddRentServicesDocument = gql`
    query GetAddRentServices($id: ID) {
  rentCar(id: $id) {
    data {
      id
      attributes {
        additionalServices {
          id
          label
          dailyPrice
        }
      }
    }
  }
}
    `;

/**
 * __useGetAddRentServicesQuery__
 *
 * To run a query within a React component, call `useGetAddRentServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddRentServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddRentServicesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAddRentServicesQuery(baseOptions?: Apollo.QueryHookOptions<GetAddRentServicesQuery, GetAddRentServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAddRentServicesQuery, GetAddRentServicesQueryVariables>(GetAddRentServicesDocument, options);
      }
export function useGetAddRentServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAddRentServicesQuery, GetAddRentServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAddRentServicesQuery, GetAddRentServicesQueryVariables>(GetAddRentServicesDocument, options);
        }
export type GetAddRentServicesQueryHookResult = ReturnType<typeof useGetAddRentServicesQuery>;
export type GetAddRentServicesLazyQueryHookResult = ReturnType<typeof useGetAddRentServicesLazyQuery>;
export type GetAddRentServicesQueryResult = Apollo.QueryResult<GetAddRentServicesQuery, GetAddRentServicesQueryVariables>;
export const SaleCarsDocument = gql`
    query SaleCars($state: String, $price: [Float], $brands: [ID], $bodyStyles: [ID], $fuelTypes: [ID], $transmissions: [ID], $mileage: [Int], $year: [Int], $exteriorColor: [ID], $interiorColor: [ID], $sortBy: [String], $start: Int, $limit: Int, $locale: I18NLocaleCode) {
  salesCars(
    filters: {state: {eq: $state}, price: {currentPrice: {between: $price}}, brand: {id: {in: $brands}}, body_style: {id: {in: $bodyStyles}}, fuel_type: {id: {in: $fuelTypes}}, transmission: {id: {in: $transmissions}}, mileage: {between: $mileage}, year: {between: $year}, exterior_color: {id: {in: $exteriorColor}}, interior_color: {id: {in: $interiorColor}}}
    sort: $sortBy
    pagination: {start: $start, limit: $limit}
    locale: $locale
  ) {
    data {
      id
      attributes {
        name
        slug
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        price {
          currentPrice
          fullPrice
          showDiscounted
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
        body_style {
          data {
            attributes {
              style
            }
          }
        }
        model {
          data {
            attributes {
              model
            }
          }
        }
        mileage
        year
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
 * __useSaleCarsQuery__
 *
 * To run a query within a React component, call `useSaleCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleCarsQuery({
 *   variables: {
 *      state: // value for 'state'
 *      price: // value for 'price'
 *      brands: // value for 'brands'
 *      bodyStyles: // value for 'bodyStyles'
 *      fuelTypes: // value for 'fuelTypes'
 *      transmissions: // value for 'transmissions'
 *      mileage: // value for 'mileage'
 *      year: // value for 'year'
 *      exteriorColor: // value for 'exteriorColor'
 *      interiorColor: // value for 'interiorColor'
 *      sortBy: // value for 'sortBy'
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useSaleCarsQuery(baseOptions?: Apollo.QueryHookOptions<SaleCarsQuery, SaleCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleCarsQuery, SaleCarsQueryVariables>(SaleCarsDocument, options);
      }
export function useSaleCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleCarsQuery, SaleCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleCarsQuery, SaleCarsQueryVariables>(SaleCarsDocument, options);
        }
export type SaleCarsQueryHookResult = ReturnType<typeof useSaleCarsQuery>;
export type SaleCarsLazyQueryHookResult = ReturnType<typeof useSaleCarsLazyQuery>;
export type SaleCarsQueryResult = Apollo.QueryResult<SaleCarsQuery, SaleCarsQueryVariables>;
export const GetShopFiltersDocument = gql`
    query GetShopFilters($brands: [ID], $bodyStyles: [ID], $fuelTypes: [ID], $transmissions: [ID], $exteriorColors: [ID], $interiorColors: [ID]) {
  brands(filters: {id: {in: $brands}}) {
    data {
      id
      attributes {
        name
      }
    }
  }
  bodyStyles(filters: {id: {in: $bodyStyles}}) {
    data {
      id
      attributes {
        style
      }
    }
  }
  fuelTypes(filters: {id: {in: $fuelTypes}}) {
    data {
      id
      attributes {
        type
      }
    }
  }
  transmissions(filters: {id: {in: $transmissions}}) {
    data {
      id
      attributes {
        type
      }
    }
  }
  exterior_color: colors(filters: {id: {in: $exteriorColors}}) {
    data {
      id
      attributes {
        name
        color
      }
    }
  }
  interior_color: colors(filters: {id: {in: $interiorColors}}) {
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
 * __useGetShopFiltersQuery__
 *
 * To run a query within a React component, call `useGetShopFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopFiltersQuery({
 *   variables: {
 *      brands: // value for 'brands'
 *      bodyStyles: // value for 'bodyStyles'
 *      fuelTypes: // value for 'fuelTypes'
 *      transmissions: // value for 'transmissions'
 *      exteriorColors: // value for 'exteriorColors'
 *      interiorColors: // value for 'interiorColors'
 *   },
 * });
 */
export function useGetShopFiltersQuery(baseOptions?: Apollo.QueryHookOptions<GetShopFiltersQuery, GetShopFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShopFiltersQuery, GetShopFiltersQueryVariables>(GetShopFiltersDocument, options);
      }
export function useGetShopFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShopFiltersQuery, GetShopFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShopFiltersQuery, GetShopFiltersQueryVariables>(GetShopFiltersDocument, options);
        }
export type GetShopFiltersQueryHookResult = ReturnType<typeof useGetShopFiltersQuery>;
export type GetShopFiltersLazyQueryHookResult = ReturnType<typeof useGetShopFiltersLazyQuery>;
export type GetShopFiltersQueryResult = Apollo.QueryResult<GetShopFiltersQuery, GetShopFiltersQueryVariables>;
export const GetSaleCarPropsDocument = gql`
    query GetSaleCarProps($slug: String, $locale: I18NLocaleCode) {
  salesCars(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        name
        mileage
        year
        price {
          fullPrice
          currentPrice
          showDiscounted
        }
        moneyBackLabel {
          title
          description
        }
        sidebarOptions {
          id
          label
          icon {
            data {
              attributes {
                url
              }
            }
          }
          modalContent
        }
        vehicleOverviews {
          id
          title
          subtitle
        }
        vehicleFeatures {
          id
          option
          optionList
        }
        gallery {
          data {
            id
            attributes {
              url
              alternativeText
            }
          }
        }
        model {
          data {
            attributes {
              model
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSaleCarPropsQuery__
 *
 * To run a query within a React component, call `useGetSaleCarPropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSaleCarPropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSaleCarPropsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetSaleCarPropsQuery(baseOptions?: Apollo.QueryHookOptions<GetSaleCarPropsQuery, GetSaleCarPropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSaleCarPropsQuery, GetSaleCarPropsQueryVariables>(GetSaleCarPropsDocument, options);
      }
export function useGetSaleCarPropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSaleCarPropsQuery, GetSaleCarPropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSaleCarPropsQuery, GetSaleCarPropsQueryVariables>(GetSaleCarPropsDocument, options);
        }
export type GetSaleCarPropsQueryHookResult = ReturnType<typeof useGetSaleCarPropsQuery>;
export type GetSaleCarPropsLazyQueryHookResult = ReturnType<typeof useGetSaleCarPropsLazyQuery>;
export type GetSaleCarPropsQueryResult = Apollo.QueryResult<GetSaleCarPropsQuery, GetSaleCarPropsQueryVariables>;
export const GetSalesCarsPathsDocument = gql`
    query GetSalesCarsPaths {
  salesCars(locale: "all") {
    data {
      id
      attributes {
        slug
        locale
      }
    }
  }
}
    `;

/**
 * __useGetSalesCarsPathsQuery__
 *
 * To run a query within a React component, call `useGetSalesCarsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSalesCarsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSalesCarsPathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSalesCarsPathsQuery(baseOptions?: Apollo.QueryHookOptions<GetSalesCarsPathsQuery, GetSalesCarsPathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSalesCarsPathsQuery, GetSalesCarsPathsQueryVariables>(GetSalesCarsPathsDocument, options);
      }
export function useGetSalesCarsPathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSalesCarsPathsQuery, GetSalesCarsPathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSalesCarsPathsQuery, GetSalesCarsPathsQueryVariables>(GetSalesCarsPathsDocument, options);
        }
export type GetSalesCarsPathsQueryHookResult = ReturnType<typeof useGetSalesCarsPathsQuery>;
export type GetSalesCarsPathsLazyQueryHookResult = ReturnType<typeof useGetSalesCarsPathsLazyQuery>;
export type GetSalesCarsPathsQueryResult = Apollo.QueryResult<GetSalesCarsPathsQuery, GetSalesCarsPathsQueryVariables>;