import React from "react";
import { GitPullRequest, AlertCircle, Messages, Database, Files, Template, Stack3 } from "tabler-icons-react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}
const data = [
  { icon: <Files size={16} />, color: "teal", label: "Saved Resumes" },
  // { icon: <GitPullRequest size={16} />, color: "blue", label: "Pull Requests" },
  { icon: <Stack3 size={16} />, color: "yellow", label: "Draft Resumes" },
  { icon: <Template size={16} />, color: "grape", label: "Templates" },
  { icon: <Messages size={16} />, color: "violet", label: "Chat" },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
