import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import cic from "../../assets/ubc_cic_logo.jpeg";
import gov from "../../assets/bcgov_logo.jpeg";
import bcharity from "../../assets/bcharity_logo.jpg";

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "60px",
    height: "3px",
    background: theme.palette.primary.main,
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const ExperienceAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    padding: theme.spacing(1, 0),
    minHeight: "70px",
  },
  "& .MuiAccordionDetails-root": {
    padding: theme.spacing(2, 4, 3, 4),
  },
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.25rem",
  color: theme.palette.text.primary,
}));

// Work experience data
const experiences = [
  {
    id: 4,
    company: "Gov BC",
    title: "Technical Project Management Intern @ Gov BC",
    duration: "May 2025 - Present",
    location: "Victoria, BC",
    description: [
      "Taking ownership of a portal modernization project supporting the Economic Sector",
    ],
    technologies: ["Azure DevOps", "PowerBI"],
  },
  {
    id: 1,
    company: "UBC CIC x Amazon Web Services",
    title: "Software Developer Intern @ UBC CIC x AWS",
    duration: "Jan 2024 - Aug 2024",
    location: "Vancouver, BC",
    description: [
      "Built a serverless AWS data pipeline (Glue, Athena, AppSync) that optimized 30+ years of university funding data",
      "Designed and developed an AI Learning Assistant infrastructure with AWS Amplify, Lambda, Cognito, and Bedrock, enabling authentication, user tracking, and LLM integration",
      "Managed the full SDLC with iterative testing and stakeholder feedback for continuous improvement",
    ],
    technologies: ["AWS", "TypeScript", "React", "Docker", "Git", "SQL"],
  },
  {
    id: 2,
    company: "Aurora Heat",
    title: "Product Designer @ Aurora Heat",
    duration: "Sep 2024 - Present",
    location: "Remote, Part-time",
    description: [
      "Redesigned product pages in Figma, increasing session duration by through UX focused design improvements",
      "Collaborated with marketing and development teams to align business goals with user needs and optimize product performance",
    ],
    technologies: ["Figma"],
  },
  {
    id: 3,
    company: "BCharity",
    title: "Software Developer Intern @ BCharity",
    duration: "May 2023 - Aug 2023",
    location: "Calgary, AB",
    description: [
      "Developed a decentralized collaboration platform connecting charities using TypeScript, React, and Lens Protocol",
      "Designed and implemented modern, responsive front-end components resulting in a 25% increase in user engagement metrics",
      "Integrated Web3 integrations with RESTful APIs, including response handling, state management and dynamic routing",
    ],
    technologies: ["Typescript", "APIs"],
  },
];

const ExperienceSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="experience" sx={{ py: 10, pl: 5 }}>
      <Container maxWidth="md">
        <SectionTitle variant="h2" component="h2">
          experience
        </SectionTitle>

        <Divider sx={{ mb: 2 }} />

        {experiences.map((exp) => (
          <React.Fragment key={exp.id}>
            <ExperienceAccordion
              expanded={expanded === `panel${exp.id}`}
              onChange={handleChange(`panel${exp.id}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${exp.id}-content`}
                id={`panel${exp.id}-header`}
              >
                <Stack direction="row" alignItems="center" spacing={0}>
                  <JobTitle sx={{ pl: 5 }}>{exp.title}</JobTitle>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ pl: 2 }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {exp.duration} | {exp.location}
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 1, mb: 0 }}>
                    Responsibilities:
                  </Typography>
                  <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
                    {exp.description.map((item, index) => (
                      <li key={index}>
                        <Typography variant="body2" paragraph>
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                    Technologies:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {exp.technologies.map((tech, index) => (
                      <Box
                        key={index}
                        sx={{
                          bgcolor: "rgba(137, 82, 146, 0.1)",
                          color: "primary.main",
                          px: 2,
                          py: 0.5,
                          borderRadius: 4,
                          fontSize: "0.85rem",
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </AccordionDetails>
            </ExperienceAccordion>
            <Divider />
          </React.Fragment>
        ))}
      </Container>
    </Box>
  );
};

export default ExperienceSection;
