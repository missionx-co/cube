import React, { FC } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";

import IFormControl from "./IFormControl";
import InfoCircleIcon from "../../Icons/InfoCircleIcons";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const Container: StyledComponentType<any> = styled("div", {
  ...tw`space-y-1.5 block w-full`,
});

const Label: StyledComponentType<any> = styled("label", {
  ...tw`text-sm font-medium text-gray-700`,
});

const ErrorIconContainer: StyledComponentType<any> = styled("span", {
  ...tw`absolute flex w-4 h-4 transform -translate-y-1/2 top-1/2 right-2 text-error-500`,
});

const ContentContainer: StyledComponentType<any> = styled("div", {
  ...tw`relative block w-full`,
});

const ErrorContainer: StyledComponentType<any> = styled("span", {
  ...tw`block text-sm text-red-500`,
});

const HintContainer: StyledComponentType<any> = styled("span", {
  ...tw`block text-sm text-gray-500`,
});

const FormControl: FC<IFormControl> = ({
  id,
  fieldLabel,
  hint,
  error,
  atoms,
  children,
  ...props
}) => {
  const hasLabel = Boolean(fieldLabel);
  const hasError = Boolean(error);

  return (
    <Container {...props}>
      {hasLabel && (
        <Label htmlFor={id} {...(atoms?.label ? atoms.label : {})}>
          {fieldLabel}
        </Label>
      )}
      <ContentContainer>
        {children}
        {hasError && (
          <ErrorIconContainer>
            <InfoCircleIcon />
          </ErrorIconContainer>
        )}
      </ContentContainer>
      {hasError && (
        <ErrorContainer {...(atoms?.error ? atoms.error : {})}>
          {error}
        </ErrorContainer>
      )}
      {!hasError && (
        <HintContainer {...(atoms?.hint ? atoms.hint : {})}>
          {hint}
        </HintContainer>
      )}
    </Container>
  );
};

export default FormControl;
