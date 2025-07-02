import { Box, Typography } from "@mui/material";
import { usePopupStore } from "../store/popupStore";

type Role = {
  id: string;
  text: string;
  popup?: boolean;
};

type Props = {
  title: string;
  period: string;
  achievement: string;
  roles: Role[];
  skills: string[];
};

export default function CareerSummaryItem({
  title,
  period,
  achievement,
  roles,
  skills,
}: Props) {
  const { open } = usePopupStore((state) => state);

  return (
    <Box
      sx={{
        mb: 6,
        p: 3,
        border: "1px solid #444",
        borderRadius: 2,
        backgroundColor: "#2c2c2c",
        position: "relative",
      }}
    >
      {/* 제목 + 기간 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="body1" fontWeight={700}>
          📌 {title}
        </Typography>
        <Box
          sx={{
            fontSize: "13px",
            backgroundColor: "#444",
            px: 1.5,
            py: 0.5,
            borderRadius: "12px",
            color: "#ccc",
          }}
        >
          💼 {period}
        </Box>
      </Box>

      {/* 성과 */}
      <Box
        sx={{
          mb: 2,
          p: 2,
          backgroundColor: "#1e1e1e",
          borderRadius: 1,
          borderLeft: "4px solid #90caf9",
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
          🔹 성과
        </Typography>
        <Typography variant="body2">{achievement}</Typography>
      </Box>

      {/* 역할 */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
          🔹 주요 역할
        </Typography>
        <Box component="ul" sx={{ pl: 3, lineHeight: 1.8 }}>
          {roles.map((role, idx) => (
            <>
              <li key={idx}>
                {role.text}
                {role.popup && (
                  <>
                    👉
                    <span
                      onClick={() => open("treeview")}
                      style={{
                        color: "#90caf9",
                        cursor: "pointer",
                        textDecoration: "underline",
                        textUnderlineOffset: "2px",
                        fontSize: "14px",
                      }}
                    >
                      Demo
                    </span>
                  </>
                )}
              </li>
            </>
          ))}
        </Box>
      </Box>

      {/* 기술 */}
      <Box
        sx={{
          p: 2,
          backgroundColor: "#1e1e1e",
          borderRadius: 1,
          borderLeft: "4px solid #90caf9",
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
          🔹 사용 기술
        </Typography>
        <Typography variant="body2">{skills.join(", ")}</Typography>
      </Box>
    </Box>
  );
}
