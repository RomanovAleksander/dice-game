import { Box, Slider, RadioGroup, FormControlLabel, Radio, Stack } from '@mui/material';

import { BetType } from '@/types';
import { GAME_CONFIG } from '@/constants';

interface GameControlsProps {
  threshold: number;
  setThreshold: (val: number) => void;
  betType: BetType;
  setBetType: (val: BetType) => void;
  disabled?: boolean;
}

const getSliderMarks = () => {
  const marks: { value: number, label: string }[] = [
    { value: GAME_CONFIG.MIN_NUMBER, label: String(GAME_CONFIG.MIN_NUMBER) },
    { value: GAME_CONFIG.MAX_NUMBER, label: String(GAME_CONFIG.MAX_NUMBER) },
  ];

  for (let i = 20; i < GAME_CONFIG.MAX_NUMBER; i += 20) {
    marks.push({ value: i, label: '' });
  }

  return marks;
};

export const GameControls = ({
                               threshold,
                               setThreshold,
                               betType,
                               setBetType,
                               disabled = false
                             }: GameControlsProps) => (
  <Box sx={{ width: '100%' }}>
    <Stack
      direction="row"
      justifyContent="center"
      spacing={4}
      sx={{ mb: 4 }}
      role="radiogroup"
      aria-label="Bet type selection"
    >
      <RadioGroup
        row
        value={betType}
        onChange={(e) => setBetType(e.target.value as BetType)}
      >
        <FormControlLabel
          value={BetType.UNDER}
          control={<Radio />}
          label="Under"
          labelPlacement="start"
          disabled={disabled}
          sx={{ mr: 0, ml: 0 }}
        />
        <FormControlLabel
          value={BetType.OVER}
          control={<Radio />}
          label="Over"
          labelPlacement="start"
          disabled={disabled}
          sx={{ mr: 0 }}
        />
      </RadioGroup>
    </Stack>

    <Slider
      value={threshold}
      onChange={(_, value) => setThreshold(value as number)}
      valueLabelDisplay="auto"
      min={GAME_CONFIG.MIN_NUMBER}
      max={GAME_CONFIG.MAX_NUMBER}
      disabled={disabled}
      marks={getSliderMarks()}
    />
  </Box>
);
