import styled from "styled-components";
import Button from "./Button";
import { IconDownload, IconHeart, IconAdd } from "../core/Icons";
import { useState } from "react";

type SizeType = "standard" | "nonstandard";

interface Props {
  url?: string;
  name?: string;
  profile?: string;
  size?: SizeType;
  children?: React.ReactNode;
}

const BigDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoverButtonWrapper = styled.button`
  transition: 0.6s ease;
`;

const StyledImage = styled.img`
  opacity: 1;
  transition: 1s ease;

  ${BigDiv}:hover & {
    opacity: 0.3;
  }
`;

const ButtonOnHover = styled.button`
  opacity: 0;
  transition: 1s ease;
  position: absolute;
  transform: scale(0.5);
  ${BigDiv}:hover & {
    opacity: 1;
  }
`;

export const Image: React.FC<Props> = ({
  url,
  profile,
  name,
  size,
  children,
}) => {
  const [countHearts, setHearts] = useState(0);
  const SizeClass =
    size === "standard" ? "border border-white w-full" : "w-full";

  return (
    <BigDiv className="max-w-sm max-h-min text-white">
      <StyledImage src={url} className={`${SizeClass}`} />

      <ButtonOnHover className="bottom-0 right-0">
        <HoverButtonWrapper>
          <Button size="small" variant="icon" icon={<IconDownload />} />
        </HoverButtonWrapper>
      </ButtonOnHover>

      <ButtonOnHover className="top-0 right-0">
        <HoverButtonWrapper className="flex flex-wrap">
          <Button
            onClick={() => setHearts(countHearts + 1)}
            size="small"
            variant="icon"
            icon={<IconHeart />}
          />
          <div className="text-4xl mt-5">{countHearts}</div>
        </HoverButtonWrapper>
      </ButtonOnHover>

      <ButtonOnHover className="relative h-32 w-32">
        <HoverButtonWrapper className="flex flex-wrap">
          {children}
        </HoverButtonWrapper>
      </ButtonOnHover>

      <ButtonOnHover className="bottom-0 left-0">
        <HoverButtonWrapper>
          <Button size="small" variant="icon" icon={<IconAdd />} />
        </HoverButtonWrapper>
      </ButtonOnHover>

      <ButtonOnHover className="left-0 top-0">
        <HoverButtonWrapper>
          <img
            src={profile}
            className="rounded-full"
            alt="A small user's avatar of who uploaded the image and the name of the user"
          />
          <p>{name}</p>
        </HoverButtonWrapper>
      </ButtonOnHover>
    </BigDiv>
  );
};
