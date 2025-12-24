import { Alert, AlertTitle, Fade, Box } from '@mui/material';

import { GameResult } from '@/types';
import { MESSAGES } from '@/constants';

interface ResultAlertProps {
  result: GameResult | null;
}

export const ResultAlert = ({ result }: ResultAlertProps) => {
  const getLoseMessage = (result: GameResult) => {
    return result.resultNumber > result.threshold
      ? MESSAGES.NUMBER_HIGHER
      : MESSAGES.NUMBER_LOWER;
  };

  return (
    <Box sx={{ minHeight: 76, width: '100%', display: 'flex', alignItems: 'center' }}>
      <Fade in={!!result} timeout={300}>
        <Box width='100%'>
          {result && (
            <Alert
              severity={result.isWin ? 'success' : 'error'}
              role="alert"
              sx={{
                width: '100%',
                borderRadius: '5px',
                color: '#fff',
                backgroundColor: result.isWin ? 'success.main' : 'error.main',
                '& .MuiAlert-icon': { color: '#fff' }
              }}
            >
              <AlertTitle m='0'>
                {result.isWin ? MESSAGES.WIN_TITLE : MESSAGES.LOSE_TITLE}
              </AlertTitle>
              {!result.isWin && getLoseMessage(result)}
            </Alert>
          )}
        </Box>
      </Fade>
    </Box>
  );
};
