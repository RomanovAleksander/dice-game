'use client';

import { Container, Paper, Button, Box, Stack } from '@mui/material';
import { useDiceGame } from '@/hooks/useDiceGame';
import { GameControls } from '@/components/GameControls';
import { HistoryTable } from '@/components/HistoryTable';
import { ResultAlert } from '@/components/ResultAlert';
import { MESSAGES } from '@/constants';

export default function DicePage() {
  const {
    threshold,
    setThreshold,
    betType,
    setBetType,
    play,
    currentResult,
    history
  } = useDiceGame();

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', p: 0 }}>
      <Paper elevation={0} sx={{ p: 2, width: '100%' }}>
        <Stack spacing={3} alignItems="center">

          <ResultAlert result={currentResult} />

          <Box
            sx={{
              height: 200,
              width: '100%',
              maxWidth: 320,
              bgcolor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem',
              fontWeight: 300,
              color: 'text.primary'
            }}
            role="status"
            aria-live="polite"
          >
            {currentResult?.resultNumber ?? '-'}
          </Box>

          <Box
            component="form"
            onSubmit={(e) => { e.preventDefault(); play(); }}
            sx={{ width: '100%' }}
          >
            <GameControls
              threshold={threshold}
              setThreshold={setThreshold}
              betType={betType}
              setBetType={setBetType}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 2,
                fontSize: '1.2rem',
                letterSpacing: '1px',
                background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)',
                boxShadow: '0 3px 5px 2px rgba(156, 39, 176, .3)',
              }}
            >
              {MESSAGES.PLAY_BUTTON}
            </Button>
          </Box>

          <HistoryTable history={history} />
        </Stack>
      </Paper>
    </Container>
  );
}
