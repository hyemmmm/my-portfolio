import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

type Props = {
  isError?: boolean;
};

export default function LanguageToggle({ isError = false }: Props) {
  const { i18n } = useTranslation();

  const onClickLanguage = (lang: "ko" | "en") => {
    i18n.changeLanguage(lang);
  };

  console.log(i18n.language);

  return (
    <ToggleButtonBox $error={isError}>
      <ToggleButton
        $active={i18n.language === "ko"}
        onClick={() => onClickLanguage("ko")}
      >
        KOR
      </ToggleButton>
      <ToggleButton
        $active={i18n.language === "en"}
        onClick={() => onClickLanguage("en")}
      >
        ENG
      </ToggleButton>
    </ToggleButtonBox>
  );
}

const ToggleButtonBox = styled.div<{ $error?: boolean }>`
  display: inline-flex;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#888")};
  border-radius: 20px;
  padding: 4px;
  background-color: #2c2c2c;
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  background-color: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: ${({ $active }) => ($active ? "#000" : "#ccc")};
  border: none;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#eee" : "#444")};
  }
`;
