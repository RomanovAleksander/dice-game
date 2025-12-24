import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

import { GameResult } from '@/types';
import { MESSAGES } from '@/constants';
import { formatGameTime } from '@/utils/formatDate';

interface HistoryTableProps {
  history: GameResult[];
}

export const HistoryTable = ({ history }: HistoryTableProps) => (
  <TableContainer component={Paper} elevation={0} sx={{ mt: 4 }} aria-label="Game history table">
    <Table stickyHeader size="small">
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Guess</TableCell>
          <TableCell>Result</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} align="center">
              <Typography variant="body2" color="text.secondary">
                {MESSAGES.NO_GAMES}
              </Typography>
            </TableCell>
          </TableRow>
        ) : (
          history.map((game) => (
            <TableRow key={game.id}>
              <TableCell>{formatGameTime(game.timestamp)}</TableCell>
              <TableCell>{game.betType} {game.threshold}</TableCell>
              <TableCell sx={{ color: game.isWin ? 'success.main' : 'error.main' }}>
                {game.resultNumber}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);
