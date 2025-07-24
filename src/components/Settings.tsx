import { useAppStore } from "@/services/store";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { useShallow } from "zustand/shallow";

export default function Settings() {
  const store = useAppStore(useShallow((state) => state));
  return (
    <Stack direction="row" spacing={2} mb={1}>
      <Stack>
        <Typography variant="body2" fontWeight="bold">
          Tough Multiplier
        </Typography>
        <ButtonGroup>
          <Button
            variant={store.sizeMultiplier === 1 ? "contained" : "outlined"}
            onClick={() => store.setsizeMultiplier(1)}
          >
            x1
          </Button>
          <Button
            variant={store.sizeMultiplier === 1.5 ? "contained" : "outlined"}
            onClick={() => store.setsizeMultiplier(1.5)}
          >
            x1.5
          </Button>
          <Button
            variant={store.sizeMultiplier === 2 ? "contained" : "outlined"}
            onClick={() => store.setsizeMultiplier(2)}
          >
            x2
          </Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <Typography variant="body2" fontWeight="bold">
          Blast
        </Typography>
        <ButtonGroup>
          <Button
            variant={!store.BlastTemplates ? "contained" : "outlined"}
            onClick={() => store.setBlastTemplates(false)}
          >
            Traditional
          </Button>
          <Button
            variant={store.BlastTemplates ? "contained" : "outlined"}
            onClick={() => store.setBlastTemplates(true)}
          >
            Templates
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
