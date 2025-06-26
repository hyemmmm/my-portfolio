import i18n from "i18next";

const handleError = (error: unknown) => {
  if (error instanceof Error) {
    alert(`${error.message}`);
  } else {
    alert(i18n.t("알 수 없는 에러가 발생했습니다."));
  }

  console.error(error);
};

export default handleError;
