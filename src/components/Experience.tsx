import { Box, Typography } from "@mui/material";

type ExperienceProps = {
  title: string;
  subtitle: string;
  items: string[];
};

function Experience({ title, subtitle, items }: ExperienceProps) {
  return (
    <Box mb={3}>
      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="subtitle1" mb={1}>
        {subtitle}
      </Typography>
      <ul style={{ paddingLeft: 20 }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Box>
  );
}

export default Experience;
