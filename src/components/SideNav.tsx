import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function SideNav() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const sections = [
    { id: "contact", title: t("contact") },
    { id: "experiences", title: t("experiences") },
    { id: "career-summary", title: t("career-summary") },
    { id: "projects", title: t("projects") },
    { id: "examples", title: t("view-demo") },
    { id: "skills", title: t("skills") },
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 1001,
        width: "180px",
        backgroundColor: "rgba(44,44,44,0.95)",
        borderRight: "1px solid #333",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        px: 3,
        py: 4,
        boxShadow: "4px 0 12px rgba(0,0,0,0.3)",
      }}
    >
      <Stack spacing={3}>
        {sections.map((section) => (
          <Typography
            key={section.id}
            onClick={() => scrollToId(section.id)}
            sx={{
              cursor: "pointer",
              color: activeId === section.id ? "#ffffff" : "#bbbbbb",
              fontWeight: activeId === section.id ? 700 : 500,
              fontSize: "15px",
              transition: "all 0.2s",
              "&:hover": {
                color: "#ffffff",
                transform: "translateX(4px)",
              },
            }}
          >
            {section.title}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
