import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { secondaryColor } from "../styles/colors";

type ProjectOverviewProps = {
  title: string;
  period?: string;
  description: string;
  onClickDetail?: () => void;
};

export default function ProjectOverview({
  title,
  period,
  description,
  onClickDetail,
}: ProjectOverviewProps) {
  return (
    <Box mb={4}>
      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>
      {period && (
        <Typography
          variant="caption"
          sx={{
            fontStyle: "italic",
            color: "#aaa",
            display: "block",
            mb: 1,
          }}
        >
          📅 {period}
        </Typography>
      )}
      <Typography variant="body2" paragraph sx={{ lineHeight: 1.6 }}>
        {description}
      </Typography>
      {onClickDetail && (
        <ViewDetail onClick={onClickDetail}>자세히 보기 →</ViewDetail>
      )}
    </Box>
  );
}

const ViewDetail = styled.div`
  &:hover {
    text-decoration: underline;
  }
  font-weight: 500;
  color: ${secondaryColor};
  cursor: pointer;
`;
