import { Box, Divider, Typography } from "@mui/material";
import { primaryColor } from "../styles/colors";

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#2c2c2c",
        borderRadius: 2,
        p: 4,
        mb: 4,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        sx={{ color: primaryColor }}
      >
        {title}
      </Typography>
      <Divider sx={{ mb: 2, borderColor: primaryColor }} />
      {children}
    </Box>
  );
}

export default SectionCard;
